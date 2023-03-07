import styles from './tags.module.scss'
import fotos from '../Galery/fotos.json'
export default function Tags({tags, filter, setItens}) {
  return (
    <div className={styles.tags}>
        <p >Busque por tags:</p>
        <ul className={styles.tags__lista}>
           {tags.map(tag=>{
            return <li key={tag} onClick={()=>filter(tag)}>{tag}</li>
            }
            )}
            <li onClick={()=>setItens(fotos)}>Todas</li>
        </ul>
    </div>
  )
}
 