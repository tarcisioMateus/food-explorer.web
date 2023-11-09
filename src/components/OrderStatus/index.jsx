import OrderPendingSvg from "../../assets/order_pending.svg"
import OrderPreparingSvg from "../../assets/order_preparing.svg"
import OrderDeliveredSvg from "../../assets/order_delivered.svg"

import { ORDER_STATE } from "../../utils/states"

export function OrderStatus({ status }) {
  return (
    <>
      {
        [ORDER_STATE.PENDING].includes(status) &&
        <img
          src={OrderPendingSvg}
        />
      }
      {
        [ORDER_STATE.PREPARING].includes(status) &&
        <img
          src={OrderPreparingSvg}
        />
      }
      {
        [ORDER_STATE.DELIVERED].includes(status) &&
        <img
          src={OrderDeliveredSvg}
        />
      }
    </>
  )
}