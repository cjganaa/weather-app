import Image from "next/image";
import { CiLocationOn,CiHome,CiHeart,CiUser} from "react-icons/ci";

export function Card(props){
    if(props.theme == "day"){
        return(
            <div className="z-10">
                <div className="absolute w-[414px] h-[828px] bg-[white] rounded-[48px] opacity-50"></div>
                <div className="w-[414px] h-[828px] bg-white rounded-[48px] z-10 flex flex-col p-11 justify-between">
                    <div className="flex justify-between items-center z-10">
                        <div>
                            <div className="text-[#9CA3AF] text-lg">September 10, 2021</div>
                            <div className="text-[#111827] font-extrabold text-5xl">Tokyo</div>
                        </div>
                        <div>
                            <CiLocationOn className="text-3xl text-[#4B5563]"/>
                        </div>
                    </div>
                    
                    <div className="relative self-center z-10">
                        <Image className="self-center absolute left-2 top-2 blur-lg opacity-50"  src={"/weather-icon/sun.png"} width={256} height={256} alt="sun"/>
                        <Image className="self-center relative"  src={"/weather-icon/sun.png"} width={256} height={256} alt="sun"/>
                    </div>
                    <div className="font-extrabold text-9xl text-transparent bg-gradient-to-b from-[#111827] to-[#6B7280] bg-clip-text z-10">26°</div>
                    <div className="font-extrabold text-2xl text-[#FF8E27] z-10">Sunny</div>
                    <div className="flex justify-between items-center z-10">
                        <CiHome className="text-3xl text-[#D1D5DB]"/>
                        <CiLocationOn className="text-3xl text-[#D1D5DB]"/>
                        <CiHeart className="text-3xl text-[#D1D5DB]"/>
                        <CiUser className="text-3xl text-[#D1D5DB]"/>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="z-10">
                <div className="absolute w-[414px] h-[828px] bg-[#111827] rounded-[48px] opacity-50"></div>
                <div className="w-[414px] h-[828px] bg-[#111827] rounded-[48px] z-10 flex flex-col p-11 justify-between">
                    <div className="flex justify-between items-center z-10">
                        <div>
                            <div className="text-[#9CA3AF] text-lg">September 10, 2021</div>
                            <div className="text-white font-extrabold text-5xl">Tokyo</div>
                        </div>
                        <div>
                            <CiLocationOn className="text-3xl text-[#4B5563]"/>
                        </div>
                    </div>
                    
                    <div className="relative self-center z-10">
                        <Image className="self-center absolute left-2 top-2 blur-lg opacity-50"  src={"/weather-icon/moon.png"} width={256} height={256} alt="sun"/>
                        <Image className="self-center relative"  src={"/weather-icon/moon.png"} width={256} height={256} alt="sun"/>
                    </div>
                    <div className="font-extrabold text-9xl text-transparent bg-gradient-to-b from-[#F9FAFB] to-[#111827] bg-clip-text z-10">26°</div>
                    <div className="font-extrabold text-2xl text-[#777CCE] z-10">Sunny</div>
                    <div className="flex justify-between items-center z-10">
                        <CiHome className="text-3xl text-[#D1D5DB]"/>
                        <CiLocationOn className="text-3xl text-[#D1D5DB]"/>
                        <CiHeart className="text-3xl text-[#D1D5DB]"/>
                        <CiUser className="text-3xl text-[#D1D5DB]"/>
                    </div>
                </div>
            </div>
        );
    }
}