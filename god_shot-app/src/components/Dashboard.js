import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Dashboard({ inputsArray }) {
  return (
    <div className="Dashboard">
      <section>
        <h2>You Last Shot</h2>
        <div>
          {inputsArray.length !== 0
            ? inputsArray.map((item) => (
                <div key={uuidv4()} className="shotResults">
                  <p>Machine:{item.machine}</p>
                  <p>Grinder:{item.grinder}</p>
                  <p>Coffee:{item.coffee}</p>
                  <p>Coffee In (g):{item.coffeeIn}</p>
                  <p>Grind Setting:{item.grindSetting}</p>
                  <p>Brew Time (seconds):{item.brewTime}</p>
                  <p>Coffee Out:{item.coffeeOut}</p>
                  <p>Extraction Result:{item.extraction}</p>
                  <p>Taste Profile:{item.detailsInput}</p>
                </div>
              ))
            : <div>You haven't pulled any shots yet</div>}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
