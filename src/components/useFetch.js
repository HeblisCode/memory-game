import { useEffect, useState } from "react";

const useFetch = (numberOfPics) => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.pexels.com/v1/search?query=cat&curated?page=1&per_page=${numberOfPics}`,
      {
        headers: {
          Authorization:
            "563492ad6f91700001000001167cf63238cd4fe79fe6c132c3fbd43e",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setDataArray(
          data.photos.map((photo) => {
            return {
              id: photo.id,
              photographer: photo.photographer,
              url: photo.src.small,
            };
          })
        );
      });
  }, [numberOfPics]);

  return dataArray;
};

export default useFetch;
