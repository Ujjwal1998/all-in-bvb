function Scorer({ goal, idx, classNames }) {
  console.log(goal.assist);
  return goal.assist.id ? (
    <div key={idx} className={classNames}>
      {goal.time.elapsed}' {goal.player.name} {`(${goal.assist.name})`}
    </div>
  ) : (
    <div key={idx} className={classNames}>
      {goal.time.elapsed}' {goal.player.name}
    </div>
  );
}

export default Scorer;
