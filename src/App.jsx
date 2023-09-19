import Profile from './components/Profile/Profile';
import user from './components/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from './components/data.json';
import FriendList from 'components/FriendList/FriendList';
import friends from './components/friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './components/transactions.json'

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics 
        title={'Upload stats'} 
        stats={data} 
      />
      <FriendList friends={friends}/>
      <TransactionHistory 
      items={transactions}/>
  
    </div>
  );
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       HEEEEEEELOOOO
//     </div>
//   );
// };
