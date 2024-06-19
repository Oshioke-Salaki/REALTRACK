import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { update } from "../generated/schema"
import { update as updateEvent } from "../generated/iot/iot"
import { handleupdate } from "../src/iot"
import { createupdateEvent } from "./iot-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sensor = "Example string value"
    let temperature = BigInt.fromI32(234)
    let humidity = BigInt.fromI32(234)
    let newupdateEvent = createupdateEvent(sensor, temperature, humidity)
    handleupdate(newupdateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("update created and stored", () => {
    assert.entityCount("update", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "update",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sensor",
      "Example string value"
    )
    assert.fieldEquals(
      "update",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "temperature",
      "234"
    )
    assert.fieldEquals(
      "update",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "humidity",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
