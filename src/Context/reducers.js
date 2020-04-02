export const XCLICKED = "xClicked";
export const BUILDSTATE = "state";
export const RESETSTATE = "resetState";
export const STARTGAME = "startGame";



const buildStateFunc = (action, state) => {
  const State = { ...state };

  for (let i = 0; i < 9; i += 1) {
    State.blankBlock.push(true);
    State.xBlock.push(false);
    State.oBlock.push(false);
  };

  return {
    ...state,
    blankBlock: State.blankBlock,
    xBlock: State.xBlock,
    oBlock: State.oBlock
  };
};


const resetState = (action, state) => {
  const State = { ...state };

  for (let i = 0; i < 9; i += 1) {
    State.blankBlock[i] = true;
    State.xBlock[i] = false;
    State.oBlock[i] = false;
  };

  return {
    ...state,
    blankBlock: State.blankBlock,
    xBlock: State.xBlock,
    oBlock: State.oBlock,
    gameWin: false,
    player1: true
  };
};


const checkWinnerFunc = State => {
  if ((State.xBlock[0] && State.xBlock[1] && State.xBlock[2]) || (State.oBlock[0] && State.oBlock[1] && State.oBlock[2])) { return true; };
  if ((State.xBlock[2] && State.xBlock[3] && State.xBlock[4]) || (State.oBlock[2] && State.oBlock[3] && State.oBlock[4])) { return true; };
  if ((State.xBlock[6] && State.xBlock[7] && State.xBlock[8]) || (State.oBlock[6] && State.oBlock[7] && State.oBlock[8])) { return true; };
  if ((State.xBlock[0] && State.xBlock[3] && State.xBlock[6]) || (State.oBlock[0] && State.oBlock[3] && State.oBlock[6])) { return true; };
  if ((State.xBlock[1] && State.xBlock[4] && State.xBlock[7]) || (State.oBlock[1] && State.oBlock[4] && State.oBlock[7])) { return true; };
  if ((State.xBlock[2] && State.xBlock[5] && State.xBlock[8]) || (State.oBlock[2] && State.oBlock[5] && State.oBlock[8])) { return true; };
  if ((State.xBlock[0] && State.xBlock[4] && State.xBlock[8]) || (State.oBlock[0] && State.oBlock[4] && State.oBlock[8])) { return true; };
  if ((State.xBlock[2] && State.xBlock[4] && State.xBlock[6]) || (State.oBlock[2] && State.oBlock[4] && State.oBlock[6])) { return true; };

  return false;
};


const startGameFunc = (action, state) => {
  return {
    ...state,
    gameStart: action.startGameBool
  };
};


const xClickedFunc = (action, state) => {
  const State = { ...state };
  if (action.xClickedObj.xClicked) {
    State.xBlock[action.xClickedObj.index] = true;
    State.blankBlock[action.xClickedObj.index] = false;
  } else {
    State.oBlock[action.xClickedObj.index] = true;
    State.blankBlock[action.xClickedObj.index] = false;
  };

  State.player1 ? State.player1 = false : State.player1 = true;

  return {
    ...State,
    xBlock: State.xBlock,
    oBlock: State.oBlock,
    blankBlock: State.blankBlock,
    player1: State.player1,
    gameWin: checkWinnerFunc(State)
  };
};



export default (state, action) => {
  switch (action.type) {
    case BUILDSTATE:
      return buildStateFunc(action, state);
    case STARTGAME:
      return startGameFunc(action, state);
    case XCLICKED:
      return xClickedFunc(action, state);
    case RESETSTATE:
      return resetState(action, state);
    default:
      return state;
  };
};