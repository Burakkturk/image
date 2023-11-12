import "./App.css";
import SearchHeader from "./SearchHeader";
import axios from "axios";

function App() {
  const searchImages = (term) => {
    axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID toJ37pAx-VwsXof8T_LTwxJe6Xu9xTmshD4SQN62Gas",
      },
    });
  };
  const handleSubmit = (term) => {
    debugger;
    console.log(term);
    searchImages(term);
  };
  return (
    <div className="App">
      <SearchHeader onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
