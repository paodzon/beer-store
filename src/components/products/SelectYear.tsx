'use client';

import { useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const SelectYear = () => {

  const [selected, setSelected] = useState('')
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const persistentScroll = localStorage.getItem('persistentScroll')
    if (persistentScroll === null) return
    window.scrollTo({ top: Number(persistentScroll) })
    if (Number(persistentScroll) === window.scrollY)
      localStorage.removeItem('persistentScroll')
  }, [searchParams]);

  const setSelectedParam = useCallback(
    (value: string) => {
      const currentParams = searchParams.toString()
      const params = new URLSearchParams(currentParams)

      params.set('brewed_before', `12-${value}`);
      params.set('brewed_after', `01-${value}`);
      if(value === "") {
        params.delete("brewed_after");
        params.delete('brewed_before');
      }
      if (currentParams === params.toString()) return
      localStorage.setItem('persistentScroll', window.scrollY.toString())
      router.push(`${pathName}?${params.toString()}`)
    },
    [searchParams, pathName, router],
  )



  const handleChange = async(e:any) => {
    setSelected(e.target.value)
    await setSelectedParam(e.target.value);


  }

  return (
    <div className="w-full max-w-[24rem]">
      <select
        value={selected}
        onChange={handleChange}
        className="w-full cursor-default rounded-md bg-white py-1.5 pl-3 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
      >
        <option value=''>Select All</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
      </select>
    </div>
  );
};

export default SelectYear;
