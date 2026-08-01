export default function Footer() {
    return (
        <footer className="mt-auto border-t border-slate-800 bg-slate-900 text-slate-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <p className="text-sm">
                    © {new Date().getFullYear()} My App
                </p>
                <p className="text-sm">
                    Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    )
}