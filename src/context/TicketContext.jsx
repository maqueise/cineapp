import { useState } from "react";
import { createContext } from "react";

export const TicketContext = createContext()

let ticketObject = {
    session:{},
    reservation:{},
    seat:null
}
export function TicketProvider({children}){
    const [ticket,setTicket] = useState(ticketObject)
    return (
        <TicketContext.Provider value={{ticket,setTicket}}>
            {children}
        </TicketContext.Provider>
    )
} 



