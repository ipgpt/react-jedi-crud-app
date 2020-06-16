
import React, { useState } from 'react';
import Table from '../common/Table';
import Form from '../common/Form';

const data = [
  { Name: 'Mercury', LengthOfDay: '59 days', LengthOfYear: '88 days', Diameter: '4,879 km' },
  { Name: 'Venus', LengthOfDay: '244 days', LengthOfYear: '225 days', Diameter: '12,104 km' },
  { Name: 'Earth', LengthOfDay: '1 day', LengthOfYear: '365 days', Diameter: '12,756 km' }
]

const columns = Object.keys(data[0]);

const Planets = () => {
  const [planets, setPlanets] = useState(data);

  const handleAppPlanet = (planetData) => {
    const data = [...planets, planetData];
    setPlanets(data)
  }

  const getInitialPlanetsData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }

  return (
    <div className="container">
      <h1>Planets</h1>
      <Table
        data={planets}
        columns={columns}
        tableDescriptor="Planets"
      />
      <Form
        initialData={getInitialPlanetsData()}
        columns={columns}
        onAddData={handleAppPlanet}
      />
    </div>
  )
};

export default Planets;
