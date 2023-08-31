import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "./componets/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header" className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span> Steban Alvarado</span>
          </h1>
        </div>
      </header>
      <section id="info" className={styles.infoSection}>
        <img
          src="/gato.avif"
          alt="imagen"
          className={styles.image}

        />
        <div className={styles.infoContainer}>
          <span className={styles.tittle + " " + styles.yellowText}>Steban</span>
          <br />
          <span className={styles.tittle}>Alavarado</span>

          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>Age: </span>18
              </li>
              <li>
                <span className={styles.grayText}>Nationality: </span>Guatemala
              </li>
              <li>
                <span className={styles.grayText}>Skill set: </span>Project Management and Financial Performance
              </li>
              <li>
                <span className={styles.grayText}>Lenguages: </span>English, German
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>

  );
}
