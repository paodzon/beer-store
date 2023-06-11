"use client";
import { useCallback, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePersistentScroll } from "@/utils/hooks";

const Search: React.FC = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>("");
  usePersistentScroll(searchParams);

  const setSearchParam = useCallback(
    (key: string, value: string) => {
      const currentParams = searchParams.toString();
      const params = new URLSearchParams(currentParams);

      params.set(key, value);
      params.set("page", "1");
      if (value === "") params.delete(key);
      if (currentParams === params.toString()) return;
      localStorage.setItem("persistentScroll", window.scrollY.toString());
      router.push(`${pathName}?${params.toString()}`);
    },
    [searchParams, pathName, router]
  );

  const onSubmitSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParam("beer_name", search);
  };

  return (
    <form className="w-full max-w-[20rem]" onSubmit={onSubmitSearch}>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          placeholder="Search product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
          type="submit"
          size="sm"
          className={`!absolute right-1 top-1 rounded bg-primary`}
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default Search;
