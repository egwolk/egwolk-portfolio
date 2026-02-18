"use client";
import React, { useState, useEffect } from 'react'
import { TiWeatherCloudy, TiWeatherSunny, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherDownpour, TiWeatherNight  } from "react-icons/ti";
import { BsCloudFog, BsCloudFog2  } from "react-icons/bs";
import { TbMist } from "react-icons/tb";
import { FaVolumeMute, FaVolumeUp  } from "react-icons/fa";

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [temperature, setTemperature] = useState<string>('--');
  const [weatherIcon, setWeatherIcon] = useState<React.ReactNode>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getWeatherIcon = (weatherMain: string, isNight: boolean) => {
    const iconProps = { className: "inline-block h-6 w-6" };
    
    switch(weatherMain.toLowerCase()) {
      case 'clear':
        return isNight ? <TiWeatherNight {...iconProps} /> : <TiWeatherSunny {...iconProps} />;
      case 'clouds':
        return <TiWeatherCloudy {...iconProps} />;
      case 'rain':
        return <TiWeatherDownpour {...iconProps}/>
      case 'drizzle':
        return <TiWeatherShower {...iconProps} />;
      case 'snow':
        return <TiWeatherSnow {...iconProps} />;
      case 'thunderstorm':
        return <TiWeatherStormy {...iconProps} />;
      case 'mist':
        return <TbMist {...iconProps} />
      case 'fog':
        return <BsCloudFog2 {...iconProps} />
      case 'haze':
        return <BsCloudFog {...iconProps} />;
      default:
        return <TiWeatherCloudy {...iconProps} />;
    }
  };

  useEffect(() => {
    const fetchWeatherByIP = async () => {
      try {
        const ipResponse = await fetch('https://ipapi.co/json/');
        const ipData = await ipResponse.json();
        
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
        );
        const weatherData = await weatherResponse.json();
        
        if (weatherData.main && weatherData.main.temp && weatherData.weather && weatherData.weather[0]) {
          setTemperature(`${Math.round(weatherData.main.temp)}°C`);
          
          const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix timestamp
          const sunrise = weatherData.sys.sunrise;
          const sunset = weatherData.sys.sunset;
          const isNight = currentTime < sunrise || currentTime > sunset;
          
          setWeatherIcon(getWeatherIcon(weatherData.weather[0].main, isNight));
        } else {
          setTemperature('N/A');
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
        setTemperature('N/A');
      }
    };

    fetchWeatherByIP();
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <header className='bg-black dark:bg-white text-white dark:text-black grid grid-cols-3 m-2 rounded-full place-content-center justify-items-center px-3 text-center'>
        <span className='justify-self-start flex items-center gap-1'>
          {weatherIcon}
          {temperature}
        </span>
        <span className='justify-center'>egwolk_OS</span>
        <span className='justify-self-end flex items-center gap-2'>
          <button onClick={toggleMute} className="cursor-pointer">
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
        </span>
    </header>
  )
}

export default Header