import PropTypes from 'prop-types';
import {Container, ContTitle, StatList, Item, Label, Percentage} from './Statistics.styled'
import randomColor from './Statistics.styled';

function Statistics({ title, stats }) {
    return (
        <Container>
            {title && <ContTitle>{title}</ContTitle>}

            <StatList>
                {stats.map(stat => {
                    const bgColor = randomColor();
                    return (
                        <Item key={stat.id} style={{ backgroundColor: bgColor,}}>
                            <Label>{stat.label}</Label>
                            <Percentage>{stat.percentage}%</Percentage>
                        </Item>
                    )
                })}
            </StatList>
        </Container>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
}

export default Statistics;