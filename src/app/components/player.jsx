import { ArrowsCrossingIcon } from "@sidekickicons/react/24/outline";
import { BackwardIcon } from "@heroicons/react/24/solid";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { useState, useRef } from 'react'


const Player = () => {
  const [volume, setVolume] = useState(40);
  const audioRef = useRef(null);

  function handleVolume(e) { 
    
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  }

  return (
    <div className=" absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[80rem] bg-black/50 px-5 py-3 rounded-2xl">
      <div className="flex flex-row justify-between text-white">
        <div className="flex flex-row">
          <div className="">
            <img
              src="/generic_song.jpg"
              alt="song"
              className="h-20 w-20 rounded-xl m-2"
            />
          </div>
          <div className="flex flex-col">
            <p>Station Name</p>
            <p>Song Name</p>
            <p>Arist</p>
            <p>Number of Listeners</p>
          </div>
        </div>

        <div className="flex flex-row">
          <button className="text-white w-8">
            <ArrowsCrossingIcon />
          </button>
          <button>
            <BackwardIcon className="text-white w-8" />
          </button>
          <button>
            <PlayCircleIcon className="text-white w-8" />
          </button>
          <button>
            <ForwardIcon className="text-white w-8" />
          </button>
          <div className="flex items-center">
            <input type="range" onChange={((e) => handleVolume(e))} value={volume} min="0" max="100" className="range relative"/>
          </div>
           
        </div>

        <div className="flex flex-row">
          <button>Lyrics</button>
          <button>Queue</button>
          <button>Connect to a device</button>
          <button>Volume</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
