import http from "./services/httpService";

// White-Labelling
const getConfig = async () => {
  // Fallback value for the APP_ID
  const APP_ID = process.env.REACT_APP_ID || "1";

  try {
    const response = await http.get(
      `https://api-test.innoloft.com/configuration/${APP_ID}/`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getConfig;
