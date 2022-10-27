import React, {FC, ChangeEventHandler} from 'react'
import {DebounceInput} from 'react-debounce-input'

import cl from './cl.module.scss'

interface inputProps {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  children?: JSX.Element,
  placeholder: string
}

export const Input: FC<inputProps> = 
  ({
    value, 
    onChange, 
    placeholder, 
  }) => {
  return (
    <DebounceInput 
      value={value}
      onChange={onChange}
      type='text'
      placeholder={placeholder}
      minLength={3}
      debounceTimeout={500}
      className={cl.input}
    />
  )
}
