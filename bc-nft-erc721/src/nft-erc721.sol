// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Colors is ERC721  (
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIDCounter;

    constructor() ERC721("Colors", "ESS") {}
    function _baseURI() internal pure override returns (string memory) {
        return "https://TBD/api/erc721/";
    }

    function mint (address to) public returns (uint256) {
        require(_tokenIDCounter.current() < 3);
        _tokenIDCounter.increment();
        _safeMint(to, _tokenIDCounter.current());

        return _tokenIDCounter.current();
    }
)
