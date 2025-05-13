document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.link');
    const sections = document.querySelectorAll('.section');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Сначала убираем класс 'active' со всех разделов
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Получаем целевой раздел и добавляем ему класс 'active'
            const targetId = item.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');
        });
    });
});

let highlightedColumn = -1;
function toggleHighlight(columnIndex) {
    const tableRows = document.querySelectorAll('table tbody tr');
    if (highlightedColumn === columnIndex) {
        // Если столбец уже выделен, убираем выделение
        tableRows.forEach(row => {
            row.children[columnIndex].classList.remove('highlight');
        });
        highlightedColumn = -1; // Сброс выделенного столбца
    } else {
        // Убрать выделение из предыдущего столбца
        if (highlightedColumn !== -1) {
            tableRows.forEach(row => {
                row.children[highlightedColumn].classList.remove('highlight');
            });
        }
        // Выделяем новый столбец
        tableRows.forEach(row => {
            row.children[columnIndex].classList.add('highlight');
        });
        highlightedColumn = columnIndex; // Обновляем выделенный столбец
    }
}

function showPopup(content) {
    alert(content); // Показ всплывающего окна с содержимым
}

function confirmReset() {
    const form = document.getElementById('myForm');
    const fields = form.querySelectorAll('input, textarea');

    // Запрос на подтверждение
    const confirmAction = confirm("Вы уверены, что хотите сбросить данные?");

    if (confirmAction) {
        // Сбрасываем форму
        fields.forEach(field => {
            field.style.backgroundColor = "red"; // Изменяем фон на красный
            setTimeout(() => {
                field.style.backgroundColor = ""; // Возвращаем фон назад
            }, 1000); // Задержка в 1 секунду
        });
        return true; // Сброс производится
    } else {
        // Если пользователь не подтверждает, меняем фон на зеленый
        fields.forEach(field => {
            field.style.backgroundColor = "green"; // Изменяем фон на зеленый
            setTimeout(() => {
                field.style.backgroundColor = ""; // Возвращаем фон назад
            }, 1000); // Задержка в 1 секунду
        });
        return false; // Сброс не производится
    }
}

function submitForm(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const form = document.getElementById('myForm');
    const fields = form.querySelectorAll('input, textarea');

    // Меняем фон на синий
    fields.forEach(field => {
        field.style.backgroundColor = "lightblue";
        setTimeout(() => {
            field.style.backgroundColor = "";
        }, 2000); // Задержка в 1 секунду
    });

    // Показываем информационное окно
    alert("Данные отправлены!");

    // Возвращаем false чтобы не отправлять форму
    return false;
}

