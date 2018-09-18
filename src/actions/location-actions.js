const updateLocation = (lat, long) => ({
  type: 'UPDATE_LOCATION',
  lat,
  long,
});

export default { updateLocation };
