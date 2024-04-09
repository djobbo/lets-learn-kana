import Link from "next/link"

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen flex-col bg-gradient-to-r from-primary to-primaryLight">
            <h1 className="text-4xl text-bg font-bold">zenji.app</h1>
            <p className="text-bg">Under construction...</p>
            <Link
                href="/level/1/round/1"
                className="bg-bg font-bold py-2 px-4 rounded-lg mt-6"
            >
                Start
            </Link>
        </div>
    )
}
