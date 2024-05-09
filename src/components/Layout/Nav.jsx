// import React, { useEffect } from 'react'

// const Nav = ({navBar,setNavBar}) => {
//     const handleNavbar=()=>{
//         setNavBar(!sideBar);
//     };
//     useEffect(()=>{
//         if(window.innerWidth >=1200){
//             setNavBar(true);
//         } else {
//             setNavBar(false);
//         }

//         const handleResize = () =>{
//             if (window.innerWidth >=1200){
//                 setNavBar(true);
//             } else {
//                 setNavBar(false);
//             }
//         };

//         window.addEventListener("resize",handleResize);

//         return () => window.removeEventListener("resize",handleResize);
//     }, []);
//   return (
//     <div className='flex flex-col shadow'>
//         {navBar && <Navba}

//     </div>
    
//   )
// }

// export default Nav

// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav className='flex justify-between px-8 items-center py-4 bg-gray-800'>
       <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center">
      
        <li>
        <a href="#" class="text-white hover:text-gray-300">Home</a>
        </li>
        <li>
          <Link to="/employelist">Employelist</Link>
        </li>
        <li>
          <Link to="/login">Logout</Link>
        </li>
        
        </div>
        </div>
        </nav>
        
      
    
//     <div className="flex items-center gap-x-5 pr-[50px]">
//     <div className="relative ">
//       <button className="text-black cursor-pointer group">
       
//         <div className="absolute top-full right-0 z-10 hidden group-focus:block bg-white rounded-lg shadow-lg w-72 h-64">
//           <ul className="py-4 mt-8">
//             <li>
//               <a href="#" className="block px-4 py-4 text-gray-800 font-semibold hover:bg-gray-100">
//                 Profile
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-4 py-4 text-gray-800 font-semibold hover:bg-gray-100">
//                 Settings
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-4 py-4 text-gray-800 font-semibold hover:bg-gray-100">
//                 Log Out
//               </a>
//             </li>
//           </ul>
//         </div>
//       </button>
//     </div>
//   </div>
  );
};

export default Navbar;
