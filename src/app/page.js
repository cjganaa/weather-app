"use client"

import { Search } from "@/components/search-bar";
import { Card } from "@/components/weather-card";
import { CenterCircle } from "@/components/circle";
import { useEffect,useState } from "react";

const API_KEY = '3a30229125da41a98d172525241312';

export default function Home() {
  const [search, setSearch] = useState('');
  const [cityName, setCityName] = useState('Ulaanbaatar');
  const [dayData, setDayData] = useState({
    dayTempC : 0,
    nightTempC : 0,
    condition : '',
  });
  function setCityValueFromSearch(event){
    if(event.key === "Enter"){
      setCityName(search);
    }
  }

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=1&aqi=no&alerts=no`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDayData({
          dayTempC : data?.forecast.forecastday[0].day.avgtemp_c,
          nightTempC : data?.forecast.forecastday[0].day.mintemp_c,
          dayCondition : data?.forecast.forecastday[0].day.condition.text.trim(),
          nightCondition : data?.forecast.forecastday[0].hour[23].condition.text.trim(),
        });
      });
  },[cityName]);
  return (
    <div className="w-full h-screen flex bg-[#F3F4F6] overflow-hidden justify-between">
      <Search search={search} setSearch={setSearch} setCityValueFromSearch={setCityValueFromSearch} setCityName={setCityName}/>
      <div className="w-1/2 h-screen bg-[#F3F4F6] p-4 flex justify-center items-center relative">
        <Card theme="day" cityName={cityName} dayData={dayData}/>
      </div>
      <div className="w-1/2 h-screen bg-[#0F141E] rounded-bl-[50px] flex justify-center items-center relative">
        <CenterCircle/>
        <Card theme="night" cityName={cityName} dayData={dayData}/>
      </div>
    </div>
  );
}