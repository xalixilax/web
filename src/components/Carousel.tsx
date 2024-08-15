

import useEmblaCarousel from 'embla-carousel-react';
import type React from 'react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CarouselArrowButtons';

type PropType = {
  slides: string[]
}

const Carousel: React.FC<PropType> = (props) => {
  // const { slides } = props
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick
  // } = usePrevNextButtons(emblaApi)

  return (
    <section className="w-full ">
      {/* <div className="overflow-hidden slope slope-sb-[4vw] pb-0" ref={emblaRef}>
        <div className="[backface-visibility:_hidden] flex">
          {slides.map((img, index) => (
              
            <div className='flex '><img
              src={img}
              className="flex"
              alt="..."
            />
            </div>
          ))}
        </div>
      </div>

      <div className="horizontal -mt-10">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div> */}
    </section>
  )
}

export { Carousel };

