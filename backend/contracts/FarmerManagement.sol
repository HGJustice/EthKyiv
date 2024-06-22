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

  mapping(address => Farmer) private farmers;
  mapping(uint256 => Farmer) private idToFarmer;
  uint256 private currentFarmerId = 1;

  event FarmerAdded(
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
      'User already created'
    );

    Farmer memory newFarmer = Farmer({
      id: currentFarmerId,
      fullName: _fullName,
      businessName: _businessName,
      countryOrigin: _countryOrigin,
      farmerAddy: msg.sender,
      taxID: _taxID
    });

    farmers[msg.sender] = newFarmer;
    idToFarmer[currentFarmerId] = newFarmer;
    emit FarmerAdded(
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
