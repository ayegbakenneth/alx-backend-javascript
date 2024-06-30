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
      }, 1000);
    })
      .then((response) => {
        console.log('Got a response from the API')
        }
      .catch((rejected) => {
        console.log('Error:' error)
        }
}
