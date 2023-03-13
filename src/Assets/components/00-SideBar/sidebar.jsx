import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { BiPencil, BiTrashAlt } from "react-icons/bi";
import { BsSend, BsBoxSeam } from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { AiOutlineStar } from "react-icons/ai";
import { TbSettings2 } from "react-icons/tb";
import SidebarSmall from "./smallSidebar";

export default function Sidebar() {
  const [state, setState] = useState(false);

  return (
    <>
      <section className="sidebar">
        <div
          className={`col-11 col-sm-6 col-md-5 col-xl-3 sidebar__list ${
            state ? "small__sidebar" : ""
          }`}
        >
          <ul className="nav flex-column">
            <li className="">
              <span className="sidebar__text">Write to someone</span>
            </li>
            <li className="">
              <a className="sidebar__active" aria-current="page" href="#">
                <BiPencil className="sidebar__icon-dark" /> Compose
              </a>
            </li>
            <li className="">
              <span className="sidebar__text">Main</span>
            </li>
            <li>
              <Link
                className="d-flex align-items-center justify-content-between text-capitalize"
                to="/"
              >
                <div className="d-flex align-items-center">
                  <HiOutlineInbox className="sidebar__icon-active" /> All Inbox
                </div>

                <div className="">
                  <span className="sidebar__num">121</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="d-flex align-items-center justify-content-between text-capitalize"
                to="/detailsand"
              >
                <div className="d-flex align-items-center">
                  <AiOutlineStar className="sidebar__icon" /> Starred
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="d-flex align-items-center justify-content-between text-capitalize"
                to="/"
              >
                <div className="d-flex align-items-center">
                  <BsSend className="sidebar__icon" /> sent
                </div>
              </Link>
            </li>
            <li>
              <a
                className="d-flex align-items-center justify-content-between text-capitalize"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <BsBoxSeam className="sidebar__icon" /> Arhieve
                </div>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-items-center justify-content-between text-capitalize"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <BiTrashAlt className="sidebar__icon" /> Trash
                </div>
              </a>
            </li>
            <li className="">
              <span className="sidebar__text">Other</span>
            </li>
            <li>
              <a
                className="d-flex align-items-center justify-content-between text-capitalize"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <TbSettings2 className="sidebar__icon" /> Settings
                </div>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-items-center justify-content-between text-capitalize"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <TbSettings2 className="sidebar__icon" /> Help & Support
                </div>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-items-center justify-content-between text-capitalize"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <TbSettings2 className="sidebar__icon" /> Erase All Mail
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="">
          <HiBars3BottomRight
            className="text-light sidebar__bar d-xl-none"
            onClick={() => setState(true)}
          />
        </div> */}

        <div className="sidebar__body mx-auto col-12 col-md-11 col-xl-9">
          <div className="">
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </>
  );
}
