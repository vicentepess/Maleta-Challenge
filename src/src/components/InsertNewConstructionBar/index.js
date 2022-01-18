import React, { useState } from "react";
import {
  Button,
  InputCidade,
  InputNomeDaObra,
  InsertBar,
  SelectEstado,
} from "./style";
import { states } from "../../utils/generalUtils";

export const InsertNewConstructionBar = (props) => {
  const [inputs, setInputs] = useState({
    obraNome: "",
    cidade: "",
    estado: "",
  });

  const handleAddingNewItem = () => {
    if (
      inputs.obraNome.length !== 0 &&
      inputs.cidade.length !== 0 &&
      inputs.estado.length !== 0
    ) {
      props.setArray([...props.array, inputs]);
      setInputs({
        obraNome: "",
        cidade: "",
        estado: "",
      });
    }
  };

  return (
    <InsertBar>
      <InputNomeDaObra
        placeholder="Nome da obra"
        value={inputs.nomeDaObra}
        onChange={(event) =>
          setInputs({ ...inputs, obraNome: event.target.value })
        }
      />
      <InputCidade
        placeholder="Cidade"
        value={inputs.cidade}
        onChange={(event) =>
          setInputs({ ...inputs, cidade: event.target.value })
        }
      ></InputCidade>
      <SelectEstado
        value={inputs.estado}
        onChange={(event) =>
          setInputs({ ...inputs, estado: event.target.value })
        }
      >
        {[
          <option value="">—</option>,
          ...states.map((state, index) => (
            <option key={index}>{state.region}</option>
          )),
        ]}
      </SelectEstado>
      <Button onClick={handleAddingNewItem}>Adicionar</Button>
    </InsertBar>
  );
};
