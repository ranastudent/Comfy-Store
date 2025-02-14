import { FeatureProduct, Hero } from "../componets"
import { customFetch } from "../utils"

const url = "/products?featured=true"

export const loader =  async()=>{
  const response = await customFetch(url) 
  const product = response.data.data
  return {product}
}

const Landing = () => {
  return <>
    <Hero/>
    <FeatureProduct/>
  </>
}

export default Landing
