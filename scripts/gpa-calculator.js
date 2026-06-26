const courseNameInput = document.getElementById('course-name');
const gradeInput = document.getElementById('grade');
const creditHoursInput = document.getElementById('credit-hours');
const addCourseButton = document.getElementById('add-course-button');
const courseRows = document.getElementById('course-rows');

const courses = [];

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
