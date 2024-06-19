import { update as updateEvent } from "../generated/iot/iot"
import { update } from "../generated/schema"

export function handleupdate(event: updateEvent): void {
  let entity = new update(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sensor = event.params.sensor
  entity.temperature = event.params.temperature
  entity.humidity = event.params.humidity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
