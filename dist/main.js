(()=>{"use strict";new class{constructor(s,t,i){this.shipLength=s,this.hits=t,this.sunk=i}hit(){return this.hits+=1}isSunk(){if(this.shipLength===this.hits)return this.sunk=!0,this.sunk}}(5,4,!1)})();