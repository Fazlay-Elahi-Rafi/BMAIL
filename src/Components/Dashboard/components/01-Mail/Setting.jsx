import etherum from "../../img/etherum.png";
import { FaAngleDown, FaShare } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
const Setting = () => {
  return (
    <>
      <div className="settigs_title">Settings</div>

      <div className="settings_container">
        <div>
          <p className="title_text">Account</p>
        </div>
        <div className="ex_mail">
          <div className="d-flex align-items-center gap-3">
            <img src={etherum} alt="" className="ex_mail_logo" />
            <p>Example@bmail.com</p>
          </div>
          <FaAngleDown />
        </div>

        <div className="list_mail">
          <div className="d-flex align-items-center gap-3">
            <img src={etherum} alt="" />
            <div className="text-start">
              <p className="title_text m-0">Etherum</p>
              <p className="title_text_des m-0">0x1eF7........236994f2a1E0</p>
            </div>
          </div>
          <button className="remove_mail_btn title_text">
            <MdOutlineDeleteForever className="remove_icon" />
            Remove
          </button>
        </div>
        <div className="line"></div>
        <p className="title_text">Secret Phrase</p>
        <div className="view_section">
          <h3 className="title__text m-0">
            View or download Secret Recovery Phrase
          </h3>

          <p className="title_text_des">
            Your Secret Recovery Phrase is private, can never be changed and
            should not be shared with anyone. Keep Private!
          </p>

          <div>
            <button className="download_btn">Download</button>
            <button className="view_btn">View</button>
          </div>
          <button className="forward_btn d-flex justify-content-center align-items-center gap-2">
            <FaShare />
            <p className="m-0">Forward</p>
          </button>
          <div className="text-end me-3">
            <button className="delete_all">DELETE ALL</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
