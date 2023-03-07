import logo from './logo.png'
import search from './search.png'
import header from './header.module.scss'
export default function Header(){
    return(
        <div className={header.header}>
            <img src={logo} alt="Logo alura space" />
            <div className={header.header__container}>
                <input 
                    className={header.header__input}
                    placeholder='Digite o que você procura...'>
                </input>
                <img src={search} alt="Botão de pesquisa" />
            </div>
        </div>
    )
}