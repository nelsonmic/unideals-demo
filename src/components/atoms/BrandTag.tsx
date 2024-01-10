import { Discounts } from "@/type/structs"
import Image from "next/image"
import { FC } from "react"

interface Props {
      data: Pick<Discounts, "brandImage" | "brandName">
}
export const BrandTag: FC<Props> = ({ data }) => {
      return (
            <div className="m-2 absolute left-0 bottom-0 bg-white p-4 rounded-xl w-[70px] h-[70px]">
                  <div className="w-[100%] h-[100%]">
                        <Image 
                              src={data.brandImage}
                              fill
                              alt={`${data.brandName} logo`}
                              className="w-[100%] h-[100%] object-cover"
                        />
                  </div>
            </div>
      )
}