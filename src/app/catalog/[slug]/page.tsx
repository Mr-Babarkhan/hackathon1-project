import React from 'react'
import {FC} from "react"

const Catalog:FC<{params:{slug:string}}> = ({params}) => {

  return (
    <div>{params.slug}</div>
  )
}

export default Catalog