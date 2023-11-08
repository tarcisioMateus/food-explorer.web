import { Container } from "./styles"

export function TableOrders({children}) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Code</th>
            <th>Details</th>
            <th>Date & Hour</th>
          </tr>
        </thead>

        <tbody>{ children }</tbody>
      </table>
    </Container>
  )
}