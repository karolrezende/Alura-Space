import Cards from '../Cards/Cards'
import Tags from '../Tags/Tags'
import galery from './galery.module.scss'
import fotos from './fotos.json'
import { useState } from 'react'
export default function Galery() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map(foto => foto.tag))]

  const filter = (tag)=>{
    const newFotos = fotos.filter(foto=>{
      return foto.tag === tag
    })
    setItens(newFotos)
  }
  return (
    <section className={galery.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filter={filter} setItens={setItens}/>
        <Cards fotos={itens}/>
    </section>
  )
}
