import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChildLogin = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/child-home');
    };

    return (
        <div className="min-h-screen bg-background font-body-md text-on-surface flex items-center justify-center p-4">
            <div className="w-full max-w-sm text-center">
                <img alt="Spelling Robot Mascot" className="w-40 h-40 mx-auto mb-6 floating-robot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoFtF9XfK7A-wQ1H48OpdX7wGJMnF_yrMHdwyDezJKRWPSqlSF1-N6ZSwrRdNUXQg0UHPD68Ku4vO6DWjtzgVeMKOGOOxi7Bpx9f60lKToeB4nZ8S7nTQl33sWIH6kqsdZbnR7IREpr2IBaAeum-d2UG2b3voNkfRwQ9LZ8KNhTu3xA2RFlRuiecjDsPN7ZFP4bCqjuElB_jazCD4cWnUFcjuxmMOUURnqs_h0F0celXOYvSKkIbKZi6Yy2Pw-RDaubGYZsXlUSO4" />
                <h1 className="font-headline-lg text-headline-lg text-primary mb-4">Ready to Spell?</h1>
                <div className="flex flex-col gap-4">
                    <button onClick={handleLogin} className="squishy-button bg-primary text-on-primary font-headline-md py-4 rounded-lg w-full flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">face</span>
                        <span>Leo</span>
                    </button>
                    <button onClick={handleLogin} className="squishy-button bg-secondary-container text-on-secondary-container font-headline-md py-4 rounded-lg w-full flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">face_3</span>
                        <span>Mia</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChildLogin;
