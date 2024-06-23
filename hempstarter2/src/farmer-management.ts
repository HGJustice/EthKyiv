import { FarmerAdded as FarmerAddedEvent } from "../generated/FarmerManagement/FarmerManagement"
import { FarmerAdded } from "../generated/schema"

export function handleFarmerAdded(event: FarmerAddedEvent): void {
  let entity = new FarmerAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.FarmerManagement_id = event.params.id
  entity._fullName = event.params._fullName
  entity._businessName = event.params._businessName
  entity._countryOrigin = event.params._countryOrigin
  entity.farmerAddress = event.params.farmerAddress
  entity.taxID = event.params.taxID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
