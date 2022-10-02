import { render, screen, fireEvent, act, RenderResult } from '@testing-library/react'
import { DelayInput } from './index'

describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    handleChange = jest.fn()
    renderResult = render(<DelayInput onChange={handleChange} />)
    jest.useFakeTimers()
  })

  afterEach(() => {
    renderResult.unmount()
    jest.useFakeTimers()
  })

  it('should display empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent('Inputted Text:')
  })

  it('should display Waiting... immediately after onChange event occurs', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText } })
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent('Waiting...')
  })

  it('should display input text 1 second after onChange event occurs', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText } })
    await act(() => {
      jest.runAllTimers()
    })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    expect(spanNode).toHaveTextContent(`Inputted Text: ${inputText}`)
  })

  it('should call onChange 1 second after onChange event occurs', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText } })
    await act(() => {
      jest.runAllTimers()
    })

    expect(handleChange).toHaveBeenCalled()
  })
})
