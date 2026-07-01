import {
  addCourseToTable,
  clearInputFields,
  calculateGPA,
  checkUserInput,
} from './modules/gpaCalculatorFunctions.js';

const courseNameInput = document.getElementById('course-name');
const gradeInput = document.getElementById('grade');
const creditHoursInput = document.getElementById('credit-hours');
const addCourseButton = document.getElementById('add-course-button');
const calculateButton = document.getElementById('js-calculate-button');
const courseRows = document.getElementById('course-rows');
const inputFeedback = document.getElementById('js-input-feedback');

const courses = [];

const gradeScale = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0,
};

addCourseButton.addEventListener('click', (event) => {
  event.preventDefault();

  const newCourse = {
    course: courseNameInput.value,
    grade: gradeInput.value,
    creditHours: creditHoursInput.value,
  };

  if (
    checkUserInput(
      courseNameInput,
      creditHoursInput,
      inputFeedback,
      newCourse,
    ) === false
  ) {
    return false;
  }
  addCourseToTable(
    courseRows,
    courses,
    newCourse,
    courseNameInput,
    gradeInput,
    creditHoursInput,
  );

  console.log(courses);
});

calculateButton.addEventListener('click', (event) => {
  event.preventDefault();

  calculateGPA(courses, gradeScale);
});
