import React from 'react'
import styles from './NavbarMain.module.css'
// import { Select } from 'antd';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../../assets/Logo.png'
export default function NavbarMain() {
    // const { Option } = Select;
    const navigate = useNavigate()

    const SignIn = () => {
        navigate('/signin')
    }
    // const handleChange = (value) => {
    //     console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    // };
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.Brand} >
                    <NavLink to="/home">
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>
                <div className={styles.offcanvas}>
                    <div className={styles.Text}>
                        <div><NavLink style={({ isActive }) => ({
                            color: isActive ? '#086F6C' : '#000',
                            borderBottom: isActive ? '1px solid green' : 'none'
                        })} to="/home">Home</NavLink></div>
                        <div><NavLink style={({ isActive }) => ({
                            color: isActive ? '#086F6C' : '#000',
                            borderBottom: isActive ? '1px solid green' : 'none'
                        })} to="/shop">Shop</NavLink></div>

                        <div><NavLink style={({ isActive }) => ({
                            color: isActive ? '#086F6C' : '#000',
                            borderBottom: isActive ? '1px solid green' : 'none'
                        })} to="/planecare">Plane Care</NavLink></div>
                        <div><NavLink style={({ isActive }) => ({
                            color: isActive ? '#086F6C' : '#000',
                            borderBottom: isActive ? '1px solid green' : 'none'
                        })} to="/blog">Blogs</NavLink></div>
                    </div>
                    <div className={styles.Action}>
                        {/* <Select
                            labelInValue
                            defaultValue={{
                                value: 'Football',
                                label: 'Football',
                            }}
                            className={styles.SelectAndt}
                            onChange={handleChange}
                        >
                            <Option value="RUSSIAN">RUSS</Option>
                            <Option value="ENGLISH">ENG</Option>
                        </Select>
                        <Select
                            labelInValue
                            defaultValue={{
                                value: 'English',
                                label: 'English',
                            }}
                            className={styles.SelectAndt}
                            onChange={handleChange}
                        >
                            <Option value="RUSSIAN">RUSS</Option>
                            <Option value="ENGLISH">ENG</Option>
                        </Select> */}
                        <button onClick={SignIn} className={styles.ButtonNavbar}>Kirish</button>
                      
                    </div>
                </div>
                <div className={styles.menu_bar} >
                    <AiOutlineMenu color='#000' />
                </div>
            </div>
            <Outlet />
        </div>
    )
}
