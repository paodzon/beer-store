import { getProducts } from "@/actions/getProducts";
import withAuth from "@/components/hoc/withAuth";
import BeerCard from "@/components/products/BeerCard";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";

export const revalidate = 0

const Products = async (req: Request) => {
  console.log(req.url);
  const products: [] = await getProducts();

  return (
    <div className="flex justify-center p-14">
  
      <div className="grid grid-cols-3 gap-10">
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
  );
};

export default withAuth(Products);
