import { Panel, Button, Info } from './styles'

export function ControlPanel({ onDraw, onReset, drawnCount, totalBalls }) {
    return (
        <Panel>
            <Button onClick={onDraw}>Sortear bola</Button>
            <Button variant="danger" onClick={onReset}>
                Reiniciar
            </Button>

            <Info>
                Sorteadas: {drawnCount} / {totalBalls}
            </Info>
        </Panel>
    )
}