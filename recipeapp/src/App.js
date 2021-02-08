import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import PageHeader from "./components/PageHeader";
import SearchBar from "./components/SearchBar";


const API_URL = "https://recipe-puppy.p.rapidapi.com";
const DEFAULT_HEADERS = {
    "x-rapidapi-key": "821c2519afmsh0132533c0b7eb88p14b020jsn6e7615bf0870",
    "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
};

export const recipePuppyRequest = axios.create({
    baseURL: API_URL,
    headers: DEFAULT_HEADERS,
});

function App() {

    const [recipes, setRecipes] = useState([]);

    const searchRequest = useCallback(async (options) => {
        recipePuppyRequest
            .get("/", {
                params: {
                    ...options
                },
            })
            .then((result) => {
                console.log(result)
                setRecipes(result.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        searchRequest();
    }, [searchRequest]);

    return (
        <div id="main-app">

            <PageHeader/>

            <SearchBar searchRequest={searchRequest} />

            <div className="container">
                <div id="recipe-desk">

                    {
                        recipes.length ? (
                            recipes.map((recipe, index) => {
                                return (
                                    <RecipeCard key={index} recipe={recipe} />
                                );
                            })
                        ) : (
                            <h3>
                                No Recipe 
                            </h3>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
