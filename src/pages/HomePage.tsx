//import React from 'react';
//import { useNavigate } from 'react-router-dom';
import landingImage from '../assets/rol.png';
import Image2 from '../assets/1.png';
import Image3 from '../assets/2.png';
import Image4 from '../assets/3.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  //const navigate = useNavigate();
  
 // const handleSearchSubmit = (searchQuery) => {
  //navigate(`/search/${searchQuery}`);
  //};

  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-blue-600">
          El mejor rol automatico y rapído
        </h1>
        <span className="text-x1">Tu rol está a solo un click!</span>
        <div className='grid md:grid-cols-2 gap-5'>
          <img src={landingImage} alt="Landing" />
          <div className='flex flex-col items-center justify-center gap-4 text-center'>
            <span className='font-bold text-3xl tracking-tighter'>
              El rol mas profesional del mercado
            </span>
            {/* Aquí puedes agregar más contenido si lo deseas */}
          </div>
          <Carousel>
            <CarouselContent>
              <CarouselItem><img src={Image2} alt="Carousel Item 1" /></CarouselItem>
              <CarouselItem><img src={Image3} alt="Carousel Item 2" /></CarouselItem>
              <CarouselItem><img src={Image4} alt="Carousel Item 3" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
