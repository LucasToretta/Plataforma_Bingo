import styled from 'styled-components'

export const Grid = styled.section`
    display: grid;

    grid-template-columns: repeat(10, 58px);

    gap: 10px;

    justify-content: center;

    margin-bottom: 24px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(5, 58px);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(5, 1fr);
        gap: 8px;
    }
`

export const NumberButton = styled.div`
    background: ${({ $isCurrent, $isDrawn }) => {
        if ($isCurrent) return '#38b000'
        if ($isDrawn) return '#d62828'
        return '#dbe4f0'
    }};

    color: ${({ $isDrawn, $isCurrent }) =>
        $isDrawn || $isCurrent ? '#fff' : '#111'};

    width: 58px;
    height: 58px;

    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    font-weight: bold;

    transition: all 0.2s ease;

    @media (max-width: 600px) {
        width: 100%;
        height: 52px;
        font-size: 20px;
    }
`