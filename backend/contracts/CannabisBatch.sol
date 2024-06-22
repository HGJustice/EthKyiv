// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol';
import './CannabisToken.sol';

contract CannabisBatch is ERC1155, ERC1155Burnable {
  struct BatchDetails {
    uint256 id;
    string strainName;
    uint256 amount;
    uint256 thcContent;
    string seedingDate;
    string harvestDate;
    address batchOwner;
    bool batchApproved;
  }

  uint256 private currentBatchID = 1;
  mapping(uint256 => BatchDetails) private batches;

  event NewBatchMinted(
    uint256 id,
    string strainName,
    uint256 amount,
    address owner
  );
  event BatchTested(uint256 id, bool approved);

  constructor(string memory uri) ERC1155(uri) {}

  function mintBatch(
    address to,
    address owner,
    string calldata _strainName,
    uint256 _amount,
    uint256 _thcContent,
    string calldata _seedingDate,
    string calldata _harvestDate
  ) external {
    _mint(to, currentBatchID, 1, bytes('1'));

    batches[currentBatchID] = BatchDetails({
      id: currentBatchID,
      strainName: _strainName,
      amount: _amount,
      thcContent: _thcContent,
      seedingDate: _seedingDate,
      harvestDate: _harvestDate,
      batchOwner: owner,
      batchApproved: false
    });

    emit NewBatchMinted(currentBatchID, _strainName, _amount, msg.sender);
    currentBatchID++;
  }

  function getBatch(uint256 id) external view returns (BatchDetails memory) {
    return batches[id];
  }

  function sendBatchToTester(address testerAddy, uint256 batchID) external {
    require(
      batches[batchID].batchOwner == msg.sender,
      'You are not the batch owner'
    );
    safeTransferFrom(msg.sender, testerAddy, batchID, 1, '');
  }

  function testBatch(uint256 batchId) external {
    batches[batchId].batchApproved = true;
    safeTransferFrom(msg.sender, batches[batchId].batchOwner, batchId, 1, '');
    emit BatchTested(batchId, true);
  }

  function burnBatch(uint256 batchId) external {
    require(balanceOf(msg.sender, batchId) == 1, 'You must own NFT to approve');
    require(
      batches[batchId].batchApproved == false,
      'Can only burn failed batches'
    );
    _burn(msg.sender, batchId, 1);
  }
}
