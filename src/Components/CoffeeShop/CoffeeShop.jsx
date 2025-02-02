import { useEffect, useState } from "react";
import coffeeCup from "../../assets/Images/coffeeCup.png";
import CountUp from "react-countup";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { Slide } from "react-awesome-reveal";
import Aos from "aos";
import "aos/dist/aos.css";

const CoffeeShop = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const x = ((clientX - left) / width - 0.5) * 20;
        const y = ((clientY - top) / height - 0.5) * 20;

        setPosition({ x, y });
    };

    useEffect(() => {
            Aos.init({
                duration: 2000,
                once: true,
            });
        }, [])

    return (
        <div className="mb-20 flex flex-col sm:flex-row md:flex lg:flex justify-between gap-5"
            onMouseMove={handleMouseMove}
        >
            {/* Image Section */}
            <div
                className="md:w-[55%] relative overflow-hidden"

            >
                <Slide direction="left">
                    <img
                        src={coffeeCup}
                        alt=""
                        className="transition-transform duration-100"
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                        }}
                    />
                </Slide>
            </div>

            {/* Text Section */}
            <div className="md:w-[45%] px-5 md:px-0">
                <h1 data-aos="fade-up" className="text-2xl lg:text-4xl font-bold my-10">
                    One of The Best Coffee Shop Houses in The City
                </h1>
                <p data-aos="fade-up" className="font-thin pb-5 text-xs lg:text-sm">
                    The advice left many medical experts scratching their heads. The
                    coronavirus is a new pathogen, and little is known about the disease
                    it causes, called Covid-19, or how it responds to common medications.
                    On Wednesday, the World Health Organization.
                </p>

                <Slide direction="right">
                <section className="flex justify-evenly gap-5 py-5">
                    <div className="card-content text-center">
                        <span className="text-2xl md:text-3xl font-medium mb-2">
                            <CountUp end={2094} duration={3} />+
                        </span>
                        <p className="text-sm lg:text-lg leading-tight">Total Customers</p>
                    </div>
                    <div className="card-content text-center">
                        <span className="text-2xl md:text-3xl font-medium mb-2">
                            <CountUp end={15} duration={3} />+
                        </span>
                        <p className="text-sm lg:text-lg leading-tight">World Outlet</p>
                    </div>
                    <div className="card-content text-center">
                        <span className="text-2xl md:text-3xl font-medium mb-2">
                            <CountUp end={100} duration={3} />%
                        </span>
                        <p className="text-sm lg:text-lg leading-tight">Satisfaction</p>
                    </div>
                </section>
                </Slide>

                {/* Buttons */}
                <Slide direction="down">
                <div data-aos="fade-up" className="flex gap-5 pt-5">
                    <button className="btn btn-outline px-8 py-2 text-white hover:bg-black hover:text-white bg-[#623620] text-xs lg:text-sm">
                        Reservation
                    </button>
                    <div className="items-center space-x-2">
                        <button className="btn btn-outline rounded-full text-xs lg:text-sm">
                            <SiGoogledisplayandvideo360 className="text-[#623620]" />
                        </button>
                        <span className="text-xs">How to place order</span>
                    </div>
                </div>
                </Slide>
            </div>
        </div>
    );
};

export default CoffeeShop;
