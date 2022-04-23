import styled from 'styled-components';

export const Container = styled.div`
    background-color: #27282f;
    color: #fff;
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .NoPhotos {
        padding: 10px 20px;
        background-color: #3d3f43;
        border-radius: 10px;
        display: flex;
        gap: 15px;
    }
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    @media(max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        gap: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`

export const UploadForm = styled.form`
    background-color: #3d3f43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    text-align: center;

    input[type=submit] {
        background-color: #756df4;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        transition: filter 0.3s;
        &:hover {
            filter: brightness(0.9);
        }
        &:disabled {
            cursor: default;
            filter: brightness(0.7);
        }
        @media(max-width: 700px) {
        margin-top: 3rem;
        padding: 10px 2rem;
    }
    }

`