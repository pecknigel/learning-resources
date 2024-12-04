// #!/usr/bin/env node

import dotenv from 'dotenv';

(async () => {
  dotenv.config();
  const [error, data] = await fetchData(
    process.env.LIBRARY_CMS_URL,
    process.env.LIBRARY_CMS_API_KEY
  );
  if (error) {
    console.error('Failed to load data', error);
    return;
  }
  console.log('Data fetched successfully', data);
})();

async function fetchData(url, apiKey) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  if (!response.ok) {
    const errorData = await response.json();
    if (!(errorData.error.status && errorData.error.message)) {
      console.error("Unrecognised error", errorData);
      throw new Error("Unrecognised error");
    }
    return [`${errorData.error.status} - ${errorData.error.message}`, undefined];
  }
  return [undefined, await response.json()];
}
