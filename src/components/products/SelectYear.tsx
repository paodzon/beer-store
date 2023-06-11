'use client';

import { useCallback, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePersistentScroll } from '@/utils/hooks';

const SelectYear:React.FC = () => {
  const [selected, setSelected] = useState<string>('')
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  usePersistentScroll(searchParams);

  const setSelectedParam = useCallback(
    (value: string) => {
      const currentParams = searchParams.toString()
      const params = new URLSearchParams(currentParams)
      params.set('page', '1');
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



  const handleChange = async(e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
    await setSelectedParam(e.target.value);
  }

  return (
    <div className="w-full max-w-[20rem]">
      <select
        placeholder='Select year brewed'
        value={selected}
        onChange={handleChange}
        className="w-full cursor-default rounded-md bg-white py-1.5 pl-3 text-left text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:border-primary sm:text-sm sm:leading-6"
      >
        <option value=''>Select Brewed Year</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
      </select>
    </div>
  );
};

export default SelectYear;
