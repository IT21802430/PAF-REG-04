import { ThemeProvider } from "next-themes";
import { ReactNode } from "react"; 
import ErrorBoundary from "./ErrorBoundry";
import Layout from "../Layout";

const Xproviders = ({ children }: { children: ReactNode }) => {
    return (
        <ErrorBoundary>
            <ThemeProvider attribute="class" defaultTheme="light">
                <Layout>{children}</Layout>
            </ThemeProvider>
        </ErrorBoundary>
    );
};