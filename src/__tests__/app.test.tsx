import React from 'react'
import {render,screen,fireEvent} from '@testing-library/react'
import App from '../App'

test('props is avaliable', ()=>{
  const value="123"
  render(<App value={value}/>)
  expect(screen.queryByTestId('props')?.innerText).toBe(value)
})

