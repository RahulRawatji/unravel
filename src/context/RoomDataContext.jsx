import React, { createContext, useContext, useEffect, useState } from 'react';
import fetchRoomData from '../api/fetchRoomData';

const RoomDataContext = createContext();

export const useRoomData = () => useContext(RoomDataContext);

export const RoomDataProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRoomData()
      .then(data => {
        setRooms(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <RoomDataContext.Provider value={{ rooms, loading, error }}>
      {children}
    </RoomDataContext.Provider>
  );
};
