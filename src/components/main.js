import React from "react";
import { useState } from "react";
import "../styles/main.css";
import { MdArrowOutward } from "react-icons/md";
export default function Main({ datai }) {
  const [page, setPage] = useState(1);
  console.log(datai);
  const pageHandle = (no) => {
    setPage(no);
  };
  const itemsPerPage = 3; // Number of items to show per page
  const totalPages = Math.ceil(datai.length / itemsPerPage);
  return (
    <>
      <div>Hotels</div>
      <div className="headcard">
        {datai.slice(page * 3 - 3, page * 3).map((item, index) => {
          return (
            <>
              <div className="card" key={item.hotelBasicInfo.hotelId}>
                <div className="card1">
                  <img src={item.hotelBasicInfo.hotelImg} alt="hotelImages" />
                </div>
                <div className="card2">
                  <div className="c2-1">
                    {item.hotelBasicInfo.additionTexts[1]?.additionText}
                  </div>
                  <div className="c2-2">{item.hotelBasicInfo.hotelName}</div>
                  <div className="c2-3">{item.roomInfo.physicalRoomName}</div>
                  <div className="c2-4">
                    {item.positionInfo.positionName},
                    {item.positionInfo.cityName}
                  </div>
                  <div className="c2-5">Taking safety measures</div>
                  <div className="c2-6">Free Cancellation</div>
                </div>
                <div className="card3">
                  <div className="cards3">
                    <div className="cards3-1">{item.hotelStarInfo.star}</div>
                    <div className="cards3-2">{item.commentInfo.commenterNumber}</div>
                    <div className="cards3-3">
                      <span className="card3-1">From</span>
                      <span className="card3-2">{item.extras.PropertyCurrency}-{item.hotelBasicInfo.price}</span>
                      {/* <span className="card3-3"></span> */}
                      <span className="card3-4">per adult</span>
                    </div>
                    <button className="cards3-4">
                        <span className="viewdetails">View Details</span>
                        <span className="arrow"><MdArrowOutward style={{fontSize:'20px'}} /></span>
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <hr />
            </>
          );
        })}
      </div>
      <br/>
      {datai.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => pageHandle(page - 1)}
            className={page === 1 ? "disabled" : ""}
          >
            ◀️
          </span>
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              onClick={() => pageHandle(index + 1)}

              className={page === index + 1 ? "active" : ""}
            >
              {index + 1}
            </span>
          ))}
          <span
            onClick={() => pageHandle(page + 1)}
            className={page === totalPages ? "disabled" : ""}
          >
            ▶️
          </span>
        </div>
      )}
    </>
  );
}
