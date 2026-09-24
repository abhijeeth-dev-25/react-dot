import { useAllProduct, useProductsByCategory } from '../../hooks/useProductsHook'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/ProductFilter'

const ProductPage = () => {

  const { data, isLoading, error, search, setSearch} = useAllProduct()

  const {data: categories, category, setCategory} = useProductsByCategory()


  isLoading? <p className='text-9xl text-red-800'> Loading... </p> : ''
  
  

  return (
    <div>
      <div className='mx-25 my-15'>
        <ProductFilter category={category} setCategory={setCategory} search={search} setSearch={setSearch} />
      </div>
      <div className='flex grid grid-cols-4 gap-6 mx-25 my-15'>
      {
         categories?.products?.length ?
         categories?.products?.map((item) => {
            return <ProductCard key={item.id} product={item} />
         }) :
         data?.products?.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })
      }
    </div>
    </div>
  )
}

export default ProductPage