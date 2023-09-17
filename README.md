# Course Registration App

## Overview

This is a course registration web application built using React. It allows users to select and register for courses, keeping track of their selected courses' credit hours and remaining credit hours.

## Features

- **Course Selection**: Users can browse through a list of available courses, view course details, and select courses they want to register for.

- **Credit Hour Management**: The app keeps track of the total credit hours selected by the user and displays the remaining credit hours, preventing users from exceeding the maximum limit.

- **Course Details**: Course details such as name, description, price, and credit hours are displayed for each course.

## State Management

State management is a crucial aspect of this project, and it is handled using React's built-in `useState` hook and `Context API`. Here's how state is managed in the project:

### `Home` Component

- `allCourses`: This state variable holds the list of all available courses. It is initially empty and is populated with course data fetched from a JSON file using the `useEffect` hook.

- `selectedCourses`: This state variable stores the courses that the user has selected for registration. It is initialized as an empty array and is updated when the user selects a course.

- `remaining`: This state variable tracks the remaining credit hours that the user can register for. It starts with a value of 20 and is updated when courses are selected or deselected.

- `totalCredit`: This state variable holds the total credit hours of the selected courses. It is updated whenever a course is selected or deselected.

- The `handleSelectCourse` function is responsible for managing the state related to course selection. It checks if a course is already selected, calculates the total credit hours, and updates the state accordingly.

### `Cart` Component

- The `Cart` component receives the `selectedCourses`, `remaining`, and `totalCredit` as props.

- It displays the user's selected courses, the remaining credit hours, and the total credit hours.


## Used Technologies

### Front End

- **React**: The project is built using React, a popular JavaScript library for building user interfaces.

- **Context API**: React Context API is used for state management, providing a centralized store for data used throughout the application.

- **Conditional Rendering**: Conditional rendering techniques are used to display different content based on user interactions and state.

- **Render Props**: Render props pattern is employed for component composition and sharing functionality.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.


