import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      result.forEach((val) => {
        if (val.status === 'fulfilled') arr.push(val);
        else arr.push({ status: val.status, value: val.reason.message });
      });
      return arr;
    });
}
