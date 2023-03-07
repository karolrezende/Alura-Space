import menu from './menu.module.scss'
import home from './icons/home.png'
import views from './icons/views-off.png'
import likes from './icons/likes-off.png'
import showMe from './icons/show-me-off.png'
import news from './icons/news-off.png'

export default function Menu() {
  return (
    <nav className={menu.menu}>
        <ul className={menu.menu__lista}>
            <li className={menu.menu__item}> 
                <img src={home} alt="icone home" />
                <a href="/">Início</a>
            </li>
            
            <li className={menu.menu__item}> 
                <img src={views} alt="" />
                <a href="/">Mais vistas</a>
            </li>
            
            <li className={menu.menu__item}> 
                <img src={likes} alt=""/>
                <a href="/">Mais curtidas</a>
            </li>
            
            <li className={menu.menu__item}> 
                <img src={news} alt="" />
                <a href="/">Novas</a>
            </li>
            
            <li className={menu.menu__item}> 
                <img src={showMe} alt="" />
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
