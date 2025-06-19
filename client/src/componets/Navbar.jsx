import React from 'react';
import { IconButton } from '@mui/material';
import { Search, Person, Menu } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../redux/state';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = React.useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center px-[60px] py-[10px] relative sm:px-5 bg-white">
      {/* Logo */}
      <a href="/">
        <img src="/assets/logo.png" alt="logo" className="w-[100px] cursor-pointer" />
      </a>

      

      {/* Right section */}
      <div className="flex items-center gap-5">
        {/* Host button */}
        <a
          href={user ? '/create-listing' : '/login'}
          className="text-[#24355A] font-bold hover:text-[#F8395A] hidden sm:inline"
        >
          Become A Host
        </a>

        {/* Profile / Menu Button */}
        <button
          className="h-[50px] flex items-center px-3 border border-gray-400 rounded-full bg-white gap-2 hover:shadow-md"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: '#969393' }} />
          {!user ? (
            <Person sx={{ color: '#969393' }} />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace('public', '')}`}
              alt="profile"
              className="w-10 h-10 object-cover rounded-full"
            />
          )}
        </button>

        {/* Dropdown Menu */}
        {dropdownMenu && !user && (
          <div className="absolute top-[80px] right-[60px] bg-white w-[200px] p-2 rounded-[20px] border border-gray-200 shadow-lg z-[9999] sm:right-5 flex flex-col">
            <Link to="/login" className="w-full px-4 py-2 text-[#24355A] font-bold hover:text-[#F8395A] hover:bg-gray-100 rounded">Log In</Link>
            <Link to="/register" className="w-full px-4 py-2 text-[#24355A] font-bold hover:text-[#F8395A] hover:bg-gray-100 rounded">Sign Up</Link>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="absolute top-[80px] right-[60px] bg-white w-[200px] p-2 rounded-[20px] border border-gray-200 shadow-lg z-[9999] sm:right-5 flex flex-col">
            <Link to="/my-listings" className="w-full px-4 py-2 text-[#24355A] font-bold hover:text-[#F8395A] hover:bg-gray-100 rounded">My Listings</Link>
            <Link to="/wishlist" className="w-full px-4 py-2 text-[#24355A] font-bold hover:text-[#F8395A] hover:bg-gray-100 rounded">Wish List</Link>
            <Link to="/add-pet" className="w-full px-4 py-2 text-[#24355A] font-bold hover:text-[#F8395A] hover:bg-gray-100 rounded">Add a Pet</Link>
            <button
              onClick={() => dispatch(setLogout())}
              className="text-left w-full px-4 py-2 text-[#24355A] font-bold hover:text-[#F8395A] hover:bg-gray-100 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
