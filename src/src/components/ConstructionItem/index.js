import React from 'react'
import { Container } from './style'
import {FaTrash} from "react-icons/fa"

export const ConstructionItem = ({item, array, setArray, itemIndex}) => {
    const handleDeleteButton = () => {
        setArray([...array.filter((_, index) => index !== itemIndex)])
    }
    return (
        <Container>
            <p className='obra'>{item.obraNome}</p>
            <p className='cidade'>{item.cidade}</p>
            <p className='estado'>{item.estado}</p>
            <button onClick={handleDeleteButton}><FaTrash size={20}/></button>
        </Container>
    )
}
