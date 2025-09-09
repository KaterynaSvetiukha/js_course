const postData = async (url, data) => {
  // async предупреждает что используется асинхронный код
  const res = await fetch(url, {
    // await ждет выполнения промиса
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });

  return await res.json(); // возвращаем промис
};

const getResourse = async (url) => {
  // async предупреждает что используется асинхронный код
  const res = await fetch(url); // await ждет выполнения промиса

  if (!res.ok) {
    throw new Error(`Couldn't fetch ${url}, status: ${res.status}`); // если статус не 200 выкидываем ошибку
  }

  return await res.json(); // возвращаем промис
};

export { postData, getResourse };