import styled from "styled-components";

export const SmallCardStyle = styled.li`
    width: 100%;
    height: 35px;
    border: 1px solid blueviolet;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    h3{
        color: gray;
        font-weight: bold;
        cursor: pointer;
    }&:hover{
        opacity: 0.8;
    }
`;

export const SmallCardList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;
    h2{
        font-size: 24px;
        font-weight: bold;
        display: block;
    }
`;