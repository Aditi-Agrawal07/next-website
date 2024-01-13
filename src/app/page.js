"use client"
import React, { useEffect, useLayoutEffect } from 'react';
import $ from 'jquery'
// import Flipster from 'flipster';
import 'jquery.flipster/dist/jquery.flipster.min.css'; // Import Flipster CSS
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination'
import 'swiper/scss/effect-cube'
import 'swiper/css/autoplay'
import SwiperCore  from 'swiper/core';
import {Autoplay, EffectCube, Pagination} from 'swiper/modules'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import screenImage from  '../assets/Screen_image.png'


import 'swiper/css';

SwiperCore.use([Autoplay, Pagination, EffectCube])

const HomePage = () => {


  return (
    <div className={styles.body}>
    
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>Let's Travel The World Together!</h1>
        <p>
          Our tours are designed to transport you to the heart of the world's
          most captivating destinations, creating memories that will last a
          lifetime. You can uncover the hidden gems, iconic landmarks, and
          unique cultural treasures that make each destination special.
        </p>
        <button>Explore Tours</button>
      </div>

      <Swiper className={`${styles.swiper}`}
            
             effect= "cube"
      grabCursor={true}
      loop= {true}
      speed= {1000}
      cubeEffect={{
        shadow:false,
        slideShadows: true,
        shadowOffset: 10,
        shadowScale: 0.94,
      }}
        autoplay= {{
        delay: 2600,
        pauseOnMouseEnter: true,
      }}
      >
        <div className="swiper-wrapper">
          <SwiperSlide className= {`${styles.swiperSlide}`}>
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/49db1b5f-09f6-4433-be57-51687585600c" />
            <div className={styles.cost}>from $230 per group</div>
            <div className={styles.overlay}>
              <h1>Walking Tour in Florence</h1>
              <p>
                Discover the fascinating beauty of this historic city by
                strolling through the rich cultural tapestry that makes Florence
                a timeless destination.
              </p>
              <div className={styles.ratings}>
                <div className={styles.stars}>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star-half-outline"></ion-icon>
                </div>
                <span>138 reviews</span>
              </div>
            </div>
         </SwiperSlide>
          <SwiperSlide className= {`${styles.swiperSlide}`}>
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2d165721-fe2e-4cf0-a63e-20bc5bc3f847" />
            <div className={styles.cost}>from $380 per group</div>
            <div className={styles.overlay}>
              <h1>Edinburgh Guided Tour</h1>
              <p>
                Explore the city's majestic castles and fascinating history by
                joining our guided tour for an unforgettable journey through
                Scotland's capital.
              </p>
              <div className={styles.ratings}>
                <div className={styles.stars}>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                </div>
                <span>307 reviews</span>
              </div>
            </div>
         </SwiperSlide>
          <SwiperSlide className= {`${styles.swiperSlide}`}>
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d311d1de-7382-4c03-b083-5f7e88458158" />
            <div className={`${styles.cost} ${styles.darkText}`}>from $99 per adult</div>
            <div className={styles.overlay}>
              <h1>New York Sightseeing Tour</h1>
              <p>
                Experience the energy and excitement of New York City from Times
                Square's dazzling lights to the serene beauty of Central Park.
              </p>
              <div className={styles.ratings}>
                <div className={styles.stars}>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star-half-outline"></ion-icon>
                </div>
                <span>1152 reviews</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className= {`${styles.swiperSlide}`}>
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/be223a30-52d1-4a0b-8d57-2e52f02e2245" />
            <div className={`${styles.cost} ${styles.darkText}`}>from $117 per adult</div>
            <div className={styles.overlay}>
              <h1>Japan Panoramic Tours</h1>
              <p>
                Embark on a magical journey through Tokyo by discovering the
                beauty of the city as cherry blossom trees paint the streets in
                hues of pink.
              </p>
              <div className={styles.ratings}>
                <div className={styles.stars}>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star"></ion-icon>
                  <ion-icon className={styles.star} name="star-outline"></ion-icon>
                </div>
                <span>619 reviews</span>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
    </div>
  );
};

const Service = ()=>{
return(
  <section className={styles.ourService}>
  <div className="container">
  <div className={styles.mainTitle}>
  <h2>Our Services</h2>
  </div>
  <div className="row">
  <div className="col-md-4">
  <div className={styles.serviceItem}>
  <i className={`${styles.icon} lnr lnr-cloud-check`}></i>
  <a href="#" className={styles.serviceSecondHeading}><h3 className = {styles.heading3}>Highly Secured</h3></a>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .</p>
  </div>
  </div>
  <div className="col-md-4">
  <div className={styles.serviceItem}>
  <i className={`${styles.icon} lnr lnr-phone`}></i>
  <a href="#" className={styles.serviceSecondHeading} ><h3 className = {styles.heading3}>Easily Managable</h3></a>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .</p>
  </div>
  </div>
  <div className="col-md-4">
  <div className={styles.serviceItem}>
  <i className= {`${styles.icon} lnr lnr-laptop`}></i>
  <a href="#" className={styles.serviceSecondHeading}><h3 className = {styles.heading3}>Well Documented</h3></a>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .</p>
  </div>
  </div>
  </div>
  </div>
  </section>
)

}

const Screenshots = () =>{
  // useEffect(() => {
  //   // Initialize Flipster on component mount
  //   const flipster = new Flipster('.flipster', {
  //     style: 'carousel', // You can change the style based on your preference
  //     start: 0, // Initial selected item index
  //     // Other options...
  //   });

  //   // Optionally, you can use flipster.jump(index) to programmatically change the selected item.

  //   return () => {
  //     // Clean up Flipster instance on component unmount
  //     flipster.destroy();
  //   };
  // }, []);
  return (
    <section className={styles.screenshotArea} id="screenshot">
<div className={styles.main_title }>
<h2>Screenshots</h2>
</div>
<div className="flipster flipster--transform flipster--coverflow flipster--click flipster--active" style={{display: 'block'}} tabIndex="0">
<ul className="flipster__container" style={{ height: '685.75px', transform: 'translateX(-1126.5px)'}}>
<li className="flipster__item  flipster__item--past flipster__item--past-13" style={{zIndex: 0, marginRight: '-252px'}}><div className="flipster__item__content">
  <Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-12" style={{zIndex: 1, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage}  alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-11" style={{ zIndex: 2, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage}  alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-10" style={{ zIndex: 3, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage}  alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-9" style={{ zIndex: 4, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-8" style={{ zIndex: 5, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-7" style={{ zIndex: 6, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-6" style={{ zIndex: 7, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-5" style={{ zIndex: 8, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-4" style={{ zIndex: 9, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-3" style={{ zIndex: 10, marginRight:' -252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-2" style={{ zIndex: 11, marginRight:'-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--past flipster__item--past-1" style={{zIndex: 12, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--current" style={{zIndex: 19, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage}/></div></li>
<li className="flipster__item  flipster__item--future flipster__item--future-1" style={{zIndex: 4,marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--future flipster__item--future-2" style={{zIndex: 3, marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--future flipster__item--future-3" style={{zIndex: 2,marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
<li className="flipster__item  flipster__item--future flipster__item--future-4" style={{zIndex: 1 ,marginRight: '-252px'}}><div className="flipster__item__content">
<Image src={screenImage} alt = "Scrennshots"/></div></li>
</ul>
</div>
</section>
  )
}




const usePointerGlow = () => {
  const [status, setStatus] = React.useState(null);

  useLayoutEffect(() => {
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(2)
      const y = pointerY.toFixed(2)
      const xp = (pointerX / window.innerWidth).toFixed(2)
      const yp = (pointerY / window.innerHeight).toFixed(2)
      document.documentElement.style.setProperty('--x', x)
      document.documentElement.style.setProperty('--xp', xp)
      document.documentElement.style.setProperty('--y', y)
      document.documentElement.style.setProperty('--yp', yp)
      setStatus({ x, y, xp, yp })
    }

    document.body.addEventListener('pointermove', syncPointer);

    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, []);

  return [status];
}
// YourComponent.js
const Article = ({ isFirst }) => {
  const [status] = usePointerGlow();

  return (
    <article className={`${styles.article} ${isFirst ? styles.firstArticle : ''}  ${styles.glow} ${styles.wrapper}`} data-glow>

<div className={styles.pricingItem}>
<h3 className={styles.pricingItemHeading}>Standard</h3>
<h2 className={styles.pricingItemHeadingSecond}>$9.99</h2>
<ul className={styles.list}>
<li className={styles.item1} ><a href="#"  className={styles.listItem}>Fully Responsive</a></li>
<li  className={styles.item1}><a href="#" className={styles.listItem}>Dedicated Support</a></li>
<li  className={styles.item1}><a href="#" className={styles.listItem}>Clean and Modern Design</a></li>
<li  className={styles.item1}><a href="#" className={styles.listItem}>Simple and Professional</a></li>
<li  className={styles.item1}><a href="#" className={styles.listItem}>24/7 Support</a></li>
</ul>
<span className={styles.btn}>
<a className ={styles.purchaseBtn} href="#">Purchase Now</a>
</span>
</div>
    </article>
  );
};



const card = () => {



  return (
    <main>
      <HomePage/>
     <Service/>
<Screenshots/>
<section className={styles.card}>
  <h1 className={styles.cardHeading}>Pricing</h1>
  <div className= {styles.main}>
      <Article isFirst/>
      <Article />
      <Article />
      </div>
    </section>



</main >
  )
  }

export default card