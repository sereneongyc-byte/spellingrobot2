import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChildHome = () => {
    const navigate = useNavigate();

    const startTest = () => {
        navigate('/spell-test');
    };

    return (
        <div className="min-h-screen bg-background p-4 sm:p-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-surface rounded-3xl shadow-lg p-6 sm:p-8 tactile-card">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="text-center sm:text-left">
                            <h1 className="font-headline-lg-mobile sm:font-headline-lg text-on-surface">Ready for a Challenge?</h1>
                            <p className="font-body-lg text-on-surface-variant mt-2">Your new spelling test is here!</p>
                        </div>
                        <button
                            onClick={startTest}
                            className="w-full sm:w-auto bg-primary text-on-primary font-headline-md py-4 px-8 rounded-full squishy-button flex items-center justify-center gap-2 shadow-lg transform hover:scale-105 transition-transform"
                        >
                            <span className="material-symbols-outlined">play_arrow</span>
                            Start Test
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="font-headline-md text-on-surface mb-4">Your Progress</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-surface rounded-2xl p-6 tactile-card">
                            <h3 className="font-headline-md text-tertiary">Ocean Animals</h3>
                            <p className="font-body-md text-on-surface-variant">Last score: 9/10</p>
                        </div>
                        <div className="bg-surface rounded-2xl p-6 tactile-card">
                            <h3 className="font-headline-md text-secondary">Common Words</h3>
                            <p className="font-body-md text-on-surface-variant">Last score: 7/10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildHome;
