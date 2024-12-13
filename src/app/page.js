import { Search } from "@/components/search-bar";
import { Card } from "@/components/weather-card";
import { CenterCircle } from "@/components/circle";

const API_KEY = '3a30229125da41a98d172525241312';

export default function Home() {
    return (
      <div className="w-full h-screen flex bg-[#F3F4F6] overflow-hidden justify-between">
        <Search/>
        <div className="w-1/2 h-screen bg-[#F3F4F6] p-4 flex justify-center items-center relative">
          <Card theme="day"/>
        </div>
        <div className="w-1/2 h-screen bg-[#0F141E] rounded-bl-[50px] flex justify-center items-center relative">
          <CenterCircle/>
          <Card theme="night"/>
        </div>
      </div>
    );
  }