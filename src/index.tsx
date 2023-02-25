import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Router basename='/gui-automation-playground'>
            <Routes>
                <Route path='/*' element={<App/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);
