"use client";

import React from "react";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const SuccessCard: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-start h-screen px-32 gap-10 sm:!px-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Check your inbox</h1>
        <p className="text-base">A confirmation link was sent to your email.</p>
      </div>
      <Button
        onClick={() => router.push("/login")}
        className="bg-primary"
        fullWidth
      >
        Back to login
      </Button>
    </div>
  );
};

export default SuccessCard;
