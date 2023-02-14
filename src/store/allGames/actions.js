import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllGames = createAsyncThunk(
  "getAllGames", 
  async ({inputText ,inputCategory}) => {
  try {
    let allgames = await axios.get(`http://localhost:8000/api/games?title=${inputText}&category_id=${inputCategory}`);
    return {
      success: true,
      response: {
        allgames: allgames.data.response,
       text: inputText,
        category: inputCategory,
      },
    };
  } catch (error) {
    return {
      success: false,
      response: { error: error.message },
    };
  }
});

const allGamesActions = { getAllGames };

export default allGamesActions;
