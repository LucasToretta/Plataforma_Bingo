import { useState, useEffect } from 'react'
import { NumberGrid } from './components/NumberGrid'
import { ControlPanel } from './components/ControlPanel'
import { LastNumbers } from './components/LastNumbers'
import { Container, Header, CurrentBall, MainContent, DrawSide, GridSide } from './styles'
import logo from './assets/logo.png'

function App() {
    const [totalBalls, setTotalBalls] = useState(() => {
        const saved = localStorage.getItem('totalBalls')
        return saved ? Number(saved) : 75
    })

    const [drawnNumbers, setDrawnNumbers] = useState(() => {
        const saved = localStorage.getItem('drawnNumbers')
        return saved ? JSON.parse(saved) : []
    })

    const [currentNumber, setCurrentNumber] = useState(() => {
        const saved = localStorage.getItem('currentNumber')
        return saved ? JSON.parse(saved) : null
    })

    const numbers = Array.from({ length: totalBalls }, (_, index) => index + 1)

    useEffect(() => {
        localStorage.setItem('totalBalls', totalBalls)
    }, [totalBalls])

    useEffect(() => {
        localStorage.setItem('drawnNumbers', JSON.stringify(drawnNumbers))
    }, [drawnNumbers])

    useEffect(() => {
        localStorage.setItem('currentNumber', JSON.stringify(currentNumber))
    }, [currentNumber])

    const speakNumber = (number) => {
        speechSynthesis.cancel()

        const digits = number.toString().split('')

        const intro = new SpeechSynthesisUtterance(`Número ${number}`)
        intro.lang = 'pt-BR'
        intro.rate = 0.9

        speechSynthesis.speak(intro)

        digits.forEach((digit, index) => {
            setTimeout(() => {
                const msg = new SpeechSynthesisUtterance(digit)
                msg.lang = 'pt-BR'
                msg.rate = 0.8

                speechSynthesis.speak(msg)
            }, 1200 + index * 800)
        })
    }

    const drawNumber = () => {
        const availableNumbers = numbers.filter(
            (number) => !drawnNumbers.includes(number)
        )

        if (availableNumbers.length === 0) {
            alert('Todas as bolas já foram sorteadas!')
            return
        }

        const randomIndex = Math.floor(Math.random() * availableNumbers.length)
        const newNumber = availableNumbers[randomIndex]

        setCurrentNumber(newNumber)
        setDrawnNumbers((prev) => [newNumber, ...prev])
        speakNumber(newNumber)
    }

    const resetGame = () => {
        const confirmReset = confirm('Tem certeza que deseja reiniciar o bingo?')

        if (!confirmReset) return

        setDrawnNumbers([])
        setCurrentNumber(null)

        localStorage.removeItem('drawnNumbers')
        localStorage.removeItem('currentNumber')
    }

    return (
        <Container>
            <Header>
                <img src={logo} alt="Logo" />

                <select
                    value={totalBalls}
                    onChange={(event) => {
                        const newTotalBalls = Number(event.target.value)

                        setTotalBalls(newTotalBalls)
                        setDrawnNumbers([])
                        setCurrentNumber(null)

                        localStorage.removeItem('drawnNumbers')
                        localStorage.removeItem('currentNumber')
                    }}
                >
                    <option value={30}>30 bolas</option>
                    <option value={60}>60 bolas</option>
                    <option value={75}>75 bolas</option>
                    <option value={90}>90 bolas</option>
                    <option value={100}>100 bolas</option>
                </select>
            </Header>

            <MainContent>
                <DrawSide>
                    <CurrentBall>{currentNumber ? currentNumber : '--'}</CurrentBall>

                    <ControlPanel
                        onDraw={drawNumber}
                        onReset={resetGame}
                        drawnCount={drawnNumbers.length}
                        totalBalls={totalBalls}
                    />

                    <LastNumbers numbers={drawnNumbers} />
                </DrawSide>

                <GridSide>
                    <NumberGrid
                        numbers={numbers}
                        drawnNumbers={drawnNumbers}
                        currentNumber={currentNumber}
                    />
                </GridSide>
            </MainContent>
        </Container>
    )
}

export default App