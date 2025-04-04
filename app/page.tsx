import Link from "next/link"
import { ArrowRight, Zap, Shield, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConnectWallet } from "@/components/connect-wallet"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Navigation */}
      <header className="container z-40 bg-black">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-purple-500" />
              <span className="font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Algo Hot Potato
              </span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="/" className="text-sm font-medium text-white transition-colors hover:text-purple-500">
                Home
              </Link>
              <Link href="/game" className="text-sm font-medium text-white transition-colors hover:text-purple-500">
                Play
              </Link>
              <Link
                href="/contribute"
                className="text-sm font-medium text-white transition-colors hover:text-purple-500"
              >
                Contribute
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-4 py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Algo Hot Potato
            </span>
          </h1>
          <span className="absolute -z-10 h-[310px] w-[310px] rounded-full bg-purple-500/20 blur-[100px]" />
          <p className="max-w-[750px] text-lg text-zinc-400 sm:text-xl">
            A decentralized game of chance on the Algorand blockchain where two players pass a "hot potato" back and
            forth until a winner is randomly determined.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Link href="/game">
                Play Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contribute">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Game Rules */}
      <section className="container py-12 md:py-24 lg:py-32 border-t border-zinc-800">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
              <Coins className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Deposit Assets</h3>
            <p className="text-zinc-400">
              Players deposit an equal amount of Algo or an Algorand Standard Asset to start a game. The winner takes
              all!
            </p>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10">
              <Zap className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Random Passes</h3>
            <p className="text-zinc-400">
              The Randomness Beacon (VRF) determines the number of "passes" in the game, creating a fair and verifiable
              outcome.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
              <Shield className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Secure Rewards</h3>
            <p className="text-zinc-400">
              Smart contracts ensure that the game rules are followed and rewards are automatically distributed to the
              winner.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-12 md:py-24 lg:py-32 border-t border-zinc-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold tracking-tighter md:text-4xl text-center">How It Works</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
            <div className="space-y-12">
              <div className="relative pl-20">
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950">
                  <span className="text-xl font-bold text-purple-500">1</span>
                </div>
                <h3 className="text-xl font-bold">Create a Game</h3>
                <p className="mt-2 text-zinc-400">
                  Connect your wallet and create a new game by depositing Algo or an ASA. Share the game link with a
                  friend.
                </p>
              </div>
              <div className="relative pl-20">
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950">
                  <span className="text-xl font-bold text-purple-500">2</span>
                </div>
                <h3 className="text-xl font-bold">Second Player Joins</h3>
                <p className="mt-2 text-zinc-400">
                  The second player joins by depositing the same asset amount. A VRF round is selected 9 rounds into the
                  future.
                </p>
              </div>
              <div className="relative pl-20">
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950">
                  <span className="text-xl font-bold text-purple-500">3</span>
                </div>
                <h3 className="text-xl font-bold">Hot Potato Passes</h3>
                <p className="mt-2 text-zinc-400">
                  The VRF determines the number of passes (up to 240). The game simulates passing the "hot potato" back
                  and forth.
                </p>
              </div>
              <div className="relative pl-20">
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950">
                  <span className="text-xl font-bold text-purple-500">4</span>
                </div>
                <h3 className="text-xl font-bold">Winner Takes All</h3>
                <p className="mt-2 text-zinc-400">
                  The player holding the potato at the end loses. The winner receives the full amount of the deposited
                  assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 md:py-24 lg:py-32 border-t border-zinc-800">
        <div className="mx-auto max-w-5xl rounded-lg border border-zinc-800 bg-zinc-950 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[100px]" />
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">Ready to Play?</h2>
            <p className="mb-6 max-w-[600px] text-zinc-400">
              Connect your wallet and start a game of Algo Hot Potato. Invite a friend and see who gets lucky!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Link href="/game">
                  Start a Game
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <ConnectWallet size="lg" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-6 md:py-8 border-t border-zinc-800">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-500" />
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Algo Hot Potato
            </span>
          </div>
          <p className="text-sm text-zinc-500">
            Built by{" "}
            <a href="https://github.com/nickthelegend" className="underline underline-offset-4 hover:text-purple-500">
              nickthelegend
            </a>
            . Smart contract implementation.
          </p>
        </div>
      </footer>
    </div>
  )
}

