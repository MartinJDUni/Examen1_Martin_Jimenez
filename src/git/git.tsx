import axios from 'axios';

const getRepositories = async () => {
  const response = await axios.get(
    'https://api.github.com/users/MartinJDUni/repos'
  );

  return response.data;
};

export default getRepositories;