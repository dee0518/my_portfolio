let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug", "Sep","Oct","Nov","Dec"]
let weekDayInKor = ['일', '월', '화', '수', '목', '금', '토'];
let weekDayInEng = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// 
function yyyy_mm_dd_dot(date) {
    var x = date;
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length === 1) && (d = '0' + d);
    (m.length === 1) && (m = '0' + m);
    var yyyymmdd = y + "." + m + "." + d;
    return yyyymmdd;
}

function mm_dd_dot(date) {
    var x = date;
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length === 1) && (d = '0' + d);
    (m.length === 1) && (m = '0' + m);
    var mmdd = m + "." + d;
    return mmdd;
}

function hh_mm_ss(date) {
    var x = date;
    var h = x.getHours().toString();
    var m = x.getMinutes().toString();
    var s = x.getSeconds().toString();
    (h.length === 1) && (h = '0' + h);
    (s.length === 1) && (s = '0' + s);
    (m.length === 1) && (m = '0' + m);
    var hhmmss = h + ":" + m + ":" + s;
    return hhmmss;
}

function hh_mm(date) {
    var x = date;
    var h = x.getHours().toString();
    var m = x.getMinutes().toString();
    (h.length === 1) && (h = '0' + h);
    (m.length === 1) && (m = '0' + m);
    var hhmm = h + ":" + m ;
    return hhmm;
}

function hh_mm_am_pm(date) {
    var x = date;
    var h = x.getHours() > 12 ? x.getHours() - 12 : x.getHours();
    var am_pm = date.getHours() >= 12 ? "오후" : "오전";
    h = h < 10 ? "0" + h : h;
    var m = x.getMinutes() < 10 ? "0" + x.getMinutes() : x.getMinutes();
    var hhmm = am_pm + " " + h + ":" + m;

    return hhmm;
}

function getDayInKorean(date) {
    let day = date.getDay()

    return weekDayInKor[day]
}

function yyyy_mm_dd_hh_mm_ss_dot(time){
  let date = new Date(time);
  let dayString = yyyy_mm_dd_dot(date);
  let timeString = hh_mm_ss(date);
  return dayString + " " + timeString;
}

function mm_dd_dot_day(time){
    let date = new Date(time);
    let dateString = mm_dd_dot(date);
    let dayString = getDayInKorean(date)

    return dateString + ' ' + dayString;
}

function day_hh_mm(time){
    let date = new Date(time);
    let dayString = getDayInKorean(date)
    let timeString = hh_mm(date);

    return dayString + ' ' + timeString;
}

function getQueryVariable(variable){
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === variable) {
          return decodeURIComponent(pair[1]);
      }
  }
  console.log('Query variable %s not found', variable);
  return null;
}

exports.yyyy_mm_dd_dot = yyyy_mm_dd_dot;
exports.mm_dd_dot= mm_dd_dot;
exports.hh_mm_ss = hh_mm_ss;
exports.hh_mm = hh_mm;
exports.hh_mm_am_pm = hh_mm_am_pm;
exports.yyyy_mm_dd_hh_mm_ss_dot = yyyy_mm_dd_hh_mm_ss_dot;
exports.mm_dd_dot_day = mm_dd_dot_day
exports.day_hh_mm = day_hh_mm;
exports.weekDayInKor = weekDayInKor;
exports.weekDayInEng = weekDayInEng;
exports.getQueryVariable = getQueryVariable;