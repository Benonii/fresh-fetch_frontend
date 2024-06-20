import tomato from '../images/tomato.jpg';
import '../styles/Produce.css';

export default function Produce() {
    // This component is for the individual produce items that will be displayed
    // on the produce page
    return (
        <div className="produce">
            {/* This image will eventually be replaced by an image coming from an API */}
            <div className="produce-image">
                <img src={tomato} alt="A Ripe, fresh Heirloom tomato" />
            </div>

            {/* This data will also be replaced by data from the API. */}
            <div className="produce-info">
                <div className="produce-details">
                    <h3 className="prodice-name">Heirloom Tomato</h3>
                    <p className="price-per-pound">$5.99/lb</p>
                    <p className="vendor">Vendor: Wall-Mart</p>
                </div>

                <div className="produce-btns">
                    <button className="order-now-btn">Order now</button>
                    <button className="add-to-basket">Add to basket</button>
                </div>
            </div>
        </div>
    )
};