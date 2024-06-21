// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';

contract CananbisBatch is ERC1155 {
  struct BatchDetails {
    string strainName;
    uint256 amount;
    uint256 thcContent;
    string seedingDate;
    string harvestDate;
    address batchOwner;
  }

  uint256 currentBatchID = 1;
  mapping(uint256 => BatchDetails) batches;
  // mapping(address => mapping(uint256 => BatchDetails)) batchToFarmer;

  event newBatchMinted(
    uint256 id,
    string strainName,
    uint256 amount,
    address owner
  );

  constructor(string memory uri) ERC1155(uri) {}

  function mintBatch(
    address to,
    string calldata _strainName,
    uint256 _amount,
    uint256 _thcContent,
    string calldata _seedingDate,
    string calldata _harvestDate
  ) external {
    _mint(to, currentBatchID, 1, '');

    batches[currentBatchID] = BatchDetails(
      _strainName,
      _amount,
      _thcContent,
      _seedingDate,
      _harvestDate,
      msg.sender
    );

    emit newBatchMinted(currentBatchID, _strainName, _amount, msg.sender);
    currentBatchID++;
  }

  function getBatch(uint256 id) external view returns (BatchDetails memory) {
    return batches[id];
  }
}
