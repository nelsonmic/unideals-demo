import { FC } from "react";
import { Caret } from "../../../components/Icons";

interface Props {
      title: string;
      description?: string;
      viewMore?: boolean
}
export const ListHeader:FC<Props> = ({ title, description, viewMore = true }) => {
      return (
            <div className='flex flex-row justify-between items-center'>
                  <span>
                        <h2 className='font-[600] text-black-100 text-xl'>{ title }</h2>
                        <p className='text-md text-grey-200'>{ description }</p>
                  </span>
                  {
                        viewMore && (
                              <span className='flex items-center text-purple-100'>
                                    <p>View More</p>
                                    <Caret width={18} height={18} fill='#9f4bfa'/>
                              </span>
                        )
                  }
          </div> 
      )
}