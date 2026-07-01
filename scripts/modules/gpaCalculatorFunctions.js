export function addCourseToTable(
  courseRows,
  courses,
  newCourse,
  courseNameInput,
  gradeInput,
  creditHoursInput,
) {
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
  courses.push(newCourse);
  clearInputFields(courseNameInput, gradeInput, creditHoursInput);
}

export function clearInputFields(
  courseNameInput,
  gradeInput,
  creditHoursInput,
) {
  courseNameInput.value = '';
  gradeInput.value = 'A';
  creditHoursInput.value = '';
}

export function calculateGPA(courses, gradeScale) {
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

  if (totalCredit === 0) {
    gpa = 0.0;
  } else {
    gpa = totalPoints / totalCredit;
  }

  console.log(coursesWithGradeValue);
  console.log(totalPoints);
  console.log(totalCredit);
  console.log(gpa);

  document.getElementById('gpa-result').innerHTML = `Your GPA is ${gpa}`;
  return `Your GPA is ${gpa}`;
}

export function checkUserInput(
  courseNameInput,
  creditHoursInput,
  inputFeedback,
  newCourse,
) {
  if (!courseNameInput.value && !creditHoursInput.value) {
    inputFeedback.innerHTML = 'Please enter a course and credit hours';
    return false;
  }
  if (!courseNameInput.value) {
    inputFeedback.innerHTML = 'Please enter a course';
    return false;
  }
  if (!creditHoursInput.value) {
    inputFeedback.innerHTML = 'Please enter credit hours';
    return false;
  }

  return true;
}
