import BrandSvg from '../../assets/brand.svg'
import { USER_ROLE } from '../../utils/roles'
import { useAuth } from '../../hooks/auth'

import { Container } from "./styles"

export function Brand({ className, ...rest }) {
  const { user } = useAuth()

  return (
    <Container {...rest} className={`brand ${className}`}>
      <img
        src = {BrandSvg}
        alt='light blue hexagon'
      />

      <div>
        <h1>food explorer</h1>

        {
          ( user && [USER_ROLE.ADMIN].includes(user.role) ) &&
          <p>admin</p>
        }
      </div>
    </Container>
  )
}