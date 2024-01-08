"use client"
import Image from 'next/image'
import styles from './page.module.css'
import bootstrap from '../../../bootstrap-5.3.2-dist/bootstrap-5.3.2-dist/css/bootstrap.min.css'

import { useEffect } from 'react';

const CardComponent = () => {
  const cardsContainer = document.querySelector(".cards");
  const cardsContainerInner = document.querySelector(".cardsInner");
  const cards = Array.from(document.querySelectorAll(".card"));
  const overlay = document.querySelector(".overlay");

  const applyOverlayMask = (e) => {
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;

    overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
  };

  const createOverlayCta = (overlayCard, ctaEl) => {
    const overlayCta = document.createElement("div");
    overlayCta.classList.add("cta");
    overlayCta.textContent = ctaEl.textContent;
    overlayCta.setAttribute("aria-hidden", true);
    overlayCard.append(overlayCta);
  };

  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const cardIndex = cards.indexOf(entry.target);
      let width = entry.borderBoxSize[0].inlineSize;
      let height = entry.borderBoxSize[0].blockSize;

      if (cardIndex >= 0) {
        overlay.children[cardIndex].style.width = `${width}px`;
        overlay.children[cardIndex].style.height = `${height}px`;
      }
    });
  });

  const initOverlayCard = (cardEl) => {
    const overlayCard = document.createElement("div");
    overlayCard.classList.add("card");
    createOverlayCta(overlayCard, cardEl.lastElementChild);
    overlay.append(overlayCard);
    observer.observe(cardEl);
  };

  useEffect(() => {
    cards.forEach(initOverlayCard);
    document.body.addEventListener("pointermove", applyOverlayMask);

    // Cleanup function
    return () => {
      document.body.removeEventListener("pointermove", applyOverlayMask);
      observer.disconnect();
    };
  }, []);


  return (
    <main>

      <section className={styles.home}>
        <img className={styles.Image} src="https://img.freepik.com/free-vector/twitch-background-casino-gambling_23-2150257474.jpg?w=1060&t=st=1704615918~exp=1704616518~hmac=b8bddfaa3b21fc457d1cd79895d00c50ead54a9c69b4384c5f87b0aaaaf94ef0" alt="" height={100} width={500} />

      </section>

      <section className={styles.selectPlan}>
        <h1>Pricing</h1>
      <div className={[styles.mainCards, styles.cards].join('')}>
    <div className={styles.cardsInner}>
      <div className={`${styles.cardsCard} ${styles.card}`}>
        <h2 className={styles.cardHeading}>Basic</h2>
        <p className={styles.cardPrice}>$9.99</p>
        <ul role="list" className={[styles.cardBullets, styles.flow].join('')}>
          <li>Access to standard workouts and nutrition plans</li>
          <li>Email support</li>
        </ul>
        <a href="#basic" className={[styles.cardCta , styles.cta].join('')}>Get Started</a>
      </div>

      <div className={[styles.cardsCard, styles.card].join('')}>
        <h2 className={styles.cardHeading}>Pro</h2>
        <p className={styles.cardPrice}>$19.99</p>
        <ul role="list" className={[styles.cardBullets, styles.flow].join('')}>
          <li>Access to advanced workouts and nutrition plans</li>
          <li>Priority Email support</li>
          <li>Exclusive access to live Q&A sessions</li>
        </ul>
        <a href="#pro" className={[styles.cardCta, styles.cta].join('')}>Upgrade to Pro</a>
      </div>

      <div className={[styles.cardsCard , styles.card].join('')}>
        <h2 className={styles.cardHeading}>Ultimate</h2>
        <p className={styles.cardPrice}>$29.99</p>
        <ul role="list" className={[styles.cardBullets, styles.flow].join('')}>
          <li>Access to all premium workouts and nutrition plans</li>
          <li>24/7 Priority support</li>
          <li>1-on-1 virtual coaching session every month</li>
          <li>Exclusive content and early access to new features</li>
        </ul>
        <a href="#ultimate" className={[styles.cardCta, styles.cta].join('')}>Go Ultimate</a>
      </div>
    </div>
    
    <div className={[styles.overlay ,styles.cardsInner].join('')}></div>
  </div>
      </section>



    </main>
  )
}


export default CardComponent