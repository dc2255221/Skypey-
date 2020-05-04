// Create user reducer
// Import generateUser function to generate some static user infor
// Set default value for user field in state to generated user data

import { generateUser } from "../static-data";

export default function user (state = generateUser(), action) {
    return state;
}
