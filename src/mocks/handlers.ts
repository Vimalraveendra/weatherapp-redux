import {rest} from 'msw';
        
export const mockResults = {
        "current": {
            "temperature": 15,
            "humidity": 80,
            "weather_descriptions": ["light rain"]
        },
        "location": {
        "name": "London",
        country: "UK",
        }
    }

    export const handlers={
        success:rest.get('http://api.weatherstack.com/current', (req,res,ctx)=>{
                return res(
                    ctx.status(200),
                    ctx.json(mockResults)
                )
            }),
        
         failure:rest.get('http://api.weatherstack.com/current', (req,res,ctx)=>{
                return res(
                    ctx.status(500),
                    ctx.json({message:"Failed to fetch users"})
                )
         })
        }
    