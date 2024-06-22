// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import 'contracts/TokenFactory.sol';

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract Marketplace {
  TokenFactory private tokenContract;

  struct Listing {
    uint id;
    address tokenAddress;
    address tokenSeller;
    uint amount;
    uint price;
  }

  event ListingCreated(
    uint id,
    address seller,
    address tokenAddy,
    uint price,
    uint amount
  );

  event ListingBought(uint id, address buyer, uint price, uint amount);

  uint256 currentListingID = 1;
  mapping(address => mapping(uint => Listing)) public listings;
  mapping(uint => Listing) public idToListings;

  constructor(address factoryAddy) {
    tokenContract = TokenFactory(factoryAddy);
  }

  function depositToken(uint amount) external {
    require(amount > 0, 'invalid amount');
    IERC20 token = IERC20(tokenContract.getTokensAddress(msg.sender));
    bool sent = token.transferFrom(msg.sender, address(this), amount);
    require(sent, 'Token transfer failed');
  }

  function listToken(uint _tokenAmount, uint _price) external {
    require(_tokenAmount > 0, 'please input correct amount');

    Listing memory newListing = Listing(
      currentListingID,
      tokenContract.getTokensAddress(msg.sender),
      msg.sender,
      _tokenAmount,
      _price
    );

    idToListings[currentListingID] = newListing;
    listings[msg.sender][currentListingID] = newListing;
    emit ListingCreated(
      currentListingID,
      msg.sender,
      tokenContract.getTokensAddress(msg.sender),
      _price,
      _tokenAmount
    );
    currentListingID++;
  }

  function buyToken(uint tokenID) external payable {
    require(tokenID <= currentListingID, 'invalid listing');
    Listing storage current = idToListings[tokenID];

    delete idToListings[tokenID];
    delete listings[current.tokenSeller][tokenID];

    bool sent = IERC20(current.tokenAddress).transfer(
      msg.sender,
      current.amount
    );
    require(sent, 'transfer failed');

    payable(current.tokenSeller).transfer(msg.value);

    emit ListingBought(current.id, msg.sender, current.price, current.amount);
  }
}
