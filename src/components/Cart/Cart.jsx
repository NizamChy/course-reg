import { FaTrash, FaClock, FaDollarSign } from "react-icons/fa";

const Cart = ({
  selectedCourses,
  remaining,
  totalCredit,
  totalPrice,
  onRemoveCourse,
}) => {
  return (
    <div className="cart">
      <div className="cart-header">
        <h3>Course Summary</h3>
        <div className="remaining-hours">
          <FaClock className="icon" />
          <span>Credit Hour Remaining: {remaining} hr</span>
        </div>
      </div>

      <hr className="divider" />

      <div className="course-list">
        <h4>Selected Courses ({selectedCourses.length})</h4>
        {selectedCourses.length === 0 ? (
          <p className="empty-message">No courses selected yet</p>
        ) : (
          <ul>
            {selectedCourses.map((course) => (
              <li key={course.id} className="course-item">
                <span className="course-name">{course.name}</span>
                <div className="course-actions">
                  <span className="course-credit">{course.credit_hours}hr</span>
                  <button
                    onClick={() => onRemoveCourse(course.id)}
                    className="remove-btn"
                    aria-label={`Remove ${course.name}`}
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr className="divider" />

      <div className="total-credit">
        <h4>Total Credit Hour: {totalCredit}hr</h4>
      </div>

      <hr className="divider" />

      <div className="total-price">
        <FaDollarSign className="icon" />
        <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default Cart;
