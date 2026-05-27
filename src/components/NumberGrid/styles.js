import styled from 'styled-components'

export const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(clamp(36px, 7vw, 58px), 1fr));
    gap: clamp(4px, 1vw, 8px);
    width: 100%;
`

export const NumberButton = styled.div`
    width: clamp(36px, 7vw, 58px);
    height: clamp(36px, 7vw, 58px);
    font-size: clamp(14px, 3vw, 24px);
    font-weight: bold;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    background: ${({ $isCurrent, $isDrawn }) => {
        if ($isCurrent) return '#38b000'
        if ($isDrawn) return '#d62828'
        return '#dbe4f0'
    }};

    color: ${({ $isDrawn, $isCurrent }) =>
        $isDrawn || $isCurrent ? '#fff' : '#111'};
`