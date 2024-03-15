import a from "../../assets/hero_main.webp";
import b from "../../assets/scan.png"

const Hero = () => {
    return (
        <div className="flex items-center justify-between gap-4">

            <div className="flex flex-col gap-2">
                <h1 className="text-8xl text-white font-semibold">Orange <br /> Flex</h1>
                <p className="secondary_text">
                    Not prepaid, not subscription.<br /> Subscription! Orange Flex is enough.
                </p>
                <img src={b} alt="" />
            </div>
            <div className="h-full w-1/2 mr-6">
                <img src={a} alt="" />
            </div>
        </div>
    )
}

export default Hero
