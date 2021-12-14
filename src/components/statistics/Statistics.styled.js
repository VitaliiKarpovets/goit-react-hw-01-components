import styled from "@emotion/styled";

export const Container = styled.section`
    width: 300px;
    height 200px;
    text-align: center;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;
    margin-top: 20px;
    background-color: white;
`
export const ContTitle = styled.h2`
    text-transform: uppercase;
    color: #696969;
`

export const StatList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    // background-color: #DCDCDC;
`
export default function randomColor() {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-top: 0.5px solid #696969;
    :not(:last-child) { border-right: 0.5px solid #696969 };
`

export const Label = styled.span`
    color: #fff;
    font-size: 12px;
    line-height: 1.187;
    letter-spacing: 0.03em;
    margin-bottom: 10px;
`

export const Percentage = styled.span`
    color: #fff;
    font-size: 20px;
    line-height: 1.187;
    letter-spacing: 0.03em;
    margin-bottom: 10px;
`


