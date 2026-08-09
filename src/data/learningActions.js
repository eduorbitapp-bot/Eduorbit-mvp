import { getLearningInsights } from "./learningInsights";

export function getLearningActions() {
  const insights = getLearningInsights();

  return insights.map((insight) => {
    if (insight.priority === "High") {
      return {
        ...insight,
        actions: [
          "Review the basic concepts",
          "Watch or read a simple explanation",
          "Solve 5 basic practice questions",
          "Take a short revision test",
        ],
      };
    }

    return {
      ...insight,
      actions: [
        "Review the topic",
        "Solve 3 practice questions",
        "Check mistakes",
      ],
    };
  });
}
