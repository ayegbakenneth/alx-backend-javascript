import {uploadPhoto, createUser} from './utils.js'
export default function handleProfileSignup() {
        return new Promise((resolve, reject) =>{
                setTimeout(() => {
                        const responseBody = uploadPhoto()
                        const firstNameLastName = createUser()
                        const body = responseBody.body
                        const firstName = firstNameLastName.firstName
                        const lastName = firstNameLastName.lastName
                        console.log(resolve(body, firstName, lastName))
                        const rejected = 'Signup system offline'
			console.log(reject(rejected))
		}, 1000)
	})
}
