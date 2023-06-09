'use client';
import React, {useState} from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Slider from '../common/Slider';


const checkListData = [
  {
    title: "React JS",
    value: "React",
  },
  {
    title: "Vue JS",
    value: "Vue",
  },
  {
    title: "Svelte JS",
    value: "Svelte",
  },
]


const ProductFilter = () => {

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState<any>([]);
  const [slider, setSlider] = useState({abv_gt: ''});

  const toggleOpen = () => setOpen(cur => !cur);

  const handleFilter = (e:any) => {
    const { value, checked } = e.target;
    console.log(value + ' ' + checked);
    if(checked){
      setQuery([...query, value]);
    }else{
      const filterQuery = query.filter((item:string) => item != value);
      setQuery(filterQuery);
    }
   
  }
  const onChangeFilter = async(e:any) => {

  }

  return (
    <div className="w-full">
      <h1>Product Filter</h1>
      <Accordion open={open}>
        <AccordionHeader onClick={toggleOpen}>Alcohol Measures</AccordionHeader>
        <AccordionBody>
          <Slider
            value={slider.abv_gt}
            title="Alcohol by volume"
            min={0}
            max={10}
            step={0.5}
            onChange={(e) => {
              setSlider({ abv_gt: e.target.value });
       
              // router.push(
              //   `${window.location.pathname}?abv_gt=${e.target.value}`
              // );
            }}
          />

          {/* {checkListData.map((data: { title: string; value: string }, idx) => {
            return (
              <div key={idx} className='flex content-center gap-5 mt-3'>
                <Checkbox
                id="vertical-list-react"
                ripple={false}
                onChange={handleFilter}
                value={data.value}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
                <Typography color="blue-gray" className="font-medium">{data.title}</Typography>
              </div>
            );
          })} */}
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default ProductFilter