import React, { useEffect, useState } from "react";
import "./styles.scss";
import { SIZES, SECTIONS } from "./HomeConstants";
import Contact from "../ContactComponent";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function HomeComponent() {
  const [styles, setStyles] = useState(SIZES.DEFAULT_STYLES);

  const reset = () => {
    setStyles(SIZES.DEFAULT_STYLES);
  };

  const handleMouseEnter = (newStyles) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      ...newStyles,
    }));
  };

  return (
    <div className="container">
      <div className="d" style={styles.d}>
        <h1>Sanket Munot</h1>
      </div>
      <Link to="work">
        <div
          className="a"
          style={styles["a"]}
          onMouseEnter={() => handleMouseEnter(SIZES.a)}
          onMouseLeave={() => reset()}
        >
          <h2>Work Experience</h2>
        </div>
      </Link>
      <Link to="about">
        <div
          className="b"
          style={styles["b"]}
          onMouseEnter={() => handleMouseEnter(SIZES.b)}
          onMouseLeave={() => reset()}
        >
          <h2>About</h2>
        </div>
      </Link>

      <div
        className="c"
        style={styles["c"]}
        onMouseEnter={() => handleMouseEnter(SIZES.c)}
        onMouseLeave={() => reset()}
      >
        <h2>Contact</h2>
        <Contact />
      </div>

      <Link to="blog">
        <div
          className="e"
          style={styles["e"]}
          onMouseEnter={() => handleMouseEnter(SIZES.e)}
          onMouseLeave={() => reset()}
        >
          <h2>Blog</h2>
        </div>
      </Link>
      {/* {SECTIONS.map((section) => {
        const id = section.id;
        return (
          <div
            className={id}
            style={styles[id]}
            onMouseEnter={() => handleMouseEnter(SIZES[id])}
            onMouseLeave={() => reset()}
          >
            <h2>{section.title}</h2>
          </div>
        );
      })} */}
    </div>
  );
}

export default HomeComponent;
