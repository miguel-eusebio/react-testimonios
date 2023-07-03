import './App.css';
import Testimonio from './components/Testimonio';
import membersTestimonies from './nombres-testimonio';

function App() {
  return (
    <div className="App">

      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        {membersTestimonies.map((member) => {
          return(
            <Testimonio
              key={member.id}
              name={member.name}
              country={member.country}
              image={member.image}
              charge={member.charge}
              company={member.company}
              testimony={member.testimony}
            />)
        })}

      </div>

    </div>
  );
}

export default App;

