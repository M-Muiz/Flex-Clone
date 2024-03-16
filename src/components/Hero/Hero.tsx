import a from "../../assets/ds.webp";
import b from "../../assets/scan.png"

const Hero = () => {
    return (
        <div className="flex items-center justify-between gap-8  max-w-6xl mx-auto">

            <div className="flex flex-col gap-7">
                <h1 className="text-8xl text-white font-semibold">Orange <br /> Flex</h1>
                <p className="secondary_text">
                    Not prepaid, not subscription.<br /> Subscription! Orange Flex is enough.
                </p>
                <img className="w-2/3" src={b} alt="" />
            </div>
            <div className="h-full">
                <img src={a} alt="Hero_Image" className="h-full w-full object-cover" />
            </div>
        </div>
    )
}

export default Hero
