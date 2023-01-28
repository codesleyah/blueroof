import { Inter } from "@next/font/google";
import QouteCard from "../components/posts/quoteCards/QouteCard";
import AppLayout from "../components/layouts/AppLayout";

const inter = Inter({ subsets: ["latin"] });

const qoutes = [1,2,3,4,5]
export default function Home() {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 divide-y">
         {qoutes.map((qoute, i)=>(
        <QouteCard key={i}/>
      ))}
      </div>
    </AppLayout>
  );
}
