import Header from "../components/Header";
import Produce from "../components/Produce";
import Search from "../components/Search";
import basketImg from "../images/basket.jpg";
import "../styles/ProducePage.css";

export default function ProducePage() {
    return (
        <>
            <div className="header-container">
                <Header />
                
                <button className="basket-btn">
                    <p>Basket(3)</p>
                    <img src={basketImg} alt="" />
                </button>

            </div>
            <main>
                {/* This div contains the basket logo,
                    the orders count and the order all button */}
                <div className="secondary-header">
                    <h2>Produce</h2>
                    <Search />
                </div>
                <hr />

                {/* A few of the available produces */}
                <div class="orders">
                    <Produce className="produce"/>
                    <Produce className="produce"/>
                    <Produce classname="produce" />
                </div>
            </main>
        </>
    )
}