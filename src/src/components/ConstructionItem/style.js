import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 90%    ;
  padding: 20px 40px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  box-sizing: border-box;  

  .obra {
    width: 60%;
    text-align: left;
  }

  .cidade {
    width: 40%;
  }

  .estado { 
    width: 10%;
  }

  button {
      background: none;
      border: none;
      color: lightgrey;
  }
`;
