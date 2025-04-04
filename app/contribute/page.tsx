import Link from "next/link"
import { ArrowLeft, Github, Twitter, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContributePage() {
  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <Button variant="outline" asChild className="mr-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Contribute</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-zinc-800 bg-zinc-950">
          <CardHeader>
            <CardTitle>About the Developer</CardTitle>
            <CardDescription>Meet the developer behind Algo Hot Potato</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                N
              </div>
              <div>
                <h3 className="text-xl font-bold">nickthelegend</h3>
                <p className="text-zinc-400">Blockchain Developer</p>
              </div>
            </div>
            <p className="text-zinc-400">
              nickthelegend is a passionate blockchain developer who created the Algo Hot Potato smart contract. This
              project demonstrates the power of Algorand's smart contracts and verifiable random functions (VRF) in
              creating fair and transparent games.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/nickthelegend" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/nickthelegend" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://nickthelegend.dev" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Website</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-950">
          <CardHeader>
            <CardTitle>Contribute to the Project</CardTitle>
            <CardDescription>Help improve Algo Hot Potato</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zinc-400">
              Algo Hot Potato is an open-source project. You can contribute by improving the smart contract, enhancing
              the UI, or adding new features.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Ways to Contribute:</h4>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
                <li>Report bugs and issues</li>
                <li>Suggest new features</li>
                <li>Improve documentation</li>
                <li>Submit pull requests</li>
                <li>Share the project</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-sm text-zinc-400">
                The smart contract is implemented in PyTeal, a Python library for generating TEAL programs that run on
                the Algorand Virtual Machine.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <a href="https://github.com/nickthelegend/algo-hot-potato" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12">
        <Card className="border-zinc-800 bg-zinc-950">
          <CardHeader>
            <CardTitle>Technical Details</CardTitle>
            <CardDescription>Learn about the technology behind Algo Hot Potato</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Smart Contract</h3>
              <p className="text-zinc-400">
                The Algo Hot Potato smart contract uses Algorand's box storage for game state and verifiable random
                functions (VRF) for fair randomness. The contract manages game creation, player deposits, and reward
                distribution.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Randomness & VRF</h3>
              <p className="text-zinc-400">
                The Randomness Beacon (VRF) determines the number of "passes" in the game. The output is converted into
                a uint256, and then to a uint64 after the modulo is taken with the integer 240. This ensures fair and
                verifiable outcomes that cannot be manipulated.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Game Mechanics</h3>
              <p className="text-zinc-400">
                Players deposit an asset (Algo or ASA) to start a game. A box is created with player details and asset
                info. The second player joins by depositing the same asset amount. A VRF Round is selected 9 rounds into
                the future. The randomness determines who wins the combined pot.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-sm text-zinc-400">
                The number 240 was selected as the max amount of inner transactions is 256, and we require at least 14
                opup budget calls, 1 VRF call, and a payment/axfer for dispensing the reward to the winner.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

