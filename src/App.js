import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


const loading = (
  <div className="text-center">
    <div className="">Loading...</div>
  </div>
)

// Layouts
const DefaultLayout = lazy(() => import('./app/layouts/Layout'))

// Pages
const Login = lazy(() => import('./app/pages/login/Login'));
const Register = lazy(() => import('./app/pages/ragister/Ragister'));
const Page404 = lazy(() => import('./app/pages/page404/Page404'));


const App=()=> {
  
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/"  element={<DefaultLayout/>} />
            <Route path="/login" element={ <Login/>} />
            <Route path="/ragister" element={ <Register/>}/>
            {/* <Route path="*" element={<Page404/>} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    ) 
}

export default App
