import { IoMdHeart } from "react-icons/io";
import h from "../../assets/logo.svg"


const Header = () => {
    return (
        <div className="m-4 p-6 gray_background flex items-center justify-between rounded-lg fixed left-0 right-0">
            <div className="logo">
                <img src={h} alt="logo" />
            </div>

            <div>
                <ul className="flex items-center gap-3">
                    <li className="cursor-pointer">Offer</li>
                    <li className="flex gap-2 items-center cursor-pointer">Flex <IoMdHeart className="gredient_color" /> atmosphere</li>
                    <li className="cursor-pointer">Blog</li>
                    <li className="cursor-pointer">Help</li>
                </ul>
            </div>
            <div>
                <button className="header_button px-6 py-2 rounded-md font-semibold">Download the app</button>
            </div>
        </div>
    )
}

export default Header
