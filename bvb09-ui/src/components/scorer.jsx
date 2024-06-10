function Scorer({ goal, idx, classNames }) {
  return goal.assist ? (
    <div key={idx} className={classNames}>
      {goal.time.elapsed}' {goal.player.name} - {goal.assist.name}
    </div>
  ) : (
    <div key={idx} className={classNames}>
      {goal.time.elapsed}' {goal.player.name}
    </div>
  );
}

export default Scorer;
