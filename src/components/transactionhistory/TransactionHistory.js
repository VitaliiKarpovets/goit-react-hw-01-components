import PropTypes from 'prop-types';
import { TableHistory, TableHead, HeadRow, Head, TableBody, BodyRow, Cell } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
    return (
        <TableHistory>
            <TableHead>
                <HeadRow>
                <Head>Type</Head>
                <Head>Amount</Head>
                <Head>Currency</Head>
                </HeadRow>
            </TableHead>

            <TableBody>
                {items.map(item => (
                <BodyRow key={item.id}>
                <Cell>{item.type}</Cell>
                <Cell>{item.amount}</Cell>
                <Cell>{item.currency}</Cell>
                </BodyRow>))}
            </TableBody>
        </TableHistory>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired,
            }
        )
    )
}

export default TransactionHistory;