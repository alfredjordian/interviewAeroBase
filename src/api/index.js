import axios from "axios"


export async function getRandomNSN() {
    try {
      const { data } = await axios.get(`/`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  export async function getNSN({nsn}) {
    try {
      const { data } = await axios.get(`/:id`);
      return data;
    } catch (error) {
      throw error;
    }
  }