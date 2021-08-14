import { nanoid } from 'nanoid'
import create from 'zustand'

export type Notification = {
  id: string
  type: 'info' | 'warning' | 'success' | 'error'
  title: string
  message?: string
}

type NotificationsState = {
  notification: Notification
  addNotification: (notification: Omit<Notification, 'id'>) => void
  dismissNotification: (id: string) => void
}

export const useNotificationStore = create<NotificationsState>((set) => ({
  notification: {} as Notification,
  addNotification: (notification) =>
    set((state) => ({
      notification: { id: nanoid(), ...notification }
    })),
  dismissNotification: (id) =>
    set((state) => ({
      notification: {} as Notification
    }))
}))
