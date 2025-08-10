const getStoredReadList = () => {
  // read list
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addtoStoredReaddList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    console.log(id, "already stored");
  } else {
    storedList.push(id);
    const savestoredList = JSON.stringify(storedList);
    localStorage.setItem("read-list", savestoredList);
  }
};

export {addtoStoredReaddList}
