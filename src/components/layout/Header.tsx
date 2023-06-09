"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {useDispatch} from 'react-redux';
import { signOutUser } from "@/actions/authActions";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const user = useSelector<any>((state) => state.auth.user);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList: React.ReactNode = (
    <ul className="mb-4 mt-5 flex flex-row gap-5 lg:mb-0 lg:mt-0 lg:items-center lg:gap-5 md:flex-col">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/products" className="flex items-center">
          Products
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/cart" className="flex items-center">
          Cart
        </Link>
      </Typography>
      <Button
              onClick={async() => {
                await dispatch(signOutUser());
                router.refresh();
              }}

              size="sm"
              className="bg-primary md:hidden"
            >
              <span>Sign out</span>
            </Button>
    </ul>
  );

  
  if(pathname ==='/login'){
    return <></>
  }

  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Logo
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 block lg:hidden">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent hidden md:block"
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
      <Collapse open={openNav}>
        {navList}
        <Button size="sm" fullWidth className="mb-2 bg-primary" onClick={async() =>{await dispatch(signOutUser());} }>
          <span>Sign Out</span>
        </Button>
      </Collapse>
    </Navbar>
  );
};

export default Header;
