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
const LoaderProps = lazy(() => import('./app/component/loader/LoaderProps'));
const MapContainer = lazy(() => import('./app/component/google-map/MapContainer'));
const Callbackhook = lazy(() => import('./app/component/use-callback/Callbackhook'));
const Memo = lazy(() => import('./app/component/memo/Memo'));
const Autocomplete = lazy(() => import('./app/component/google-map/Autocomplete'));
const ImageUpload = lazy(() => import('./app/component/image-preview/ImageUpload'));
const VideoPlayer = lazy(() => import('./app/component/test/VideoPlayer'));





const routes = [
    { path: '/', name: "Main", component: Main },
    { path: '/test', name: "Test", component: Test },
    { path: '/tester', name: "Tester", component: Tester },
    { path: '*', name: "Page404", component: Page404 },
    { path: '/checkboxes', name: "CheckboxProps", component: CheckboxProps },
    { path: '/video', name: "video", component: Video },
    { path: '/tabs', name: "TabProps", component: Tabprops },
    { path: '/react-datepicker', name: "react-datepicker", component: ReactDatepicker },
    { path: '/loader', name: "loader", component: LoaderProps },
    { path: '/google-map', name: "googlemap", component: MapContainer },
    { path: '/use-callbackhook', name: "usecallback", component: Callbackhook },
    { path: '/use-memo', name: "usememo", component: Memo },
    { path: '/autocomplete', name: "autocomplete", component: Autocomplete },
    { path: '/image-preview', name: "image-preview", component: ImageUpload },
    { path: '/videoplayer', name: "VideoPlayer", component: VideoPlayer },

]

export default routes;
