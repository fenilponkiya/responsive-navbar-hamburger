import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [state, setState] = useState("");
  const [show, setShow] = useState("none");
  const navigate = useNavigate();
  const handleChange = () => {
    setState("absolute");
    setShow("block");
  };
  const closeDrawer = () => {
    setShow("none");
  };
  const concernedElement = document.querySelector(".closeDrawer");

  document.addEventListener("mousedown", (event) => {
    setShow(!concernedElement?.contains(event?.target) ? "none" : "");
  });

  return (
    <header
      style={{
        position: "relative",
        height: "20px",
        backgroundColor: "violet",
        display: "flex",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <i
        class="fa fa-bars"
        onClick={handleChange}
        style={{ cursor: "pointer", fontSize: "25px" }}
      />

      <div
        class="closeDrawer"
        style={{
          top: 0,
          left: 0,
          display: show,
          position: state,
          width: "200px",
          height: "100vh",
          backgroundColor: "lightgreen",
        }}
      >
        <i
          class="fa fa-close"
          style={{
            fontSize: "24px",
            display: "flex",
            justifyContent: "right",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={closeDrawer}
        ></i>

        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              margin: "8px 0px 8px 0px",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            style={{
              margin: "8px 0px 8px 0px",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={() => navigate("/about")}
          >
            About
          </div>
          <div
            style={{
              margin: "8px 0px 8px 0px",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={() => navigate("/service")}
          >
            Service
          </div>
          <div
            style={{
              margin: "8px 0px 8px 0px",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </div>
        </div>
      </div>
      <div
        class="grid-container"
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            justifyContent: "right",
          }}
        >
          <div
            class="grid-item"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            class="grid-item"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/about")}
          >
            About
          </div>
          <div
            class="grid-item"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/service")}
          >
            Service
          </div>
          <div
            class="grid-item"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </div>
        </div>
      </div>
    </header>
  );
};
