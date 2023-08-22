import ProductCarousal from "@/components/ProductCarousal";
import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import {  resultType } from "@/components/utils/ProductArrayAndDataTypes";
// import AllProductsCompo from "@/components/views/AllProducts/page";
import Footer from "@/components/views/Footer";
import Hero from "@/components/views/Hero/Hero";
import Jewellary from "@/components/views/Jewellary";
import NewsLetter from "@/components/views/NewsLetter";
import ProductsType from "@/components/views/ProductTypes/ProductsTypes";
import { client } from "@/lib/SanityClient";

async function fetchAllProductsData (){
  
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-08/data/query/production?query=*[_type == "products"]`,{
    next: {
      revalidate: 60
    }
  })
  
  if(!res.ok){
        throw new Error("failed to fetch")
  }
  return res.json();
}


export default async function Home() {
  let {result}:resultType=await fetchAllProductsData();

  return (
   <>
   <Hero/>
   <ProductsType/> 
   <ProductCarousal ProductData={result}/>
   <Jewellary/> 
   <NewsLetter/>
   
   
   </>
  )
}