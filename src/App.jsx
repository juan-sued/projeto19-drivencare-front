import { useState } from 'react';

import Calendar from 'react-calendar';
import './App.css';
import styled from 'styled-components';
import ButtonsHours from './components/ButtonsHoursStyle';

function App() {
  const [date, setDate] = useState(new Date());

  const [payload, setPayload] = useState({
    timestamp: ''
  });

  console.log(payload);
  // console.log(date.getDate() + '-' + date.getFullYear());

  const daysDisabled = [10, 15, 20, 19];

  function isDayDisabled(date) {
    const day = date.date.getDate(),
      month = date.date.getMonth(),
      year = date.date.getFullYear();

    return day === 10 && month === 3 && year === 2023;
  }

  return (
    <div className="App">
      <FormWithCalendar action="" className="calendarForm">
        <div className="containerCalendar">
          <h1>Escolha uma data para a consulta:</h1>
          <Calendar
            onChange={setDate}
            value={date}
            tileDisabled={isDayDisabled}
          />
        </div>
        <ButtonsHours
          date={date}
          setDate={setDate}
          title={'Manhã'}
          setPayload={setPayload}
          payload={payload}
        />
        <ButtonsHours
          date={date}
          setDate={setDate}
          title={'Tarde'}
          setPayload={setPayload}
          payload={payload}
        />
      </FormWithCalendar>
    </div>
  );
}

export default App;

const FormWithCalendar = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  h1 {
    font-size: 25px;
  }

  .containerCalendar {
    background-color: red;
    padding: 20px;
    background-color: #eeeeee;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.5s ease-out;

    abbr {
      text-decoration: none;
    }
    button {
      background-color: transparent;
      border: none;
    }
    button:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
    }
    button:active {
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
    }
  }
`;
