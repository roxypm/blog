const fs = require("fs");
const dir = "travel/xiannvshan";
const files = fs.readdirSync(`./${dir}`);
// console.log(files);

const newArr = files.map((item) => {
  return `![](/images/${dir}/${item})`;
});
const str = newArr.join("\n");
console.log(str);
