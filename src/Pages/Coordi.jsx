import React from "react";
import DefaultPage from "../components/DefaultPage";
import CoordiLayout from "../components/CoordiCard/CoordiLayout";
import { homeNavigation } from "../constants";

const Coordi = () => {
  return (
    <DefaultPage nav={homeNavigation}>
      <CoordiLayout />
    </DefaultPage>
  );
};

export default Coordi;
