import styled from "styled-components"

import { devices } from "../../utils/sizeX"

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  
  height: 100vh;
  width: 100%;

  >main {
    width: fit-content;
    padding: 0 45px 0 65px;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media only screen and (${devices.sm}) {

  }
`

export const Form = styled.form`
  width: clamp(50vw, 60vw, 47.6rem);
  padding-top: 73px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`