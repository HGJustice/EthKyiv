// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import 'contracts/CannabisBatchFactory.sol';
import 'contracts/CannabisToken.sol';

contract TokenFactory {
  CannabisBatchFactory private batchContract;

  mapping(address => address) farmerToToken;

  event TokenCreated(address farmer, address token);

  constructor(address batchFactoryAddy) {
    batchContract = CannabisBatchFactory(batchFactoryAddy);
  }

  function createToken(
    string memory name,
    string memory ticker,
    uint256 batchID
  ) external {
    (, uint256 amount, , , , , bool batchApproved) = batchContract
      .getFarmerBatchDetails(msg.sender, batchID);
    require(batchApproved == true, 'Batch must be approved by tester');

    CannabisToken newToken = new CannabisToken(name, ticker);
    newToken.mint(msg.sender, amount);
    farmerToToken[msg.sender] = address(newToken);

    emit TokenCreated(msg.sender, address(newToken));
  }

  function getTokenDetails(
    address addy
  ) external view returns (string memory, string memory, uint256) {
    CannabisToken token = CannabisToken(farmerToToken[addy]);
    (string memory name, string memory symbol, uint256 supply) = token
      .getTokenDetails(addy);
    return (name, symbol, supply);
  }

  function getTokensAddress(address addy) external view returns (address) {
    return farmerToToken[addy];
  }
}
