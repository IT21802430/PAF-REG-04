import type { NextPage } from "next";
import Hero from "./Hero";
import { GridItemEight, GridItemFour, GridLayout } from "../ui/GridLayout";
import Sidebar from "./Sidebar";
import Explore from "../explore";
import { useAuth } from "@/context/AuthProvider";

const Home: NextPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {!isLoggedIn && <Hero />}
      <GridLayout>
        <GridItemEight className="space-y-5">
          <Explore />
        </GridItemEight>
        <GridItemFour>
          <Sidebar />
        </GridItemFour>
      </GridLayout>
    </>
  );
};

export default Home;
