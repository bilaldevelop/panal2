// Admin Imports
import MainDashboard from "./views1/admin/default";
import NFTMarketplace from "./views1/admin/marketplace";
import Profile from "./views1/admin/profile";
// import DataTables from "./views1/admin/tables";
// import RTLDefault from "./views1/rtl/default";

// Auth Imports
// import SignIn from "./views1/auth/SignIn";

// Icon Imports
import {
  MdHome,
  // MdOutlineShoppingCart,
  // MdBarChart,
  MdPerson,
  MdLock,
  
} from "react-icons/md";
import {BiDollar, BiCheckDouble,BiUser} from "react-icons/bi";
import { IoFlashSharp } from 'react-icons/io5';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineGift } from 'react-icons/ai';
import { BsChatDots , BsShieldLockFill,BsPersonBoundingBox , BsPeopleFill } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import Usermanagement from "./views1/usermanagement/Usermanagement";
import Emailmanagement from "./views1/Email-Phone Management/Email/Email-PhoneManagement";
import Account from "./views1/Account Information/Account-Information";
import EmailVerification from "./views1/Email-Phone Verification/Email-PhoneVerification";
import PasswordManagement from "./views1/Password Management/PasswordManagement";
import Userverified from "views1/Verifications/Verifications";
import Message from "views1/Massage/Message";
import Deposits from "views1/Deposits/Deposits";
import FlashDeposit from "views1/Flash Deposit/Flash-Deposit";
import Withdraws from "views1/Withdraws/Withdraws";
import Bonuses from "views1/Bonuses/Bonuses";


const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <BsPeopleFill  className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "User Management",
    layout: "/admin",
    path: "user-managemt",
    icon: <BiUser className="h-6 w-6" />,
    component: <Usermanagement />,
  },
  {
    name: "Account Iformation",
    layout: "/admin",
    path: "account",
    icon: <BsPersonBoundingBox className="h-6 w-6" />,
    component: <Account/>,
  },
  {
    name: "Email Management",
    layout: "/admin",
  path: "email-management",
    icon: <MdLock className="h-6 w-6" />,
    component: <Emailmanagement />,
  },


  {
    name: "Email Verification",
    layout: "/admin",
    path: "email-verification",
    icon: <BiCheckDouble className="h-6 w-6" />,
    component: <EmailVerification/>,
  },
  {
    name: "Password Management",
    layout: "/admin",
    path:"password-management",
    icon: <FiKey className="h-6 w-6" />,
    component: <PasswordManagement/>,
  },
  {
    name: "Bonuses",
    layout: "/admin",
    path: "bonuses",
    icon: <AiOutlineGift className="h-6 w-6" />,
    component: <Bonuses/>,
  },
  {
    name: "Verifications",
    layout: "/admin",
    path: "userverified",
    icon: <BsShieldLockFill className="h-6 w-6" />,
    component: <Userverified/>,
  },
  {
    name: "Message",
    layout: "/admin",
    path: "message",
    icon: <BsChatDots className="h-6 w-6" />,
    component: <Message/>,
  },
  {
    name: "Deposits",
    layout: "/admin",
    path: "deposits",
    icon: <BiDollar className="h-6 w-6" />,
    component: <Deposits/>,
  },
 
  {
    name: " Flash Deposit",
    layout: "/admin",
    path: "flash-deposit",
    icon: <IoFlashSharp className="h-6 w-6" />,
    component: < FlashDeposit/>,
  },
  {
    name: " Withdraws",
    layout: "/admin",
  path: "withdraws",
    icon: <RiMoneyDollarCircleLine className="h-6 w-6" />,
    component: < Withdraws/>,
  },
  

  
  
  ];

export default routes;
