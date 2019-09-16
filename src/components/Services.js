import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title.js";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet ante at nisi commodo, vel bibendum odio sollicitudin."
      },
      {
        icon: <FaHiking />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet ante at nisi commodo, vel bibendum odio sollicitudin. "
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet ante at nisi commodo, vel bibendum odio sollicitudin. "
      },
      {
        icon: <FaBeer />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet ante at nisi commodo, vel bibendum odio sollicitudin. "
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    );
  }
}
