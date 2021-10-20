// import
import Dashboard from "./views/Dashboard/Dashboard.jsx";
import Tables from "./views/Dashboard/Tables.jsx";
import Billing from "./views/Dashboard/Billing.jsx";
import RTLPage from "./views/RTL/RTLPage.jsx";
import Profile from "./views/Dashboard/Profile.jsx";
import Deposit from "./views/Dashboard/Deposit.jsx";
import Withdraw from "./views/Dashboard/Withdraw.jsx";
import {supabase} from "./database"
// console.log("User: ", supabase.auth.user())
// import SignIn from "./views/Pages/SignIn.jsx";
// import SignUp from "./views/Pages/SignUp.jsx";
//
//
// const isAdmin = () => {
//   const user = supabase.auth.user()
//   let _isAdmin = false;
//   if(user !== null) {
//     supabase
//       .from('Profile')
//       .select('*')
//       .eq("user_id", user.id)
//       .then(({data: Profile, error}) => {
//         console.log(Profile[0])
//           _isAdmin = Profile[0].role
//         })
//         .catch(e => {
//           console.log(e)
//           return false
//         })
//         // return _isAdmin
//     }
//     return _isAdmin
// //
// }
// console.log("ADMIN: ", isAdmin())
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
  // (async () => {
  //     const peck = {
  //       name: "ADMIN",
  //       category: "account",
  //       rtlName: "صفحات",
  //       state: "pageCollapse",
  //       views: [
  //         {
  //           path: "/update-user",
  //           name: "Update user",
  //           rtlName: "لوحة القيادة",
  //           icon: () => <></>,
  //           secondaryNavbar: true,
  //           component: Profile,
  //           layout: "/dashboard",
  //         },
  //       ],
  //     }
  //     const user = supabase.auth.user()
  //       if(user !== null) {
  //       let {data: Profile, error} = await supabase
  //               .from('Profile')
  //               .select('*')
  //               .eq("user_id", user.id)
  //       if(Profile[0].role === "user") {
  //         console.log("User")
  //         return peck
  //       } else {
  //         console.log("Admin")
  //         return 
  //       }
  //       }
  //   })()
];
export default dashRoutes;
