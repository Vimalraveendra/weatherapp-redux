import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../tests-utils";
import WeatherHero from "./WeatherHero";

describe('WeatherHero component', () => { 
     test('renders  the title and subtitle', () => { 
           renderWithProviders(<WeatherHero/>);
           const titleElement=screen.getByRole("heading",{name:/find weather/i});
           const subtitleElement=screen.getByText(/get weather details for any city in the world/i);
           expect(titleElement).toBeInTheDocument();
           expect(subtitleElement).toBeInTheDocument();
      })
 })