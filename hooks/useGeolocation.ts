"use client";

import { useState, useEffect } from "react";

interface GeolocationState {
  latitude: number;
  longitude: number;
  error: string | null;
  loading: boolean;
}

export const useGeolocation = (
  defaultLat: number = -6.2,
  defaultLong: number = 106.816666
) => {
  const [state, setState] = useState<GeolocationState>({
    latitude: defaultLat,
    longitude: defaultLong,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState((prev) => ({
        ...prev,
        error: "Geolocation is not supported",
        loading: false,
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          loading: false,
        });
      },
      (error) => {
        setState((prev) => ({
          ...prev,
          error: error.message,
          loading: false,
        }));
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, [defaultLat, defaultLong]);

  return state;
};
