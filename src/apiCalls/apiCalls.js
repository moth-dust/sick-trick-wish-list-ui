function callTricks(){
    return fetch('http://localhost:3001/api/v1/tricks');
};

export {callTricks}