import clsx from "clsx"
import { FC } from "react"

interface Props {
      bgColor: string;
      discount: string;
      store: string;
}
export const Announcement: FC<Props> = ({ bgColor, discount, store }) => {
      return (
            <div className={clsx("flex flex-row space-x-2 flex-1 p-2 text-center items-center justify-center rounded-lg",bgColor)}>
                  <p className="font-[600]">{ discount }</p>
                  <p>{ store }</p>
            </div>
      )
}