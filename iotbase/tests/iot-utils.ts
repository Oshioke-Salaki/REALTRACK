import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { update } from "../generated/iot/iot"

export function createupdateEvent(
  sensor: string,
  temperature: BigInt,
  humidity: BigInt
): update {
  let updateEvent = changetype<update>(newMockEvent())

  updateEvent.parameters = new Array()

  updateEvent.parameters.push(
    new ethereum.EventParam("sensor", ethereum.Value.fromString(sensor))
  )
  updateEvent.parameters.push(
    new ethereum.EventParam(
      "temperature",
      ethereum.Value.fromUnsignedBigInt(temperature)
    )
  )
  updateEvent.parameters.push(
    new ethereum.EventParam(
      "humidity",
      ethereum.Value.fromUnsignedBigInt(humidity)
    )
  )

  return updateEvent
}
