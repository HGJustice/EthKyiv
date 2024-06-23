import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { CannabisBatchCreated } from "../generated/CannabisBatchFactory/CannabisBatchFactory"

export function createCannabisBatchCreatedEvent(
  batchAddress: Address,
  strainName: string,
  amount: BigInt,
  owner: Address
): CannabisBatchCreated {
  let cannabisBatchCreatedEvent = changetype<CannabisBatchCreated>(
    newMockEvent()
  )

  cannabisBatchCreatedEvent.parameters = new Array()

  cannabisBatchCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "batchAddress",
      ethereum.Value.fromAddress(batchAddress)
    )
  )
  cannabisBatchCreatedEvent.parameters.push(
    new ethereum.EventParam("strainName", ethereum.Value.fromString(strainName))
  )
  cannabisBatchCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  cannabisBatchCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return cannabisBatchCreatedEvent
}
