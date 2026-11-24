"use client";

import styles from "./page.module.css"
import Image  from "next/image"
import dealData from "../data/deal-page-data.json"
import { useState } from "react";

export default function Home () {
  const [showAllDays, setShowAllDays] = useState(false);
  const excursions = dealData.excursions.match(/<li>(.*?)<\/li>/g).map((item) => item.replace(/<\/?li>/g, ""));
  const uniqueExcursions = excursions
  .filter((item, index) => excursions.indexOf(item) === index)
  .map((item) => {
    const [name, price] = item.split(" - £");
    return { name, price: `£${price}` };
  });

  const finePrintItems = dealData.finePrint.match(/<li>[\s\S]*?<\/li>/g) || [];
  const [showAllFinePrint, setShowAllFinePrint] = useState(false);

  const [activeTab, setActiveTab] = useState(0);
  const destinationSections =
  dealData.dealDestinations[0].destination.techneDestinationSection;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
return (
  <>
  {/* header */}
  <header id="top" className={styles.header}>
    <div className={styles.headerContainer}>
      <a href="#top">
        <Image id="logo"
        src="/lcv-logo.png"
        alt="Low Cost Vibes."
        width={250}
        height={40}
      />
      </a>
      <nav className={styles.navigation}>
        <ul className={`${styles.navList} ${isMenuOpen ? styles.navOpen : ""}`}>
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
        <button type="button" className={styles.mobileMenu} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation" aria-expanded={isMenuOpen}>
          <Image src="/menu.svg" alt="" width={38} height={38} />
        </button>
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
    <section id="overview" className={styles.overview} style={{"--overview-image": `url(${dealData.overview.images[3].path})` }}>
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
    <section id="itinerary" className={styles.itineraries}>
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
    <section id="hotel" className={styles.hotels} style={{"--hotels-image": `url(${dealData.hotels[0].images[4].path})` }}>
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
          alt="Indoor hotel swimming pool with blue water, wooden walls and teal mosaic feature wall"
          width={338}
          height={232}        
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
       <section className={styles.hotelAmenities}>
        <div className={styles.amenitiesCard}>
          <h3 className={styles.amenitiesTitle}>
            <Image 
            src="/hotel 2.svg" 
            alt=""
            width={27} 
            height={20} 
            />
            Hotel amenities
          </h3>
          <button className={styles.viewMoreButton} type="button">
            <span>View more</span>
            <Image
              src="/chevron-down.svg"
              alt=""
              width={16}
              height={16}
            />
          </button>
          <div className={styles.amenitiesList}>
            <div className={styles.amenityItem}>
              <Image 
              src="/hotel-free-parking.svg" 
              alt="" 
              width={25} 
              height={25} 
              />
              <span>Free parking</span>
            </div>
            <div className={styles.amenityItem}>
              <Image 
              src="/hotel-wifi.svg" 
              alt="" 
              width={25} 
              height={25} 
              />
              <span>Free Internet (WiFi)</span>
            </div>
            <div className={styles.amenityItem}>
              <Image 
              src="/hotel-shuttle-bus.svg" 
              alt="" 
              width={25} 
              height={25} 
              />
              <span>Shuttle bus service</span>
            </div>
            <div className={styles.amenityItem}>
              <Image 
              src="/hotel-business-center.svg" 
              alt="" 
              width={25} 
              height={25} 
              />
              <span>Business Center with Internet Access</span>
            </div>
            <div className={styles.amenityItem}>
              <Image 
              src="/hotel-conference-facilities.svg" 
              alt="" 
              width={20} 
              height={20} 
              />
              <span>Conference facilities</span>
            </div>
            </div>
            </div>

            <div className={styles.amenitiesCard}>
          <h3 className={styles.amenitiesTitle}>
            <Image 
            src="/room-amenities.svg" 
            alt=""
            width={27} 
            height={20} 
            />
            Room amenities
          </h3>
          <button className={styles.viewMoreButton} type="button">
            <span>View more</span>
            <Image
              src="/chevron-down.svg"
              alt=""
              width={16}
              height={16}
            />
          </button>
          <div className={styles.amenitiesList}>
            <div className={styles.amenityItem}>
              <Image 
              src="/room-flatscreen-tv.svg" 
              alt="" 
              width={25} 
              height={25} 
              />
              <span>Flatscreen TV</span>
            </div>
            <div className={styles.amenityItem}>
              <Image 
              src="/room-housekeeping.svg" 
              alt="" 
              width={25} 
              height={25} 
              />
              <span>Housekeeping</span>
            </div>
            <div className={styles.amenityItem}>
              <Image 
              src="/room-service.svg" 
              alt="" 
              width={25} 
              height={25} 
              />
              <span>Room service</span>
            </div>
            <div className={styles.amenityItem}>
              <Image 
              src="/hotel-bar-lounge.svg" 
              alt="" 
              width={25} 
              height={25} 
              />
              <span>Minibar</span>
            </div>
            <div className={styles.amenityItem}>
              <Image 
              src="/room-seating-area.svg" 
              alt="" 
              width={20} 
              height={20} 
              />
              <span>Seating area</span>
            </div>
            </div>
        </div>
       </section>
    </section>
    {/* dealDestinations */}
    <section id="destinations" className={styles.dealDestinations}>
      <p className={styles.sectionName}>05. Destinations</p>
      <h2 className={styles.sectionHeader}>Discover Your Destinations</h2>
      <h3 className={styles.destinationsLabel}>Bucharest, Romania *3 nights </h3>
      <Image className={styles.destinationsImage}
      src={dealData.dealDestinations[0].destination.image.path}
      alt="Aerial view of a city at dusk with lit historic buildings, a domed roof, a river and a large lit building in the distance"
      width={1392}
      height={580}
      />
      <div className={styles.destinationsBlock}>
        <div className={styles.destinationTabs}>
          <button className={`${styles.destinationTabsBtn} ${activeTab === 0 ? styles.activeDestinationTab : ""}`} onClick={() => setActiveTab(0)}>A SNEAK PEAK</button>
          <button className={`${styles.destinationTabsBtn} ${activeTab === 1 ? styles.activeDestinationTab : ""}`} onClick={() => setActiveTab(1)}>HIGHLIGHTS</button>
          <button className={`${styles.destinationTabsBtn} ${activeTab === 2 ? styles.activeDestinationTab : ""}`} onClick={() => setActiveTab(2)}>SEASONS TO TRAVEL</button>
          <button className={`${styles.destinationTabsBtn} ${activeTab === 3 ? styles.activeDestinationTab : ""}`} onClick={() => setActiveTab(3)}>WORTH A VISIT</button>
          <button className={`${styles.destinationTabsBtn} ${activeTab === 4 ? styles.activeDestinationTab : ""}`} onClick={() => setActiveTab(4)}>DISCOVER MORE</button>
          <button className={`${styles.destinationTabsBtn} ${activeTab === 5 ? styles.activeDestinationTab : ""}`} onClick={() => setActiveTab(5)}>CULTURE & TRADITIONS</button>
        </div>
        <div className={styles.destinationTabContent}>
          <h3 className={styles.destinationTabHeading}>
            {destinationSections[activeTab].techneDestinationSectionTitle.title}
          </h3>
        </div>
        <div className={
          activeTab === 3
            ? styles.destinationThreeColumns
            : activeTab === 4
            ? styles.destinationTwoColumns
            : ""
          }>  
          {destinationSections[activeTab].images
            .filter((image) => image.description)
            .map((image, index) => (
              <div key={index} className={styles.destinationDescription}>
                {activeTab === 3 && (
                  <h4 className={`${styles.subHeader} ${styles.destinationDescriptionHeader}`}>
                    {["Palace of Parliament", "Stavropoleos Church", "Village Museums"][index]}
                  </h4>
                )}  
                {activeTab === 4 && (
                  <h4 className={`${styles.subHeader} ${styles.destinationDescriptionHeader}`}>
                    {["Romanian Athenaeum", "Spring Palace"][index]}
                  </h4>
                )}
                <div dangerouslySetInnerHTML={{
                  __html: image.description
                }} />
              </div>
             ))}
        </div>      
      </div>
      </section>    
    {/* excursions */}
    <section id="excursions" className={styles.excursions}>
      <p className={styles.sectionName}>06. Excursions</p>
      <h2 className={styles.sectionHeader}>Experiences Beyond the Ordinary</h2>
      <Image className={styles.excursionImage}
      src={dealData.excursionImage.path}
      alt="Three travel scenes: couple by blue-domed buildings at sunset, two people cycling on a pier, and friends taking a selfie at a night concert"
      width={1392}
      height={769}
      />
      <div className={styles.excursionsGrid}>
        {uniqueExcursions.map((excursion, index) => (
          <div className={styles.excursionCard} key={index}>
            <p className={styles.excursionsName}>{excursion.name}</p>
             <span className={styles.excursionsPrice}>{excursion.price}</span>
          </div>
         ))}
      </div>
    </section>
    {/* Payment */}
    <section id="payment" className={styles.payment}>
      <p className={styles.sectionName}>07. Payment</p>
      <h2 className={styles.sectionHeader}>Your Payment Plan</h2>
      <p className={`${styles.sectionContent} ${styles.paymentSubheader}`}><span className={styles.sectionContentBold}>Low Deposits:</span> The first low deposit, due per person, will be presented at the time of booking.</p>
      <div className={styles.paymentGrid}>
        <div className={styles.paymentLeft}>
          <div className={styles.paymentCard}>
            <p className={`${styles.itineraryCardNo} ${styles.paymentCardNo}`}>01</p>
            <div className={styles.paymentCardContent}>
            <h3 className={`${styles.subHeader} ${styles.paymentHeader}`}><span className={styles.paymentHighlight}>25%</span> Low deposit</h3>
            <p className={styles.sectionContent}>Initially, a 25% low deposit of the total holiday cost is required</p>
            </div>
          </div>       
          <div className={styles.paymentCard}>
            <p className={`${styles.itineraryCardNo} ${styles.paymentCardNo}`}>02</p>
            <div className={styles.paymentCardContent}>
            <h3 className={`${styles.subHeader} ${styles.paymentHeader}`}><span className={styles.paymentHighlight}>Monthly</span> Balance</h3>
            <p className={styles.sectionContent}>The balance is settled monthly at the time of booking, as agreed upon between the lead passenger and the travel consultant.</p>
            </div>
          </div>    
          <div className={styles.paymentCard}>
            <p className={`${styles.itineraryCardNo} ${styles.paymentCardNo}`}>03</p>
            <div className={styles.paymentCardContent}>
            <h3 className={`${styles.subHeader} ${styles.paymentHeader}`}><span className={styles.paymentHighlight}>35%</span> Final payment</h3>
            <p className={styles.sectionContent}>The final 35% will be settled 6 weeks before departure.</p>
            </div>
          </div>
        </div>
        <div className={styles.paymentRight}>
          <Image className={styles.paymentImage}
            src={dealData.paymentImage.path}
            alt="Payment logos: Visa, Mastercard, Amex, Google Pay, Apple Pay, PayPal, Super, Klarna, Clearpay, Link and Direct Debit"
            width={950}
            height={524}        
          />
          <p className={styles.paymentMore}>
            <Image
              src="/telephone.svg"
              alt=""
              width={16}
              height={16}
            />
            <span>You can customise your payment plan by speaking to your Low Cost Vibes expert.</span>
         </p>
        </div>
      </div>

    </section>
    {/* Testimonials */}
    <section className={styles.testimonials}>
      <p className={styles.sectionName}>08. Testimonials</p>
      <h2 className={styles.sectionHeader}>Words from Travellers</h2>
      <div className={styles.testimonialsGrid}>
        <div className={styles.testimonialsCard}>
          <div className={styles.testimonialsIcon}>
            <Image
              src="/quote.svg"
              alt=""
              width={25}
              height={25}
            />
          </div>
          <h3 className={styles.testimonialsHeader}>A little bit of everything</h3>
          <p className={styles.testimonialsContent}>“Bran Castle was definitely the highlight for me. We also loved wandering around Bucharest and seeing all the beautiful old buildings. Such an interesting few days away.”
          <br /><br /><span className={styles.testimonialsReviewer}>Tamsin Vale</span></p>
        </div>

        <div className={styles.testimonialsCard}>
          <div className={styles.testimonialsIcon}>
            <Image
              src="/quote.svg"
              alt=""
              width={25}
              height={25}
            />
          </div>
          <h3 className={styles.testimonialsHeader}>A destination worth discovering</h3>
          <p className={styles.testimonialsContent}>“Bucharest was such a pleasant surprise. The hotel made a comfortable base, and the Transylvania day trip was a lovely way to see more of the country.”
          <br /><br /><span className={styles.testimonialsReviewer}>Elspeth Rowe</span></p>
        </div>

        <div className={styles.testimonialsCard}>
          <div className={styles.testimonialsIcon}>
            <Image
              src="/quote.svg"
              alt=""
              width={25}
              height={25}
            />
          </div>
          <h3 className={styles.testimonialsHeader}>More than just a city break</h3>
          <p className={styles.testimonialsContent}>“I didn't expect Romania to have so much to explore. The castles, mountain views and little streets in Brașov made the trip really memorable.”
          <br /><br /><span className={styles.testimonialsReviewer}>Fergus Hales</span></p>
        </div>

        <div className={styles.testimonialsCard}>
          <div className={styles.testimonialsIcon}>
            <Image
              src="/quote.svg"
              alt=""
              width={25}
              height={25}
            />
          </div>
          <h3 className={styles.testimonialsHeader}>A Castle Worth Visiting</h3>
          <p className={styles.testimonialsContent}>“Seeing Bran Castle in person was wonderful. The journey through Transylvania was just as memorable, with beautiful mountain scenery and charming little towns along the way.”
          <br /><br /><span className={styles.testimonialsReviewer}>Iona Mercer</span></p>
        </div>
      </div>      
    </section>
    {/* FAQs */}
    <section id="faqs" className={styles.faqs}>
      <p className={styles.sectionName}>09. FAQs</p>
      <h2 className={styles.sectionHeader}>Everything You Need to Know</h2>
      <div className={styles.faqList}>
        {dealData.dealFAQs.map((faq) => (
          <div className={styles.faqItem} key={faq.id}>
            <div className={styles.faqQuestion}>
              <button type="button" className={styles.faqArrow} onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} aria-expanded={openFaq === faq.id}>
                {openFaq === faq.id ? (
                  <Image src="/play-triangle down.svg" alt="" width={30} height={28} />
                ) : (
                  <Image src="/play-triangle.svg" alt="" width={28} height={30} />
                )}
              </button>
              <h3 className={styles.subHeader}>{faq.question}</h3>
            </div>
            {openFaq === faq.id && (
              <div className={styles.faqAnswer} dangerouslySetInnerHTML={{ __html: faq.answer }} />
            )}
          </div>
        ))}              
        </div>
      </section>
     {/* FinePrint */}
    <section className={styles.finePrint}>
      <p className={styles.sectionName}>10. Fine Print</p>
      <h2 className={styles.sectionHeader}>Important Things to Know</h2>
      <div className={styles.finePrintGrid}>
      <div className={styles.finePrintLeft}>
      <Image className={styles.finePrintImage}
      src={dealData.finePrintImage.path}
      alt="Two people's hands over a world map on a table, one holding a pen beside an open notebook and the other pointing at the map"
      width={802}
      height={443}
      />
      </div>
      <div className={styles.finePrintRight}>
        <ol className={styles.finePrintFirstList}>
          {finePrintItems.slice(0, 8).map((item, index) => (
            <li
        key={index}
        dangerouslySetInnerHTML={{
          __html: item.replace(/^<li>|<\/li>$/g, "")
         }}
         />
       ))}
      </ol>
      {!showAllFinePrint && (
        <button
          className={styles.readMoreButton}
          onClick={() => setShowAllFinePrint(true)}
        >
          <span>Read more</span>
          <Image
            src="/chevron.svg"
            alt=""
            width={16}
            height={16}
          />
        </button>
      )}
        </div>
        {showAllFinePrint && (
        <div className={styles.finePrintMore}>
          <ol start={9}>
            {finePrintItems.slice(8).map((item, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{
                  __html: item.replace(/^<li>|<\/li>$/g, "")
                }}
              />
            ))}
          </ol>
          <button
          className={styles.showLessButton}
          onClick={() => setShowAllFinePrint(false)}>
          <span>Show less</span>
          <Image
            src="/chevron_up.svg"
            alt=""
            width={16}
            height={16}
          />
          </button>
        </div>
      )}
      </div>
    </section>
    {/* Enquiry */}
    <section id="enquiry" className={styles.enquiry}>
      <p className={styles.sectionName}>11. Enquiry</p>
      <h2 className={styles.sectionHeader}>Make an Enquiry</h2>
      <h3 className={styles.subHeader}>Mysterious Vibes in Transylvania</h3>
      <div className={styles.enquiryLeft}>
        {!isSubmitted ? (<form className={styles.enquiryForm} onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
        <div className={styles.enquiryDetail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.enquiryDetail}>
          <label htmlFor="email">
          Email <span className={styles.error}>*</span>
          </label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.enquiryDetail}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>
        <button type="submit" className={`${styles.heroButton} ${styles.formButton}`}>
          <span>Enquire now</span>
          <Image
            src="/arrow-white.svg"
            alt=""
            width={16}
            height={16}
          />
       </button>
    </form>
    ) : (
    <div className={styles.successMessage} role="status">
      <p>Thank you! Your enquiry has been submitted successfully.</p>
    </div>
    )}
      </div>
      <div className={styles.enquiryRight}></div>
      </section>
      {/* Footer */}
      <section className={styles.footer}>
        <div className={styles.footerRight}>
          <a href="#top">
        <Image id="logo"
        src="/lcv-logo.png"
        alt="Low Cost Vibes."
        width={250}
        height={40}
      />
      </a>
      <h3 className={styles.footerHeader}>MYSTERIOUS VIBES IN TRANSYLVANIA</h3>
        </div>
        <a href="#top" className={styles.backToTop}>
      <span>Back to top</span>
      <Image
        src="/up-arrow.svg"
        alt=""
        width={16}
        height={16}
      />
    </a>
      </section>
  </main>
  </>
)}