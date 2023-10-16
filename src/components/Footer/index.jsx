import { Brand } from "../Brand"

import { Container } from "./styles"

export function Footer ({ ...rest}) {
  return (
    <Container>
      <div>
        <Brand className='footer'/>

        <p>
          © 2023 - All rights reserved.
        </p>
      </div>
    </Container>
  )
}