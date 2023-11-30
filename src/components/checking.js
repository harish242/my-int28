import React from "react";
import { SiProtonmail } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { TbCompass } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import data from "./data.json";
import Main from "./main";
import NavBar from "./navbar";
import "../styles/webpage.css";

export default function WebPage() {
  return (
    <div className="grid-container">
       <div className="item0">
        <NavBar />
      </div>
      <div className="item1" id="head">
        <h4>Tours in London</h4>
       
          <div id="check-in">
          <div id="onecon">
            <div id="one">
              <div>
                <IoLocationOutline style={{ fontSize: "25px" }} />
              </div>
              <div>
                <div style={{ textAlign: "left" }}>Location</div>
                <div>Where are you going?</div>
              </div>
            </div>
          </div>
          <div id="two">
            <div>
              <LuCalendarCheck style={{ fontSize: "25px" }} />
            </div>
            <div>
              <div id="twod">Check in-Check out</div>
              <div>October 15-November</div>
            </div>
          </div>
          <div id="three">
            <div id="adult-3">
              <TbCompass style={{ fontSize: "25px" }} />
            </div>
            <div id="threed">
              <div id="adult-1"> Tour Type</div>
              <div id="adult">2 adults-1 children-1</div>
            </div>
          </div>
          <div id="four">
            <button type="button" className="four-in">
              <div id="fours">
                <CiSearch />
              </div>
              <div id="search">Search</div>
            </button>
          </div>
        </div>

      
      </div>

     
        <div className="item2">
        <div className="it2-1">
          <h6>Category Types</h6>

          <div className="tour">
            <div className="tour-in">
              <input type="checkbox" id="tours" />
              <label htmlFor="tours">Tours</label>
            </div>
            <span className="sp-c">92</span>
          </div>
          <div className="attractions">
            <div className="attractions-in">
              <input type="checkbox" id="attractions" />
              <label htmlFor="attractions">Attractions</label>
            </div>
            <span className="sp-c">45</span>
          </div>
          <div className="daytrips">
            <div className="daytrips-in">
              <input type="checkbox" id="daytrips" />
              <label htmlFor="daytrips">Day Trips</label>
            </div>
            <span className="sp-c">21</span>
          </div>
          <div className="outdoor">
            <div className="outdoor-in">
              <input type="checkbox" id="outdoor" />
              <label htmlFor="outdoor">Outdoor Activities</label>
            </div>
            <span className="sp-c">78</span>
          </div>
          <div className="concerts">
            <div className="concerts-in">
              <input type="checkbox" id="concerts" />
              <label htmlFor="concerts">Concerts and Shows</label>
            </div>

            <span className="sp-c">679</span>
          </div>
        </div>
        <br />
        <hr />

        <div className="it2-2">
          <h6>Other</h6>

          <div className="other">
            <div className="other-in">
              <input type="checkbox" id="other" />
              <label htmlFor="other">Free Cancellation</label>
            </div>
            <span className="sp-c">92</span>
          </div>

          {/* Add more 'Other' categories here if needed */}
        </div>
        <br />
        <hr />

        <div className="it2-3">
          <h6>Price</h6>

          <div className="price">
            <div className="price-in">
              <label htmlFor="price" style={{ fontSize: "12px" }}>
                $0-$500
              </label>

              <input type="range" min={0} max={1000} id="price" />
            </div>
          </div>
        </div>
        <br />
        <hr />

        <div className="it2-4">
          <h6>Duration</h6>

          <div className="duration">
            <div className="duration-in">
              <input type="checkbox" id="duration" />
              <label htmlFor="duration">Up to 1 hour</label>
            </div>
            <span className="sp-c">92</span>
          </div>
          <div className="duration">
            <div className="duration-in">
              <input type="checkbox" id="duration" />
              <label htmlFor="duration">1 to 4 hours</label>
            </div>
            <span className="sp-c">92</span>
          </div>
          <div className="duration">
            <div className="duration-in">
              <input type="checkbox" id="duration" />
              <label htmlFor="duration">4 hours to 1 day</label>
            </div>
            <span className="sp-c">92</span>
          </div>
        </div>
        <br />
        <hr />

        <div className="it2-5">
          <h6>Languages</h6>

          <div className="languages">
            <div className="languages-in">
              <input type="checkbox" id="languages" />
              <label htmlFor="languages">English</label>
            </div>
            <span className="sp-c">92</span>
          </div>
          <div className="languages">
            <div className="languages-in">
              <input type="checkbox" id="languages" />
              <label htmlFor="languages">Spanish</label>
            </div>
            <span className="sp-c">45</span>
          </div>
          <div className="languages">
            <div className="languages-in">
              <input type="checkbox" id="languages" />
              <label htmlFor="duration">French</label>
            </div>
            <span className="sp-c">21</span>
          </div>
          <div className="languages">
            <div className="languages-in">
              <input type="checkbox" id="languages" />
              <label htmlFor="duration">Turkish</label>
            </div>
            <span className="sp-c">75</span>
          </div>
        </div>
      </div>
     

    <div className="item3"><Main datai={data}/></div>

    
        <div className="item4" id="reg">
        <div className="gridfooter">
          <div className="gf-1">
            <div>
              <SiProtonmail />
            </div>
            <div className="text">
              <span id="bigtext">Your Travel Journey Starts Here</span>
              <span id="text">
                Sign up and we'll send the best deals to you
              </span>
            </div>
          </div>
          <div className="gf-2">
            <input type="text" placeholder="Your Email" id="gfemail" />
            <button className="gfsubs">Subscribe</button>
          </div>
        </div>
      </div>
        
    </div>
  );
}
