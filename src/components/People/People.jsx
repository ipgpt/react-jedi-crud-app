import React, { useState } from "react";
import Table from "../common/Table";
import Form from "../common/Form";

const data = [
  {
    Name: "Mark",
    Surname: "Otto",
    Nickname: "@motto",
    id: "1",
  },
  {
    Name: "Carl",
    Surname: "Reno",
    Nickname: "@ceno",
    id: "2",
  },
  {
    Name: "Steve",
    Surname: "Smith",
    Nickname: "@ssteve",
    id: "3",
  },
];

const columns = Object.keys(data[0]);

const People = () => {
  const [people, setPeople] = useState(data);

  const handleAppPerson = (personData) => {
    setPeople([...people, personData]);
  };

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const handleRemovePerson = (id) => {
    setPeople(people.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>People</h1>
      <Table
        data={people}
        columns={columns}
        tableDescriptor="People"
        handleDelete={handleRemovePerson}
      />
      <Form
        initialData={getInitialPeopleData()}
        columns={columns}
        onAddData={handleAppPerson}
      />
    </div>
  );
};

export default People;
