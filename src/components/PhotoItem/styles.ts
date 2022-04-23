import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;

export const FooterImg = styled.div`
    display: flex;
`

export const NameImg = styled.div`
    
`

export const RemovePhoto = styled.div`
    margin: 10px;
    font-size:1.3rem;
    cursor: pointer;
    &:hover {
        filter: brightness(0.9);
    }
`