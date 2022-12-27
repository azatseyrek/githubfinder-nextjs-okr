const GIHUB_URL = process.env.GITHUB_URL;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const fetchSearchUsers = async (text) => {
  try {
    const response = await fetch(`${GIHUB_URL}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.log('fetching search users error', error);
  }
};

export const fetchUser = async (username) => {
  try {
    const response = await fetch(`${GIHUB_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('fetching user error', error);
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await fetch(`${GIHUB_URL}/users/${username}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('fetching user repos error', error);
  }
};



