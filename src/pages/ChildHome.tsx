import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChildHome = () => {
    const navigate = useNavigate();

    const handleStartTest = () => {
        navigate('/spell-test');
    };

    return (
        <div className="min-h-screen bg-surface-container-lowest p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="font-headline-lg-mobile sm:font-headline-lg text-primary">Welcome, Leo!</h1>
                    <div className="w-16 h-16 rounded-full bg-primary-fixed-dim flex items-center justify-center">
                        <img className="w-12 h-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoFtF9XfK7A-wQ1H48OpdX7wGJMnF_yrMHdwyDezJKRWPSqlSF1-N6ZSwrRdNUXQg0UHPD68Ku4vO6DWjtzgVeMKOGOOxi7Bpx9f60lKToeB4nZ8S7nTQl33sWIH6kqsdZbnR7IREpr2IBaAeum-d2UG2b3voNkfRwQ9LZ8KNhTu3xA2RFlRuiecjDsPN7ZFP4bCqjuElB_jazCD4cWnUFcjuxmMOUURnqs_h0F0celXOYvSKkIbKZi6Yy2Pw-RDaubGYZsXlUSO4" alt="Robot Icon" />
                    </div>
                </header>

                <main>
                    <h2 className="font-headline-md text-on-surface mb-4">Your Spelling Tests</h2>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <div onClick={handleStartTest} className="tactile-card bg-surface p-6 rounded-lg shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-between">
                            <div>
                                <h3 className="font-headline-md text-secondary-container mb-2">Ocean Animals</h3>
                                <p className="font-body-md text-on-surface-variant">10 words</p>
                            </div>
                            <div className="flex items-center justify-end text-primary mt-4">
                                <span className="material-symbols-outlined">play_circle</span>
                            </div>
                        </div>

                        <div className="tactile-card bg-surface p-6 rounded-lg shadow-sm opacity-50">
                            <div>
                                <h3 className="font-headline-md text-on-surface mb-2">Sight Words</h3>
                                <p className="font-body-md text-on-surface-variant">15 words</p>
                            </div>
                            <div className="flex items-center justify-end text-on-surface-variant mt-4">
                                <span className="material-symbols-outlined">lock</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ChildHome;
