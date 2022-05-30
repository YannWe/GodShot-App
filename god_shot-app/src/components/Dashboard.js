import React from "react";
import { v4 as uuidv4 } from "uuid";

function Dashboard({ inputsArray }) {
  
  // calculate ratio result
  function coffeeInVsOut(coffeeIn, coffeeOut) {
    if (coffeeIn / coffeeOut >= 1 && coffeeIn / coffeeOut <= 1.5) {
      return "Ristretto";
    } else if (coffeeIn / coffeeOut >= 1.51 && coffeeIn / coffeeOut <= 2.5) {
      return "Espresso";
    } else {
      return "Lungo";
    }
  }
  // define grind result
  function grindSettingResult(grindSetting) {
    if (grindSetting <= 20) {
      return "Very fine";
    } else if (grindSetting >= 21 && grindSetting <= 40) {
      return "Fine";
    } else if (grindSetting >= 41 && grindSetting <= 60) {
      return "Medium";
    } else {
      return "Too coarse";
    }
  }
// define brew timing
  function brewTimeResult(brewTime) {
    if (brewTime < 19) {
      return "Too short";
    } else if (brewTime > 40) {
      return "Too long";
    } else {
      return "Ideal";
    }
  }
  // define overall result
  function overallResult(brewTime, grindSetting) {
    if (
      brewTimeResult(brewTime) === "Too short" ||
      grindSettingResult(grindSetting) === "Too coarse" ||
      grindSettingResult(grindSetting) === "Medium"
    ) {
      return "Your shot was under extracted";
    } else if (
      brewTimeResult(brewTime) === "Too long" ||
      grindSettingResult(grindSetting) === "Very Fine"
    ) {
      return "Your shot was over extracted";
    } else {
      return "Your shot was balanced";
    }
  }

  return (
    <div className="Dashboard">
      <section>
        <h2>Your Last Three Shots</h2>
        <div>
          {inputsArray.length !== 0 ? (
            inputsArray.slice(-3).map((item) => (
              <div key={uuidv4()} className="overallResults">
                <h2>{overallResult(item.brewTime, item.grindSetting)}</h2>
                <ul className="equipmentResults">
                  <li>Machine: {item.machine}</li>
                  <li>Grinder: {item.grinder}</li>
                  <li>Coffee: {item.coffee}</li>
                </ul>
                <ul className="shotResults">
                  <li>Type: {coffeeInVsOut(item.coffeeIn, item.coffeeOut)}</li>
                  <li>Grind: {grindSettingResult(item.grindSetting)}</li>
                  <li>Brew Time: {brewTimeResult(item.brewTime)}</li>
                  <li>Extraction Taste: {item.extraction}</li>
                </ul>
                <h3 className="tasteProfile">
                  Taste Profile: {item.detailsInput}
                </h3>
              </div>
            ))
          ) : (
            <div className="noShotsMessage">You haven't pulled any shots yet</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
