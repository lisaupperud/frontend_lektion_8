import { useEffect, useState } from "react"
import { ProductCard } from "~/components/ProductCard"
import type { Product } from "~/types/Product"

export function Welcome() {
  const [productList, setProductList] = useState<Product[]>([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
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
          <ProductCard
            key={id} // react needs key 
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        )
      )}
    </div>
  )
}
