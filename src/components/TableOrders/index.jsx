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
                  <td className="code"> { String(order.id).padStart(8, '00000000') } </td>
                  <td className="details"> { order.description } </td>
                  <td className="time"> 
                    { 
                      String(order.created_at).split(' ')[0].split('-')[2] + '/' + String(order.created_at).split(' ')[0].split('-')[1] 
                      + ' at ' +
                      String(order.created_at).split(' ')[1].split(':')[0] + 'h' + String(order.created_at).split(' ')[1].split(':')[1] 
                    } 
                  </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </Container>
  )
}