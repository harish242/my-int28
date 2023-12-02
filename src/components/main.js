import React from "react";
import { useState } from "react";
import "../styles/main.css";
import { MdArrowOutward } from "react-icons/md";
import { Button } from '@mantine/core';
import { BsArrowDownUp } from "react-icons/bs";
import LikeDislikeToggle from "./likedislike"
import StarRating from './stars.js'
import { useMyContext } from './context/context';


export default function Main({ datai }) {
  const {user}=useMyContext()
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");


  const pageHandle = (a) => {
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    if (totalPages === 0) {
      setPage(1);
    } else if (a > totalPages) {
      setPage(totalPages);
    } else {
      setPage(a);
    }
  };

  const pageHandleDec = (no) => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(no - 1);
    }
  };

  const pageHandleInc = (d) => {
    if (d >= Math.floor(datai.length / 4)) {
      setPage(d);
    } else {
      setPage(d + 1);
    }
  };

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedData = [...datai].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.pricing[0] - b.pricing[0];
    } else {
      return b.pricing[0] - a.pricing[0];
    }
  });

  const itemsPerPage = 4;
  const totalPages = Math.ceil(datai.length / itemsPerPage);

  return (
    <>
      <div className="properties">
        <div className="properties1">
          {datai.length}
          <span className="properties2">properties in India</span>
        </div>
        <button className="sort" onClick={handleSort} disabled={!user}>
          sort <BsArrowDownUp />
        </button>
      </div>
      <hr />
      <div className="headcard">
        {sortedData.slice(page * 4 - 4, page * 4).map((item, index) => (
          <div className="card" key={item.id}>
            <div className="card1">
              <img src={item.best_image} alt="hotelImages" className="image" />
              <div className="heart">
                <LikeDislikeToggle style={{ fontSize: "5px" }} />
              </div>
            </div>
            <div className="card2">
              <div className="c2-1">{item.name}</div>
              <div className="c2-2">{item.street.slice(0, 20)}</div>
              <div className="c2-3">{item.hotel_name_without_category}</div>
              <div className="c2-4">
                {item.hotel_type}, {item.oyo_id}
              </div>
              <div className="c2-5">Taking safety measures</div>
              <div className="c2-6">Free Cancellation</div>
            </div>
            <div className="card3">
              <div className="cards3">
                <div className="cards3-1">
                  <StarRating rating={item.ratings.value} />
                </div>
                <div className="cards3-2">
                  {item.ratings.count} <span>reviews</span>
                </div>
                <div className="cards3-3">
                  <span className="card3-1">From</span>
                  <span className="card3-2">₹{item.pricing[0]}</span>
                  <span className="card3-1">per adult</span>
                </div>
                <button className="cards3-4">
                  <span className="viewdetails">View Detail</span>
                  <span className="arrow">
                    <MdArrowOutward style={{ fontSize: "20px" }} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      {user&&datai.length > 4 && (
        <div className="pagination" >
          <span
            onClick={() => pageHandleDec(page)}
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
            onClick={() => pageHandleInc(page)}
            className={page === totalPages ? "disabled" : ""}
          >
            ▶️
          </span>
        </div>
      )}
    </>
  );
}
