import React from "react";
import { useState } from "react";
import "../styles/main.css";
import { MdArrowOutward } from "react-icons/md";
import { Button } from '@mantine/core';
import { BsArrowDownUp } from "react-icons/bs";
export default function Main({ datai }) {
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  console.log(datai);
  const pageHandle = (no) => {
    setPage(no);
  };
  const handleSort = () => {
    // Toggle sorting order when the sort button is clicked
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };
  
  const sortedData = [...datai].sort((a, b) => {
    // Sort based on pricing
    if (sortOrder === "asc") {
      return a.pricing[0]- b.pricing[0];
    } else {
      return b.pricing[0] - a.pricing[0];
    }
  });
  const itemsPerPage = 4; // Number of items to show per page
  const totalPages = Math.ceil(datai.length / itemsPerPage);
  return (
    <>
      <div className="properties">
        <div className="properties1">{datai.length}<span className="properties2">properties in India</span></div>
        <button className="sort"  onClick={handleSort}>sort <BsArrowDownUp/></button>
      </div>
      <hr/>
      <div className="headcard">
        {sortedData.slice(page * 4 - 4, page * 4).map((item, index) => {
          return (
            <>
              <div className="card" key={item.id}>
                <div className="card1">
                  <img src={item.best_image} alt="hotelImages" />
                </div>
                <div className="card2">
                  <div className="c2-1">
                    {item.name}
                  </div>
                  <div className="c2-2">{item.street}</div>
                  <div className="c2-3">{item.hotel_name_without_category}</div>
                  <div className="c2-4">
                    {item.hotel_type},
                    {item.oyo_id}
                  </div>
                  <div className="c2-5">Taking safety measures</div>
                  <div className="c2-6">Free Cancellation</div>
                </div>
                <div className="card3">
                  <div className="cards3">
                    <div className="cards3-1">{item.ratings.value}</div>
                    <div className="cards3-2">{item.pricing[0]}</div>
                    <div className="cards3-3">
                      <span className="card3-1">From</span>
                      <span className="card3-2">{item.street}-{item.status}</span>
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
