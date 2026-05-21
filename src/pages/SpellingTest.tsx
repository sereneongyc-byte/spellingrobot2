import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SpellingTest = () => {
    const navigate = useNavigate();
    const [currentWord, setCurrentWord] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const words = ['cat', 'dog', 'bird', 'fish', 'frog']; // Mock data

    const speakWord = (word: string) => {
        const utterance = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(utterance);
    };

    const checkAnswer = () => {
        if (userInput.toLowerCase() === words[currentWord]) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const nextWord = () => {
        setIsCorrect(null);
        setUserInput('');
        if (currentWord < words.length - 1) {
            setCurrentWord(currentWord + 1);
        } else {
            navigate('/test-complete');
        }
    };

    return (
        <div className="min-h-screen bg-background text-on-surface p-4 sm:p-6 flex flex-col items-center justify-center">
            <div className="max-w-md w-full bg-surface-container-high rounded-2xl p-8 tactile-card">
                <h1 className="font-headline-lg text-center mb-6">Spelling Test</h1>
                <div className="flex items-center justify-center mb-8">
                    <button onClick={() => speakWord(words[currentWord])} className="squishy-button">
                        <span className="material-symbols-outlined text-7xl text-primary">volume_up</span>
                    </button>
                </div>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="w-full text-center font-headline-md bg-surface-container-lowest border-2 border-outline rounded-xl p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Type the word you hear"
                />
                {isCorrect === null && (
                    <button onClick={checkAnswer} className="w-full bg-primary text-on-primary font-headline-md py-3 rounded-full squishy-button">
                        Check Answer
                    </button>
                )}
                {isCorrect !== null && (
                    <div className="text-center">
                        <p className={`font-headline-md mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {isCorrect ? 'Correct!' : `Incorrect. The correct spelling is ${words[currentWord]}.`}
                        </p>
                        <button onClick={nextWord} className="w-full bg-secondary text-on-secondary font-headline-md py-3 rounded-full squishy-button">
                            Next Word
                        </button>
                    </div>
                )}
            </div>
            <button onClick={() => navigate('/student-dashboard')} className="flex items-center text-on-surface-variant mt-8">
                <span className="material-symbols-outlined">exit_to_app</span>
                <span className="ml-2 font-headline-sm">Exit Test</span>
            </button>
        </div>
    );
};

export default SpellingTest;
