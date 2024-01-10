import { Discounts } from "@/type/structs"
import Image from "next/image"
import { FC } from "react"
import { Lightningbolt } from "../../../components/Icons"
import { BrandTag } from "../atoms/BrandTag"

export const Discount: FC<Discounts> = ({
      bannerImage,
      brandImage,
      brandName,
      discount,
      expiry,
      cashBack,
      tags,
}) => {
      return (
            <div 
                  className="flex-1 min-w-[320px] max-w-[320px] border border-white rounded-lg p-[7px] hover:shadow-xl hover:cursor-pointer hover:border-gray-300 transition duration-300 ease-in"
                  
            >
                  <div className="relative">
                        <div className="h-[180px] w-full">
                              <Image 
                                    src={bannerImage}
                                    fill
                                    alt=""
                                    className="w-[100%] h-[100%] object-cover rounded-lg"
                              />
                        </div>
                        <BrandTag data={{
                              brandImage,
                              brandName
                        }}/>
                  </div>
                  <div className="flex flex-col space-y-[2] mt-2">
                        {
                              expiry && (
                                    <span className="flex items-center space-x-2">
                                          <Lightningbolt />
                                          <p className="text-red-500 font-[600]">{ expiry }</p>
                                    </span>
                              )
                        }
                        {
                              cashBack && (
                                    <p className="text-red-500">{ cashBack }</p>
                              )
                        }
                        <p className="text-black-100 font-[600] text-lg">{ discount }</p>
                        <p className="text-grey-200 m-0 text-md">{ brandName }</p>
                        <div className="flex flex-row space-x-2 flex-wrap">
                              {
                                    tags.map((item, indx) => {
                                          return <p key={indx} className="text-md text-grey-200"> { item } </p>
                                    })
                              }
                        </div>
                  </div>
            </div>
      )
}