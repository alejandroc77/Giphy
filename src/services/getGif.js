//Toda este codigo es el llamado a la api
const apiKey = "M72GGQVgPrVcEj71pnTJIF1UpJllpw3G";
export const getGif = ({ keyword }) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((rep) => rep.json())
    .then((response) => {
      const { data } = response;
      const newGifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return newGifs;
    });
};
