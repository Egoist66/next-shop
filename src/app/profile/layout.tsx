import { ReactNode } from "react";

export default function ProfileLayout({children}: Readonly<{children: ReactNode}>) {
    return (
        <div>
            Profile Layout

            {children}
        </div>
    )
}