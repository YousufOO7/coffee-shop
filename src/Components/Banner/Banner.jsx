import bannerLogo from '../../../public/2.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='mb-20'>
            <div className='relative background-gradient'>
            <section className="max-w-6xl mx-auto flex flex-col sm:flex-row md:flex lg:flex justify-between gap-5 items-center px-5 md:px-10 lg:px-0 pt-24">
                    {/* text div */}
                    <div className=' lg:w-3/6'>
                        <h2 className='text-2xl text-white md:text-3xl lg:text-6xl leading-normal lg:leading-[5rem] font-bold '>We’re Organic And Fresh Coffee Shop Partner For You</h2>
                        <p className='font-thin text-gray-300 py-4 w-5/6 text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        {/* btn */}
                        <div className='flex gap-5 text-white'>
                            <button className='btn btn-outline'>Discover More</button>
                            <button className='btn btn-outline'>Book A Table</button>
                        </div>
                    </div>
                    {/* image div */}
                    <div>
                        <img src={bannerLogo} className='h-[300px] md:h-[430px] lg:h-[550px]' alt="" />
                    </div>
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