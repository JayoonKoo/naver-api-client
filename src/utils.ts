export const getProductTitle = (title: string): string => {
  return title.split("<b>").join(" ").split("</b>").join(" ");
};

export const debounce = (fn: (...arg: any[]) => void, delay: number) => {
  let timerId: NodeJS.Timeout | null = null;
  return (...arg: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(fn.bind(null, ...arg), delay);
  };
};
