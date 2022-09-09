pragma solidity ^0.6.6;

contract Voting {
    
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }
    
    mapping (uint => Candidate) public candidates;
    uint public candidatecount;
    mapping (address => bool) public citizen;
    
    constructor() public{
        addCandidate("Godlin");
        addCandidate("Hilda");
    }
    
    function addCandidate(string memory _name) private{
        candidatecount++;
        candidates[candidatecount] = Candidate(candidatecount, _name, 0);
    }
    
    function vote(uint _candidateid) public{
        require(!citizen[msg.sender]);
        
        citizen[msg.sender] = true;
        candidates[_candidateid].voteCount ++;
    }
}
