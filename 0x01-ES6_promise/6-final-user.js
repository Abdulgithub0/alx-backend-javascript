import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup(firstName, lastName, fileName) {
  let arr = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => result.forEach((val) => {
      if (val.status === 'fullfiled') arr.push(v);
      else arr.push({ status: val.status, value: val.reason.message });
      return arr;
    }));
}
