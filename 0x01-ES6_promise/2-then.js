export default function getFullResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { status: 200, body: 'Success' };
      const rejected = new Error('');

      if (promise) {
        resolve(response);
      } else {
        reject(rejected);
      }

      console.log('Got a response from the API');
    }, 1000);
  });
}
