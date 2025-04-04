"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ConnectWallet } from "@/components/connect-wallet"
import { useWallet } from "@txnlab/use-wallet-react"
import { toast } from "react-toastify"

interface JoinGamePageProps {
  params: {
    id: string
  }
}

export default function JoinGamePage({ params }: JoinGamePageProps) {
  const { activeAccount } = useWallet()
  const [isLoading, setIsLoading] = useState(true)
  const [gameData, setGameData] = useState<any>(null)
  const [hasJoined, setHasJoined] = useState(false)

  useEffect(() => {
    // Mock loading game data - in a real app, this would fetch from the blockchain
    const loadGameData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network delay

      // Mock game data
      setGameData({
        id: params.id,
        creator: "ABCDEF123456",
        assetType: "algo",
        amount: 5,
        status: "waiting",
      })

      setIsLoading(false)
    }

    if (activeAccount) {
      loadGameData()
    }
  }, [params.id, activeAccount])

  const handleJoinGame = () => {
    // Mock joining game - in a real app, this would interact with the blockchain
    setIsLoading(true)
    setTimeout(() => {
      setHasJoined(true)
      setIsLoading(false)
      toast.success("Successfully joined the game!")
    }, 2000)
  }

  if (!activeAccount) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12">
        <Card className="w-full max-w-md border-zinc-800 bg-zinc-950">
          <CardHeader>
            <CardTitle>Connect Your Wallet</CardTitle>
            <CardDescription>You need to connect your wallet to join this game.</CardDescription>
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

  if (isLoading) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12">
        <Card className="w-full max-w-md border-zinc-800 bg-zinc-950">
          <CardHeader>
            <CardTitle>Loading Game</CardTitle>
            <CardDescription>Please wait while we fetch the game details...</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (hasJoined) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12">
        <Card className="w-full max-w-md border-zinc-800 bg-zinc-950">
          <CardHeader>
            <CardTitle>Game Joined!</CardTitle>
            <CardDescription>
              You have successfully joined the game. The Hot Potato game will start soon!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Game ID:</span>
                  <span className="font-mono">{params.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Asset Type:</span>
                  <span>{gameData.assetType.toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Amount:</span>
                  <span>
                    {gameData.amount} {gameData.assetType.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Status:</span>
                  <span className="text-green-500">Starting Soon</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-8 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"
                  style={{ width: "100%" }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                  Waiting for game to start...
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
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

  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12">
      <Card className="w-full max-w-md border-zinc-800 bg-zinc-950">
        <CardHeader>
          <CardTitle>Join Game</CardTitle>
          <CardDescription>
            You're about to join a Hot Potato game. You'll need to deposit the same amount as the creator.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-zinc-400">Game ID:</span>
                <span className="font-mono">{params.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Created by:</span>
                <span className="font-mono text-sm">
                  {gameData.creator.substring(0, 4)}...{gameData.creator.substring(gameData.creator.length - 4)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Asset Type:</span>
                <span>{gameData.assetType.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Required Amount:</span>
                <span>
                  {gameData.amount} {gameData.assetType.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Status:</span>
                <span className="text-yellow-500">Waiting for Player 2</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <p className="text-sm text-zinc-400 mb-4">
              By joining this game, you agree to deposit {gameData.amount} {gameData.assetType.toUpperCase()} which will
              be locked in the smart contract until the game completes.
            </p>
            <p className="text-sm text-zinc-400">
              The winner will receive the full amount of {gameData.amount * 2} {gameData.assetType.toUpperCase()}.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Cancel
            </Link>
          </Button>
          <Button
            onClick={handleJoinGame}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Join Game
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

