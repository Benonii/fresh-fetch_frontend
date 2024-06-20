import tomato from '../images/tomato.jpg';
import "../styles/Order.css"
import pencilImg from "../images/pencil.png";

export default function Order() {
    // This component is for the individual order items that will be displayed
    // in the basket
    return (
        <div className="order">
            {/* This image will be repalced by an image we fetch 
                from the api eventually */}
            <img src={tomato} alt="A Ripe, fresh Heirloom tomato" />

            {/* This static data will also be replaced by data coming
                from the api */}
            
            <div className="order-details">
                <h3 className="order-name">Heirloom Tomato</h3>
                <p className="price-per-pound">$5.99/lb</p>
                <p className="vendor">Vendor: Wall-Mart</p>

                <div className="order-btns">
                    <button className="order-now-btn">Order now</button>
                    <button className="remove-btn">Remove</button>
                </div>
            </div>

            {/* This is where a user would enter the amount of the particular
                produce that they want */}
            <div className="quantity-input">
                <input type="text" placeholder="1lb" default="1lb" name="quantity input" />
                <img src={pencilImg} alt="A penil" />
            </div>
        </div>
    )
};