import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background text-on-surface p-4 sm:p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="font-headline-lg">Welcome, Alex!</h1>
                    <button className="bg-primary text-on-primary font-headline-sm py-2 px-4 rounded-full squishy-button">Log Out</button>
                </div>

                <div className="text-center mb-12">
                    <img src="/robot.png" alt="Spelling Robot" className="w-48 h-48 mx-auto floating-robot" />
                    <p className="font-body-lg text-on-surface-variant mt-4">Ready for a spelling adventure?</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                        onClick={() => navigate('/spelling-test')}
                        className="bg-surface-container-high rounded-2xl p-6 tactile-card cursor-pointer hover:bg-surface-container-highest flex flex-col items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-5xl text-primary">edit</span>
                        <h2 className="font-headline-md text-on-surface-variant mt-4">Start Spelling Test</h2>
                        <p className="font-body-md text-on-surface-variant text-center mt-2">Take a new spelling test assigned by your parent.</p>
                    </div>
                    <div
                        onClick={() => navigate('/practice-words')}
                        className="bg-surface-container-high rounded-2xl p-6 tactile-card cursor-pointer hover:bg-surface-container-highest flex flex-col items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-5xl text-secondary">school</span>
                        <h2 className="font-headline-md text-on-surface-variant mt-4">Practice Words</h2>
                        <p className="font-body-md text-on-surface-variant text-center mt-2">Practice your spelling words before the test.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
