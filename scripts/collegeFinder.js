import { colleges } from '../data/colleges.js';

const tableBody = document.getElementById('js-college-rows');

function addCollegesToTable(collegeList) {
  let collegeHtml = '';

  collegeList.forEach((college) => {
    collegeHtml += `<tr>
      <td data-label="College Name">${college.name}</td>
      <td data-label="Location">${college.city}, ${college.state}</td>
      <td data-label="Average GPA">${college.avgGPA}</td>
      <td data-label="Programs">${college.programs}</td>
    </tr>`;
  });
  return collegeHtml;
}

document.addEventListener('DOMContentLoaded', () => {
  tableBody.innerHTML = addCollegesToTable(colleges);
});
