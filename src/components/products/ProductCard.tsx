'use client';

import { addProduct } from "@/actions/cartActions";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
  id: number,
  image: string,
  name: string,
  tagline: string,
}

export default function ProductCard(props: ProductCardProps) {
  const router =useRouter();
  return (
    <Card className="overflow-hidden w-80 h-96 flex flex-col justify-between border pt-5">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none flex justify-center max-h-96"
      >
        <Image
        className="object-contain h-40 "
          src={props.image}
          width={150}
          height={150}
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="text-2xl">
          {props.name}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal text-base">
          {props.tagline}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
        onClick={async() => {
          await addProduct(props);
          router.refresh();
          router.push('/cart');
        }}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}