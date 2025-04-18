import "./App.css";
import commentsData from "./data/comments.json";
import NestedComments from "./components/Nested-Comments";

function App() {
  return (
    <div>
      <h1>Nested Comments</h1>
      <NestedComments commentsData={commentsData} />
    </div>
  );
}

export default App;
