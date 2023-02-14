import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllGamesByFilter = createAsyncThunk(
    "getAllGamesByFilter", 
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

const getAllGames = createAsyncThunk(
  "getAllGames", 
  async ({inputText ,inputCategory}) => {
  try {
    let allgames = await axios.get("http://localhost:8000/api/games");
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

const allGamesActions = { getAllGames,  getAllGamesByFilter};

export default allGamesActions;
