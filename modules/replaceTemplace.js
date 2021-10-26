module.exports = (temp, product) => {
  let output = temp.replace(/{%DATA/g, product.data);
  output = output.replace(/{%LOCATION%/g, product.location);
  output = output.replace(/{%PLACE%/g, product.place);
  return output;
};
