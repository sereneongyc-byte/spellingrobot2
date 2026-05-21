import { useNavigate } from 'react-router-dom';

const TestComplete = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background text-on-surface p-4 sm:p-6 flex flex-col items-center justify-center">
            <div className="max-w-md w-full bg-surface-container-high rounded-2xl p-8 tactile-card text-center">
                <img src="/trophy.png" alt="Trophy" className="w-40 h-40 mx-auto mb-6" />
                <h1 className="font-headline-lg mb-4">Great Job!</h1>
                <p className="font-body-lg text-on-surface-variant mb-6">You completed the spelling test.</p>
                <div className="bg-primary-container rounded-xl p-4 mb-8">
                    <p className="font-headline-md text-on-primary-container">Your Score</p>
                    <p className="font-display-lg text-primary">9/10</p>
                </div>
                <button
                    onClick={() => navigate('/student-dashboard')}
                    className="w-full bg-primary text-on-primary font-headline-md py-3 rounded-full squishy-button"
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default TestComplete;
