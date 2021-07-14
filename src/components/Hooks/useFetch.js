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
        return data.photos.map((photo) => {
          return {
            id: photo.id,
            url: photo.src.medium,
            photographer: photo.photographer,
            photographerUrl: photo.photographer_url,
          };
        });
      })
      .then((array) => setDataArray(shuffleArray(array)));
  }, [numberOfPics]);

  return [dataArray, setDataArray];
};

function shuffleArray(array) {
  const shuffledArray = [];
  while (array.length !== 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    shuffledArray.push(array.splice(randomIndex, 1)[0]);
  }
  return shuffledArray;
}

export default useFetch;
