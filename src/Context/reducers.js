export const XCLICKED = 'xClicked';
export const STATE = 'state';

const initialStateFunc = (action, state) => {
  const State = { ...state }
  for (let i = 0; i < 9; i += 1) {
    State.blankBlock.push(true);
    State.xBlock.push(false);
    State.oBlock.push(false)
  };
  return State;
};

const checkWinnerFunc = (action, state, State) =>  {
  const winningObj = {
    1: 'tttffffff',
    2: 'ffftttfff',
    3: 'ffffffttt',
    4: 'tfftfftff',
    5: 'ftfftfftf',
    6: 'fftfftfft',
    7: 'tffftffft',
    8: 'fftftftff'
  }

  let str = "";

  State.xBlock.forEach(element => {
    element ? str += "t" : str += "f"
  });

  Object.keys(winningObj).forEach(element => {
    if (winningObj[element] === str) {
      console.log(str)
      return true;
    }
  })

  return false;
}

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
  checkWinnerFunc(action, state ,State);
  return State;
};

export default (state, action) => {
  switch (action.type) {
    case XCLICKED:
      return xClickedFunc(action, state);
    case STATE:
      return initialStateFunc(action, state)
    default:
      return state;
  };
};