
import React, { useState } from 'react';
import Table from '../common/Table';
import Form from '../common/Form';

const data = [
  { Name: 'Mark', Surname: 'Otto', Nickname: '@motto', ID: '1' },
  { Name: 'Carl', Surname: 'Reno', Nickname: '@ceno', ID: '2' },
  { Name: 'Steve', Surname: 'Smith', Nickname: '@ssteve', ID: '3' }
]

const columns = Object.keys(data[0]);

const People = () => {
  const [people, setPeople] = useState(data);

  const handleAppPerson = (personData) => {
    const data = [...people, personData];
    setPeople(data)
  }

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }

  return (
    <div className="container">
      <h1>People</h1>
      <Table
        data={people}
        columns={columns}
        tableDescriptor="People"
      />
      <Form
        initialData={getInitialPeopleData()}
        columns={columns}
        onAddData={handleAppPerson}
      />
    </div>
  )
};

export default People;
