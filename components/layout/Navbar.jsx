import {FaGithub} from 'react-icons/fa';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full px-6 h-16 items-center justify-between mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="px-2 mx-2 group">
        <FaGithub
          onClick={() => router.push('/')}
          className="inline pr-2 text-5xl transition-all hover: cursor-pointer  group-active:scale-95"
        />
        <Link
          href="/"
          className="text-lg font-bold align-middle hover:text-primary-content transition-all active:scale-95"
        >
          Github Finder
        </Link>
      </div>
      <div className="px-2 mx-2 ">
        <div className="flex items-center  h-full gap-8">
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
    </nav>
  );
};

export default Navbar;
