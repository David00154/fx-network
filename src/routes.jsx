// import
import Dashboard from "./views/Dashboard/Dashboard.jsx";
import Tables from "./views/Dashboard/Tables.jsx";
import Billing from "./views/Dashboard/Billing.jsx";
import RTLPage from "./views/RTL/RTLPage.jsx";
import Profile from "./views/Dashboard/Profile.jsx";
import Deposit from "./views/Dashboard/Deposit.jsx";
import Withdraw from "./views/Dashboard/Withdraw.jsx";
// import SignIn from "./views/Pages/SignIn.jsx";
// import SignUp from "./views/Pages/SignUp.jsx";
//
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "./components/Icons/Icons.jsx";

// import {IoNotificationsOutline} from "react-icons"

var dashRoutes = [
  {
    path: "/",
    name: "Dashboard",
    rtlName: "",
    icon: <HomeIcon color="inherit"/>,
    component: Dashboard,
    layout: "/dashboard",
  },
  // {
  //   path: "",
  //   name: "",
  //   rtlName: "",
  //   icon: () => <></>,
  //   component: () => <><h1>Deposit</h1></>,
  //   layout: "/dashboard"
  // },
  {
    path: "/deposit",
    name: "Deposit",
    rtlName: "",
    icon: <CreditIcon color="inherit" />,
    component: Deposit,
    layout: "/dashboard"
  },
  {
    path: "/withdraw",
    name: "Withdraw",
    rtlName: "",
    icon: <CreditIcon color="inherit" />,
    component: Withdraw,
    layout: "/dashboard"
  },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   rtlName: "",
  //   icon: <PersonIcon color="inherit" />,
  //   component: Profile,
  //   layout: "/dashboard"
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   rtlName: "لوحة القيادة",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Tables,
  //   layout: "/admin",
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   rtlName: "لوحة القيادة",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Billing,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  // {
  //   path: "/d",
  //   name: "Text",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: () => <><h1>Pap</h1></>,
  //   layout: "/rtl",
  // },
  {
    name: "ADMIN",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      // {
      //   path: "/signin",
      //   name: "Sign In",
      //   rtlName: "لوحة القيادة",
      //   icon: <DocumentIcon color="inherit" />,
      //   component: SignIn,
      //   layout: "/auth",
      // },
      // {
      //   path: "/signup",
      //   name: "Sign Up",
      //   rtlName: "لوحة القيادة",
      //   icon: <RocketIcon color="inherit" />,
      //   secondaryNavbar: true,
      //   component: SignUp,
      //   layout: "/auth",
      // },
    ],
  },
];
export default dashRoutes;
