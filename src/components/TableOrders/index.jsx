import { Container } from "./styles"

export function TableOrders({orders}) {
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

        <tbody>
          {
            orders.map( order => {
              return (
                <tr key={order.id}>
                  <td className="status">
                    { order.state }
                  </td>
                  <td className="code"> { order.id } </td>
                  <td className="details"> { order.description } </td>
                  <td className="time"> { order.created_at } </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </Container>
  )
}