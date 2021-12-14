import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    align-items: center;
    width: 300px;
    height: 75px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;
    :not(:last-child) { margin-bottom: 15px };
`
const bgColor = props => {
    switch (props.isOnline) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'tomato';
    }
}

export const Status = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${bgColor};
    margin-left: 20px;
    margin-right: 20px;
`
export const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 10px;
    padding-right: 20px;
`

export const Name = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.187;
    letter-spacing: 0.03em;
`
