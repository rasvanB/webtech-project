import axios from "axios";

const baseUrl = "http://localhost:3000/api/professors/";

export const createProfessor = async (name) => {
  try {
    await axios.post(baseUrl, { name });
  } catch (error) {
    console.log(error);
  }
};

export const getProfessor = async (name) => {
  try {
    const response = await axios.get(baseUrl + name);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getActivitiesOfProfessor = async (name) => {
  try {
    const response = await axios.get(baseUrl + name + "/activities");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createActivity = async (name, activity) => {
  try {
    await axios.post(baseUrl + name + "/activities", activity);
  } catch (error) {
    console.log(error);
  }
};
