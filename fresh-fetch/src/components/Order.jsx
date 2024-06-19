import tomato from '../images/tomato.jpg';

export default function Order() {
    return (
        <div class="order order-1">
            <div className="order-image">
                <img src={tomato} alt="A Ripe, fresh Heirloom tomato" />
            </div>

            <div className="order-details">
                <h3 className="order-name">Heirloom Tomato</h3>
                <p className="order-price-per-pound">$5.99/lb</p>
                <p className="vendor">Vendor: Wall-Mart</p>
                <button className="order-now-btn">Order now</button>
                <button className="remove-btn">Remove</button>
            </div>
        </div>
    )
};