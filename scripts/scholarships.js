import { scholarships } from '../data/scholarships.js';

const tableBody = document.getElementById('js-scholarship-rows');

function addScholarshipToTable(scholarshipList) {
  let scholarshipHtml = '';

  scholarshipList.forEach((scholarship) => {
    scholarshipHtml += `<tr>
      <td>${scholarship.name}</td>
      <td>${scholarship.description}</td>
      <td>${scholarship.minGPA}</td>
      <td>${scholarship.amount}</td>
    </tr>`;
  });
  return scholarshipHtml;
}

document.addEventListener('DOMContentLoaded', () => {
  tableBody.innerHTML = addScholarshipToTable(scholarships);
});
