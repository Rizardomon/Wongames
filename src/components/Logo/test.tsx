import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // Renderizar o componente 'render'
    renderWithTheme(<Logo />)
    // Selecionar o elemento a ser testado 'screen' - (queries) 'getByTestId'
    // expect - assertion - asserção - comparação - analise
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    // Renderizar o componente 'render'
    renderWithTheme(<Logo color="black" />)
    // Selecionar o elemento a ser testado 'screen' - (queries) 'getByTestId'
    // expect - assertion - asserção - comparação - analise
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
