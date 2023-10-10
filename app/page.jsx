"use client"
import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import areaBg from '../public/assets/Area-bg.png'
import LocationIcon from '../public/assets/areas-icon-map.png'
import Locate from '../public/assets/areas-icon-locate.png'

import { Badge } from "@/components/ui/badge"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"


function page() {
  const ServingAreas = ['Padur', 'Kelambakkam', 'Egattur', 'Pudupakkam', 'Navalur', 'Kazipattur', 'Siruseri', 'Thaiyur', 'Thazambur']
  const ServiceCount = [5, 10, 15, 8, 14, 16, 14, 14, 12]
  const [locationLattitude, setLocationLattitude] = useState(null)
  const [locationLongitude, setLocationLongitude] = useState(null)
  const [input, setInput] = useState(null)
  const defaultCenter = {
    lat: locationLattitude, lng: locationLongitude
  }

 
  useEffect(() => {
    if (locationLattitude !== null) {
      postIp()
      var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 }, // Set initial map center
        zoom: 8 // Set initial zoom level
      });
    }
  }, [locationLattitude])


  const handleInputChange = (currentValue) => {
    setInput(currentValue);

  };
  async function Location() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get the user's latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          setLocationLattitude(latitude);
          setLocationLongitude(longitude);

        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser');
    }
  }
  async function postIp() {
    response = await fetch(
      'https://fzmyn3cnv2rullb5qfu5gvdv4q0kotfn.lambda-url.ap-south-1.on.aws', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "latitude": locationLattitude,
        "longitude": locationLongitude
      }),
    }),
      console.log(response)
  }
  return (
    <div className="w-screen h-screen flex justify-between font-[PingFang]">
      <div className="w-[40%] h-full">
        <Image className=" w-full h-full" src={areaBg} alt="bg" />
      </div>
      <div className="w-[55%] h-full flex flex-col  justify-evenly">
        <p className="text-5xl  font-semibold ">Areas We Serving</p>
        <p className="text-3xl  ">We're delivering freshness at your doorstep!</p>
        <div className="flex ">
          <Command onChange={handleInputChange} className="rounded-lg w-[70%]">
            <CommandInput className=" w-full  border-2 border-[#d3d2d2] rounded-full py-3 px-6 outline-none" placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty className="border p-4 justify-center text-center">No results found.</CommandEmpty>
              <CommandGroup className={cn("border ", input ? 'flex' : 'hidden')} >
                <CommandItem className="w-full">
                  <span className="w-full" value={'padur'} onClick={(e) => setInput(e.target.value)}>Padur</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>

          <div  onClick={() => Location()} className="ml-4 max-h-[65px]  flex hover:cursor-pointer justify-center border-2 border-[#d3d2d2] rounded-full py-4 px-4">
            <Image className="w-[20%]  " src={Locate} alt="Locate" />
            <p className="pt-1 ml-1 cursor-pointer"  >Locate me</p>
          </div>
        </div>
        <div className="">
          {ServingAreas.map((Areas, index) => (
            <Badge variant="outline" className="m-3 ml-0 bg-[#f7f7f7] justify-center px-6 py-2"><div><p>{Areas}<span className="ml-2 p-1 bg-[#e1e1e1] rounded-full">{ServiceCount[index]}</span></p></div></Badge>))}
        </div>
        <div className="w-[95%]  h-[30%] bg-[#f7f7f7] border-[.05rem] border-[#cccccc] rounded-sm flex  justify-around"  >
          {locationLattitude ? <div id="map" className="w-full h-full"></div>
            : <><div className=" flex flex-col w-[50%] justify-center ml-6">
              <p className="text-[#555555] text-2xl font-bold ">View Your Area</p>
              <p className=" text-[#555555] text-lg">Please Select any of the above region</p>
            </div>
              <Image className="w-[40%] h-[80%] " src={LocationIcon} alt="Map Icon" /></>}
        </div>
      </div>
    </div>
  )
}

export default page




