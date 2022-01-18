import React, { useState } from 'react'
import { ConstructionItem } from '../../components/ConstructionItem'
import { InsertNewConstructionBar } from '../../components/InsertNewConstructionBar'
import { Container } from './style';

export const Home = () => {
    const [array, setArray] = useState([]);
    return (
        <Container>
        <h1>Lista de Obras</h1>
        <InsertNewConstructionBar setArray={setArray} array={array} />
        {array.length === 0
          ? <p>Nenhuma obra foi adicionada</p>
          : array.map((item, index) => (
              <ConstructionItem
                key={index}
                item={item}
                itemIndex={index}
                setArray={setArray}
                array={array}
              />
            ))}
      </Container>
    )
}
