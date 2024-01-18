"use client"
import React, { useEffect, useLayoutEffect } from 'react';
import $ from 'jquery'
// import Flipster from 'flipster';
import 'jquery.flipster/dist/jquery.flipster.min.css'; // Import Flipster CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination'
import 'swiper/scss/effect-cube'
import 'swiper/css/autoplay'
import SwiperCore from 'swiper/core';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import screenImage from '../assets/Screen_image.png'
import ServiceImage from '../assets/Servies_01.png'


import 'swiper/css';
import { headers } from '../../next.config';

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

          effect="cube"
          grabCursor={true}
          loop={true}
          speed={1000}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 10,
            shadowScale: 0.94,
          }}
          autoplay={{
            delay: 2600,
            pauseOnMouseEnter: true,
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide className={`${styles.swiperSlide}`}>
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
            <SwiperSlide className={`${styles.swiperSlide}`}>
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
            <SwiperSlide className={`${styles.swiperSlide}`}>
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
            <SwiperSlide className={`${styles.swiperSlide}`}>
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
return (
  <div className='container-fluid'>
    <div className={`row p-5`}>
      <div className={`col-5 pt-3`}>
        <h1 className={`pb-4  ${styles.serviceHeading}`   }>All-In-One Website <br/> Solution</h1>
        <ul>
          <li className='py-3'>Manage up to 100 websites.</li>
          <li className='py-3'>Register a domain name for free.Register a domain name for free.</li>
          <li className='py-3'> Set up a professional business email address.</li>
          <li className='py-3'>Optimize your workflow with managed WordPress hosting.</li>
          <li className='py-3'>Launch websites quickly with our Website Builder.</li>
        </ul>
      </div>

      <div className='col-6'> <Image  className = {`${styles.serviceImage} img-fluid mx-auto`} src = {ServiceImage}/> </div>
    </div>
  </div>

)

}
const Prices = () => {
return (
  <div className={`container mt-5`}>
    <h1 className={styles.PriceSectionHeading}>Select your plan</h1>
        <div className="row">
           {/* First Card */}
            <div class={`col col-ms-4 col-lg-4`}>
                <div class={`card ${styles.card}`} >
                
                    <div className="card-body" >
                        <h5  style={{ color: "rgb(20, 20, 143)", fontWeight: "bolder", paddingLeft: 30 , justifyContent:'center', display: 'flex'}}> Premium</h5>
                        <p>Enjoy optimised performance & guaranteed resources</p>
                        <p  className= {`mt-5 ms-5`}> ₹599.00 <span className={styles.saveDiv}> Save 64%</span></p>
                       <h1 className={`${styles.price} ms-5`}>139.00 <span>/mo</span></h1>
                        <p className={styles.monthDiv}> +3 months Free</p>
                        <div className={`btn ${styles.btn} ms-5`}> Add to Cart</div>
                        
                        <p className={`ms-5 mt-3`}> ₹240.00/mo when you renew</p>
                        <hr/>

            <h6 className={styles.firstFea}>Top Features</h6>
            <ul className={styles.list}>
                <li className={styles.listItem}> <span className={styles.listText}>Standard</span> Perform</li>
                <li className={styles.listItem}><span className={styles.listText}>100</span> website</li>
                <li className={styles.listItem}><span className={styles.listText}>100 GB</span> SSD Storage</li>
                <li className={styles.listItem}> <span className={styles.listText}>Weekly</span> Backups</li>
                <li className={styles.listItem}><span className={styles.listText}>Ulimited</span>Free SSL</li>
                <li className={styles.listItem}> <span className={styles.listText}>Unlimited</span> Bandwidth</li>
                <li className={styles.listItem}> <span className={styles.listText}>Free</span> Email</li>
                <li className={styles.listItem}><span className={styles.listText}>Free</span> Domain(799.00 value)</li>
                <li className={styles.listItem}> <span className={styles.listText}>Free</span> CDN</li>
                <li className={styles.listItem}> <span className={styles.listText}>Dedicated</span> IP Adress</li>
            </ul> 
                    </div>
                  </div>
            </div>

         {/* Second card */}
            <div className={`col col-ms-4 col-lg-4`}>
                <div className={`card ${styles.card}`} >
                
                    <div className="card-body">
                        <h5 style={{ color: "#fc5185",
                        fontWeight: "bolder", paddingLeft: 30, justifyContent: 'center', display: 'flex'}}> Business</h5>
                        <p>Level-up with more power and enhanced features  </p>
                        <p  className={`mt-5 ms-5`}> ₹699.00 <span className={styles.saveDiv2} > Save 77%</span></p>
                       <h1 className={`${styles.price} ms-5`}>249.00 <span>/mo</span></h1>
                        <p className={styles.monthDiv2}> +3 months Free</p>
                        <div className={`btn  ${styles.btn2}  ms-5`}> Add to Cart</div>
    
                        <p className={`ms-5 mt-3`}> ₹499.00/mo when you renew</p>
                        <hr/>

            <h6 className={styles.firstFea}>Top Features</h6>
            <ul className={styles.list}>
                <li className={styles.listItem}> <span className={styles.listText}>Increased </span> Performance (Up to 5x)</li>
                <li className={styles.listItem}> <span className={styles.listText}>100</span> website</li>
                <li className={styles.listItem}><span className={styles.listText}>200 GB</span> NVMe Storage</li>
                <li className={styles.listItem}> <span className={styles.listText}>Daily</span> Backups (₹1,380.00 value) </li>
                <li className={styles.listItem}><span className={styles.listText}>Ulimited</span>Free SSL</li>
                <li className={styles.listItem}> <span className={styles.listText}>Unlimited</span> Bandwidth</li>
                <li className={styles.listItem}> <span className={styles.listText}>Free</span> Email</li>
                <li className={styles.listItem}><span className={styles.listText}>Free</span> Domain(799.00 value)</li>
                <li className={styles.listItem}> <span className={styles.listText}>Free</span> CDN</li>
                <li className={styles.listItem}> <span className={styles.listText}>Dedicated</span> IP Adress</li>
            </ul> 
                    </div>
                  </div>
            </div>
            {/* third card */}
            <div className={`col col-ms-4 col-lg-4`}>
                <div className={`card  ${styles.card}`} >
                
                    <div className="card-body">
                        <h5  style= {{ color: "rgb(20, 20, 143)",fontWeight: "bolder", paddingLeft: 30 }}> Cloud Startup</h5>
                        <p> Enjoy optimised performance & guaranteed resources</p>
                        <p  className={`mt-5 ms-5`}> ₹1699.00 <span className={styles.saveDiv }> Save 54%</span></p>
                      <h1 className={`${styles.price} ms-5`}>699.00 <span>/mo</span></h1>
                        <p className={styles.monthDiv }> +3 months Free</p>
                        <div className={`btn  ${styles.btn} ms-5`}> Add to Cart</div>
                        <p className={`ms-5 mt-3`}> ₹1,279.00/mo when you renew
                            </p>
                        <hr/>

            <h6 className={styles.firstFea}>Top Features</h6>
            <ul className={styles.list}>
                <li className={styles.listItem}> <span className={styles.listText}>Standard</span> Perform</li>
                <li className={styles.listItem}> <span className={styles.listText}>100</span> website</li>
                <li className={styles.listItem}><span className={styles.listText}>100 GB</span> SSD Storage</li>
                <li className={styles.listItem}> <span className={styles.listText}>Weekly</span> Backups</li>
                <li className={styles.listItem}><span className={styles.listText}>Ulimited</span>Free SSL</li>
                <li className={styles.listItem}> <span className={styles.listText}>Unlimited</span> Bandwidth</li>
                <li className={styles.listItem}> <span className={styles.listText}>Free</span> Email</li>
                <li className={styles.listItem}><span className={styles.listText}>Free</span> Domain(799.00 value)</li>
                <li className={styles.listItem}> <span className={styles.listText}>Free</span> CDN</li>
                <li className={styles.listItem}> <span className={styles.listText}>Dedicated</span> IP Adress</li>
            </ul> 
                    </div>
                  </div>
            </div>
           
        </div>
    </div>
)
}





const Screenshots = () => {


  return (
    <section className={styles.screenshotArea} id="screenshot">
      <div className={styles.main_title}>
        <h2>Screenshots</h2>
      </div>
      <div className="flipster flipster--transform flipster--coverflow flipster--click flipster--active" style={{ display: 'block' }} tabIndex="0">
        <ul className="flipster__container" style={{ height: '685.75px', transform: 'translateX(-1126.5px)' }}>
          <li className="flipster__item  flipster__item--past flipster__item--past-13" style={{ zIndex: 0, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-12" style={{ zIndex: 1, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-11" style={{ zIndex: 2, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-10" style={{ zIndex: 3, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-9" style={{ zIndex: 4, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-8" style={{ zIndex: 5, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-7" style={{ zIndex: 6, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-6" style={{ zIndex: 7, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-5" style={{ zIndex: 8, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-4" style={{ zIndex: 9, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-3" style={{ zIndex: 10, marginRight: ' -252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-2" style={{ zIndex: 11, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--past flipster__item--past-1" style={{ zIndex: 12, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--current" style={{ zIndex: 19, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} /></div></li>
          <li className="flipster__item  flipster__item--future flipster__item--future-1" style={{ zIndex: 4, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--future flipster__item--future-2" style={{ zIndex: 3, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--future flipster__item--future-3" style={{ zIndex: 2, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
          <li className="flipster__item  flipster__item--future flipster__item--future-4" style={{ zIndex: 1, marginRight: '-252px' }}><div className="flipster__item__content">
            <Image src={screenImage} alt="Scrennshots" /></div></li>
        </ul>
      </div>
    </section>
  )
}

// const Videos = () =>{
//   return(
//     <section className={styles.ourBenefitsArea}>
// <div className={styles.ourBenefitsInner}>
// <div className={styles.benefitsLeft} >
// <div className={styles.benefitsContent}>
// <div className={styles.contentTitle}>
// <h2 className={styles.videoHeading1}>Why is the best</h2>
// </div>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
// <ul>
// <li><a href="#">
//  Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
// <li><a href="#">In our work we try to use only the most modern</a></li>
// <li><a href="#">We want the template you downloaded look unique</a></li>
// <li><a href="#">The given template is armed with the number of settings</a></li>
// <li><a href="#">nnovative solutions and simple mathematically calculated</a></li>
// <li><a href="#">Emotions that causes your project in visitor</a></li>
// <li><a href="#">The meeting of developers of cross-platform apps</a></li>
// </ul>
// </div>
// </div>
// <div className={styles.benefitsRight}>
// <div className={styles.video_row}>
// <iframe id="video" src="https://www.youtube.com/embed/bgTdTBpQyi8?enablejsapi=1&amp;html5=1&amp;rel=0&amp;fs=0&amp;loop=1&amp;showinfo=0&amp;disablekb=1&amp;controls=0&amp;color=white&amp;playlist=bgTdTBpQyi8" title="YouTube video player" style={{ height: 645, width: 960 }}></iframe>
// <div className={styles.overlay} id="video_overlay">
// <div className={styles.overlayBg}></div>
// <div className={styles.playPause}>
// <i className={styles.tiControlPlay} ariaHidden="true" id="play_btn"></i>
// <i className={styles.tiControlPause} ariaHidden="true" id="pause_btn"></i>
// <div className={styles.videoContent}>
// <h4>Play the Video</h4>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </section>
//   )
// }

// const Footer = () =>{
//   return(
//     <footer className={styles.footerSection}>
//         <div className={styles.container}>
//             <div class="footer-cta pt-5 pb-5">
//                 <div class="row">
//                     <div class="col-xl-4 col-md-4 mb-30">
//                         <div class="single-cta">
//                             <i class="fas fa-map-marker-alt"></i>
//                             <div class="cta-text">
//                                 <h4>Find us</h4>
//                                 <span>1010 Avenue, sw 54321, chandigarh</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-md-4 mb-30">
//                         <div class="single-cta">
//                             <i class="fas fa-phone"></i>
//                             <div class="cta-text">
//                                 <h4>Call us</h4>
//                                 <span>9876543210 0</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-md-4 mb-30">
//                         <div class="single-cta">
//                             <i class="far fa-envelope-open"></i>
//                             <div class="cta-text">
//                                 <h4>Mail us</h4>
//                                 <span>mail@info.com</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="footer-content pt-5 pb-5">
//                 <div class="row">
//                     <div class="col-xl-4 col-lg-4 mb-50">
//                         <div class="footer-widget">
//                             <div class="footer-logo">
//                                 <a href="index.html">
//                                   <img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo" /></a>
//                             </div>
//                             <div class="footer-text">
//                                 <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
//                                 elit,Lorem ipsum dolor sit amet.</p>
//                             </div>
//                             <div class="footer-social-icon">
//                                 <span>Follow us</span>
//                                 <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
//                                 <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
//                                 <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
//                         <div class="footer-widget">
//                             <div class="footer-widget-heading">
//                                 <h3>Useful Links</h3>
//                             </div>
//                             <ul>
//                                 <li><a href="#">Home</a></li>
//                                 <li><a href="#">about</a></li>
//                                 <li><a href="#">services</a></li>
//                                 <li><a href="#">portfolio</a></li>
//                                 <li><a href="#">Contact</a></li>
//                                 <li><a href="#">About us</a></li>
//                                 <li><a href="#">Our Services</a></li>
//                                 <li><a href="#">Expert Team</a></li>
//                                 <li><a href="#">Contact us</a></li>
//                                 <li><a href="#">Latest News</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
//                         <div class="footer-widget">
//                             <div class="footer-widget-heading">
//                                 <h3>Subscribe</h3>
//                             </div>
//                             <div class="footer-text mb-25">
//                                 <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
//                             </div>
//                             <div class="subscribe-form">
//                                 <form action="#">
//                                     <input type="text" placeholder="Email Address" />
//                                     <button><i class="fab fa-telegram-plane"></i></button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="copyright-area">
//             <div class="container">
//                 <div class="row">
//                     <div class="col-xl-6 col-lg-6 text-center text-lg-left">
//                         <div class="copyright-text">
//                             <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
//                         </div>
//                     </div>
//                     <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
//                         <div class="footer-menu">
//                             <ul>
//                                 <li><a href="#">Home</a></li>
//                                 <li><a href="#">Terms</a></li>
//                                 <li><a href="#">Privacy</a></li>
//                                 <li><a href="#">Policy</a></li>
//                                 <li><a href="#">Contact</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </footer>
//   );
// }




// YourComponent.js

const card = () => {



  return (
    <main>
      <div className={styles.whatsapp}>
        <a className={styles.whatsappIcon}><FontAwesomeIcon className={styles.whatsappIco} icon={faWhatsapp} style={{ color: "#1feb52", }} />7876566567</a>

      </div>
      <HomePage />
      <Prices/>
      <Service/>
      <Screenshots />
   





      {/* <Videos/> */}



    </main >
  )
}

export default card