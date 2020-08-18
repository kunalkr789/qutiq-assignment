import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  state = {
    list: [],
    company: "",
  };

  //fetching data from api
  async componentDidMount() {
    const apiURL = "https://reqres.in/api/users?page=1";
    let result = await axios.get(apiURL);
    this.setState({ list: result.data.data, company: result.data.ad });
    console.log(this.state.list);
  }

  render() {
    return (
      <div>
        <div className="main-text">
          <h3>{this.state.company.company}</h3>
          <h4>{this.state.company.url}</h4>
          <p>{this.state.company.text}</p>
        </div>

        <ul className="list-group">
          {this.state.list.map((user) => (
            <li className="user-card" key={user.id}>
              <div className="content">
                <div className="left">
                  <div>
                    <img className="user-img" src={user.avatar} />
                  </div>
                </div>
                <div className="right">
                  <h6 className="card-title">
                    Name: {user.first_name} {user.last_name}
                  </h6>

                  <h6>
                    Email: <small className="card-text">{user.email}</small>
                  </h6>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
