import React, {FormEvent, useState} from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import {CartProvider} from './context/CartProvider';
import {ProductsProvider} from './context/ProductsProvider';

function App() {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [loginAlertOpened, setLoginAlertOpened] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get('email') === 'admin@example.com' && data.get('password') === 'admin123') {
            setAuthenticated(true);
            setLoginAlertOpened(false);
            navigate('/');
        } else {
            console.log('Incorrect credentials.');
            setLoginAlertOpened(true);
        }
    };

    return (
        <Routes>
            <Route path='/'>
                <Route element={<MainLayout authenticated={authenticated} setAuthenticated={setAuthenticated}/>}>
                    <Route index element={!authenticated ? <Navigate replace to='/login'/> : <HomePage/>}/>
                    <Route
                        path='shop'
                        element={!authenticated
                            ? <Navigate replace to='/login'/>
                            : <ProductsProvider><CartProvider><ShopPage/></CartProvider></ProductsProvider>}
                    />
                </Route>
                <Route element={<AuthLayout/>}>
                    <Route path='login' element={authenticated ? <Navigate replace to='/'/> :
                        <LoginPage
                            handleLoginSubmit={handleLoginSubmit}
                            loginAlertOpened={loginAlertOpened}
                            setLoginAlertOpened={setLoginAlertOpened}
                        />}/>
                </Route>
            </Route>


            <Route path='*' element={<main style={{padding: "1rem"}}>
                <p>There's nothing here!</p>
            </main>}/>
        </Routes>
    );
}

export default App;
