// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

contract FarmerManagement {
  struct Farmer {
    uint256 id;
    string fullName;
    string businessName;
    string countryOrigin;
    address farmerAddy;
    uint256 taxID;
  }

  mapping(address => Farmer) farmers;
  mapping(uint256 => Farmer) idToFarmer;
  uint256 currentFarmerId = 1;

  event farmerAdded(
    uint id,
    string _fullName,
    string _businessName,
    string _countryOrigin,
    address farmerAddress,
    uint256 taxID
  );

  function createFarmer(
    string calldata _fullName,
    string calldata _businessName,
    string calldata _countryOrigin,
    uint256 _taxID
  ) external {
    require(
      farmers[msg.sender].farmerAddy == address(0),
      'user already created'
    );

    Farmer memory newFarmer = Farmer(
      currentFarmerId,
      _fullName,
      _businessName,
      _countryOrigin,
      msg.sender,
      _taxID
    );

    farmers[msg.sender] = newFarmer;
    idToFarmer[currentFarmerId] = newFarmer;
    emit farmerAdded(
      currentFarmerId,
      _fullName,
      _businessName,
      _countryOrigin,
      msg.sender,
      _taxID
    );
    currentFarmerId++;
  }

  function getFarmer(address farmerAddy) external view returns (Farmer memory) {
    return farmers[farmerAddy];
  }
}
