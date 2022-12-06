// Object.defineProperty(global, "localStorage", {
//   value: {
//     store: {} as Record<string, string>,
//     setItem(key: string, value: string) {
//       this.store[key] = value
//     },
//     getItem(key: string) {
//       return this.store[key]
//     },
//     removeItem(key: string) {
//       delete this.store[key]
//     },
//     clear() {
//       this.store = {}
//     },
//   },
//   configurable: true,
// })

import "jest-location-mock"

// tests/jest-setup.ts
// jest.spyOn(console, "log").mockReturnValue()
// jest.spyOn(console, "info").mockReturnValue()
// jest.spyOn(console, "warn").mockReturnValue()
// jest.spyOn(console, "error").mockReturnValue()
