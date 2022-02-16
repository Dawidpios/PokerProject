import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cash, setCash] = useState();
  const [cashSi, setCashSi] = useState();
  const [PlayerCard, setPC] = useState();
  const [SiCard, setSC] = useState();
  const [AllCards, setAllCards] = useState([]);
  const [flag, setFlag] = useState(false);
  const [GameRiver, setGameRiver] = useState([]);
  const [ImagesPlayer, setImagesPlayer] = useState([]);
  const [ImagesSi, setImagesSi] = useState([]);
  const [ImagesRiver, setImagesRiver] = useState([]);
  const [PlayerResult, setPlayerResult] = useState();
  const [SiResult, setSiResult] = useState();
  const [winner, setWinner] = useState();
  const [PlayerHandPower, setPlayerHandPower] = useState();
  const [SiHandPower, setSiHandPower] = useState();
  const [PlayerDealer, setPlayerDealer] = useState(false);
  const [SiDealer, setSiDealer] = useState(true);
  const [Pool, setPool] = useState(0);
  const [BtnDisabled1, setBtnDisabled1] = useState(true);
  const [BtnDisabled2, setBtnDisabled2] = useState(true);
  const [BtnDisabled3, setBtnDisabled3] = useState(true);
  const [SurrenderBtnDisabled, setSurrenderBtnDisabled] = useState(true);
  const [DrawCardsButtonDisabled, setDrawCardsButtonDisabled] = useState(true);

  const cards = [
    { value: "2", id: 0 },
    { value: "3", id: 1 },
    { value: "4", id: 2 },
    { value: "5", id: 3 },
    { value: "6", id: 4 },
    { value: "7", id: 5 },
    { value: "8", id: 6 },
    { value: "9", id: 7 },
    { value: "0", id: 8 },
    { value: "J", id: 9 },
    { value: "Q", id: 10 },
    { value: "K", id: 11 },
    { value: "A", id: 12 },
  ];
  const color = ["C", "D", "S", "H"];
  const ranks = {
    RoyalFlush: 9,
    StraightFlush: 8,
    FourOfKind: 7,
    FullHouse: 6,
    Flush: 5,
    Straight: 4,
    Three: 3,
    TwoPairs: 2,
    OnePair: 1,
    HighCard: 0,
  };
  const Game = {
    PlayerHand: [],
    SiHand: [],
    PlayerCards: [],
    SiCards: [],
    check: false,
    checkOne: true,
    FirstRiver: false,
    checkResult: false,
    checkSecond: false,
    River: [],
    Pula: "",
    PlayerResultat: "",
    SiResult: "",
    PlayerHandPower: "",
    SiHandPower: "",
    PlayerWin: false,
    SiWin: false,
    Draw: false,
  };
  let index = "";
  let colorIndex = "";
  let SIindex = "";
  let SIcolorIndex = "";
  let RiverIndex = "";
  let RiverColorIndex = "";

  const API = `https://deckofcardsapi.com/api/deck/new/draw/?count=52`;

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          console.log("err");
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllCards(data.cards);
      });
  }, []);

  const GetIndex = () => {
    //   Player Index
    index = Math.floor(Math.random() * cards.length);
    colorIndex = Math.floor(Math.random() * color.length);
    // SI Index
    SIindex = Math.floor(Math.random() * cards.length);
    SIcolorIndex = Math.floor(Math.random() * color.length);
    // River Index
    RiverIndex = Math.floor(Math.random() * cards.length);
    RiverColorIndex = Math.floor(Math.random() * color.length);
  };
  //
  //
  //
  //
  // Game Logic
  //
  //
  let result = "";
  let arrResult = "";
  let HandValue = 0;
  function checkGameResult(arr) {
    let reducerArrValues = [];
    let reducerArrKeys = [];
    let colorsToCheck = [];
    function reducer(arr) {
      colorsToCheck = [...arr];
      colorsToCheck = colorsToCheck.map((e) => e[1]);
      colorsToCheck = colorsToCheck.reduce(
        (acc, cur) => ((acc[cur] = acc[cur] + 1 || 1), acc),
        {}
      );
      arr = arr.map((e) => e[0]);
      arr = [...arr];
      return arr.reduce(
        (acc, cur) => ((acc[cur] = acc[cur] + 1 || 1), acc),
        {}
      );
    }

    arr = reducer(arr);

    reducerArrValues = [...Object.values(arr)];

    reducerArrValues.filter((e) => {
      // Two Pairs
      if (e === 2) {
        HandValue++;
        if (HandValue === 2) {
          arrResult = "Dwie pary!";
          result = ranks.TwoPairs;
        } else if (HandValue === 1) {
          arrResult = "Para";
          result = ranks.OnePair;
        }
      }
      // Three

      if (reducerArrValues.includes(3)) {
        if (reducerArrValues.includes(2) && reducerArrValues.includes(3)) {
          arrResult = "Full";
          result = ranks.FullHouse;
        } else {
          arrResult = "Trójka";
          result = ranks.Three;
        }
      }
      // Four
      if (e === 4) {
        arrResult = "Kareta";
        result = ranks.FourOfKind;
      }
      // Strit

      reducerArrKeys = [...Object.keys(arr)];
      reducerArrKeys.sort();
      reducerArrKeys = reducerArrKeys.join("");
      if (
        reducerArrKeys.includes("23456") ||
        reducerArrKeys.includes("34567") ||
        reducerArrKeys.includes("45678") ||
        reducerArrKeys.includes("56789") ||
        (reducerArrKeys.includes("6789") && reducerArrKeys.includes("0")) ||
        (reducerArrKeys.includes("789") &&
          reducerArrKeys.includes("0") &&
          reducerArrKeys.includes("J")) ||
        (reducerArrKeys.includes("89") &&
          reducerArrKeys.includes("0") &&
          reducerArrKeys.includes("JQ")) ||
        (reducerArrKeys.includes("9") &&
          reducerArrKeys.includes("0") &&
          reducerArrKeys.includes("JKQ"))
      ) {
        arrResult = "Strit";
        result = ranks.Straight;
      }
      // Color

      Object.values(colorsToCheck).filter((e) => {
        if (e >= 5) {
          arrResult = "Kolor";
          result = ranks.Flush;

          if (
            reducerArrKeys.includes("23456") ||
            reducerArrKeys.includes("34567") ||
            reducerArrKeys.includes("45678") ||
            reducerArrKeys.includes("56789") ||
            (reducerArrKeys.includes("6789") && reducerArrKeys.includes("0")) ||
            (reducerArrKeys.includes("789") &&
              reducerArrKeys.includes("0") &&
              reducerArrKeys.includes("J")) ||
            (reducerArrKeys.includes("89") &&
              reducerArrKeys.includes("0") &&
              reducerArrKeys.includes("JQ")) ||
            (reducerArrKeys.includes("9") &&
              reducerArrKeys.includes("0") &&
              reducerArrKeys.includes("JKQ"))
          ) {
            arrResult = "Poker";
            result = ranks.StraightFlush;
          }
        }
      });

      // Poker
      if (reducerArrKeys.includes("0AJKQ") && arrResult === "Kolor") {
        arrResult = "Poker królewski";
        result = ranks.RoyalFlush;
      }
    });
    // High Card
    if (arrResult === "") {
      arrResult = "Wysoka karta";
      result = ranks.HighCard;
    }
    HandValue = "";
  }

  const getWinner = () => {
    document.querySelectorAll(".SiCardsDiv").forEach(e=>e.style.opacity="1");
    if (PlayerHandPower > SiHandPower) {
      Game.PlayerWin = `Gracz wygrał układem ${PlayerResult}`;
      setWinner(Game.PlayerWin);
      setCash(cash + Pool);
      setPool(0);
    } else if (PlayerHandPower == SiHandPower) {
      Game.Draw = `Remis układem ${PlayerResult}`;
      setWinner(Game.Draw);
      setCash(cash + Pool / 2);
      setCashSi(cashSi + Pool / 2);
      setPool(0);
    } else {
      Game.SiWin = `Komputer wygrał układem ${SiResult}`;
      setWinner(Game.SiWin);
      setCashSi(cashSi + Pool);
      setPool(0);
    }
  };

  const Surrender = ()=>{
    setWinner(Game.SiWin);
    setCashSi(cashSi + Pool);
    setPool(0);
    reset()
  }
  //
  //
  // Reset
  //
  //
  const reset = () => {
    Game.PlayerCards = [];
    Game.SiCards = [];
    Game.River = [];
    Game.PlayerHand = [];
    Game.SiHand = [];
    Game.check = false;
    Game.checkOne = true;
    Game.FirstRiver = false;
    Game.checkResult = false;
    Game.checkSecond = false;
    Game.River = [];
    Game.PlayerResultat = "";
    Game.SiResult = "";
    Game.PlayerHandPower = "";
    Game.SiHandPower = "";
    Game.PlayerWin = false;
    Game.SiWin = false;
    Game.Draw = false;

    setPC();
    setSC();
    setFlag(false);
    setGameRiver([]);
    setImagesPlayer([]);
    setImagesSi([]);
    setImagesRiver([]);
    setPlayerResult();
    setSiResult();
    setWinner();
    setPlayerHandPower();
    setSiHandPower();


    document.querySelectorAll(".ResetIMG").forEach((e) => {
      e.src = "";
      e.remove()
    });
    document.querySelectorAll(".SiCardsDiv").forEach(e=>e.style.opacity="0");
  
    document.getElementById("DrawCards").disabled = false;
    setPlayerDealer(!PlayerDealer);
    setSiDealer(!SiDealer)
    setBtnDisabled1(true);
    setBtnDisabled2(true)
    setBtnDisabled3(true)
    setSurrenderBtnDisabled(true)
    setPool(0)
  };
  //
  //
  //   Card Draw
  //
  //
  const DrawCards = (e) => {
    e.target.disabled = true;
    setSurrenderBtnDisabled(false);
    setBtnDisabled1(false);
    // Pool
    GetPool();
    // Player Cards
    const PlayerCardsDraw = () => {
      let drawColor = "";
      let drawCard = "";
      let AddedCard = "";
      for (let i = 0; i < 2; i++) {
        GetIndex();
        drawColor = color[colorIndex];
        drawCard = cards[index].value;
        AddedCard = drawCard + drawColor;
        Game.PlayerCards.push(AddedCard);
      }
      Game.PlayerHand = new Set(Game.PlayerCards);

      if (Game.PlayerHand.size !== 2) {
        drawColor = "";
        drawCard = "";
        AddedCard = "";
        Game.PlayerHand = [];
        Game.PlayerCards = [];
        PlayerCardsDraw();
      }
    };
    PlayerCardsDraw();

    // Si Cards
    const SiCardsDraw = () => {
      let drawColor = "";
      let drawCard = "";
      let AddedCard = "";
      for (let i = 0; i < 2; i++) {
        GetIndex();
        drawColor = color[SIcolorIndex];
        drawCard = cards[SIindex].value;
        AddedCard = drawCard + drawColor;
        Game.SiCards.push(AddedCard);
      }
      Game.SiHand = new Set(Game.SiCards);

      if (Game.SiHand.size !== 2) {
        drawColor = "";
        drawCard = "";
        AddedCard = "";
        Game.SiHand = [];
        Game.SiCards = [];
        SiCardsDraw();
      }
    };
    SiCardsDraw();
    // River Cards (Cards on table)
    const DrawRiver = () => {
      let drawColor = "";
      let drawCard = "";
      let AddedCard = "";
      // let RiverCards = [];

      Game.FirstRiver = !Game.FirstRiver;
      if (Game.FirstRiver) {
        for (let i = 0; i < 5; i++) {
          GetIndex();
          drawCard = cards[RiverIndex].value;
          drawColor = color[RiverColorIndex];
          AddedCard = drawCard + drawColor;
          Game.River.push(AddedCard);
        }
      }
      Game.River = new Set(Game.River);
      if (Game.River.size !== 5) {
        Game.River = [];
        DrawRiver();
      }
    };
    DrawRiver();

    Game.River = [...Game.River];
    Game.PlayerHand = [...Game.PlayerHand];
    Game.SiHand = [...Game.SiHand];
    Game.PlayerHand.forEach((item) => {
      if (Game.SiHand.includes(item)) {
        SiCardsDraw();
        Game.SiHand = [...Game.SiHand];
      }
    });
    Game.River.forEach((item) => {
      if (Game.PlayerHand.includes(item) || Game.SiHand.includes(item)) {
        let DelIndex = Game.River.indexOf(item);
        Game.River.splice(DelIndex, 1);
        DrawRiver();
        Game.River = [...Game.River];
      }
    });

    Game.PlayerHand = [...Game.PlayerHand, ...Game.River];
    Game.SiHand = [...Game.SiHand, ...Game.River];

    setGameRiver(GameRiver.concat(Game.River));
    // Game results
    setTimeout(() => {
      checkGameResult(Game.PlayerHand);
      Game.PlayerResultat = arrResult;
      Game.PlayerHandPower = result;
      setPlayerHandPower(Game.PlayerHandPower);
      setPlayerResult(Game.PlayerResultat);
    }, 100);
    setTimeout(() => {
      result = "";
      arrResult = "";
      checkGameResult(Game.SiHand);
      Game.SiHandPower = result;
      setSiHandPower(Game.SiHandPower);
      Game.SiResult = arrResult;
      setSiResult(Game.SiResult);
    }, 300);

    //
    // Card images
    //
    let value = Object.values(AllCards);
    let imagesPlayer = value.filter((e) => {
      if (Game.PlayerCards.indexOf(e.code) >= 0) {
        ImagesPlayer.push(e.image);
      }
    });
    let imagesSi = value.filter((e) => {
      if (Game.SiCards.indexOf(e.code) >= 0) {
        ImagesSi.push(e.image);
      }
    });
    let imagesRiver = value.filter((e) => {
      if (Game.River.indexOf(e.code) >= 0) {
        ImagesRiver.push(e.image);
      }
    });
  };
  //
  //
  //
  // First check
  //
  //
  //
  const check = () => {
    let River = document.querySelector(".River");
    for (let i = 0; i < 3; ++i) {
      // download and create elements
    
      const DivCard = document.querySelector(`.DivIMAGE-${i}`)
      let IMG = document.createElement("img");
      IMG.classList.add("ResetIMG");
      // set image src
      IMG.src = ImagesRiver[i];

      // styles
      IMG.style.width = "100%";

      // add to container
      River.appendChild(DivCard);
      DivCard.appendChild(IMG);
      setCash(Math.trunc(cash - (Pool*0.5)))
      setPool(Math.trunc(Pool + (Pool*0.5)))
      setBtnDisabled2(false);
      setBtnDisabled1(true);
    }
  
  };
  //   Second check
  const check2 = () => {
    let River = document.querySelector(".River");
    const DivCard = document.querySelector(".DivIMAGE-3");
    let IMG = document.createElement("img");
    IMG.classList.add("ResetIMG");

    IMG.src = ImagesRiver[3];
    // styles
    IMG.style.width = "100%";

    River.appendChild(DivCard);
    DivCard.appendChild(IMG);

    setCash(Math.trunc(cash - (Pool*0.5)))
    setPool(Math.trunc(Pool + (Pool*0.5)))
    setBtnDisabled3(false);
    setBtnDisabled2(true);

  };
  const check3 = () => {
    let River = document.querySelector(".River");
    const DivCard = document.querySelector(".DivIMAGE-4");
    let IMG = document.createElement("img");
    IMG.classList.add("ResetIMG");

    IMG.src = ImagesRiver[4];
    // styles
    IMG.style.width = "100%";

    River.appendChild(DivCard);
    DivCard.appendChild(IMG);

    setCash(Math.trunc(cash - (Pool*0.5)))
    setPool(Math.trunc(Pool + (Pool*0.5)))
    setBtnDisabled3(true);
    

    setTimeout(() => {
      getWinner();
      setTimeout(() => {
        reset()
      }, 8000);
    }, 100);
  };
  
  const GetPool = () => {
    if (SiDealer) {
      setPool(Math.trunc(cashSi * 0.05 + cash * 0.03));
      setCash(Math.trunc(cash - cash * 0.03));
      setCashSi(Math.trunc(cashSi - cashSi * 0.05));
    } else if (PlayerDealer) {
      setPool(Math.trunc(cash * 0.05 + cashSi * 0.03));
      setCash(Math.trunc(cash - cash * 0.05));
      setCashSi(Math.trunc(cashSi - cashSi * 0.03));
    }
  };
  // New Game
  const newGame = () => {
    reset()
    setDrawCardsButtonDisabled(false)
    //    Coins
    setCash(500);
    setCashSi(500);
  }

  if(cashSi <= 0 ){
    alert(`Gratulacje! Wygrałeś! `)
    reset();
    setCash(500);
    setCashSi(500);
  
  }
  else if(cash<=0){
    alert(`Niestety przegrałeś, spróbuj ponownie`)
    reset();
    setCash(500);
    setCashSi(500);

  }

  return (
    <AppContext.Provider
      value={{
        cash,
        cashSi,
        PlayerCard,
        SiCard,
        GameRiver,
        flag,
        check,
        check2,
        check3,
        newGame,
        DrawCards,
        ImagesPlayer,
        ImagesSi,
        PlayerResult,
        SiResult,
        winner,
        Pool,
        BtnDisabled1,
        BtnDisabled2,
        BtnDisabled3,
        Surrender,
        SurrenderBtnDisabled,
        DrawCardsButtonDisabled
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
