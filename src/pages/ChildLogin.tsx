import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChildLogin = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/child-home');
    };

    return (
        <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-sm text-center">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoFtF9XfK7A-wQ1H48OpdX7wGJMnF_yrMHdwyDezJKRWPSqlSF1-N6ZSwrRdNUXQg0UHPD68Ku4vO6DWjtzgVeMKOGOOxi7Bpx9f60lKToeB4nZ8S7nTQl33sWIH6kqsdZbnR7IREpr2IBaAeum-d2UG2b3voNkfRwQ9LZ8KNhTu3xA2RFlRuiecjDsPN7ZFP4bCqjuElB_jazCD4cWnUFcjuxmMOUURnqs_h0F0celXOYvSKkIbKZi6Yy2Pw-RDaubGYZsXlUSO4"
                    alt="Spelling Robot Mascot"
                    className="w-32 h-32 mx-auto mb-4 floating-robot"
                />
                <h1 className="font-headline-lg text-primary mb-6">Welcome, little speller!</h1>

                <div className="flex flex-col gap-4 items-center">
                    <div className="relative w-full">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">person</span>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full bg-surface-container-highest border-2 border-outline rounded-full py-4 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        className="w-full bg-primary text-on-primary font-headline-md py-4 rounded-full squishy-button flex items-center justify-center gap-2"
                    >
                        <span className="material-symbols-outlined">login</span>
                        Let's Go!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChildLogin;
