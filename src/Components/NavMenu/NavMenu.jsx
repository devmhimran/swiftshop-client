import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BsCart } from 'react-icons/bs';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { AiOutlineUser } from 'react-icons/ai';
import { signOut } from 'firebase/auth';

const NavMenu = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [user] = useAuthState(auth)
    const logout = () =>{
        signOut(auth);
    }
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                className="p-1 font-medium text-dark"
            >
                <Link to='/' className="flex items-center text-base">Home</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-medium text-dark"
            >
                <Link to='/products' className="flex items-center text-base">Products</Link>
            </Typography>
            {
                user ?
                    <Menu>
                        <MenuHandler>
                            {/* <AiOutlineUser/> */}
                            <IconButton>
                                <span  className="text-base"><AiOutlineUser /></span>         
                            </IconButton>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>
                                <Link to='/dashboard'>Dashboard</Link>
                            </MenuItem>
                            <MenuItem>
                                <span onClick={logout}>Sign out</span>
                            </MenuItem>
                        </MenuList>
                    </Menu> :
                    <Typography
                        as="li"
                        variant="small"
                        className=" font-medium text-dark"
                    >
                        <Link to='/login' className="flex items-center text-base">Login</Link>
                    </Typography>
            }
        </ul>
    );
    return (
        <div className='container max-w-screen-xl lg:mx-auto lg:px-0 px-3 mt-3'>

            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 shadow-none px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Material Tailwind
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Link to='/cart'>
                            <IconButton>
                                <span className="text-base"><BsCart /></span>
                            </IconButton>
                        </Link>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>
            </Navbar>
            <hr />
        </div>
    );
};

export default NavMenu;