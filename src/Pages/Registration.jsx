import { useNavigate } from "react-router-dom";
import Card from "../components/Card/registrationCard";
import DefaultPage from "../components/DefaultPage";
import { homeNavigation } from "../constants";

import {
  SoloRegionalIcon,
  SoloWesternIcon,
  DanceIcon,
  SportsIcon
} from "../components/Registration_Forms/icons";

export default function RegistrationPage() {
  const navigate = useNavigate();

  return (
    <DefaultPage nav={homeNavigation}>
      <div className="flex flex-wrap justify-center gap-6">
        <Card
          title="Solo Singing (Regional)"
          text="Register for regional solo singing"
          icon={<SoloRegionalIcon />}
          onClick={() => navigate("/register/solo_regional")}
        />

        <Card
          title="Solo Singing (Western)"
          text="Register for western solo singing"
          icon={<SoloWesternIcon />}
          onClick={() => navigate("/register/solo_western")}
        />

        <Card
          title="Group Dance"
          text="Register your dance group"
          icon={<DanceIcon />}
          onClick={() => navigate("/register/group_dance")}
        />

        <Card
          title="Sports"
          text="Register for sports events"
          icon={<SportsIcon />}
          onClick={() => navigate("/register/sports")}
        />
      </div>
    </DefaultPage>
  );
}
