import NavPage from "./navigation";

export default function NavLayout({ children

}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <NavPage />
            {children}
        </div>
    )
}