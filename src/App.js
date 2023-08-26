import './App.css';
import Card from './components/Card.js';
import Button from '@mui/material/Button';
import Text from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import BasicTable from './components/Table.tsx';
import Grid from '@mui/material/Grid';
import HiLoTable from './components/HiLoTable.tsx';



function App() {
  
  const [cardsLeft, setCardsLeft] = useState('');
  const [likelihood, setLikelihood] = useState('');
  const [runningCount, setRunningCount] = useState('');
  const [trueCount, setTrueCount] = useState('');
  const [decksLeft, setDecksLeft] = useState('');
  const [playerEdge, setPlayerEdge] = useState('');
  const [decks,setDecks] = useState('');
  const [card1,setCard1] = useState('');
  const [card2,setCard2] = useState('');
  const [card3,setCard3] = useState('');
  const [card4,setCard4] = useState('');
  const [card5,setCard5] = useState('');
  const [card6,setCard6] = useState('');
  const [card7,setCard7] = useState('');
  const [card8,setCard8] = useState('');
  const [card9,setCard9] = useState('');
  const [card10,setCard10] = useState('');


  let audio = new Audio('./assets/card_button.mp3')
  const [data, setData] = useState('');
  
  const start = () => {
    audio.play()
  }

  const childToParent = (childdata) => {
    setData(childdata);
    setCardsLeft(cardsLeft-1);
    setDecksLeft((cardsLeft-1) / 52);
    setLikelihood((decks*4)/cardsLeft);
    
  

    switch (childdata) {
      case "c1":
        setCard1(card1-1);
        setRunningCount(runningCount-1);
        setTrueCount((runningCount-1) / decksLeft)
        break;
      case "c2":
        setCard2(card2-1);
        setRunningCount(runningCount+1);
        setTrueCount((runningCount+1)/ decksLeft)
        break;
      case "c3":
        setCard3(card3-1);
        setRunningCount(runningCount+1);
        setTrueCount((runningCount+1)/ decksLeft)
        break;
      case "c4":
        setCard4(card4-1);
        setRunningCount(runningCount+1);
        setTrueCount((runningCount+1)/ decksLeft)
        break;
      case "c5":
        setCard5(card5-1);
        setRunningCount(runningCount+1);
        setTrueCount((runningCount+1)/ decksLeft)
        break;
      case "c6":
        setCard6(card6-1);
        setRunningCount(runningCount+1);
        setTrueCount((runningCount+1)/ decksLeft)
        break;
      case "c7":
        setCard7(card7-1);
        break;
      case "c8":
        setCard8(card8-1);
        break;
      case "c9":
        setCard9(card9-1);
        break;
      case "c10":
        setCard10(card10-1);
        setRunningCount(runningCount-1);
        setTrueCount((runningCount-1)/ decksLeft)
        break;
        

       
    }
      if (trueCount <= 2) {
        setPlayerEdge("None");

      }
      else if (trueCount <= 3) {
        setPlayerEdge("0.5%");
      }
      else if (trueCount <= 4) {
        setPlayerEdge("1.0%");
      }
      else if (trueCount <= 5) {
        setPlayerEdge("1.5%");
      }
      else if (trueCount <= 6) {
        setPlayerEdge("2.0%");
      }
      else if (trueCount <= 7) {
        setPlayerEdge("2.5%");
      }
      else if (trueCount > 7) {
        setPlayerEdge("3.0%");
      }


    }


  const handleChange = event => {
    setCardsLeft(event.target.value);
  };

  const deckChange = event => {
    setDecks(event.target.value);
  };
  const handleClick = event => {
    event.preventDefault();


    //  set value of input field
    setCardsLeft(52*decks);
    setLikelihood((4*decks));
    setRunningCount(0);
    setTrueCount(0);
    setDecksLeft(52*decks/52);
    setPlayerEdge("None");
    setCard1(4*decks);
    setCard2(4*decks);
    setCard3(4*decks);
    setCard4(4*decks);
    setCard5(4*decks);
    setCard6(4*decks);
    setCard7(4*decks);
    setCard8(4*decks);
    setCard9(4*decks);
    setCard10(16*decks);

  };


  return (
    <div className="App" >
        <div></div>
        <Text style={{ color: 'gold' }}>Black Jack Card Counter</Text>
        <div>

        <div><Text style={{ color: 'black' }}>Instructions: <br></br>Step #1: Enter # of decks used for game
        <br></br>Step #2: Click "Start" to initialize
        <br></br>Step #3: Click card images to decrement Counter
        <br></br>Note: application uses the Hi-Lo counting strategy (2-6=+1, 7-9=0, 10-A=-1)
        </Text></div>
        <div>
        <TextField  id="decks"  label="# of Decks" variant="outlined" onChange={deckChange} value={decks} sx={{m: 1, p: 1,input: {color: "#00ff00",background: "black"}}}/>
        </div>
       
        <Button  size="large" style={{backgroundColor: 'black'}} onClick={handleClick} variant="contained" sx={{m: 1, p: 1, width: 200}}>Start</Button>
        <div>
        <TextField className = "textfield"   id="cardsLeft"  InputProps={{ readOnly: true, }}label="Cards in Deck" variant="outlined" onChange={handleChange} value={cardsLeft}  sx={{m: 1, p: 1,input: {borderColor: 'white',color: "#00ff00",background: "black"}}} />
        <div>
        <Card onClick={start} childToParent={childToParent} /></div>
        <div  sx={{width: 200}}>
        <Grid justifyContent="center" sx={{p: 1}}container spacing={2}>
          <Grid item sm={6}>
          <HiLoTable runningCount={runningCount} trueCount={trueCount} decksLeft={decksLeft} playerEdge={playerEdge}/> 
           </Grid>
          <Grid  item sm={6}>
          <BasicTable  cardsLeft={cardsLeft} likelihood={likelihood} decks={decks} card1={card1} card2={card2} card3={card3} card4={card4} card5={card5} card6={card6} card7={card7} card8={card8} card9={card9} card10={card10} sx={{width: 200,}}/>
          </Grid>
            </Grid>
        </div>
               </div>

        </div>
       
     
    </div>
    
  );
}

export default App;
