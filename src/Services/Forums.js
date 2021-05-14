export function getForums() {
  return new Promise((resolve, reject) => {
    const forums = [
      {
        id: 1,
        name: "JavaScript",
        description:
          "Ask questions and share tips for JavaScript, jQuery, Node, D3 - anything that touches the vast JavaScript and npm ecosystem.",
        color: "#fa8c16",
      },
      {
        id: 2,
        name: "React",
        description: "Ask the questions and share tips for React and Node",
        color: "#52c41a",
      },
      {
        id: 3,
        name: "General",
        description:
          "Ask questions and share tips related to Python and any tools in the Python ecosystem.",
        color: "#1890ff",
      },
      {
        id: 4,
        name: "Career Advice",
        description:
          "Ask about anything related to HTML and CSS, including web design tools like Sass and Bootstrap.",
        color: "#003a8c",
      },
      {
        id: 5,
        name: "Project Feedback",
        description:
          "Get feedback on projects you’ve built. Be sure to use a descriptive title.",
        color: "#eb2f96",
      },
    ];

    setTimeout(() => resolve(forums), 2000);
  });
}
