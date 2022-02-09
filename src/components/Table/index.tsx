import React, { ReactElement, useEffect, useState } from "react";
import "./style.scss";

interface ITable {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function Table(): ReactElement {
  const [data, setData] = useState<any[]>([]);
  const [sortedField, setSortedField] = useState<string>("ASC");

  const fetchData = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  const sortData = (col: any) => {

 

    if (sortedField === "ASC") {
      const sorted = [...data].sort((a, b) => (a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1));
      setData(sorted);
      setSortedField("DSC");
    }

    if (sortedField === "DSC") {
      const sorted = [...data].sort((a, b) => (a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1));
      setData(sorted);
      setSortedField("ASC");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="table--data">
        <strong>Please , click over Name or Username </strong>
           <table className="last-winnings-table">
          <thead className="last-winnings-thead">
            <tr>
              <th>Id</th>
              <th onClick={() => sortData("name")}>Name</th>
              <th onClick={() => sortData("username")}> Username</th>
            </tr>
          </thead>
          <tbody className="last-winnings-body">
            {[...data].map((L: ITable, index: number) => (
                <tr className="last-winnings-title-heading-desc" key={index}>
                  <td>
                    {L.id} 
                  </td>
                  <td>
                    {L.name} 
                  </td>
                  <td>{L.username}</td>
                </tr>
              ))}
          </tbody>
        </table>
    </div>
  );
}

export default Table;
