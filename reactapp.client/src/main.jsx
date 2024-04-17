import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import { // createBrowserRouter, // RouterProvider, //} from "react-router-dom"; 
import { Towar } from './towar/towarPage.jsx';
import { Towary } from './towar/towaryPage.jsx'
import { Layout } from './layout/layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pracownik } from './pracownik/pracownikPage.jsx';
import { Pracownicy } from './pracownik/pracownicyPage.jsx';

//const router = createBrowserRouter([
//    {
//        path: "/",
//        element: <App/>,
//    },
//    {
//        path: "/towar",
//        element: <Towar />,
//    },
//    {
//        path: "/towary",
//        element: <Towary />,
//    },
//]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/towar' element={<Layout />}>
                    <Route index element={<Towar />} />
                </Route>
                <Route path='/towary' element={<Layout />}>
                    <Route index element={<Towary />} />
                </Route>
                <Route path='/pracownik' element={<Layout />}>
                    <Route index element={<Pracownik />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);