#!/usr/bin/env node

import dotenv from 'dotenv';

(async () => {
  dotenv.config();
  const patternData = await fetchPatterns();
  const patternNames = patternData.data.map(el => el.title);
  console.log('Pattern Names:', patternNames);
})();

async function fetchPatterns() {
  const [error, patternsData] = await fetchData(
    '/patterns',
    process.env.LIBRARY_CMS_API_KEY
  );
  if (error) {
    console.error('Failed to load data', error);
    throw new Error("Failed to load data");
  }
  return patternsData;
}

async function fetchData(url, apiKey) {
  console.log(`Fetching "${url}"`);
  const response = await fetch(`${process.env.LIBRARY_CMS_URL}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
  });
  const responseData = await response.json();
  if (!response.ok) {
    if (!(responseData.error.status && responseData.error.message)) {
      console.error("Unrecognised error", responseData);
      throw new Error("Unrecognised error");
    }
    return [`${responseData.error.status} - ${responseData.error.message}`];
  }
  return [undefined, responseData];
}
