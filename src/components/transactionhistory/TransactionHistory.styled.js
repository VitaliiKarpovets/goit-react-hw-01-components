import styled from "@emotion/styled";

export const TableHistory = styled.table`
    width: 600px;
    padding-top: 20px;
`

export const TableHead = styled.thead`
    background-color: #00BFFF;
    height: 50px;
`
export const HeadRow = styled.tr`
    color: #fff
`

export const Head = styled.th`
    color: #fff
`

export const TableBody = styled.tbody`
    text-align: center;
`

export const BodyRow = styled.tr`
    :nth-of-type(even) {
        background-color: #FFFFFF;
    };
    :nth-of-type(odd) {
        background-color: #00FFFF;
    }
`

export const Cell = styled.td`
    color: #808080;
`