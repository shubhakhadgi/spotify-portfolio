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
  CheckCircle2,
} from "lucide-react";

const IconButton = ({ label, children, onClick, active = false }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex items-center justify-center cursor-pointer"
      aria-label={label}
      type="button"
    >
      {children}

      {/* Tooltip */}
      {hover && (
        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black bg-opacity-80 text-white whitespace-nowrap select-none z-50">
          {label}
        </span>
      )}
    </button>
  );
};

const Player = () => {
  // Songs from JSON
  const songs = data.songs || [];

  // Playback states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(true);
  const [repeat, setRepeat] = useState(false);
  const [progress, setProgress] = useState(0); // seconds
  const [isDragging, setIsDragging] = useState(false);

  // Your existing UI states
  const [liked, setLiked] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(60);
  const [micOn, setMicOn] = useState(false);
  const [lyricsOn, setLyricsOn] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [deviceConnected, setDeviceConnected] = useState(false);
  const [volHover, setVolHover] = useState(false);

  const audioRef = useRef(null);
  const currentSong = songs[currentIndex] || {};

  // Sync play/pause with audio element
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  // Update progress from audio time update
  const handleTimeUpdate = () => {
    if (!isDragging && audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  // Handle progress bar dragging and clicking
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
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Format seconds to mm:ss
  const formatTime = (secs) => {
    if (!secs) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Skip to next track (shuffle/repeat logic)
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
        if (repeat) {
          setCurrentIndex(0);
        }
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
    setProgress(0);
  };

  // Skip to previous track
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
        if (repeat) {
          setCurrentIndex(songs.length - 1);
        }
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
    setProgress(0);
  };

  // When track ends
  const handleEnded = () => {
    if (repeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleNext();
    }
  };

  // Volume bar click handler
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

  // Sync muted & volume with audio element
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
  }, [volume]);

  return (
    <section className="fixed bottom-0 left-0 w-full bg-black text-white h-[90px] flex items-center justify-between px-4 text-sm select-none">
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Left: Song info + like */}
      <div className="flex items-center w-[30%] min-w-[240px] gap-3">
        <img
          src={currentSong.albumArt}
          alt={`${currentSong.title} album art`}
          className="w-14 h-14 rounded"
        />
        <div className="flex flex-col justify-center truncate">
          <span className="text-sm font-semibold truncate">{currentSong.title}</span>
          <span className="text-xs text-neutral-400 truncate">{currentSong.artist}</span>
        </div>
        <CheckCircle2 className="text-[#1DB954] w-4 h-4 ml-2" />

        {/* Like Button */}
        <IconButton
          label={liked ? "Unlike" : "Like"}
          onClick={() => setLiked(!liked)}
          active={liked}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              liked ? "text-[#1DB954]" : "text-white opacity-80 hover:opacity-100"
            }`}
            fill={liked ? "#1DB954" : "none"}
          />
        </IconButton>
      </div>

      {/* Center: Controls + Progress */}
      <div className="flex flex-col items-center w-[40%] max-w-[520px]">
        <div className="flex items-center gap-5 mb-2">
          {/* Shuffle */}
          <IconButton
            label="Shuffle"
            onClick={() => setShuffle(!shuffle)}
            active={shuffle}
          >
            <Shuffle
              className={`w-5 h-5 transition-colors duration-150 ${
                shuffle ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"
              }`}
            />
            {shuffle && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#1DB954] rounded-full" />
            )}
          </IconButton>

          {/* Previous */}
          <IconButton label="Previous" onClick={handlePrev}>
            <SkipBack className="w-5 h-5 opacity-80 hover:opacity-100" />
          </IconButton>

          {/* Play/Pause */}
          <IconButton
            label={isPlaying ? "Pause" : "Play"}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <button
              className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              {isPlaying ? (
                <PauseIcon className="text-black w-5 h-5" />
              ) : (
                <PlayIcon className="text-black w-5 h-5" />
              )}
            </button>
          </IconButton>

          {/* Next */}
          <IconButton label="Next" onClick={handleNext}>
            <SkipForward className="w-5 h-5 opacity-80 hover:opacity-100" />
          </IconButton>

          {/* Repeat */}
          <IconButton
            label="Repeat"
            onClick={() => setRepeat(!repeat)}
            active={repeat}
          >
            <Repeat
              className={`w-5 h-5 transition-colors duration-150 ${
                repeat ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"
              }`}
            />
            {repeat && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#1DB954] rounded-full" />
            )}
          </IconButton>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center w-full gap-2 text-xs text-neutral-400">
          <span>{formatTime(progress)}</span>
          <div
            className="flex-1 bg-neutral-600 rounded-full h-[4px] overflow-hidden relative cursor-pointer"
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
          <span>{formatTime(audioRef.current?.duration)}</span>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center w-[30%] justify-end gap-4 min-w-[240px] text-white">
        <IconButton label="Mic" onClick={() => setMicOn(!micOn)} active={micOn}>
          <Mic2 className={`w-5 h-5 ${micOn ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"}`} />
        </IconButton>

        <IconButton
          label="Connect to a device"
          onClick={() => setDeviceConnected(!deviceConnected)}
          active={deviceConnected}
        >
          <Laptop2
            className={`w-5 h-5 transition-opacity ${
              deviceConnected
                ? "text-[#1DB954] opacity-100"
                : "text-white opacity-80 hover:opacity-100"
            }`}
          />
        </IconButton>

        <IconButton
          label="Lyrics"
          onClick={() => setLyricsOn(!lyricsOn)}
          active={lyricsOn}
        >
          <ListMusic className={`w-5 h-5 ${lyricsOn ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"}`} />
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

        {/* Volume Bar */}
        <div
          className="w-[80px] h-[4px] bg-neutral-600 rounded-full overflow-visible cursor-pointer relative"
          onClick={handleVolumeClick}
          onMouseEnter={() => setVolHover(true)}
          onMouseLeave={() => setVolHover(false)}
        >
          {/* Volume fill track */}
          <div
            className={`h-full absolute top-0 left-0 rounded-full transition-colors duration-200`}
            style={{
              width: muted ? "0%" : `${volume}%`,
              backgroundColor: volHover ? "#1DB954" : "white",
            }}
          />

          {/* Volume knob - only show on hover */}
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
          label="Fullscreen"
          onClick={() => setFullscreen(!fullscreen)}
          active={fullscreen}
        >
          <Maximize2 className={`w-5 h-5 ${fullscreen ? "text-[#1DB954]" : "opacity-80 hover:opacity-100"}`} />
        </IconButton>
      </div>
    </section>
  );
};

export default Player;
