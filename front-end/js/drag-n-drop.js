/**
 * Created by Влад on 27.10.2016.
 */
function sortable(rootEl, onUpdate){
    var dragEl;

    // Делаем всех детей перетаскиваемыми
    [].slice.call(rootEl.children).forEach(function (itemEl){
        itemEl.draggable = true;
    });

    // Фнукция отвечающая за сортировку
    function _onDragOver(evt){
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';

        var target = evt.target;
        if( target && target !== dragEl && target.nodeName == 'LI' ){
            // Сортируем
            rootEl.insertBefore(dragEl, target.nextSibling || target);
        }
    }
    // Окончание сортировки
    function _onDragEnd(evt){
        evt.preventDefault();

        dragEl.classList.remove('ghost');
        rootEl.removeEventListener('dragover', _onDragOver, false);
        rootEl.removeEventListener('dragend', _onDragEnd, false);
        alert("Отправляем серверу запрос на изменение порядка контента");
        // Сообщаем об окончании сортировки
        onUpdate(dragEl);
    }

    // Начало сортировки
    rootEl.addEventListener('dragstart', function (evt){
        dragEl = evt.target; // Запоминаем элемент который будет перемещать
        // Ограничиваем тип перетаскивания
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('Text', dragEl.textContent);
        // Пописываемся на события при dnd
        rootEl.addEventListener('dragover', _onDragOver, false);
        rootEl.addEventListener('dragend', _onDragEnd, false);
        setTimeout(function (){
            // Если выполнить данное действие без setTimeout, то
            // перетаскиваемый объект, будет иметь этот класс.
            dragEl.classList.add('ghost');
        }, 0)
    }, false);
}

// Используем
sortable( document.getElementById('list'), function (item){
    console.log(item);
});
$(function(){
    $("#type li a").click(function(){
        $("#dropdownMenu1:first-child").text($(this).text());
        $("#dropdownMenu1:first-child").val($(this).text());
    });
});
$(function(){
    $("#upload li a").click(function(){
        $("#dropdownMenu2:first-child").text($(this).text());
        $("#dropdownMenu2:first-child").val($(this).text());
    });
});
function addContent() {
    $("#list").append("<li><div class='contet-type'>Video</div>item 6</li>");
}