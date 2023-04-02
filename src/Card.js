import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Card = (props) => {
    const { id, title, description, price, cate, image, rating} = props.products
    const [modal, setModal] = useState(false)
    return (
        <>
            <div className="card mb-4 text-start">
                <span className="badge text-bg-primary">
                    {cate}
                </span>
                <div className="card-img-top">
                    <img src={image} className="card-img-top" alt={title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 22)} ...</h5>
                    <h5>Rs. {price}/-</h5>
                    {/* https://www.npmjs.com/package/react-simple-star-rating */}
                    <p className='card-rating'>
                        <Rating initialValue={rating.rate} readonly='true' /> {rating.rate} ({rating.count})
                    </p>
                    <div className="card-btns">
                        <button className="btn btn-primary w-100">Buy Now</button>
                        <button className="btn btn-success w-100" onClick={()=>{
                            setModal(true)
                        }}>View</button>
                    </div>
                </div>
            </div>

            {/* Product Modal */}
            <div className={modal ? 'product-modal active' : 'product-modal'}>
                <div className="modal-overlay" onClick={() => {
                    setModal(false)
                }}></div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="modal-image">
                            <img src={image} alt={title} />
                        </div>
                    </div>
                    <div className="col-sm-6 text-start content">
                        <i className="bi bi-x-lg" onClick={() => {
                            setModal(false)
                        }}></i>
                        <div>
                            <h3>{title}</h3>
                            <h5 className='modal-sku'>
                                <span className="badge text-bg-primary">
                                    SKU: PRO-{id}
                                </span>
                            </h5>
                            <h4>Rs. {price}/-</h4>
                            <p className='modal-rating'>
                                <Rating initialValue={rating.rate} readonly='true' /> {rating.rate} ({rating.count})
                            </p>
                            <p>{description}</p>
                            <span className="badge text-bg-primary cate">
                                {cate}
                            </span>
                            <button className='btn btn-primary w-100 mt-4'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card