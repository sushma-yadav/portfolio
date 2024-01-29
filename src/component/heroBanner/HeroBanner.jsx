import React from "react";
import Icons from "../common/Icons";
import "./HeroBanner.css";
import heroImage from "../../assests/image/sushma_bitmoji.png";

export default function HeroBanner() {
  return (
    <>
      <section className="home" id="home">
        <div className="hero">
          <div className="hero_banner">
            <div className="hero_content_left">
              <div className="social_icon">
                <Icons />
              </div>
              <div className="hero_banner_info">
                <p>Hello!</p>
                <p>
                  I'm <span className="name">Sushma Yadav</span>
                </p>
                <p>Frontend React JS Developer</p>
                <div className="btns">
                  <button>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/18PlgIa20myxprjknY4iGlyW4hdPVx9i4/view?usp=sharing"
                      download="resume.pdf"
                    >
                      <i className="fa fa-download" aria-hidden="true"></i>{" "}
                      Download Resume
                    </a>
                  </button>
                  <button>
                    <a href="javascript:void(0)">Hire Me</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="hero_content_right">
              <img src={heroImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
