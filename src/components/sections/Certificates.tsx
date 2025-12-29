'use client'
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Certificate } from "@/src/types";

const certificates: Certificate[] = [
  {
    id: "1",
    company: "JPMorganChase:",
    title: "Career.edYOU Academy",
    image: "/images/jpmc.jpg",
    link: "https://www.linkedin.com/in/mksrinivasula/overlay/1763587059098/single-media-viewer/?profileId=ACoAAEPjyIABk0BRY_a42NA_yOaPZHjHb_rCEMg"
  },
  {
    id: "2",
    company: "CodePath:",
    title: "Technical Interview Prep 102",
    image: "/images/codepath.jpg",
    link: "https://www.linkedin.com/in/mksrinivasula/overlay/1755738461568/single-media-viewer/?profileId=ACoAAEPjyIABk0BRY_a42NA_yOaPZHjHb_rCEMg"
  },
  {
    id: "3",
    company:"Udemy:",
    title: "The Complete Full-Stack Web Development Bootcamp",
    image: "/images/udemy.jpg",
    link: "https://www.udemy.com/certificate/UC-63349b2d-37fe-492b-bf91-0d170b90c196/"
  },
  
];

const Certificates = () => {
    return (
      <section id="certificates" className="min-h-screen py-20 px-4 bg-section-bg1">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Certificates</h2>
            <p className="text-xl text-gray-300">
            Here are some of my certificates that I have acquired over the years. 
          </p>
          </motion.div>
  
  
          <div className="grid grid-cols-1 custom-md:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
}

const CertificateCard = ({ certificate, index }: { certificate: Certificate; index: number }) => {
    return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-black rounded-lg border-2 border-white p-6 hover:shadow-lg transition-all"
    >
        <div className="w-full h-64 rounded-lg mb-4 flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden rounded-lg border-2 border-gray-700">
                    {certificate.image ? (
                        <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className="object-cover"
                        priority
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                        </div>
                    )}
                </div>
        </div>

        <h3 className="text-2xl font-bold">{certificate.company}</h3>
        <h3 className="text-2xl font-bold mb-4">{certificate.title}</h3>
        <div className="flex gap-3">
            {certificate.link && (
            <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-800 transition-colors"
            >
                <ExternalLink className="w-4 h-4" />
                Link
            </a>
            )}
        </div>
        
    </motion.div>
    );
};

export default Certificates