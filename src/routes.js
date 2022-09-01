import { lazy } from 'react';

const Main = lazy(() => import('./app/main'));
const Test = lazy(() => import('./app/pages/Test'));
const Tester = lazy(() => import('./app/pages/Tester'));
const Page404 = lazy(() => import('./app/pages/page404/Page404'));


const routes = [
    { path: '/', name: "Main", components: Main },
    { path: '/test', name: "Test", components: Test },
    { path: '/tester', name: "Tester", components: Tester },
    { path: '*', name: "Page404", components: Page404 },
    
]

export default routes;
