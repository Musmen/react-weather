const updateCoordinates = (setCoordinates, changeLoadingState) => {
  changeLoadingState(true);
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    setCoordinates({ latitude, longitude });
  });
};

export default updateCoordinates;
