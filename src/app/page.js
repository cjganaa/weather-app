import { Search } from "@/components/search-bar";
import { Card } from "@/components/weather-card";
import { CenterCircle } from "@/components/circle";
export default function Home() {
    return (
      <div className="w-full h-screen flex bg-[#F3F4F6]">
        <Search/>
        <div className="w-1/2 h-screen bg-[#F3F4F6] p-4 flex justify-center items-center">
          <Card bg="white"/>
        </div>
        <div className="w-1/2 h-screen bg-[#0F141E] rounded-bl-[50px] flex justify-center items-center relative">
          <Card bg="white"/>
          <CenterCircle/>
        </div>
      </div>
    );
  }