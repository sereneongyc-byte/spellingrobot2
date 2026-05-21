import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/child-login');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuApCiWyXKjQ1fDA6akZ0gXfoYqmaIw-ldx0Zs8WgCFmIGYxftXri6ibETnH2sKDHWz-ORB_u5WH-UoAuLSijHzfnsUDGC1rXbZYA7nrPElI8NPjVTF4EtIFVnMzJkvqFebfwHvIADJ0cx7zizmKtjBVNxE2xyzR0mNKyPRgnpuxqIdR7SrlG-TCH-5yySyGPON-JcDw-HeAn_RV1SEpilDVRhEoemz2xB3d0ZlmDb9--uMMplQ52wwOwjy8zS3CbclcX_qUGD5JCjY" alt="SpellingRobot Mascot" className="w-48 h-48 floating-robot" />
            <h1 className="font-headline-lg text-primary mt-4">SpellingRobot</h1>
            <p className="font-body-lg text-on-surface-variant">The fun way to master spelling!</p>
        </div>
    );
};

export default Splash;
