const { user ,ref,email} = useMyContext();
const [filteredData, setFilteredData] = useState([...data])
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
  const locationinput=useRef(null)




  const [tempLocation, setTempLocation] = useState('');
const [tempOptions, setTempOptions] = useState({
  adult: 1,
  children: 0,
  roomNo: 1,
});

const [subscribedEmail, setSubscribedEmail] = useState("");
const [subscribeButtonContent, setSubscribeButtonContent] = useState("Subscribe");
const [inputDisabled, setInputDisabled] = useState(false);

// localStorage.setItem('subscribedEmails', JSON.stringify([]));


const handleSubscribe = () => {
  // Assuming `userEmail` is the email of the logged-in user
  const userEmail = email; // Update this based on your user object structure

  if (subscribedEmail === userEmail) {
    const isSubscribed = localStorage.getItem('isSubscribed') === 'true';

    if (isSubscribed) {
      // Unsubscribe logic
      localStorage.removeItem('isSubscribed');
      alert("Unsubscribed successfully!");
      setSubscribedEmail('');
      setSubscribeButtonContent("Subscribe");
      setInputDisabled(false);
    } else {
      // Subscribe logic
      localStorage.setItem('isSubscribed', 'true');
      alert("Subscription successful!");
      setSubscribeButtonContent("Unsubscribe");
      setInputDisabled(true);
    }
  } else {
    alert("Email entered does not match the logged-in user's email.");
  }
};




  const calendarRef = useRef(null); 

  const handlePrice = (e) => {
    console.log(e.target.value);
    setPrice(e.target.value);
  };
  localStorage.setItem('name',JSON.stringify(user))


  const applyFilters = () => {
    return data.filter((item) => {
      const passesCategoryFilter =
        selectedCategories.length === 0 || selectedCategories.includes(item.category);
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
        selectedCollections.length === 0 || selectedCollections.includes(item.country_name);
      const passesPriceFilter = item.pricing[0] >= price;
  
      const passesLocationFilter =
        !location ||
        (item.city &&
          item.city.toLowerCase().includes(location.toLowerCase()));
  
      const maxAllowed = options.adult + options.children <= item.room_categories_with_data[0].max_occupancy_allowed;
  
      return (
        passesCategoryFilter &&
        passesAccommodationFilter &&
        passesFacilityFilter &&
        passesCollectionFilter &&
        passesPriceFilter &&
        passesLocationFilter &&
        maxAllowed
      );
    });
  };
  

  
  console.log(filteredData);
  

  console.log(filteredData)

  const handleCategoryChange = (category) => {

    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }

    const updatedFilteredData = applyFilters();
    setFilteredData(updatedFilteredData);
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

    const updatedFilteredData = applyFilters();
    setFilteredData(updatedFilteredData);
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

    const updatedFilteredData = applyFilters();
    setFilteredData(updatedFilteredData);
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


    const updatedFilteredData = applyFilters();
    setFilteredData(updatedFilteredData);
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

  const handleSearch = () => {
  setOpenDate(false);
  setOpenOptions(false);
  // Increment the searchKey to trigger a re-render
  setSearchKey((prevKey) => prevKey + 1);
  
  let filteredDatai = data.filter((item) => {
    const passesLocationFilter =
  !location ||
  (item.city &&
    item.city.toLowerCase().includes(location.toLowerCase()));

    const maxAllowed = options.adult+options.children<=item.room_categories_with_data[0].max_occupancy_allowed;

    return passesLocationFilter&&maxAllowed

    //  const updatedFilteredData = applyFilters();
  })

  setFilteredData(filteredDatai);
  


};

  useEffect(() => {
    const updatedFilteredData = applyFilters();
    setFilteredData(updatedFilteredData);
  }, [selectedCategories, selectedAccommodations, selectedFacilities, selectedCollections, price]);








useEffect(() => {
  const handleClick = (event) => {
    const isHeaderSearchItem = event.target.closest('.but2') !== null;
  
      if (!user && !isHeaderSearchItem) {
        alert('Please login to interact with the page.');
        setOpenDate(false);
  setOpenOptions(false);
        event.preventDefault();
        event.stopPropagation();
        
      }
    document.addEventListener('click',()=>{
      setOpenDate(false);
  setOpenOptions(false);
    })


  };

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  };
}, [user,openDate,openOptions]);