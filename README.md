# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
#   m y - c o u r s e - r o s t e r - N i z a m C h y 

## Projects Fetures
1) Any one can select course
2) Maximum Credit hours is 20
3) No one can select a course for multiple times

##Discussion about how I managed the state in my assignment project.

State is updated using the setAllCourses, setSelectedCourses, setRemaining, and setTotalCredit functions provided by the useState hook. These functions are called within the handleSelectCourse function when a user selects a course.

For example, when a user selects a course, the code does the following:

Checks if the course has already been selected.
Calculates the total credit hours based on the selected courses.
Updates the totalCredit and remaining state variables.
Adds the selected course to the selectedCourses array.
State changes trigger re-renders of the component, ensuring that the UI reflects the updated state.

Additionally, the Cart component receives the selectedCourses, remaining, and totalCredit as props and uses them to display information about the selected courses and remaining credit hours in the cart section.

Overall, the state management in this React project allows for tracking and updating course selections and displaying relevant information to the user.
 
 
