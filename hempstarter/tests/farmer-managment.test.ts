import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { FarmerAdded } from "../generated/schema"
import { FarmerAdded as FarmerAddedEvent } from "../generated/FarmerManagment/FarmerManagment"
import { handleFarmerAdded } from "../src/farmer-managment"
import { createFarmerAddedEvent } from "./farmer-managment-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let _fullName = "Example string value"
    let _businessName = "Example string value"
    let _countryOrigin = "Example string value"
    let farmerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let taxID = BigInt.fromI32(234)
    let newFarmerAddedEvent = createFarmerAddedEvent(
      id,
      _fullName,
      _businessName,
      _countryOrigin,
      farmerAddress,
      taxID
    )
    handleFarmerAdded(newFarmerAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FarmerAdded created and stored", () => {
    assert.entityCount("FarmerAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FarmerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_fullName",
      "Example string value"
    )
    assert.fieldEquals(
      "FarmerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_businessName",
      "Example string value"
    )
    assert.fieldEquals(
      "FarmerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_countryOrigin",
      "Example string value"
    )
    assert.fieldEquals(
      "FarmerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "farmerAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FarmerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "taxID",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
