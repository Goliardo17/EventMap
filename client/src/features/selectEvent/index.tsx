import { SelectEventPropsType } from "./types"
import { Event } from "../../entities/event"

export const SelectEvent: React.FC<SelectEventPropsType> = ({ event }) => {
    return <Event event={event} />
}