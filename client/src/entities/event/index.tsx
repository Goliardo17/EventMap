import { EventType } from "./types"

type EventPropsType = {
  event: EventType
}

export const Event = ({ event }: EventPropsType) => {
  return (
    <div className="column event-container">
      <img src={event.image} alt="мероприятие" />
      <p className="title">{event.title}</p>
      <p>Данные по мероприятию...</p>
    </div>
  )
}