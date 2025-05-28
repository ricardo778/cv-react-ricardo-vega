import './estilos.css';
export default function Educacion() {
  const educacion = [
    { id: 1, curso: "Tecnólogo en Análisis y Desarrollo de Software", institucion: "SENA", año: "2024" },
    { id: 2, curso: "Curso Profesional de React.js", institucion: "Platzi", año: "2023" },
    { id: 3, curso: "Fundamentos de Marketing Digital", institucion: "Google Activate", año: "2023" },
    { id: 4, curso: "Node.js - De cero a experto", institucion: "Udemy", año: "2022" },
    { id: 5, curso: "Curso Complementario de Git y GitHub", institucion: "SENA", año: "2022" },
    { id: 6, curso: "Introducción al Desarrollo Web", institucion: "Microsoft Learn", año: "2021" },
    { id: 7, curso: "Full Stack Web Development with React", institucion: "Coursera", año: "2023" },
    { id: 8, curso: "Lógica de Programación con JavaScript", institucion: "Alura Latam", año: "2022" },
    { id: 9, curso: "Responsive Web Design Certification", institucion: "FreeCodeCamp", año: "2021" },
    { id: 10, curso: "Técnico en Sistemas", institucion: "SENA", año: "2020" }
  ];

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.curso}</strong> - {edu.institucion} ({edu.año})
          </li>
        ))}
      </ul>
    </section>
  );
}
