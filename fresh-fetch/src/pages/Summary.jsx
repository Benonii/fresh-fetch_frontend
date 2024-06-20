import Header from "../components/Header";
import "../styles/Summary.css";
import arrowImg from "../images/arrow.png";

export default function Summary() {
    // This component will be handling the order summary.
    // Once an order(orders) has been made, this is the page the user will see.

    return (
        <>
            <div className="header-container">
                <Header />
            </div>

            <main className="summary">
                {/* Contains information about the order cost */}
                <h2>Order summary</h2>
                <div className="summary-grid">
                    <p>Subtotal</p>   <p>$27.44</p>
                    <p>Delivery</p>   <p>$3.99</p>
                    <p>Tax</p>        <p>$2.00</p>
                    <p className="bold">Total</p>      <p className="bold">$33.43</p>

                </div>

                <div className="pay-btn">
                <button>Continue to payment
                    <img src={arrowImg} alt="An arrow" />
                </button>
                </div>
            </main>
        </>
    )
}