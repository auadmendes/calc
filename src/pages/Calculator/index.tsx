import { Button, Container, Display, Keyboard, LastCalc, Result } from "./style";
import { Divide, Equals, Minus, Percent, Plus, PlusMinus, X } from 'phosphor-react'
import { useState } from "react";

export function Calculator() {
  const [type, setType] = useState('normal')
  const [screenValue, setScreenValue] = useState('')
  const [result, setResult] = useState('')

  const [lastResult, setLastResult] = useState('')

  const [firstNumber, setFirstNumber] = useState(7)

  function handleInputNumber(event: any) {
    console.log(event.target.name)
    setResult(result.concat(event.target.value))
    //setFirstNumber(data)
  }

  function handleClear() {
    setResult('')
  }

  function handleBackspace() {
    setResult(result.slice(0, - 1))
  }

  function handleCalculate() {
    setResult(eval(result).toString())
    setLastResult(result)
  }

  return (
    <Container>
      <Display>
        <LastCalc>{lastResult}</LastCalc>
        <Result>
          <Equals size={16} alt="equal sign" />
          <span>{result}</span>
        </Result>
      </Display>
      <Keyboard>
        <Button
          type="button"
          variant={'normal'}
          symbol={'purple'}
          value={'CE'}
          onClick={handleClear}
        >
          CE
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={'C'}
          onClick={handleBackspace}
        >
          C
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={'/100'}
          onClick={handleInputNumber}
        >
          <Percent size={20} />
        </Button>
        <Button
          type="button"
          variant={'purple'}
          value={'/'}
          onClick={handleInputNumber}
        >
          <Divide size={20} />
        </Button>
        <Button
          type="button"
          variant={'normal'}
          onClick={handleInputNumber}
          value={7}
        >
          7
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={8}
          onClick={handleInputNumber}
        >
          8
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={9}
          onClick={handleInputNumber}
        >
          9
        </Button>
        <Button
          type="button"
          variant={'purple'}
          value={'X'}
          onClick={handleInputNumber}
        >
          <X size={20} />
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={4}
          onClick={handleInputNumber}
        >
          4
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={5}
          onClick={handleInputNumber}
        >
          5
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={6}
          onClick={handleInputNumber}
        >
          6
        </Button>
        <Button
          type="button"
          variant={'purple'}
          value={'-'}
          onClick={handleInputNumber}
        >
          <Minus size={20} />
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={1}
          onClick={handleInputNumber}
        >
          1
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={2}
          onClick={handleInputNumber}
        >
          2
        </Button>
        <Button
          type="button"
          variant={'normal'}
        >
          3
        </Button>
        <Button
          type="button"
          variant={'purple'}
          value={'+'}
          onClick={handleInputNumber}
        >
          +
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={'+/-'}
          onClick={handleInputNumber}
        >
          <PlusMinus size={20} />
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={0}
          onClick={handleInputNumber}
        >
          0
        </Button>
        <Button
          type="button"
          variant={'normal'}
          value={','}
        >
          ,
        </Button>
        <Button
          type="button"
          variant={'purple'}
          value={'='}
          onClick={handleCalculate}
        >
          <Equals size={20} />
        </Button>

      </Keyboard>
    </Container>
  )
}