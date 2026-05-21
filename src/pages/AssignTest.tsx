import { useNavigate } from 'react-router-dom';

const AssignTest = () => {
    const navigate = useNavigate();

    const handleAssign = () => {
        // In a real application, you would assign the test to the child here.
        console.log('Assigning test...');
        navigate('/parent-dashboard');
    };

    return (
        <div className="min-h-screen bg-background text-on-surface p-4 sm:p-6">
            <div className="max-w-xl mx-auto">
                <button onClick={() => navigate('/parent-dashboard')} className="flex items-center text-on-surface-variant mb-6">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span className="ml-2 font-headline-sm">Back to Dashboard</span>
                </button>

                <div className="bg-surface-container-high rounded-2xl p-8 tactile-card">
                    <h1 className="font-headline-lg mb-6">Assign Test</h1>
                    <div className="mb-6">
                        <label htmlFor="child" className="block font-body-lg text-on-surface-variant mb-2">Select Child</label>
                        <select id="child" className="w-full bg-surface-container-lowest border-2 border-outline rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Alex</option>
                            {/* Add other children here */}
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="word-list" className="block font-body-lg text-on-surface-variant mb-2">Select Word List</label>
                        <select id="word-list" className="w-full bg-surface-container-lowest border-2 border-outline rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Animals</option>
                            <option>Colors</option>
                            {/* Add other word lists here */}
                        </select>
                    </div>
                    <button
                        onClick={handleAssign}
                        className="w-full bg-primary text-on-primary font-headline-md py-3 rounded-full squishy-button"
                    >
                        Assign Test
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssignTest;
