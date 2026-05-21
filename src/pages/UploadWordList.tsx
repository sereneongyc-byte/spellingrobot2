import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadWordList = () => {
    const navigate = useNavigate();
    const [wordList, setWordList] = useState('');

    const handleUpload = () => {
        // In a real application, you would handle the file upload here.
        console.log('Uploading word list:', wordList);
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
                    <h1 className="font-headline-lg mb-6">Upload Word List</h1>
                    <textarea
                        value={wordList}
                        onChange={(e) => setWordList(e.target.value)}
                        placeholder="Enter words separated by commas (e.g., cat, dog, bird)"
                        className="w-full h-40 bg-surface-container-lowest border-2 border-outline rounded-xl p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                        onClick={handleUpload}
                        className="w-full bg-primary text-on-primary font-headline-md py-3 rounded-full squishy-button"
                    >
                        Upload List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadWordList;
