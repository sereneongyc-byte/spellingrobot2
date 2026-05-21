import React from 'react';
import { useNavigate } from 'react-router-dom';

const LevelComplete = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-tertiary-container text-on-tertiary-container flex flex-col items-center justify-center text-center p-4">
            <img className="w-56 h-56 mx-auto mb-8 animate-bounce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoFtF9XfK7A-wQ1H48OpdX7wGJMnF_yrMHdwyDezJKRWPSqlSF1-N6ZSwrRdNUXQg0UHPD68Ku4vO6DWjtzgVeMKOGOOxi7Bpx9f60lKToeB4nZ8S7nTQl33sWIH6kqsdZbnR7IREpr2IBaAeum-d2UG2b3voNkfRwQ9LZ8KNhTu3xA2RFlRuiecjDsPN7ZFP4bCqjuElB_jazCD4cWnUFcjuxmMOUURnqs_h0F0celXOYvSKkIbKZi6Yy2Pw-RDaubGYZsXlUSO4" alt="Happy Robot Mascot" />
            <h1 className="font-headline-lg text-4xl font-bold mb-4">Great Job!</h1>
            <p className="font-body-lg text-xl mb-8">You scored 9 out of 10.</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('/child-home')} className="squishy-button bg-primary text-on-primary font-headline-md py-3 px-8 rounded-lg">
                    Go to Dashboard
                </button>
                <button onClick={() => navigate('/spell-test')} className="squishy-button bg-secondary-container text-on-secondary-container font-headline-md py-3 px-8 rounded-lg">
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default LevelComplete;
