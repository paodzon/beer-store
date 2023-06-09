'use client';
import React from 'react'

interface SliderProps{
  min:number,
  max:number,
  step:number,
  title: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Slider = (props: SliderProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className='flex justify-between'>
        <h5 className='text-base'>{props.title}</h5>
        {props.value && <p>{`> than ${props.value}`}</p>}
      </div>

        <input
          type="range"
          className="h-2 w-full cursor-pointer appearance-none rounded-lg border bg-gray-200"
          min={props.min}
          max={props.max}
          step={props.step}
          onChange={props.onChange}
          id="customRange3"
        />

    </div>
  );
};

export default Slider