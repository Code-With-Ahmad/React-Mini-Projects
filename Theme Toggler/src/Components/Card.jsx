import React, { useContext } from "react";
import "./Card.css";
import ThemeContext from "../Context/ThemeContext";
const Card = () => {
  const { icon, setIcon, theme, setTheme } = useContext(ThemeContext);
  function toggle() {
    document.querySelector(".theme-icon").classList.toggle("dark");
    if (document.querySelector(".theme-icon").classList.contains("dark")) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setTheme("Dark");
      setIcon(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
        </svg>
      );
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setTheme("Light");
      setIcon(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
        </svg>
      );
    }
  }
  return (
    <div className="container">
      <div className="theme-icon">
        <div className="icon" onClick={toggle}>
          {icon}
        </div>{" "}
        <h1>{theme} Theme</h1>
      </div>
      <div className="card">
        {/* Content of your card goes here */}
        <h2>Muhammad Ahmad</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          minima inventore iusto repellat aut architecto iure commodi quisquam
          voluptatibus, dolorem tempore officiis ut asperiores, ab ipsam facere
          numquam doloremque eaque sequi obcaecati blanditiis. Odio saepe illo
          ducimus, sed natus officiis suscipit ipsam ex quam perspiciatis
          quibusdam cupiditate at, et magnam ullam est deserunt atque aliquid
          exercitationem quas sapie
        </p>
      </div>
    </div>
  );
};

export default Card;
