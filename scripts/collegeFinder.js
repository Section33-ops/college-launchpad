import { colleges } from '../data/colleges.js';
import { getColleges } from './collegeApi.js';

const tableBody = document.getElementById('js-college-rows');

const searchButton = document.querySelector('#js-search-button');
const collegeListTable = document.querySelector('.college-table');
const loadingText = document.querySelector('.loading');

let isLoading = false;

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

searchButton.addEventListener('click', async () => {
  const colleges = await getColleges();
  if (colleges) {
    isLoading = false;
    loadingText.classList.add('hidden');
    collegeListTable.classList.remove('hidden');

    tableBody.innerHTML = addCollegesToTable(colleges);
  } else {
    tableBody.innerHTML = addCollegesToTable(colleges);
  }
});
