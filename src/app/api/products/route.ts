import { NextRequest, NextResponse } from "next/server";
import { oneProductType } from "@/components/utils/ProductArrayAndDataTypes";
import {client} from "@/lib/SanityClient"
export async function GET(request: NextRequest) {
    const orignalData: Array<oneProductType> = [];
    const url = request.nextUrl.searchParams;

    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-08/data/query/production?query=*[_type == "products"]`);
    let dataFrom_APi = await res.json();
    orignalData.push(...dataFrom_APi.result)

    if (url.has("start") || url.has("end")) {
        if (orignalData[Number(url.get("start"))]) {
            let productArray = orignalData.slice(Number(url.get("start")), Number(url.get("end")))
            return NextResponse.json({ productArray })
        }
        return NextResponse.json({ productArray: "Not found" })

    }

    return NextResponse.json({ orignalData })
};



// export async function GET(request: NextRequest) {
//     try{
//         let response = await client.fetch(`*[_type == "products"]`);
//         return NextResponse.json({ response })
//     }catch(error){

//         return NextResponse.json({"Error":error})
//     }
        

// }