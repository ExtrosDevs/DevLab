let dataList = [];

exports.postData = (req, res) => {
  const { data } = req.body;
  dataList.push({ data, username: req.user.username });
  res.status(201).send({ message: "data added successfully" });
};

exports.getData = (req, res) => {
  res.send(dataList);
};

exports.getDummy = (req, res) => {
  res.send({ message: "Here is your dummy data!"});
};