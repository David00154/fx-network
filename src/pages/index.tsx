import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import Head from "next/head";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Banner from "../components/base/Banner";
import Feature1 from "../components/base/Feature1";
import Feature2 from "../components/base/Feature2";
import Pricing from "../components/base/Pricing";
import Testimony from "../components/base/Testimony";
import Footer from "../components/base/Footer";

const Index = () => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <>
      <Banner />
      <Feature1 />
      <Feature2 />
      <Pricing />
      <Testimony />
      <Footer />
    </>
  );
};

export default Index;
