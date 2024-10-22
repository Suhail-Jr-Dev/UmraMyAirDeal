import { createContext, useState } from "react";

export let EnquiryPopContext = createContext();

export function EnquiryPopUpProvider({ children }) {

    const [isFormOpen, setFormOpen] = useState(false);
    return <EnquiryPopContext.Provider value={[isFormOpen, setFormOpen]} >
        {
            children
        }
    </EnquiryPopContext.Provider>

}