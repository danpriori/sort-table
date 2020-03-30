import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Table extends Component {
  constructor(props) {
    super(props);
    this.people = [
      {
        name: "Daniel Priori",
        birth: "02/13/1982"
      },
      {
        name: "Fred Washington",
        birth: "11/05/1952"
      },
      {
        name: "Luke Skywalker",
        birth: "01/16/1968"
      },
      {
        name: "Jimmy Fellow",
        birth: "12/12/2011"
      },
      {
        name: "Thanos",
        birth: "02/09/1110"
      },
      {
        name: "Stan Lee",
        birth: "11/02/1932"
      },
      {
        name: "Dinho Ouro Preto",
        birth: "11/30/1976"
      },
      {
        name: "Venom Banner",
        birth: "10/31/1999"
      }
    ];

    // add converted date and use it for sorting only
    this.people.forEach(element => {
      element.date = new Date(element.birth);
    });
  }
  compareDates(person1, person2) {
    // complete this date comparator which enables sort by age
    return person2.date - person1.date;
  }

  compareNames(person1, person2) {
    // complete this string comparator with enables sort by name
    if (person1.name < person2.name) {
      return -1;
    }
    if (person1.name > person2.name) {
      return 1;
    }
    return 0;
  }

  render() {
    if (this.props.sortParameter === "name") {
      this.people.sort(this.compareNames);
    }
    if (this.props.sortParameter === "birth") {
      this.people.sort(this.compareDates);
    }

    let rows = [];
    this.people.forEach((element, key) => {
      rows.push(
        <tr key={key}>
          <td>{element.name}</td>
          <td>{element.birth}</td>
        </tr>
      );
    });

    return (
      <div className="table-div">
        <table className="table table-striped table-bordered table-hover full-width">
          <thead>
            <tr>
              <th className="course-name">Person Name</th>
              <th className="duration">Date of Birth</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  sortParameter: PropTypes.string
};

export default Table;
