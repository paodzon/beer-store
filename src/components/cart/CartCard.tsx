"use client";

import { removeProduct, updateQuantity } from "@/actions/cartActions";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface CartCardProps {
  id: number;
  name: string;
  quantity: number;
  product_id: number;
  user_id: string;
  image_url: string | null;
}

export default function CartCard(props: CartCardProps) {
  const router = useRouter();

  return (
    <Card className="mt-6 w-96 border">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.name}
        </Typography>
        <Typography>Quantity: {props.quantity}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex gap-5">
        <Button
          onClick={async () => {
            await updateQuantity({ id: props.id, quantity: 1 });
            router.refresh();
          }}
        >
          Add
        </Button>
        <Button
          onClick={async () => {
            await updateQuantity({ id: props.id, quantity: -1 });
            router.refresh();
          }}
          disabled={props.quantity === 1}
        >
          Decrease
        </Button>
        <Button
          onClick={async () => {
            await removeProduct(props.id);
            router.refresh();
          }}
        >
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
}
