import { useEffect, useState } from 'react'
import '../styles/Carousel.css'
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'


type CarouselProps = {
  id: number,
  image: string,
  title: string,
  subtitle: string,
  cta: string
}

const universalBanner: CarouselProps[] = [
  {
    id: 1,
    image: banner1,
    title: 'Christmas Collection',
    subtitle: 'Up to 50% Off',
    cta: 'Shop Now'
  },
  {
    id: 2,
    image: banner2,
    title: 'New Arrivals',
    subtitle: 'Trending Now',
    cta: 'Explore'
  },
  {
    id: 3,
    image: banner3,
    title: 'Limited Time Deals',
    subtitle: 'Don\'t Miss out',
    cta: 'View Details'
  },
]


function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 400)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % universalBanner.length)
    }, 5000)
  
    return () => clearInterval(interval)
  }, [])


  const handleNext = () => goTo((currentIndex + 1) % universalBanner.length)
  const handlePrev = () => goTo(currentIndex === 0 ? universalBanner.length - 1 : currentIndex - 1)

  const currentBanner = universalBanner[currentIndex]
  return (
    <div className="carousel-container">
      <div 
        className={`carousel-background ${isTransitioning ? 'carousel-bg-fade' : ''}`}
        style={{backgroundImage: `url(${currentBanner.image})`}}>
      </div>

      {/* Gradient-overlay  */}
      <div className="carousel-overlay" />

      <div className="carousel-content">
        <div className="carousel-text-container">
          <span className="carousel-badge">EXCLUSIVE OFFER</span>
          <h1 className="carousel-title">{currentBanner.title}</h1>
          <p className="carousel-subtitle">{currentBanner.subtitle}</p>
          <button className="carousel-cta">{currentBanner.cta} →</button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="slider-dots">
        {universalBanner.map((_, i: number) => (
          <button 
            key={i}
            className={`dot ${i === currentIndex ? 'dot-active': ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={handleNext}
        className="slider-arrow slider-arrow-right">
          ›
      </button>
      <button 
        className="slider-arrow slider-arrow-left"
        onClick={handlePrev} 
        >
          ‹
      </button>
    </div>
  )
}

export default Carousel