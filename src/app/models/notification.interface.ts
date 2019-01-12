import { NotificationType } from "./notificationType.enum";

export class Notification {
    user_notification_id?: number;
    user_id?: number;
    notification_type_id?: NotificationType;
    isSeen?: boolean;
    from_user_id?: number;
    isConfirm?: boolean;
    message?: string;
    date_created?: Date;
}