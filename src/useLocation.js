import React, {useState, useEffect} from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [err, setErr] = useState('');
  
    useEffect(()=> {
      window.navigator.geolocation.getCurrentPosition(
        position => setLat(position.coords.latitude),
        err => setErr(err.message)
      );
    }, []); //second arg empty - call useEffect function only once when mounted
  
    return [lat, err]; //community convention to use array here, other obj way might be better if func signature changes
};