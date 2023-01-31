import { Carousel } from "flowbite-react";
import raceHorseOne from "../assets/race-horse-1.jpg";
import raceHorseTwo from "../assets/race-horse-2.jpg";
import raceHorseThree from "../assets/race-horse-3.jpg";

const ImageCarrousel = () => {
    
return (
    <div className="h-[430px]">
      <Carousel slideInterval={5000}>
        <img src={raceHorseOne} className="w-fit" alt="..."/>
        <img src={raceHorseTwo} className="w-fit" alt="..." />
        <img src={raceHorseThree} className="w-fit" alt="..." />
      </Carousel>
    </div>
  );
};

export default ImageCarrousel;

