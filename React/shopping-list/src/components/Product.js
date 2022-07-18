import "./Product.css";
// import Trash from '../icons/trash.svg'

const Product = ({id, title, category, price, removeProduct}) => {
  return (
    <div className="product-card">
        <div className="left">
            <h3 className="product-title">{id+1} - {title}</h3>
            <p className="product-category">{category}</p>
        </div>
        <div className="right">
            <p className="product-price">${price}</p>
            <button onClick={()=> removeProduct(id)}>X</button>
        </div>
    </div>
  )
}

export default Product