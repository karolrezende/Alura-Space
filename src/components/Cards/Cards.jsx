import favorito from './favorito.png'
import open from './open.png'
import galery from '../Galery/galery.module.scss'
export default function Cards({fotos}) {
  return (
    <ul className={galery.galeria__cards}>
    {fotos.map(foto=>{
      return(
        <li key={foto.id} className={galery.galeria__card}>
          <img className={galery.galeria__imagem} src={foto.imagem} alt={foto.titulo} />
          <p className={galery.galeria__descricao}>{foto.titulo}</p>
          <div>
            <p>{foto.creditos}</p>
            <span>
              <img src={favorito} alt="icone coração de curtir" />
              <img src={open} alt="icone de abrir modal" />
            </span>
          </div>
        </li>
      )
    })}
  </ul>
  )
}
