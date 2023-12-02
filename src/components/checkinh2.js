let filteredData = data.filter((item) => {
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



  return (
    passesCategoryFilter &&
    passesAccommodationFilter &&
    passesFacilityFilter &&
    passesCollectionFilter &&
    passesPriceFilter
    // passesLocationFilter&&
    // maxAllowed
  );
});