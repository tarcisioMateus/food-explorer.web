import { Container } from "./styles"

export function TableOrders({data, ...rest}) {
  return (
    <Container {...rest}>
      
      <th className="status">
        <p>{ data.state }</p>
      </th>
      <th className="code">
        <p>{ data.id }</p>
      </th>
      <th className="details">
        <p>{ data.description }</p>
      </th>
      <th className="time">
        <p>{ data.created_at }</p>
      </th>
        
    </Container>
  )
}