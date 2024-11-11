import React from "react";
import "./LikesPage.css";

const notifications = [
  {
    type: "like",
    username: "lokke_lund",
    message: "and 98 others liked your post.",
    time: "29 minutes ago",
    image: "/images/image1.png",
  },
  {
    type: "comment",
    username: "pupsik02",
    message: 'left a comment on your post: "queen atee 😍"',
    time: "2 hours ago",
    image: "/images/image2.png",
  },
  {
    type: "like",
    username: "pupsik02",
    message: "and 467 others liked your post.",
    time: "4 hours ago",
    image: "/images/image3.png",
  },
  {
    type: "follow",
    username: "sorenkarl",
    message: "is now following you.",
    time: "6 hours ago",
    image: "/images/image4.png",
  },
  {
    type: "follow",
    username: "mikkelva",
    message: "is now following you.",
    time: "8 hours ago",
    image: "/images/image5.png",
  },
  {
    type: "message",
    username: "mimoda",
    message:
      "Dear @alma_sand, congratulations on earning a spot in this week's featured users page! 🎉 – mimoda team",
    time: "",
    image: "/images/image6.png",
  },
];

export default function LikesPage() {
  return (
    <section className="likes-page">
      {/* Top bar */}
      <header className="likes-header">
        <h1 className="app-name">mimoda</h1>
        <span className="settings-icon">⚙️</span>
      </header>

      {/* Notifications List */}
      <div className="notifications-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            <div className="notification-content">
              <span className="notification-username">
                @{notification.username}
              </span>{" "}
              {notification.message}
              {notification.time && (
                <span className="notification-time">{notification.time}</span>
              )}
            </div>
            <img
              src={notification.image}
              alt={`${notification.username}'s post`}
              className="notification-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
