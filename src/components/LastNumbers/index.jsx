import { Container, List, Item } from './styles'

export function LastNumbers({ numbers }) {
    return (
        <Container>
            <h2>Últimas bolas</h2>

            {numbers.length === 0 ? (
                <p>Nenhuma bola sorteada ainda.</p>
            ) : (
                <List>
                    {numbers.slice(0, 10).map((number) => (
                        <Item key={number}>{number}</Item>
                    ))}
                </List>
            )}
        </Container>
    )
}
