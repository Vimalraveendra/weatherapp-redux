import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../../../tests-utils";
import WeatherForm from "./WeatherForm";
import userEvent from "@testing-library/user-event"

describe('WeatherForm component', () => { 
        test('renders all form inputs and buttons', () => { 
             renderWithProviders(<WeatherForm/>)
             const cityInput=screen.getByRole('textbox',{name:/city/i});
             const countryInput=screen.getByRole('textbox',{name:/country/i});
             const submitButton=screen.getByRole("button",{name:/get weather/i});
             const clearButton= screen.getByRole("button",{name:/clear/i})
             expect(cityInput).toBeInTheDocument();
             expect(countryInput).toBeInTheDocument();
             expect(submitButton).toBeInTheDocument();
             expect(clearButton).toBeInTheDocument();
         })

         test('renders  form elements with initial values',()=>{
            renderWithProviders(<WeatherForm/>);
            const cityInput=screen.getByRole('textbox',{name:/city/i});
            const countryInput=screen.getByRole('textbox',{name:/country/i});
            expect(cityInput).toHaveValue("");
            expect(countryInput).toHaveValue("");
         })

         test('renders the form elements and allow user input',async()=>{
            const user=userEvent.setup();
            renderWithProviders(<WeatherForm/>);
            const cityInput=screen.getByRole('textbox',{name:/city/i});
            const countryInput=screen.getByRole('textbox',{name:/country/i});

             // Simulate user input
             await user.type(cityInput,"London");
             await user.type(countryInput,"UK");

             expect(cityInput).toHaveValue("London");
             expect(countryInput).toHaveValue("UK");
         })

         test("submit  and clear buttons are disabled when input fields are empty",()=>{
               renderWithProviders(<WeatherForm/>);
               const submitButton = screen.getByRole("button",{name:/get weather/i});
               const clearButton = screen.getByRole("button",{name:/clear/i});
               expect(submitButton).toBeDisabled();
               expect(clearButton).toBeDisabled();
         })

         test("submit  and clear buttons are enabled when input fields have values",async()=>{
            const user = userEvent.setup();
            renderWithProviders(<WeatherForm/>);
            const cityInput=screen.getByRole('textbox',{name:/city/i});
            const countryInput=screen.getByRole('textbox',{name:/country/i});

            await user.type(cityInput,"London");
            await user.type(countryInput,"UK");

            const submitButton = screen.getByRole("button",{name:/get weather/i});
            const clearButton = screen.getByRole("button",{name:/clear/i});
            
            expect(submitButton).toBeEnabled();
            expect(clearButton).toBeEnabled();
         })

         test('resets form fields when the clear button is clicked', async() => { 
             const user = userEvent.setup();
            renderWithProviders(<WeatherForm/>);
            const cityInput=screen.getByRole('textbox',{name:/city/i});
            const countryInput=screen.getByRole('textbox',{name:/country/i});
            const clearButton = screen.getByRole("button",{name:/clear/i});

            await user.type(cityInput,"London");
            await user.type(countryInput,"UK");

            await user.click(clearButton);

            expect(cityInput).toHaveValue("");
            expect(countryInput).toHaveValue("");
         })

         test('disables submit and clear buttons when any input field is empty', async() => { 
            const user = userEvent.setup();
            renderWithProviders(<WeatherForm/>);
            const cityInput=screen.getByRole('textbox',{name:/city/i});
            const countryInput=screen.getByRole('textbox',{name:/country/i});
            const submitButton = screen.getByRole('button', { name: /get weather/i });
            const clearButton = screen.getByRole('button', { name: /clear/i });  

            await user.type(cityInput,"London");
            expect(submitButton).toBeDisabled();
            expect(clearButton).toBeDisabled();

            await user.clear(cityInput);
            await user.type(countryInput,"UK");
            expect(submitButton).toBeDisabled();
            expect(clearButton).toBeDisabled();
         })

         test('submits the form with valid inputs', async() => { 
            const user = userEvent.setup();
            renderWithProviders(<WeatherForm/>);
            const cityInput=screen.getByRole('textbox',{name:/city/i});
            const countryInput=screen.getByRole('textbox',{name:/country/i});
            const submitButton = screen.getByRole('button', { name: /get weather/i });

            await user.type(cityInput,"London");
            await user.type(countryInput,"UK");
            await user.click(submitButton);

            expect(cityInput).toBeInTheDocument();
            expect(countryInput).toBeInTheDocument();
            expect(cityInput).toHaveValue("London");
            expect(countryInput).toHaveValue("UK");
         })
 })