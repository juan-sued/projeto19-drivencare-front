import styled from 'styled-components';

export default function ButtonsHours({ date, title, setPayload }) {
  //
  function alterHour(event) {
    const hourOfDate = date.getHours();
    let currentHour = hourOfDate + ':00:00';
    if (hourOfDate < 10) currentHour = '0' + hourOfDate + ':00:00';

    const dateInString = date.toString();

    const hourSelected = event.target.value;

    const newDate = dateInString.replace(currentHour, hourSelected);

    setPayload({ timestamp: new Date(newDate.toLocaleString()) });
  }
  const hoursDisabled = ['7', '10', '15', '17'];
  const morningHours = ['7', '8', '9', '10', '11'];
  const afternoonHours = ['13', '14', '15', '16', '17', '18'];

  const isMorning = title === 'Manhã' ? true : false;

  if (isMorning) {
    return (
      <ButtonsHoursStyle>
        <div className="containerTitle">
          <h1>{title}</h1>
        </div>
        <div className="buttonsContainer">
          {morningHours.map((hour, index) => (
            <ButtonHour
              key={index}
              hour={hour}
              alterHour={alterHour}
              disabled={hoursDisabled.find(
                hourDisabled => hourDisabled === hour
              )}
            />
          ))}
        </div>
      </ButtonsHoursStyle>
    );
  } else {
    return (
      <ButtonsHoursStyle>
        <div className="containerTitle">
          <h1>{title}</h1>
        </div>
        <div className="buttonsContainer">
          {afternoonHours.map((hour, index) => (
            <ButtonHour
              key={index}
              hour={hour}
              alterHour={alterHour}
              disabled={hoursDisabled.find(
                hourDisabled => hourDisabled === hour
              )}
            />
          ))}
        </div>
      </ButtonsHoursStyle>
    );
  }
}

export function ButtonHour({ hour, alterHour, disabled }) {
  return (
    <label className="radio">
      <input
        type="radio"
        name="radio"
        value={hour + ':00:00'}
        onChange={alterHour}
        disabled={disabled}
      />
      <span className="name">{hour}:00</span>
    </label>
  );
}

const ButtonsHoursStyle = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 10px;
  margin-top: 30px;
  .buttonsContainer {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.5rem;
    background-color: #eee;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 0.25rem;
    width: 100%;
    font-size: 14px;
    margin-top: 15px;

    .radio {
      flex: 1 1 auto;
      text-align: center;
    }

    .radio input {
      display: none;
    }

    .radio .name {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      padding: 0.5rem 0;
      color: rgba(51, 65, 85, 1);
      transition: all 0.3s ease-in-out;
    }

    .radio input:hover + .name {
      background-color: rgba(0, 0, 0, 0.05);
      font-weight: 600;
    }
    .radio input:checked + .name {
      background-color: #fff;
      font-weight: 600;
    }
    .radio input:disabled + .name {
      color: rgba(0, 0, 0, 0.2);
      font-weight: 600;
      cursor: not-allowed;
      :hover {
        background-color: transparent;
      }
    }
  }
`;
