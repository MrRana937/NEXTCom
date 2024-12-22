//what this hoook will do what is the requrirement 
// see i want the current 
// hanlder for prev and next tranalte div postion by image width 
import { useEffect, useState } from "react";

interface CarouselOptions{
index:number,
ref:React.RefObject<HTMLElement>,
totalSlides:number,
multiItem:boolean,
itemsPerSlide:number
}


export const useCarousel = ({
index,
ref,
totalSlides,
multiItem,
itemsPerSlide
}:CarouselOptions)=>{

const timeout=60;
const [currentSlide, setCurrentSlide]=useState(index);
const [isTransitioning,setIsTransitioning]=useState(false);


useEffect(() => {
  if (!ref.current) 
    return;
  
    const slideElement=ref.current;
    if(multiItem)
    {
    const slidePercentage=(100/itemsPerSlide)*currentSlide;
    slideElement.style.transform=`translateX(-${slidePercentage}%)`
    }
    else{
    slideElement.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    const handleTransitionStart=()=>{
        setIsTransitioning(true);
        console.log("trasntionstarted");
    }

   const handleTransitionEnd=()=>{
     
     if(!multiItem){
     if(currentSlide==0)
     {
     slideElement.style.transition='none';
     setCurrentSlide(totalSlides-2);
     setTimeout(() => {
        slideElement.style.transition='transform 0.4s ease-in-out'
     }, timeout);
     }
     else if(currentSlide==totalSlides-1)
     {
     slideElement.style.transition='none';
     setCurrentSlide(1);
        setTimeout(() => {
          slideElement.style.transition = 'transform 0.4s ease-in-out'
        }, timeout)
     }
    }

     setIsTransitioning(false);
    }

     slideElement.addEventListener('transitionstart',handleTransitionStart);
     slideElement.addEventListener('transitionend', handleTransitionEnd);
    
    return () => {
        // console.log("its triggerd");
      slideElement.removeEventListener('transitionstart',handleTransitionStart);
       slideElement.removeEventListener(
         'transitionend',
         handleTransitionEnd
       )
    };
  
}, [currentSlide, totalSlides,itemsPerSlide,multiItem]);


const handlePrev=()=>{
 if(isTransitioning)
{
return;
}
if(multiItem)
{
setCurrentSlide((prev) => (Math.max(prev-itemsPerSlide,0)))
}
else{
setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
}
}

const handleNext=()=>{
    if(isTransitioning)
    {
    return;
    }
    if(multiItem){
    setCurrentSlide((prev)=>{
      let nextPosition=prev+itemsPerSlide;
      let remainingSlides=totalSlides-nextPosition;
      let finalPosition=nextPosition;
      if(remainingSlides<itemsPerSlide){
      finalPosition=nextPosition-(itemsPerSlide-remainingSlides);
      }
      return Math.min(finalPosition,totalSlides-1)
    }
    )
    }
    else
    {
   setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }
}


return [handlePrev,handleNext];
 
}

