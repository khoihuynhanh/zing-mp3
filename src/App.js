import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import { Home, Login, Public, Personal } from './pages/public/index'
import paths from './ultis/paths'

import * as actions from './store/actions'
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [])

  return (
    <div>
      <div>
        <Routes>
          <Route path={paths.PUBLIC} element={<Public />} >
            <Route path={paths.HOME} element={<Home />} />
            <Route path={paths.LOGIN} element={<Login />} />
            <Route path={paths.MY_MUSIC} element={<Personal />} />
          </Route>
        </Routes>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  )
}

export default App