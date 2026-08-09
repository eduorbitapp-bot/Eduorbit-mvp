import { studentToday } from "./studentToday";
import { getLearningActions } from "./learningActions";

export function getUnifiedLearningPlan() {
  const actions = getLearningActions();

  const actionItems = actions.map((item) => ({
    id: `action-${item.subject}-${item.topic}`,
    source: "EduOrbit AI",
    provider: item.subject,
    title: `Improve ${item.topic}`,
    priority: item.priority,
    type: "learning",
  }));

  const activityItems = studentToday.map((item) => ({
    id: `activity-${item.id}`,
    source: item.provider,
    provider: item.provider,
    title: item.title,
    priority: item.priority,
    type: item.type,
  }));

  const priority = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  return [...actionItems, ...activityItems].sort(
    (a, b) => priority[a.priority] - priority[b.priority]
  );
}
