
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
const routes: { path: string; element: JSX.Element }[] = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> }
];
const AppRoutes = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
};
export default AppRoutes;