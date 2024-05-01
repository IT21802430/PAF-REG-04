import React, { FC, ReactNode, useEffect, useState } from "react";
import Loading from "../shared/Loading";
import PageMetatags from "../shared/PageMetatags";
import Navbar from "../shared/Navbar";
import BottomNavigation from "../shared/Navbar/BottomNavigation";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 3200);
    });

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <PageMetatags />
            <Navbar />
            <main className="flex min-h-screen flex-col pb-14 md:pb-0">
                <BottomNavigation />
                <div>{children}</div>
            </main>
        </>
    );
};

export default Layout;