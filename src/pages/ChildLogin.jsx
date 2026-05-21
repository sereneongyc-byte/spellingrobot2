import React, { useState } from 'react';

const ChildLogin = () => {
    const [pin, setPin] = useState('');
    const [selectedProfile, setSelectedProfile] = useState(null);

    const selectProfile = (name) => {
        setSelectedProfile(name);
    };

    const goBack = () => {
        setSelectedProfile(null);
        setPin('');
    };

    const addPin = (num) => {
        if (pin.length < 4) {
            setPin(pin + num);
        }
    };

    const clearPin = () => {
        setPin(pin.slice(0, -1));
    };

    return (
        <div className="bg-background min-h-screen flex flex-col font-body-md text-on-background overflow-hidden selection:bg-primary-fixed">
            <header className="fixed top-0 w-full z-50 bg-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
                <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">SpellingRobot</h1>
                <div className="flex items-center gap-2 bg-surface-container-high px-4 py-1 rounded-full">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                    <span className="font-label-caps text-label-caps text-on-surface">15:00</span>
                </div>
            </header>

            <main className="flex-1 mt-[48px] px-margin-mobile flex flex-col items-center justify-center relative">
                {!selectedProfile ? (
                    <div className="w-full max-w-lg space-y-10">
                        <div className="text-center space-y-2">
                            <img alt="Friendly Robot Mascot" className="w-24 h-24 mx-auto floating-robot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApCiWyXKjQ1fDA6akZ0gXfoYqmaIw-ldx0Zs8WgCFmIGYxftXri6ibETnH2sKDHWz-ORB_u5WH-UoAuLSijHzfnsUDGC1rXbZYA7nrPElI8NPjVTF4EtIFVnMzJkvqFebfwHvIADJ0cx7zizmKtjBVNxE2xyzR0mNKyPRgnpuxqIdR7SrlG-TCH-5yySyGPON-JcDw-HeAn_RV1SEpilDVRhEoemz2xB3d0ZlmDb9--uMMplQ52wwOwjy8zS3CbclcX_qUGD5JCjY" />
                            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Who is learning today?</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">Tap your profile to start!</p>
                        </div>
                        <div className="grid grid-cols-2 gap-gutter">
                            <button className="profile-card group flex flex-col items-center bg-white p-6 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border-b-4 border-primary hover:scale-102 transition-all duration-200 active:scale-95" onClick={() => selectProfile('Leo')}>
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-primary-fixed border-4 border-primary/20">
                                    <img alt="Leo's Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrQSbsIPWk9HOzS9XH6A2ai0IjEDpgRqiPxRFQVsA0rPZJIdU6W07Cv--I5qkFI2O8YjJXMgfp8AjlSXkCHPMZq3-2zQeac-wb0iikrhi9kCL8hq-sQCAfSRRnp5B2Tqu9lm9Qkyn0dGXZc-UyihzzdLe5NM9U7YmSOVdE34NrVgj2ULVBTxnTz_AUVOs9R1jXjCnGMsWfUWTNrtfewsFo5YwnvpqD5xZ_3X-33xYHZZAwdCHHJoDc9Vl5Czr6L9eI8dqmV7VgQlY" />
                                </div>
                                <span className="font-headline-md text-headline-md text-on-surface">Leo</span>
                                <span className="font-label-caps text-label-caps text-tertiary mt-1">Level 12</span>
                            </button>
                            {/* More profiles */}
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-w-md space-y-12">
                        <button className="flex items-center gap-2 text-primary font-label-caps text-label-caps mb-4" onClick={goBack}>
                            <span className="material-symbols-outlined">arrow_back</span>
                            Back to profiles
                        </button>
                        <div className="text-center space-y-4">
                            <div className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg overflow-hidden mb-4">
                                <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${selectedProfile}`} className="w-full h-full object-cover" />
                            </div>
                            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Hi {selectedProfile}!</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Enter your secret code</p>
                        </div>
                        <div className="flex justify-center gap-6">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className={`pin-dot w-6 h-6 rounded-full border-2 border-outline-variant ${i < pin.length ? 'bg-primary border-primary scale-125' : ''}`}></div>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto">
                            {[...Array(9)].map((_, i) => (
                                <button key={i} className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center font-headline-md text-headline-md text-on-surface active:bg-primary-container active:text-on-primary-container transition-colors" onClick={() => addPin(i + 1)}>{i + 1}</button>
                            ))}
                            <div className="w-20 h-20"></div>
                            <button className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center font-headline-md text-headline-md text-on-surface active:bg-primary-container active:text-on-primary-container transition-colors" onClick={() => addPin(0)}>0</button>
                            <button className="w-20 h-20 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error" onClick={clearPin}>
                                <span className="material-symbols-outlined text-3xl">backspace</span>
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ChildLogin;
