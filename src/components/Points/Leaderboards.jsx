import { PlayerCard } from "./PlayerCard";
import "./Leaderboards.css";
import { useState, useEffect } from "react";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        {
          points {
            department
            point
            image
          }
        }
      `;

      try {
        const response = await fetch(
          "https://ap-south-1.cdn.hygraph.com/content/cm5c8fq6d012r07uvhu1pnu6z/master",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          }
        );

        const result = await response.json();


        const formatted = result.data.points.map((item, index) => ({
          _id: index,
          name: item.department,
          totalScore: item.point,
          image: item.image
        }));

        
        const sorted = [...formatted].sort((a, b) => b.totalScore - a.totalScore);

        setLeaderboardData(sorted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  if (loading) {
    return <div className="text-center text-lg font-medium">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">Error: {error}</div>;
  }

 
  const topThree = leaderboardData.slice(0, 3);
  const restOfPlayers = leaderboardData.slice(3);

  return (
    <>
      <div className="leaderboard-container">
        <div className="leaderboard-page">
          <div className="main-container">
            
            <div className="podium-section">
              <h2 className="podium-title">Ranking</h2>
              <div className="podium-grid">
               
                <div className="podium-second">
                  {topThree[1] && <PlayerCard {...topThree[1]} isPodium rank={2}  />}
                </div>

                <div className="podium-first">
                  {topThree[0] && <PlayerCard {...topThree[0]} isPodium rank={1} />}
                </div>

                <div className="podium-third">
                  {topThree[2] && <PlayerCard {...topThree[2]} isPodium rank={3} />}
                </div>
              </div>
            </div>

           
            <div className="rankings-section">
              <h2 className="rankings-title">All Rankings</h2>
              <div className="rankings-list">
                {restOfPlayers.map((player,index) => (
                  <PlayerCard key={player._id} {...player} rank={index +4} />
                ))}
              </div>
            </div>

                       <div className="stats-footer">
              {/* <div className="stats-container">
                <div className="stats-item">
                  <p className="stats-value">{leaderboardData.length}</p>
                  <p className="stats-label">Total Players</p>
                </div>

                <div className="stats-divider"></div>

                <div className="stats-item">
                  {topThree[0] && (
                    <p className="stats-value">
                      {topThree[0].totalScore.toLocaleString()}
                    </p>
                  )}
                  <p className="stats-label">Highest Score</p>
                </div>

                <div className="stats-divider"></div>

                <div className="stats-item">
                  <p className="stats-value">-</p>
                  <p className="stats-label">Current Day</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
