let data_ary = ['one', 'two', 'three'];
let data_str = 'あいうえお';
let data_map = new Map([['MON', '月曜'], ['TUE', '火曜'], ['WED', '水曜']]);

for(let d of data_ary) {
  console.log(d);
}

for(let d of data_str) {
  console.log(d);
}

for(let [key, value] of data_map) {
  console.log(`${key}：${value}`);
}
