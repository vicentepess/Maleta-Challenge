import styled from "styled-components";

export const InsertBar = styled.div`
  display: flex;
  background-color: rgb(0, 255, 255);
  width: 90%;
  padding: 20px 40px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;  

  @media (max-width: 600px) {
        flex-direction: column
     }  
`;

export const InputNomeDaObra = styled.input`
  height: 50px;
  width: 30%;
  border-radius: 2px;
  border: none;
  padding-left: 15px;
  background-color: #fff;
  font-size: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 10px;
     }  
`;


export const InputCidade = styled.input`
  height: 50px;
  width: 25%;
  border-radius: 2px;
  border: none;
  padding-left: 15px;
  background-color: #fff;
  font-size: 20px;
  box-sizing: border-box;
  @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 10px;
     }  
`;
export const SelectEstado = styled.select`
  height: 50px;
  width: 15%;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  background-color: #fff;
  font-size: 20px;
  box-sizing: border-box;
  @media (max-width: 600px) {
        width: 100%;
        padding-left: 15px;
        margin-bottom: 10px;
     }  
`;

export const Button = styled.button`
  width: 20%;
  background-color: #fff;
  border: none;
  border-radius: 2px;
  color: rgb(0, 255, 255);
  font-size: 20px;
  @media (max-width: 600px) {
        width: 100%;
        height: 50px;
     }  
`;

