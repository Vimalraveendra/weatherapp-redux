import { screen, waitFor } from "@testing-library/dom";
import { renderWithProviders } from "../tests-utils";
import {server} from "../mocks/server";
import { handlers } from "../mocks/handlers";
import userEvent from "@testing-library/user-event";
import App from "./App";



describe('App component', () => { 
      test('renders the title', () => { 
          renderWithProviders(<App/>);
          const title = screen.getByRole("heading",{name:/weather app/i});
          expect(title).toBeInTheDocument();
      })

      test('renders the main content',()=>{
         renderWithProviders(<App/>);
        const main= screen.getByRole("main");
        expect(main).toBeInTheDocument();
      })
 }) 

 describe('App integration tests',()=>{
     test('displays weather data after submitting the form', async() => { 
            const user = userEvent.setup();
            server.use(handlers.success);
            renderWithProviders(<App />);

            const cityInput = screen.getByRole('textbox',{name:/city/i});
            const countryInput = screen.getByRole('textbox',{name:/country/i});
            const submitButton = screen.getByRole('button', { name: /get weather/i });

            await user.type(cityInput,"London");
            await user.type(countryInput,"UK");
            await user.click(submitButton);

              // Wait for weather data to appears
              await waitFor(()=>{
            expect(screen.getByText(/london/i)).toBeInTheDocument();
            expect(screen.getByText(/uk/i)).toBeInTheDocument();
            expect(screen.getByText(/15/i)).toBeInTheDocument();
            expect(screen.getByText(/80/i)).toBeInTheDocument();
            expect(screen.getByText(/light rain/i)).toBeInTheDocument();
        })  
      })

      test('displays error message on API failure', async() => { 
            const user = userEvent.setup();
            server.use(handlers.failure);
            renderWithProviders(<App />);

             const cityInput = screen.getByRole('textbox',{name:/city/i});
            const countryInput = screen.getByRole('textbox',{name:/country/i});
            const submitButton = screen.getByRole('button', { name: /get weather/i });

            await user.type(cityInput, 'InvalidCity');
            await user.type(countryInput, 'InvalidCountry');
            await user.click(submitButton);

            // Wait for error message to appears
           expect(await screen.findByText(/failed to fetch weather/i)).toBeInTheDocument();
       });

       test('clears error message when user starts typing', async() => {
            const user = userEvent.setup();
            renderWithProviders(<App />); 

            const cityInput = screen.getByRole('textbox',{name:/city/i});
            const countryInput = screen.getByRole('textbox',{name:/country/i});
            const submitButton = screen.getByRole('button', { name: /get weather/i });

            server.use(handlers.failure);

            await user.type(cityInput, 'InvalidCity');
            await user.type(countryInput, 'InvalidCountry');
            await user.click(submitButton);

             expect(await screen.findByText(/failed to fetch weather/i)).toBeInTheDocument();
             
             await user.type(cityInput,"L");
             expect(screen.queryByText(/failed to fetch weather/i)).not.toBeInTheDocument();

        })
 })