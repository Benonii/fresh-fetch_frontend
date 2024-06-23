import '../styles/Produce.css';

export default function Produce({ product, addToBasket }) {
    // This component is for the individual produce items that will be displayed
    // on the produce page
    return (
        <div className="produce" aria-label='Produce item'>
            {/* This image will eventually be replaced by an image coming from an API */}
            <div className="produce-image">
                <img src={ product.pic } alt="Image of produce" />
            </div>

            {/* This data will also be replaced by data from the API. */}
            <div className="produce-info">
                <div className="produce-details">
                    <h3 className="prodice-name">{product.name}</h3>
                    <p className="price-per-pound">{product.pricePerPound}</p>
                    <p className="vendor">Vendor: {product.vendor}</p>
                </div>

                <div className="produce-btns">
                    <button className="order-now-btn">Order now</button>
                    <button className="add-to-basket"
                            onClick={() => addToBasket(product)}>
                        Add to Basket
                    </button>
                </div>
            </div>
        </div>
    )
};