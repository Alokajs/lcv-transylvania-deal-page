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
          Enquire Now
        </a>
      </div>

    </div>

  </header>
  
  </>
)}