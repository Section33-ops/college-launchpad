import { colleges } from '../data/colleges.js';
import { fetchCollege } from './collegeApi.js';

const tableBody = document.getElementById('js-college-rows');

const searchButton = document.querySelector('#js-search-button');

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
  const stateSearchInput = document.querySelector('#js-state-search-box').value;
  const citySearchInput = document.querySelector('#js-city-search-box').value;
  const colleges2 = await fetchCollege(stateSearchInput, citySearchInput);
  tableBody.innerHTML = addCollegesToTable(colleges2);
});
