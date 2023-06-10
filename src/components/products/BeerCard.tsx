"use client";
import React, {useState} from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { addProduct } from "@/actions/cartActions";
import { toast } from "react-hot-toast";
interface BeerCardProps {
  id: number;
  image?: string;
  name?: string;
  abv?: number;
  ibu?: number;
  ebc?: number;
}

const BeerCard = (props: BeerCardProps) => {
  const router =useRouter();
  const [isLoading, setLoading] = useState(false);

  const addHandler = async( ) => {
    setLoading(true);
    await addProduct({id:props.id, name:props.name ?? '', image:props.image ?? ''});
    setLoading(false);
    router.refresh();
    toast.success('Item added to cart!')
  }

  return (
    <div className="w-full border flex flex-col justify-between p-6 text-black-100 cursor-pointer bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="relative w-full h-44 my-3 object-contain mt-4">
        <Image
          src={props.image ?? ""}
          alt={props.name ?? ""}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="w-full flex justify-between items-start gap-2 mt-6 mb-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {props.name}
        </h2>
      </div>

      <div className="relative flex w-full mt-1">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[14px]">{props.abv ?? "n/a"}</p>
            <p className="text-[14px] leading-[17px] font-bold">ABV</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[14px]">{props.ibu ?? "n/a"}</p>
            <p className="text-[14px] leading-[17px] font-bold">IBU</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[14px]">{props.ebc ?? "n/a"}</p>
            <p className="text-[14px] leading-[17px] font-bold">EBC</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <Button loading={isLoading} onClick={addHandler}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
