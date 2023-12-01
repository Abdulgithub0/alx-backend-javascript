import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let details = '';
  uploadPhoto()
    .then((photo) => { details += photo.body; })
    .catch((error) => console.log('Signup system offline'));
  createUser()
    .then((user) => console.log(`${details} ${user.firstName} ${user.lastName}`))
    .catch((error) => console.log('Signup system offline'));
}
