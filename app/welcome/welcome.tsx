import { useEffect, useState } from "react"
import type { Product } from "~/types/Product"

export function Welcome() {
  const [productList, setProductList] = useState<Product[]>([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ])

  // on component/view creation
  useEffect(() => {
    console.log("Created - Hello World!")

    // fetch()
    async function fetchData() {
      const result = await fetch("https://fakestoreapi.com/products")
      const products: Product[] = await result.json()

      setProductList(products)

      //console.log(products[0].title)
    }

    fetchData()
  }, []) // , [] == run once

  return (
    <div>
      {/* Loop through products */}
      {productList.map(
        ({ id, title, price, description, category, image, rating }) => (
          <div>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>price: {description}</p>
            <p>description: {description}</p>
            <p>category: {category}</p>
            <p>image: {image}</p>
            <p>rating count: {rating.count}</p>
            <p>rating rate: {rating.rate}</p>
          </div>
        )
      )}
    </div>
  )
}
