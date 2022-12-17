import React, {useContext, useState} from 'react';
import AlertContext from '../../context/alert/AlertContext';
import GithubContext from '../../context/github/GithubContext';

const UserSearch = () => {
  const [text, setText] = useState('');
  const {loading} = useContext(GithubContext);
  const {clearUsers, users, fetchSearchUsers} = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);

  // const localUsers = JSON.parse(localStorage.getItem('users'));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'warning');
    } else {
      fetchSearchUsers(text);
      setText('');
    }
  };

  const handleClear = () => {
    clearUsers();
  };
  if (loading) {
    return;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 ">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full text-primary-focus text-lg font-semibold pr-40 bg-neutral bg-opacity-30 input input-lg  border-none rounded-r-xl focus:outline focus:outline-2 focus:outline-offset-8 focus:outline-secondary-focus placeholder-secondary-content placeholder-opacity-30"
                placeholder="Search for a user"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="submit"
                className="absolute bg-neutral-focus top-o right-0 rounded-l-none w-36 btn btn-lg hover:text-primary active:no-animation "
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* {(localUsers || users.length > 0) && (
        <div>
          <button
            onClick={handleClear}
            className="btn btn-ghost btn-lg text-primary "
          >
            Clear
          </button>
        </div>
      )} */}
    </div>
  );
};

export default UserSearch;
