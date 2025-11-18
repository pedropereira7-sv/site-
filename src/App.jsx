import { useState } from 'react'
import './App.css'
import Tenisnike from './assets/tenis-nike1.png'
import Tenisnike2 from './assets/tenis-nike2.png'
import Tenisnike3 from './assets/tenis-nike3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import BRA from './assets/nike.png'
import BRA1 from './assets/nike-dn.png'
import BRA2 from './assets/nike-tn.png'
import BRA3 from './assets/nike-zoom.png'
import Logo from './assets/nlg.png'
import 'swiper/css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header>    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={BRA} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={BRA1} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={BRA2} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={BRA3} alt="" className="img-prod" /></SwiperSlide>
    </Swiper>
</header>
      <section className="produtos">

        {/*Produto 1 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike}alt="" className="img-prod" />
            <h2>Tênis Nike Air Zoom Upturn Masculino</h2>
            <p className="desc">Tenis ideal para atletas, ajudando a melhorar sua performace em corridas e treinos</p>
            <p className="preco">R$ 1203,99</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (472)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>              

        {/*Produto 2 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike2}alt="" className="img-prod" />
            <h2>Tênis Nike Air Max Dn</h2>
            <p className="desc">O Tênis Nike Air Max Dn possui uma tecnologia e conforto unico, com uma tecnologia em sua palmilha fornecendo horas de caminhada sem dor</p>
            <p className="preco">R$ 969,90</p>
          <div className="avaliacao"> <span>★ ★ ☆ ☆ ☆</span> (172)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>              

        {/*Produto 3 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike3}alt="" className="img-prod" />
            <h2>Tênis Nike Air Max Plus Verde</h2>
            <p className="desc">Projetado inicialmente para atletas de corrida mas foi no estilo de rua onde ganhou sua fama</p>
            <p className="preco">R$ 899,90</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (28)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>                      
      </section>
       <section className="destaque">
          <iframe 
          width="100%" 
          height="315"
      
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
        </section>

        <footer>

         <img src={Logo} alt="" className="logo-footer" /> 

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App