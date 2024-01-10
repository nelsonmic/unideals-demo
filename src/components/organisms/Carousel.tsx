import { useCarousel } from "@/hooks/useCarousel";
import clsx from "clsx";
import Image from "next/image";
import { Arrow, Caret } from "../../../components/Icons";

const slides: Array<string> = [
      "https://d34e3vwr98gw1q.cloudfront.net/2d4e1792891d9b061b1e9f4788e33921a4c0475349831edb9d6b979515b349bd/q90-w870-h305/f34aa528-5119-43aa-a6e0-2aea364b0ea1.jpeg",
      "https://d34e3vwr98gw1q.cloudfront.net/68308b48185b91a683b044b2e5ff8fd43481b4bd8785045d4dce37e1222d9b20/q90-w870-h305/81ff018a-6092-4f0a-a08f-e3332641d221.jpeg",
      "https://d34e3vwr98gw1q.cloudfront.net/75870d2c74843c4313d3b46de9001213d245151bae0b93e9089520cbb8c71f2e/q90-w870-h305/42b37bc0-3dc1-4988-a68e-0eaf122b020d.jpeg",
      "https://d34e3vwr98gw1q.cloudfront.net/0d06259a57a00b3264b1986543de951db78e079f124fb0b9054a27b557f835a7/q90-w870-h305/5bda7ff5-f983-4e62-b236-abe1845e9570.jpeg",
      "https://d34e3vwr98gw1q.cloudfront.net/7e220cf117fc8ebefe5bb982531e95db4341450c400e2be41ada26bc50019332/q90-w870-h305/6bf9475f-4d2f-48e1-92cf-62c439d91116.jpeg",
      "https://d34e3vwr98gw1q.cloudfront.net/f4621ba4a27518e48fae6693b6f4ed076dc2f17ac0170d9414f1e501db347a3e/q90-w870-h305/b9dd9556-63b2-4227-b985-25e2b33a6a56.jpeg"
]
export const Carousel = () => {
      const { index, setIndex, controls } = useCarousel(slides);
    
      return (
        <div className="flex flex-col gap-7 mt-9 ">
            <div className="relative w-full ">
                  <div className="relative h-[316px] w-full">
                        {slides.map((slide, idx) => (
                              <Image
                                    key={idx}
                                    fill
                                    className="w-[100%] h-full object-cover absolute top-0 left-0 opacity-0 ease-in duration-300"
                                    src={slide}
                                    alt="slider"
                                    style={{
                                          zIndex: index === idx ? 1 : 0,
                                          opacity: index === idx ? 1 : 0,
                                    }}
                              />
                        ))}
                  </div>
                  <div className='w-full px-6 flex justify-between absolute top-1/2 z-10'>
                              <button 
                                    className='relative p-2 border-black-100 border-2 rounded-full bg-white shadow-xl'
                                    onClick={controls.prev}
                              >
                                    <Caret className='rotate-180'/>
                              </button>
                              <button 
                                    className='relative p-2 border-black-100 border-2 rounded-full bg-white shadow-xl'
                                    onClick={controls.next}
                                    >
                                    <Caret />
                              </button>
                  </div>
            </div>
    
          <div className="flex space-x-4 items-center justify-center">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={clsx(
                  "h-[7px] w-[7px] rounded-full cursor-pointer bg-slate-300 transition-colors ease-in duration-1000",
                  {
                    "scale-[1.4] bg-black-100": index === idx,
                  }
                )}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      );
    };