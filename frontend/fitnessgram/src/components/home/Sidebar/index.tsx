import type { FC } from "react";

import Footer from "../../shared/Footer";
import { memo, useEffect, useState } from "react";
import SignupCard from "./SignupCard";
import WhoToFollow from "./WhoToFollow";
import { useAuth } from "@/context/AuthProvider";

const Sidebar: FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {!isLoggedIn && <SignupCard />}
      <WhoToFollow />
      <Footer />
    </>
  );
};

export default memo(Sidebar);