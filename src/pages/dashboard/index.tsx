import type { ReactElement } from "react";
import Layout from "../../components/dashboard/Layout";
import { SimpleGrid, Flex } from "@chakra-ui/react";
import Stats from "../../components/dashboard/Stats";
import Charts from "../../components/dashboard/Charts";
export default function Index() {
  return (
    <Layout>
      <Flex flexDirection="column" px="10px">
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
          <Stats />
          <Charts />
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}

// Index["getLayout"] = (page: ReactElement) => {
//   return <Layout>{page}</Layout>;
//   // return <>{page}</>;
// };

export async function getServerSideProps() {
  return {
    props: {
      title: "Dashboard",
    },
  };
}
