$(document).ready(function () {
    // Ukryj loader po 1,5 sekundy lub po załadowaniu DOM
    setTimeout(function () {
        $(".loader-wrapper").fadeOut(800);
    }, 1500); // Możesz dostosować czas

    $(".addBtn").click(function () {
        let taskText = $("#taskText").val().trim();
        if (taskText === "") {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Pole nie może być puste!',
            });
            return;
        }

        let newTask = `
            <div class="task">
                <p class="task-text">${taskText}</p>
                <div class="buttons">
                    <button class="removeBtn"><i class="fas fa-times"></i></button>
                    <button class="completeBtn"><i class="fas fa-check"></i></button>
                </div>
            </div>
        `;

        $(".tasks-list").append(newTask);
        $("#taskText").val("");

        // Usuwanie zadania
        $(".tasks-list").on("click", ".removeBtn", function () {
            $(this).closest(".task").fadeOut(300, function () {
                $(this).remove();
            });
        });

        // Oznaczanie zadania jako ukończone
        $(".tasks-list").on("click", ".completeBtn", function () {
            $(this).closest(".task").css({
                "text-decoration": "line-through",
                "opacity": "0.6"
            });
        });
    });
});
