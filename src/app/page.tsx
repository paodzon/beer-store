
import withAuth from "@/components/hoc/withAuth";
import { getProducts } from "@/actions/getProducts";
import Hero from "@/components/products/Hero";
import BeerCard from "@/components/products/BeerCard";
import Search from "@/components/products/Search";
import SelectYear from "@/components/products/SelectYear";

const Home = async() =>{

  const products: [] = await getProducts();

  return (
    <div id="products" className="flex flex-col justify-center items-center">
      <Hero />
      <div className="flex flex-col justify-center">
        <div className="flex items-start w-full flex-col gap-2">
          <h1 className="text-2xl font-bold">Beer Products</h1>
          <p className="text-base">Explore out beers you might like</p>
          <div className="flex flex-row items-center justify-between content-center mt-6 w-full">
          <Search/>
          <SelectYear/>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 lg:grid-cols-2 md:flex md:flex-col  justify-center gap-10 pt-14 ">
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
      </div>
    </div>
  );
}

export default withAuth(Home);
