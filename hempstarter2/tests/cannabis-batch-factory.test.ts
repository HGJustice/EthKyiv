import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CannabisBatchCreated } from "../generated/schema"
import { CannabisBatchCreated as CannabisBatchCreatedEvent } from "../generated/CannabisBatchFactory/CannabisBatchFactory"
import { handleCannabisBatchCreated } from "../src/cannabis-batch-factory"
import { createCannabisBatchCreatedEvent } from "./cannabis-batch-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let batchAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let strainName = "Example string value"
    let amount = BigInt.fromI32(234)
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let newCannabisBatchCreatedEvent = createCannabisBatchCreatedEvent(
      batchAddress,
      strainName,
      amount,
      owner
    )
    handleCannabisBatchCreated(newCannabisBatchCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CannabisBatchCreated created and stored", () => {
    assert.entityCount("CannabisBatchCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CannabisBatchCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "batchAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CannabisBatchCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "strainName",
      "Example string value"
    )
    assert.fieldEquals(
      "CannabisBatchCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "CannabisBatchCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
