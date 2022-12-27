import Image from 'next/image';
import Link from 'next/link';
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa';
import RepoList from '../../components/repos/RepoList';
import {fetchUser, fetchUserRepos} from '../../services';

const User = (props) => {
  const {user, repos} = props;

  const {
    login,
    name,
    type,
    avatar_url,
    location,
    bio,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link href="/" className="btn btn-ghost">
            Back to search
          </Link>
        </div>

        <div className="px-8 grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <Image
                  width={500}
                  height={500}
                  layout="responsive"
                  src={avatar_url}
                  alt={login}
                />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p className="flex-grow-0">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-primary">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <Link
                  className="btn btn-outline"
                  href={html_url}
                  target="_blank"
                >
                  Github Profile
                </Link>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md ">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md ">Twitter</div>
                  <div className="text-lg stat-value">
                    <Link
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                    >
                      {twitter_username}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-gray-500">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-stone-500">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;

export const getServerSideProps = async (context) => {
  const {username} = context.params;

  const user = await fetchUser(username);

  const reposRes = await fetchUserRepos(username);

  return {
    props: {
      user,
      repos: reposRes,
    },
  };
};
