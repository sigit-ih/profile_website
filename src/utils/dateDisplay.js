export default function DateDisplay({userLang = "id-ID"}) {
  const currentDate = new Date();
  // const userLang = navigator.language || 'en-US';
  const formattedDate = currentDate.toLocaleDateString(userLang, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return {formattedDate};
}