import Header from "../components/Header";
import basketImg from "../images/basket.jpg";
import Order from "../components/Order";
import PendingOrder from "../components/PendingOrder"
import "../styles/Basket.css";

export default function Basket() {
    return (
        <>
            <div className="header-container">
                <Header />
            </div>
            <main>
                {/* This div contains the basket logo,
                    the orders count and the order all button */}
                <div className="basket-header">
                    <div className="basket-logo">
                        <img src={basketImg} alt="A basket" />
                        <div className="basket-logo-text">
                            <h2>Basket</h2>
                            <small className="item-count">3 items</small>
                        </div>
                    </div>

                    <button className="order-all-btn">Order all</button>
                </div>
                <hr />

                <div className="pre-orders">
                    <Order />
                    <Order />
                </div>

                <div className="pending-header">
                    <div className="pending-header-text">
                        <h2>Pending</h2>
                        <small className="item-count">1 item</small>
                    </div>
                    <button className="cancel-all-btn">Cancel all</button>
                </div>
                <hr />

                <div className="pending-orders">
                    <PendingOrder />
                </div>

            </main>
            
        </>
    )
}