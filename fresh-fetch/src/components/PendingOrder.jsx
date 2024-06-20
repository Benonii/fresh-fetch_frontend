import tomato from '../images/onion.jpg';
import "../styles/PendingOrder.css"

export default function PendingOrder() {
    return (
        <div className="pending-order">
            {/* This image will be repalced by an image we fetch 
                from the api eventually */}
            <img src={tomato} alt="A Ripe, fresh Heirloom tomato" />

            {/* This static data will also be replaced by data coming
                from the api */}
            <div className="order-details">
                <h3 className="order-name">Heirloom Tomato</h3>
                <p className="price">Price: $5.99/lb</p>
                <p className="vendor">Vendor: Wall-Mart</p>
                
                <div className="order-btns">
                    <button className="confirm-btn">Confirm</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>

            <div className="status">
                <small>Pending</small>
            </div>
        </div>
    )
};