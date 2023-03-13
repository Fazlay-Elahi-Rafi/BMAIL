import React from "react";

import { AiOutlineStar } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineMoveToInbox } from "react-icons/md";

export default function List() {
  return (
    <>
      <div className="mail__list">
        <div className="col-12 mail__list-body d-lg-flex justify-content-between">
          <div className="col-lg-3 col-xxl-3 mail__list-body--user d-flex align-items-center">
            <div className="d-flex">
              <h4 className="mail__list-text">hi</h4>
            </div>
            <h3 className="mail__list-name">support</h3>
          </div>

          <div className="col-lg-7 col-xxl-7 mail__list-body--content my-4 my-lg-0">
            <div className="d-flex">
              <h5 className="mail__list-notice">New Steps to Verify</h5>
              <p className="mail__list-date">19 FEB</p>
            </div>

            <div className="mt-2">
              <p className="mail__list-date mail__list-para">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam.
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-xxl-2 d-flex justify-content-lg-center align-items-center">
            <AiOutlineStar className="mail__list-i" />
            <MdOutlineMoveToInbox className="mx-3 mail__list-i" />
            <RiDeleteBin6Line className="mail__list-i" />
          </div>
        </div>
      </div>
    </>
  );
}
