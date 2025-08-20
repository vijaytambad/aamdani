document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const res = await fetch("api/user/login", {
                method: "POST",
                body: new URLSearchParams(formData)
            });
            const data = await res.json();
            if (data.success) {
                alert(data);
                window.location.reload(true);
            } else {
                alert(data.message);
            }
        });
    }

    document.getElementById("sidebarToggle").addEventListener("click", () => {
        document.getElementById("sidebar").classList.toggle("collapsed");
    });
});
