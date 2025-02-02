import Banner from "../Components/Banner/Banner";
import CoffeeShop from "../Components/CoffeeShop/CoffeeShop";
import PopularMenu from "../Components/PopularMenu/PopularMenu";
import './../Components/scrollBar/scrollBar.css'

const Home = () => {
    return (
        <div className="scroll-container">
            <Banner></Banner>
            <CoffeeShop></CoffeeShop>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;