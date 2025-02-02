import Banner from "../Components/Banner/Banner";
import CoffeeShop from "../Components/CoffeeShop/CoffeeShop";
import './../Components/scrollBar/scrollBar.css'

const Home = () => {
    return (
        <div className="scroll-container">
            <Banner></Banner>
            <CoffeeShop></CoffeeShop>
        </div>
    );
};

export default Home;