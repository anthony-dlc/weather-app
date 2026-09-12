// Aqui llamaremos el clima, pasando, nombre de la ciudad, elementos y medida:

// API KEY: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"CIUDAD"?unitGroup={metric: celsius, us: fahrenheit}?key=MJX98HYDNNXS7WY4JM3JJK2FW&elements=tempmax,tempmin,temp`,

export default async function getWeather(city, unit) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=MJX98HYDNNXS7WY4JM3JJK2FW&elements=tempmax,tempmin,temp`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
