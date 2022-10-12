export const API_URL = process.env.REACT_APP_USE_PROD_BACKEND && process.env.REACT_APP_USE_PROD_BACKEND == "true" 
                        ?  "https://24tly05lg0.execute-api.us-west-1.amazonaws.com/Prod"
                        : "http://localhost:5000/api";