import { render } from "@testing-library/react";
import { Component } from "react";

import "./card-list.style.css";

class CardContainer extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    const search_term = "kitten";
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          // src={`https://robohash.org/${id}?set=set2&size=180x180`}

          src={`https://loremflickr.com/180/180/${search_term}?lock=${id}`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}
export default CardContainer;
