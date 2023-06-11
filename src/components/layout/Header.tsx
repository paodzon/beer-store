"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  MenuList,
  MenuHandler,
  Menu,
  MenuItem,
} from "@material-tailwind/react";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { signOutUser } from "@/actions/authActions";
import { useRouter, usePathname } from "next/navigation";
import { protectedRoutes } from '@/utils/constants';
import { toast } from "react-hot-toast";

const Header: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname();


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList: React.ReactNode = (
    <ul className="mb-4 mt-5 flex flex-row items-center gap-6 lg:mb-0 lg:mt-0 lg:items-center lg:gap-5 md:flex-col sm:!mt-10">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/"
          className="flex items-center font-semibold hover:text-secondary"
        >
          Products
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/cart"
          className="flex items-center justify-center gap-2 hover:text-secondary"
        >
          <p className="font-semibold">View Cart</p>
        </Link>
      </Typography>

      <div className="hidden lg:block w-full">
        <Button

          onClick={async () => {
            await toast.promise(
              dispatch(signOutUser()),
               {
                 loading: 'Logging out...',
                 success: <b>Logout Success!</b>,
                 error: <b>Error! Please try again.</b>,
               }
             );
            router.refresh();
          }}
        >
          <span>Sign out</span>
        </Button>
      </div>
      <div className="block lg:hidden">
        <Menu>
          <MenuHandler>
            <div className="border border-primary rounded-[50%] h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
              <p className="text-black font-bold">{'P' ?? ''}</p>
            </div>
          </MenuHandler>
          <MenuList>
            <MenuItem
              className="flex items-center gap-2 "
              onClick={async () => {
                await toast.promise(
                  dispatch(signOutUser()),
                   {
                     loading: 'Logging out...',
                     success: <b>Logout Success!</b>,
                     error: <b>Error! Please try again.</b>,
                   }
                 );
                router.refresh();
              }}
            >
              <Typography variant="small" className="font-normal">
                Sign Out
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </ul>
  );

  if(!protectedRoutes.includes(pathName)) return;

  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer ml-5 py-1 text-xl font-bold"
        >
          Brew Haven
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 block lg:hidden">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent hidden lg:block"
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
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
};

export default Header;
