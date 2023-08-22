import { oneProductType, resultType } from "@/components/utils/ProductArrayAndDataTypes";
import CardAll from "@/components/views/CardAll";


async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-08/data/query/production?query=*%5B_type%3D%3D%22products%22+%26%26+productTypes%5B0%5D+%3D%3D%22kid%22%5D`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}


const Kid = async ({ params }: { params: { ftype: string } }) => {
  let res: resultType = await fetchAllProductsData();
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
    >
      {res.result.map((items: oneProductType, index: number) => (
        <CardAll key={index} singleProductData={items} />
      ))}
    </div>
  )
}

export default Kid