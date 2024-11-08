//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({petList}) {
  return (
    <div>
    <h3>Lista de mascotas</h3>
    <ul>
      {petList.map((element) => (
        <li key={element.id}>
          <span>
            {element.name} {element.type}
          </span>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default Card;
