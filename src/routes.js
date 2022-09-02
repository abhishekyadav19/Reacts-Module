import { lazy } from 'react';

const Main = lazy(() => import('./app/main'));
const Test = lazy(() => import('./app/authentication/Test'));
const Tester = lazy(() => import('./app/authentication/Tester'));
const Page404 = lazy(() => import('./app/authentication/page404/Page404'));


const routes = [
    { path: '/', name: "Main", component: Main },
    { path: '/test', name: "Test", component: Test },
    { path: '/tester', name: "Tester", component: Tester },
    { path: '*', name: "Page404", component: Page404 },
    
]

export default routes;
