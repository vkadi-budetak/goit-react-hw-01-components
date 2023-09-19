import css from './FriendListItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={`${css.status} ${isOnline && css.statusOnline}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}