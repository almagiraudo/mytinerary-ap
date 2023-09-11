import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_activities = createAsyncThunk(
    'read_activities',
    async({itinerary_id})=>{
        try {
            let data = await axios(apiUrl +'activities?itinerary_id=' + itinerary_id)
            console.log(data)
            return{
                activities: data.data.response
            }
        } catch (error) {
            console.log(error);
            return{
                activities:[]
            }
        }
    }
)

const activity_actions = {read_activities}
export default activity_actions 