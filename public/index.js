const clearAllButton = document.getElementById("mark-all-btn");
const notifications = document.querySelectorAll(".notification");
const dots = document.querySelectorAll(".dot-icon");
let notificationsCounterValue = document.getElementById(
  "title-notification-number"
);

// set the default value for the notifications counter
function setNotificationsQuantity() {
  let unreadCount = 0;
  notifications.forEach((notification) => {
    if (notification.classList.contains("unread")) {
      unreadCount++;
    }
  });
  notificationsCounterValue.textContent = unreadCount.toString();
}

setNotificationsQuantity();

// mark all notificaitons as read
clearAllButton.addEventListener("click", function () {
  notifications.forEach((notification) => {
    let isUnread = notification.classList.contains("unread");

    if (isUnread) {
      notification.classList.remove("unread");
      dots.forEach((dot) => {
        dot.classList.add("hidden");
      });
    }
  });

  setNotificationsQuantity(); // Update counter after clearing all notifications
});
