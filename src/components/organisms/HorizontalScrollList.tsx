import React, { useState, useRef, ReactNode, FC, ReactElement } from 'react';
import { Arrow, Caret } from '../../../components/Icons';
import { Discounts } from '@/type/structs';
import { Discount } from '../molecules/Discount';

//TODO: refactor and make this reusable for all lists
 interface Props {
      items: Array<Discounts>
      header: ReactElement
      isControlsAllowed?: boolean
 }
export const HorizontalScrollList: FC<Props> = ({ items, header, isControlsAllowed = true } ) => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="my-12">
            <div className='mb-4'>{ header }</div>
            <div className='relative'
                  onMouseOver={() => {
                        setIsHovered(true);
                  }}
                  onMouseOut={() => {
                        setIsHovered(false)
                  }}
            >
                  <div
                        className="overflow-x-scroll no-scrollbar flex flex-row space-x-[2]"
                        ref={scrollContainerRef}
                  >
                        {
                              items.map((item, indx) => (
                                    <Discount key={indx} {...item}/>
                              ))
                        }
                  </div>
                  {
                        isHovered ? isControlsAllowed && (
                              <div className='flex justify-between absolute top-1/2 w-full pointer-events-none'>
                                    <button className='relative right-4 p-[12px] rounded-full bg-purple-200 shadow-xl'>
                                          <Arrow fill="#ffffff" className='rotate-180'/>
                                    </button>
                                    <button className='relative left-4 p-[12px] rounded-full bg-purple-200 shadow-xl'>
                                          <Arrow fill={"#fff"} />
                                    </button>
                              </div>
                        ) : null
                  }    
            </div>
    </div>
  );
};
