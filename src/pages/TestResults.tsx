import { useNavigate } from 'react-router-dom';

const TestResults = () => {
    const navigate = useNavigate();

    // Mock data for demonstration
    const results = [
        { id: 1, child: 'Alex', wordList: 'Animals', score: '9/10', date: '2024-05-20' },
        { id: 2, child: 'Alex', wordList: 'Colors', score: '7/10', date: '2024-05-18' },
    ];

    return (
        <div className="min-h-screen bg-background text-on-surface p-4 sm:p-6">
            <div className="max-w-4xl mx-auto">
                <button onClick={() => navigate('/parent-dashboard')} className="flex items-center text-on-surface-variant mb-6">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span className="ml-2 font-headline-sm">Back to Dashboard</span>
                </button>

                <h1 className="font-headline-lg mb-6">Test Results</h1>

                <div className="bg-surface-container-high rounded-2xl tactile-card overflow-hidden">
                    <div className="grid grid-cols-4 font-headline-sm text-on-surface-variant bg-surface-container-high p-4">
                        <div>Child</div>
                        <div>Word List</div>
                        <div className="text-center">Score</div>
                        <div className="text-right">Date</div>
                    </div>
                    <div className="divide-y divide-outline">
                        {results.map((result) => (
                            <div key={result.id} className="grid grid-cols-4 items-center p-4">
                                <div>{result.child}</div>
                                <div>{result.wordList}</div>
                                <div className="text-center">{result.score}</div>
                                <div className="text-right">{result.date}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestResults;
