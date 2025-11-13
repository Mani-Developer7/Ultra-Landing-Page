
import './Banner.css';

const Banner = ({ data, Isrotate, Isrotate1}) => {
    const { title, subtitle, buttonText, imageUrl, heading } = data
    return (
        <div className={`min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 grow ${Isrotate && "Isrotate"} ${Isrotate1 && "Isrotate1"} `}>
            <div className={`max-w-lg ${Isrotate && "Text"} ${Isrotate1 && "Text1"} `} >
                <p className={`font-semibold ${Isrotate && "para"} ${Isrotate1 && "para1"}`}>{heading}</p>
                <h1 className="text-[20px] md:text-[48px] font-bold w-[600px] leading-tight my-4">
                    {title}
                </h1>
                <p className="text-gray-400 w-[420px] mb-6">
                    {subtitle}
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md text-lg font-medium w-[250px]">
                    {buttonText}
                </button>
            </div>

            <div className="relative mt-10 md:mt-0">
                <img src={imageUrl} alt="" className="max-w-[550px] " />
            </div>
        </div>

    )
}

export default Banner
