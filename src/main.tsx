import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import CreateOrder from './components/create-order/create-order';
import ErrorPage from './components/error-page/error-page';
import Login from './components/login/login';
import Main from './components/main';
import OrdersList from './components/orders-list/orders-list';
import ViewOrder from './components/view-order/view-order';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: (
                    <Navigate
                        to="/orders"
                        replace
                    />
                ),
            },
            {
                path: 'auth',
                element: <Login />,
            },
            {
                path: 'orders',
                element: <Main />,
                children: [
                    {
                        index: true,
                        element: (
                            <Navigate
                                to="list"
                                replace
                            />
                        ),
                    },
                    {
                        path: 'list',
                        element: <OrdersList />,
                    },
                    {
                        path: 'create',
                        element: <CreateOrder />,
                    },
                    {
                        path: 'view/:id',
                        element: <ViewOrder />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
