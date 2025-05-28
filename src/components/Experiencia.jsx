import './estilos.css';
export default function Experiencia() {
  const experiencia = [
  { id: 1, puesto: "Desarrollador Full Stack", empresa: "Navisoft Gaming", periodo: "2022-2024" },
  { id: 2, puesto: "Instructor TIC", empresa: "SENA", periodo: "2020-2022" },
  { id: 3, puesto: "Diseñador Web", empresa: "Creativa Studio", periodo: "2019-2020" },
  { id: 4, puesto: "Soporte Técnico", empresa: "TecnoPlus", periodo: "2018-2019" },
  { id: 5, puesto: "Freelancer Frontend", empresa: "Proyectos Independientes", periodo: "2021" },
  { id: 6, puesto: "Desarrollador Backend", empresa: "CodeMasters", periodo: "2023" },
  { id: 7, puesto: "Auxiliar en TI", empresa: "CompuRed", periodo: "2017-2018" },
  { id: 8, puesto: "Técnico en Sistemas", empresa: "InnovaTech", periodo: "2016-2017" },
  { id: 9, puesto: "Soporte de Redes", empresa: "NetServices", periodo: "2015-2016" },
  { id: 10, puesto: "Practicante de Desarrollo", empresa: "SoftDev SAS", periodo: "2014-2015" }
];


  // Renderiza condicionalmente si no hay experiencia
  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
