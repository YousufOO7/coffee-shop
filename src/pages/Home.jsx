import Banner from "../Components/Banner/Banner";
import CoffeeShop from "../Components/CoffeeShop/CoffeeShop";
import Featured from "../Components/Featured/Featured";
import OfferCoffee from "../Components/OfferCoffee/OfferCoffee";
import PopularMenu from "../Components/PopularMenu/PopularMenu";
import './../Components/scrollBar/scrollBar.css'

const Home = () => {
    return (
        <div className="scroll-container">
            <Banner></Banner>
            <CoffeeShop></CoffeeShop>
            <PopularMenu></PopularMenu>
            <OfferCoffee></OfferCoffee>
            <Featured></Featured>
        </div>
    );
};

export default Home;