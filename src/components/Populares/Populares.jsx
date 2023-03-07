import populares from './populares.module.scss'
import fotos from './populares.json'
export default function Populares() {
  return (
    <aside className={populares.populares}>
        <h2>Populares</h2>
        <ul className={populares.populares__imagens}>
            {fotos.map(foto=>{
                return(
                    <li key={foto.id}>
                        <img src={foto.path} alt={foto.alt} />
                    </li>
                )
            })}
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
