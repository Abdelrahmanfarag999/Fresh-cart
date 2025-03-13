import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RevolvingDot } from "react-loader-spinner";
import CategoreyHook from "../custom hooks/CategoreyHook";


export default function CategoriesSlider() {


    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll:5,
        arrows: false
    };


    const { data, isError, isLoading } = CategoreyHook()
    if (isLoading) {
        return <div className="w-full  flex items-center justify-center h-[250px]">
            <RevolvingDot
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }
    if (isError) {
        return <h6 className="text-red-600 mx-auto">there is an error</h6>
    }


    return (
        <>
            <div className="mx-auto ">
                {<Slider className=" " {...settings} >
                {data.data.data.map((category) => <div key={category._id} className=" pt-12 pb-6 ">
                        <img className="w-full h-40" src={category.image} alt={category.name} />
                        <h6>{category.name}</h6>
                    </div>)}
                </Slider>}




            </div>
        </>
    );
}