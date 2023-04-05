import styled from 'styled-components';
import ButtonsHours from './ButtonsHoursStyle';
import { formatArrDate } from '../utils/utils';
import { useState } from 'react';

import Calendar from 'react-calendar';

export default function FormWithCalendar() {
  const [date, setDate] = useState(new Date());

  //requisição utilizando o date como chave
  const [payload, setPayload] = useState({
    timestamp: ''
  });
  console.log(payload);
  const daysAndHoursDisabled = [1681297200000];

  function isDayDisabled(date) {
    const datesDisabled = formatArrDate(daysAndHoursDisabled);

    const day = date.date.getDate(),
      month = date.date.getMonth(),
      year = date.date.getFullYear();

    const isDayDisabled = datesDisabled.find(
      dayDisabled =>
        dayDisabled.day === day &&
        dayDisabled.month === month + 1 &&
        dayDisabled.year === year
    );

    return isDayDisabled;
  }

  return (
    <FormWithCalendarStyle action="" className="calendarForm">
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
        daysAndHoursDisabled={daysAndHoursDisabled}
      />
      <ButtonsHours
        date={date}
        setDate={setDate}
        title={'Tarde'}
        setPayload={setPayload}
        payload={payload}
        daysAndHoursDisabled={daysAndHoursDisabled}
      />
    </FormWithCalendarStyle>
  );
}

const FormWithCalendarStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px;
  min-height: 560px;

  h1 {
    font-size: 25px;
  }

  .containerCalendar {
    padding: 20px;
    background-color: #eeeeee;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.5s ease-out;
    min-height: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .react-calendar__navigation {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-calendar__month-view__weekdays__weekday,
    .react-calendar__month-view__weekdays__weekday--weekend {
      text-align: center;
    }
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
    button:disabled {
      background-color: transparent;
      border: none;
      cursor: not-allowed;
    }
  }
`;
