import ScheduleCard from "./ScheduleCard";
import { useState, useEffect } from "react";
import "./ScheduleHandler.css";

const STATIC_OUT = [
  // --- OUTDOOR SPORTS: WEEK 01 ---

  // MONDAY – 12/01/26
  {
    id: "out-01",
    teamA: "IT",
    teamB: "ITI",
    date: "12/01/26",
    time: "2:30 PM",
    gender: "boy",
    competition: "Box Cricket",
  },
  {
    id: "out-02",
    teamA: "BMS",
    teamB: "COMP",
    date: "12/01/26",
    time: "2:30 PM",
    gender: "boy",
    competition: "Volleyball",
  },
  {
    id: "out-03",
    teamA: "HS",
    teamB: "EXTC",
    date: "12/01/26",
    time: "3:00 PM",
    gender: "girl",
    competition: "Tug of War",
  },
  {
    id: "out-04",
    teamA: "COMP",
    teamB: "IT",
    date: "12/01/26",
    time: "3:00 PM",
    gender: "girl",
    competition: "Tug of War",
  },
  {
    id: "out-05",
    teamA: "BMS",
    teamB: "ITI",
    date: "12/01/26",
    time: "3:00 PM",
    gender: "girl",
    competition: "Tug of War",
  },
  {
    id: "out-06",
    teamA: "MECH",
    teamB: "DOMF",
    date: "12/01/26",
    time: "3:00 PM",
    gender: "girl",
    competition: "Tug of War",
  },

  // TUESDAY – 13/01/26
  {
    id: "out-07",
    teamA: "BMS",
    teamB: "EXTC",
    date: "13/01/26",
    time: "1:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-08",
    teamA: "ITI",
    teamB: "COMP",
    date: "13/01/26",
    time: "1:30 PM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-09",
    teamA: "BMS",
    teamB: "DOMF",
    date: "13/01/26",
    time: "1:30 PM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-10",
    teamA: "IT",
    teamB: "COMP",
    date: "13/01/26",
    time: "2:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-11",
    teamA: "BMS",
    teamB: "ITI",
    date: "13/01/26",
    time: "2:00 PM",
    gender: "girl",
    competition: "Volleyball",
  },
  {
    id: "out-12",
    teamA: "DOMF",
    teamB: "EXTC",
    date: "13/01/26",
    time: "3:00 PM",
    gender: "boy",
    competition: "Box Cricket",
  },

  // FRIDAY – 16/01/26
  {
    id: "out-13",
    teamA: "DOMF",
    teamB: "ITI",
    date: "16/01/26",
    time: "1:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-14",
    teamA: "COMP",
    teamB: "IT",
    date: "16/01/26",
    time: "1:00 PM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-15",
    teamA: "HS",
    teamB: "DOMF",
    date: "16/01/26",
    time: "1:30 PM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-16",
    teamA: "MECH",
    teamB: "HS",
    date: "16/01/26",
    time: "2:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-17",
    teamA: "BMS",
    teamB: "EXTC",
    date: "16/01/26",
    time: "2:00 PM",
    gender: "girl",
    competition: "Volleyball",
  },
  {
    id: "out-18",
    teamA: "DOMF",
    teamB: "MECH",
    date: "16/01/26",
    time: "3:00 PM",
    gender: "girl",
    competition: "Basketball",
  },
 {
    id: "out-19",
    teamA: "BMS",
    teamB: "DOMF",
    date: "19/01/26",
    time: "1:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-20",
    teamA: "IT",
    teamB: "HS",
    date: "19/01/26",
    time: "2:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-21",
    teamA: "DOMF",
    teamB: "COMP",
    date: "19/01/26",
    time: "2:30 PM",
    gender: "girl",
    competition: "Volleyball",
  },
  {
    id: "out-22",
    teamA: "DOMF",
    teamB: "BMS",
    date: "19/01/26",
    time: "2:30 PM",
    gender: "boy",
    competition: "Box Cricket",
  },
  {
    id: "out-23",
    teamA: "COMP",
    teamB: "HS",
    date: "19/01/26",
    time: "3:30 PM",
    gender: "boy",
    competition: "Volleyball",
  },

  // TUESDAY – 20/01/26
  {
    id: "out-24",
    teamA: "COMP",
    teamB: "HS",
    date: "20/01/26",
    time: "1:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-25",
    teamA: "EXTC",
    teamB: "ITI",
    date: "20/01/26",
    time: "2:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-26",
    teamA: "DOMF",
    teamB: "IT",
    date: "20/01/26",
    time: "2:30 PM",
    gender: "girl",
    competition: "Volleyball",
  },
  {
    id: "out-27",
    teamA: "MECH",
    teamB: "BMS",
    date: "20/01/26",
    time: "2:30 PM",
    gender: "boy",
    competition: "Box Cricket",
  },
  {
    id: "out-28",
    teamA: "MECH",
    teamB: "IT",
    date: "20/01/26",
    time: "3:30 PM",
    gender: "boy",
    competition: "Volleyball",
  },
  {
    id: "out-29",
    teamA: "ITI",
    teamB: "DOMF",
    date: "20/01/26",
    time: "3:30 PM",
    gender: "girl",
    competition: "Box Cricket",
  },

  // WEDNESDAY – 21/01/26
  {
    id: "out-30",
    teamA: "BMS",
    teamB: "ITI",
    date: "21/01/26",
    time: "1:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-31",
    teamA: "COMP",
    teamB: "MECH",
    date: "21/01/26",
    time: "2:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-32",
    teamA: "BMS",
    teamB: "HS",
    date: "21/01/26",
    time: "2:30 PM",
    gender: "girl",
    competition: "Volleyball",
  },
  {
    id: "out-33",
    teamA: "COMP",
    teamB: "HS",
    date: "21/01/26",
    time: "2:30 PM",
    gender: "boy",
    competition: "Box Cricket",
  },
  {
    id: "out-34",
    teamA: "EXTC",
    teamB: "HS",
    date: "21/01/26",
    time: "3:30 PM",
    gender: "boy",
    competition: "Volleyball",
  },

  // THURSDAY – 22/01/26
  {
    id: "out-35",
    teamA: "IT",
    teamB: "MECH",
    date: "22/01/26",
    time: "1:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-36",
    teamA: "EXTC",
    teamB: "ITI",
    date: "22/01/26",
    time: "2:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-37",
    teamA: "HS",
    teamB: "EXTC",
    date: "22/01/26",
    time: "2:30 PM",
    gender: "girl",
    competition: "Volleyball",
  },

  // FRIDAY – 23/01/26
  {
    id: "out-38",
    teamA: "ITI",
    teamB: "IT",
    date: "23/01/26",
    time: "1:00 PM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-39",
    teamA: "ITI",
    teamB: "COMP",
    date: "23/01/26",
    time: "2:30 PM",
    gender: "boy",
    competition: "Box Cricket",
  },
  {
    id: "out-40",
    teamA: "BMS",
    teamB: "MECH",
    date: "23/01/26",
    time: "4:30 PM",
    gender: "boy",
    competition: "Field Football",
  },

  // SATURDAY – 24/01/26
  {
    id: "out-41",
    teamA: "BMS",
    teamB: "HS",
    date: "24/01/26",
    time: "4:30 PM",
    gender: "boy",
    competition: "Field Football",
  },

  // SUNDAY – 25/01/26
  {
    id: "out-42",
    teamA: "COMP",
    teamB: "ITI",
    date: "25/01/26",
    time: "4:30 PM",
    gender: "boy",
    competition: "Field Football",
  },
  {
    id: "out-43",
    teamA: "MECH",
    teamB: "EXTC",
    date: "25/01/26",
    time: "4:30 PM",
    gender: "boy",
    competition: "Field Football",
  },
{
    id: "out-44",
    teamA: "COMP",
    teamB: "IT",
    date: "26/01/26",
    time: "11:00 AM",
    gender: "boy",
    competition: "Field Football",
  },

  // TUESDAY – 27/01/26
  {
    id: "out-45",
    teamA: "DOMF",
    teamB: "BMS",
    date: "27/01/26",
    time: "12:30 PM",
    gender: "boy",
    competition: "Kabaddi",
  },
  {
    id: "out-46",
    teamA: "EXTC",
    teamB: "ITI",
    date: "27/01/26",
    time: "1:00 PM",
    gender: "boy",
    competition: "Kabaddi",
  },
  {
    id: "out-47",
    teamA: "COMP",
    teamB: "HS",
    date: "27/01/26",
    time: "1:30 PM",
    gender: "boy",
    competition: "Kabaddi",
  },
  {
    id: "out-48",
    teamA: "IT",
    teamB: "MECH",
    date: "27/01/26",
    time: "4:30 PM",
    gender: "boy",
    competition: "Field Football",
  },

  // WEDNESDAY – 28/01/26
  {
    id: "out-49",
    teamA: "SF 1",
    teamB: "SF 2",
    date: "28/01/26",
    time: "10:00 AM",
    gender: "boy",
    competition: "Box Cricket",
  },
  {
    id: "out-50",
    teamA: "SF 1",
    teamB: "SF 2",
    date: "28/01/26",
    time: "10:30 AM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-51",
    teamA: "SF 1",
    teamB: "SF 2",
    date: "28/01/26",
    time: "12:00 PM",
    gender: "girl",
    competition: "Volleyball",
  },
  {
    id: "out-52",
    teamA: "IT",
    teamB: "HS",
    date: "28/01/26",
    time: "3:00 PM",
    gender: "boy",
    competition: "Box Cricket",
  },

  // THURSDAY – 29/01/26
  {
    id: "out-53",
    teamA: "THIRD PLACE",
    teamB: "",
    date: "29/01/26",
    time: "10:00 AM",
    gender: "boy",
    competition: "Box Cricket",
  },
  {
    id: "out-54",
    teamA: "THIRD PLACE",
    teamB: "",
    date: "29/01/26",
    time: "10:30 AM",
    gender: "girl",
    competition: "Basketball",
  },
  {
    id: "out-55",
    teamA: "THIRD PLACE",
    teamB: "",
    date: "29/01/26",
    time: "11:00 AM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-56",
    teamA: "SF 1",
    teamB: "SF 2",
    date: "29/01/26",
    time: "3:30 PM",
    gender: "boy",
    competition: "Volleyball",
  },
  {
    id: "out-57",
    teamA: "HS",
    teamB: "EXTC",
    date: "29/01/26",
    time: "4:30 PM",
    gender: "boy",
    competition: "Field Football",
  },

  // FRIDAY – 30/01/26
  {
  id: "out-58",
  teamA: "FINAL",
  teamB: "FINAL / THIRD PLACE",
  date: "30/01/26",
  time: "10:00 AM",
  gender: "boy",
  competition: "Box Cricket",
},
{
  id: "out-59",
  teamA: "THIRD PLACE",
  teamB: "THIRD PLACE",
  date: "30/01/26",
  time: "10:30 AM",
  gender: "girl",
  competition: "Basketball",
},
{
  id: "out-60",
  teamA: "FINAL",
  teamB: "FINAL",
  date: "30/01/26",
  time: "11:00 AM",
  gender: "boy",
  competition: "Basketball",
},
{
  id: "out-61",
  teamA: "FINAL",
  teamB: "FINAL",
  date: "30/01/26",
  time: "12:30 PM",
  gender: "boy",
  competition: "Kabaddi",
},
{
  id: "out-62",
  teamA: "THIRD PLACE",
  teamB: "THIRD PLACE",
  date: "30/01/26",
  time: "4:30 PM",
  gender: "boy",
  competition: "Field Football",
},

// SATURDAY – 31/01/26
{
  id: "out-63",
  teamA: "FINAL",
  teamB: "FINAL",
  date: "31/01/26",
  time: "10:00 AM",
  gender: "girl",
  competition: "Basketball",
},
{
  id: "out-64",
  teamA: "FINAL",
  teamB: "FINAL",
  date: "31/01/26",
  time: "3:30 PM",
  gender: "boy",
  competition: "Volleyball",
},

];
const STATIC_IND = [
  // --- TABLE TENNIS DUOS (GIRLS) — 16/01/26 ---
  {
    id: "in-01",
    teamA: "Advika & Zuha (DOMF)",
    teamB: "Alice & Erika (BMS)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "girl",
    competition: "Table Tennis Duo",
  },
  {
    id: "in-02",
    teamA: "Siddhija & Khadija (DOMF)",
    teamB: "Carrisa & Harguneet (BMS)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "girl",
    competition: "Table Tennis Duo",
  },
  {
    id: "in-03",
    teamA: "Sana & Tanishka (MECH)",
    teamB: "Angeline & Danica (BMS)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "girl",
    competition: "Table Tennis Duo",
  },
  {
    id: "in-04",
    teamA: "Sahithi & Veena (MECH)",
    teamB: "Pearl & Roshni (BMS)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "girl",
    competition: "Table Tennis Duo",
  },
  {
    id: "in-05",
    teamA: "Siya & Ocina (EXTC)",
    teamB: "BYE",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "girl",
    competition: "Table Tennis Duo",
  },

  // --- CARROM SINGLES (BOYS) — 16/01/26 ---
  {
    id: "in-06",
    teamA: "Domnic Fernandes (HS)",
    teamB: "Aditya (DOMF)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "boy",
    competition: "Carrom Singles",
  },
  {
    id: "in-07",
    teamA: "Sahil S (HS)",
    teamB: "Abdullah (COMPS)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "boy",
    competition: "Carrom Singles",
  },
  {
    id: "in-08",
    teamA: "Dhurup (HS)",
    teamB: "Anas Qureshi (EXTC)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "boy",
    competition: "Carrom Singles",
  },
  {
    id: "in-09",
    teamA: "Vinayak (HS)",
    teamB: "Brian (BMS)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "boy",
    competition: "Carrom Singles",
  },
  {
    id: "in-10",
    teamA: "Dallin (HS)",
    teamB: "Hemesh Chopade (IT)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "boy",
    competition: "Carrom Singles",
  },
  {
    id: "in-11",
    teamA: "Krish (HS)",
    teamB: "Anirudha (ITI)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "boy",
    competition: "Carrom Singles",
  },
  {
    id: "in-12",
    teamA: "Romuald (HS)",
    teamB: "Nairn (DOMF)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "boy",
    competition: "Carrom Singles",
  },
  {
    id: "in-13",
    teamA: "Macquin (HS)",
    teamB: "Christopher (COMPS)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "boy",
    competition: "Carrom Singles",
  },
  {
    id: "in-14",
    teamA: "Joel (DOMF)",
    teamB: "Dwayne (HS)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "boy",
    competition: "Carrom Singles",
  },
  {
    id: "in-15",
    teamA: "Jay (DOMF)",
    teamB: "Nabeel (MECH)",
    date: "16/01/26",
    time: "1:15 PM",
    gender: "boy",
    competition: "Carrom Singles",
  },
];



function getDateOnly(date) {
  const [day, month, year] = date.split("/");
  return new Date(`20${year}`, month - 1, day);
}

function getTimeInMinutes(time) {
  const [t, modifier] = time.split(" ");
  let [hours, minutes] = t.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

// NEW: classify match time
function getMatchStatus(match) {
  const matchDate = getDateOnly(match.date);
  const today = new Date();

  // remove time from today
  today.setHours(0, 0, 0, 0);

  if (matchDate < today) return "PREVIOUS";
  if (matchDate.getTime() === today.getTime()) return "CURRENT";
  return "UPCOMING";
}

function ScheduleHandler() {
  // combine both once for CMS syncing
  const [matches, setMatches] = useState([
    ...STATIC_OUT,
    ...STATIC_IND,
  ]);

  const [loading, setLoading] = useState(true);

  // UI states
  const [sportTab, setSportTab] = useState("OUT"); // OUT | IND
  const [timeTab, setTimeTab] = useState("CURRENT"); // PREVIOUS | CURRENT | UPCOMING

  const fetchWinners = async () => {
    try {
      const res = await fetch(
        "https://ap-south-1.cdn.hygraph.com/content/cm5c8fq6d012r07uvhu1pnu6z/master",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `
              query GetWinners {
                schedules {
                  matchid
                  winner
                }
              }
            `,
          }),
        }
      );

      const json = await res.json();

      if (json.errors) {
        console.error("GraphQL errors:", json.errors);
        return;
      }

      const winnersFromCMS = json.data?.schedules ?? [];

      setMatches((prev) =>
        prev.map((match) => {
          const cmsMatch = winnersFromCMS.find(
            (m) => m.matchid === match.id
          );
          return cmsMatch?.winner
            ? { ...match, winner: cmsMatch.winner }
            : match;
        })
      );
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWinners();
    const interval = setInterval(fetchWinners, 30000);
    return () => clearInterval(interval);
  }, []);

  
  const visibleMatches = matches
    // OUT / IND
    .filter((m) =>
      sportTab === "OUT"
        ? STATIC_OUT.some((o) => o.id === m.id)
        : STATIC_IND.some((i) => i.id === m.id)
    )
    // PREVIOUS / CURRENT / UPCOMING
    .filter((m) => getMatchStatus(m) === timeTab)
    // SORT
    .sort((a, b) => {
      const dateA = getDateOnly(a.date);
      const dateB = getDateOnly(b.date);

      if (dateA.getTime() !== dateB.getTime()) {
        return dateA - dateB;
      }

      return getTimeInMinutes(a.time) - getTimeInMinutes(b.time);
    });

  if (loading) {
    return <p className="sh-loading">Loading Schedules Please Wait</p>;
  }

  return (
    <div className="sh-wrapper">
  
{/* Tabs Row */}
<div className="tabs-header">
{/* Tabs Row */}
<div className="tabs-header">
  {/* Sport Tabs */}
  {/* Sport Tabs */}
<div className="tabs-container">
  <div className="tabs primary">
    <button
      className={`tab ${sportTab === "OUT" ? "active" : ""}`}
      onClick={() => setSportTab("OUT")}
    >
      Outdoor
    </button>
    <button
      className={`tab ${sportTab === "IND" ? "active" : ""}`}
      onClick={() => setSportTab("IND")}
    >
      Indoor
    </button>
  </div>

  {/* Time Tabs */}
  <div className="tabs secondary">
    <button
      className={`tab ${timeTab === "PREVIOUS" ? "active" : ""}`}
      onClick={() => setTimeTab("PREVIOUS")}
    >
      Previous
    </button>
    <button
      className={`tab ${timeTab === "CURRENT" ? "active" : ""}`}
      onClick={() => setTimeTab("CURRENT")}
    >
      Current
    </button>
    <button
      className={`tab ${timeTab === "UPCOMING" ? "active" : ""}`}
      onClick={() => setTimeTab("UPCOMING")}
    >
      Upcoming
    </button>
  </div>
</div>

</div>

</div>

 


      {/* Cards */}
      <div className="shmain">
        {visibleMatches.length === 0 ? (
          <p className="sh-empty">No matches found</p>
        ) : (
          visibleMatches.map((match) => (
            <ScheduleCard
              key={match.id}
              teamA={match.teamA}
              teamB={match.teamB}
              date={match.date}
              time={match.time}
              gender={match.gender}
              competition={match.competition}
              winner={match.winner}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ScheduleHandler;
