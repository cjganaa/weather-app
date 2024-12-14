import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const CITIES = [
    "Atlanta",
    "Berlin",
    "New York",
    "Ulaanbaatar",
    "Moscow",
    "London"
];
export function Search({search,setSearch,setCityValueFromSearch,setCityName}){
    return(
        <div className="flex flex-col absolute left-[40px] top-[40px] z-20 gap-3">
            <div className="flex px-4 py-3 rounded-[50px] border-none border-gray-600 overflow-hidden w-[500px] h-fit font-[sans-serif] p-0 drop-shadow-md bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="18px" className="fill-gray-600 mr-3">
                <path
                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
                </svg>
                <input 
                    value={search}
                    type="email" 
                    placeholder="Search" 
                    className="w-full outline-none bg-transparent text-gray-600 text-sm" 
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={setCityValueFromSearch}
                />
            </div>
            <ul className="w-[500px] h-fit bg-white text-black rounded-[24px] p-5">
                {CITIES.filter(name => name.includes(search)).map((suggestion, index) => (
                <li key={index} className="flex items-center font-extrabold text-[28px] gap-3" onClick={() => {setSearch(suggestion);setCityName(suggestion);}}>
                    <IoLocationOutline />
                    {suggestion}
                </li>
                ))}
            </ul>
        </div>
    );
}