import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/ClipLoader";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className=" font-bold uppercase"
      onClick={() => loginWithRedirect()}
    >
      login
    </button>
  );
};

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="uppercase self-center text-tech font-bold hover:text-blue-800 transition duration-150"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      logout
    </button>
  );
};

export const UserButton = ({ toggle }) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  return (
    <div className="text-tech text-sm font-bold desktop:pl-7">
      {isLoading ? (
        <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
          ...
        </svg>
      ) : isAuthenticated ? (
        <Link to="/user-area" onClick={toggle}>
          {user.nickname}
        </Link>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export const MobileMenuButton = ({ toggle }) => {
  return (
    <div className="pl-4 h-full flex flex-1 items-center desktop:hidden">
      <button onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

const BaseNavbarButton = ({ children, login }) => {
  return (
    <button
      onClick={login}
      className="text-tech font-bold uppercase desktop:pl-6 hover:text-blue-800 transition duration-150"
    >
      {children}
    </button>
  );
};

export const UserAreaButton = ({ close }) => {
  const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();

  return (
    <>
      {isLoading ? (
        <BaseNavbarButton>
          <PulseLoader />
        </BaseNavbarButton>
      ) : isAuthenticated ? (
        <BaseNavbarButton>
          <Link to="/user-area" onClick={close}>
            {user.nickname}
          </Link>
        </BaseNavbarButton>
      ) : (
        <BaseNavbarButton login={() => loginWithRedirect()}>
          login
        </BaseNavbarButton>
      )}
    </>
  );
};

export const DesktopNavLink = ({ children, location }) => {
  return (
    <Link
      className="block border-t-2 border-opacity-0 border-black hover:border-opacity-50 py-1 transition duration-200"
      to={`/${location}`}
    >
      {children}
    </Link>
  );
};
