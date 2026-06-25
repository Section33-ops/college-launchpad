const courseNameInput = document.getElementById('course-name');
const gradeInput = document.getElementById('grade');
const creditHoursInput = document.getElementById('credit-hours');
const addCourseButton = document.getElementById('add-course-button');

const courses = [];

addCourseButton.addEventListener('click', (event) => {
  event.preventDefault();
  courses.push({
    course: courseNameInput.value,
    grade: gradeInput.value,
    creditHours: creditHoursInput.value,
  });
  courseNameInput.value = '';
  gradeInput.value = 'A';
  creditHoursInput.value = '';
  // console.log(courses);

  for (const course of courses) {
    console.log(course.course);
  }
});
