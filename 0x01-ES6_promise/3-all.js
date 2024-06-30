import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Promise.all([uploadPhoto(), createUser()])
        .then((response) => {
          const [photoResult, userResult] = response;
          const body = photoResult.body;
          const firstName = userResult.firstName;
          const lastName = userResult.lastName;
          console.log(body, firstName, lastName);
          resolve(response);
        })
        .catch((error) => {
          const rejected = 'Signup system offline';
          console.log(rejected);
        });
    }, 1000);
  });
}
