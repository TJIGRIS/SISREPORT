import { create } from 'zustand'

export const useStoreSisReports = create((set) => ({
  reports: [],
  setReports: (reports) => set(({ reports })),
}))