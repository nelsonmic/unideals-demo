import Image from "next/image"

export const Banner = () => {
      return (
            <section className="overflow-hidden mb-6 bg-gradient-to-b from-purple-200 via-purple-200 to-purple-100 flex justify-between items-center w-screen">
                  <div className="h-[200px] w-[200px] relative">
                        <Image 
                              fill
                              alt=""
                              src="https://cdn.studentbeans.com/static/web/assets/images/home_page_hero/home_hero_left.png"
                              className="right-0 h-[100%] w-[100%] object-contain object-left"
                        />
                  </div>
                  <div className="flex-1 max-w-max text-center r">
                        <h1 className="text-yellow-200 text-[3rem] leading-[45px] font-[700] mb-6">
                              The best student discounts and <br/> more from your favorite shops
                        </h1>
                        <p className="text-white text-[1em]">Your new favorite, top-rated student discount website with deals you won&apos;t find anywhere else</p>
                  </div>
                  
                  <Image 
                        width={200}
                        height={30}
                        alt=""
                        src="https://cdn.studentbeans.com/static/web/assets/images/home_page_hero/home_hero_right.png"
                  />
            </section>
      )
}