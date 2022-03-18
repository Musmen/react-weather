const updateCoordinates = (onLocationChangeHandler, language) => {
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    const { latitude, longitude } = coords;
    await onLocationChangeHandler({ latitude, longitude }, language);
  });
};

export default updateCoordinates;
