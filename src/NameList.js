import React from 'react';

function NameList(props) {
   const ProductList=["Beauty products","Dary products","Electrical products","Electronic","sports"]
//    const Performers=[{name:"K.L RAHUL",team:"panjab"},
//    {name:"J.P BUMRHA",team:"mumbai"},
//    {name:"VIRAT KOHALI",team:"rcb"}]
//    const iplTemaeNameList=ipLTeam.map(teams=><h2>{teams}</h2>);
//    const perfornerNameList=Performers.map(player=><h2>{player.name} team name {player.team}</h2>);
    return (
       
        <div>
            {  
                ProductList.map(product=><h2>{product}</h2>)
            }
        </div>
        // <div>
        //    {iplTemaeNameList }
        // </div>
        // <div>
        //  {perfornerNameList}
        // </div>
    );
}

export default NameList;