// Chakra imports
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
// import Configurator from "../components/Configurator/Configurator.jsx";
import Footer from "../components/Footer/Footer.jsx";
// Layout components
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes.jsx";
// Custom Chakra theme
import theme from "../theme/theme.js";
// import FixedPlugin from "../components/FixedPlugin/FixedPlugin.jsx";
// Custom components
import MainPanel from "../components/Layout/MainPanel.jsx";
import PanelContainer from "../components/Layout/PanelContainer.jsx";
import PanelContent from "../components/Layout/PanelContent.jsx";
export default function Dashboard(props) {
  // console.log(props.children)
   const { ...rest } = props;
  // states and functions
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  // ref for main panel div
  const mainPanel = React.createRef();
  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== "/dashboard/full-screen-maps";
  };
  const getActiveRoute = (routes) => {
    
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf('/dashboard' + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/dashboard") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";
  // Chakra Color Mode
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Sidebar
        routes={routes}
        logoText={"Fx Network"}
        display="none"
        sidebarVariant={sidebarVariant}
        {...rest}
        {...routes}
      />
      <MainPanel
        ref={mainPanel}
        px={'10px'}
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        {/*<Portal>*/}
          <AdminNavbar
            onOpen={onOpen}
            logoText={"Fx Network"}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            {...rest}
          />
        {/*</Portal>*/}
        {props.children}
        <Footer />
        {/*<Portal>
          <FixedPlugin
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            onOpen={onOpen}
          />
        </Portal>*/}
        {/*<Configurator
          secondary={getActiveNavbar(routes)}
          isOpen={isOpen}
          onClose={onClose}
          isChecked={fixed}
          onSwitch={(value) => {
            setFixed(value);
          }}
          onOpaque={() => setSidebarVariant("opaque")}
          onTransparent={() => setSidebarVariant("transparent")}
        />*/}
      </MainPanel>
    </ChakraProvider>
  );
}
