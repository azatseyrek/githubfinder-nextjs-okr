import {useRouter} from 'next/router';
import React, {useContext, useState} from 'react';
import AlertContext from '../../context/alert/AlertContext';

const UserSearch = () => {
  const [text, setText] = useState('');
  const {setAlert} = useContext(AlertContext);

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'info');
    } else {
      router.push(`/${text}`);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8  p-12">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="relative max-w-lg ">
            <input
              type="text"
              className="w-full text-gray-700 text-lg font-semibold pr-40 bg-neutral bg-opacity-30 input input-lg  border-none rounded-r-xl focus:outline focus:outline-2 focus:outline-offset-8 focus:outline-secondary-focus placeholder-secondary-content placeholder-opacity-30"
              placeholder="Search for a user"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="absolute  bg-neutral-focus top-o right-0 rounded-l-none w-36 btn btn-lg hover:text-secondary active:no-animation "
            >
              Go
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserSearch;
