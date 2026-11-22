import styles from "./page.module.css"
import Image  from "next/image"
import dealData from "../data/deal-page-data.json"

export default function Home () {
return (
  <>
  {/* header */}
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
{/* hero */}
<main>
  <section className={styles.hero} style={{backgroundImage: `linear-gradient(90deg, rgba(13, 40, 61, 0.9) 0%, rgba(13, 40, 61, 0.65) 40%, rgba(13, 40, 61, 0.25) 70%, rgba(13, 40, 61, 0) 100%), url(${dealData.heroImages[2].path})`}}>
    <div className={styles.heroContent}>
      <p className={styles.heroLabel}>DISCOVER ROMANIA</p>
      <h1> Mysterious Vibes<br />in Transylvania
      </h1>
    <p className={styles.heroDetails}>
      {dealData.dealDestinations[0].destination.name},{" "}
      {dealData.dealDestinations[0].destination.country}{" "}
      *{dealData.dealDestinations[0].noOfNights}{" "}nights<br />(Complimentary Transylvania day trip)
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
    <p className={styles.priceBasis}>*Price per person, based on two people sharing, bed and breakfast, with return flights from London.</p>
    <a href="#enquiry" className={styles.heroButton}>
      <span>Enquire now</span>
      <Image
        src="/lcv_arrow_right.svg"
        alt=""
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
        alt=""
        width={16}
        height={16}
      />
       </button>
      <a href="https://www.youtube.com/watch?v=__M3_rXOAfY" target="_blank" rel="noopener noreferrer" className={styles.watchVideoButton}>
      <span>Watch video</span>
      <Image
        src="/watch-video.svg"
        alt=""
        width={16}
        height={16}
      />
     </a>
    </div>
    </section>
    {/* overview */}
    <section className={styles.overview} style={{"--overview-image": `url(${dealData.overview.images[3].path})` }}>
      <div className={styles.overviewLeft}>
        <p className={styles.sectionName}>01. Overview</p>
         <h2 className={styles.sectionHeader}>A Glimpse of Romania</h2>
         <div className={styles.sectionContent} dangerouslySetInnerHTML={{__html: dealData.overview.content }}
         />
       </div>
     <div className={styles.overviewRight}>
      <div className={styles.overviewGallery}>
        <Image className={styles.overviewGalleryMain}
        src={dealData.overview.images[0].path}
        alt={dealData.overview.images[0].alt}
        width={684}
        height={456}        
        />

        <Image
        src={dealData.overview.images[1].path}
        alt={dealData.overview.images[1].alt}
        width={338}
        height={225}       
        />
        <div className={styles.overviewGalleryLast}>
        <Image
        src={dealData.overview.images[2].path}
        alt={dealData.overview.images[2].alt}
        width={338}
        height={225}        
        />
        <button className={styles.viewImagesButton}>
      <span>View all images</span>
      <Image
        src="/view-all-images.svg"
        alt=""
        width={16}
        height={16}
      />
       </button>
       </div>
        

      </div>   
    </div>
    </section>
  </main>
  </>
)}