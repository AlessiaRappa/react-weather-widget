import "./style.css";

const Weather = (props) => {
    const location = props.location || "seleziona una città";
    const temp = props.temp || 0;
    const status = props.status || "N/A";
    const icon = props.icon || "N/A";

    const icona = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
    return (
      <section>
        <ul className="tempo">
          <li>Location: {location}</li>
          <li>Temperatura: {temp}°C </li>
          <li>Condizione: {status}</li>
          <li><img src= {icona} alt="icona" /></li>
        </ul>
        
      </section>
    );
  };

  
  export { Weather };