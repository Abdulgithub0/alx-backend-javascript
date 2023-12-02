import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const dict = { photo: null, user: null };
  try {
    const obj = { photo: await uploadPhoto(), user: await createUser() };
    return obj;
  } catch (error) {
    return dict;
  }
}
