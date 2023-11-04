import Footer from "./components/presets/Footer/Footer";
import "./globalCss/globalCss.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>907-room-site</title>
            </head>
            <body>
                <Footer isAuhtWindows={true} />
                {children}
            </body>
        </html>
      )
}
