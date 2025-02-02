import React, { useState } from "react";
import styles from "./Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import produto1 from "../assets/produto1.png";
import produto2 from "../assets/produto2.png";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<"headphones" | "headsets">("headphones");

  const images = {
    headphones: [
      { id: 1, name: "TMA-2 Modular Headphone", img: produto1, description: "It's modular and designed to last" },
      { id: 2, name: "TMA-2 Wireless Headphone", img: produto2, description: "Experience high-quality sound" },
      { id: 3, name: "TMA-2 Studio Headphone", img: produto1, description: "Perfect for studio sessions" }
    ],
    headsets: [
      { id: 1, name: "TMA-2 Gaming Headset", img: produto2, description: "Designed for immersive gaming" },
      { id: 2, name: "TMA-2 Comfort Headset", img: produto1, description: "Comfortable for long usage" },
      { id: 3, name: "TMA-2 Pro Headset", img: produto2, description: "For professionals who demand more" }
    ]
  };

  const highlightedProduct = images[activeCategory][0];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const CustomArrow = ({ onClick, direction }: { onClick?: () => void; direction: "left" | "right" }) => (
    <button
      className={`${styles.reactMultiCarouselArrow} ${direction === "left" ? styles.left : styles.right}`}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24">
        <path
          d={direction === "left" ? "M15 18L9 12L15 6" : "M9 18L15 12L9 6"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <div className={styles.pageContainer}>
      <header className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          <button className={styles.menuButton}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18m-18 6h18" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <h1 className={styles.logoText}>Audio</h1>
        </div>
      </header>

      <div className={styles.categoryWrapper}>
        <div className={styles.categoryTabs}>
          <button
            className={`${styles.categoryTab} ${activeCategory === "headphones" ? styles.activeTab : ""}`}
            onClick={() => setActiveCategory("headphones")}
          >
            Headphone
          </button>
          <button
            className={`${styles.categoryTab} ${activeCategory === "headsets" ? styles.activeTab : ""}`}
            onClick={() => setActiveCategory("headsets")}
          >
            Headset
          </button>
        </div>
      </div>

      <section className={styles.productHighlight}>
        <img src={highlightedProduct.img} alt={highlightedProduct.name} className={styles.productImage} />
        <div>
          <h2>{highlightedProduct.name}</h2>
          <p>{highlightedProduct.description}</p>
          <a href="#shop" className={styles.shopLink}>
            Shop now →
          </a>
        </div>
      </section>

      <section className={styles.carouselSection}>
        <div className={styles.carouselHeader}>
          <h2 className={styles.carouselTitle}>Featured Products</h2>
          <button className={styles.seeAllButton}>See All</button>
        </div>
        <Carousel
          responsive={responsive}
          infinite
          showDots={false}
          customLeftArrow={<CustomArrow direction="left" />}
          customRightArrow={<CustomArrow direction="right" />}
        >
          {images[activeCategory].map((item) => (
            <div key={item.id} className={styles.carouselCard}>
              <img src={item.img} alt={item.name} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <a href="#shop" className={styles.shopLink}>
                Shop now →
              </a>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
