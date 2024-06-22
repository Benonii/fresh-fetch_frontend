
import { useState, useEffect } from "react";

import Header from "../components/Header";
import basketImg from "../images/basket.jpg";
import Order from "../components/Order";
import PendingOrder from "../components/PendingOrder";
import Profile from "../components/Profile";

import "../styles/Basket.css";

import profilePic from "../images/pic-person-01.jpg";
import tomatoImg from "../images/tomato.jpg";
import gingerImg from "../images/ginger.jpg";
import onionImg from "../images/onion.jpg";


export default function Basket() {
    // This is a component that will display the basket page

    const statuses = {
        completed: "Completed",
        enRoute: "En-route",
        pending: "Pending",
        cancelled: "cancelled",
    }

    const [quantity, setQuantity] = useState(1);
    // User state is empty to represent users that are not logged in
    const [ user, setUser ] = useState({
        userId: "1",
        firstName: "Benoni",
        lastName: "Esckinder",
        basket: [
            {
                id: "1",
                productId: "1",
                name: "Heirloom tomato",
                pricePerPound: "$5.99 / lb",
                vendor: "Wall-Mart",
                quantity: quantity,
                price: "$5.99",
                status: null,
                pic: tomatoImg,
            },
            {
                id: "2",
                productId: "2",
                name: "Organic ginger",
                pricePerPound: "$12.99 / lb",
                vendor: "Wall-Mart",
                quantity: quantity,
                price: "$6.50",
                status: null,
                pic: gingerImg,
            },
            {
                id: "3",
                productId: "3",
                name: "Sweet onion",
                pricePerPound: "$14.95 / lb",
                vendor: "Fresh Corner",
                quantity: quantity,
                price: "$14.95",
                status: statuses.pending,
                pic: onionImg,
            },

            {
                id: "4",
                productId: "3",
                name: "Sweet onion",
                pricePerPound: "$14.95 / lb",
                vendor: "Fresh Corner",
                quantity: quantity,
                price: "$14.95",
                status: statuses.enRoute,
                pic: onionImg,
            },
            {
                id: "5",
                productId: "3",
                name: "Sweet onion",
                pricePerPound: "$14.95 / lb",
                vendor: "Fresh Corner",
                quantity: quantity,
                price: "$14.95",
                status: statuses.completed,
                pic: onionImg,
            }
        ],
        profilePic: profilePic,
    });

    const preOrders = user.basket.filter(order => !order.status)
    const pendingOrders = user.basket.filter(order => order.status);

    function removeOrder(id) {
        const newBasket = user.basket.filter(order => order.id !== id);
        setUser((prevState) => ({
            ...prevState,
            basket: newBasket,
        }));
    }

    function cancelAllPending() {
        setUser((prevState) => ({
            ...prevState,
            basket: user.basket.filter(order => order.status == null)
        }));
    }
    return (
        <>
            <div className="header-container">
                <Header />
            </div>

            <div className="profile-container" aria-label="User Profile">
                <Profile profilePic={user.profilePic} />
                <div className="user-info">
                    <h2 className="user-header">{user.firstName}'s Basket</h2>
                </div>
            </div>

            <main>
                {/* This div contains the basket logo,
                    the orders count and the order-all button */}
                <div className="basket-header">
                    <div className="basket-logo">
                        <img src={basketImg} alt="A basket" />
                        <div className="basket-logo-text">
                            <h2>Basket</h2>
                            <small className="item-count" aria-label="Item count">{preOrders.length} item(s)</small>
                        </div>
                    </div>

                    <button className="order-all-btn">Order all</button>
                </div>
                <hr />

                {/* This div is for orders that haven't been made yet */}
                <div className="pre-orders">
                    {preOrders.length === 0 ? (
                        <p className="basket-p">Looks like there is nothing in your basket.</p>
                    ) :
                        preOrders.map((order) => (
                            <Order key={order.id}
                               order={order} 
                               removeOrder={removeOrder} />
                    ))}
                    {/* {preOrders.map((order) => (
                        <Order key={order.id}
                               order={order} 
                               removeOrder={removeOrder} />
                    ))} */}
                </div>

                {/* This div contains the "pending" header and the cancel-all
                    button
                */}
                <div className="pending-header">
                    <div className="pending-header-text">
                        <h2>Pending</h2>
                        <small className="item-count">{pendingOrders.length} item(s)</small>
                    </div>
                    <button className="cancel-all-btn"
                            onClick={cancelAllPending}>Cancel all</button>
                </div>
                <hr />

                {/* This div is for all the orders that have been made(sent out)
                    but still not delivered yet. */}

                <div className="pending-orders">
                    {pendingOrders.length === 0 ? (
                        <p className="basket-p">You have no pending orders</p>
                    ) : 
                        pendingOrders.map((order) => (
                            <PendingOrder key={order.id}
                                      order={order}
                                      cancelOrder={removeOrder} />
                    ))}
                </div>
            </main>
            
        </>
    )
}