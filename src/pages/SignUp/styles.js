import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  
  height: 100vh;
  width: 100%;

  >main {
    width: 428px;
    padding: 10px 45px 10px 65px;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Form = styled.form`
  width: 100%;
  padding-top: 73px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`