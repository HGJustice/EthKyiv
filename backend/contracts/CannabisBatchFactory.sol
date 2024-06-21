// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import 'contracts/FarmerManagement.sol';
import 'contracts/CannabisBatch.sol';

contract CannabisBatchFactory {
  FarmerManagement private farmerContract;

  mapping(address => address) farmerToNFT;
  address[] allBatches;

  constructor(address farmerContractAddress) {
    farmerContract = FarmerManagement(farmerContractAddress);
  }

  function createAndMintCannabisBatch(
    string memory uri,
    string calldata _strainName,
    uint256 _amount,
    uint256 _thcContent,
    string calldata _seedingDate,
    string calldata _harvestDate,
    address to
  ) external {
    require(
      farmerContract.getFarmer(msg.sender).farmerAddy != address(0),
      'You need to be a registered farmer'
    );

    CananbisBatch newBatch = new CananbisBatch(uri);
    farmerToNFT[msg.sender] = address(newBatch);
    allBatches.push(address(newBatch));

    newBatch.mintBatch(
      _strainName,
      _amount,
      _thcContent,
      _seedingDate,
      _harvestDate
    );
  }

  function getFarmerBatchDetails(
    address farmer,
    uint256 batchID
  )
    external
    view
    returns (
      string memory strainName,
      uint256 amount,
      uint256 thcContent,
      string memory seedingDate,
      string memory harvestDate,
      address batchOwner
    )
  {
    require(
      farmerToNFT[farmer] != address(0),
      'Farmer has not created any batches'
    );

    CananbisBatch batchContract = CananbisBatch(farmerToNFT[farmer]);
    CananbisBatch.BatchDetails memory batchDetails = batchContract.getBatch(
      batchID
    );
    return (
      batchDetails.strainName,
      batchDetails.amount,
      batchDetails.thcContent,
      batchDetails.seedingDate,
      batchDetails.harvestDate,
      batchDetails.batchOwner
    );
  }
}
