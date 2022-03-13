const updateCoordinates = (onLocationChangeHandler) => {
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    const { latitude, longitude } = coords;
    await onLocationChangeHandler({ latitude, longitude });
  });
};

export default updateCoordinates;
