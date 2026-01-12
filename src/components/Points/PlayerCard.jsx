import { RankBadge } from "./RankBadge";

export function PlayerCard({ rank, name,  isPodium = false ,totalScore }) {
  if (isPodium) {
    const podiumClass =
      rank === 1
        ? "podium-first-base"
        : rank === 2
        ? "podium-second-base"
        : "podium-third-base";

    return (
      <div className="podium-card">
     
        <div className={`podium-base ${podiumClass}`}>
          <div className="podium-content">
            <RankBadge rank={rank} size="lg" />
            <div>
            </div>
            <div className="podium-info">
              <h3 className="podium-name">{name}</h3>
             {/*  <p className="podium-score">{score.toloacaleString()}</p> */}
              {/* <p className="player-score">{totalScore} Points</p> */}
              
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="player-card">
      <RankBadge rank={rank} />
      <div className="player-info">
        <h3 className="player-name">{name}</h3>
        <p className="player-rank-label">Rank #{rank}</p>
      </div>
      {/* <div className="player-score-section">
        <p className="player-score">{totalScore}</p>
        <p className="player-points-label">points</p>
      </div> */}
    </div>
  );
}