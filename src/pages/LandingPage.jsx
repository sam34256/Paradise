import React from "react";
import { Link } from "react-router-dom";
import plantImage from "../assets/img/plant.png";
import cactusImage from "../assets/img/cacutus.png";
import indoorImage from "../assets/img/indoor.png";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero is-fullheight is-primary is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1 has-text-white">Welcome to Green Haven</h1>
            <p className="subtitle is-size-4 has-text-light mb-6">
              Your one-stop shop for beautiful houseplants! Bring nature into your home with our carefully curated selection.
            </p>
            <Link to="/products">
              <button className="button is-large is-info is-rounded has-text-weight-bold">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Green Haven Section */}
      <section className="section has-background-light py-6">
        <div className="container has-text-centered">
          <h2 className="title is-size-3 has-text-weight-bold mb-6">About Green Haven</h2>
          <p className="subtitle is-size-5 mb-6">
            At Green Haven, we believe that nature should be a part of every home. Our mission is to bring the beauty of plants into your life, whether you're a seasoned plant enthusiast or just starting your indoor garden journey. We carefully curate a selection of houseplants that are easy to care for, with options for every space, from low-maintenance succulents to vibrant flowering plants. Our passion for plants drives us to provide top-quality products and exceptional customer service, making it easier for you to transform your home into a green oasis. Join us in bringing nature inside and enjoy the fresh, calming atmosphere plants create.
          </p>
        </div>
      </section>

      {/* Popular Plant Categories */}
      <div className="hero-foot">
        <div className="container">
          <h2 className="title is-size-3 has-text-centered has-text-weight-bold mb-5">
            Popular Plant Categories
          </h2>
          <div className="columns is-centered">
            <div className="column is-one-third has-text-centered">
              <img
                src={cactusImage}
                alt="Succulents & Cacti"
                className="image is-4by3 rounded shadow-md"
              />
              <p className="mt-4 is-size-4 has-text-weight-semibold">🌱 Succulents & Cacti</p>
            </div>
            <div className="column is-one-third has-text-centered">
              <img
                src={indoorImage}
                alt="Indoor Greenery"
                className="image is-4by3 rounded shadow-md"
              />
              <p className="mt-4 is-size-4 has-text-weight-semibold">🌿 Indoor Greenery</p>
            </div>
            <div className="column is-one-third has-text-centered">
              <img
                src={plantImage}
                alt="Flowering Plants"
                className="image is-4by3 rounded shadow-md"
              />
              <p className="mt-4 is-size-4 has-text-weight-semibold">🌺 Flowering Plants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <section className="section has-background-light py-6">
        <div className="container has-text-centered">
          <h2 className="title is-size-3 has-text-weight-bold mb-6">Contact Us</h2>
          <p className="subtitle is-size-5 mb-6">
            We'd love to hear from you! Get in touch with us using any of the methods below.
          </p>

          {/* Contact Information */}
          <div className="columns is-centered mb-6">
            <div className="column is-4">
              <div className="box has-text-left p-5">
                <h3 className="title is-size-4 has-text-weight-bold">Email</h3>
                <p className="is-size-5">contact@greenhaven.com</p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-left p-5">
                <h3 className="title is-size-4 has-text-weight-bold">Phone</h3>
                <p className="is-size-5">+1 (800) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <h3 className="title is-size-4 has-text-weight-bold mb-4">Follow Us</h3>
          <div className="buttons are-medium is-centered">
            <a href="https://facebook.com" className="button is-link is-rounded">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" className="button is-info is-rounded">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" className="button is-danger is-rounded">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://linkedin.com" className="button is-primary is-rounded">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
