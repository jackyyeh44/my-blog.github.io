import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  let [data, setData] = useState(null);
  const auth = "p7ev32vx8W8dNG0n9R9L2hBgSDYAKdakyJMJp5QNBWVMv40gTuo3Y3LW";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

  const search = async () => {
    let result = await axios.get(initialURL, {
      headers: { Authorization: auth },
    });

    setData(result.data.photos);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} />
      <div className="picture">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
