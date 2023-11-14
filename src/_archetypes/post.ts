const capitalizeFirst = (str: string): string => {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
};
const toTitle = (str: string): string => {
  const arr = str.split(" ");
  let res = "";
  for (const elem of arr) {
    res = `${res}${capitalizeFirst(elem)}`;
  }
  return res;
};

export default function (title: string) {
  const slug = title.replace(/\s+/g, "-").toLowerCase();
  const today = new Date().toLocaleDateString("en-ca");
  return {
    path: `/posts/${today.replaceAll("-", "")}_${slug}.md`,
    content: {
      title: toTitle(title),
      date: today,
      content: "",
    },
  };
}
