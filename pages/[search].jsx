import {useContext} from 'react';
import {useRouter} from 'next/router';
import UserItem from '../components/users/UserItem';
import AlertContext from '../context/alert/AlertContext';
import {fetchSearchUsers} from '../services';

const UserResults = (props) => {
  const {users} = props;
  const {setAlert} = useContext(AlertContext);
  const router = useRouter();
  // if (users.length === 0) {
  //   setAlert('No users found', 'error');
  //   router.push('/');
  // }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 px-8">
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserResults;

export const getServerSideProps = async (context) => {
  const query = context.query.search;
  const users = await fetchSearchUsers(query);

  return {
    props: {
      users,
    },
  };
};
