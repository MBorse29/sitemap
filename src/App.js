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
            submap: [
              {
                title: "1.1.1.1",
                link: "",
                submap: [
                  {
                    title: "1.1.1.1.1",
                    link: "",
                    submap: []
                  }
                ]
              },
              {
                title: "1.1.1.2",
                link: "",
                submap: []
              },
              {
                title: "1.1.1.3",
                link: "",
                submap: []
              }
            ]
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

const iterate = ({ title, submap, link }) => (
  <Fragment>
    <li className="sitemap-node">
      <div className="dotted-image-sitemap" />
      <div className="content-text-sub-heading">
        <a href={link}> {title} </a>{" "}
      </div>
      <ul className="sitemap-sub-links">
        {!!(submap && submap.length) && submap.map(item => iterate(item))}{" "}
      </ul>
    </li>
  </Fragment>
);

export default function App() {
  return (
    <div className="App">
      <h1>Iterating Sitemap</h1>
      <div className="sitemap-container">
        <div className="sitemap-content">
          <ul className="sitemap-links">{siteMap.map(iterate)}</ul>
        </div>
      </div>
    </div>
  );
}
