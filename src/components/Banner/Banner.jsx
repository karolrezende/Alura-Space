import bannerImg from './banner.png'
import banner from './banner.module.scss'
export default function HomePage() {
  return (
        <div className={banner.banner}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={bannerImg} alt="Imagem da terra vista por cima" />
        </div>
  );
}