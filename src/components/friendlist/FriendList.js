import PropTypes from 'prop-types';
import FriendListItem from './friendlistitem/FriendListItem';
import friends from '../../dataJSON/friends.json';
import {List} from './FriendList.styled'


function FriendList() {

    return (
        <List>
            {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />)
            )} 
        </List>
    )

}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;