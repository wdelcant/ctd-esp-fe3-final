import axios from 'axios';

export const getDentists = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getDentistById = async id => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
