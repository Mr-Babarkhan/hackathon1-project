import React, { FC } from 'react'
import { oneProductType } from '@/components/utils/ProductArrayAndDataTypes'
import { urlForImage } from '../../../sanity/lib/image'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '@/lib/SanityClient'
import Link from 'next/link'




const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source)
}

const Card:FC<{singleProductData:oneProductType}> = ({singleProductData}) => {
  return (
    <Link href={`/catalog/${singleProductData.slug.current}`}>
    <div className='max-w-sm min-w-[24rem] space-y-3 hover:scale-110 duration-300 select-none'>
        <div className='w-full'>
          <div className='absolute inset-0 z-10' />
        <Image  width={500} height={500} src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt={singleProductData.image[0].alt} />  
        </div>
       <div className='space-y-1 text-gray-600 font-semibold text-lg select-none'>
       <p>{singleProductData.productName}</p> 
       <h6>${singleProductData.price}</h6>
       </div> 
    </div>
    </Link>
  )
}

export default Card