import React, { useState } from "react";
import Table from "../common/Table";
import Form from "../common/Form";

const data = [
  {
    Name: "Mercury",
    LengthOfDay: "59 days",
    LengthOfYear: "88 days",
    Diameter: "4,879 km",
    id: "1",
  },
  {
    Name: "Venus",
    LengthOfDay: "244 days",
    LengthOfYear: "225 days",
    Diameter: "12,104 km",
    id: "2",
  },
  {
    Name: "Earth",
    LengthOfDay: "1 day",
    LengthOfYear: "365 days",
    Diameter: "12,756 km",
    id: "3",
  },
];

const columns = Object.keys(data[0]);

const Planets = () => {
  const [planets, setPlanets] = useState(data);

  const handleAppPlanet = (planetData) => {
    setPlanets([...planets, planetData]);
  };

  const getInitialPlanetsData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const handleRemovePlanet = (id) => {
    setPlanets(planets.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Planets</h1>
      <Table
        data={planets}
        columns={columns}
        tableDescriptor="Planets"
        handleDelete={handleRemovePlanet}
      />
      <Form
        initialData={getInitialPlanetsData()}
        columns={columns}
        onAddData={handleAppPlanet}
      />
    </div>
  );
};

export default Planets;
