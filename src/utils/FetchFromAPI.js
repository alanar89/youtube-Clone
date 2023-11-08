import axios from "axios";

const baseUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  url: baseUrl,
  params: {
    // regionCode: "AR",
    maxResults: "50",
    //order: 'date'
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${baseUrl}/${url}`, options);
    //const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
