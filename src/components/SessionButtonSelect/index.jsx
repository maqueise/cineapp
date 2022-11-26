import { useContext } from "react";
import { DateFormatPTBR } from "../../utils";
import { Label } from "./styled";
import {TicketContext} from '../../context/TicketContext'

export function SessionButtonSelect({session}){
    const {setTicket,ticket} = useContext(TicketContext)
    const selectSession = ()=>{
        setTicket(
            {
                ...ticket,
                session
            }
        )
    }
    return(
        <>
            <Label>{DateFormatPTBR(session.date)}
                <input type="radio" name="session"
                 onChange={selectSession}/>
            </Label>
        </>
    )
}