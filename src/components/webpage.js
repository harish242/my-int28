import React from "react";
import { SiProtonmail } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { TbCompass } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import data from "./data.json";
import Main from "./main";
import NavBar from "./navbar";
import { useState,useEffect,useRef } from "react";
import { DateRange } from "react-date-range";
import {format} from 'date-fns'
import TransitionsModal from './modal'
import "../styles/webpage.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function WebPage() {
  const [price, setPrice] = useState(0);
  const [location,setLocation]=useState()
  const [searchKey, setSearchKey] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAccommodations, setSelectedAccommodations] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [openDate,setOpenDate]=useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const[openOptions,setOpenOptions]=useState(false)
  const[options,setOptions]=useState({
   adult:1,
   children:0,
   roomNo:1
  })
  const calendarRef = useRef(null); 

  const handlePrice = (e) => {
    console.log(e.target.value);
    setPrice(e.target.value);
  };
  const handleSearch = () => {
   setOpenDate(false);
   setOpenOptions(false);
   // Increment the searchKey to trigger a re-render
   setSearchKey((prevKey) => prevKey + 1);
 };
  const handleCategoryChange = (category) => {
 
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const handleAccommodationChange = (accommodation) => {
  
    // Toggle selected accommodation
    if (selectedAccommodations.includes(accommodation)) {
      setSelectedAccommodations(
        selectedAccommodations.filter((acc) => acc !== accommodation)
      );
    } else {
      setSelectedAccommodations([...selectedAccommodations, accommodation]);
    }
  };
  const handleFacilityChange = (facility) => {
    // Check if the facility is already selected
    const facilityIdString = facility.toString();
    const isFacilitySelected = selectedFacilities.includes(facility);

    // Toggle selected facility
    if (isFacilitySelected) {
      setSelectedFacilities(
        selectedFacilities.filter((fac) => fac !== facility)
      );
    } else {
      setSelectedFacilities([...selectedFacilities, facility]);
    }
  };

  const handleCollectionChange = (collection) => {
    // Toggle selected collection
    if (selectedCollections.includes(collection)) {
      setSelectedCollections(
        selectedCollections.filter((col) => col !== collection)
      );
    } else {
      setSelectedCollections([...selectedCollections, collection]);
    }
  };
  const handleOption=(named,operation)=>{
   setOptions(prev=>{return{
      ...prev,[named]:operation==="i"?options[named]+1:options[named]-1
  }})
  }
  const handleLocation=(e)=>{
   setOpenDate(false);
   setOpenOptions(false);
   setLocation(e.target.value)
  }
  const filteredData = data.filter((item) => {
    // Apply filters based on selected values
    const passesCategoryFilter =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);
    const passesAccommodationFilter =
      selectedAccommodations.length === 0 ||
      selectedAccommodations.includes(item.hotel_type);
    const passesFacilityFilter =
      selectedFacilities.length === 0 ||
      selectedFacilities.some((fac) => {
        const facilityIdString = fac.toString();
        return item.amenities.some(
          (amenity) => Object.keys(amenity)[0] === facilityIdString
        );
      });
    const passesCollectionFilter =
      selectedCollections.length === 0 ||
      selectedCollections.includes(item.country_name);
    const passesPriceFilter = item.pricing[0] >= price;

    const passesLocationFilter =
    !location ||
    (item.city &&
      item.city.toLowerCase().includes(location.toLowerCase()));

      const maxAllowed = options.adult+options.children<=item.room_categories_with_data[0].max_occupancy_allowed;

    return (
      passesCategoryFilter &&
      passesAccommodationFilter &&
      passesFacilityFilter &&
      passesCollectionFilter &&
      passesPriceFilter&&
      passesLocationFilter&&
      maxAllowed
    );
  });

  // Inside your WebPage component

//   useEffect(() => {
//    const handleClickOutsideCalendar = (event) => {
//      // Check if the click target is within the headerSearchItem element
//      if (
//        event.target.closest(".headerSearchItem") === null &&
//        openDate
//      ) {
//        setOpenDate(false);
//      }
//    };
 
//    document.addEventListener("click", handleClickOutsideCalendar);
 
//    return () => {
//      document.removeEventListener("click", handleClickOutsideCalendar);
//    };
//  }, [openDate]);
useEffect(() => {
   const handleClickOutsideDate = (event) => {
     // Check if the click target is within the headerSearchItem element
     if (
       event.target.closest(".headerSearchItem") === null &&
       openDate
     ) {
       setOpenDate(false);
     }
   };
 
   const handleClickOutsideOptions = (event) => {
     // Check if the click target is within the headerSearchItem element
     if (
       event.target.closest(".headerSearchItem") === null &&
       openOptions
     ) {
       setOpenOptions(false);
     }
   };
 
   document.addEventListener("click", handleClickOutsideDate);
   document.addEventListener("click", handleClickOutsideOptions);
 
   return () => {
     document.removeEventListener("click", handleClickOutsideDate);
     document.removeEventListener("click", handleClickOutsideOptions);
   };
 }, [openDate, openOptions]);
 
 


 

  return (
    <div className="grid-container">
      <div className="item0">
        <NavBar />
      </div>

      <div className="item1" id="head">
        <div>
          <h4 className="mainhead">Tours in India <span className='services'>(*Services only in hyderabad and delhi*)</span></h4>
        </div>
        <div className="headerSearch">
          <div className="headerSearchItem" onClick={()=>{
            setOpenDate(false);
            setOpenOptions(false);
          }}>
            <IoLocationOutline className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going?"
              className="headerSearchInput"
              onChange={handleLocation}
            />
          </div>
          <div className="headerSearchItem">
            <LuCalendarCheck className="headerIcon" onClick={()=>setOpenDate(!openDate)} />
            <span className="headerSearchText" onClick={()=>{
  setOpenOptions(false);

               setOpenDate(!openDate)}}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
           {openDate&& <DateRange
           ref={calendarRef}
              onChange={(item) =>{
               // setOpenDate(false);
               setDate([item.selection])
              } }
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}              
              ranges={date}
              className="date"             
              
            />}
            
          </div>
          <div className="headerSearchItem">
            <TbCompass className="headerIcon" onClick={()=>setOpenOptions(!openOptions)} />
            <span onClick={()=>{
               setOpenDate(false);
               setOpenOptions(!openOptions)}} className="headerSearchText">{`${options.adult} adult . ${options.children} children .${options.roomNo} rooms`}</span>
           {openOptions&&(<div className="options">
               <div className="optionsItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" disabled={options.adult<=1} onClick={()=>handleOption("adult","d")}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                  </div>
                 
               </div> 
               <div className="optionsItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton"  disabled={options.children<=1} onClick={()=>handleOption("children","d")}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                  </div>

                 
               </div>
               <div className="optionsItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton"  disabled={options.roomNo<=1} onClick={()=>handleOption("roomNo","d")}>-</button>
                  <span className="optionCounterNumber">{options.roomNo}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("roomNo","i")}>+</button>
                  </div>
              
               </div>
            </div>)} 
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>

      <div className="item2">
        <div className="it2-1">
          <h6>Category Types</h6>

          <div className="tour">
            <div className="tour-in">
              <input
                type="checkbox"
                id="tours"
                name="category1"
                onChange={() => handleCategoryChange("OYO Rooms")}
              />
              <label htmlFor="tours">
                <span id="category-1">OYO-Rooms-</span>
                <span id="category-2">
                  Super affordable stays with essential amenities
                </span>
              </label>
            </div>
          </div>
          <div className="attractions">
            <div className="attractions-in">
              <input
                type="checkbox"
                id="attractions"
                name="category2"
                onChange={() => handleCategoryChange("Townhouse")}
              />
              <label htmlFor="attractions">
                <span id="attractions-1">Townhouse-</span>
                <span id="attractions-2">
                  Hotels at prime location and Premium amenities
                </span>
              </label>
            </div>
          </div>
          <div className="daytrips">
            <div className="daytrips-in">
              <input
                type="checkbox"
                id="daytrips"
                name="category3"
                onChange={() => handleCategoryChange("Townhouse Oak")}
              />
              <label htmlFor="daytrips">
                <span id="daytrips-1">Townhouse-</span>
                <span id="daytrips-2">
                  Your friendly,premium neighbourhood hotel-Serviced by OYO
                </span>
              </label>
            </div>
          </div>
          <div className="outdoor">
            <div className="outdoor-in">
              <input
                type="checkbox"
                id="outdoor"
                name="category4"
                onChange={() => handleCategoryChange("Flagship")}
              />
              <label htmlFor="outdoor">
                <span id="outdoor-1">Flagship-</span>
                <span id="outdoor-2">
                  Affordable hotels at Prime locations-Served by OYO
                </span>
              </label>
            </div>
          </div>

          <div className="concerts">
            <div className="concerts-in">
              <input
                type="checkbox"
                id="concerts"
                name="category5"
                onChange={() => handleCategoryChange("Collection O")}
              />
              <label htmlFor="concerts">
                <span id="concerts-1">Collection O-</span>
                <span id="concerts-2">
                  Beautifully designed,private homes crafted for the travellers
                  who craves comfort
                </span>
              </label>
            </div>
          </div>
        </div>
        <br />
        <hr />

        <div className="it2-2">
          <h6>Accomodation Type</h6>

          <div className="accomodation">
            <div className="accomodation-in">
              <input
                type="checkbox"
                id="accomodation"
                name="accomodation1"
                onChange={() => handleAccommodationChange("OYO Home")}
              />
              <label htmlFor="accomodation">
                <span id="accomodation-1">OYO Home</span>
              </label>
            </div>
          </div>
          <div className="accomodation-1">
            <div className="accomodation-1-in">
              <input
                type="checkbox"
                id="accomodation-1"
                name="accomodation2"
                onChange={() => handleAccommodationChange("Hotel")}
              />
              <label htmlFor="accomodation-1">
                <span id="accomodation1-1">Hotel</span>
              </label>
            </div>
          </div>

          {/* Add more 'Other' categories here if needed */}
        </div>
        <br />
        <hr />

        <div className="it2-3">
          <h6>Price</h6>

          <div className="price">
            <div className="price-in">
              <label htmlFor="price">
                <span id="price">min$1000-max$10000</span>
              </label>
              <input
                type="range"
                max={4000}
                min={1000}
                id="price"
                onChange={(e) => handlePrice(e)}
                name="price"
              />
            </div>
          </div>
        </div>
        <br />
        <hr />

        <div className="it2-4">
          <h6>Hotel Facilities</h6>

          <div className="seatingarea">
            <div className="seatingarea-in">
              <input
                type="checkbox"
                id="seatingarea"
                name="facilities1"
                onChange={() => handleFacilityChange(9)}
              />
              <label htmlFor="seatingarea">
                <span>Reception</span>
              </label>
            </div>
          </div>
          <div className="balcony">
            <div className="balcony-in">
              <input
                type="checkbox"
                id="balcony"
                name="facilities2"
                onChange={() => handleFacilityChange(39)}
              />
              <label htmlFor="facilities">
                <span>Tv</span>
              </label>
            </div>
          </div>
          <div className="ac">
            <div className="ac-in">
              <input
                type="checkbox"
                id="ac"
                name="facilities5"
                onChange={() => handleFacilityChange(13)}
              />
              <label htmlFor="ac">Ac</label>
            </div>
          </div>
          <div className="king">
            <div className="king-in">
              <input
                type="checkbox"
                id="king"
                name="facilities3"
                onChange={() => handleFacilityChange(154)}
              />
              <label htmlFor="king">
                <span>King Sized Bed</span>
              </label>
            </div>
          </div>
          <div className="queen">
            <div className="queen-in">
              <input
                type="checkbox"
                id="queen"
                name="facilities4"
                onChange={() => handleFacilityChange(155)}
              />
              <label htmlFor="queen">
                <span>Queen Sized Bed</span>
              </label>
            </div>
          </div>
        </div>
        <br />
        <hr />

        <div className="it2-5">
          <h6>Collections</h6>

          <div className="family">
            <div className="family-in">
              <input
                type="checkbox"
                id="family"
                name="collections1"
                onChange={() => handleCollectionChange("India")}
              />
              <label htmlFor="family">
                <span>Family OYOs</span>
              </label>
            </div>
          </div>
          <div className="travellers">
            <div className="travellers-in">
              <input
                type="checkbox"
                id="travellers"
                name="collections2"
                onChange={() => handleCollectionChange("India")}
              />
              <label htmlFor="travellers">
                <span>For Group Travellers</span>
              </label>
            </div>
          </div>
          <div className="accepted">
            <div className="accepted-in">
              <input
                type="checkbox"
                id="accepted"
                name="collections3"
                onChange={() => handleCollectionChange("India")}
              />
              <label htmlFor="accepted">
                <span>Local IDs accepted</span>
              </label>
            </div>
          </div>
          <div className="couples">
            <div className="couples-in">
              <input
                type="checkbox"
                id="couples"
                name="collections4"
                onChange={() => handleCollectionChange("India")}
              />
              <label htmlFor="couples">
                <span>OYOs welcomes couples</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="item3">
        {filteredData.length === 0 ? (
          <p className="no-data-message">No data is matching your criteria.</p>
        ) : (
          <Main datai={filteredData} />
        )}
      </div>

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
            <input type="text" placeholder="Your Email" id="gfemail"  />
            <button className="gfsubs" onClick={() => setIsModalOpen(true)}>Subscribe</button>
          </div>
        </div>
      </div>
      <TransitionsModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
