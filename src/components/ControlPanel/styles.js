import styled from 'styled-components'

export const Panel = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
    `

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    padding: 14px 22px;
    font-size: 18px;
    font-weight: bold;
    background: ${({ variant }) =>
        variant === 'danger' ? '#d62828' : '#38b000'};
    color: #fff;
    `

export const Info = styled.p`
    font-size: 18px;
    font-weight: bold;
    `