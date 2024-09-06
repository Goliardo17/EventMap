import { EventType } from "../../entities/event/types"
import { SelectEvent } from "../../features/selectEvent"
import { events } from "./consts/events"

import "./style.css"

export const Events: React.FC = () => {
  return (
    <div className="container events column">
      <h2>Популярные мероприятия</h2>

      <div className="row events-list">
        {
          events.length ?
            events.map((event: EventType) => (
              <SelectEvent event={event} />
            ))
            : <>Loading...</>
        }
      </div>
    </div >
  )
}