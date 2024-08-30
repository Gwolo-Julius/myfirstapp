import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import camera from "./cam2.jpg";
import woofer from "./frame.png";
import perfume from "./feactured-4.png";
import "./style.css";

const App = () => {
  return (
    <>
      <div className="App navbars">
        <nav class="navbar  bg-body-secondary">
          <div class="container-fluid">
            <a class="navbar-brand text-primary">SmartP</a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="card__wrapper  grid">
          <div class="card">
            <img src={camera} className="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">Clear image Camera</h3>
              <p class="card-text">
                Make your Videos with high resolution Sony camera and make a
                traffic on your digital marketing business.
              </p>
              <h2>$650</h2>
              <a href="#" class="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
          <div class="card">
            <img src={woofer} class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">JBL woofer</h3>
              <p class="card-text">
                Listen to your favorate music all day long with our recent brand
                of deef bass woofer. Make life complete!
              </p>
              <h2>$450</h2>
              <a href="#" class="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
          <div class="card">
            <img src={perfume} class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">High class perfume</h3>
              <p class="card-text p-gray-500">
                Royal smell. Feel fresh all day with our new brand of perfume
                just at affordable price
              </p>
              <h2>$200</h2>
              <a href="#" class="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
