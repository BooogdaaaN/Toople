import PopUp from "../components/UI/popUp/PopUp";
import { useState } from "react";
import RequireAuth from "../components/RequireAuth.jsx";
function useAuthPopUp() {
    const [isAuthPopUp, setIsAuthPopUp] = useState(false);
    const authPopUp = (
        <PopUp isOpen={isAuthPopUp} onClose={() => setIsAuthPopUp(false)}>
            <RequireAuth />
        </PopUp>
    );

    return [setIsAuthPopUp, authPopUp];
}

export default useAuthPopUp;
