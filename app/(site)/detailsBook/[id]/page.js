"use client"
import { SingelBookInf } from '@/Components/DetailEachBook/SingelBookInfo/SingelBookInf';
import { useParams } from 'next/navigation';
import React from 'react'

const EachBookInfo = () => {

    // const id = useParams()
    // console.log(id)

  return (
    <>
  
  <div className="mt-2 w-[100%] md:w-[80%] mx-auto ">
    <SingelBookInf/>
  </div>
   
    </>
  )
}
export default EachBookInfo;