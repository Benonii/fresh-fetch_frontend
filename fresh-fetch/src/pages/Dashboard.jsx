import { useState } from "react";

import Header from "../components/Header";
import VendorOrder from "../components/VendorOrder";

import tomatoImg from "../images/tomato.jpg";
import onionImg from "../images/onion.jpg";
import gingerImg from "../images/ginger.jpg";

import "../styles/Dashboard.css";

export default function Dashboard() {
    const statuses = {
        completed: "Completed",
        enRoute: "En-route",
        pending: "Pending",
        cancelled: "cancelled",
    }

    const [orders, setOrders] = useState([
        {
            id: "1",
            productId: "1",
            name: "Heirloom tomato",
            pricePerPound: "$5.99 / lb",
            vendor: "Wall-Mart",
            quantity: 5,
            price: "$5.99",
            status: statuses.enRoute,
            pic: tomatoImg,
        },
        {
            id: "2",
            productId: "2",
            name: "Organic ginger",
            pricePerPound: "$12.99 / lb",
            vendor: "Wall-Mart",
            quantity: 1,
            price: "$6.50",
            status: statuses.completed,
            pic: gingerImg,
        },
        {
            id: "3",
            productId: "3",
            name: "Sweet onion",
            pricePerPound: "$14.95 / lb",
            vendor: "Fresh Corner",
            quantity: .5,
            price: "$14.95",
            status: statuses.pending,
            pic: onionImg,
        }
    ]);

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
                {orders.length === 0 ? (
                    <p className="basket-p">You have no active orders.</p>
                ) :
                    orders.map((order) => (
                        <VendorOrder key={order.id}
                                     order={order} />
                    ))
                }
{/* 
                <VendorOrder /> */}
            </div>
        </main>
    )

}