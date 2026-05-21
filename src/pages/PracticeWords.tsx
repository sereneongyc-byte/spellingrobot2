import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PracticeWords = () => {
    const navigate = useNavigate();
    const [currentWord, setCurrentWord] = useState(0);
    const [showWord, setShowWord] = useState(false);

    const words = ['cat', 'dog', 'bird', 'fish', 'frog']; // Mock data

    const speakWord = (word: string) => {
        const utterance = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(utterance);
    };

    const nextWord = () => {
        setShowWord(false);
        if (currentWord < words.length - 1) {
            setCurrentWord(currentWord + 1);
        } else {
            setCurrentWord(0); // Loop back to the beginning
        }
    };

    return (
        <div className="min-h-screen bg-background text-on-surface p-4 sm:p-6 flex flex-col items-center justify-center">
            <div className="max-w-md w-full bg-surface-container-high rounded-2xl p-8 tactile-card text-center">
                <h1 className="font-headline-lg mb-6">Practice Words</h1>

                <div className="h-32 flex items-center justify-center mb-8">
                    {showWord ? (
                        <h2 className="font-headline-xl text-primary">{words[currentWord]}</h2>
                    ) : (
                        <div className="w-40 h-10 bg-surface-container-lowest rounded-lg"></div>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button onClick={() => speakWord(words[currentWord])} className="bg-secondary text-on-secondary p-4 rounded-xl squishy-button flex items-center justify-center">
                        <span className="material-symbols-outlined mr-2">volume_up</span> Hear Word
                    </button>
                    <button onClick={() => setShowWord(!showWord)} className="bg-tertiary text-on-tertiary p-4 rounded-xl squishy-button flex items-center justify-center">
                        <span className="material-symbols-outlined mr-2">visibility</span> {showWord ? 'Hide' : 'Show'} Word
                    </button>
                </div>

                <button onClick={nextWord} className="w-full bg-primary text-on-primary font-headline-md py-3 rounded-full squishy-button">
                    Next Word
                </button>
            </div>

            <button onClick={() => navigate('/student-dashboard')} className="flex items-center text-on-surface-variant mt-8">
                <span className="material-symbols-outlined">arrow_back</span>
                <span className="ml-2 font-headline-sm">Back to Dashboard</span>
            </button>
        </div>
    );
};

export default PracticeWords;
