import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../assets/project-assets/hero1.webp';
import hero2 from '../assets/project-assets/hero2.webp';
import hero3 from '../assets/project-assets/hero3.webp';
import hero4 from '../assets/project-assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right-to-left, -1 = left-to-right

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === carouselImages.length - 1) {
          setDirection(-1); // Switch direction to left-to-right
          return prev - 1;
        } else if (prev === 0) {
          setDirection(1); // Switch direction to right-to-left
          return prev + 1;
        }
        return prev + direction;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      {/* Left Section */}
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
          We’re changing the way people shop.
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>

      {/* Right Section - Auto-Sliding Carousel with Reversing Effect */}
      <div className=' w-full overflow-hidden'>
        <div className='relative w-full h-[28rem] bg-neutral rounded-box'>
          <div
            className='absolute top-0 left-0 h-full flex transition-transform duration-3000 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className='w-full flex-shrink-0'>
                <img src={image} className='rounded-box h-full w-80 object-cover mx-auto' alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
