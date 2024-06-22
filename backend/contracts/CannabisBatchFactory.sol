// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import './FarmerManagement.sol';
import './CannabisBatch.sol';

contract CannabisBatchFactory {
  FarmerManagement private farmerContract;

  mapping(address => address) private farmerToNFT;
  address[] private allBatches;

  event CannabisBatchCreated(
    address batchAddress,
    string strainName,
    uint256 amount,
    address owner
  );

  constructor(address farmerContractAddress) {
    farmerContract = FarmerManagement(farmerContractAddress);
  }

  function createAndMintCannabisBatch(
    string memory uri,
    string calldata _strainName,
    uint256 _amount,
    uint256 _thcContent,
    string calldata _seedingDate,
    string calldata _harvestDate
  ) external {
    require(
      farmerContract.getFarmer(msg.sender).farmerAddy != address(0),
      'You need to be a registered farmer'
    );

    CannabisBatch newBatch = new CannabisBatch(uri);
    farmerToNFT[msg.sender] = address(newBatch);
    allBatches.push(address(newBatch));

    newBatch.mintBatch(
      farmerContract.getFarmer(msg.sender).farmerAddy,
      msg.sender,
      _strainName,
      _amount,
      _thcContent,
      _seedingDate,
      _harvestDate
    );

    emit CannabisBatchCreated(
      address(newBatch),
      _strainName,
      _amount,
      farmerContract.getFarmer(msg.sender).farmerAddy
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
      address batchOwner,
      bool approved
    )
  {
    require(
      farmerToNFT[farmer] != address(0),
      'Farmer has not created any batches'
    );

    CannabisBatch batchContract = CannabisBatch(farmerToNFT[farmer]);
    CannabisBatch.BatchDetails memory batchDetails = batchContract.getBatch(
      batchID
    );
    return (
      batchDetails.strainName,
      batchDetails.amount,
      batchDetails.thcContent,
      batchDetails.seedingDate,
      batchDetails.harvestDate,
      batchDetails.batchOwner,
      batchDetails.batchApproved
    );
  }

  function sendBatchToTester(uint256 batchId, address tester) external {
    address farmerAddress = farmerContract.getFarmer(msg.sender).farmerAddy;
    CannabisBatch batchContract = CannabisBatch(farmerToNFT[farmerAddress]);
    batchContract.sendBatchToTester(tester, batchId);
  }
}
