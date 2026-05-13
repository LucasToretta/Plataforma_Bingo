import { Grid, NumberButton } from './styles'

export function NumberGrid({ numbers, drawnNumbers, currentNumber }) {
    return (
        <Grid>
            {numbers.map((number) => (
                <NumberButton
                    key={number}
                    $isDrawn={drawnNumbers.includes(number)}
                    $isCurrent={currentNumber === number}
                >
                    {number}
                </NumberButton>
            ))}
        </Grid>
    )
}