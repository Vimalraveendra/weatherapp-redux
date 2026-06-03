import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../tests-utils";
import WeatherDetails from "./WeatherDetails";

describe('WeatherDetails component', () => { 
        const mockWeatherData = {
                temperature: 15,
                humidity: 80,
                city: "London",
                country: "UK",
               description: "light rain",
        }
       test('renders weather details correctly', () => { 
            renderWithProviders(<WeatherDetails weatherData={mockWeatherData}/>);
            expect(screen.getByText(/London/i)).toBeInTheDocument();
            expect(screen.getByText(/UK/i)).toBeInTheDocument();
            expect(screen.getByText(/15/i)).toBeInTheDocument();
            expect(screen.getByText(/80/i)).toBeInTheDocument();
            expect(screen.getByText(/light rain/i)).toBeInTheDocument();
       })
})