import styled from 'styled-components'

export const Container = styled.main`
    min-height: 100vh;
    padding: 24px;
    max-width: 1600px;
    margin: 0 auto;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    img {
        height: 140px;
        object-fit: contain;
        border-radius: 10px;
    }

    select {
        padding: 12px 16px;
        border-radius: 12px;
        font-size: 16px;
        background: #132235;
        color: #f6c90e;
        border: 2px solid #d4a017;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;

        img {
            height: 100px;
        }

        select {
            width: 100%;
        }
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 1048px) {
        display: grid;
        grid-template-columns: 34% 66%;
        align-items: center;
        gap: 32px;
        min-height: calc(100vh - 220px);
    }
`

export const DrawSide = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    @media (min-width: 1048px) {
        justify-content: center;
        height: 100%;
    }
`

export const GridSide = styled.section`
    width: 100%;
    min-width: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Grid = styled.section`
    width: 100%;
    max-width: 720px;

    display: grid;
    grid-template-columns: repeat(10, 56px);
    gap: 10px;
    justify-content: center;

    @media (max-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        max-width: 100%;
        gap: 8px;
    }
`

export const Title = styled.h1`
    color: #f6c90e;
`

export const CurrentBall = styled.div`
    width: 260px;
    height: 260px;
    border-radius: 50%;

    background: radial-gradient(
        circle,
        #f8e08a 0%,
        #f6c90e 45%,
        #c99700 100%
    );

    color: #08131f;
    font-size: 96px;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    box-shadow:
        0 0 50px rgba(246, 201, 14, 0.35),
        inset 0 0 18px rgba(255, 255, 255, 0.45);

    transition: all 0.4s ease;

    @media (max-width: 768px) {
        width: 180px;
        height: 180px;
        font-size: 64px;
    }
`