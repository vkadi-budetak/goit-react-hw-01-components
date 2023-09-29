import css from './Statistics.module.css';

export default function Statistics(props) {
  const { title, stats = [] } = props;

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <section className={css.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={css.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className="item"
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
