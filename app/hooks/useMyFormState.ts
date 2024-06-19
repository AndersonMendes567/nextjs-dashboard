'use client'

import { useState } from "react"

type Action = (state: any, formData: FormData)=> any

export default function useMyFormState(action: Action, initialState: any) {
  const [state, setState] = useState(initialState)

  async function dispatch(formData: FormData) {
    const newSate = await action(state, formData)
    if(newSate) setState(newSate)
  }

  return [
    state,
    dispatch
  ]
}