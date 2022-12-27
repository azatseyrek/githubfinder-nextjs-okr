import Link from 'next/link';
import {FaEye, FaLink, FaStar} from 'react-icons/fa';

function RepoItem({repo}) {
  const {
    name,
    description,
    html_url,
    watchers_count,
    stargazers_count,
    language,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <Link target="_blank" href={html_url}>
            <FaLink className="inline mr-1" /> {name}
            {language && (
              <>
                <span className="ml-4">/</span>
                <div className="mr-2 ml-4 badge badge-md badge-accent">
                  {language}
                </div>
              </>
            )}
          </Link>
        </h3>
        <p className="mb-3">{description}</p>
        <div className="opacity-50">
          <div className="mr-2 badge badge-primary badge-lg">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-secondary badge-lg">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
