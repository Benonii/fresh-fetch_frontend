import Header from "../components/Header";
import "../styles/Summary.css";
import arrowImg from "../images/arrow.png";

export default function Summary() {
    // This component will be handling the order summary.
    // Once an order(orders) has been made, this is the page the user will see.

    const orderPrices = [ 5.99, 6.50, 14.95 ];
    const subTotal = orderPrices.reduce((acc, current) => {
        return acc + current;
    }, 0);

    const delivery = 3.99;
    const tax = 2.00;
    const total = subTotal + delivery + tax;

    return (
        <>
            <div className="header-container">
                <Header />
            </div>

            <main className="summary">
                {/* Contains information about the order cost */}
                <h2>Order summary</h2>
                <div className="summary-grid">
                    <p>Subtotal</p>   <p>${subTotal.toFixed(2)}</p>
                    <p>Delivery</p>   <p>${delivery.toFixed(2)}</p>
                    <p>Tax</p>        <p>${tax.toFixed(2)}</p>
                    <p className="bold">Total</p>      <p className="bold">${total.toFixed(2)}</p>

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