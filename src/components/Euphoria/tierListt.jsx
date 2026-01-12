import React from "react"
import Section from "../Section"
import DefaultPage from "../DefaultPage";
import { Gradient } from '../design/Services';
import { tierlist } from "../../constants";
import './tier.css';

export default function TierSystem() {
 const tiers = [
  {
    title: "Tier 1",
    points: "15, 11, 7",
    categories: [
      {
        name: "SPORTS",
        items: [
          "Field Football Boys",
          "Basketball Boys",
          "Basketball Girls",
          "Box Cricket Boys",
          "Box Cricket Girls",
          "Volleyball Boys",
          "Volleyball Girls",
          "Kabaddi Boys",
          "Dodgeball Girls",
          "Rink Football Girls",
          "Tug Of War Boys",
          "Tug Of War Girls",
        ],
      },
      {
        name: "ATHLETICS",
        items: [
          "4×100 Meters Relay (Boys)",
          "4×400 Meters Relay (Boys)",
          "4×100 Meters Relay (Girls)",
        ],
      },
      {
        name: "FINE ARTS",
        items: ["Shutter Painting", "Pot Painting"],
      },
      {
        name: "PHOTOGRAPHY",
        items: ["Short Film"],
      },
      {
        name: "PERFORMING ARTS",
        items: ["Group Dance", "Fashion Show", "Drama"],
      },
      {
        name: "LITERARY ARTS",
        items: ["Debate Competition (Group)"],
      },
    ],
  },

  {
    title: "Tier 2",
    points: "10, 7, 4",
    categories: [
      {
        name: "SPORTS",
        items: [
          "Chess (Mixed)",
          "Carrom Doubles (Mixed)",
          "Table Tennis Singles (Boys)",
          "Table Tennis Doubles (Boys)",
          "Table Tennis Singles (Girls)",
          "Table Tennis Doubles (Girls)",
          "Carrom Singles (Boys)",
          "Carrom Singles (Girls)",
          "Pickleball Doubles (Boys)",
          "Pickleball Doubles (Girls)",
        ],
      },
      {
        name: "ATHLETICS",
        items: [
          "100 Meters (Boys)",
          "200 Mtrs (Boys)",
          "400 Mtrs (Boys)",
          "800 Mtrs (Boys)",
          "Shot Put (Boys)",
          "Discuss Throw (Boys)",
          "Javelin Throw (Boys)",
          "100 Meters (Girls)",
          "200 Mtrs (Girls)",
          "400 Mtrs (Girls)",
          "Shot Put (Girls)",
          "Discuss Throw (Girls)",
          "Javelin Throw (Girls)",
        ],
      },
      {
        name: "LITERARY ARTS",
        items: ["Debate Competition (Duo)"],
      },
      {
        name: "FINE ARTS",
        items: ["Narrative Knockout", "Act & Art"],
      },
      {
        name: "PERFORMING ARTS",
        items: [
          "Solo Singing (Western)",
          "Solo Singing (Regional)",
          "Duet Singing",
          "Solo Dancing (Western)",
          "Solo Dancing (Regional)",
        ],
      },
    ],
  },

  {
    title: "Tier 3",
    points: "6, 4, 2",
    categories: [
      {
        name: "SPORTS",
        items: [
          "Marathon DBCL (Boys)",
          "Marathon DBCL (Girls)",
        ],
      },
      {
        name: "LITERARY ARTS",
        items: [
          "Elocution Competition",
          "Poetry / Shayari",
          "Open-Mic Competition",
        ],
      },
      {
        name: "FINE ARTS",
        items: ["Tote Bag Painting"],
      },
      {
        name: "PHOTOGRAPHY",
        items: ["Candid Photography", "Reel Making"],
      },
      {
        name: "PERFORMING ARTS",
        items: ["Solo Dance Battle", "Instrumental", "Faculty Talent Show"],
      },
      {
        name: "MEGA AND FUN",
        items: ["Shadows of the Guilty", "Obstacle Odyssey"],
      },
      {
        name: "GAMING",
        items: ["BGMI", "Valorant"],
      },
    ],
  },
];


  return (
    <DefaultPage nav={tierlist}>
    <Section
      className="pt-[6rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings id="event">
      <Gradient />
      <div className="tier-system p-10">
        <h1 className="title h3 m-10">Tier System</h1>
        <div className="tiers">
          {tiers.map((tier, index) => (
            <div key={tier.title} className="tier">
              <div className="tier-header">
                <h2>{tier.title}</h2>
                <p>Points: {tier.points}</p>
              </div>
              <div className="tier-content">
                {tier.categories.map((category) => (
                  <div key={category.name} className="category">
                    <h3>{category.name}</h3>
                    <ul className="tierContentUL">
                      {category.items.map((item) => (
                        <li className="tierContent" key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>   
          ))}
        </div>
      </div>
    </Section >
    </DefaultPage>
  )
}

