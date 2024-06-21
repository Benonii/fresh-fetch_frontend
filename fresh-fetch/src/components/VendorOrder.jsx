import gingerImg from "../images/ginger.jpg";
import '../styles/VendorOrder.css'

export default function VendorOrder() {
    return (
        <div className="vendor-order">
            {/* This image will be repalced by an image we fetch 
                from the api eventually */}
            <img src={gingerImg} alt="an orgranic ginger" />

            {/* This static data will also be replaced by data coming
                from the api */}
            
            <div className="order-details">
                <h3 className="order-name">Sweet onion</h3>
                <p className="price">Price: $5.99/lb</p>
                <p className="quantity">Quantity: 5lb</p>
            </div>

            {/* This status will be either pending, confirmed or cancelled
                For now, it is just pending */}
            <div className="status">
                <small>Pending</small>
            </div>

            {/* Instead of ordering or confirming, the vendor has the fulfill
                button */}
            <div className="btn-container">
                    <button className="fulfill-btn">Fulfill</button>
            </div>
        </div>
    )
}