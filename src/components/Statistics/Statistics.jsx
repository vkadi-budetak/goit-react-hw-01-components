import css from './Statistics.module.css';

export default function Statistics(props) {
  const { title, stats=[] } = props;

  return (
    <section className={css.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={css.statList}>
        {stats.map(item => (
          <li key={item.id} className="item">
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
