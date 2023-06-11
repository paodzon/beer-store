'use client';
import { useCallback, useState, useEffect } from 'react'
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePersistentScroll } from '@/utils/hooks';

export default function Pagination({itemLength ,page}: {itemLength: number, page:number}) {
  const [active, setActive] = useState(page);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  usePersistentScroll(searchParams);

  useEffect(() => {
    setActive(page);
  },[page])

  const setPageParam = useCallback(
    (key: string, value: string) => {
      const currentParams = searchParams.toString()
      const params = new URLSearchParams(currentParams)
      params.set(key, value)
      if(value === "") params.delete(key);
      if (currentParams === params.toString()) return
      localStorage.setItem('persistentScroll', window.scrollY.toString())
      router.push(`${pathName}?${params.toString()}`)
    },
    [searchParams, pathName, router],
  )


  const next = async() => {
    if (itemLength < 24) return;
 
    setActive(active + 1);
    await setPageParam('page', `${active + 1}`)
  };
 
  const prev = async() => {
    if (active === 1) return;
    setActive(active - 1);
    await setPageParam('page', `${active - 1}`)
  };
 
  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        color="blue-gray"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-blue-gray-900">{active}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        color="blue-gray"
        onClick={next}
        disabled={itemLength < 24}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}