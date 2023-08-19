import c1 from "../assets/ace_of_hearts.png"
import c2 from "../assets/2_of_diamonds.png"
import c3 from "../assets/3_of_spades.png"
import c4 from "../assets/4_of_clubs.png"
import c5 from "../assets/5_of_hearts.png"
import c6 from "../assets/6_of_diamonds.png"
import c7 from "../assets/7_of_spades.png"
import c8 from "../assets/8_of_clubs.png"
import c9 from "../assets/9_of_hearts.png"
import c10 from "../assets/10_of_diamonds.png"




function Card({childToParent}) {

  //const handleClick = (card) => {
    

    // 👇️ value of input field
    //console.log(card);//
    //<App num= { card} />
    
  //};
    return  [ 
    <img onClick={() => childToParent("c1")} src={c1} width="100" height="100"></img> ,
    <img onClick={() => childToParent("c2")} src={c2} width="100" height="100"></img> ,
    <img onClick={() => childToParent("c3")} src={c3} width="100" height="100"></img> ,
    <img onClick={() => childToParent("c4")} src={c4} width="100" height="100"></img> ,
    <img onClick={() => childToParent("c5")} src={c5} width="100" height="100"></img> ,
    <img onClick={() => childToParent("c6")} src={c6} width="100" height="100"></img> ,
    <img onClick={() => childToParent("c7")} src={c7} width="100" height="100"></img> ,
    <img onClick={() => childToParent("c8")} src={c8} width="100" height="100"></img> ,
    <img onClick={() => childToParent("c9")} src={c9} width="100" height="100"></img> ,
    <img onClick={() => childToParent("c10")} src={c10} width="100" height="100"></img> 
    
];};

  export default Card;