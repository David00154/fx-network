import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Banner from "../components/base/Banner";

import Feature1 from "../components/base/Feature1";
import Feature2 from "../components/base/Feature2";
import Feature3 from "../components/base/Feature3";
import Feature4 from "../components/base/Feature4";

import Pricing from "../components/base/Pricing";
import Testimony from "../components/base/Testimony";
import Footer from "../components/base/Footer";
const faker = require("../faker");
const Index = () => {
  const [showChild, setShowChild] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [country, setCountry] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    setShowChild(true);

    setInterval(() => {
      setPopUp(true);
      setCountry(faker.address.country());
      setBalance("$" + faker.finance.amount().split(".").join(",") + 0);
      setTimeout(() => {
        setPopUp(false);
      }, 9000);
      // console.log("faked");
    }, 17555);
  }, []);

  // const

  if (!showChild) {
    return null;
  }
  return (
    <>
      <Banner />
      <Feature1 />
      <Feature3 />
      <Feature2 />
      <Pricing />
      <Feature4 />
      <Testimony />
      {popUp && (
        <Faker text={`Someone from ${country} just earned ${balance}`} />
      )}
      <Footer />
    </>
  );
};

const Faker = ({ text }) => {
  return (
    <div
      style={{
        bottom: "16px",
        left: "0",
        position: "fixed",
        padding: "17px",
        margin: "2rem 1rem",
        fontStyle: "normal",
      }}
    >
      <Alert status="info" variant="solid" fontSize="md">
        <AlertIcon />
        {text}
      </Alert>
    </div>
  );
};


export default Index;
