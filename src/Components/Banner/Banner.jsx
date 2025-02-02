import bannerLogo from '../../../public/2.png'
import './Banner.css'
import { Slide } from "react-awesome-reveal";
import "aos/dist/aos.css";
import Aos from 'aos';
import { useEffect, useState } from 'react';

const Banner = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        });
    }, [])

    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = e => {
        const { clientX, clientY, currentTarget } = e
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const x = ((clientX - left) / width - 0.5) * 20;
        const y = ((clientY - top) / height - 0.5) * 20;

        setPosition({ x, y });
    }

    return (
        <div className='mb-5'>
            <div className='relative background-gradient' onMouseMove={handleMouseMove}>
                <section className="max-w-6xl mx-auto flex flex-col sm:flex-row md:flex lg:flex justify-between gap-5 items-center px-5 md:px-10 lg:px-0 pt-24">
                    {/* text div */}
                    <div data-aos="fade-up" className=' lg:w-3/6'>
                        <h2 data-aos="fade-up" className='text-2xl text-white md:text-3xl lg:text-6xl leading-normal lg:leading-[5rem] font-bold '>We’re Organic And Fresh Coffee Shop Partner For You</h2>
                        <p data-aos="fade-up" className='font-thin text-gray-300 py-4 w-5/6 text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        {/* btn */}
                        <div data-aos="fade-up" className='flex gap-5 text-white'>
                            <button className='btn btn-outline px-8 py-2 text-white hover:bg-black hover:text-white bg-[#623620]'>Discover More</button>
                            <button className='btn btn-outline'>Book A Table</button>
                        </div>
                    </div>
                    {/* image div */}
                    <Slide direction='right'>
                        <div>
                            <img src={bannerLogo}
                                className='h-[300px] md:h-[430px] lg:h-[550px] transition-transform duration-100'
                                style={{
                                    transform: `translate(${position.x}px, ${position.y}px)`
                                }}
                                alt="" />
                        </div>
                    </Slide>
                </section>

                {/*  */}
                <div className='bottom-0 absolute'>
                    <img src="https://rms.rafholding.com/assets/tenant/image/65eddef77857189d10ed4aec542aa5e44c45d7a1.png" alt="" />
                </div>
            </div>

        </div>
    );
};


export default Banner;