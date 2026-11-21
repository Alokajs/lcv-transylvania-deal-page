import styles from "./page.module.css"
import Image  from "next/image"
import dealData from "../data/deal-page-data.json"

export default function Home () {
return (
  <>
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <Image
        src="/lcv-logo.png"
        alt="Low Cost Vibes Logo."
        width={250}
        height={40}
      />
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#itinerary">Itinerary</a></li>
          <li><a href="#hotel">Hotel</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#excursions">Excursions</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
      </nav>
      <div className={styles.headerActions}>
        <a href="#enquiry" className={styles.enquireButton}>
          Enquire now
        </a>
      </div>

    </div>

  </header>
  <main className={styles.hero} style={{backgroundImage: `linear-gradient(90deg, rgba(13, 40, 61, 0.9) 0%, rgba(13, 40, 61, 0.65) 40%, rgba(13, 40, 61, 0.25) 70%, rgba(13, 40, 61, 0) 100%), url(${dealData.heroImages[2].path})`}}>
    <div className={styles.heroContent}>
      <p className={styles.heroLabel}>DISCOVER ROMANIA</p>
      <h1> Mysterious Vibes<br />in Transylvania
      </h1>
    <p className={styles.heroDetails}>
      {dealData.dealDestinations[0].destination.name},{" "}
      {dealData.dealDestinations[0].destination.country}{" "}
      *{dealData.dealDestinations[0].noOfNights}{" "}nights
    </p>
    <div className={styles.heroPrice}>
      <div className={styles.heroPriceLeft}>
      <p>
        From</p><p><span className={styles.heroCurrentPrice}>£{dealData.price}</span></p><p>Per person
      </p>
      </div>
      <div className={styles.heroPriceRight}>
        <p>Was{" "}<span className={styles.heroOriginalPrice}>£{dealData.farePrice}</span></p>
        <p className={styles.saveUpButton}>{dealData.saveUpto}%{" "}saving</p>
      </div>
    </div>
    <a href="#enquiry" className={styles.heroButton}>
      <span>Enquire now</span>
      <Image
        src="/lcv_arrow_right.svg"
        alt="lcv_arrow_right icon"
        width={16}
        height={16}
      />
    </a>
    </div>
    <div className={styles.mediaButtons}>
      <button className={styles.viewImagesButton}>
      <span>View all images</span>
      <Image
        src="/view-all-images.svg"
        alt="view-all-images icon"
        width={16}
        height={16}
      />
       </button>
      <a href="https://www.youtube.com/watch?v=__M3_rXOAfY" target="_blank" className={styles.watchVideoButton}>
      <span>Watch video</span>
      <Image
        src="/watch-video.svg"
        alt="watch-video icon"
        width={16}
        height={16}
      />
     </a>
    </div>
    
  </main>
  </>
)}