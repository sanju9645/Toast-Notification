let x;
let toast         = document.getElementById("toast");
let toastIcon     = document.getElementById("toast-icon");
let statusContent = document.getElementById("status-message");
let toastMessage  = document.getElementById("toast-message");
const toastDatas  = {
    'success' : 'fas fa-check-square',
    'error'   : 'fas fa-times-circle',
    'info'    : 'fas fa-info-circle',
    'warning' : 'fas fa-exclamation-circle'
};

const showToast = (status = 'success', toastBody) => {
    toast.className         = `toast ${status}`;
    toastIcon.className     = toastDatas[status];
    statusContent.innerHTML = status.charAt(0).toUpperCase() + status.slice(1);
    toastMessage.innerHTML  = toastBody;

    clearTimeout(x);
    toast.style.transform = "translateX(0)";
    x = setTimeout(()=>{
        toast.style.transform = "translateX(400px)"
    }, 2000);
}

const closeToast = () => {
    toast.style.transform = "translateX(400px)";
}
