import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((details) => console.log(`${details[0].body} ${details[1].firstName} ${details[1].lastName}`))
    .catch(() => console.error('Signup system offline'));
}
