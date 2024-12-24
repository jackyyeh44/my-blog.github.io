import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";
// import "../styles/style.css";

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  const auth = "p7ev32vx8W8dNG0n9R9L2hBgSDYAKdakyJMJp5QNBWVMv40gTuo3Y3LW";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });

    setData(result.data.photos);
  };

  //   const morePicture = () => {
  // let newURL;
  // if()
  //   };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="picture">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      {/* <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div> */}
    </div>
  );
};

export default Homepage;
