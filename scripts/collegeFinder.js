import { colleges } from '../data/colleges.js';
// import { fetchCollege } from './collegeApi.js';

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
  const colleges2 = await getColleges();
  if (colleges2) {
    tableBody.innerHTML = addCollegesToTable(colleges2);
  } else {
    tableBody.innerHTML = addCollegesToTable(colleges);
  }
});

function fetchUrl() {
  const stateInput = document.querySelector('#js-state-search-box').value;
  const cityInput = document.querySelector('#js-city-search-box').value;
  let baseUrl = `http://localhost:8080/colleges`;
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
