import React, { useContext } from 'react'

import * as zod from 'zod'
import { FormContainer, MinutesAmountInput, TaskInput } from './style'

import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  // const newCycleFormValidationSchema = zod.object({
  //   task: zod.string(),
  //   minutesAmount: zod
  //     .number()
  //     .min(1, 'O ciclo precisa ser de no mínimo 5 minutos')
  //     .max(60, 'O ciclo precisa ser  de no máximo 60 minutos'),
  // })

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
        min={1}
        max={60}
      />
      <span>minutos</span>
    </FormContainer>
  )
}

export default NewCycleForm
