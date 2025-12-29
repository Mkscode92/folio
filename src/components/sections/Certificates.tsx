'use client'
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Certificate } from "@/src/types";

const certificates: Certificate[] = [
  {
    id: "1",
    title: "JPMorganChase Career.edYOU Academy",
    image: "/images/jpmc.jpg",
    link: "https://www.linkedin.com/in/mksrinivasula/overlay/1763587059098/single-media-viewer/?profileId=ACoAAEPjyIABk0BRY_a42NA_yOaPZHjHb_rCEMg"
  },
  {
    id: "2",
    title: "CodePath Technical Interview Prep 102",
    image: "/images/codepath.jpg",
    link: "https://www.linkedin.com/in/mksrinivasula/overlay/1755738461568/single-media-viewer/?profileId=ACoAAEPjyIABk0BRY_a42NA_yOaPZHjHb_rCEMg"
  },
  {
    id: "3",
    title: "Udemy The Complete Full-Stack Web Development Bootcamp",
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
        <h1>hello</h1>
    );
};

export default Certificates