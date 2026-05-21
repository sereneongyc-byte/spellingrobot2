import React from 'react';

const ParentDashboard = () => {
    return (
        <div className="bg-background text-on-surface min-h-screen pb-32">
            <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-primary">
                        <img alt="Parent Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnBdNxTcoGXSX_DK-kxnW94KPMnAiaLFOyjna8NPIny-stYjZ9-LDARwWFnFeqKR2YRXNQedow-_cgNr41l0Oda1HneU4euqQlc1zB-bPmrshjycWxrjYxEe88naBdIgProW-Ad_1MEdxosTRq9-RdvKA-OBRnlpUGRSpfTq_c5e3sUL-0fg52IMgEwKeWHtr0x2Xi3GqdLPY90atTIXK-NrLOoJHriL3SocOYa8uBrpYNEiHYOqZMR_n0M9CSPzhQ9qxuocX58Ow" />
                    </div>
                    <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">SpellingRobot</h1>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-surface-container px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                        <span className="font-label-caps text-label-caps text-on-surface">15:00</span>
                    </div>
                </div>
            </header>

            <main className="pt-20 px-margin-mobile max-w-4xl mx-auto">
                <section className="mt-8 mb-10">
                    <h2 className="font-headline-md text-headline-md text-on-surface">Welcome back, Parent!</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">Here's how your little learners are doing today.</p>
                </section>

                <section className="mb-12">
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="font-label-caps text-label-caps text-on-surface-variant">MY CHILDREN</h3>
                        <button className="flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity">
                            <span className="material-symbols-outlined">add_circle</span>
                            <span className="font-label-caps text-label-caps">Add Child</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                        {/* Child profile cards */}
                    </div>
                </section>

                <section>
                    <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest">Recent Activity</h3>
                    <div className="space-y-4">
                        {/* Activity items */}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ParentDashboard;
