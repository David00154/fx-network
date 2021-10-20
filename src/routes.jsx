// import
import Dashboard from "./views/Dashboard/Dashboard.jsx";
import Tables from "./views/Dashboard/Tables.jsx";
import Billing from "./views/Dashboard/Billing.jsx";
import RTLPage from "./views/RTL/RTLPage.jsx";
import Profile from "./views/Dashboard/Profile.jsx";
import Deposit from "./views/Dashboard/Deposit.jsx";
import Withdraw from "./views/Dashboard/Withdraw.jsx";
import {supabase} from "./database"
// import SignIn from "./views/Pages/SignIn.jsx";
// import SignUp from "./views/Pages/SignUp.jsx";
//
//
// const isAdmin = () => {
//   const user = supabase.auth.user()
//   supabase
//     .from('Profile')
//     .select('*')
//     .eq("user_id", user.id)
//     .then(({data: Profile, error}) => {
//       console.log(error)
//       if(error) {
//         alert(`Internal Server Error ${error.message}`)
//         return "false"
//       } else if(Profile[0]) {
//         console.log(Profile[0])
//         return "true"
//       }
//     })
//     .catch(e => {
//       console.log(e)
//     })
// }
// console.log(isAdmin())
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
  
  {
    name: "ADMIN",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/update-user",
        name: "Update user",
        rtlName: "لوحة القيادة",
        icon: () => <></>,
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
