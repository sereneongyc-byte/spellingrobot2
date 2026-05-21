import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import ParentDashboard from './pages/ParentDashboard';
import UploadWordList from './pages/UploadWordList';
import AssignTest from './pages/AssignTest';
import TestResults from './pages/TestResults';
import StudentDashboard from './pages/StudentDashboard';
import SpellingTest from './pages/SpellingTest';
import PracticeWords from './pages/PracticeWords';
import TestComplete from './pages/TestComplete';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />} />

                {/* Parent Routes */}
                <Route path="/parent-dashboard" element={<ParentDashboard />} />
                <Route path="/upload-word-list" element={<UploadWordList />} />
                <Route path="/assign-test" element={<AssignTest />} />
                <Route path="/test-results" element={<TestResults />} />

                {/* Child Routes */}
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/spelling-test" element={<SpellingTest />} />
                <Route path="/practice-words" element={<PracticeWords />} />
                <Route path="/test-complete" element={<TestComplete />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
