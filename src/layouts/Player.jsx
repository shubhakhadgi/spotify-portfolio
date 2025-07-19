import React, { useState, useEffect, useRef } from "react";
import data from "../data.json";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import {
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Heart,
  Mic2,
  ListMusic,
  Laptop2,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react";

const IconButton = ({ label, children, onClick }) => (
  <button
    onClick={onClick}
    className="relative flex items-center justify-center cursor-pointer"
    aria-label={label}
    type="button"
  >
    {children}
  </button>
);

const Player = ({ fullscreen, setFullscreen }) => {
  const songs = data.songs || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(true);
  const [repeat, setRepeat] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [likedMap, setLikedMap] = useState({});
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(60);
  const [micOn, setMicOn] = useState(false);
  const [lyricsOn, setLyricsOn] = useState(false);
  const [deviceConnected, setDeviceConnected] = useState(false);
  const [volHover, setVolHover] = useState(false);

  const audioRef = useRef(null);
  const currentSong = songs[currentIndex] || {};

  // Play/pause effect
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  // Other audio functions
  const handleTimeUpdate = () => {
    if (!isDragging && audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  const updateProgress = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (!audioRef.current) return;
    const newProgress = Math.min(
      audioRef.current.duration,
      Math.max(0, (clickX / rect.width) * audioRef.current.duration)
    );
    setProgress(newProgress);
    audioRef.current.currentTime = newProgress;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgress(e);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateProgress(e);
  };
  const handleMouseUp = () => setIsDragging(false);

  const formatTime = (secs) => {
    if (!secs) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleNext = () => {
    if (shuffle) {
      if (songs.length <= 1) return;
      let next;
      do {
        next = Math.floor(Math.random() * songs.length);
      } while (next === currentIndex);
      setCurrentIndex(next);
    } else {
      if (currentIndex === songs.length - 1) {
        if (repeat) setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
    setProgress(0);
  };

  const handlePrev = () => {
    if (shuffle) {
      if (songs.length <= 1) return;
      let prev;
      do {
        prev = Math.floor(Math.random() * songs.length);
      } while (prev === currentIndex);
      setCurrentIndex(prev);
    } else {
      if (currentIndex === 0) {
        if (repeat) setCurrentIndex(songs.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
    setProgress(0);
  };

  const handleEnded = () => {
    if (repeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleNext();
    }
  };

  const handleVolumeClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newVolume = Math.min(100, Math.max(0, (clickX / rect.width) * 100));
    setVolume(newVolume);
    if (muted) setMuted(false);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
      if (muted && newVolume > 0) {
        setMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
  }, [volume]);

  const toggleLike = () => {
    setLikedMap((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  return (
        <section
      className={`fixed bottom-0 left-0 w-full bg-black text-white z-50 px-3 sm:px-6
        transition-all duration-300 ease-in-out
        ${fullscreen ? "h-14 opacity-90 overflow-hidden py-1" : "py-2 sm:py-3 opacity-100 h-auto"}`}
    >
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Full UI (hidden when fullscreen) */}
      <div
        className={`${
          fullscreen ? "hidden" : "flex flex-col sm:flex-row justify-between items-center gap-y-4"
        }`}
      >
        {/* Left: Song Info */}
        <div className="flex items-center md:justify-start justify-between gap-12 w-full sm:w-1/3 min-w-0">
          <div className="flex gap-4 ">
            <img
              src={currentSong.albumArt}
              alt="Album Art"
              className="w-12 h-12 rounded object-cover"
            />
            <div className="flex flex-col truncate min-w-0">
              <span className="text-sm font-semibold truncate">{currentSong.title}</span>
              <span className="text-xs text-neutral-400 truncate">{currentSong.artist}</span>
            </div>
          </div>
          <IconButton
            label={likedMap[currentIndex] ? "Unlike" : "Like"}
            onClick={toggleLike}
          >
            <Heart
              className={`w-5 h-5 ${
                likedMap[currentIndex]
                  ? "text-[#1DB954]"
                  : "text-white opacity-80 hover:opacity-100"
              }`}
              fill={likedMap[currentIndex] ? "#1DB954" : "none"}
            />
          </IconButton>
        </div>

        {/* Center: Controls */}
        <div className="flex flex-col items-center gap-2 w-full sm:w-1/3 max-w-[520px]">
          <div className="flex items-center gap-x-5">
            <IconButton label="Shuffle" onClick={() => setShuffle(!shuffle)}>
              <Shuffle
                className={`w-5 h-5 ${
                  shuffle ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"
                }`}
              />
            </IconButton>
            <IconButton label="Previous" onClick={handlePrev}>
              <SkipBack className="w-5 h-5 opacity-80 hover:opacity-100" />
            </IconButton>
            <IconButton
              label={isPlaying ? "Pause" : "Play"}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <div className="bg-white text-black rounded-full p-2 w-10 h-10 flex items-center justify-center">
                {isPlaying ? (
                  <PauseIcon className="w-5 h-5" />
                ) : (
                  <PlayIcon className="w-5 h-5" />
                )}
              </div>
            </IconButton>
            <IconButton label="Next" onClick={handleNext}>
              <SkipForward className="w-5 h-5 opacity-80 hover:opacity-100" />
            </IconButton>
            <IconButton label="Repeat" onClick={() => setRepeat(!repeat)}>
              <Repeat
                className={`w-5 h-5 ${
                  repeat ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"
                }`}
              />
            </IconButton>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 w-full">
            <span className="w-8 text-right">{formatTime(progress)}</span>
            <div
              className="flex-1 bg-neutral-600 rounded-full h-[4px] relative cursor-pointer"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                className="bg-white h-full absolute top-0 left-0"
                style={{
                  width: audioRef.current
                    ? `${(progress / audioRef.current.duration) * 100}%`
                    : "0%",
                }}
              />
            </div>
            <span className="w-8">{formatTime(audioRef.current?.duration)}</span>
          </div>
        </div>

        {/* Right: Extra Controls */}
        <div className="flex items-center gap-x-8 md:gap-x-4 justify-center md:justify-end w-full sm:w-1/3 overflow-x-auto scrollbar-hide">
          <IconButton label="Mic" onClick={() => setMicOn(!micOn)}>
            <Mic2
              className={`w-5 h-5 ${micOn ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"}`}
            />
          </IconButton>
          <IconButton label="Device" onClick={() => setDeviceConnected(!deviceConnected)}>
            <Laptop2
              className={`w-5 h-5 ${
                deviceConnected ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"
              }`}
            />
          </IconButton>
          <IconButton label="Lyrics" onClick={() => setLyricsOn(!lyricsOn)}>
            <ListMusic
              className={`w-5 h-5 ${lyricsOn ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"}`}
            />
          </IconButton>
          <IconButton
            label={muted || volume === 0 ? "Unmute" : "Mute"}
            onClick={() => setMuted(!muted)}
          >
            {muted || volume === 0 ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </IconButton>
          <div
            className="hidden sm:block w-[80px] h-[4px] bg-neutral-600 rounded-full relative cursor-pointer"
            onClick={handleVolumeClick}
            onMouseEnter={() => setVolHover(true)}
            onMouseLeave={() => setVolHover(false)}
          >
            <div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                width: muted ? "0%" : `${volume}%`,
                backgroundColor: volHover ? "#1DB954" : "white",
              }}
            />
            {volHover && (
              <div
                className="absolute top-1/2 bg-white rounded-full w-4 h-4 -translate-y-1/2"
                style={{
                  left: muted ? "0%" : `${volume}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </div>
          <IconButton
            label={fullscreen ? "Exit Fullscreen" : "Fullscreen"}
            onClick={() => setFullscreen(!fullscreen)}
          >
            <Maximize2
              className={`w-5 h-5 ${fullscreen ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"}`}
            />
          </IconButton>
        </div>
      </div>

      {/* Minimal bar when fullscreen */}
      {fullscreen && (
        <div className="flex items-center justify-between h-14 px-3 sm:px-6 gap-4 pb-2">
          {/* Album art */}
          <img
            src={currentSong.albumArt}
            alt="Album Art"
            className="w-10 h-10 rounded object-cover flex-shrink-0"
          />

          {/* Song title & artist */}
          <div className="flex flex-col truncate flex-grow min-w-0">
            <span className="text-sm font-semibold truncate">{currentSong.title}</span>
            <span className="text-xs text-neutral-400 truncate">{currentSong.artist}</span>
          </div>

          {/* Playback controls: prev, play/pause, next */}
          <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
            <IconButton label="Previous" onClick={handlePrev}>
              <SkipBack className="w-5 h-5 opacity-80 hover:opacity-100" />
            </IconButton>
            <IconButton
              label={isPlaying ? "Pause" : "Play"}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <div className="bg-white text-black rounded-full p-1 w-8 h-8 flex items-center justify-center">
                {isPlaying ? (
                  <PauseIcon className="w-4 h-4" />
                ) : (
                  <PlayIcon className="w-4 h-4" />
                )}
              </div>
            </IconButton>
            <IconButton label="Next" onClick={handleNext}>
              <SkipForward className="w-5 h-5 opacity-80 hover:opacity-100" />
            </IconButton>
          </div>

          {/* Progress bar */}
          <div
            className="hidden sm:block flex-shrink-0 w-40 h-1 bg-neutral-600 rounded-full cursor-pointer mx-4"
            onClick={updateProgress}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="bg-white h-full rounded-full"
              style={{
                width: audioRef.current
                  ? `${(progress / audioRef.current.duration) * 100}%`
                  : "0%",
              }}
            />
          </div>

          {/* Like button */}
          <IconButton
            label={likedMap[currentIndex] ? "Unlike" : "Like"}
            onClick={toggleLike}
          >
            <Heart
              className={`w-5 h-5 ${
                likedMap[currentIndex]
                  ? "text-[#1DB954]"
                  : "text-white opacity-80 hover:opacity-100"
              }`}
              fill={likedMap[currentIndex] ? "#1DB954" : "none"}
            />
          </IconButton>

          {/* Fullscreen toggle */}
 <IconButton
        label={fullscreen ? "Exit Fullscreen" : "Fullscreen"}
        onClick={() => setFullscreen(!fullscreen)}
      >
        <Maximize2
          className={`w-5 h-5 ${fullscreen ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"}`}
        />
      </IconButton>
        </div>
      )}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Player;
