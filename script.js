// Проверяем, загружен ли SDK
if (Telegram.WebApp.initDataUnsafe) {
    const user = Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        console.log("Данные пользователя:", user);
        // Пример вывода данных пользователя
        alert(`Привет, ${user.first_name}!`);
    }
});
// Обработчик для кнопки "Определить рулевую рейку по VIN"
document.getElementById('checkVin').addEventListener('click', function () {
    const vin = prompt("Введите VIN-код автомобиля:");
    if (vin) {
        alert(`Ваш VIN: ${vin}. Поиск информации...`);
        // Здесь можно отправить запрос на сервер для получения данных
    }
});

// Обработчик для кнопки "Оценить стоимость"
document.getElementById('showPrice').addEventListener('click', function () {
    alert("Оценка стоимости ремонта.");
});

// Обработчик для кнопки "Связаться с консультантом"
document.getElementById('contactConsultant').addEventListener('click', function () {
    Telegram.WebApp.openTelegramLink('https://t.me/your_consultant_username');
});

// Обработчик для кнопки "Записаться на услуги"
document.getElementById('bookService').addEventListener('click', function () {
    alert("Запись на услуги.");
});
