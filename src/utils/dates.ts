export const weekDaysStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dateToWeekDay = (dateStr: string) => {
  const date = new Date(dateStr);
  const weekDay = weekDaysStr[date.getDay()];
  return weekDay;
};

export const isToday = (someDateStr: string) => {
  const someDate = new Date(someDateStr);
  const today = new Date();
  return someDate.getDate() == today.getDate() && someDate.getMonth() == today.getMonth() && someDate.getFullYear() == today.getFullYear();
};
