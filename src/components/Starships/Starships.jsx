
import React, { useState } from 'react';
import Table from '../common/Table';
import Form from '../common/Form';

const data = [
  { Name: 'CR90 Corvette', Passengers: '600', Cost: '3500000', MaxSpeed: '950' },
  { Name: 'Star Destroyer', Passengers: 'n/a', Cost: '150000000', MaxSpeed: '975' },
  { Name: 'Sentinel', Passengers: '100', Cost: '240000', MaxSpeed: '600' }
]

const columns = Object.keys(data[0]);

const Starships = () => {
  const [starships, setStarships] = useState(data);

  const handleAppStarship = (starshipData) => {
    const data = [...starships, starshipData];
    setStarships(data)
  }

  const getInitialStarshipsData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }

  return (
    <div className="container">
      <h1>Starships</h1>
      <Table
        data={starships}
        columns={columns}
        tableDescriptor="Starships"
      />
      <Form
        initialData={getInitialStarshipsData()}
        columns={columns}
        onAddData={handleAppStarship}
      />
    </div>
  )
};

export default Starships;
