import twitter from './twitter.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import footer from './footer.module.scss';

export default function Footer() {
  return (
    <div className={footer.footer}>
        <ul className={footer.footer__list}>
            <li className={footer.footer__li}>
                <img src={facebook}/>
            </li>
            <li className={footer.footer__li}>
                <img src={twitter}/>
            </li>
            <li className={footer.footer__li}>
                <img src={instagram}/>
            </li>
        </ul>
        <h1>Desenvolvido por Karol e Alura</h1>
    </div>
  )
}
