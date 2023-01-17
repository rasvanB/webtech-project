import axios from "axios";

const baseUrl = "http://localhost:3000/api/activities/";

export const getActivity = async (id) => {
  try {
    const response = await axios.get(baseUrl + id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createFeedback = async (id, feedback) => {
  try {
    await axios.post(baseUrl + id + "/feedbacks/", feedback);
  } catch (error) {
    console.log(error);
  }
};
