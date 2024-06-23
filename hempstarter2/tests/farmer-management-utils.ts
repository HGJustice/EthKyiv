import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { FarmerAdded } from "../generated/FarmerManagement/FarmerManagement"

export function createFarmerAddedEvent(
  id: BigInt,
  _fullName: string,
  _businessName: string,
  _countryOrigin: string,
  farmerAddress: Address,
  taxID: BigInt
): FarmerAdded {
  let farmerAddedEvent = changetype<FarmerAdded>(newMockEvent())

  farmerAddedEvent.parameters = new Array()

  farmerAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  farmerAddedEvent.parameters.push(
    new ethereum.EventParam("_fullName", ethereum.Value.fromString(_fullName))
  )
  farmerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_businessName",
      ethereum.Value.fromString(_businessName)
    )
  )
  farmerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_countryOrigin",
      ethereum.Value.fromString(_countryOrigin)
    )
  )
  farmerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "farmerAddress",
      ethereum.Value.fromAddress(farmerAddress)
    )
  )
  farmerAddedEvent.parameters.push(
    new ethereum.EventParam("taxID", ethereum.Value.fromUnsignedBigInt(taxID))
  )

  return farmerAddedEvent
}
