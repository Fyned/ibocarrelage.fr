import { createContext, useContext, useState, type ReactNode } from 'react'

interface DevisCtx {
  open: boolean
  openDevis: () => void
  closeDevis: () => void
}

const Ctx = createContext<DevisCtx>({ open: false, openDevis: () => {}, closeDevis: () => {} })

export function DevisProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <Ctx.Provider value={{ open, openDevis: () => setOpen(true), closeDevis: () => setOpen(false) }}>
      {children}
    </Ctx.Provider>
  )
}

export function useDevis() {
  return useContext(Ctx)
}
