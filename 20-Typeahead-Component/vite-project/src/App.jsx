import "./App.css";
import AutoComplete from "./assets/components/AutoComplete";

function App() {
  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.recipes;
  };
  return (
    <div>
      <AutoComplete
        placeholder={"eg. chicken salad"}
        fetchSuggestions={fetchSuggestions}
        dataKey="name"
        customloading={<>Loading Recipes...</>}
        onSelect={(res) => console.log(res)}
        caching={true}
        // onChange={(e) => {}}
        // onFocus={(e) => {}}
        // onBlur={(e) => {}}
        // customStyles={}
      />
    </div>
  );
}

export default App;
