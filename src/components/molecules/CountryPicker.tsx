import Image from "next/image"
import { Caret } from "../../../components/Icons"
import { SelectCountry } from "@/type/structs"
import { FC } from "react"
import clsx from "clsx"

interface Props{
      currentCountry: SelectCountry,
      isOpen: boolean
      onOpen: () => void;
}
export const CountryPicker:FC<Props> = ({ currentCountry, onOpen, isOpen }) => {
      return (
            <div 
                  className="hover:cursor-pointer flex flex-row space-x-2 items-center max-w-max p-2 rounded-sm"
                  onClick={onOpen}
            >
                  <div className="relative w-[30px] h-[20px]">
                        <Image 
                              src={currentCountry.flag}
                              fill
                              alt={`${currentCountry.country} flag`}
                              className="w-[100%] h-[100%] object-cover rounded-sm"
                        />
                  </div>
                  <Caret width={20} height={18} className={clsx("rotate-[90deg] transition-transform ease-in-out duration-300", {
                        "-rotate-[90deg]" : isOpen
                  })}/>
            </div>
      )
}