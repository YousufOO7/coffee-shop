import icon1 from '../../assets/Images/icons/1.png'
import icon2 from '../../assets/Images/icons/2.png'
import icon3 from '../../assets/Images/icons/3.png'
import icon4 from '../../assets/Images/icons/4.png'
import { Slide } from "react-awesome-reveal";

const PopularMenu = () => {
    return (
        <div className="mb-20">
            <div className=" w-full  bg-[#623620] relative">
                <div className="top-0 absolute">
                    <img src="https://rms.rafholding.com/assets/tenant/image/674ce80118aebece3a1483b235787cad564b2d6a.png" alt="" />
                </div>
                {/* text and card */}
                <div className="text-white py-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-center">Our Popular Coffee Menu</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mt-10 px-20 lg:px-0  mx-auto'>
                        <Slide direction='left'>
                        <div className="card bg-black w-[250px] h-[200px]">
                            <div className="card-body">
                                <figure>
                                    <img src={icon1} alt="" />
                                </figure>
                                <h2 className="text-center text-xl font-semibold pt-2">Coffee Title</h2>
                            </div>
                        </div>
                        </Slide>
                        <Slide direction='down'>
                        <div className="card bg-black w-[250px] h-[200px]">
                            <div className="card-body">
                                <figure>
                                    <img src={icon2} alt="" />
                                </figure>
                                <h2 className="text-center text-xl font-semibold pt-2">Coffee Title</h2>
                            </div>
                        </div>
                        </Slide>
                        <Slide direction='right'>
                        <div className="card bg-black w-[250px] h-[200px]">
                            <div className="card-body">
                                <figure>
                                    <img src={icon3} alt="" />
                                </figure>
                                <h2 className="text-center text-xl font-semibold pt-2">Coffee Title</h2>
                            </div>
                        </div>
                        </Slide>
                        <Slide direction='down'>
                        <div className="card bg-black w-[250px] h-[200px]">
                            <div className="card-body">
                                <figure>
                                    <img src={icon4} alt="" />
                                </figure>
                                <h2 className="text-center text-xl font-semibold pt-2">Coffee Title</h2>
                            </div>
                        </div>
                        </Slide>
                    </div>
                </div>


                <div className="bottom-0 absolute">
                    <img src="https://rms.rafholding.com/assets/tenant/image/fc1aea851529e48d6ab8828af344e2abd6134316.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default PopularMenu;