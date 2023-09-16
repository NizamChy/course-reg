/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Cart = ({ selectedCourses, remaining, totalCredit }) => {
  // eslint-disable-next-line react/prop-types
  console.log(selectedCourses);
  return (
    <div>
      <h3 style={{ color: '#2F80ED' }}>Credit Hour Remaining {remaining} hr</h3>
      <hr />

      <h4>Course Name</h4>
      {selectedCourses.map((course) => (
        // eslint-disable-next-line react/jsx-key
 
        <li key={course.id} style={{ listStyleType: "decimal", textAlign: 'left' }}>{course.name}
        </li>
        
      ))}
      <hr />
      <h3>Total Credit Hour : {totalCredit}</h3>
      <hr />
    </div>
  );
};

export default Cart;
