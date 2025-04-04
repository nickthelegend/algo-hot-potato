"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Copy, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ConnectWallet } from "@/components/connect-wallet"
import { useWallet } from "@txnlab/use-wallet-react"
import { toast } from "react-toastify"

export default function GamePage() {
  const router = useRouter()
  const { activeAccount } = useWallet()
  const [gameCreated, setGameCreated] = useState(false)
  const [gameId, setGameId] = useState("")
  const [assetType, setAssetType] = useState("algo")

  const handleCreateGame = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock game creation - in a real app, this would interact with the blockchain
    const mockGameId = Math.random().toString(36).substring(2, 10)
    setGameId(mockGameId)
    setGameCreated(true)
  }

  const copyGameLink = () => {
    const link = `${window.location.origin}/game/join/${gameId}`
    navigator.clipboard.writeText(link)
    toast.success("Game link has been copied to clipboard")
  }

  if (!activeAccount) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12">
        <Card className="w-full max-w-md border-zinc-800 bg-zinc-950">
          <CardHeader>
            <CardTitle>Connect Your Wallet</CardTitle>
            <CardDescription>You need to connect your wallet to create or join a game.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-6">
            <ConnectWallet size="lg" />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (gameCreated) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12">
        <Card className="w-full max-w-md border-zinc-800 bg-zinc-950">
          <CardHeader>
            <CardTitle>Game Created!</CardTitle>
            <CardDescription>Share this link with a friend to start playing.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Input
                value={`${window.location.origin}/game/join/${gameId}`}
                readOnly
                className="pr-10 bg-zinc-900 border-zinc-800"
              />
              <Button size="icon" variant="ghost" className="absolute right-0 top-0" onClick={copyGameLink}>
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={copyGameLink}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Game Link
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => setGameCreated(false)}>
              Create Another Game
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12">
      <Card className="w-full max-w-md border-zinc-800 bg-zinc-950">
        <CardHeader>
          <CardTitle>Create a New Game</CardTitle>
          <CardDescription>Set up a new Hot Potato game and invite a friend to play.</CardDescription>
        </CardHeader>
        <form onSubmit={handleCreateGame}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Asset Type</Label>
              <RadioGroup defaultValue="algo" className="grid grid-cols-2 gap-4" onValueChange={setAssetType}>
                <div>
                  <RadioGroupItem value="algo" id="algo" className="peer sr-only" />
                  <Label
                    htmlFor="algo"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-zinc-800 bg-zinc-900 p-4 hover:bg-zinc-800 peer-data-[state=checked]:border-purple-500 [&:has([data-state=checked])]:border-purple-500"
                  >
                    <div className="mb-3 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                    Algo
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="asa" id="asa" className="peer sr-only" />
                  <Label
                    htmlFor="asa"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-zinc-800 bg-zinc-900 p-4 hover:bg-zinc-800 peer-data-[state=checked]:border-purple-500 [&:has([data-state=checked])]:border-purple-500"
                  >
                    <div className="mb-3 h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                    ASA
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {assetType === "asa" && (
              <div className="space-y-2">
                <Label htmlFor="asaId">ASA ID</Label>
                <Input id="asaId" placeholder="Enter ASA ID" className="bg-zinc-900 border-zinc-800" />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="amount"
                  type="number"
                  placeholder={assetType === "algo" ? "Min 1 Algo" : "Amount of ASA"}
                  className="bg-zinc-900 border-zinc-800"
                />
                <Select defaultValue="1">
                  <SelectTrigger className="w-24 bg-zinc-900 border-zinc-800">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800">
                    <SelectItem value="1">Whole</SelectItem>
                    <SelectItem value="0.1">Decimal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Create Game
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

