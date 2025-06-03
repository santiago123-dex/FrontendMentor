import "../styles/notifications.css";
import type { ReactNode } from "react";

export function Notifications({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="box-notifications">
        <div className="box-notifications-tittles">
          <h3>
            Notifications <span>3</span>
          </h3>
          <p>Mark all as read</p>
        </div>
        {children}
      </div>
    </main>
  );
}

