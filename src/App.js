import { useEffect, useState } from 'react';
import './App.css';
import { getProduct, getCategory } from './lib';
import Loader from './Loader';
import Card from './Card';
import Category from './Category';

function App() {
  const [product, setProducts] = useState(null)
  const [category, setCategory] = useState(null)
  const [filteredProduct, setFilteredProduct] = useState(null)
  
  useEffect(() => {
    const setState = async () => {
      setProducts(await getProduct())
      setFilteredProduct(await getProduct())
      setCategory(await getCategory())
    }
    setState();
  },[])
  
  // Product Filter
  const productFilter = async (c) => {
    if(c === 'all') {
      await setFilteredProduct(product)
    } else {
      let setPro = product?.filter(p => p.category === c)
      await setFilteredProduct(setPro)
    }
  }
  
  if (product !== null) {
    return (
      <div className="row mb-5">

        {/* Category */}
        <div className="col-lg-3 mb-4">
          <div className="sticky-top mt-3">
            <h3>Filter</h3>
            <hr />
            <Category category={category} product={product} productFilter={productFilter}/>
          </div>
        </div>

        {/* Products */}
        <div className="App col-lg-9">
          <div className="row">
            {
              filteredProduct?.length > 0 && (
                filteredProduct.map((p) => (
                  <div className='col-md-4' key={p.id}>
                    <Card products={p}/>
                  </div>
                ))
              ) 
            }    
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <Loader/>
    )
  }
}

export default App;
