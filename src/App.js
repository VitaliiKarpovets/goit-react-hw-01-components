import { Fragment } from 'react';
import Profile from './components/profile';
import user from './components/profile/user.json';
import FriendList from './components/friendlist/FriendList';
import friends from './components/friendlist/friends.json';
import Statistics from './components/statistics/Statistics';
import data from './components/statistics/data.json';
import TransactionHistory from './components/transactionhistory/TransactionHistory';
import transactions from './components/transactionhistory/transactions.json'

const { username, tag, location, avatar, stats } = user;


function App() {
  return (
    <Fragment>
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />

      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <TransactionHistory items={transactions} />
      </Fragment>
  );
}

export default App;
