// Song.tsx
import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaEllipsisV, FaDownload, FaTimes, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const playbackSpeeds = [0.25, 0.5, 1, 1.5, 2]; // Define playback speeds

const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

const Song: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [selectedSpeed, setSelectedSpeed] = useState<number>(1); // Default speed
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(1); // Default volume (0 to 1)
    const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);
    const [showSpeedDropdown, setShowSpeedDropdown] = useState<boolean>(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const updateProgress = () => {
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
                setDuration(audioRef.current.duration);
                setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
            }
        };

        const intervalId = setInterval(updateProgress, 1000);
        return () => clearInterval(intervalId);
    }, [isPlaying]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted;
            audioRef.current.volume = volume;
        }
    }, [isMuted, volume]);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleLoadedData = () => {
        setIsLoading(false);
    };

    const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const clickX = event.clientX - (event.target as HTMLDivElement).getBoundingClientRect().left;
        const newProgress = (clickX / (event.target as HTMLDivElement).offsetWidth) * 100;
        if (audioRef.current) {
            audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
            setProgress(newProgress);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleDownload = () => {
        if (audioRef.current) {
            const link = document.createElement('a');
            link.href = audioRef.current.src;
            link.download = 'amar-sonar-bangla.mp3'; // Change filename if needed
            link.click();
        }
    };

    const handlePlaybackSpeed = (speed: number) => {
        if (audioRef.current) {
            audioRef.current.playbackRate = speed;
            setSelectedSpeed(speed);
            setShowSpeedDropdown(false); // Close dropdown after selection
        }
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseFloat(event.target.value));
    };

    const handleVolumeToggle = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className="relative flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-lg">
            <audio
                ref={audioRef}
                src="/src/assets/nationalAthem/song.mp4" // Replace with a valid audio file URL
                onLoadedData={handleLoadedData}
                preload="metadata"
            ></audio>

            {isLoading && (
                <div className="flex items-center justify-center w-full h-32">
                    <div className="loader"></div> {/* Customize loader as needed */}
                </div>
            )}

            {!isLoading && (
                <div className="w-full flex flex-col items-center">
                    <div className="flex items-center justify-between w-full mb-4">
                        <button
                            onClick={handlePlayPause}
                            className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
                        >
                            {isPlaying ? <FaPause size={28} /> : <FaPlay size={28} />}
                        </button>
                    </div>

                    <div
                        className="relative w-full h-2 bg-gray-600 rounded-full cursor-pointer"
                        onClick={handleProgressClick}
                    >
                        <div
                            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <div className="flex justify-between w-full text-sm mt-2 mb-4">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                        <button
                            onClick={handleVolumeToggle}
                            className="flex items-center justify-center w-8 h-8 bg-gray-700 text-gray-400 rounded-full hover:text-white transition-colors"
                        >
                            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                        </button>

                        {showVolumeSlider && (
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-24 h-1 bg-gray-600 rounded-full cursor-pointer"
                            />
                        )}
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="flex items-center justify-center w-8 h-8 bg-gray-700 text-gray-400 rounded-full hover:text-white transition-colors"
                    >
                        <FaEllipsisV size={20} />
                    </button>

                    {menuOpen && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 border border-gray-600 rounded-lg shadow-lg">
                            <ul className="text-white">
                                <li
                                    onClick={handleDownload}
                                    className="flex items-center p-3 hover:bg-gray-700 cursor-pointer"
                                >
                                    <FaDownload className="mr-2" />
                                    Download
                                </li>
                                <li
                                    onClick={() => setShowSpeedDropdown(!showSpeedDropdown)}
                                    className="flex items-center p-3 hover:bg-gray-700 cursor-pointer"
                                >
                                    Playback Speed
                                    <span className="ml-auto">{selectedSpeed}x</span>
                                </li>
                            </ul>

                            {showSpeedDropdown && (
                                <div className="absolute top-12 right-0 mt-2 w-32 bg-gray-800 border border-gray-600 rounded-lg shadow-lg">
                                    <ul className="text-white">
                                        {playbackSpeeds.map((speed) => (
                                            <li
                                                key={speed}
                                                onClick={() => handlePlaybackSpeed(speed)}
                                                className={`p-2 hover:bg-gray-700 cursor-pointer ${selectedSpeed === speed ? 'bg-gray-600' : ''}`}
                                            >
                                                {speed}x
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => setShowSpeedDropdown(false)}
                                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                                    >
                                        <FaTimes size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Song;
