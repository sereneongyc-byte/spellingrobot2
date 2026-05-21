import React, { useState } from 'react';

const SpellingTest = () => {
    const [progress, setProgress] = useState(30);

    return (
        <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed">
            <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_0XRYpQwsUoFWX6eS9eHGshcBIqCunudiT-Poky16E21HQS_n69pS3wx2yIAMkX4R67dONlGD8tJnfjUGAZ7zQMd_osWfNF4YKsvw2aBZ0BqZn47yQFuE6HNRECnowvNG597It3Q41z3i7c1QD2UnVA2n-_gTp4NjHv8jEpA7t7RbKIv9wmiciURGE0TqXue_1Wva_wFCCqJ_9UdQpyC_8xhkh2vH6q4tuYGLCvHaLMiEJQs8Qz1z1Nu8SXkEjUhpLy_BOlm-2-qA" />
                    </div>
                    <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">SpellingRobot</h1>
                </div>
                <div className="flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full border-2 border-tertiary-fixed-dim">
                    <span className="material-symbols-outlined text-tertiary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                    <span className="font-timer-display text-body-lg text-tertiary">15:00</span>
                </div>
            </header>

            <main className="pt-24 pb-28 px-margin-mobile flex flex-col items-center min-h-screen">
                <div className="w-full max-w-md mb-8">
                    <div className="flex justify-between items-end mb-2">
                        <p className="font-label-caps text-label-caps text-on-surface-variant">WORD PROGRESS</p>
                        <p className="font-headline-md text-headline-md text-primary">3 / 10</p>
                    </div>
                    <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary-container transition-all duration-500 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="w-full max-w-md bg-white rounded-lg p-8 word-card-shadow flex flex-col items-center relative overflow-hidden border-b-4 border-surface-container-highest">
                    <button className="relative group mb-8">
                        <div className="w-24 h-24 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center btn-tactile transition-transform">
                            <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>volume_up</span>
                        </div>
                    </button>
                    <div className="text-center mb-8">
                        <h2 className="font-headline-md text-headline-md text-on-surface-variant mb-1">Click to hear the word</h2>
                        <p className="text-body-md text-outline">Type what you hear below!</p>
                    </div>
                    <div className="w-full relative group">
                        <input autoFocus className="w-full text-center font-headline-lg-mobile text-headline-lg-mobile py-6 px-4 bg-surface-container-low border-b-4 border-outline-variant focus:border-primary-container focus:ring-0 rounded-t-xl transition-all outline-none placeholder:text-outline-variant text-primary" placeholder="Type here..." type="text" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SpellingTest;
