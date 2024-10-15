export const Product = ({ product }) => {    
    const { id, title, price, image, rating } = product;

    return (
        <div className="m-4 bg-yellow-900 rounded-lg shadow-lg p-4 flex flex-col items-center h-30">
            <img src={image} alt={title} className="w-full h-auto rounded-t-lg" />
            <h2 className="text-lg font-semibold text-white mt-2">{title}</h2>
            <p className="text-white">Price: ${price}</p>
            <p className="text-white">
                Rating: {rating.rate}/5 by {rating.count} people
            </p>
            <button className="mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition">
                Pay Now
            </button>
        </div>
    );
}

export const HOF = (Product) => {
    return (props) => {
        return (
            <div className="mb-6 bg-emerald-600">
                <h1 className="text-2xl font-bold mb-4 text-center  border-yellow-700">Hot Product</h1>
                <Product {...props} />
            </div>
        );
    }
}
