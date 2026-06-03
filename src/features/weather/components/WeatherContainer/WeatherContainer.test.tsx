import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../../../tests-utils";
import WeatherContainer from "./WeatherContainer";

describe('WeatherContainer component', () => { 
      test('renders loading state', () => { 
        renderWithProviders(<WeatherContainer/>,{
            preloadedState:{
                weather:{
                                isLoading:true,
                                weatherData:null,
                                error:null
                }
            }
        })
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
      })

      test('renders error state', () => { 
             renderWithProviders(<WeatherContainer/>,{
                preloadedState:{
                    weather:{
                        isLoading:false,
                        weatherData:null,
                        error:"Failed to fetch  weather"
                    }
                }
             })
             expect(screen.getByText(/failed to fetch weather/i)).toBeInTheDocument();
      })

      test('renders weather details when data is available', () => { 
                    const mockWeatherData = {
                        temperature: 15,
                        humidity: 80,
                        city: "London",
                        country: "UK",
                       description: "light rain",
                    };
             renderWithProviders(<WeatherContainer/>,{
                 preloadedState:{
                    weather:{
                        isLoading:false,
                        weatherData:mockWeatherData,
                        error:null
                    }
                 }
             })
             expect(screen.getByText(/Temperature:/i)).toBeInTheDocument();
            expect(screen.getByText(/Humidity:/i)).toBeInTheDocument();
            expect(screen.getByText(/Location:/i)).toBeInTheDocument();
            expect(screen.getByText(/Weather:/i)).toBeInTheDocument();
       })
})