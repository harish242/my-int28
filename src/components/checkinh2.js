// const filteredData = data.filter((item) => {
//    // Apply filters based on selected values
//    const passesCategoryFilter =
//      selectedCategories.length === 0 || selectedCategories.includes(item.category);
//    const passesAccommodationFilter =
//      selectedAccommodations.length === 0 ||
//      selectedAccommodations.includes(item.hotel_type);
//    const passesFacilityFilter =
//      selectedFacilities.length === 0 ||
//      selectedFacilities.some((fac) => {
//        const facilityIdString = fac.toString();
//        return item.amenities.some(
//          (amenity) => Object.keys(amenity)[0] === facilityIdString
//        );
//      });
//    const passesCollectionFilter =
//      selectedCollections.length === 0 || selectedCollections.includes(item.country_name);
//    const passesPriceFilter = item.pricing[0] >= price;
 
//    // Add filters for location, date, and room number
//    const passesLocationFilter =
//      !location ||(item.location&&location.toLowerCase() === item.location.toLowerCase()) ;
 
//      const passesDateFilter =
//      item.availability &&
//      item.availability.start_date &&
//      item.availability.end_date &&
//      date[0].startDate <= new Date(item.availability.start_date) &&
//      date[0].endDate >= new Date(item.availability.end_date);
   
 
//    const passesRoomNoFilter = options.roomNo <= item.available_rooms[0];
 
//    return (
//      passesCategoryFilter &&
//      passesAccommodationFilter &&
//      passesFacilityFilter &&
//      passesCollectionFilter &&
//      passesPriceFilter &&
//      passesLocationFilter &&
//      passesDateFilter &&
//      passesRoomNoFilter
//    );
//  });