import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { JackInTheBox } from "react-awesome-reveal";


const OfferCoffee = () => {
    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetch('./offerCoffee.json')
            .then(res => res.json())
            .then(data => setCoffees(data))


        Aos.init({
            duration: 2000,
            once: true,
        });
    }, [])

    return (
        <div className="my-20 max-w-6xl mx-auto">
            <JackInTheBox delay={1000}>
                <h2 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl text-center my-3 font-bold w-5/6 md:w-3/6 mx-auto">
                    We Offer Coffee at Most Crazy Prices
                </h2>
            </JackInTheBox>

            <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 px-16 lg:px-0 mt-10">
                {/* Coffee Card */}
                {
                    coffees.map(coffee => <div data-aos="fade-up" key={coffee.id} className="border relative border-brown-700 rounded-lg p-6 shadow-lg text-center  max-w-sm hover:bg-[#623620] hover:text-white transition-colors duration-500">

                        <h3 className="text-xl lg:text-2xl font-bold text-brown-800">{coffee.name}</h3>
                        <div className="flex justify-center items-center my-2">
                            {/* Star ratings placeholder */}
                            <span className="text-yellow-400">{coffee.stars}</span>
                            <span className="text-gray-500 text-sm">{coffee.rating}</span>
                        </div>
                        <p className="text-xl font-bold text-brown-700">${coffee.price} <span className="line-through text-gray-500">${coffee.old_price}</span></p>
                        <p className="text-gray-400 text-sm my-2">{coffee.description}</p>

                        {/* Coffee Image */}
                        <div className="my-4">
                            <img src={coffee.image} alt="Black Chocolate Mocha" className="w-full h-auto" />
                        </div>

                        {/* Add to Cart Button */}
                        <div className="absolute left-22 lg:left-32">
                            <button className="btn bg-[#623620] hover:scale-105 transition-all duration-500  text-white hover:bg-black hover:text-white shadow-md">Add To Card</button>
                        </div>
                    </div>)
                }
            </section>
        </div>
    );
};

export default OfferCoffee;
