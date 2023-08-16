import ProductCarousal from "@/components/ProductCarousal";
import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { responseType } from "@/components/utils/ProductArrayAndDataTypes";
import Hero from "@/components/views/Hero/Hero";
import ProductsType from "@/components/views/ProductTypes/ProductsTypes";
import { client } from "@/lib/SanityClient";

async function fetchAllProductsData (){
  let res =await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-08/data/query/production?query=*[_type == "products"]`)
  if(!res.ok){
        throw new Error("failed to fetch")
  }
  return res.json();
}


export default async function Home() {
  let {response}:responseType=await fetchAllProductsData();

  return (
   <>
   <Hero/>
   <ProductsType/> 
   <ProductCarousal ProductData={response}/>
   </>
  )
}