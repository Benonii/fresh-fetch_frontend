import gingerImg from "../images/ginger.jpg";
import '../styles/VendorOrder.css'

export default function VendorOrder({ order }) {
    const statuses = {
        completed: "Completed",
        enRoute: "En-route",
        pending: "Pending",
        cancelled: "cancelled",
    }

    console.log('Order status: ', order.status, statuses.pending, order.status == statuses.pending)

    return (
        <div className="vendor-order">
            {/* This image will be repalced by an image we fetch 
                from the api eventually */}
            <img src={order.pic} alt="Image of the order" />

            {/* This static data will also be replaced by data coming
                from the api */}
            
            <div className="order-details">
                <h3 className="order-name">{order.name}</h3>
                <p className="price">{order.price}</p>
                <p className="quantity">Quantity: {order.quantity}lb</p>
            </div>

            {/* This status will be either pending, confirmed or cancelled
                For now, it is just pending */}
            <div className="status">
                <small className={order.status}>{order.status}</small>
            </div>

            {/* Instead of ordering or confirming, the vendor has the fulfill
                button */}
            {order.status === statuses.pending && (
                <div className="btn-container">
                    <button className="fulfill-btn">Fulfill</button>
                </div>
            )}
            
        </div>
    )
}