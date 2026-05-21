import React from 'react';

const ChildHome = () => {
    return (
        <div className="bg-background text-on-background min-h-screen pb-24">
            <nav className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center">
                        <img alt="Child profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQimR_NhyKA9wMPDRw6MvAIksFUk_FBTakr36sz5IP6OUGqVcXTjbjTUGc6_PWsx0AaXhh68X6jDccbRGzNBWKfCIcIJ-2weNRODrxOidFn_jlzOjzw6C1zdie0rND_5-zQNsp4Pyly3zJ35jniqex308MXljrhnBNg9qLBW_vlMOVpEWQ_sTEiVV3vgISCx7uoxwr08T1lZp9i6bmWhqf8Dvl78ycaI2sx9RoyR-IvuUiLtks2ybGtzB7j4WHnMFXr2TachlSDw0" />
                    </div>
                    <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">SpellingRobot</span>
                </div>
                <div className="flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full timer-glow">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                    <span className="font-bold text-label-caps tracking-wider">15:00</span>
                </div>
            </nav>

            <main className="mt-20 px-margin-mobile flex flex-col gap-8 items-center max-w-lg mx-auto">
                <div className="relative w-full aspect-square max-w-[280px] mt-8">
                    <img alt="SpellingRobot Mascot" className="w-full h-full object-contain animate-bounce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoFtF9XfK7A-wQ1H48OpdX7wGJMnF_yrMHdwyDezJKRWPSqlSF1-N6ZSwrRdNUXQg0UHPD68Ku4vO6DWjtzgVeMKOGOOxi7Bpx9f60lKToeB4nZ8S7nTQl33sWIH6kqsdZbnR7IREpr2IBaAeum-d2UG2b3voNkfRwQ9LZ8KNhTu3xA2RFlRuiecjDsPN7ZFP4bCqjuElB_jazCD4cWnUFcjuxmMOUURnqs_h0F0celXOYvSKkIbKZi6Yy2Pw-RDaubGYZsXlUSO4" style={{ animationDuration: '3s' }} />
                    <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border-2 border-surface-container-high transform rotate-3">
                        <p className="font-headline-md text-primary leading-tight">Beep boop!<br />Ready to spell?</p>
                        <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-b-2 border-r-2 border-surface-container-high transform rotate-45"></div>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg p-8 flex flex-col items-center gap-6 word-card-shadow border-2 border-surface-container-high">
                    <div className="text-center">
                        <span className="font-label-caps text-on-surface-variant uppercase tracking-widest bg-surface-container rounded-full px-4 py-1">Assigned Test</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4">Ocean Adventures</h2>
                        <p className="font-body-md text-on-surface-variant mt-2">12 words to master!</p>
                    </div>
                    <button className="squishy-button w-full max-w-[240px] h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center gap-3 active:scale-95 transition-all duration-150">
                        <span className="font-headline-md text-headline-md">Start Now</span>
                        <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ChildHome;
