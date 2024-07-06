function Scorer({ goal, idx, classNames }) {
  console.log(goal.assist);
  return (
    <div key={idx} className={`${classNames} pl-4  text-xs sm:text-sm`}>
      {goal.assist.id
        ? `${goal.time.elapsed}' ${goal.player.name} (${goal.assist.name})`
        : `${goal.time.elapsed}' ${goal.player.name})`}
    </div>
  );
}

export default Scorer;
