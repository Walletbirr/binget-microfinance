import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    image: "/logo.png",
    title: "የቢንጌት አነስተኛ የፋይናንስ ተቋም አ.ማ የባለአክሲዮኖች 4ተኛ መደበኛ እና 5ተኛ አስቸኳይ ጠቅላላ ጉባኤ የጉባኤ ጥሪ ማስታወቂያ",
    description: "የቢንጌት አነስተኛ የፋይናንስ ተቋማ አ.ማ የባለአክሲዮኖች 4ተኛ መደበኛ እና 5ተኛ አስቸኳይ ጠቅላላ ጉባኤ በኢትዮጵያ ንግድ ሕግ ቁጥር 1243/2013 አንቀጽ 366(1)፣ 367 (1 እና 2)፣ 370፣ 371፣ 372 እና 393 እንዲሁም በአክሲዮን ማህበሩ የመመስረቻ ጽሁፍ አንቀጽ 13(1 እና 3)፣ 18(3)፣ 20(1) እና 21(1) ድንጋጌዎች መሰረት ግንቦት 14 ቀን 2017 ዓ.ም ከጠዋቱ 2:00 ሰዓት ጀምሮ አድራሻው ከዚህ በታች በተዘረዘረው የማህበሩ ዋና መስሪያ ቤት የመሰብሰቢያ አዳራሽ ይካሄዳል። ስለሆነም የተከበራችሁ የአክሲዮን ማህበሩ ባለአክሲዮኖች በአካል ወይም በህጋዊ ወኪሎቻችሁ አማካኝነት በተጠቀሰው ቀን ሰዓት እና ቦታ ተገኝታችሁ በጉባኤው ላይ እንድትሳተፉ የአክሲዮን ማህበሩ የዳይሬክተሮች ቦርድ ጥሪውን በአክብሮት ያቀርባል። ባለአክሲዮኖች በጉባኤው ለመገኘት ኢትዮጵያዊነታችሁን የሚያረጋግጥ የታደሰ መታወቂያ፤ መንጃ ፈቃድ፣ ፓስፖርት ወይም ትውልደ ኢትዮጵያዊነታችውን የሚያረጋግጥ መታወቂያ ዋናውን ከፎቶ ኮፒ ጋር ይዘው መገኘት ይኖርባቸዋል፣ በውክልና የሚገኙ ከሆነ የወካዩን ባለአክሲዮን ኢትዮጵያዊ ወይም ትውልደ ኢትዮጵያዊ መሆኑን የሚያረጋግጥ የታደስ መታወቂያ ወይም ፓስፖርት ዋናውን ከኮፒ ጋር ይዘው መገኘት ይኖርባቸዋል። በጉባኤዉ ላይ በአካል መገኘት የማይችሉ ባለአክሲዮኖች በኢትዮጵያ የንግድ ሕግ አዋጅ ቁጥር 1243/2013 አንቀጽ 377(1) ይህ ማስታወቂያ ከወጣበት ቀን ጀምሮ ስብሰባዉ እስከሚካሄድበት ከላይ በተጠቀሰው የማህበሩ ዋና መ/ቤት ቀርበዉ ለዚሁ ዓላማ የተዘጋጀዉን የውክልና መስጫ ቅጽ በመሙላት ተወካያቸው ተገኝተው ድምጽ እንዲሰጡ ማድረግ ይችላሉ፡፡ በሰነዶች ማርጋገጫና ምዝገባ ኤጅንሲ ወይም አግባብ ባለው አካል በተሰጠ ውክልና በስብሰባ ላይ የሚገኙ ተወካይ የወካዩን ባለአክሲዮን ኢትዮጵያዊነት ወይም ትውልደ ኢትዮጵያዊነት የሚያረጋግጥ የታደሰ መታወቂያ ወይም ፓስፖርት ዋናውን ከኮፒ ጋር ይዞው መገኘት ይኖርባቸዋል፡",
    date: "2017 EC"
  },
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
        <DialogContent style={{maxWidth:'70vw', maxHeight:'90vh', overflowY:'auto'}} className="max-w-2xl bg-white text-black">
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
