// #!/usr/bin/env node

import dotenv from 'dotenv';

dotenv.config();

(async () => {
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
    const errorMessage = (errorData.error.status && errorData.error.message)
      ? `${errorData.error.status} - ${errorData.error.message}`
      : '';
    if (errorMessage) {
      return [errorMessage, undefined];
    } else {
      console.error("Unrecognised error", errorData);
      throw new Error("Unrecognised error");
    }
  }
  return [undefined, await response.json()];
}
