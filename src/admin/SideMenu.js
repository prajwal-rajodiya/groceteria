// import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import {
//   MdLineStyle,
//   MdTimeline,
//   MdOutlineProductionQuantityLimits,
//   MdFeedback,
// } from "react-icons/md";

// import { FiMail } from "react-icons/fi";
// import { BiTrendingUp } from "react-icons/bi";
// import {
//   AiOutlineTransaction,
//   AiOutlineUserDelete,
//   AiOutlineMessage,
// } from "react-icons/ai";
// import "./sidemenu.css";
// import { Link } from "react-router-dom";

// const SideMenu = () => {
//   return (
//     <div>
//       <div className="sidebar-wrapper">
//         <div className="sidebar-menu">
//           <div id="main-menu">
//             <span>
//               Groceteria
//               <GiHamburgerMenu className="menu-icon" />
//             </span>
//           </div>
//           <ul className="sidebar-list">
//             <li className="sidebar-list-items">
//               <span className="elements">
//                 <MdLineStyle />
//                 <Link className="link" to="/adminlogin">
//                   Home
//                 </Link>
//               </span>
//             </li>
//             <li className="sidebar-list-items">
//               <span className="elements">
//                 <MdTimeline />
//                 Analytic
//               </span>
//             </li>
//             <li className="sidebar-list-items">
//               <span className="elements">
//                 <BiTrendingUp />
//                 Sales
//               </span>
//             </li>
//           </ul>

//           <ul className="sidebar-list">
//             <li className="sidebar-list-items">
//               <span className="elements">
//                 <AiOutlineUserDelete />
//                 <Link
//                   to="/userManage"
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   Users
//                 </Link>
//               </span>
//             </li>
//             <li className="sidebar-list-items">
//               <span className="elements">
//                 <MdOutlineProductionQuantityLimits />

//                 <Link
//                   to="/adminManage"
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   Products
//                 </Link>
//               </span>
//             </li>
//             <li className="sidebar-list-items">
//               <span className="elements">
//                 <AiOutlineTransaction />
//                 Transactions
//               </span>
//             </li>
//           </ul>

//           <ul className="sidebar-list">
//             <li className="sidebar-list-items">
//               <span className="elements">
//                 <FiMail />
//                 Mail
//               </span>
//             </li>
//             <li className="sidebar-list-items">
//               <span className="elements">
//                 <MdFeedback />
//                 Feedback
//               </span>
//             </li>
//             <li className="sidebar-list-items">
//               <span className="elements">
//                 <AiOutlineMessage />
//                 Messages
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideMenu;
