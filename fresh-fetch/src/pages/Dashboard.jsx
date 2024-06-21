import Header from "../components/Header";
import VendorOrder from "../components/VendorOrder";
import "../styles/Dashboard.css"

export default function Dashboard() {
    return (
        <main>
            <div className="vendor-header">
                <Header />
            </div>

            <h2 className="vendor-header">Orders</h2>
            <hr />

            {/* This div contains all the orders the vendor needs to handle,
                or is already handled */}
            <div className="all-orders">
                <VendorOrder />
            </div>
        </main>
    )

}