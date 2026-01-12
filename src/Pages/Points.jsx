import FetchPointsData from "../components/Points/FetchPointsData";

import DefaultPage from "../components/DefaultPage";
import { pointsnav } from "../constants";
import Leaderboard from "../components/Points/Leaderboards";

const Points = () => {
  return (
    <>
    <DefaultPage nav={pointsnav}>
      <Leaderboard/>
    </DefaultPage>
    </>
  );
};

export default Points;
