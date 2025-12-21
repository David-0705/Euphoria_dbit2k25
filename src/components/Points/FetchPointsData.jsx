import React, { useEffect, useState } from "react";
import CardComponent from "../Card/CardComponent";
import { Gradient } from "../design/Services";
import { Rings } from "../design/Hero";
import PointsTable from "./PointsTable";
import "./points.css";
import Section from "../Section";
import GlowingText from "../design/Glowingtext";
import '../Card/card.css';

const FetchPointsData = () => {
  const [data, setData] = useState([]);
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
        setData(result.data.points);
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
    return (
      <div className="text-center text-lg font-medium text-red-500">
        Error: {error}
      </div>
    );
  }

  // Sort 
  const sortedData = [...data].sort((a, b) => b.point - a.point);

  

  const topPoints = sortedData.slice(0, 3);
  const fst = topPoints[0];
  const snd = topPoints[1];
  const trd = topPoints[2];

  const remainingPoints = sortedData.slice(3);

  return (
    <div className="">
      <Section
        className="pt-14 pb-20"
        crosses
        crossesOffset="lg:translate-y-[0rem]"
        customPaddings
      >
        <div className="rotate-40">
          <Gradient />
        </div>
        <div className="relative flex flex-col items-center text-center z-10 ">
          <GlowingText text="Points" fs="56px" />

          {/* Display top 3 points */}
          <div className="flex items-center flex-wrap gap-10 justify-center text-center mb-12 -ml-[90px]">
            <div className="w-[300px] h-[300px] sm:order-2">
              <CardComponent department={fst.department} image={fst.image} />
            </div>
            <div className="w-[250px] h-[250px] sm:order-1">
              <CardComponent department={snd.department} image={snd.image} />
            </div>
            <div className="w-[200px] h-[200px] order-3 sm:order-3">
              <CardComponent department={trd.department} image={trd.image} />
            </div>
          </div>

          <PointsTable rows={remainingPoints} />
        
        </div>
        <Rings />
      </Section>
    </div>
  );
};

export default FetchPointsData;
