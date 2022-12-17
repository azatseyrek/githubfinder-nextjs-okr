import {useContext} from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../Spinner';
import UserItem from './UserItem';

const UserResults = () => {
  const {loading} = useContext(GithubContext);

  // const localUsers = localStorage.getItem('users');

  // const users = JSON.parse(localUsers);

  const users = [];

  if (loading) {
    return (
      <div className="flex justify-center ">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserResults;
