// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

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
    const isExist = selectedCourses.find((item) => item.id == course.id);
    let count = course.credit_hours;

    if (isExist) {
      alert("Already selected");
    } else {
      selectedCourses.forEach((item) => {
        count += item.credit_hours;
      });
      // console.log(count);
      const totalRemaining = 20 - count;

      if (count > 20) {
        return alert("Reached the maximum limit of credit hours!");
      } else {
        setTotalCredit(count);
        setRemaining(totalRemaining);
        setSelectedCourses([...selectedCourses, course]);
      }
    }
  };

  console.log(selectedCourses);

  return (
    <div className="container">
      <h2>Course Registration</h2>
      <div className="home-container">
        <div className="card-container">
          {allCourses.map((course) => (
            // eslint-disable-next-line react/jsx-key
            <div key={course.id} className="card">
              <div className="card-img">
                <img className="photo" src={course.image} alt="" />

                <h3>{course.name}</h3>
                <p>
                  <small>{course.description}</small>
                </p>
                <div className="info">
                  {/* <img className='icons' src="https://i.ibb.co/Fh8cnD9/image-20.png" alt="" /> */}
                  <p>$ Price : {course.price}</p>
                  <p>Credit : {course.credit_hours}hr</p>
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
    </div>
  );
};

export default Home;
