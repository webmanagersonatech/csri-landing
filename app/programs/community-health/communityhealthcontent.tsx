"use client";

import Image from "next/image";
import { FaHeartbeat, FaLeaf, FaAmbulance, FaHandsHelping } from "react-icons/fa";
import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
export default function CommunityHealthPage() {
  return <div>
      {/* ---------- Banner ---------- */}
      <ReuseBanner image="https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-stethoscope_23-2149611227.jpg" title="Programs - Community Health Initiative" subtitle="A Commitment to Holistic and Accessible Healthcare" />

      {/* ---------- Breadcrumb ---------- */}
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumb items={[{
        label: "Home",
        href: "/"
      }, {
        label: "Programs",
        href: "/programs/Community Health Initiative"
      }, {
        label: "Community Health Initiative"
      }]} />
      </div>

      {/* ---------- INTRO SECTION ---------- */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <Image src="/images/gallery/health/health1-15.webp" width={800} height={600} className="object-cover w-full h-auto" alt="Community Health Initiative" />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Impacting Communities Through Healthcare
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-justify">
              CSRI organizes Awareness and Medical Camps aimed at improving
              community health and social well-being. In collaboration with
              healthcare professionals, these camps offer free check-ups,
              consultations, medicines, and essential health awareness.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
              These camps emphasize both modern medicine and AYUSH-based
              practices through Sona Medical College of Naturopathy and
              Yoga—bringing yoga therapy, naturopathy, and preventive care
              directly to the community.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CARDS SECTION ---------- */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 mt-0">
            Core Elements of Our Health Initiative
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CARD 1 */}
            <div className="bg-blue-50 border border-blue-200  p-6  text-center">
              <FaHeartbeat className="text-blue-600 dark:text-blue-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Medical Camps</h4>
              <p className="text-gray-600 dark:text-gray-300 ">
                Free check-ups, medicines, consultations & preventive health
                awareness.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-green-50 border border-green-200  p-6  text-center">
              <FaLeaf className="text-green-600 dark:text-green-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">
                AYUSH & Naturopathy
              </h4>
              <p className="text-gray-600 dark:text-gray-300 ">
                Yoga therapy, naturopathy treatments, preventive care workshops.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-red-50 border border-red-200 p-6  text-center">
              <FaAmbulance className="text-red-500  w-12 h-12 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Health on Wheels</h4>
              <p className="text-gray-600 dark:text-gray-300 ">
                A mobile medical unit taking healthcare to rural & underserved
                areas.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-yellow-50 border border-yellow-200  p-6  text-center">
              <FaHandsHelping className="text-yellow-600 dark:text-yellow-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">
                Holistic Well-being
              </h4>
              <p className="text-gray-600 dark:text-gray-300 ">
                Combining modern & traditional care for long-term well-being.
              </p>
            </div>
          </div>

          {/* FINAL DESCRIPTION */}
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mt-12">
            CSRI believes in making healthcare accessible for all.
            <span className="font-semibold"> Sona Health on Wheels </span>
            enables medical teams to reach remote communities and ensure
            consistent healthcare access for every individual.
          </p>
        </div>
      </section>
    </div>;
}