import { useEffect, useState } from "react"
import { Products } from "../products"

export default function Home({user}) {
  console.log(user)
  return (
    <>
      <h1>Ana Sayfa</h1>
      <Products user={user}/>
    </>
  )
}