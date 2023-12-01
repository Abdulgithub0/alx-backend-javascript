import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let details = '';
  uploadPhoto()
    .then((photo) => { details += photo.body; })
    .catch(() => console.error('Signup system offline'));
  createUser()
    .then((user) => console.log(`${details} ${user.firstName} ${user.lastName}`))
    .catch(() => console.error('Signup system offline'));
}
