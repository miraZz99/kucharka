let obj = {
  name: "andrej",
  indrediences: [
    {
      mateial: "vejce",
      count: 1,
    },
    {
      mateial: "mas",
      count: 1,
    },
  ],
};
let zk = obj.indrediences.map((e) => console.log(e.mateial));
