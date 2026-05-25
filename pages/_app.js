import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { ForumPostsProvider } from "../context/ForumPostsContext";
import { SidebarLatestNewsProvider } from "../context/SidebarLatestNewsContext";
import { CommunityPostUtilsProvider } from "../context/CommunityPostUtilsContext";

export default function App({ Component, pageProps }) {
  return (
    <SidebarLatestNewsProvider>
      <CommunityPostUtilsProvider>
        <ForumPostsProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <Component {...pageProps} />
        </ForumPostsProvider>
      </CommunityPostUtilsProvider>
    </SidebarLatestNewsProvider>
  );
}
