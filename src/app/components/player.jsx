const Player = () => {
  return (
    <div className=" absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[80rem] bg-black/50 px-5 py-3 rounded-2xl">
      <div className="flex flex-row justify-between text-white">
        
        <div className="flex flex-row">
          <div className="">
            <img
              src="/images/artist.jpg"
              alt="artist"
              className="h-20 w-20 rounded-full m-2"
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
          <button>Shuffle</button>
          <button>Previous</button>
          <button>Play/Pause</button>
          <button>Next</button>
          <button>Repeat</button>
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
