import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.css';



export default function Home() {

  const [newEvent, setNewEvent] = useState({ id: "", title: "", start: "", end: "" });

  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  
  
  
  const events = [
    {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2022, 1, 10),
      end: new Date(2022, 1, 10),
    },
    {
      title: "Vacation",
      start: new Date(2022, 6, 7),
      end: new Date(2022, 6, 10),
    },
    {
      title: "Conference",
      start: new Date(2022, 6, 20),
      end: new Date(2022, 6, 23),
    },
  ];
  
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    localStorage.setItem('..allEvents', 'newevent');
  }

  function selectedEvent(id){
    
  }

  function handleDeleteEvent(){
    console.log("delete event")
    localStorage.removeItem(id);
    
    
  }
  
  const handleEventSelection = (e) => {
    console.log(e, "Event data");
  };
  
  const [allEvents, setAllEvents] = useState(events);

  return (
    <div className={styles.container}>
      <h1>Calendar</h1>
      <h2>Notes</h2>
      <div style={{width:'100%', alignItems:'center', display:'flex', flexDirection:'column'}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "50%",
          }}
        >
        <div style={{flex:'1'}}>
          <input
            type="text"
            placeholder="Add Title"
            // style={{ width: '100%'}}
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value, id:Date.now()})
            }
          />
          </div>
          <div style={{flex:'1'}}>
            <DatePicker
              placeholderText="Start Date"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
          </div>
          <div style={{flex:'1'}}>
            <DatePicker
              placeholderText="End Date"
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
          </div>
        </div>
        <div style={{marginTop:'10px'}}>
          Agregar Hora
        </div>
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
        <button style={{ marginTop: "10px" }} onClick={handleDeleteEvent}>
          Delete Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(event) => (console.log(event)) }
        style={{ height: 500, margin: "50px" }}
      />

    </div>
  )
}
