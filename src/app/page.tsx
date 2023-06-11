
import { getProducts } from "@/actions/getProducts";
import Hero from "@/components/products/Hero";
import BeerCard from "@/components/products/BeerCard";
import Search from "@/components/products/Search";
import SelectYear from "@/components/products/SelectYear";
import queryString from 'query-string';
import Image from "next/image";
import Pagination from "@/components/products/Pagination";

const Home = async({searchParams}:{searchParams:any}) =>{
  const filterQuery = queryString.stringify(searchParams);
  const products = await getProducts(filterQuery);
  const isDataEmpty = !Array.isArray(products) || products.length < 1 || !products;

  return (
    <div className="flex flex-col justify-center items-center ">
      <Hero />
      <div id="products" className="flex flex-col justify-center min-h-screen w-full md:mt-72 mb-24 px-32">
        <div className="flex items-start w-full flex-col gap-2">
          <h1 className="text-2xl font-bold">Beer Products</h1>
          <p className="text-base">Explore out beers you might like</p>
          <div className="flex flex-row md:flex-col gap-8 items-center justify-between content-center mt-6 w-full">
            <Search />
            <SelectYear />
          </div>
        </div>
        {!isDataEmpty ? (
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="w-full grid 3xl:grid-cols-4 2xl:!grid-cols-3 lg:flex lg:flex-row lg: flex-wrap md:flex md:flex-col justify-center gap-10 pt-14 ">
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
          <Pagination itemLength={products.length} page={searchParams.page ? +searchParams.page : 1}/>
          </div>
          
        ) : (
          <div className="w-full flex flex-col justify-center items-center mt-48 gap-5">
            <Image width={70} height={70} src='/non-alcoholic-beer.png' alt='alcohol'/>
            <p className="text-[18px]">No data found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
