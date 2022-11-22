// const DEBUG = true;

// async function _asyncGetCurrentPosition(options = {}) {
//   return new Promise((resolve, reject) => {
//     if ('geolocation' in navigator) {
//       // This is the JS function that actually gets the browser location
//       navigator.geolocation.getCurrentPosition(resolve, reject, options);
//     } else {
//       reject(Error('Browser does not support geolocation'));
//     }
//   });
// }

// async function getCurrentLocation() {
//   try {
//     const opts = { timeout: 2000 };
//     const geoPos = await _asyncGetCurrentPosition(opts);
//     const { latitude, longitude } = geoPos.coords;
//     if (DEBUG) {
//       console.log('geoloc: browser location:', latitude, longitude);
//     }
//     return [latitude, longitude];
//   } catch (err) {
//     console.log('geoloc: error:', err);
//     return (Error('We could not find your location'));
//   }
// }

// check if geolocation is supported on this browser
if (navigator.geolocation) {
  const timeoutVal = 10 * 1000 * 1000; // set a timeout value for the query
  navigator.geolocation.getCurrentPosition(
    // what to do if query succeeds
    ((position) => alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`)),
    ((error) => {
      // what to do if query fails:
      const errors = {
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Request timeout',
      };

      alert(`Error: ${errors[error.code]}`); // print the error
    }),
    // these 3 parameters are very important, especially the first one
    { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 },
  );
} else {
  alert('Geolocation is not supported by this browser');
}

// export default getCurrentLocation;
