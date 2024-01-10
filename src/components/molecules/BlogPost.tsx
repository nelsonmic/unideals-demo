import { BlogPost } from "@/type/structs";
import Image from "next/image";
import { FC } from "react";

interface Props {
  data: BlogPost;
}

export const BlogPosts: FC<Props> = ({ data }) => {
  return (
    <div className="relative flex-1 flex flex-col justify-evenly border rounded-lg">
      <div className="relative h-[250px] w-full">
        <Image
          src={data.image}
          fill
          alt=""
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="mt-6 flex-1 flex flex-col p-6 justify-between space-y-[50px]">
        <p className="capitalize text-black-100 font-semibold text-lg">
          {data.title}
        </p>
        <p className="text-sm text-grey-200"> {data.date} </p>
      </div>
    </div>
  );
};
