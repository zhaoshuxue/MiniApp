const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getuid = function(){
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + "-" + S4());
}

const getCurDate = function(){
  var myDate = new Date();
  return myDate.getFullYear() + "." + (myDate.getMonth() + 1) + "." + myDate.getDate();
}

module.exports = {
  formatTime: formatTime,
  getuid: getuid,
  getCurDate: getCurDate
}
