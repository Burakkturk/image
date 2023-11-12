import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID toJ37pAx-VwsXof8T_LTwxJe6Xu9xTmshD4SQN62Gas",
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
};
export default searchImages;
