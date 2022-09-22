import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login2 from './app/component/test2/Login2';


const loading = (
  <div className="text-center">
    <div className="">Loading...</div>
  </div>
)

// Layouts
const DefaultLayout = lazy(() => import('./app/layouts/Layout'))

// Pages
const Login = lazy(() => import('./app/authentication/login/Login'));
const Register = lazy(() => import('./app/authentication/ragister/Ragister'));


const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" element={<DefaultLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ragister" element={<Register />} />
          <Route path="/login2" element={<Login2 />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
