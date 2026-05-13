import styled from 'styled-components'

export const Container = styled.section`
    text-align: center;

    h2 {
        margin-bottom: 12px;
        color: #f6c90e;
    }
    `

export const List = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    `

export const Item = styled.span`
    background: #333;
    border: 1px solid #555;
    padding: 10px 14px;
    border-radius: 8px;
    font-weight: bold;
    `