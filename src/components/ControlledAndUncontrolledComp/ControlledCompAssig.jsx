import React, { useReducer, useState } from 'react';

const ControlledCompAssig = () => {
    const [calculator, setCalculator] = useState({
        num1: '',
        num2: ''

      });
    const initialState = { result: 0 };
  const reducer = (state, action) => {
    switch (action) {
      case 'Add':
        state.result= parseInt(state.num1,10) - parseInt(state.num2,10);
        return state.result
        break;
      case 'Sub':
       return parseInt(state.num1,10) - parseInt(state.num2,10);
        break;
      case 'reset':
        return 0; // Resetting to 0
        break;
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h3>Combined Assignment on Controlled Comp And useReducer</h3>

      <label>
        Number 1:
        <input
          type='number'
          value={calculator.num1}
          onChange={(e) => setCalculator({ num1: e.target.value })}
          placeholder='Enter num 1'
        />
      </label>

      <label>
        Number 2:
        <input
          type='number'
          value={calculator.num2}
          onChange={(e) => setCalculator({ num2: e.target.value })}
          placeholder='Enter num 2'
        />
      </label>
      <br />
      <br />
      Result: {state.result}
      <div>
        <button
          type='button'
          className='btn btn-success btn-lg left'
          onClick={() => dispatch('Add' )}
          style={{ marginRight: '100px' }}
        >
          Addition
        </button>
        <button
          type='button'
          className='btn btn-secondary btn-lg right'
          onClick={() => dispatch('Sub')}
          style={{ marginRight: '100px' }}
        >
          Subtraction
        </button>
        <button
          type='button'
          className='btn btn-primary btn-lg right'
          onClick={() => dispatch('reset' )}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ControlledCompAssig;
