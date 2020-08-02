import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <span className="logo">
          <i className="fal fa-cheeseburger logo__icon"></i>
          <span className="logo__text header__text">DinDin</span>
        </span>
        <nav className="nav">
          <button href="#" className="nav__link nav__link--active header__text">
            Cook
          </button>
          <button href="#" className="nav__link header__text">
            Learn
          </button>
          <button href="#" className="nav__link header__text">
            Plan
          </button>
        </nav>
        <div className="header__menu__wrapper">
          <button className="header__menu__button">
            <i className="fas fa-user-circle header__menu__image"></i>
            <span className="header__menu__title header__text">
              Miles Pratt
            </span>
            <i className="far fa-angle-down header__menu__icon"></i>
          </button>
          <div className="header__menu__content"></div>
        </div>
      </header>

      <main>
        <div className="landing__header">
          <h1 className="landing__heading">What's on the menu tonight?</h1>
          <p className="landing__intro">
            Having trouble coming up with meal ideas? Looking to take your
            cooking skills to the next level? Planning a dinner party? We have
            the tools to help!
          </p>
        </div>

        <div className="landing__filters">
          <div className="landing__filter">
            <span className="filter__title">Meal</span>
            <button className="filter__button">
              <span>Dinner</span>
              <i className="far fa-angle-down filter__icon"></i>
            </button>
          </div>
          <div className="landing__filter">
            <span className="filter__title">Difficulty</span>
            <button className="filter__button">
              <span>Moderate</span>
              <i className="far fa-angle-down filter__icon"></i>
            </button>
          </div>
          <div className="landing__filter">
            <span className="filter__title">Servings</span>
            <button className="filter__button">
              <span>2</span>
              <i className="far fa-angle-down filter__icon"></i>
            </button>
          </div>
          <div className="filter__search">
            <input
              type="text"
              className="filter__search__input"
              placeholder="Find a recipe"
            />
            <button className="filter__search__button">
              <i className="fal fa-search filter__search__icon"></i>
            </button>
          </div>
        </div>

        <div className="landing__feature">
          <div className="feature__details">
            <h1 className="feature__details__title">
              One-Pan Pork And Asparagus
            </h1>
            <p className="feature__details__summary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="feature__grid">
          <div className="small__feature">
            <img
              src="https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="small__feature__image"
            />
            <div className="feature__details feature__details--small">
              <h2 className="feature__details__title">Spicy Chile Penne</h2>
              <p className="feature__details__summary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="small__feature">
            <img
              src="https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="small__feature__image"
            />
            <div className="feature__details feature__details--small">
              <h2 className="feature__details__title">Classic Minestrone</h2>
              <p className="feature__details__summary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="small__feature">
            <img
              src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="small__feature__image"
            />
            <div className="feature__details feature__details--small">
              <h2 className="feature__details__title">Gut Buster Burger</h2>
              <p className="feature__details__summary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
