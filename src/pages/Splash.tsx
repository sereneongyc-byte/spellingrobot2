import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/student-dashboard');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen bg-primary-container flex flex-col justify-center items-center text-on-primary-container">
            <div className="text-center">
                <img className="w-48 h-48 mx-auto mb-6 animate-bounce" src="/robot.png" alt="Spelling Robot Mascot" />
                <h1 className="font-headline-lg text-4xl font-bold mb-2">Spelling Robot</h1>
                <p className="font-body-lg text-lg">Making spelling fun!</p>
            </div>
        </div>
    );
};

export default Splash;
