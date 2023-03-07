import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner'
import homepage from './homepage.module.scss'
import Footer from '../Footer/Footer';
import Galery from '../Galery/Galery';
import Populares from '../Populares/Populares.jsx';

export default function HomePage() {
  return (
    <>
        <Header/>
        <main>
          <section className={homepage.principal}>
              <Menu />
              <Banner />
          </section>
          <div className={homepage.galeria}>
              <Galery/>
              <Populares/>
          </div>
        </main>
        <div className={homepage.footer}>
          <Footer/>
        </div>
    </>
  );
}