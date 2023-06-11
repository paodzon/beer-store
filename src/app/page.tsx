import Image from "next/image";
import queryString from "query-string";
import { getProducts } from "@/actions/getProducts";
import Hero from "@/components/products/Hero";
import BeerCard from "@/components/products/BeerCard";
import Search from "@/components/products/Search";
import SelectYear from "@/components/products/SelectYear";
import Pagination from "@/components/products/Pagination";

interface SearchParamProps {
  page: string;
  beer_name: string;
  brewed_before: string;
  brewed_after: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamProps;
}): Promise<JSX.Element> {
  const filterQuery = queryString.stringify(searchParams);
  const products = await getProducts(filterQuery);
  const isDataEmpty =
    !Array.isArray(products) || products.length < 1 || !products;

  return (
    <div className="flex flex-col justify-center items-center ">
      <Hero />
      <div
        id="products"
        className="flex flex-col justify-center min-h-screen w-full mb-24 px-32 sm:!px-10"
      >
        <div className="flex items-start w-full flex-col gap-2">
          <h1 className="text-2xl font-bold">Beer Products</h1>
          <p className="text-base">Explore out beers you might like</p>
          <div className="flex flex-row sm:flex-col gap-8 items-center justify-between content-center mt-6 w-full">
            <Search />
            <SelectYear />
          </div>
        </div>
        {!isDataEmpty ? (
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="w-full grid grid-cols-4 2xl:!grid-cols-3 lg:flex lg:flex-row lg: flex-wrap md:flex md:flex-col justify-center gap-10 pt-14 ">
              {products.map((product: Beer) => {
                return (
                  <BeerCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image_url}
                    abv={product.abv}
                    ebc={product.ebc}
                    ibu={product.ibu}
                  />
                );
              })}
            </div>
            <Pagination
              itemLength={products.length}
              page={searchParams.page ? +searchParams.page : 1}
            />
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center mt-48 gap-5">
            <Image
              width={70}
              height={70}
              src="/non-alcoholic-beer.png"
              alt="alcohol"
            />
            <p className="text-[18px]">No beer found</p>
          </div>
        )}
      </div>
    </div>
  );
}
