import styled from "@emotion/styled";

export const Container = styled.div`
    width: 300px;
    height 200px;
    text-align: center;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;
    margin-top: 20px;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`


export const Avatar = styled.img`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0;

`

export const Name = styled.p`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.187;
    letter-spacing: 0.03em;
`
export const Tag = styled.p`
    font-size: 20px;
    line-height: 1.187;
    letter-spacing: 0.03em;
    color: grey;
    margin: 0;
`
export const Location = styled.p`
    font-size: 20px;
    line-height: 1.187;
    letter-spacing: 0.03em;
    color: grey;
    margin: 0;
    margin-top: 20px;
`

export const StatsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    background-color: #DCDCDC;
`


export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 75px;
    border-top: 0.5px solid #696969;
    :not(:last-child) { border-right: 0.5px solid #696969 };
`
export const Label = styled.span`
    color: #696969;
    font-size: 12px;
    line-height: 1.187;
    letter-spacing: 0.03em;
    margin-bottom: 10px;
`

export const Quantity = styled.span`
    font-weight: 500;
    font-size: 15px;
    line-height: 1.187;
    letter-spacing: 0.03em;    
`