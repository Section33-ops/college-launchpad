import { colleges } from '../data/colleges.js';
// import { fetchCollege } from './collegeApi.js';

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
  const stateSearchInput = document.querySelector('#js-state-search-box').value;
  const citySearchInput = document.querySelector('#js-city-search-box').value;
  const colleges2 = await getColleges();
  if (colleges2) {
    isLoading = false;
    loadingText.classList.add('hidden');
    collegeListTable.classList.remove('hidden');

    tableBody.innerHTML = addCollegesToTable(colleges2);
  } else {
    tableBody.innerHTML = addCollegesToTable(colleges);
  }
});

function fetchUrl() {
  const stateInput = document.querySelector('#js-state-search-box').value;
  const cityInput = document.querySelector('#js-city-search-box').value;
  let baseUrl = `https://college-launchpad-backend.onrender.com/colleges`;
  if (stateInput && cityInput) {
    baseUrl += `?stateParam=${stateInput}&cityParam=${cityInput}`;
    console.log(baseUrl);
    return baseUrl;
  }
  if (stateInput) {
    baseUrl += `?stateParam=${stateInput}`;
    console.log(baseUrl);
    return baseUrl;
  }
  if (cityInput) {
    baseUrl += `?cityParam=${cityInput}`;
    console.log(baseUrl);
    return baseUrl;
  }

  console.log(baseUrl);
  return baseUrl;
}

async function getColleges() {
  try {
    isLoading = true;
    collegeListTable.classList.add('hidden');
    loadingText.classList.remove('hidden');

    const response = await fetch(fetchUrl());

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
