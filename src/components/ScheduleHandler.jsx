import ScheduleCard from "./ScheduleCard"
import { useState , useEffect} from "react"
import "./ScheduleHandler.css"


function getDateOnly(date) {
  const [day, month, year] = date.split("/");
  return new Date(`20${year}`, month - 1, day);
}

//  time to minutes 
function getTimeInMinutes(time) {
  const [t, modifier] = time.split(" ");
  let [hours, minutes] = t.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

function ScheduleHandler() {
  const [matches, setmatches] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const query = {
      query: `
        query GetSchedules {
          schedules {
            teamA
            teamB
            status
            winner
            date
            time
          }
        }
      `,
    };

    fetch(
      "https://ap-south-1.cdn.hygraph.com/content/cm5c8fq6d012r07uvhu1pnu6z/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        let fetchedMatches = data?.data?.schedules?.length
          ? data.data.schedules
          : [
              {
                teamA: "Comps",
                teamB: "IT",
                status: "upcoming",
                winner: "Comps",
                date: "12/12/25",
                time: "5:00 PM",
              },
              {
                teamA: "Comps",
                teamB: "IT",
                status: "finished",
                winner: "Comps",
                date: "13/12/25",
                time: "5:00 PM",
              },
              {
                teamA: "Comps",
                teamB: "IT",
                status: "live",
                winner: "Comps",
                date: "13/12/25",
                time: "2:00 PM",
              },
            ];

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        
        fetchedMatches.sort((a, b) => {
          const dateA = getDateOnly(a.date);
          const dateB = getDateOnly(b.date);

          const isPastA = dateA < today;
          const isPastB = dateB < today;

          
          if (isPastA && !isPastB) return 1;
          if (!isPastA && isPastB) return -1;

          if (dateA.getTime() !== dateB.getTime()) {
            return dateA - dateB;
          }

          
          return getTimeInMinutes(a.time) - getTimeInMinutes(b.time);
        });

        setmatches(fetchedMatches);
        setloading(false);
      })
      .catch((err) => {
        console.error("Hygraph error:", err);
        setloading(false);
      });
  }, []);

if (loading){
    return <p className="sh-loading">Loading Schedules Please Wait</p>
}

return<>
<div className="shmain">
 {matches.map((match, index) => (
        <ScheduleCard
          key={index}
          teamA={match.teamA}
          teamB={match.teamB}
          status={match.status}
          winner={match.winner}
          date={match.date}
          time={match.time}
        />
      ))}
    </div>
</>
}
export default ScheduleHandler