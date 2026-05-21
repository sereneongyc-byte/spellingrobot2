import React from 'react';

const TestResults = () => {
    return (
        <div className="bg-background text-on-background min-h-screen pb-32">
            <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                        <img alt="Leo's Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApSZ91BjHd4Uec0Xjfm-zB9DFKC3SnGQwX8KLzLQjwJ9tk25cZtTk3Dat7jJdZSLC6NGfrDH61fPnR8wF7H5OqYkp3infslD6x9BTSzWe4Xicsiy_E5xmzprPdiaN7H3bcF9Cv_uhKm4WTlvc21mRiheTyODzGTnPtqJW2NUtVyKMmA2l1lhpZPtah6yave8O7_Mj2kuEUz9QElfKdbZtmlRVtm6Eacv_bmBaTz8CZxygjOMO3nJU3mpqOwROHKWhuO0OsnrX0ggQ" />
                    </div>
                    <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">SpellingRobot</h1>
                </div>
                <div className="flex items-center gap-2 bg-surface-container px-4 py-1.5 rounded-full border border-primary/10">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                    <span className="font-bold text-on-surface">15:00</span>
                </div>
            </header>

            <main className="mt-24 px-margin-mobile space-y-6">
                <section className="flex flex-col gap-2">
                    <h2 className="font-headline-md text-headline-md text-on-surface">Leo's Results</h2>
                    <p className="font-body-md text-on-surface-variant">Completed on Oct 24, 2023</p>
                </section>

                <section className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 bento-card bg-primary-container text-on-primary-container p-6 rounded-lg flex items-center justify-between shadow-sm overflow-hidden relative">
                        {/* Score display */}
                    </div>
                    <div className="bento-card bg-surface-container p-4 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-2">
                        {/* Time display */}
                    </div>
                    <div className="bento-card bg-surface-container p-4 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-2">
                        {/* Streak display */}
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-headline-md text-headline-md text-on-surface">Word Breakdown</h3>
                        <span className="font-label-caps text-label-caps text-primary uppercase">10 Words</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        {/* Word breakdown cards */}
                    </div>
                </section>

                <div className="pt-4">
                    <button className="w-full bg-primary text-on-primary font-headline-md text-headline-md py-4 rounded-full shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3">
                        <span className="material-symbols-outlined">print</span>
                        Share Certificate
                    </button>
                </div>
            </main>
        </div>
    );
};

export default TestResults;
