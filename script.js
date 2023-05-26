import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
 
ReactDOM.render(
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #F8C8DC">
    <div class="container-fluid">
      <a class="navbar-brand" aria-current="page" href="#hero-section">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
        </svg>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#mission-section">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="experience.html">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#inspiration-section">Inspiration</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact-section">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>,
  document.querySelector("#navbarDisplay")
);