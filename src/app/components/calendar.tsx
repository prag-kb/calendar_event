import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useState } from 'react'

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const formatDate = (date:any) => {
    const options = { day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  return (
  <div className='calendar-container'>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin
        ]}
        headerToolbar={{
          left: 'prev,next dateButton',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth',
        }}
        customButtons={{
          dateButton: {
            text: formatDate(date),
            click: () => console.log('Date button clicked'),
          },
        }}
        datesSet={({ view }) => {
          setDate(view.activeStart);
        }}
        nowIndicator={true}
        editable={true}
        selectMirror={true}
        initialEvents={[
          { title: 'nice event', start: new Date(), resourceId: 'a' }
        ]}
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
        }}
      />
    </div>
  )
}

export default Calendar