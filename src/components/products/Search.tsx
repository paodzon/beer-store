'use client';
import {useState} from "react";
import { Input, Button } from "@material-tailwind/react";
 

const Search = () => {
  const [email, setEmail] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value);
  };
  
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        placeholder="Search product"
        value={email}
        onChange={onChange}
        className="!border-t-blue-gray-200 focus:!border-t-primary"
        color="black"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        disabled={!email}
        className={`!absolute right-1 top-1 rounded ${email ? "bg-primary" : "bg-gray-800"}`}
      >
        Search
      </Button>
    </div>
  );
}

export default Search