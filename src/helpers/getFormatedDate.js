export const getFormatedDate = () => {
  let todayDate = new Date();
  const month = (todayDate.getMonth()+1).toString();
  return `${todayDate.getDate()}-${month.length === 1 ? '0' + month : month}-${todayDate.getFullYear()}`
}