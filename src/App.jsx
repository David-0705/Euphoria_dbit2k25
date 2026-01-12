
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Points from './Pages/Points';
import Events from './Pages/Events';
import EventRule from './components/Euphoria/eventRule';
import Departments from './Pages/Departments';
import TierSystem from './components/Euphoria/tierListt';
import { departments } from './constants';
import DisplayDept from './components/Department/DisplayDept';
import { EuphoriaEvent } from "./components/services/index";
import { useState, useEffect, } from "react";
import { useParams, useLocation } from 'react-router-dom';
import Instruction from './Pages/Instruction';
import Registration from './Pages/Registration';
import RegistrationFormPage from "./pages/RegistrationFormPage";
import Schedules from "./Pages/Schedule";
import Coordi from './Pages/Coordi';



// import GoogleFormsComponent from './components/Registration_Forms/Forms';



// import Demo from './components/Euphoria/demo';

const EventDetail = ({ data }) => {
  const location = useLocation();
  const { STitle } = location.state || {}; // Ensure `state` is correctly destructured
  const { title } = useParams();
  // if (!STitle) {
  //   console.log('STitle is missing');
  // }
  // console.log('STitle:', STitle); // Log to confirm if `STitle` is received

  


  const event = data?.sportRuleBooks.find(event => event.sportCheck === STitle) ||
                data?.paEvents.find(event => event.paCheck === STitle) ||
                data?.laEvents.find(event => event.laCheck === STitle)||
                data?.indoors.find(event => event.indoorCheck === STitle);
                


  // console.log(event.sportTitle);

  if (!event) {
    return <div>No Event Found</div>;
  }

  return <EventRule data={event} title={title} />;
};

const App = () => {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchEuphoriaEventData = async () => {
      try {
        const res = await EuphoriaEvent();
        // console.log('EuphoriaEvent data:', res);
        setdata(res);
      } catch (error) {
        // console.error('Error fetching EuphoriaEvent data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEuphoriaEventData();
  }, []);

  return (

    // <Routes className="h-screen w-screen bg-['] bg-cover bg-no-repeat bg-center">
   <Routes>

      <Route
        index
        element={
          <>
            <Home />
          </>
        }
      />
      <Route
        path="/schedules"
        element={
          <>
            <Schedules />
          </>
        }
      />
      <Route
        path="/points"
        element={
          <>
            <Points />
          </>
        }
      />
      <Route
        path="/events"
        element={
          <>
            <Events />
          </>
        }
      />
      <Route
        path="/department"
        element={
          <>
            <Departments />
          </>
        }
      />
      <Route
        path="/instruction"
        element={
          <>
            <Instruction/>
          </>
        }
      />
      <Route
        path="/tierlist"
        element={
          <>
            <TierSystem/>
          </>
        }
      />
       <Route
        path="/registration"
        element={
          <>
            <Registration/> 
          </>
        }
      />
      <Route
      path="/coordinators"
      element={
          <>
            <Coordi/> 
          </>
        }
      />

      <Route path="/register/:formKey" element={<RegistrationFormPage />} />

      {/* <Route
        path="/forms"
        element={
          <>
            <GoogleFormsComponent/>
          </>
        }
      /> */}

      {/* <Route path="/" element={<home />} /> */}
      {/* <Route path="/game/:title" element={data?.euphoriaEvents && <Events data={data.euphoriaEvents[0]} />} /> */}
      {/* <Route path="/game/:title" element={data?.euphoriaEvents && <EventRule data={data.euphoriaEvents[0]} />} /> */}
      {/* <Route path="/game/:title" element={
          loading ? <div>Loading...</div> : 
          (data?.euphoriaEvents ? <EventRule data={data.euphoriaEvents[0]} /> : <div>No Data Available</div>)
        } /> */}
      <Route
        path="/game/:title"
        element={
          loading ? <div>Loading...</div> :
            <EventDetail data={data} />
        }
      />

      {departments.map((dept, index) => (
        <Route
          key={index}
          path={dept.url}
          element={
            <>
              <DisplayDept/>
            </>
          }
        />
      ))};
    </Routes>

  );
};

export default App;
