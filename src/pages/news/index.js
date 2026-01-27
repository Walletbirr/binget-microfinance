import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const newsData = [

  {
    id: 5,
    image: "/logo.png",
    title: "BINGET MICROFINANCE INSTITUTION S.C. AUDITORS' REPORT AND ACCOUNTS JUNE 30, 2025",
    description: "The directors submit their report together with the financial statements for the period ended 30 June 2024, to the members of Binget Micro Financing Institution S.C. This report discloses the financial performance and state of affairs of the Binget Micro Financing Institution S.C.",
    date: "2018 EC",
    isImage: false,
    pdfIncluded: true,
    pdf: '/pdf222.pdf'
  },
  {
    id: 4,
    image: "/logo.png",
    title: "የተሻሻለ መመሥረቻ ጽሑፍ",
    description: "ቢንጌት አነስተኛ የፋይናንስ ተቋም አ.ማ (ከዚህ በኋላ \"ማህበሩ\" ተብሎ የሚጠራው) በአስራ ሁለት (12) ባለ ራዕይ መሥራች ባለአክሲዮኖች በኢትዮጵያ ንግድ ህግ አዋጅ ቁጥር 1243/2013 በአነስተኛ ፋይናንስ ሥራ አዋጅ ቁጥር 626/2001 እና በአዋጅ ቁጥር 1164/2014 እንዲሁም ተገቢነት ባላው የኢትዮጵያ ብሄራዊ ባንክ መመሪያ መሰረት ግንቦት 11, 2022 እ.አ.አ በተዘጋጀ መመስረቻ ጽሑፍ ተመስርቷል፡፡ አክሲዮን ማህበሩ ከምስረታው ጊዜ ጀምሮ ላለፉት ሁለት አመት ዋሌት አነስተኛ የፋይናንስ ተቋም አማ ተብሎ ሲጠራ የቆየ ቢሆንም ስያሜው ከባንኮች እና ከፊንቴኮች ዋሌት ጋር የወል ስያሜ በመሆኑ በልዩነት ለማስተዋወቅ ተግዳሮት ሆኖበት ቆይቷል፡፡ ይህን ተግዳሮት ለመቅረፍ የማህበሩ ባለአክስዮኖች ነሐሴ 03 ቀን 2016 ዓ.ም ባደረጉት 3ኛ አስቸኳይ ጠቅላላ ጉባኤ የማህበሩን መጠሪያ ቢንጌት አነስተኛ የፋይናንስ ተቋም ኤማ ሲል የስያሜ ለውጥ አድርጓል። ከዚህም በተጨማሪ አንዳንድ ለአስራር ተግዳሮት የሆኑ ነጥቦችን ለመፍታት የንግድ ሕግ አዋጅ ቁጥር1243/2013 የአነስተኛ ፋይናንስ ሥራ አዋጅ ቁጥር 626/2001 አዋጅ ቁጥር 1164/20141 ተገቢነት ካላቸው የኢትዮጵያ ብሄራዊ ባንክ መመሪያዎች ጋር በማስማማት እና ነባራዊ ለውጦችን በመውስድ የማህበሩን መመስረቻ ጽሑፍ ማሻሻል አስፈላጊ ሆኖ ተገኝቷል፡፡ ይህ የመመስረቻ ፅሁፍ ሲሻሻልም የማህበሩ የአክሲዮን ባለድርሻ አባላት ቁጥር አስራ አንድ(11) ሆኖ ተመዝግቧል፡፡ በመሆኑም የማህበሩ የባለአክሲዮኖች 4ኛው አስቸኳይ ጠቅላላ ጉባኤ ይህን የተሻሻለ መመስረቻ ጽሁፍ አጽድቋል።",
    date: "2018 EC",
    isImage: false,
    pdfIncluded: true,
    pdf: '/pdf1.pdf'
  },
  {
    id: 3,
    image: "/logo.png",
    title: "Invitation for Bid for External Audit Service",
    description: "Invitation to Bid for External Audit Service. Bid Ref No: BMFI/Bid/01/2025. Binget Microfinance Institution S.C., a licensed Microfinance Institution operating under the supervision of the National Bank of Ethiopia, hereby invites eligible and interested competent audit firms to participate in a competitive bid for the provision of external audit services for a period of three years, commencing with the current fiscal year, through a formal bid agreement. Interested audit firms that meet the eligibility criteria set by the Office of the Federal Auditor General (OFAG) and are legally authorized to audit financial institutions are invited to collect the bid document from our Head Office starting Monday, November 12, 2025. The document will be available during working hours upon payment of a non-refundable fee of ETB 300 (Three Hundred Birr only), deposited to Binget MFI S.C. at CBE Account No. 1000495938194 in the name of the bidding organization. Working Hours for Bid Document Collection: Monday to Friday: 8:30 AM–5:00 PM; Saturday: 8:30 AM–12:00 PM. Interested bidders are required to submit their proposals under the following conditions: 1. Bidders must submit their completed technical and financial proposals with detailed descriptions in sealed envelopes clearly marked \"Original\" and labeled \"Bid Document for the Procurement of External Audit Service\" along with the name of the bidding company. 2. Submission of the bid document must be made in person to the address below no later than November 22, 2025, at 11:00 AM. 3. Late submissions will not be accepted. 4. The technical proposals will be opened on the following day, November 23, 2025, starting at 1:30 PM, at the Head Office in the presence of bidders or their representatives who choose to attend. 5. Binget MFI S.C. reserves the right to cancel the bid, in part or in full, without providing any reason or prior notification. We strongly encourage all qualified audit firms to participate. For further information, contact our Administration Department, Bole Japan, Range Building, 11th Floor, in front of Africa Insurance, Tel: +251-11-616-27-77 or 6221, Website: www.bingeimfl.com, Addis Ababa, Ethiopia. Binget Microfinance Institution S.C.",
    date: "2018 EC",
    isImage: false
  },
  {
    id: 2,
    image: "/logo.png",
    title: "የቢንጌት አነስተኛ የፋይናንስ ተቋም አ.ማ የባለአክሲዮኖች 5ተኛ መደበኛ የጉባኤ ጥሪ ማስታወቂያ",
    description: "/call.png",
    date: "2018 EC",
    isImage: true
  },
  {
    id: 1,
    image: "/logo.png",
    title: "የቢንጌት አነስተኛ የፋይናንስ ተቋም አ.ማ የባለአክሲዮኖች 4ተኛ መደበኛ እና 5ተኛ አስቸኳይ ጠቅላላ ጉባኤ የጉባኤ ጥሪ ማስታወቂያ",
    description: "የቢንጌት አነስተኛ የፋይናንስ ተቋማ አ.ማ የባለአክሲዮኖች 4ተኛ መደበኛ እና 5ተኛ አስቸኳይ ጠቅላላ ጉባኤ በኢትዮጵያ ንግድ ሕግ ቁጥር 1243/2013 አንቀጽ 366(1)፣ 367 (1 እና 2)፣ 370፣ 371፣ 372 እና 393 እንዲሁም በአክሲዮን ማህበሩ የመመስረቻ ጽሁፍ አንቀጽ 13(1 እና 3)፣ 18(3)፣ 20(1) እና 21(1) ድንጋጌዎች መሰረት ግንቦት 14 ቀን 2017 ዓ.ም ከጠዋቱ 2:00 ሰዓት ጀምሮ አድራሻው ከዚህ በታች በተዘረዘረው የማህበሩ ዋና መስሪያ ቤት የመሰብሰቢያ አዳራሽ ይካሄዳል። ስለሆነም የተከበራችሁ የአክሲዮን ማህበሩ ባለአክሲዮኖች በአካል ወይም በህጋዊ ወኪሎቻችሁ አማካኝነት በተጠቀሰው ቀን ሰዓት እና ቦታ ተገኝታችሁ በጉባኤው ላይ እንድትሳተፉ የአክሲዮን ማህበሩ የዳይሬክተሮች ቦርድ ጥሪውን በአክብሮት ያቀርባል። ባለአክሲዮኖች በጉባኤው ለመገኘት ኢትዮጵያዊነታችሁን የሚያረጋግጥ የታደሰ መታወቂያ፤ መንጃ ፈቃድ፣ ፓስፖርት ወይም ትውልደ ኢትዮጵያዊነታችውን የሚያረጋግጥ መታወቂያ ዋናውን ከፎቶ ኮፒ ጋር ይዘው መገኘት ይኖርባቸዋል፣ በውክልና የሚገኙ ከሆነ የወካዩን ባለአክሲዮን ኢትዮጵያዊ ወይም ትውልደ ኢትዮጵያዊ መሆኑን የሚያረጋግጥ የታደስ መታወቂያ ወይም ፓስፖርት ዋናውን ከኮፒ ጋር ይዘው መገኘት ይኖርባቸዋል። በጉባኤዉ ላይ በአካል መገኘት የማይችሉ ባለአክሲዮኖች በኢትዮጵያ የንግድ ሕግ አዋጅ ቁጥር 1243/2013 አንቀጽ 377(1) ይህ ማስታወቂያ ከወጣበት ቀን ጀምሮ ስብሰባዉ እስከሚካሄድበት ከላይ በተጠቀሰው የማህበሩ ዋና መ/ቤት ቀርበዉ ለዚሁ ዓላማ የተዘጋጀዉን የውክልና መስጫ ቅጽ በመሙላት ተወካያቸው ተገኝተው ድምጽ እንዲሰጡ ማድረግ ይችላሉ፡፡ በሰነዶች ማርጋገጫና ምዝገባ ኤጅንሲ ወይም አግባብ ባለው አካል በተሰጠ ውክልና በስብሰባ ላይ የሚገኙ ተወካይ የወካዩን ባለአክሲዮን ኢትዮጵያዊነት ወይም ትውልደ ኢትዮጵያዊነት የሚያረጋግጥ የታደሰ መታወቂያ ወይም ፓስፖርት ዋናውን ከኮፒ ጋር ይዞው መገኘት ይኖርባቸዋል፡",
    date: "2017 EC",
    isImage: false
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
              {news?.pdfIncluded && <button
                onClick={() => window.open(news.pdf, '_blank')}
                style={{
                  'left': '400px',
                  'top': '230px',
                  'box-shadow': '0px 0px 6px 3px #ffba00',
                  'border-radius': '5px',
                  'background': '#ffba00',
                  cursor: 'pointer'
                }}
              >
                <i className="fa-solid fa-file-pdf" style={{ color: '#cf1322' }} />
                Open PDF
              </button>}
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{news.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{news.date}</p>
                {news?.isImage ?
                  <img src={news.description} alt={news.description} className="w-full h-48 object-cover" />
                  :
                  <p className="text-gray-700 line-clamp-5">{news.description}</p>

                }
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent style={{ maxWidth: '70vw', maxHeight: '90vh', overflowY: 'auto' }} className="max-w-2xl bg-white text-black">
          {selectedNews && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-2 text-gray-800">{selectedNews.title}</DialogTitle>
              </DialogHeader>
              {/* <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-64 object-cover rounded-lg mb-4" /> */}
              <p className="text-gray-500 text-sm mb-2">{selectedNews.date}</p>
              {selectedNews?.isImage ?
                <img src={selectedNews.description} alt={selectedNews.description} className="w-full h-full object-cover" />
                :
                <p className="text-gray-700 h-full">{selectedNews.description}</p>

              }
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
