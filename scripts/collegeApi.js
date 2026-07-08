import { apiKey } from './config.js';

export async function fetchCollege(state, city) {
  const colleges = [];
  const url = getUrl(state, city);
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data = await response.json();

    data.results.forEach((college) => {
      colleges.push({
        id: college.school.id,
        name: college.school.name,
        zipCode: college.school.zip,
        city: college.school.city,
        state: college.school.state,
        avgGPA: 'not available',
        programs: 'not available',
      });
    });

    // console.log(colleges);
    console.log(data);
    console.log('   ');
    console.log(data.results);
    return colleges;
  } catch (error) {
    console.log(error);
    return [];
  }
}

function getUrl(state, city) {
  let baseUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}`;
  if (state && city) {
    baseUrl += `&school.state=${state}&school.city=${city}`;
    return baseUrl;
  }
  if (state) {
    baseUrl += `&school.state=${state}`;
  }
  if (city) {
    baseUrl += `&school.city=${city}`;
  }

  return baseUrl;
}
