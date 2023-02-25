import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Error from '../Component/Error/Error'
import Shop from '../Component/Shop/Shop'
import Home from '../Component/Home/Home'
import NavbarMain from '../Component/Navbar/NavbarMain'
import FooterMain from '../Component/Footer/FooterMain'
import SignIn from '../Component/Registration/SignIn'
import SignUp from '../Component/Registration/SignUp'
import PlaneCare from '../Component/PlaneCare/PlaneCare'
import Blogs from '../Component/Blogs/Blogs'


export default function RouterMain() {
    return (
        <div>
            <NavbarMain />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/blog' element={<Blogs />} />
                <Route path='/planecare' element={<PlaneCare />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='*' element={<Error />} />

                <Route path='/' element={<Navigate to={'/home'} />} />
            </Routes>
            <FooterMain />
        </div>
    )
}
