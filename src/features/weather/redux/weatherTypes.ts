
export interface Weather{
  temperature: number,
  humidity: number,
  city: string,
  country: string,
  description: string,
}

export interface WeatherState{
    isLoading:boolean,
    weatherData:Weather|null,
    error:string|null
}