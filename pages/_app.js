import Alert from '../components/layout/Alert';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import {AlertProvider} from '../context/alert/AlertContext';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <>
      <AlertProvider>
        <Alert />
        <div
          data-theme="retro"
          className=" flex flex-col justify-between min-h-screen "
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </AlertProvider>
    </>
  );
}

export default MyApp;
