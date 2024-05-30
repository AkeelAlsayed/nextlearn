// import React, { useState, useEffect } from 'react';

// const CustomAudioPlayer = ({ src }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const audioRef = React.createRef();

//   useEffect(() => {
//     const audio = audioRef.current;

//     const handleTimeUpdate = () => {
//       setCurrentTime(audio.currentTime);
//     };

//     const handleLoadedMetadata = () => {
//       setDuration(audio.duration);
//     };

//     const handleEnded = () => {
//       setIsPlaying(false);
//       setCurrentTime(0);
//     };

//     audio.addEventListener('timeupdate', handleTimeUpdate);
//     audio.addEventListener('loadedmetadata', handleLoadedMetadata);
//     audio.addEventListener('ended', handleEnded);

//     return () => {
//       audio.removeEventListener('timeupdate', handleTimeUpdate);
//       audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
//       audio.removeEventListener('ended', handleEnded);
//     };
//   }, []);

//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };
// console.log(src)
//   const handleTimeSeek = (e) => {
//     const { duration } = audioRef.current;
//     const seekTime = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * duration;
//     audioRef.current.currentTime = seekTime;
//     setCurrentTime(seekTime);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//   };

//   return (
//     <div className="audio-player">
//       <audio ref={audioRef} src={src}></audio>
//       <div className="controls">
//         <div className="playback">
//           <button onClick={togglePlay}>
//             {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
//           </button>
//         </div>
//         <div className="timeline" onClick={handleTimeSeek}>
//           <div className="progress" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
//         </div>
//         <div className="time">
//           <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomAudioPlayer;
// CustomAudioPlayer.js
// "use client"
// import React, { useEffect, useRef } from 'react';

// const CustomAudioPlayer = ({ url }) => {
//   const audioRef = useRef();

//   useEffect(() => {
//     if (audioRef.current && url) {
//       audioRef.current.src = url;
//       audioRef.current.play();
//     }
//   }, [url]);

//   const playAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   const pauseAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   };

//   const stopAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };

//   return (
//     <div className="custom-audio-player">
//       <audio ref={audioRef} />
//       <div className="controls">
//         <button onClick={playAudio}>Play</button>
//         <button onClick={pauseAudio}>Pause</button>
//         <button onClick={stopAudio}>Stop</button>
//       </div>
//     </div>
//   );
// };

// export default CustomAudioPlayer;
// "use client";
// import React, { useEffect, useRef, useState } from 'react';

// const CustomAudioPlayer = ({ url }) => {
//   const audioRef = useRef();
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);

//   useEffect(() => {
//     if (audioRef.current && url) {
//       audioRef.current.src = url;
//       audioRef.current.play();
//     }
//   }, [url]);

//   const playAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   const pauseAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   };

//   const stopAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleLoadedMetadata = () => {
//     setDuration(audioRef.current.duration);
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     setVolume(newVolume);
//     audioRef.current.volume = newVolume;
//   };

//   const handleProgressChange = (e) => {
//     const newTime = e.target.value;
//     audioRef.current.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div className="custom-audio-player">
//       <audio
//         ref={audioRef}
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//       />
//       <div className="controls">
//         <button onClick={playAudio}>Play</button>
//         <button onClick={pauseAudio}>Pause</button>
//         <button onClick={stopAudio}>Stop</button>
//       </div>
//       <div className="progress-bar">
//         <input
//           type="range"
//           min="0"
//           max={duration}
//           value={currentTime}
//           onChange={handleProgressChange}
//         />
//         <div>
//           {formatTime(currentTime)} / {formatTime(duration)}
//         </div>
//       </div>
//       <div className="volume-control">
//         <label htmlFor="volume">Volume</label>
//         <input
//           type="range"
//           id="volume"
//           min="0"
//           max="1"
//           step="0.01"
//           value={volume}
//           onChange={handleVolumeChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default CustomAudioPlayer;
// "use client";
// import React, { useEffect, useRef, useState } from 'react';

// const CustomAudioPlayer = ({ url }) => {
//   const audioRef = useRef();
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);

//   useEffect(() => {
//     if (audioRef.current && url) {
//       audioRef.current.src = url;
//       audioRef.current.play();
//     }
//   }, [url]);

//   const playAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   const pauseAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   };

//   const stopAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleLoadedMetadata = () => {
//     setDuration(audioRef.current.duration);
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     setVolume(newVolume);
//     audioRef.current.volume = newVolume;
//   };

//   const handleProgressChange = (e) => {
//     const newTime = e.target.value;
//     audioRef.current.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
//       <audio
//         ref={audioRef}
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//       />
//       <div className="controls">
//         <button onClick={playAudio}>Play</button>
//         <button onClick={pauseAudio}>Pause</button>
//         <button onClick={stopAudio}>Stop</button>
//       </div>
//       <div className="progress-bar">
//         <input
//           type="range"
//           min="0"
//           max={duration}
//           value={currentTime}
//           onChange={handleProgressChange}
//         />
//         <div>
//           {formatTime(currentTime)} / {formatTime(duration)}
//         </div>
//       </div>
//       <div className="volume-control">
//         <label htmlFor="volume">Volume</label>
//         <input
//           type="range"
//           id="volume"
//           min="0"
//           max="1"
//           step="0.01"
//           value={volume}
//           onChange={handleVolumeChange}
//         />
//       </div>
//     </div>
//   );
// };

// // export default CustomAudioPlayer;
// "use client";
// import React, { useEffect, useRef, useState } from 'react';

// const CustomAudioPlayer = ({ url, onEnded, autoPlayNext, setAutoPlayNext }) => {
//   const audioRef = useRef();
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);

//   useEffect(() => {
//     if (audioRef.current && url) {
//       audioRef.current.src = url;
//       audioRef.current.play();
//     }
//   }, [url]);

//   const playAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   const pauseAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   };

//   const stopAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleLoadedMetadata = () => {
//     setDuration(audioRef.current.duration);
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     setVolume(newVolume);
//     audioRef.current.volume = newVolume;
//   };

//   const handleProgressChange = (e) => {
//     const newTime = e.target.value;
//     audioRef.current.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   const handleEnded = () => {
//     if (autoPlayNext) {
//       onEnded();
//     }
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg w-full">
//       <audio
//         ref={audioRef}
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//         onEnded={handleEnded}
//       />
//       <div className="controls">
//         <button onClick={playAudio}>Play</button>
//         <button onClick={pauseAudio}>Pause</button>
//         <button onClick={stopAudio}>Stop</button>
//       </div>
//       <div className="progress-bar">
//         <input
//           type="range"
//           min="0"
//           max={duration}
//           value={currentTime}
//           onChange={handleProgressChange}
//           className="w-full"
//         />
//         <div>
//           {formatTime(currentTime)} / {formatTime(duration)}
//         </div>
//       </div>
//       <div className="volume-control">
//         <label htmlFor="volume">Volume</label>
//         <input
//           type="range"
//           id="volume"
//           min="0"
//           max="1"
//           step="0.01"
//           value={volume}
//           onChange={handleVolumeChange}
//         />
//       </div>
//       <div className="autoplay-control">
//         <label htmlFor="autoplay">Auto Play Next</label>
//         <input
//           type="checkbox"
//           id="autoplay"
//           checked={autoPlayNext}
//           onChange={(e) => setAutoPlayNext(e.target.checked)}
//         />
//       </div>
//     </div>
//   );
// };

// export default CustomAudioPlayer;
// import React, { useEffect, useRef, useState } from 'react';

// const CustomAudioPlayer = ({ url, onEnded }) => {
//   const audioRef = useRef();
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [autoPlayNext, setAutoPlayNext] = useState(false); // State to track auto play next

//   useEffect(() => {
//     if (audioRef.current && url) {
//       audioRef.current.src = url;
//       audioRef.current.play();
//     }
//   }, [url]);

//   const playAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   const pauseAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   };

//   const stopAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleLoadedMetadata = () => {
//     setDuration(audioRef.current.duration);
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     setVolume(newVolume);
//     audioRef.current.volume = newVolume;
//   };

//   const handleProgressChange = (e) => {
//     const newTime = e.target.value;
//     audioRef.current.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   const handleEnded = () => {
//     if (autoPlayNext) {
//       onEnded();
//     }
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg w-full">
//       <audio
//         ref={audioRef}
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//         onEnded={handleEnded}
//       />
//       <div className="controls">
//         <button onClick={playAudio}>Play</button>
//         <button onClick={pauseAudio}>Pause</button>
//         <button onClick={stopAudio}>Stop</button>
//       </div>
//       <div className="progress-bar">
//         <input
//           type="range"
//           min="0"
//           max={duration}
//           value={currentTime}
//           onChange={handleProgressChange}
//           className="w-full"
//         />
//         <div>
//           {formatTime(currentTime)} / {formatTime(duration)}
//         </div>
//       </div>
//       <div className="volume-control">
//         <label htmlFor="volume">Volume</label>
//         <input
//           type="range"
//           id="volume"
//           min="0"
//           max="1"
//           step="0.01"
//           value={volume}
//           onChange={handleVolumeChange}
//         />
//       </div>
//       <div className="autoplay-control">
//         <label htmlFor="autoplay">Auto Play Next</label>
//         <input
//           type="checkbox"
//           id="autoplay"
//           checked={autoPlayNext}
//           onChange={(e) => setAutoPlayNext(e.target.checked)} // Update autoPlayNext state
//         />
//       </div>
//     </div>
//   );
// };

// export default CustomAudioPlayer;
"use client"
import React, { useEffect, useRef, useState } from 'react';

const CustomAudioPlayer = ({ url, onEnded }) => {
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [autoPlayNext, setAutoPlayNext] = useState(false); // State to track auto play next

  useEffect(() => {
    if (audioRef.current && url) {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  }, [url]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleEnded = () => {
    if (autoPlayNext) {
      onEnded(); // Call the function to play the next audio
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg w-full">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      <div className="controls">
        <button onClick={playAudio}>Play</button>
        <button onClick={pauseAudio}>Pause</button>
        <button onClick={stopAudio}>Stop</button>
      </div>
      <div className="progress-bar">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full"
        />
        <div>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      <div className="volume-control">
        <label htmlFor="volume">Volume</label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <div className="autoplay-control">
        <label htmlFor="autoplay">Auto Play Next</label>
        <input
          type="checkbox"
          id="autoplay"
          checked={autoPlayNext}
          onChange={(e) => setAutoPlayNext(e.target.checked)} // Update autoPlayNext state
        />
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
