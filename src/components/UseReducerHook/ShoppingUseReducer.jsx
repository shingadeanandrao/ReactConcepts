import React, { useReducer, useState } from 'react';

const ShoppingUseReducer = () => {
  const reducer = (total, action) => {
    switch (action.type) {
      case 'add':
        return total + action.qty * 10;
      case 'sub':
        return total - action.qty * 10;
      case 'reset':
        return 0;
      default:
        return total;
    }
  };

  const [qty, setQty] = useState('');
  const [total, dispatch] = useReducer(reducer, 0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQty(value);
  };

  return (
    <>
      <h3>Inventory Count by useReducer Hook</h3>
      <br />
      Total Items: {total}
      <br />
      <br />
      Boxes: {qty}
      <br />
      <br />
      <label>
        Quantity of Boxes:{' '}
        <input type='number' name='qty' value={qty} onChange={handleChange} required />
      </label>
      <br />
      <br />
      <div>
        <button
          type='button'
          className='btn btn-success btn-lg left'
          onClick={() => dispatch({ type: 'add', qty: parseInt(qty, 10) })}
          style={{ marginRight: '100px' }}
        >
          Add QTY
        </button>
        <button
          type='button'
          className='btn btn-secondary btn-lg right'
          onClick={() => dispatch({ type: 'sub', qty: parseInt(qty, 10) })}
          style={{ marginRight: '100px' }}
        >
          Remove QTY
        </button>
        <button
          type='button'
          className='btn btn-primary btn-lg right'
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ShoppingUseReducer;
