import "./Login.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import webmail from "../../../Assets/login/email.png";
import message from "../../../Assets/login/message.png";
import dec from "../../../Assets/login/decrypt.png";
import ai from "../../../Assets/login/ai.png";
import "../Register/Register.css";
const Login = () => {
  return (
    <div className="signinpage">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="">
              <p className="pageTitle">Bmail Enables Web 3 communication</p>

              <p className="pageDes">
                BMAIL is a secure and decentralized email service that leverages
                encryption and blockchain technology to enable Web 3
                communication. With bMail, users can send and receive emails
                directly between their MetaMask wallets, ensuring the privacy
                and security of their messages.
              </p>
              <div className="mailIcons">
                <div>
                  <div className="iconContainer">
                    <div className="gradIcon"></div>

                    <img src={webmail} alt="" className="loginicons" />
                  </div>
                  <p className="iconText">WebMail</p>
                </div>
                <div>
                  <div className="iconContainer">
                    <div className="gradIcon"></div>

                    <img src={message} alt="" className="loginicons" />
                  </div>
                  <p className="iconText">Messages</p>
                </div>
                <div>
                  <div className="iconContainer">
                    <div className="gradIcon"></div>

                    <img src={dec} alt="" className="loginicons ms-1" />
                  </div>
                  <p className="iconText">Decrypted</p>
                </div>
                <div>
                  <div className="iconContainer">
                    <div className="gradIcon"></div>

                    <img src={ai} alt="" className="loginicons ms-1" />
                  </div>
                  <p className="iconText">AI Writer</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="signInForm">
              <p className="signUpFormTitle">Log in to Bmail</p>

              <p className="formTexts">
                <small>
                  Don't have an account?
                  <Link to="/login" className="text-decoration-none">
                    {" "}
                    Create an account here
                  </Link>
                </small>
              </p>

              <Form>
                <div className="inputGroup">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="inpField"
                    placeholder="Username"
                  />
                  <p className="bmail">@Bmail</p>
                </div>

                <div className="passFieldslogin">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="inpField"
                    placeholder="Password"
                  />
                </div>
                <Link className="text-decoration-none forgot">
                  Forgot Password
                </Link>

                <button type="submit" className="submitbtn">
                  CONTINUE
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
