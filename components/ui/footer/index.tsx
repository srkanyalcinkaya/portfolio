export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="flex justify-between items-center mt-16">
            <div>
                <p className="text-xs font-semibold">© {year} - Serkan Yalçınkaya</p>
            </div>
        </footer>
    );
}