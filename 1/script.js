function createCalendar(elem, year, month) {
  month = month - 1;
  let monthDate = new Date(year, month);

  function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }
  let monthFirstDayOfWeek = getDay(monthDate);

  let table = document.createElement('table');
  let firstRow = document.createElement('tr');
  let secondRow = document.createElement('tr');

  let days = ['пн', 'вт', 'cp', 'чт', 'пт', 'сб', 'нд'];

  for (let day = 0; day < days.length; day++) {
    let th = document.createElement('th');
    th.textContent = days[day];
    firstRow.append(th);
  }
  table.append(firstRow);

  for (let pastMonthDay = 0; pastMonthDay < monthFirstDayOfWeek; pastMonthDay++) {
    let td = document.createElement('td');
    secondRow.append(td);
  }
  table.append(secondRow);

  while (secondRow.cells.length < 7) {
    let td = document.createElement('td');
    td.textContent = monthDate.getDate();
    monthDate.setDate(monthDate.getDate() + 1);
    secondRow.append(td);
  }

  let restDays = [];
  while (monthDate.getMonth() === month) {
    restDays.push(monthDate.getDate());
    monthDate.setDate(monthDate.getDate() + 1);
  }

  let weeks = [];
  let weekSize = 7;
  for (let weekNumber = 0; weekNumber < restDays.length; weekNumber += weekSize) {
    const week = restDays.slice(weekNumber, weekNumber + weekSize);
    week.length = 7;
    weeks.push(week);
  }

  for (let week = 0; week < weeks.length; week++) {
    let tr = document.createElement('tr');
    for (let dayOfWeek = 0; dayOfWeek < weeks[week].length; dayOfWeek++) {
      let td = document.createElement('td');
      td.textContent = weeks[week][dayOfWeek];
      tr.append(td);
    }
    table.append(tr);
  }

  elem.append(table);
}

createCalendar(cal, 2012, 9);
createCalendar(cal, 2022, 11);
createCalendar(cal, 2021, 2);