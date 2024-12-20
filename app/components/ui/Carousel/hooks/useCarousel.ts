//what this hoook will do what is the requrirement 
// see i want the current 
// hanlder for prev and next tranalte div postion by image width 



import { useEffect, useState } from "react";

export const useCarousel = (index: number, ref: React.RefObject<HTMLElement>,totalSldies:number)=>{

const timeout=60;
const [currentSlide, setCurrentSlide]=useState(index);
const [transition,setTransition]=useState(false);


useEffect(() => {
  if (ref.current) {
    const slideElement=ref.current;
    slideElement.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    const handleTransitionStart=()=>{
        setTransition(true);
        console.log("trasntionstarted");
    }

   const handleTransitionEnd=()=>{
     
     if(currentSlide==0)
     {
     slideElement.style.transition='none';
     setCurrentSlide(totalSldies-2);
     setTimeout(() => {
        slideElement.style.transition='transform 0.4s ease-in-out'
     }, timeout);
     }
     else if(currentSlide==totalSldies-1)
     {
     slideElement.style.transition='none';
     setCurrentSlide(1);
        setTimeout(() => {
          slideElement.style.transition = 'transform 0.4s ease-in-out'
        }, timeout)
     }

     setTransition(false);
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
  }
}, [currentSlide, totalSldies]);


const handlePrev=()=>{
 if(transition)
{
return;
}
setCurrentSlide((prev) => (prev - 1 + totalSldies) % totalSldies)
}

const handleNext=()=>{
    if(transition)
    {
    return;
    }
    setCurrentSlide((prev) => (prev + 1) % totalSldies)
}


return [handlePrev,handleNext];
 
}