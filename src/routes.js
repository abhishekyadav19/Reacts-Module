import { lazy } from 'react';


const Main = lazy(() => import('./app/main'));
const Test = lazy(() => import('./app/authentication/Test'));
const Tester = lazy(() => import('./app/authentication/Tester'));
const Page404 = lazy(() => import('./app/authentication/page404/Page404'));
const CheckboxProps = lazy(() => import('./app/component/checkbox/CheckboxProps'));
const Video = lazy(() => import('./app/component/video/Video'));
const Checkboxes = lazy(() => import('./app/component/checkbox/Checkboxes'));
const Tabprops = lazy(() => import('./app/component/tab/Tabprops'));
const ReactDatepicker = lazy(() => import('./app/component/react-datepicker/ReactDatepicker'));


const routes = [
    { path: '/', name: "Main", component: Main },
    { path: '/test', name: "Test", component: Test },
    { path: '/tester', name: "Tester", component: Tester },
    { path: '*', name: "Page404", component: Page404 },
    { path: '/checkboxes', name: "CheckboxProps", component: CheckboxProps },
    { path: '/video', name: "video", component: Video },
    { path: '/tabs', name: "TabProps", component: Tabprops },
    { path: '/react-datepicker', name: "react-datepicker", component: ReactDatepicker },
  
]

export default routes;
