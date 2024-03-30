import { createContext, useContext, useEffect, useState,useReducer} from "react";
// import notecontext from './notecontext'
export const Chatcontext = createContext();

export const ChatcontextProvider = ({ children }) => {
    const [username, setusername] = useState('');
    const auth = getAuth();
    const user = JSON.parse(sessionStorage.getItem('userdata'));
    // const context = useContext(notecontext);
    // const { user, getUserdetails } = context;
    const INITIAL_STATE = {
        Chatid: "null",
        user: {}
    }

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    // Chatid: user?.email > action.payload.email ?
                    //     user?.email?.substring(0, user?.email.length - 10) + action.payload.email?.substring(0, action.payload.email.length - 10)
                    //     : action.payload.email?.substring(0, action.payload.email.length - 10) + user?.email?.substring(0, user?.email.length - 10)
                    // Chatid:action?.payload?.email?.substring(0, action?.payload?.email.length - 10)
                    Chatid:action?.payload?.firebaseid
                };
            default:
                return state
        }
    };

    const [state, dispatch] = useReducer(chatReducer,INITIAL_STATE)

    return (
        <Chatcontext.Provider value={{data:state,dispatch, username,setusername}}>
            {children}
        </Chatcontext.Provider>
    )
}

