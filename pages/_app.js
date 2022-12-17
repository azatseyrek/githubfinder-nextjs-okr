import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import {AlertProvider} from '../context/alert/AlertContext';
import {GithubProvider} from '../context/github/GithubContext';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <>
      <GithubProvider>
        <AlertProvider>
          <div
            data-theme="retro"
            className=" flex flex-col justify-between h-screen "
          >
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        </AlertProvider>
      </GithubProvider>
    </>
  );
}

export default MyApp;
