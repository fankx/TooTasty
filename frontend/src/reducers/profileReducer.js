import profile from "../data/profile.json";
//import profile from "../component/datafornow/user.json";

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case "edit-profile":
            return {...state, profile};
        default:
            return state;
    }
};

export default profileReducer;