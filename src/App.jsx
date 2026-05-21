import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import UploadWordList from './pages/UploadWordList';
import AssignTest from './pages/AssignTest';
import ParentDashboard from './pages/ParentDashboard';
import TestResults from './pages/TestResults';
import ChildLogin from './pages/ChildLogin';
import ChildHome from './pages/ChildHome';
import SpellingTest from './pages/SpellingTest';
import LevelComplete from './pages/LevelComplete';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/upload" element={<UploadWordList />} />
                <Route path="/assign" element={<AssignTest />} />
                <Route path="/dashboard" element={<ParentDashboard />} />
                <Route path="/results" element={<TestResults />} />
                <Route path="/child-login" element={<ChildLogin />} />
                <Route path="/child-home" element={<ChildHome />} />
                <Route path="/spell-test" element={<SpellingTest />} />
                <Route path="/level-complete" element={<LevelComplete />} />
            </Routes>
        </Router>
    );
}

export default App;
