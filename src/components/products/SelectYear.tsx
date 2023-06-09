'use client';
import { Select, Option } from "@material-tailwind/react";
const SelectYear = () => {
  return (
    <div className="w-72">
      <Select label="Select Year">
        <Option>2020</Option>
        <Option>2019</Option>
        <Option>2018</Option>
        <Option>2017</Option>
        <Option>2016</Option>
        <Option>2015</Option>
        <Option>2014</Option>
      </Select>
    </div>
  );
};

export default SelectYear;
