import Image from "next/image";
import { CiLocationOn,CiHome,CiHeart,CiUser} from "react-icons/ci";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayConditions = {
    "Sunny":"sun",
    "Partly Cloudy":"cloudy",
    "Cloudy":"cloudy",
    "Overcast":"cloudy",
    "Mist":"cloudy",
    "Patchy rain possible":"rain",
    "Patchy snow possible":"snow",
    "Patchy sleet possible":"snow",
    "Patchy freezing drizzle possible":"snow",
    "Thundery outbreaks possible":"thunderstorm",
    "Blowing snow":"snow",
    "Blizzard":"snow",
    "Fog":"cloudy",
    "Freezing fog":"cloudy",
    "Patchy light drizzle":"rain",
    "Patchy rain nearby":"rain",
    "Light drizzle":"rain",
    "Freezing drizzle":"snow",
    "Heavy freezing drizzle":"snow",
    "Patchy light rain":"rain",
    "Light rain":"rain",
    "Moderate rain at times":"rain",
    "Moderate rain":"rain",
    "Heavy rain at times":"rain",
    "Heavy rain":"rain",
    "Light freezing rain":"snow",
    "Moderate or heavy freezing rain":"snow",
    "Light sleet":"snow",
    "Moderate or heavy sleet":"snow",
    "Patchy light snow":"snow",
    "Light snow":"snow",
    "Patchy moderate snow":"snow",
    "Moderate snow":"snow",
    "Patchy heavy snow":"snow",
    "Heavy snow":"snow",
    "Ice pellets":"snow",
    "Light rain shower":"rain",
    "Moderate or heavy rain shower":"rain",
    "Torrential rain shower":"rain",
    "Light sleet showers":"rain",
    "Moderate or heavy sleet showers":"snow",
    "Light snow showers":"snow",
    "Moderate or heavy snow showers":"snow",
    "Light showers of ice pellets":"snow",
    "Moderate or heavy showers of ice pellets":"snow",
    "Patchy light rain with thunder":"thunderstorm",
    "Moderate or heavy rain with thunder":"thunderstorm",
    "Patchy light snow with thunder":"thunderstorm",
    "Moderate or heavy snow with thunder":"thunderstorm"
}
const nightConditions = {
    "Clear":"moon",
    "Partly Cloudy":"nightcloudy",
    "Cloudy":"nightcloudy",
    "Overcast":"nightcloudy",
    "Mist":"nightcloudy",
    "Patchy rain nearby":"rain",
    "Patchy rain possible":"nightrain",
    "Patchy snow possible":"nightsnow",
    "Patchy sleet possible":"nightsnow",
    "Patchy freezing drizzle possible":"nightsnow",
    "Thundery outbreaks possible":"nightthunderstorm",
    "Blowing snow":"nightsnow",
    "Blizzard":"nightsnow",
    "Fog":"nightcloudy",
    "Freezing fog":"nightcloudy",
    "Patchy light drizzle":"nightrain",
    "Light drizzle":"nightrain",
    "Freezing drizzle":"nightsnow",
    "Heavy freezing drizzle":"nightsnow",
    "Patchy light rain":"nightrain",
    "Light rain":"nightrain",
    "Moderate rain at times":"nightrain",
    "Moderate rain":"nightrain",
    "Heavy rain at times":"nightrain",
    "Heavy rain":"nightrain",
    "Light freezing rain":"nightsnow",
    "Moderate or heavy freezing rain":"nightsnow",
    "Light sleet":"nightsnow",
    "Moderate or heavy sleet":"nightsnow",
    "Patchy light snow":"nightsnow",
    "Light snow":"nightsnow",
    "Patchy moderate snow":"nightsnow",
    "Moderate snow":"nightsnow",
    "Patchy heavy snow":"nightsnow",
    "Heavy snow":"nightsnow",
    "Ice pellets":"nightsnow",
    "Light rain shower":"nightrain",
    "Moderate or heavy rain shower":"nightrain",
    "Torrential rain shower":"nightrain",
    "Light sleet showers":"nightrain",
    "Moderate or heavy sleet showers":"nightsnow",
    "Light snow showers":"nightsnow",
    "Moderate or heavy snow showers":"nightsnow",
    "Light showers of ice pellets":"nightsnow",
    "Moderate or heavy showers of ice pellets":"nightsnow",
    "Patchy light rain with thunder":"nightthunderstorm",
    "Moderate or heavy rain with thunder":"nightthunderstorm",
    "Patchy light snow with thunder":"nightthunderstorm",
    "Moderate or heavy snow with thunder":"nightthunderstorm"
}

export function Card({theme,cityName,dayData}){
    const date = new Date();
    const dayImg = dayConditions[dayData.dayCondition] ? dayConditions[dayData.dayCondition] :"sun";
    const nightImg = nightConditions[dayData.nightCondition] ? nightConditions[dayData.nightCondition] :"moon";
    if(theme == "day"){
        return(
            <div className="z-10">
                <div className="absolute w-[414px] h-[828px] bg-[white] rounded-[48px] opacity-90"></div>
                <div className="w-[414px] h-[828px] bg-transparent rounded-[48px] z-10 flex flex-col p-11 justify-between">
                    <div className="flex justify-between items-center z-10">
                        <div>
                            <div className="text-[#9CA3AF] text-lg">{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</div>
                            <div className="text-[#111827] font-extrabold text-5xl">{cityName}</div>
                        </div>
                        <div>
                            <CiLocationOn className="text-3xl text-[#4B5563]"/>
                        </div>
                    </div>
                    
                    <div className="relative self-center z-10">
                        <Image className="self-center absolute left-4 top-4 blur-lg opacity-50"  src={"/weather-icon/"+dayImg+".png"} width={256} height={256} alt="sun"/>
                        <Image className="self-center relative"  src={"/weather-icon/"+dayImg+".png" } width={256} height={256} alt="sun"/>
                    </div>
                    <div className="font-extrabold text-9xl text-transparent bg-gradient-to-b from-[#111827] to-[#6B7280] bg-clip-text z-10">{Math.floor(dayData.dayTempC)}°</div>
                    <div className="font-extrabold text-2xl text-[#FF8E27] z-10">{dayData.dayCondition}</div>
                    <div className="flex justify-between items-center z-10">
                        <CiHome className="text-3xl text-[#D1D5DB] hover:text-[#111827]"/>
                        <CiLocationOn className="text-3xl text-[#D1D5DB] hover:text-[#111827]"/>
                        <CiHeart className="text-3xl text-[#D1D5DB] hover:text-[#111827]"/>
                        <CiUser className="text-3xl text-[#D1D5DB] hover:text-[#111827]"/>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="z-10">
                <div className="absolute w-[414px] h-[828px] bg-[#111827] rounded-[48px] opacity-80"></div>
                <div className="w-[414px] h-[828px] bg-transparent rounded-[48px] z-10 flex flex-col p-11 justify-between">
                    <div className="flex justify-between items-center z-10">
                        <div>
                            <div className="text-[#9CA3AF] text-lg">{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</div>
                            <div className="text-white font-extrabold text-5xl">{cityName}</div>
                        </div>
                        <div>
                            <CiLocationOn className="text-3xl text-[#4B5563]"/>
                        </div>
                    </div>
                    
                    <div className="relative self-center z-10">
                        <Image className="self-center absolute left-2 top-2 blur-lg opacity-50"  src={"/weather-icon/"+nightImg+".png"} width={256} height={256} alt="sun"/>
                        <Image className="self-center relative"  src={"/weather-icon/"+nightImg+".png"} width={256} height={256} alt="sun"/>
                    </div>
                    <div className="font-extrabold text-9xl text-transparent bg-gradient-to-b from-[#F9FAFB] to-[#111827] bg-clip-text z-10">{Math.floor(dayData.nightTempC)}°</div>
                    <div className="font-extrabold text-2xl text-[#777CCE] z-10">{dayData.nightCondition}</div>
                    <div className="flex justify-between items-center z-10">
                        <CiHome className="text-3xl text-[#4B5563] hover:text-white"/>
                        <CiLocationOn className="text-3xl text-[#4B5563] hover:text-white"/>
                        <CiHeart className="text-3xl text-[#4B5563] hover:text-white"/>
                        <CiUser className="text-3xl text-[#4B5563] hover:text-white"/>
                    </div>
                </div>
            </div>
        );
    }
}