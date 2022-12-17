import {createContext, useReducer} from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GIHUB_URL = process.env.GITHUB_URL;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchSearchUsers = async (text) => {
    setLoading();
    const response = await fetch(`${GIHUB_URL}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    dispatch({type: 'GET_SEARCH_USERS', payload: data.items});
    localStorage.setItem('users', JSON.stringify(data.items));
  };
  const fetchUser = async (username) => {
    setLoading();
    const response = await fetch(`${GIHUB_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const data = await response.json();
      dispatch({type: 'GET_USER', payload: data});
    }
  };

  // Get User Repos
  const fetchUserRepos = async (username) => {
    setLoading();
    const response = await fetch(`${GIHUB_URL}/users/${username}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    dispatch({type: 'GET_USER_REPOS', payload: data});
  };

  // Set Loading
  const setLoading = () => {
    dispatch({type: 'SET_LOADING'});
  };
  // Clear Users
  const clearUsers = () => {
    localStorage.removeItem('users');
    dispatch({type: 'CLEAR_USERS'});
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        clearUsers,
        fetchSearchUsers,
        fetchUser,
        fetchUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
