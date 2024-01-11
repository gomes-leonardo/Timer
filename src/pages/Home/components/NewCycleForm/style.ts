import styled from 'styled-components'

export const FormContainer = styled.main`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-size: inherit;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    columns: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    border-color: ${(props) => props.theme['green-500']};
    box-shadow: none;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  text-align: center;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::placeholder {
    text-align: center;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;

  &::placeholder {
    text-align: center;
  }
`
