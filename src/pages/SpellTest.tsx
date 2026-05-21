import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SpellTest = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlayAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const handleNextWord = () => {
        setInputValue('');
        // Logic to go to the next word
    };

    const handleFinishTest = () => {
        navigate('/level-complete');
    };

    return (
        <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md text-center">
                <p className="font-label-caps text-tertiary mb-2">Word 1 of 10</p>
                <div className="flex items-center justify-center gap-4 mb-6">
                    <button onClick={handlePlayAudio} className="squishy-button bg-primary-fixed-dim p-4 rounded-full">
                        <span className="material-symbols-outlined text-on-primary-fixed-variant">volume_up</span>
                    </button>
                    <audio ref={audioRef} src="/audio/dolphin.mp3" />
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full text-center font-timer-display bg-surface-container-high rounded-lg p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Type the word"
                />
                <div className="flex gap-4">
                    <button onClick={handleNextWord} className="squishy-button flex-1 bg-secondary-container text-on-secondary-container font-headline-md py-4 rounded-lg">Next Word</button>
                    <button onClick={handleFinishTest} className="squishy-button flex-1 bg-tertiary-container text-on-tertiary-container font-headline-md py-4 rounded-lg">Finish</button>
                </div>
            </div>
        </div>
    );
};

export default SpellTest;
