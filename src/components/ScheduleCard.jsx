import React from "react";
import "./schedulecard.css";  
import { Swords, Crown, CalendarDays, Clock } from "lucide-react";

function ScheduleCard({ teamA, teamB, date, time, status, winner }) {
  return (
    <div className={`schedule-card`}>
      
      <div className="schedule-title-row">
        <h2 className="schedule-title">
          <Swords className="schedule-icon" />
          {teamA} <span className="vs-text">vs</span> {teamB}
        </h2>

        <span className={`status-badge ${status}`}>
          {status}
        </span>
      </div>

      <p className="schedule-info">
        <CalendarDays className="info-icon" /> {date}
      </p>

      <p className="schedule-info">
        <Clock className="info-icon" /> {time}
      </p>

      {status === "finished" && (
        <p className="winner-text">
          <Crown className="winner-icon" /> Winner: {winner}
        </p>
      )}
    </div>
  );
}

export default ScheduleCard;
