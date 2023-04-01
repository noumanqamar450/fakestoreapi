import { useEffect, useState } from 'react';
import './App.css';
import { getProduct, getCategory, clickHandler } from './lib';
import Loader from './Loader';
import Card from './Card';

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
      let setPro = product.filter(p => p.category === c)
      await setFilteredProduct(setPro)
    }
  }
  
  if (product !== null) {
    return (
      <div className="row mb-5">
        {/* Category */}
        <div className="col-lg-3 mb-4">
          <h3>Filter</h3>
          <hr />
          <div className="list-group">
            <button className="list-group-item list-group-item-action active" onClick={(e)=>{
              clickHandler(e, 0)
              productFilter('all')
            }} aria-current="true">
              All 
              <span className="badge text-bg-success float-end text-bg-info">
                {product.length}
              </span>
            </button>
            {
              category?.length > 0 && (
                category.map((c, i) => (
                  <button className="list-group-item list-group-item-action" key={i} onClick={(e) => {
                    clickHandler(e, i = i + 1)
                    productFilter(c)
                  }}>{c}
                    <span className="badge text-bg-success float-end">
                      {product.filter(p => p.category === c).length}
                    </span>
                  </button>
                ))
              )
            }
          </div>
        </div>
        {/* Products */}
        <div className="App col-lg-9">
          <div className="row">
            {
              filteredProduct?.length > 0 && (
                filteredProduct.map((p) => (
                  <div className='col-md-4' key={p.id}>
                    <Card id={p.id} title={p.title} desc={p.description} price={p.price} cate={p.category} image={p.image} rating={p.rating}/>
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
