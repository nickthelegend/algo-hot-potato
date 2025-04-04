"use client"

import { useState } from "react"
import { Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWallet } from "@txnlab/use-wallet-react"
import ConnectWalletModal from "./connect-wallet-modal"
import { cn } from "@/lib/utils"

interface ConnectWalletProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  onConnect?: (address: string) => void
}

export function ConnectWallet({ className, variant = "default", size = "default", onConnect }: ConnectWalletProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { activeAccount, wallets } = useWallet()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // When a wallet connects, call the onConnect callback if provided
  if (activeAccount && onConnect) {
    onConnect(activeAccount.address)
  }

  return (
    <>
      {activeAccount ? (
        <Button variant="outline" className={cn("font-mono", className)} size={size} onClick={openModal}>
          <Wallet className="mr-2 h-4 w-4" />
          {activeAccount.address.substring(0, 4)}...{activeAccount.address.substring(activeAccount.address.length - 4)}
        </Button>
      ) : (
        <Button variant={variant} className={className} size={size} onClick={openModal}>
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      )}

      <ConnectWalletModal wallets={wallets} isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

