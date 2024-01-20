"use client"
import React, { useEffect, useLayoutEffect } from 'react';
import $ from 'jquery'
// import Flipster from 'flipster';
import 'jquery.flipster/dist/jquery.flipster.min.css'; // Import Flipster CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {swiperCss} from 'swiper/modules/';
import 'swiper/css/pagination'
import 'swiper/scss/effect-cube'
import 'swiper/css/autoplay'

import SwiperCore from 'swiper/core';


import { Autoplay, EffectCube, Pagination } from 'swiper/modules'
// import 'swiper/swiper-bundle';
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import screenImage from '../assets/Screen_image.png'
import ServiceImage from '../assets/Servies_01.png'
import phoneFrame from '../assets/phone-fream.png'
import SlideImage1 from '../assets/s-4.png'
import SlideImage2 from '../assets/s-5.png'
import SlideImage3 from '../assets/s-6.png'


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
const Contact = () =>{
  return(
    <section id="contact">
    <div className={`${styles.contact} ptb_100`}>
        <div className="container">
            <div className={`mb-5 text-center`}>
                <h5 className={styles.heading5}>Let s Start a Conversation!</h5>
                <h2 className="fw-bold">Contact Us</h2>
            </div>
        </div>
        <div className="mobile_px_20">
            <div className="container">
                <div className="row">
                <div className={`col-lg-5 col-md-5`}>
                    <h4 className="fw-bold">Contact Info</h4>
                    <ul className={`${styles.info} list-unstyled`}>
                    <li className="d-flex align-items-center"> 
                        <span className="pe-3 ti-location-pin fs-5"></span>
                        <p><a href="">Lorem ipsum dolor sit amet, consectetur.</a></p>
                    </li>
                    <li className="d-flex align-items-center">
                        <span className="pe-3 ti-mobile fs-5"></span>
                        <p><a href="">+91 999-999-9999</a></p>
                    </li>
                    <li className="d-flex align-items-center">
                        <span className="pe-3 ti-envelope fs-5"></span>
                        <p><a href="">Info@lifecoach.in</a></p>
                    </li> 
                    </ul>
                </div>
                <div className="col-lg-7 col-md-7 pt-lg-0 pt-md-0 pt-4">
                    <form>
                    <div className="row">
                        <div className="col-md-6">
                        <div className={styles.formGroup}>
                            <input type="text" className={styles.formControl} name="name" id="name" placeholder="Your name"/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className={styles.formGroup}>
                            <input type="email" className={styles.formControl} name="email" id="email" placeholder="Email address"/>
                        </div>
                        </div>
                        <div className="col-md-12">
                        <div className={styles.formGroup}>
                            <input className={styles.textarea} name="message" cols="30" rows="4" id="message" placeholder="Enter your message"/>
                        </div>
                        </div>
                        <div className="col-md-12"> 
                        <button className={`btn ${styles.sendMessagebtn}`}><span className="ti-rocket pe-2 fs-5"></span> Send Message</button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

const Footer = () => {
  return(
    <footer> 
    <div className={`p-3 ${styles.copyright}`}>
    <div className="container">
        <div className="row align-items-center">
        <div className="col-12 col-lg-6 p-3 text-center text-lg-start mob-pb-0">
            <p className="my-0">Copyright © 2021 <a href="#">ONESHOT</a> All Rights Reserved</p>
        </div>
        <div className="col-12 col-lg-6 p-3 text-center text-lg-end mob-pt-0">
            <p>Designed by <a href="#" target=" _blank">CODE4EDUCATION</a>.</p>
        </div>
        </div>
    </div>
    </div> 
</footer>
  )
}





const Screenshots = () => {


  return (
 <section>
  <div className='container'>
    <div className='row justify-content-center'>
  <div className='col-lg-8'>
    <div className= {`${styles.title} text-center b-5`}>
      <h6 className='mb-0 fw-fold text-primary'>App Screen</h6>
      <h2 className={styles.f40}>Show our App screenshots</h2>
      <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos <br/>
                            inventore omnis aliquid rerum alias molestias.</p>
    </div>
  </div>
    </div>
    <div className='row my-5'>
<div className='col-lg-12'>
<Swiper
  spaceBetween={50}
  slidesPerView={5}
  loop={true}
  autoplay={{
    delay: 2600,
    pauseOnMouseEnter: true,
  }}
  pagination={{clickable: true}}
  
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 5
    }
  }}
  className={`${styles.swiperContainer} swiper-container-horizontal`}
>


   
     
          <SwiperSlide className={styles.borderRadius} data-swiper-slide-index="3">
            <Image src={SlideImage1} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius}  data-swiper-slide-index="4">
            <Image src={SlideImage2} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius} data-swiper-slide-index="5">
            <Image src={SlideImage3} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius} data-swiper-slide-index="0">
            <Image src={SlideImage1} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius}  data-swiper-slide-index="1">
            <Image src={SlideImage2} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius}  data-swiper-slide-index="2">
            <Image src={SlideImage3} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius}  data-swiper-slide-index="3">
            <Image src={SlideImage1} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius}  data-swiper-slide-index="4">
            <Image src={SlideImage2} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius}  data-swiper-slide-index="5">
            <Image src={SlideImage3} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius}  data-swiper-slide-index="0">
            <Image src={SlideImage1} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius}  data-swiper-slide-index="1">
            <Image src={SlideImage2} className="img-fluid"/>
          </SwiperSlide>
          <SwiperSlide className={styles.borderRadius}  data-swiper-slide-index="2">
            <Image src={SlideImage3} className="img-fluid"/>
          </SwiperSlide>
          
  </Swiper>

</div>
    </div>
  </div>
 </section>
  )
}






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
   <Contact/>


<Footer/>


      {/* <Videos/> */}



    </main >
  )
}

export default card