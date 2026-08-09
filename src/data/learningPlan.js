import { studentToday } from "./studentToday";

export function buildLearningPlan() {
  return [...studentToday].sort((a, b) => {
    const priority = {
      High: 1,
      Medium: 2,
      Low: 3,
    };

    return priority[a.priority] - priority[b.priority];
  });
}
