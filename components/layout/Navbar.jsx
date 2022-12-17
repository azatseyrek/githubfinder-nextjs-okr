import {FaGithub} from 'react-icons/fa';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Navbar = ({title}) => {
  const router = useRouter();
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex-none px-2 mx-2 group">
          <FaGithub
            onClick={() => router.push('/')}
            className="inline pr-2 text-5xl transition-all hover: cursor-pointer  group-active:text-4xl"
          />
          <Link
            href="/"
            className="text-lg font-bold align-middle hover:text-primary-content transition-all active:text-sm"
          >
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2 ">
          <div className="flex justify-end h-full gap-8">
            <Link
              href="/"
              className="btn btn-ghost btn-sm rounded-btn hover:text-primary-content"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="btn btn-ghost btn-sm rounded-btn hover:text-primary-content"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
