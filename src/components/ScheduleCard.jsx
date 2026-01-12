import React from "react";
import "./schedulecard.css";
import {
  Swords,
  Crown,
  CalendarDays,
  Clock,
  UserRound,
  Trophy
} from "lucide-react";

function ScheduleCard({
  teamA,
  teamB,
  date,
  time,
  gender,
  competition,
  winner
}) {
  return (
    <div className="schedule-card">

      <div className="schedule-title-row">
        <h2 className="schedule-title">
          <Swords className="schedule-icon" />
          {teamA} <span className="vs-text">vs</span> {teamB}
        </h2>

        <span className={`gender-badge ${gender}`}>
          <UserRound size={14} />
          {gender === "girl" ? "Girls" : "Boys"}
        </span>
      </div>

      {/* Competition */}
      <p className="schedule-info competition-info">
        <Trophy className="info-icon" />
        {competition}
      </p>

      <p className="schedule-info">
        <CalendarDays className="info-icon" /> {date}
      </p>

      <p className="schedule-info">
        <Clock className="info-icon" /> {time}
      </p>

      {winner && (
        <p className="winner-text">
          <Crown className="winner-icon" /> Winner: {winner}
        </p>
      )}
    </div>
  );
}

export default ScheduleCard;
