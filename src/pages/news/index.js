import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/400x200?tech",
    title: "New Product Launch",
    description: "We are thrilled to announce our latest product that revolutionizes the market.",
    date: "May 20, 2025"
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/400x200?business",
    title: "Company Achieves Milestone",
    description: "Our company just crossed 1 million users worldwide!",
    date: "May 10, 2025"
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random/400x200?innovation",
    title: "Award for Innovation",
    description: "We received a prestigious award for our contributions to tech innovation. We received a prestigious award for our contributions to tech innovation. We received a prestigious award for our contributions to tech innovation. We received a prestigious award for our contributions to tech innovation.",
    date: "April 30, 2025"
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random/400x200?innovation",
    title: "Award for Innovation",
    description: "We received a prestigious award for our contributions to tech innovation.",
    date: "April 30, 2025"
  }
];

export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
        <div className="py-16 px-4 md:px-20 bg-white pt-30">

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <motion.div
            key={news.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedNews(news)}
            className="cursor-pointer"
          >
            <Card className="rounded-2xl shadow-md overflow-hidden">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{news.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{news.date}</p>
                <p className="text-gray-700 line-clamp-2">{news.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-2xl bg-white text-black">
          {selectedNews && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-2 text-gray-800">{selectedNews.title}</DialogTitle>
              </DialogHeader>
              <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-500 text-sm mb-2">{selectedNews.date}</p>
              <p className="text-gray-700 text-lg">{selectedNews.description}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
