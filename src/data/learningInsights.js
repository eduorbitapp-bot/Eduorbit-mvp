import { studentTopics } from "./studentTopics";

export function getLearningInsights() {
  const insights = [];

  studentTopics.forEach((subject) => {
    subject.topics.forEach((topic) => {
      if (topic.score < 70) {
        insights.push({
          subject: subject.subject,
          topic: topic.name,
          score: topic.score,
          priority: "High",
          message: `Focus more on ${topic.name}`,
        });
      } else if (topic.score < 80) {
        insights.push({
          subject: subject.subject,
          topic: topic.name,
          score: topic.score,
          priority: "Medium",
          message: `Practice ${topic.name}`,
        });
      }
    });
  });

  return insights.sort((a, b) => a.score - b.score);
}
