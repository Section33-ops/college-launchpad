function fetchUrl() {
  const stateInput = document.querySelector('#js-state-search-box').value;
  const cityInput = document.querySelector('#js-city-search-box').value;
  let baseUrl = `https://college-launchpad-backend.onrender.com/colleges`;

  const url = new URL(baseUrl);

  if (stateInput) url.searchParams.set('stateParam', stateInput);
  if (cityInput) url.searchParams.set('cityParam', cityInput);

  return url.toString();
}

export async function getColleges() {
  const collegeListTable = document.querySelector('.college-table');
  const loadingText = document.querySelector('.loading');

  try {
    collegeListTable.classList.add('hidden');
    loadingText.classList.remove('hidden');

    const response = await fetch(fetchUrl());

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data = await response.json();
    console.log(data);
    return data.colleges;
  } catch (error) {
    console.log(error);
  }
}

let currentPage = 0;
export async function nextPage() {
  currentPage += 1;

  const url = new URL(fetchUrl());
  url.searchParams.set('pageParam', currentPage);
  console.log(url.toString());

  const collegeListTable = document.querySelector('.college-table');
  const loadingText = document.querySelector('.loading');

  try {
    collegeListTable.classList.add('hidden');
    loadingText.classList.remove('hidden');

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data = await response.json();
    console.log(data.metaData);
    return data.colleges;
  } catch (error) {
    console.log(error);
  }
}

export async function previousPage() {
  currentPage -= 1;

  const url = new URL(fetchUrl());
  url.searchParams.set('pageParam', currentPage);
  console.log(url.toString());

  const collegeListTable = document.querySelector('.college-table');
  const loadingText = document.querySelector('.loading');

  try {
    collegeListTable.classList.add('hidden');
    loadingText.classList.remove('hidden');

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data = await response.json();
    console.log(data.metaData);
    return data.colleges;
  } catch (error) {
    console.log(error);
  }
}
