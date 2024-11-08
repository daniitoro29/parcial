import { useState } from "react";
import Card from "./Card";
function App() {
  const [pet, setPet] = useState({
    name: "",
    type: "",
  });
  const [petList, setPetList] = useState([]);
  const [errors, setErrors] = useState({});

  const handleAddPet = (e) => {
    const namePet = e.target.value;
    setPet({
      ...pet,
      name: namePet,
    });
  };
  const handleAddType = (e) => {
    const typePet = e.target.value;
    setPet({
      ...pet,
      type: typePet,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (pet.name.trim() === "" || pet.type.trim() === "") {
      setErrors({
        empty: "El campo no debe estar vacio",
      });
      return;
    } 
    else if (pet.name.length < 6){
      setErrors({
        ...errors,
        lengthName:
          "El nombre de la mascota debe tener almenos 6 caracteres",
      });
      return
    }
    else if (pet.type.length < 3) {
      setErrors({
        ...errors,
        length:
          "El tipo de mascota debe tener almenos 3 caracteres",
      });
      return
    }
    setPetList([
      ...petList,
      {
        ...pet,
        id: crypto.randomUUID()
      },
    ]);
    setPet({
      name: "",
      type: "",
      
    });
    setErrors({})
  };

  return (
    <div className="App">
      <h1>Ingresa los datos de tu mascota</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Nombre de las mascota</label>
          <input
            type="text"
            id="mascota"
            name="mascota"
            value={pet.name}
            onChange={handleAddPet}
          />
        </div>
        <div>
          <label htmlFor="name">Tipo de mascota</label>
          <input type="text" id="tipo" name="tipo" onChange={handleAddType} value={pet.type} />
        </div>
        <button type="submit">Registrar mascota</button>
        <span>{errors.empty}</span>
        <span>{errors.lengthName}</span>
        <span>{errors.length}</span>
      </form>
      <Card petList={petList}/>
    </div>
  );
}

export default App;
