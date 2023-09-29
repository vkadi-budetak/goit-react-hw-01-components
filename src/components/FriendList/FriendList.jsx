import css from './FriendList.module.css'
import FriendListItem from './FriendListItem'


export default function FriendList({friends}) {
    return (
        <ul className={css.friend}>
            {friends.map((item) => (
                <FriendListItem 
                avatar={item.avatar} 
                name={item.name} 
                isOnline={item.isOnline} 
                key={item.id}/>
            ))}
</ul>
    )
}