import { scholarships } from '../data/scholarships.js';

const tableBody = document.getElementById('js-scholarship-rows');

function addScholarshipToTable(scholarshipList) {
  let scholarshipHtml = '';

  scholarshipList.forEach((scholarship) => {
    scholarshipHtml += `<tr>
      <td data-label="Name">${scholarship.name}</td>
      <td data-label="Description">${scholarship.description}</td>
      <td data-label="Min GPA">${scholarship.minGPA}</td>
      <td data-label="Amount">${scholarship.amount}</td>
    </tr>`;
  });
  return scholarshipHtml;
}

document.addEventListener('DOMContentLoaded', () => {
  tableBody.innerHTML = addScholarshipToTable(scholarships);
});
