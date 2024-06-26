export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = 'true';
      resolve(response);
    }, 1000);
  });
}
