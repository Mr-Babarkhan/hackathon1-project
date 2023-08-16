
import {client} from "@/lib/SanityClient"
import { NextResponse } from "next/server"

export async function GET() {

    try {
        let response = await client.fetch(`*[_type=="products"]`);
        
        return NextResponse.json({response})
    } catch (error) {
        console.log((error as {message:string}).message)
        return NextResponse.json({"Error":error})
    }
}