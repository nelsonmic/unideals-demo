import { ProductListing } from "@/type/structs"
import Image from "next/image"
import { FC } from "react"
import { BrandTag } from "../atoms/BrandTag"

interface Props {
      data: ProductListing
}
export const ProductListings: FC<Props> = ({ data }) => {
      return (
            <div
            className="flex flex-col space-y-4 flex-1 min-w-[250px] max-w-[250px] rounded-lg p-[7px] hover:cursor-pointer "
            >
                  <div className="relative">
                        <div className="h-[320px] w-full">
                              <Image 
                                    src={data.image}
                                    fill
                                    alt=""
                                    className="overflow-hidden w-[100%] h-[100%] object-cover rounded-lg hover:scale-110 transform duration-300 ease-in-out"
                              />
                        </div>
                        <BrandTag data={{
                              brandImage: data.brand.image,
                              brandName: data.brand.name
                        }}/>
                  </div>
                  <div className="text-black-100 text-sm">
                        <p>{ data.product }</p>
                        <span className="flex flex-row items-center space-x-2">
                              <p className="font-[600] text-xl">{data.price}</p>
                              <p className="line-through">{data.prevPrice}</p>
                        </span>
                        <p>{ data.discount}</p>
                  </div>

            </div>
      )
}