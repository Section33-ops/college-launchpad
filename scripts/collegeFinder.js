import { colleges } from '../data/colleges.js';

const tableBody = document.getElementById('js-college-rows');

function addCollegesToTable(collegeList) {
  let collegeHtml = '';

  collegeList.forEach((college) => {
    collegeHtml += `<tr>
      <td>${college.name}</td>
      <td>${college.city}, ${college.state}</td>
      <td>${college.avgGPA}</td>
      <td>${college.programs}</td>
    </tr>`;
  });
  return collegeHtml;
}

document.addEventListener('DOMContentLoaded', () => {
  tableBody.innerHTML = addCollegesToTable(colleges);
});
