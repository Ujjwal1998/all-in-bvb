function Scorer({ goal, isBVBHomeTeam }) {
  if (isBVBHomeTeam) {
    if (goal.scoreTeam2 == 0) {
      return (
        <div className="text-yellow-400">
          {goal.matchMinute}' {goal.goalGetterName}
        </div>
      );
    } else {
      console.log("in else", goal);
      return (
        <div className="text-white">
          {goal.matchMinute}' {goal.goalGetterName}
        </div>
      );
    }
  }
  if (!isBVBHomeTeam) {
    console.log("hereeee");
    if (goal.scoreTeam1 == 0) {
      return (
        <div className="text-yellow-400">
          {goal.matchMinute}' {goal.goalGetterName}
        </div>
      );
    } else {
      return (
        <div className="text-white">
          {goal.matchMinute}' {goal.goalGetterName}
        </div>
      );
    }
  }
}

export default Scorer;
