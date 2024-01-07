import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <section className={styles.home}>
      <div className={styles.description}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Grow Professionally</span> with the Best
        </h1>
        <p className={styles.paragraph}>
          In a world filled with opportunities, having a mentor can make all the
          difference. Explore why people turn to this invaluable resource to
          unlock their potential.
        </p>
        
      </div>

      <div className={styles.usersColorContainer}>
        <span className={styles.item} style={{ '--i': 1 }}></span>
        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/10088b1a-c0aa-42a9-8dff-1a692eb597d6" alt="" />
        
        <span className={styles.item} style={{ '--i': 3 }}></span>
        

        
        <span className={styles.item} style={{ '--i': 11 }}></span>
        
        <span className={styles.temm} style={{ '--i': 5 }}></span>

        <span className={styles.temm} style={{ '--i': 9 }}></span>
        
        <span className={styles.temm} style={{ '--i': 7 }}></span>
        
      </div>
    </section>

    <section className={styles.cardContainer} id="card-container">
      <div className={styles.slider}>
        <div className={styles.card} dataTilt>
          <div className={styles.content}>
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/10088b1a-c0aa-42a9-8dff-1a692eb597d6" alt="" />
            <h1>Personalized Guidance</h1>
            <p>
              Whether you are pursuing a career change, entrepreneurship, or
              personal development, a mentor offers substantial advice and
              support to navigate your unique path.
            </p>
            <button className={[styles.btn, styles.btnGrad].join(' ')}>
              <span>Learn More</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div className={styles.card} dataTilt>
          <div className={styles.content}>
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/69fb8584-66a0-4ecd-bae5-dd00015a1ad5" alt="" />
            <h1>Accelerated Growth</h1>
            <p>
              With a mentor, you can fast-track your journey to success. Benefit
              from their experience and tap into their knowledge, helping you
              avoid common pitfalls.
            </p>
            <button className={[styles.btn, styles.btnGrad].join(' ')}>
              <span>Learn More</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div className={styles.card} data-tilt>
          <div className={styles.content}>
            
            <h1>Inspiration & Motivation</h1>
            <p>
              A mentor isn't just an advisor; they are a source of inspiration
              and motivation. They can help you to set and achieve ambitious
              goals and gain your self-confident.
            </p>
            <button className={[styles.btn, styles.btnGrad].join(' ')}>
              <span>Learn More</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div className={styles.card} data-tilt>
          <div className={styles.content}>
            
            <h1>Networking & Connections</h1>
            <p>
              Your mentor can open doors to valuable connections and
              opportunities. They can introduce you to their network and help
              you build meaningful relationships.
            </p>
            <button className={[styles.btn, styles.btnGrad].join(' ')}>
              <span>Learn More</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div className={styles.card} data-tilt>
          <div className={styles.content}>
            
            <h1>Expert Insights</h1>
            <p>
              Gain access to industry insights and expert knowledge that you
              won't find in textbooks. Your mentor can provide practical wisdom
              that textbooks can't teach.
            </p>
            <button className={[styles.btn, styles.btnGrad].join(' ')}>
              <span>Learn More</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div className={styles.card} data-tilt>
          <div className={styles.content}>
            
            <h1>Confidence & Self-Esteem</h1>
            <p>
              A mentor is like a supportive coach, boosting your confidence and
              self-esteem. Their encouragement can help you believe in your
              potential and take on challenges with vigor.
            </p>
            <button className={[styles.btn, styles.btnGrad].join(' ')}>
              <span>Learn More</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
      <ul className={styles.control} id="custom-control">
        <li className={styles.prev}>
          <ion-icon className={styles.arrow} name="caret-back-outline"></ion-icon>
        </li>
        <li className={styles.next}>
          <ion-icon className= {styles.arrow} name="caret-forward-outline"></ion-icon>
        </li>
      </ul>
    </section>
      

     
    </main>
  )
}
