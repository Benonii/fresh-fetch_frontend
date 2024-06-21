import tomato from '../images/onion.jpg';
import "../styles/PendingOrder.css"

export default function PendingOrder() {
    // This component is for the individual order items that will be displayed
    // in the pending area of the basket. The orders are made and the user is
    // waiting for them to be delivered.
    return (
        <div className="pending-order">
            {/* This image will be repalced by an image we fetch 
                from the api eventually */}
            <img src={tomato} alt="A Ripe, fresh Heirloom tomato" />

            {/* This static data will also be replaced by data coming
                from the api */}
            <div className="order-details">
                <h3 className="order-name">Sweet onion</h3>
                <p className="price">Price: $5.99/lb</p>
                <p className="quantity">Quantity: 5lb</p>
                <p className="vendor">Vendor: Fresh Corner</p>
                
                <div className="order-btns">
                    <button className="confirm-btn">Confirm</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>

            {/* This status will be either pending, confirmed or cancelled */}
            <div className="status">
                <small>Pending</small>
            </div>
        </div>
    )
};