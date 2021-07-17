export default function filterInterests(data, interests) {
  if (interests.length > 0) {
    const filteredArray = [];
    data.forEach((obj) => {
      if (interests.includes(obj.tags[0].label.toLowerCase())) {
        filteredArray.push(obj);
      }
    });
    return filteredArray;
  } else {
    return data;
  }
}
