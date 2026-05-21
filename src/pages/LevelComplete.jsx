import React from 'react';

const LevelComplete = () => {
    return (
        <div className="bg-background font-body-md text-on-surface min-h-screen overflow-x-hidden">
            <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-primary-container">
                        <img alt="Child profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgTo_1xrtMrT6oGVhKrzNs2bb7O-z9jR2gnKvx9CqTndxXX2R_6ZmQcpeqpFmQkfKcKMyKlVv_vr8ygRa369muy8Dl0xzrjTNEW21WykuGN3ocwBq7a2r4bOa0ZFRsppHY2JOT7PN9IjBrRy5KG2E4mAqugM9YhR-AVVfjKpEuO1pBK5IzbTtR6tVLw1RsdcRa_3PjPIsVuFrv2CTh6Hr3nWJEFJBJeGvYyTdtiguK_70H6Zb039aI6aRIKRCiyK1wOviHotIMbbo" />
                    </div>
                    <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">SpellingRobot</h1>
                </div>
                <div className="flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full border-2 border-white shadow-sm">
                    <span className="material-symbols-outlined text-tertiary-container fill-icon">smart_toy</span>
                    <span className="font-timer-display text-[20px] text-on-surface">15:00</span>
                </div>
            </header>

            <main className="pt-24 pb-32 px-margin-mobile max-w-lg mx-auto">
                <div className="relative flex flex-col items-center text-center">
                    <div className="w-48 h-48 mb-6 float-animation">
                        <img alt="Robot celebrating" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe_wrOpKLEWIOJGJ_H8wvqSK9chPodbO_nFQSrQokG-GjsdF4ry5fYM_sXl-vM2g89u6By3OtkQ4mxzFTj09CkI48Ss1baleIYLjxgjjXCERzMyrTL3Y-5IIefy2DNuWuFtqZujCPsIpR4uFsCBBtJj_Db7_XKQHqJ8OHcUkmnUvP3Vvq2hS17tXaiRwqODRCMTNZzOEjIX70Nhy6ihSrJkHZifoZw4pXU3nCW0RCcoRa0QnWlaT0TiRbOuvd0qmlA8xmumHAqqIg" />
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Great job!</h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">You spelled 12 words correctly!</p>
                    <div className="flex flex-col gap-4 w-full">
                        <button className="push-button bg-primary text-on-primary font-headline-md text-headline-md py-5 rounded-lg w-full flex items-center justify-center gap-3 active:scale-102 transition-transform duration-200">
                            <span className="material-symbols-outlined">play_arrow</span>
                            Next Level
                        </button>
                        <button className="bg-surface-container-highest text-on-surface font-body-lg text-body-lg py-4 rounded-lg w-full flex items-center justify-center gap-3 hover:opacity-80 transition-all">
                            <span className="material-symbols-outlined">leaderboard</span>
                            View Full Results
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LevelComplete;
