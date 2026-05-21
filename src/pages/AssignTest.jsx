import React from 'react';

const AssignTest = () => {

    const selectChild = (element) => {
        // Logic to select a child
    };

    const confirmAssignment = () => {
        // Logic to confirm the assignment
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen pb-32">
            <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
                <div className="flex items-center gap-2">
                    <img alt="Robot Logo" className="w-8 h-8 rounded-full bg-primary-container p-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJv0YwyIQODljnFRp-Aw4_DC2GV1_qhOB2-xB__LQMiWvXl5RA9johpEkNTA6oiTzXRH4_1A-wF1RaLEN47X60WEOf_qyrO99E_xWCLKyoDCIUx9dTh41RQT5J2qh8XA9GLxVybetZJrKzXN-iIfRQ6WQzZpkR-fqY5tylEri4cm48h2bZEw4pOy5s5fyrEYF8dF6slHrk2jGMZuZ5wDNRYrsttWaZNAeAnRGkajPo8brh7rPGn2sB97TjFQXg60lDhwAZiDIyYEA" />
                    <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">SpellingRobot</h1>
                </div>
                <div className="flex items-center gap-2 bg-surface-container-high px-3 py-1 rounded-full">
                    <span className="material-symbols-outlined text-primary text-body-md" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                    <span className="font-label-caps text-label-caps text-primary">15:00</span>
                </div>
            </header>

            <main className="mt-20 px-margin-mobile max-w-2xl mx-auto">
                <section className="mb-8">
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="font-headline-md text-headline-md text-on-surface">Assign to Student</h2>
                        <span className="font-label-caps text-label-caps text-on-surface-variant">Step 1 of 2</span>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                        <button className="flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-lg bg-surface-container-highest active-ring transition-all" onClick={(e) => selectChild(e.currentTarget)}>
                            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-soft">
                                <img alt="Leo Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgo5UulFVa5K_96mEgFOJopWBmtvlqLJiRf6cPuuZDaA4I-fetthewZp7X22soGh9mJJGqifosTKEBpqE3zvhTRL64kMYQzldsWsqS8KRTAoSnVwvKkFiz3R6NKiWb43XI_UicE7bHNssRJqDrQ7nkUDVp2l3n9StkGhwwB9ZXSzHE7yACabQvabaJF8H28UKPiv5G9jZJgsuQqQpHtIciaJ9Fe8zH09Kl0zJAkMdGKWoe3_rhFMFwMbsQ2DN2sJN0sGKbZFX7OHE" />
                            </div>
                            <span className="font-label-caps text-label-caps">Leo</span>
                        </button>
                        {/* More child cards */}
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="font-headline-md text-headline-md text-on-surface">Select Word List</h2>
                        <span className="font-label-caps text-label-caps text-on-surface-variant">Step 2 of 2</span>
                    </div>
                    <div className="space-y-4">
                        {/* Word list items */}
                        <label className="block relative group cursor-pointer">
                            <input defaultChecked name="word-list" type="radio" className="hidden peer" />
                            <div className="p-5 rounded-lg bg-surface-container-lowest shadow-soft border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-high transition-all flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="bg-secondary-container p-3 rounded-DEFAULT">
                                        <span className="material-symbols-outlined text-on-secondary-container">description</span>
                                    </div>
                                    <div>
                                        <h3 className="font-body-lg text-body-lg text-on-surface">Weekly Spelling #14</h3>
                                        <p className="font-body-md text-body-md text-on-surface-variant">12 Words • Animals & Nature</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-primary peer-checked:opacity-100 opacity-0 transition-opacity">check_circle</span>
                            </div>
                        </label>
                    </div>
                </section>

                <div className="pt-4">
                    <button className="tactile-btn w-full bg-primary text-on-primary py-5 rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-3 shadow-lg hover:bg-on-primary-fixed-variant" onClick={confirmAssignment}>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_turned_in</span>
                        Confirm Assignment
                    </button>
                </div>
            </main>
        </div>
    );
};

export default AssignTest;
