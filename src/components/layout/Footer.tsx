"use client";
import { Typography } from "@material-tailwind/react";
import { protectedRoutes } from '@/utils/constants';
import {  usePathname } from "next/navigation";

export default function Footer() {

  const pathName = usePathname();
  if(!protectedRoutes.includes(pathName)) return;

  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Brew Haven. All Rights Reserved
      </Typography>
    </footer>
  );
}
