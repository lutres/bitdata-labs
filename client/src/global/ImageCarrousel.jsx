import { Carousel } from "flowbite-react";
import raceHorseOne from "../assets/race-horse-1.jpg";
import raceHorseTwo from "../assets/race-horse-2.jpg";
import raceHorseThree from "../assets/race-horse-3.jpg";

const ImageCarrousel = () => {
    
return (
    <div className="w-full h-96">
      <Carousel slideInterval={5000} >
        <img src={raceHorseOne} alt="..."/>
        <img src={raceHorseTwo} alt="..." />
        <img src={raceHorseThree} alt="..." />
      </Carousel>
    </div>
  );
};

export default ImageCarrousel;

