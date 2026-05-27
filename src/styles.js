import styled from 'styled-components'

export const Container = styled.main`
    min-height: 100vh;
    padding: 24px;          /* ← mobile */
    max-width: 1600px;
    margin: 0 auto;

    @media (min-width: 600px) {
       margin: 40px;      /* ← desktop */
    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;

    img {
        height: 100px;
        object-fit: contain;
        border-radius: 10px;
    }

    select {
        width: 100%;
        padding: 12px 16px;
        border-radius: 12px;
        font-size: 16px;
        background: #132235;
        color: #f6c90e;
        border: 2px solid #d4a017;
    }

    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 32px;

        img {
            height: 140px;
        }

        select {
            width: auto;
        }
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 34% 66%;
        align-items: center;
        min-height: calc(100vh - 220px);
    }
`

export const DrawSide = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 100%;
`

export const GridSide = styled.section`
    width: 100%;

    overflow-x: auto;

    display: flex;
    justify-content: center;
`

export const Title = styled.h1`
    color: #f6c90e;
`

export const CurrentBall = styled.div`
    width: clamp(170px, 45vw, 260px);
    height: clamp(170px, 45vw, 260px);
    border-radius: 50%;

    background: radial-gradient(
        circle,
        #f8e08a 0%,
        #f6c90e 45%,
        #c99700 100%
    );

    color: #08131f;
    font-size: clamp(64px, 18vw, 96px);
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    box-shadow:
        0 0 50px rgba(246, 201, 14, 0.35),
        inset 0 0 18px rgba(255, 255, 255, 0.45);

    transition: all 0.4s ease;
`