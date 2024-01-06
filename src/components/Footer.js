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
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer-main mb-0 text-center ">
        <div className="d-flex align-items-center justify-content-center ">
          <div style={{ backgroundColor: "black", width: "100%" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "90%",
                  margin: "auto",
                  backgroundColor: "black",
                  display: "flex",
                  borderBottom: "2px solid white",
                  marginBottom: '30px'
                }}
              >
                <div
                  style={{
                    width: "50%",
                    background: "black",
                    color: "white",
                    padding: "10px",
                    // textAlign: "left",
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
                        marginBottom: "20px",
                        textAlign: "left",
                      }}
                    >
                      <h9> Sign up for updates from metta muse. </h9>
                    </li>
                    <li
                      style={{
                        marginBottom: "10px",
                        // textAlign: "left",
                        display: "flex",
                        gap: "20px",
                        border: "0px solid red",
                      }}
                    >
                      <input
                        type="text"
                        style={{ padding: "5px", width: "60%" }}
                        placeholder="Enter your e-mail..."
                      />
                      <button
                        id="subscribe-button"
                        style={{
                          padding: "10px",
                          color: "white",
                          backgroundColor: "black",
                          width: "30%",
                          borderRadius: "5px",
                        }}
                      >
                        SUBSCRIBE
                      </button>
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    width: "50%",
                    background: "black",
                    color: "white",
                    padding: "10px",
                    marginLeft: "40px",
                  }}
                >
                  <ul style={{ listStyleType: "none", marginTop: "40px" }}>
                    <li
                      style={{
                        // width: "200px",
                        marginBottom: "10px",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      <h6>CONTACT US</h6>
                    </li>
                    <li
                      style={{
                        // width: "200px",
                        marginBottom: "10px",
                        textAlign: "left",
                      }}
                    >
                      <h8> +444 22131 222 </h8>
                    </li>
                    <li
                      style={{
                        // width: "200px",
                        marginBottom: "10px",
                        textAlign: "left",
                      }}
                    >
                      <h9>customercare@mettamuse.com</h9>
                    </li>
                    <li
                      style={{
                        // width: "200px",
                        marginBottom: "10px",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      <h6>CURRENCY</h6>
                    
                    </li>

                    <li
                      style={{
                        
                        marginBottom: "10px",
                        textAlign: "left",
                      }}
                    >
                      <h9>USD</h9>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div >
              <div style={{display: 'flex', width: '90%', margin: 'auto',}}>
                <div
                  style={{
                    width: "30%",
                    background: "black",
                    color: "white",
                    padding: "10px",
                    border: '0px solid red'
                  }}
                >
                  <ul style={{ listStyleType: "none" , textAlign: 'left' }}>
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
                    width: "30%",
                    background: "black",
                    color: "white",
                    padding: "10px",
                    border: '0px solid red',
                    textAlign: 'left'
                  }}
                >
                  <ul style={{ listStyleType: "none", }}>
                    <li>
                      <h3>Quick Links</h3>
                    </li>
                    <li
                      style={{
                        // minWidth: "200px",
                        marginBottom: "10px",
                        // textAlign: "left",
                      }}
                    >
                      <h8>order and shipping </h8>
                    </li>
                    <li
                      style={{
                        // minWidth: "200px",
                        marginBottom: "10px",
                        // textAlign: "left",
                      }}
                    >
                      <h8>payment and pricing </h8>
                    </li>
                    <li
                      style={{
                        // minWidth: "200px",
                        marginBottom: "10px",
                        // textAlign: "left",
                      }}
                    >
                      <h8>return and shippments </h8>
                    </li>
                    <li
                      style={{
                        // minWidth: "200px",
                        marginBottom: "10px",
                        // textAlign: "left",
                      }}
                    >
                      <h8>Faqs</h8>
                    </li>
                    <li
                      style={{
                        // minWidth: "200px",
                        marginBottom: "10px",
                        // textAlign: "left",
                      }}
                    >
                      <h8>privacy policies</h8>
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    width: "40%",
                    background: "black",
                    color: "white",
                    padding: "10px",
                    border: '0px solid red',
                    textAlign: 'left'
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
                    <div style={{ display: "flex", gap: '20px', marginTop: '10px' }}>
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
