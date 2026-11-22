"use client";

import styles from "./page.module.css"
import Image  from "next/image"
import dealData from "../data/deal-page-data.json"
import { useState } from "react";

export default function Home () {
  const [showAllDays, setShowAllDays] = useState(false);
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
        alt="Illuminated historic building and equestrian statue in Bucharest beneath a colourful sunset sky."
        width={684}
        height={456}        
        />

        <Image
        src={dealData.overview.images[1].path}
        alt="Colourful historic buildings and rooftops in Sighisoara, surrounded by green trees."
        width={338}
        height={225}       
        />
        <div className={styles.overviewGalleryLast}>
          <Image
          src={dealData.overview.images[2].path}
          alt="Bran Castle rising above dense green trees beneath a colourful evening sky."
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
     {/* highlight */}
    <section className={styles.highlight}>
      <p className={styles.sectionName}>02. Highlights</p>
      <h2 className={styles.sectionHeader}>The Highlights of Your Holiday</h2>
      <div className={styles.highlightGrid}>
        <div className={`${styles.highlightCard} ${styles.highlightCardTop}`}>
          <div className={styles.highlightCardContent}>
          <div className={styles.highlightIcon}>
            <Image
              src="/plane.svg"
              alt=""
              width={49}
              height={32}
            />
          </div>
          <h3 className={styles.highlightHeader}>Return flights from London</h3>
          <p className={styles.highlightContent}>Regional airports available upon request.</p>
          </div>
        </div>

        <div className={`${styles.highlightCard} ${styles.highlightCardTop}`}>
          <div className={styles.highlightCardContent}>
          <div className={styles.highlightIcon}>
            <Image
              src="/hotel.svg"
              alt=""
              width={49}
              height={32}
            />
          </div>
          <h3 className={styles.highlightHeader}>Stay 3 nights in Bucharest at Parliament Hotel 4⭐</h3>
          </div>
        </div>

        <div className={`${styles.highlightCard} ${styles.highlightCardTop}`}>
          <div className={styles.highlightCardContent}>
          <div className={styles.highlightIcon}>
            <Image
              src="/star.svg"
              alt=""
              width={32}
              height={32}
            />
          </div>
          <h3 className={styles.highlightHeader}>Complimentary tour:</h3>
          <p className={styles.highlightContent}>Transylvania Day Trip from Bucharest</p>
          </div>
        </div>

        <div className={`${styles.highlightCard} ${styles.highlightCardTop}`}>
          <div className={styles.highlightCardContent}>
          <div className={styles.highlightIcon}>
            <Image
              src="/shield-check.svg"
              alt=""
              width={32}
              height={32}
            />
          </div>
          <h3 className={styles.highlightHeader}>Financially protected</h3>
          </div>
        </div>

        <div className={`${styles.highlightCard} ${styles.highlightCardRestaurants}`}>
          <div className={styles.highlightCardContent}>
          <div className={styles.highlightIcon}>
            <Image
              src="/restaurant.svg"
              alt=""
              width={32}
              height={32}
            />
          </div>
          <h3 className={styles.highlightHeader}>Nearby Restaurants</h3>
          <div className={styles.highlightChipsFlex}>
          <p className={`${styles.highlightContent} ${styles.highlightContentChips}`}>Pergola Cotroceni</p>
          <p className={`${styles.highlightContent} ${styles.highlightContentChips}`}>Bocca Lupo</p>
          <p className={`${styles.highlightContent} ${styles.highlightContentChips}`}>Derby</p>
          </div>
          </div>
        </div>
        
         <div className={`${styles.highlightCard} ${styles.highlightCardAttractions}`}>
          <div className={styles.highlightCardContent}>
          <div className={styles.highlightIcon}>
            <Image
              src="/map-pin.svg"
              alt=""
              width={29}
              height={29}
            />
          </div>
          <h3 className={styles.highlightHeader}>Nearby Attractions</h3>
          <div className={styles.highlightChipsFlex}>
          <p className={`${styles.highlightContent} ${styles.highlightContentChips}`}>The Stairs of Happiness</p>
          <p className={`${styles.highlightContent} ${styles.highlightContentChips}`}>The Zodiac Fountain</p>
          <p className={`${styles.highlightContent} ${styles.highlightContentChips}`}>Palace of Parliament</p>
          </div>
          </div>
        </div>
      </div>
    </section>
     {/* itineraries */}
    <section className={styles.itineraries}>
        <p className={styles.sectionName}>03. Itinerary</p>
      <h2 className={styles.sectionHeader}>Your Journey, Day by Day</h2>
        <div className={styles.itineraryBlock}>
          {dealData.itineraries.slice(0, showAllDays ? 4 : 2).map((itinerary) => (
          <div className={styles.itineraryCard} key={itinerary.id}>
            <div className={styles.itineraryCardHeader}>
            <p className={styles.itineraryCardNo}>{String(itinerary.day).padStart(2, "0")}</p>
            <div>        
            <h3 className={styles.subHeader}>{itinerary.content.match(/<strong>(.*?)<\/strong>/)?.[1].replace(/&nbsp;/g, " ").trim()}</h3>
            <p className={styles.date}>Day {String(itinerary.day).padStart(2, "0")}</p>
            </div>
            </div>
            <div className={styles.sectionContent} dangerouslySetInnerHTML={{__html: itinerary.content.replace(/^<p>[\s\S]*?<\/p>/, "") }}
            />
         </div>
         ))}
        </div>
        <button className={styles.viewAllButton} onClick={() => setShowAllDays(!showAllDays)}>
      <span>{showAllDays ? "Show less" : "View all 4 days"}</span>
      <Image
        src={showAllDays ? "/chevron_up.svg" : "/chevron.svg"}
        alt=""
        width={16}
        height={16}
      />
       </button>
    </section>
    {/* hotels */}
    <section className={styles.hotels} style={{"--hotels-image": `url(${dealData.hotels[0].images[4].path})` }}>
     <div className={styles.hotelLeft}>
      <p className={styles.sectionName}>04. Hotel</p>
      <h2 className={styles.sectionHeader}>Your Stay in Bucharest</h2>
      <div className={styles.hotelGallery}>
        <Image className={styles.hotelGalleryMain}
        src={dealData.hotels[0].images[5].path}
        alt="Modern hotel lounge with cream curved sofas, round table, champagne glasses and warm wooden wall lighting"
        width={684}
        height={438}        
        />

        <Image
        src={dealData.hotels[0].images[1].path}
        alt="Modern hotel bathroom with white marble walls, round illuminated mirror, sink and toiletries"
        width={338}
        height={232}       
        />
        <div className={styles.hotelGalleryLast}>
          <Image
          src={dealData.hotels[0].images[2].path}
          alt=""
          width={338}
          height={232}        
          />
          <button className={styles.viewImagesButton}>
            <span>View all images</span>
            <Image
              src="/view-all-images.svg"
              alt="Indoor hotel swimming pool with blue water, wooden walls and teal mosaic feature wall"
              width={16}
              height={16}
            />
         </button>
        </div>       
      </div>   
    </div>
    <div className={styles.hotelRight}>
    <h3 className={styles.subHeader}>{dealData.hotels[0].name}</h3>
    <div className={styles.hotelRating}>
      {Array.from({ length: Number(dealData.hotels[0].rating) }).map((_, index) => (
        <Image
              key={index}
              src="/rating_star.svg"
              alt=""
              width={18}
              height={18}
            />
            ))}
            </div>
         <div className={styles.sectionContent} dangerouslySetInnerHTML={{__html: dealData.hotels[0].description }}
         />
       </div>
    </section>
  </main>
  </>
)}