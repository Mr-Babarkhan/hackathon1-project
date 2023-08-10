import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import Hero from "@/components/views/Hero/Hero";
import ProductsType from "@/components/views/ProductTypes/ProductsTypes";
import { client } from "@/lib/SanityClient";

async function fetchAllProductsData (){
  // let res =await fetch(`${BASE_PATH_FORAPI}/api/products`)
  // if(!res.ok){
  //       throw new Error("failed to fetc")
  // }
  return {response:"hi"}
}


export default async function Home() {
  let {response} =await fetchAllProductsData();
  console.log(response)
  return (
   <>
   <Hero/>
   <ProductsType/> 
   </>
  )
}