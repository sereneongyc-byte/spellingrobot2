import React from 'react';
import { useNavigate } from 'react-router-dom';

const LevelComplete = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-tertiary-container flex flex-col justify-center items-center text-on-tertiary-container p-4">
            <div className="text-center">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoFtF9XfK7A-wQ1H48OpdX7wGJMnF_yrMHdwyDezJKRWPSqlSF1-N6ZSwrRdNUXQg0UHPD68Ku4vO6DWjtzgVeMKOGOOxi7Bpx9f60lKToeB4nZ8S7nTQl33sWIH6kqsdZbnR7IREpr2IBaAeum-d2UG2b3voNkfRwQ9LZ8KNhTu3xA2RFlRuiecjDsPN7ZFP4bCqjuElB_jazCD4cWnUFcjuxmMOUURnqs_h0F0celXOYvSKkIbKZi6Yy2Pw-RDaubGYZsXlUSO4"
                    alt="Happy Robot"
                    className="w-48 h-48 mx-auto mb-6 floating-robot"
                />
                <h1 className="font-headline-lg text-4xl font-bold mb-2">Way to go!</h1>
                <p className="font-body-lg text-2xl mb-8">You're a spelling superstar!</p>
                <button
                    onClick={() => navigate('/child-home')}
                    className="bg-primary text-on-primary font-headline-md py-4 px-12 rounded-full squishy-button shadow-lg"
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default LevelComplete;
