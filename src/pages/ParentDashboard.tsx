import React from 'react';
import { useNavigate } from 'react-router-dom';

const ParentDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background text-on-surface p-4 sm:p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="font-headline-lg">Parent Dashboard</h1>
                    <button className="bg-primary text-on-primary font-headline-sm py-2 px-4 rounded-full squishy-button">Log Out</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        onClick={() => navigate('/upload-word-list')}
                        className="bg-surface-container-high rounded-2xl p-6 tactile-card cursor-pointer hover:bg-surface-container-highest"
                    >
                        <h2 className="font-headline-md text-on-surface-variant">Upload Word List</h2>
                        <p className="font-body-md text-on-surface-variant mt-2">Create and upload custom word lists for your child.</p>
                    </div>
                    <div
                        onClick={() => navigate('/assign-test')}
                        className="bg-surface-container-high rounded-2xl p-6 tactile-card cursor-pointer hover:bg-surface-container-highest"
                    >
                        <h2 className="font-headline-md text-on-surface-variant">Assign Test</h2>
                        <p className="font-body-md text-on-surface-variant mt-2">Assign a spelling test to your child.</p>
                    </div>
                    <div
                        onClick={() => navigate('/test-results')}
                        className="bg-surface-container-high rounded-2xl p-6 tactile-card cursor-pointer hover:bg-surface-container-highest"
                    >
                        <h2 className="font-headline-md text-on-surface-variant">Test Results</h2>
                        <p className="font-body-md text-on-surface-variant mt-2">View your child's test results and progress.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDashboard;
