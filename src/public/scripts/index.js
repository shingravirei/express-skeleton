document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(del => {
        const not = del.parentNode;

        del.addEventListener('click', () => {
            not.parentNode.removeChild(not);
        });
    });
});
