import React from "react";
import frame from "../images/Frame.svg";
import linkedin from "../images/mdi_linkedin.svg";
// import linkedin from '../images/mdi_linkedin.svg'
import gpay from "../images/Group 136188.svg";
import mastercard from "../images/Group 136190.svg";
import paypal from "../images/Group 136192.svg";
import amex from "../images/Group 136193.svg";
import apple_pay from "../images/Group 136194.svg";
import o_pay from "../images/Group 136195.svg";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center border">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-12">
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                style={{
                  width: "60%",
                  background: "black",
                  color: "white",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                <ul style={{ listStyleType: "none", marginTop: "40px" }}>
                  <li
                    style={{
                    //   width: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h6>BE THE FIRST TO KNOW </h6>
                  </li>
                  <li
                    style={{
                    //   width: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h9> sign up for further updates </h9>
                  </li>
                  <li
                    style={{
                    //   width: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h8>stories</h8>
                  </li>
                  <li
                    style={{
                    //   width: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h8>Artisans</h8>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  width: "40%",
                  background: "black",
                  color: "white",
                  padding: "10px",
                }}
              >
                <ul style={{ listStyleType: "none", marginTop: "40px" }}>
                  <li
                    style={{
                      width: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    <h6>Contact us</h6>
                  </li>
                  <li
                    style={{
                      width: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h8> +444 22131 222 </h8>
                  </li>
                  <li
                    style={{
                      width: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h9>customercare@mettamuse.com</h9>
                  </li>
                  <li>
                    <h8>Artisans</h8>
                  </li>
                </ul>
              </div>
              <div style={{ width: "1px", background: "white" }}></div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "20%",
                  background: "black",
                  color: "white",
                  padding: "10px",
                }}
              >
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <h4>mettā muse </h4>
                  </li>
                  <li>
                    <h8>about us </h8>
                  </li>
                  <li>
                    <h8>stories</h8>
                  </li>
                  <li>
                    <h8>Artisans</h8>
                  </li>
                  <li>
                    <h8>contact us</h8>
                  </li>
                  <li>
                    <h8>Eu Complinces docs</h8>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  width: "20%",
                  background: "black",
                  color: "white",
                  padding: "10px",
                }}
              >
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>
                    <h3>Quick Links</h3>
                  </li>
                  <li
                    style={{
                      minWidth: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h8>order and shipping </h8>
                  </li>
                  <li
                    style={{
                      minWidth: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h8>payment and pricing </h8>
                  </li>
                  <li
                    style={{
                      minWidth: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h8>return and shippments </h8>
                  </li>
                  <li
                    style={{
                      minWidth: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h8>Faqs</h8>
                  </li>
                  <li
                    style={{
                      minWidth: "200px",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h8>privacy policies</h8>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  width: "60%",
                  background: "black",
                  color: "white",
                  padding: "10px",
                }}
              >
                <div>
                  Follow us
                  <div>
                    <img src={frame} alt="error" />
                    <img src={linkedin} alt="error" />
                  </div>
                </div>
                <div style={{ marginTop: "30px" }}>
                  mettā muse ACCEPTS
                  <div style={{display : 'flex'}}>
                    <img src={gpay} alt="error" />
                    <img src={mastercard} alt="error" />
                    <img src={paypal} alt="error" />
                    <img src={amex} alt="error" />
                    <img src={apple_pay} alt="error" />
                    <img src={o_pay} alt="error" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
