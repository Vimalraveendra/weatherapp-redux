
export interface Weather{
  temperature: "",
  humidity: "",
  city: "",
  country: "",
  description: "",
}

export interface WeatherState{
    isLoading:boolean,
    weatherData:Weather|null,
    error:string|null
}