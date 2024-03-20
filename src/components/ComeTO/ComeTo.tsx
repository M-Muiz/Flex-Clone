import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import { data } from "../../data/ComeTo"
import Card from "./Card"
import { sliderSettings } from "../../utils/slider"


const ComeTo = () => {

    const swiper = useSwiper();
    console.log(swiper)

    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-5 mt-12">

            <h1 className="text-4xl font-bold">Come to Orange Flex</h1>

            <div className="overflow-x-hidden relative z-0">
                <div className="absolute flex items-center justify-between w-full h-full z-30">
                    <button onClick={() => console.log("hy")} className="slider_button">&lt;</button>
                    <button onClick={() => swiper.slideNext()} className="slider_button">&gt;</button>
                </div>
                <Swiper {...sliderSettings}>
                    {
                        data && data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <Card card={card} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>


        </div>
    )
}

export default ComeTo
