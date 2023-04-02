import { clickHandler } from './lib';

const Category = (props) => {
    const { category, product, productFilter } = props;
    return (
        <div className="list-group">
            <button className="list-group-item list-group-item-action active" onClick={(e) => {
                clickHandler(e, 0)
                productFilter('all')
            }} aria-current="true">
                All
                <span className="badge text-bg-success float-end text-bg-info">
                    {product?.length}
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
                                {product?.filter(p => p.category === c).length}
                            </span>
                        </button>
                    ))
                )
            }
        </div>
    )
}

export default Category