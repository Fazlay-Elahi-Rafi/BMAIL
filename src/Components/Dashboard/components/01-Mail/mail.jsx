import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";

import img from "../../img/pet-img.png";

import List from "./list";

export default function Mail() {
  return (
    <>
      <section className="mail">
        <div className="row mx-4">
          <div className="head d-md-flex align-items-center justify-content-between text-center">
            <div className="d-md-flex align-items-center">
              <div className="">
                <img
                  className="img-fluid m-auto m-md-0"
                  src={img}
                  alt="image"
                />
              </div>
              <div className="my-4 my-md-0 ms-md-4">
                <h4 className="head__title">Connect a MetaMask Address</h4>
                <p className="head__para">Connect MetaMask Address To Email.</p>
              </div>
            </div>
            <div className="">
              <button className="head__btn">Register Now</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="mail__menu d-md-flex justify-content-between">
            <div className="col-12 col-md-5 mb-4 mb-md-0 ms-md-2 ms-lg-5">
              <ul>
                <li className="mail__menu-active">all</li>
                <li>
                  <div className="d-flex justify-content-center">
                    new
                    <div className="">
                      <span className="sidebar__num ms-3">121</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 px-3 px-md-0 me-md-2 me-lg-5">
              <div className="d-flex" style={{ position: "relative" }}>
                <BiSearch className="mail__menu-search" />
                <input
                  className="mail__menu-inp form-control"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <List />
        </div>
      </section>
    </>
  );
}
