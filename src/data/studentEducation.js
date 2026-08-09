export const studentEducation = {
  student: {
    id: 1,
    name: "Rahul Sharma",
  },

  providers: [
    {
      id: "school-1",
      type: "school",
      name: "EduOrbit Demo School",
      role: "School",
      classes: ["10-A"],
      subjects: ["Mathematics", "Science", "English"],
    },

    {
      id: "coaching-1",
      type: "coaching",
      name: "EduOrbit Coaching",
      role: "Coaching",
      batches: ["JEE Foundation"],
      subjects: ["Physics", "Chemistry", "Mathematics"],
    },

    {
      id: "tuition-1",
      type: "tuition",
      name: "EduOrbit Tuition",
      role: "Tuition",
      classes: ["Evening Batch"],
      subjects: ["Mathematics"],
    },
  ],
};
