import { CiMobile1 } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { GiSpinningBlades } from "react-icons/gi";


const Pormotions = () => {
    return (
        <div className='max-w-6xl mx-auto mt-24'>
            <h1 className='text-4xl font-bold'>Orange Flex promotions</h1>
            <div className="flex justify-between items-center gap-8 p-4 mt-12">
                <div className="gray_background rounded-lg w-full p-5">
                    <CiMobile1 color="#ff7900" size={80} />
                    <h3 className="font-bold text-2xl">
                        First time Flex?Take a look at what we have for you
                    </h3>
                    <p className="text-white font-semibold border max-w-max py-1 px-3  rounded-md cursor-pointer text-base mt-16">
                        Pormotion details
                    </p>
                </div>
                <div className="gray_background p-5 rounded-lg w-full">
                    <FaUserGroup color="#50be87" size={80} />
                    <h3 className="font-bold text-2xl">
                        First time Flex?Take a look at what we have for you
                    </h3>
                    <p className="text-white font-semibold border max-w-max py-1 px-3  rounded-md cursor-pointer text-base mt-16">
                        Pormotion details
                    </p>
                </div>
                <div className="gray_background p-5 rounded-lg w-full">
                    <GiSpinningBlades color="#a885d8" size={80} />
                    <h3 className="font-bold text-2xl">
                        First time Flex?Take a look at what we have for you
                    </h3>
                    <p className="text-white font-semibold border max-w-max py-1 px-3  rounded-md cursor-pointer text-base mt-16">
                        Pormotion details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pormotions
