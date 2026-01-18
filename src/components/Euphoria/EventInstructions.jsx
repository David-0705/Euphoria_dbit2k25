import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { slides } from "./slideDetails";
import "./Instruction.css";
import DefaultPage from "../DefaultPage";
import { departments } from "../../constants";

export default function EventInstructions() {
  const { categoryId, eventId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = slides.find(
    (c) => c.key === Number(categoryId)
  );

  const event = category?.events.find((e) =>
    typeof e === "object"
      ? e.id === eventId
      : e
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "") === eventId
  );

  if (!event || !event.instruction) {
    return <h2>Instructions not found</h2>;
  }

  return (
    <DefaultPage nav={departments}>
      <div className="instructions-page">
        <h1 className="event-name">{event.name}</h1>

        <ul className="instruction-list">
          {Array.isArray(event.instruction) ? (
            event.instruction.map((point, index) => (
              <li key={index} className="instruction-point">
                {point}
              </li>
            ))
          ) : (
            <li className="instruction-point">{event.instruction}</li>
          )}
        </ul>
      </div>
    </DefaultPage>
  );
}
