import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import ChildLogin from './pages/ChildLogin';
import ChildHome from './pages/ChildHome';
import SpellTest from './pages/SpellTest';
import LevelComplete from './pages/LevelComplete';
import ParentDashboard from './pages/ParentDashboard';
import UploadWordList from './pages/UploadWordList';
import AssignTest from './pages/AssignTest';
import TestResults from './pages/TestResults';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/child-login" element={<ChildLogin />} />
                <Route path="/child-home" element={<ChildHome />} />
                <Route path="/spell-test" element={<SpellTest />} />
                <Route path="/level-complete" element={<LevelComplete />} />
                <Route path="/parent-dashboard" element={<ParentDashboard />} />
                <Route path="/upload-words" element={<UploadWordList />} />
                <Route path="/assign-test" element={<AssignTest />} />
                <Route path="/test-results" element={<TestResults />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
