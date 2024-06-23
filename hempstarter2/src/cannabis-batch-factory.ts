import { CannabisBatchCreated as CannabisBatchCreatedEvent } from "../generated/CannabisBatchFactory/CannabisBatchFactory"
import { CannabisBatchCreated } from "../generated/schema"

export function handleCannabisBatchCreated(
  event: CannabisBatchCreatedEvent,
): void {
  let entity = new CannabisBatchCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.batchAddress = event.params.batchAddress
  entity.strainName = event.params.strainName
  entity.amount = event.params.amount
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
