
export const Product = ({product})=>{
    const {id,title,price,image,rating}=product;
    return(
    <div className="product">
        <p>Id: {id}</p>
        <img src={image} />
        <p>{title} </p>
        <p>price:{price} </p>
        <p>Rating:{rating.rate}/5 By {rating.count} people</p>
        {/* <p>price:Rs {price}</p> */}
        <button>pay now</button>
    </div>
    );
}