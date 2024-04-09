import { create } from "zustand";

const loggedcheck = () =>{
    const checklog = localStorage.getItem('LOGGEDIN')
    return checklog
}

const useStore = create ((set) =>({
    loggedin : loggedcheck()
}))