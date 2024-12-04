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
      "Authorization": `Bearer ${apiKey}`,
    },
  });
  const responseData = await response.json();
  if (!response.ok) {
    if (!(responseData.error.status && responseData.error.message)) {
      console.error("Unrecognised error", responseData);
      throw new Error("Unrecognised error");
    }
    return [`${responseData.error.status} - ${responseData.error.message}`, undefined];
  }
  return [undefined, responseData];
}
