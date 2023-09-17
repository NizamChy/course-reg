// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id === course.id);
    let count = course.credit_hours;

    if (isExist) {
      toast.warning("Already selected");
    } else {
      selectedCourses.forEach((item) => {
        count += item.credit_hours;
      });

      const totalRemaining = 20 - count;

      if (count > 20) {
        toast.error("Reached the maximum limit of credit hours!");
      } else {
        setTotalCredit(count);
        setRemaining(totalRemaining);
        setSelectedCourses([...selectedCourses, course]);
      }
    }
  };

  return (
    <div className="container">
      <h2>Course Registration</h2>
      <div className="home-container">
        <div className="card-container">
          {allCourses.map((course) => (
            <div key={course.id} className="card">
              <div className="card-img">
                <img className="photo" src={course.image} alt="" />
                <h3>{course.name}</h3>
                <p>
                  <small>{course.description}</small>
                </p>
                <div className="info">
                  <p>$ Price: {course.price}</p>
                  <p>Credit: {course.credit_hours}hr</p>
                </div>
                <button
                  onClick={() => handleSelectCourse(course)}
                  className="card-btn "
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart">
          <Cart
            selectedCourses={selectedCourses}
            remaining={remaining}
            totalCredit={totalCredit}
          ></Cart>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
