import Image from "next/image"
import logo from "../../../public/images/sb_dark_logo.webp"
import { CountryPicker } from "../molecules/CountryPicker"

import { FC, ReactElement, ReactNode, useMemo } from "react"
import Link from "next/link"
import clsx from "clsx"
import { useCountryPicker } from "@/hooks/useCountryPicker"
import { Caret, Search } from "../../../components/Icons"

export const Navbar = () => {
      const { CountryPickerModal, CountryPicker} = useCountryPicker();
      const links = useMemo(() => ([
            "Trending Now", 
            "All", 
            "Fashion",
            "Food & Drink",
            "Tech & Mobile",
            "Beauty",
            "Health & Fitness",
            "Travel",
            "Entertainement",
            "More"
      ]), [])
      return (
            <nav className="container mx-auto p-2 mt-2">
                  <div className="flex items-center justify-between">
                        <div>
                              <div className="flex items-center space-x-4">
                                    <div className="w-[160px] h-[35px] relative">
                                          <Image 
                                                src={logo}
                                                fill
                                                alt="logo"
                                                className="h-[100%] w-[100%] object-contain" 
                                          />
                                    </div>
                                    <CountryPicker />
                              </div>
                              <CountryPickerModal />
                        </div>
                        <div className="flex-1 flex flex-row items-center px-4 space-x-2 max-w-[450px] bg-grey-100 rounded-lg">
                              <Search width="20px" height="20px"/>
                              <input 
                                    type="text"
                                    placeholder="Brands, items or categories"
                                    className="w-[100%] outline-none px-2 py-[12px] bg-transparent placeholder:text-black-100"
                              />
                        </div>
                        <ul
                              className="flex justify-between space-x-2"
                        >
                              <NavListItem 
                                    leftElement={(
                                          <p>🎓</p>
                                    )}
                                    url=""
                                    title="Graduate Discounts"
                              /> 
                              <NavListItem 
                                    url=""
                                    title="Blog"
                              /> 
                              <NavListItem 
                                    url=""
                                    title="Login"
                              />  
                              <NavListItem 
                                    url=""
                                    title="Register"
                                    style="bg-purple-200 hover:bg-purple-100 rounded-md text-white transition-colors duration-300 ease-in"
                                    styleLink="text-slate-100 hover:text-slate-100"
                              /> 
                        </ul>
                  </div>
                  <ul  className="flex justify-between mt-6 space-x-2">
                        {
                              links.map((item ,indx) => {
                                    return (
                                          <NavListItem 
                                                key={indx}
                                                url=""
                                                title={item}
                                                rightElement={item === "More" && (<Caret  className="rotate-[90deg]"/>)}
                                                style="px-2"
                                          /> 
                                    )
                              })
                        }
                  </ul>
            </nav>
      )
}

interface NavListItemProps {
      leftElement?: ReactNode;
      rightElement?: ReactNode;
      url: string;
      title: string;
      style?: string;
      styleLink?: string;
}

const NavListItem: FC<NavListItemProps> = ({url, leftElement, rightElement, title, style, styleLink }) => {
      return(
            <li className={clsx("flex items-center px-4", style)}>
                  <Link 
                        href={url}
                        className={clsx("text-black-100 font-[400] text-md py-2 hover:text-purple-100 transition-colors duration-300 ease-in", styleLink)}
                  >
                        <span className="flex items-center space-x-2">
                              { leftElement }
                              <p>{ title }</p>
                              { rightElement }
                        </span>
                  </Link>
            </li>
      )
}