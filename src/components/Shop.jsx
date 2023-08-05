import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'


const Shop = () => {
  const dispatch = useDispatch()
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector(state => state.amount)
  return (
    <div className='my-3 mx-3'>
      <h2 className='my-3'> Deposit/Withdraw money  </h2>

      {/* <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button> another way to update */}

      <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(100)}} >-</button>
      Update Balance ({amount})

      {/* <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}

      <button className="btn btn-primary mx-2" onClick={() => {depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop