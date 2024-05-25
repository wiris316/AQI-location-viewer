import React from "react";

export async function fetchLocationData(city: string) {
  try {
    const response = await fetch(`/api/location/${city}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('error', error)
  }
}