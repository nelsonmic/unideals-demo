import Image from "next/image"
import { Instagram, Tiktok, Twitter, Youtube } from "../../../components/Icons"
import { useCountryPicker } from "@/hooks/useCountryPicker"

export const Footer = () => {
      const sizes = {
            width: 20,
            height: 20
      }
      const links = {
            workWithUs: {
                  title: "Work With Us",
                  data: ["Advertise", "Careers", "Student Verification", "Student Marketing", "Student Research"]
            },
            usefulStuff: {
                  title: "Useful Stuff",
                  data: [
                        "About", 
                        "How it Works", 
                        "Privacy Policy", 
                        "Terms & Conditions", 
                        "Student Card", 
                        "Chrome Extension", 
                        "All Categories", 
                        "All Brands", 
                        "Graduate Discount", 
                        "BeansiD Discount"
                  ]
            },
            needHelp: {
                  title: "Need Help?",
                  data: ["Support FAQs"]
            }
      }
      const {CountryPicker} = useCountryPicker();
      return(
            <footer className="mx-auto bg-purple-200 px-2 py-6">
                  <div className="mx-auto container">
                        <div className="flex flex-row justify-between">
                              <div className="w-[160px] h-[35px] relative">
                                    <Image 
                                          fill
                                          src="https://cdn.studentbeans.com/static/web/assets/images/sb_light_logo.svg"
                                          alt="logo"
                                          className="h-[100%] w-[100%] object-contain" 
                                    />
                              </div>
                              <div className="flex flex-row items-center space-x-2">
                                    <Instagram {...sizes} />
                                    <Tiktok {...sizes} />
                                    <Twitter {...sizes} />
                                    <Youtube {...sizes} />
                              </div>
                        </div>

                        <div className="mt-8 flex flex-row justify-start space-x-24">
                              <div className="text-white flex-1 max-w-[50%] flex-row flex justify-between items-start">
                                    <ul>
                                          <h3 className="text-lg font-[600] mb-2">{ links.workWithUs.title}</h3>
                                          {
                                                links.workWithUs.data.map((item, indx) => {
                                                      return <li key={indx} className="mb-2 text-sm"> {item} </li>
                                                })
                                          }
                                    </ul>
                                    <ul>
                                          <h3 className="text-lg font-[600] mb-2">{ links.usefulStuff.title}</h3>
                                          {
                                                links.usefulStuff.data.map((item, indx) => {
                                                      return <li key={indx} className="mb-2 text-sm"> {item} </li>
                                                })
                                          }
                                    </ul>
                                    <ul>
                                          <h3 className="text-lg font-[600] mb-2">{ links.needHelp.title}</h3>
                                          {
                                                links.needHelp.data.map((item, indx) => {
                                                      return <li key={indx} className="mb-2 text-sm"> {item} </li>
                                                })
                                          }
                                    </ul>
                              </div>
                              <div className="self-start bg-purple-100 p-4 max-h-max max-w-max rounded-xl">
                                    <div className="flex flex-row space-x-4 items-center mb-2">
                                          <div className="w-[120px] h-[35px] relative">
                                                <Image 
                                                      fill
                                                      src="https://cdn.studentbeans.com/static/web/assets/images/apps/ios_en.svg"
                                                      alt="app store"
                                                      className="h-[100%] w-[100%] object-cover" 
                                                />
                                          </div>
                                          <div className=" text-sm text-white">
                                                <span>
                                                      <p className="mb-0 font-[600]">4.8</p>
                                                </span>
                                                <p className="mb-0">32.6k ratings</p>
                                          </div>
                                    </div>

                                    <div className="flex flex-row space-x-4 items-center">
                                          <div className="w-[120px] h-[35px] relative">
                                                <Image 
                                                      fill
                                                      src="https://cdn.studentbeans.com/static/web/assets/images/apps/android_en.png"
                                                      alt="play store"
                                                      className="h-[100%] w-[100%] object-contain" 
                                                />
                                          </div>
                                          <div className=" text-sm text-white">
                                                <span>
                                                      <p className="m-0 font-[600]">4.8</p>
                                                </span>
                                                <p className="m-0">32.6k ratings</p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className=" border-b border-grey-200 mt-6 w-full text-white py-4">
                              <div className="max-w-[400px]">
                                    <h3 className="text-lg font-[600]">Where to find us</h3>
                                    <p className="text-sm">Student Beans is operated by The Beans Group.
                                          Registered in England and Wales under company number 5486885.
                                          Registered office 1 Vincent Square, London, SW1 2PN.
                                    </p>
                              </div>
                        </div>

                        <div className="flex flex-row justify-between items-center pt-6 text-white text-xs">
                              <p>© 2024 Student Beans</p>
                              <div className="relative">
                                    <div className="flex items-center space-x-4">
                                          <p>Select your country</p>
                                          <CountryPicker />
                                    </div>
                              </div>
                        </div>
                  </div>
            </footer>
      )
}