(()=>{"use strict";class s{constructor(s,t){this.shipName=t,this.shipLength=s,this.hits=0,this.coordinates={coord1:[0,1],coord2:[0,5]}}hit(){console.log("It's a hit!"),this.hits+=1}isSunk(){if(this.shipLength<=this.hits)return!0}}class t{constructor(){this.carrier=new s(6,"carrier"),this.battleship=new s(4,"battleship"),this.cruiser=new s(3,"cruiser"),this.submarine=new s(3,"submarine"),this.destroyer=new s(2,"destroyer"),this.arrShip=[this.carrier,this.battleship,this.cruiser,this.submarine,this.destroyer],this.misses=[],this.sunkCount=0}allShipsSunk(){return 5===this.sunkCount}receiveAttack(s){this.arrShip.forEach((t=>{const r=t.coordinates.coord1,e=t.coordinates.coord2;r[0]===e[0]&&s[0]===r[0]?s[1]>=r[1]&&s[1]<=e[1]&&(t.hit(),t.isSunk()&&(this.sunkCount+=1)):r[1]===e[1]&&s[1]===r[1]&&s[0]>=r[0]&&s[0]<=e[0]&&(t.hit(),t.isSunk()&&(this.sunkCount+=1))}))}}class r{constructor(s){this.playerBoard=new t,this.playerName=s}}class e extends r{constructor(s){super(s)}}class i extends r{constructor(s="Computer"){super(s)}randomAttack(){const s=this.playerBoard.misses,t=()=>Math.floor(10*Math.random());let r=t(),e=t();if(0===s.length)return[r,e];for(let i=0;i<s.length;i++)s[i][0]===r&&s[i][1]===e&&(r=t(),e=t(),i--);return[r,e]}}(()=>{const s=new e("Brooks"),t=new i;let r=!0,o=!1,n=!1;for(;!n;){let e;r?(e=JSON.parse(prompt("Enter Attack Coordinates. Example: [1, 2]")),t.playerBoard.receiveAttack(e),t.playerBoard.allShipsSunk()&&(n=!0,console.log("You've sunk all their ships!")),r=!1,o=!0,console.log(s)):o&&(e=t.randomAttack(),s.playerBoard.receiveAttack(e),s.playerBoard.allShipsSunk()&&(n=!0,console.log("All of your ships have been sunk!")),o=!1,r=!0)}})()})();