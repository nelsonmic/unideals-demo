"use client"
import { Announcement } from '@/components/molecules/Announcement';
import { Banner } from '@/components/molecules/Banner';
import { HorizontalScrollList } from '@/components/organisms/HorizontalScrollList';
import { MockDiscounts } from '@/mocks/discounts';
import Image from 'next/image'
import Link from 'next/link';
import { ListHeader } from '@/components/molecules/ListHeader';
import { MockBlogPosts } from '@/mocks/blog-posts';
import { BlogPosts } from '@/components/molecules/BlogPost';
import { MockProductListing } from '@/mocks/product-listing';
import { ProductListings } from '@/components/molecules/ProductListing';
import { Carousel } from '@/components/organisms/Carousel';

const Home = () => {
  return (
    <div>
      <Banner />
          <section className='max-w-[1200px] mx-auto flex flex-row space-x-4'>
              <Announcement bgColor='bg-yellow-100' discount='10% Student Discount' store="| CCUSA" />
              <Announcement bgColor='bg-purple-tint' discount='25% off speakers' store="| CCUSA" />
          </section>
        <section className='flex items-center justify-center container mx-auto py-6'>
          <div className='w-[60%]'>
            <Carousel />
          </div>
        </section>

        <section className='py-4 container mx-auto'>

          <HorizontalScrollList
            header={<ListHeader title="Most popular student discounts" description="Don't miss these trending student deals"/>} 
            items={MockDiscounts}
          />

          <div className='flex flex-row justify-between space-x-4 my-24'>
              <div className='flex items-center justify-center'>
                <div className="text-black-100 text-sm">
                  <p>Most popular items everyone&apos;s buying to kickstart the new year!</p>
                  <p className='font-[600] text-3xl'>The New Year&apos;s Shopping List</p>
                </div>
              </div>
              <div className='overflow-x-scroll no-scrollbar flex flex-row space-x-[2]'>
                {
                  MockProductListing.map((item, indx) => {
                    return (
                      <ProductListings key={indx} data={item}/>
                    )
                  })
                }
              </div>
          </div>

          <HorizontalScrollList
            header={<ListHeader title="Health before wealth" description='Get 2024 off on the right track with feel good health & fitness offers'/>} 
            items={MockDiscounts}
          />

          <HorizontalScrollList
            header={<ListHeader title="Holiday & Travel" description='Your next holiday is pending'/>} 
            items={MockDiscounts.slice().reverse()}
          />

          <HorizontalScrollList
            header={<ListHeader title="In with the you" description='Live your best life for less this jan'/>} 
            items={MockDiscounts}
          />

          <HorizontalScrollList
            header={<ListHeader viewMore={false} title="Featired Discounts" description="The discounts you won't want to miss"/>} 
            items={MockDiscounts.slice(2, 5)}
            isControlsAllowed={false}
          />

          <div className='my-14'>
            <ListHeader title="From the blog"/>
            <div className='flex flex-row justify-between space-x-4 mt-4'>
              {
                MockBlogPosts.map((item, indx) => (
                  <BlogPosts key={indx} data={item} />
                ))
              }
            </div>
          </div>
        </section>

        <section className='bg-gradient-to-l from-purple-200 via-purple-100 to-purple-300'>
            <div className="max-w-[1000px] mx-auto flex flex-row space-x-4 justify-between">
              <div className='py-28 flex flex-col space-y-4'>
                <h1 className="uppercase text-yellow-200 text-[2.5rem] leading-[45px] font-[700] mb-6">
                  The app gives you<br/> more
                </h1>
                <p className='text-white text-[1.4rem] leading-[30px]'>Exclusive savings on the brands you love <br/>most</p>
                <div className='flex flex-row items-center space-x-4'>
                  <Link href="" className='bg-yellow-200 px-4 py-2 rounded-lg'>Learn More</Link>
                  <div className="w-[120px] h-[35px] relative">
                    <Image 
                        fill
                        src="https://cdn.studentbeans.com/static/web/assets/images/apps/ios_en.svg"
                        alt="app store"
                        className="h-[100%] w-[100%] object-cover" 
                    />
                  </div>
                  <div className="w-[120px] h-[35px] relative">
                    <Image 
                          fill
                          src="https://cdn.studentbeans.com/static/web/assets/images/apps/android_en.png"
                          alt="app store"
                          className="h-[100%] w-[100%] object-cover" 
                      />
                  </div>
                </div>
              </div>

              <div className='relative flex-1 max-w-[500px]'>
                <Image 
                  src="https://cdn.studentbeans.com/static/web/assets/images/app_download_banner_app.png"
                  alt=""
                  fill
                  className='object-contain h-[100%] w-[100%]'
                />
              </div>
            </div>
        </section>
    </div>
  )
}

export default Home;