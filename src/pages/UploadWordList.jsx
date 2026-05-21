import React, { useState } from 'react';

const UploadWordList = () => {
    const [isConfirmStep, setIsConfirmStep] = useState(false);

    const simulateScan = () => {
        // Simulate a scan and switch to the confirmation step
        setTimeout(() => {
            setIsConfirmStep(true);
        }, 2500);
    };

    const resetUpload = () => {
        setIsConfirmStep(false);
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen pb-32">
            <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
                <div className="flex items-center gap-2">
                    <img alt="Robot Logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmGNrNgkFUosIPQvS6PwSN30RLVirMeLlVCAvQUyFBcmn7HRmmGf_I0pIa3xbS3q36k-Y4nvIxDIApnLbz2-gKBO8DNiMKkSNWLJ1-vcwfeQc2kYyE1os44Sn8_8nXhspzQsX_64gfBZSniSUrqokc28splWJq59lc61aGz6V1JmPpEMnzILBk0znr--WyW5vA2garUP14psBltH_4V_hap_wB0lTgPti9_GmFDXF__yx_rry6Y19BBI0dc4K6dZHVXnqP3CuqkGg" />
                    <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">SpellingRobot</h1>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-surface-container-high px-3 py-1 rounded-full flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                        <span className="font-timer-display text-body-md text-primary font-bold">15:00</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-white shadow-sm">
                        <img alt="Child profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACU0ewACRouW8gGj3jlcrm4xM0ZY0rb7Dgu_g5HGsvbPbrrJKFlU1wIkZ_cBdjwACd3lUcQiyyWaLxXQcvL2Z3DlkTjP6e0RFmcShM_BxNwUju6SBT2RaohVjPorPJJwAG4jyackGc1bUgeZiM415gj9QvlzrZrPQSKb3F9x_E3yA6u4iw3TTMpyzJTLcQyQezVm10bJmiAK5WUaYzgmvoH5d0BMrLOF8CrvWjABl6l4jF57-qDCJQbo-M46A9CZDyd0-fyatDSus" />
                    </div>
                </div>
            </header>

            <main className="pt-20 px-margin-mobile max-w-2xl mx-auto">
                {!isConfirmStep ? (
                    <section id="upload-step">
                        <div className="mb-8">
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Upload Spelling List</h2>
                            <p className="text-body-md text-on-surface-variant">Take a photo of your child's spelling sheet or upload a file. Our robot will magic-scan the words!</p>
                        </div>
                        <div className="relative group border-4 border-dashed border-outline-variant rounded-lg p-8 flex flex-col items-center justify-center min-h-[320px] transition-all duration-300 bg-white cursor-pointer hover:border-primary hover:bg-surface-container-low tactile-card" onClick={simulateScan}>
                            <input accept="image/*,.pdf" className="absolute inset-0 opacity-0 cursor-pointer" id="file-input" type="file" />
                            <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[48px] text-primary" style={{ fontVariationSettings: "'wght' 300" }}>cloud_upload</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-primary mb-2">Drop your sheet here</h3>
                            <p className="text-body-md text-on-surface-variant text-center mb-8">Supports JPG, PNG, or PDF</p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full px-4">
                                <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-on-primary font-label-caps text-label-caps py-4 rounded-xl squishy-button">
                                    <span className="material-symbols-outlined">photo_camera</span>
                                    OPEN CAMERA
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 bg-surface-container-highest text-on-surface font-label-caps text-label-caps py-4 rounded-xl squishy-button">
                                    <span className="material-symbols-outlined">folder_open</span>
                                    BROWSE FILES
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-surface-container-low p-4 rounded-lg flex items-start gap-3">
                                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                                <p className="text-[13px] leading-tight text-on-surface-variant">Use good lighting for best scan results.</p>
                            </div>
                            <div className="bg-surface-container-low p-4 rounded-lg flex items-start gap-3">
                                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>straighten</span>
                                <p className="text-[13px] leading-tight text-on-surface-variant">Keep the paper flat and centered.</p>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section id="confirm-step">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-tertiary-container rounded-full flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-white text-[32px]">check_circle</span>
                            </div>
                            <div>
                                <h2 className="font-headline-md text-headline-md text-on-surface">Scan Complete!</h2>
                                <p className="text-body-md text-on-surface-variant">We found 8 words. Do they look right?</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="word-list grid grid-cols-1 gap-3">
                                {/* Dynamically generated word cards would go here */}
                                <div className="tactile-card bg-white p-4 flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <span className="text-on-surface-variant font-label-caps w-6">1</span>
                                        <span className="font-headline-md text-headline-md text-primary">Elephant</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
                                        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-error-container text-error"><span className="material-symbols-outlined">delete</span></button>
                                    </div>
                                </div>
                                <div className="tactile-card bg-white p-4 flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <span className="text-on-surface-variant font-label-caps w-6">2</span>
                                        <span className="font-headline-md text-headline-md text-primary">Library</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
                                        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-error-container text-error"><span className="material-symbols-outlined">delete</span></button>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-4 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant font-label-caps flex items-center justify-center gap-2 hover:bg-white transition-colors">
                                <span className="material-symbols-outlined">add</span>
                                ADD WORD MANUALLY
                            </button>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <button className="flex-1 py-4 font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high rounded-xl squishy-button" onClick={resetUpload}>RE-SCAN</button>
                            <button className="flex-[2] py-4 font-label-caps text-label-caps text-on-primary bg-primary rounded-xl squishy-button flex items-center justify-center gap-2">
                                START PRACTICE
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </section>
                )}
            </main>

            <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-surface-container-low shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] rounded-t-lg z-50">
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150" href="#">
                    <span className="material-symbols-outlined">home</span>
                    <span className="font-label-caps text-label-caps mt-1">Home</span>
                </a>
                <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 active:scale-95 transition-all duration-150" href="#">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_upload</span>
                    <span className="font-label-caps text-label-caps mt-1">Upload</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150" href="#">
                    <span className="material-symbols-outlined">leaderboard</span>
                    <span className="font-label-caps text-label-caps mt-1">Results</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150" href="#">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="font-label-caps text-label-caps mt-1">Settings</span>
                </a>
            </nav>
        </div>
    );
};

export default UploadWordList;
