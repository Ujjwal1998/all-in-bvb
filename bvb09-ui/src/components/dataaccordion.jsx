import React, { useState } from "react";
function DataAccordion({ details }) {
  const cards = details.filter((val, idx) => val.type == "Card");
  const subs = details.filter((val, idx) => val.type == "subst");
  console.log(cards);
  return (
    <>
      <div className=" text-white ">
        <div>
          <div className="text-sm">Cards</div>
          {cards.map((card, idx) => {
            return (
              <div className="text-xs" key={idx}>
                {card.time.elapsed}' {card.player.name} - {card.detail}
              </div>
            );
          })}
          <div className="text-sm">Substitutions</div>
          {subs.map((sub, idx) => {
            return (
              <div className="text-xs" key={idx}>
                {sub.time.elapsed}' {sub.player.name} {"<->"} {sub.assist.name}
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default DataAccordion;
