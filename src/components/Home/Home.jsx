import "./Home.css";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setAllCourses(data);
      } catch (error) {
        toast.error("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id === course.id);

    if (isExist) {
      toast.warning("This course is already selected");
      return;
    }

    const newTotalCredit = totalCredit + course.credit_hours;
    const newRemaining = remaining - course.credit_hours;

    if (newTotalCredit > 20) {
      toast.error("You've reached the maximum credit hours limit (20 hrs)");
      return;
    }

    setTotalCredit(newTotalCredit);
    setRemaining(newRemaining);
    setTotalPrice(totalPrice + course.price);
    setSelectedCourses([...selectedCourses, course]);
    toast.success("Course added successfully");
  };

  const handleRemoveCourse = (courseId) => {
    const courseToRemove = selectedCourses.find(
      (course) => course.id === courseId
    );
    if (!courseToRemove) return;

    setTotalCredit(totalCredit - courseToRemove.credit_hours);
    setRemaining(remaining + courseToRemove.credit_hours);
    setTotalPrice(totalPrice - courseToRemove.price);
    setSelectedCourses(
      selectedCourses.filter((course) => course.id !== courseId)
    );
    toast.info("Course removed");
  };

  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <header className="header">
        <h1>Course Registration</h1>
        <p>Select your courses for the semester</p>
      </header>

      <div className="home-container">
        <main className="card-container">
          {loading ? (
            <div className="loading-spinner">Loading courses...</div>
          ) : (
            allCourses.map((course) => (
              <div key={course.id} className="card">
                <div className="card-img">
                  <img className="photo" src={course.image} alt={course.name} />
                </div>
                <div className="card-content">
                  <h3>{course.name}</h3>
                  <p className="description">{course.description}</p>
                  <div className="info">
                    <p>
                      <strong>Price:</strong> ${course.price.toFixed(2)}
                    </p>
                    <p>
                      <strong>Credit:</strong> {course.credit_hours}hrs
                    </p>
                  </div>
                  <button
                    onClick={() => handleSelectCourse(course)}
                    className="card-btn"
                    disabled={
                      remaining < course.credit_hours &&
                      !selectedCourses.some((c) => c.id === course.id)
                    }
                  >
                    {selectedCourses.some((c) => c.id === course.id)
                      ? "Selected"
                      : "Select"}
                  </button>
                </div>
              </div>
            ))
          )}
        </main>

        <aside className="cart-container">
          <Cart
            selectedCourses={selectedCourses}
            remaining={remaining}
            totalCredit={totalCredit}
            totalPrice={totalPrice}
            onRemoveCourse={handleRemoveCourse}
          />
        </aside>
      </div>
    </div>
  );
};

export default Home;
