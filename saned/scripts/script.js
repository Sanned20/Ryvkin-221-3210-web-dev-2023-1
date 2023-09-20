// НЕ ЗАБУДЬ УДАЛИТЬ ВСЕ КОММЕНТЫ

// Берём элемент с классом .my-contacts__phone, берём его текстовый контент
const phone = document.querySelector(".my-contacts__phone").textContent

function copyPhoneNumber(){
    // В буфер записываем нашу переменную phone
    navigator.clipboard.writeText(`${phone}`)
    // Опционально. Выводит сообщение на странице
    alert("Номер телефона скопирован!")
}