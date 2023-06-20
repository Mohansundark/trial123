import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./styles.css";

function Task4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.users);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              <td className="left">{val.firstName}</td>
              <td className="left">{val.lastName}</td>
              <td className="top">{val.email}</td>
              <td className="right">{val.phone}</td>
              <td className="right">{val.birthDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task4;
