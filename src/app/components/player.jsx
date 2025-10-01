const Player = () => {
    return ( 
        <>
            <div className="max-w-7xl">
                <div className="flex flex-row justify-between">
                    //artist information
                    <div className="flex flex-row">
                        <div className="">
                            <img src="/images/artist.jpg" alt="artist" className="h-20 w-20 rounded-full m-2"/>
                        </div>
                        <div className="flex flex-col">
                            <p>Station Name</p>
                            <p>Song Name</p>
                            <p>Arist</p>
                            <p>Number of Listeners</p>
                        </div>
                    </div>

                    //play buttons. Shuffle, volume, etc
                    <div className="flex flex-row">
                        <button>Shuffle</button>
                        <button>Previous</button>
                        <button>Play/Pause</button>
                        <button>Next</button>
                        <button>Repeat</button>
                    </div>

                    //other buttons
                    <div className="flex flex-row">
                        <button>Lyrics</button>
                        <button>Queue</button>
                        <button>Connect to a device</button>
                        <button>Volume</button>
                </div>
            </div>
        </>
     );
}
 
export default Player;