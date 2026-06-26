const courseNameInput = document.getElementById('course-name');
const gradeInput = document.getElementById('grade');
const creditHoursInput = document.getElementById('credit-hours');
const addCourseButton = document.getElementById('add-course-button');
const calculateButton = document.getElementById('js-calculate-button');
const courseRows = document.getElementById('course-rows');

const courses = [];

const gradeScale = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0,
};

function addCourseToTable(newCourse) {
  courseRows.insertAdjacentHTML(
    'beforeend',
    `
    <tr>
      <td>${newCourse.course}</td>
      <td>${newCourse.grade}</td>
      <td>${newCourse.creditHours}</td>
    </tr>
  `,
  );
}

function clearInputFields() {
  courseNameInput.value = '';
  gradeInput.value = 'A';
  creditHoursInput.value = '';
}

function calculateGPA(courses) {
  const coursesWithGradeValue = [];
  let gradeLetter = '';
  let totalPoints = 0;
  let totalCredit = 0;
  let gpa = 0;

  courses.forEach((course) => {
    gradeLetter = course.grade;
    coursesWithGradeValue.push({ ...course, grade: gradeScale[gradeLetter] });
  });

  coursesWithGradeValue.forEach((course) => {
    totalPoints += course.grade * course.creditHours;
    totalCredit += Number(course.creditHours);
  });

  gpa = totalPoints / totalCredit;

  console.log(coursesWithGradeValue);
  console.log(totalPoints);
  console.log(totalCredit);
  console.log(gpa);

  document.getElementById('gpa-result').innerHTML = `Your GPA is ${gpa}`;
  return `Your GPA is ${gpa}`;
}

addCourseButton.addEventListener('click', (event) => {
  event.preventDefault();

  const newCourse = {
    course: courseNameInput.value,
    grade: gradeInput.value,
    creditHours: creditHoursInput.value,
  };

  courses.push(newCourse);

  addCourseToTable(newCourse);

  clearInputFields();

  console.log(courses);
});

calculateButton.addEventListener('click', (event) => {
  event.preventDefault();

  calculateGPA(courses);
});
