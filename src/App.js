import React, { Fragment } from "react";
import "./styles.css";

const siteMap = [
  {
    title: "1",
    link: "",
    submap: [
      {
        title: "1.1",
        link: "",
        submap: [
          {
            title: "1.1.1",
            link: "",
            submap: []
          },
          {
            title: "1.1.2",
            link: "",
            submap: []
          }
        ]
      },
      {
        title: "1.2",
        link: "",
        submap: []
      }
    ]
  },
  {
    title: "2",
    link: "",
    submap: []
  }
];

// Print the title and iterate further

const iterate = ({ title, submap }) => (
  <Fragment>
    <li>{title}</li>
    <ul>{!!(submap && submap.length) && submap.map(item => iterate(item))}</ul>
  </Fragment>
);

export default function App() {
  return (
    <div className="App">
      <h1>Iterating Sitemap</h1>
      <ul>{siteMap.map(iterate)}</ul>
    </div>
  );
}
