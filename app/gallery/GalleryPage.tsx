"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";
interface ProjectDataType {
  title: string;
  imgSrc: string;
}
interface ProgramDataType {
  program: string;
  projects: ProjectDataType[];
}
const programData: ProgramDataType[] = [{
  program: "Agriculture",
  projects: [{
    title: "Agriculture 1",
    imgSrc: "/images/gallery/Agriculture/Agriculture-1.webp"
  }, {
    title: "Agriculture 2",
    imgSrc: "/images/gallery/Agriculture/Agriculture-2.webp"
  }, {
    title: "Agriculture 3",
    imgSrc: "/images/gallery/Agriculture/Agriculture-3.webp"
  }, {
    title: "Agriculture 4",
    imgSrc: "/images/gallery/Agriculture/Agriculture-4.webp"
  }, {
    title: "Agriculture 5",
    imgSrc: "/images/gallery/Agriculture/Agriculture-5.webp"
  }, {
    title: "Agriculture 6",
    imgSrc: "/images/gallery/Agriculture/Agriculture-6.webp"
  }, {
    title: "Agriculture 7",
    imgSrc: "/images/gallery/Agriculture/Agriculture-7.webp"
  }, {
    title: "Agriculture 8",
    imgSrc: "/images/gallery/Agriculture/Agriculture-8.webp"
  }, {
    title: "Agriculture 9",
    imgSrc: "/images/gallery/Agriculture/Agriculture-9.webp"
  }, {
    title: "Agriculture 10",
    imgSrc: "/images/gallery/Agriculture/Agriculture-10.webp"
  }, {
    title: "Agriculture 11",
    imgSrc: "/images/gallery/Agriculture/Agriculture-11.webp"
  }, {
    title: "Agriculture 12",
    imgSrc: "/images/gallery/Agriculture/Agriculture-12.webp"
  }, {
    title: "Agriculture 13",
    imgSrc: "/images/gallery/Agriculture/Agriculture-13.webp"
  }, {
    title: "Agriculture 14",
    imgSrc: "/images/gallery/Agriculture/Agriculture-14.webp"
  }, {
    title: "Agriculture 15",
    imgSrc: "/images/gallery/Agriculture/Agriculture-15.webp"
  }, {
    title: "Agriculture 16",
    imgSrc: "/images/gallery/Agriculture/Agriculture-16.webp"
  }, {
    title: "Agriculture 17",
    imgSrc: "/images/gallery/Agriculture/Agriculture-17.webp"
  }, {
    title: "Agriculture 18",
    imgSrc: "/images/gallery/Agriculture/Agriculture-18.webp"
  }, {
    title: "Agriculture 19",
    imgSrc: "/images/gallery/Agriculture/Agriculture-19.webp"
  }, {
    title: "Agriculture 20",
    imgSrc: "/images/gallery/Agriculture/Agriculture-20.webp"
  }, {
    title: "Agriculture 21",
    imgSrc: "/images/gallery/Agriculture/Agriculture-21.webp"
  }, {
    title: "Agriculture 22",
    imgSrc: "/images/gallery/Agriculture/Agriculture-22.webp"
  }, {
    title: "Agriculture 23",
    imgSrc: "/images/gallery/Agriculture/Agriculture-23.webp"
  }, {
    title: "Agriculture 24",
    imgSrc: "/images/gallery/Agriculture/Agriculture-24.webp"
  }, {
    title: "Agriculture 25",
    imgSrc: "/images/gallery/Agriculture/Agriculture-25.webp"
  }, {
    title: "Agriculture 26",
    imgSrc: "/images/gallery/Agriculture/Agriculture-26.webp"
  }]
}, {
  program: "Charity",
  projects: [{
    title: "Charity 1",
    imgSrc: "/images/gallery/Charity/Charity-1.webp"
  }, {
    title: "Charity 2",
    imgSrc: "/images/gallery/Charity/Charity-2.webp"
  }, {
    title: "Charity 3",
    imgSrc: "/images/gallery/Charity/Charity-3.webp"
  }, {
    title: "Charity 4",
    imgSrc: "/images/gallery/Charity/Charity-4.webp"
  }, {
    title: "Charity 5",
    imgSrc: "/images/gallery/Charity/Charity-5.webp"
  }]
}, {
  program: "Computer Training",
  projects: [{
    title: "Computer Training 1",
    imgSrc: "/images/gallery/Computer-Training/Computer-Training-1.webp"
  }, {
    title: "Computer Training 2",
    imgSrc: "/images/gallery/Computer-Training/Computer-Training-2.webp"
  }, {
    title: "Computer Training 3",
    imgSrc: "/images/gallery/Computer-Training/Computer-Training-3.webp"
  }, {
    title: "Computer Training 4",
    imgSrc: "/images/gallery/Computer-Training/Computer-Training-4.webp"
  }, {
    title: "Computer Training 5",
    imgSrc: "/images/gallery/Computer-Training/Computer-Training-5.webp"
  }, {
    title: "Computer Training 6",
    imgSrc: "/images/gallery/Computer-Training/Computer-Training-6.webp"
  }, {
    title: "Computer Training 7",
    imgSrc: "/images/gallery/Computer-Training/Computer-Training-7.webp"
  }, {
    title: "Computer Training 8",
    imgSrc: "/images/gallery/Computer-Training/Computer-Training-8.webp"
  }]
}, {
  program: "Covid-19",
  projects: [{
    title: "Covid-19 1",
    imgSrc: "/images/gallery/Covid-19/Covid-19-1.webp"
  }, {
    title: "Covid-19 2",
    imgSrc: "/images/gallery/Covid-19/Covid-19-2.webp"
  }, {
    title: "Covid-19 3",
    imgSrc: "/images/gallery/Covid-19/Covid-19-3.webp"
  }, {
    title: "Covid-19 4",
    imgSrc: "/images/gallery/Covid-19/Covid-19-4.webp"
  }, {
    title: "Covid-19 5",
    imgSrc: "/images/gallery/Covid-19/Covid-19-5.webp"
  }, {
    title: "Covid-19 6",
    imgSrc: "/images/gallery/Covid-19/Covid-19-6.webp"
  }, {
    title: "Covid-19 7",
    imgSrc: "/images/gallery/Covid-19/Covid-19-7.webp"
  }, {
    title: "Covid-19 8",
    imgSrc: "/images/gallery/Covid-19/Covid-19-8.webp"
  }, {
    title: "Covid-19 9",
    imgSrc: "/images/gallery/Covid-19/Covid-19-9.webp"
  }, {
    title: "Covid-19 10",
    imgSrc: "/images/gallery/Covid-19/Covid-19-10.webp"
  }, {
    title: "Covid-19 11",
    imgSrc: "/images/gallery/Covid-19/Covid-19-11.webp"
  }, {
    title: "Covid-19 12",
    imgSrc: "/images/gallery/Covid-19/Covid-19-12.webp"
  }, {
    title: "Covid-19 13",
    imgSrc: "/images/gallery/Covid-19/Covid-19-13.webp"
  }, {
    title: "Covid-19 14",
    imgSrc: "/images/gallery/Covid-19/Covid-19-14.webp"
  }]
}, {
  program: "Education",
  projects: [{
    title: "Education 1",
    imgSrc: "/images/gallery/Education/Education-1.webp"
  }, {
    title: "Education 2",
    imgSrc: "/images/gallery/Education/Education-2.webp"
  }, {
    title: "Education 3",
    imgSrc: "/images/gallery/Education/Education-3.webp"
  }, {
    title: "Education 4",
    imgSrc: "/images/gallery/Education/Education-4.webp"
  }, {
    title: "Education 5",
    imgSrc: "/images/gallery/Education/Education-5.webp"
  }, {
    title: "Education 6",
    imgSrc: "/images/gallery/Education/Education-6.webp"
  }, {
    title: "Education 7",
    imgSrc: "/images/gallery/Education/Education-7.webp"
  }, {
    title: "Education 8",
    imgSrc: "/images/gallery/Education/Education-8.webp"
  }, {
    title: "Education 9",
    imgSrc: "/images/gallery/Education/Education-9.webp"
  }, {
    title: "Education 10",
    imgSrc: "/images/gallery/Education/Education-10.webp"
  }, {
    title: "Education 11",
    imgSrc: "/images/gallery/Education/Education-11.webp"
  }, {
    title: "Education 12",
    imgSrc: "/images/gallery/Education/Education-12.webp"
  }, {
    title: "Education 13",
    imgSrc: "/images/gallery/Education/Education-13.webp"
  }, {
    title: "Education 14",
    imgSrc: "/images/gallery/Education/Education-14.webp"
  }]
}, {
  program: "Electrical & Mechanical",
  projects: [{
    title: "EM 1",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-1.webp"
  }, {
    title: "EM 2",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-2.webp"
  }, {
    title: "EM 3",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-3.webp"
  }, {
    title: "EM 4",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-4.webp"
  }, {
    title: "EM 5",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-5.webp"
  }, {
    title: "EM 6",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-6.webp"
  }, {
    title: "EM 7",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-7.webp"
  }, {
    title: "EM 8",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-8.webp"
  }, {
    title: "EM 9",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-9.webp"
  }, {
    title: "EM 10",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-10.webp"
  }, {
    title: "EM 11",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-11.webp"
  }, {
    title: "EM 12",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-12.webp"
  }, {
    title: "EM 13",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-13.webp"
  }, {
    title: "EM 14",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-14.webp"
  }, {
    title: "EM 15",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-15.webp"
  }, {
    title: "EM 16",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-16.webp"
  }, {
    title: "EM 17",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-17.webp"
  }, {
    title: "EM 18",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-18.webp"
  }, {
    title: "EM 19",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-19.webp"
  }, {
    title: "EM 20",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-20.webp"
  }, {
    title: "EM 21",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-21.webp"
  }, {
    title: "EM 22",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-22.webp"
  }, {
    title: "EM 23",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-23.webp"
  }, {
    title: "EM 24",
    imgSrc: "/images/gallery/Electrical-Mechanical/Electrical-Mechanical-24.webp"
  }]
}, {
  program: "Environment",
  projects: [{
    title: "Environment 1",
    imgSrc: "/images/gallery/environment/environment-1.webp"
  }, {
    title: "Environment 2",
    imgSrc: "/images/gallery/environment/environment-2.webp"
  }, {
    title: "Environment 3",
    imgSrc: "/images/gallery/environment/environment-3.webp"
  }, {
    title: "Environment 4",
    imgSrc: "/images/gallery/environment/environment-4.webp"
  }, {
    title: "Environment 5",
    imgSrc: "/images/gallery/environment/environment-5.webp"
  }, {
    title: "Environment 6",
    imgSrc: "/images/gallery/environment/environment-6.webp"
  }, {
    title: "Environment 7",
    imgSrc: "/images/gallery/environment/environment-7.webp"
  }, {
    title: "Environment 8",
    imgSrc: "/images/gallery/environment/environment-8.webp"
  }, {
    title: "Environment 9",
    imgSrc: "/images/gallery/environment/environment-9.webp"
  }, {
    title: "Environment 10",
    imgSrc: "/images/gallery/environment/environment-10.webp"
  }, {
    title: "Environment 11",
    imgSrc: "/images/gallery/environment/environment-11.webp"
  }, {
    title: "Environment 12",
    imgSrc: "/images/gallery/environment/environment-12.webp"
  }, {
    title: "Environment 13",
    imgSrc: "/images/gallery/environment/environment-13.webp"
  }, {
    title: "Environment 14",
    imgSrc: "/images/gallery/environment/environment-14.webp"
  }, {
    title: "Environment 15",
    imgSrc: "/images/gallery/environment/environment-15.webp"
  }, {
    title: "Environment 16",
    imgSrc: "/images/gallery/environment/environment-16.webp"
  }, {
    title: "Environment 17",
    imgSrc: "/images/gallery/environment/environment-17.webp"
  }, {
    title: "Environment 18",
    imgSrc: "/images/gallery/environment/environment-18.webp"
  }, {
    title: "Environment 19",
    imgSrc: "/images/gallery/environment/environment-19.webp"
  }, {
    title: "Environment 20",
    imgSrc: "/images/gallery/environment/environment-20.webp"
  }, {
    title: "Environment 21",
    imgSrc: "/images/gallery/environment/environment-21.webp"
  }, {
    title: "Environment 22",
    imgSrc: "/images/gallery/environment/environment-22.webp"
  }, {
    title: "Environment 23",
    imgSrc: "/images/gallery/environment/environment-23.webp"
  }]
}, {
  program: "Fashion & Apparels",
  projects: [{
    title: "Fashion & Apparels 1",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-1.webp"
  }, {
    title: "Fashion & Apparels 2",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-2.webp"
  }, {
    title: "Fashion & Apparels 3",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-3.webp"
  }, {
    title: "Fashion & Apparels 4",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-4.webp"
  }, {
    title: "Fashion & Apparels 5",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-5.webp"
  }, {
    title: "Fashion & Apparels 6",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-6.webp"
  }, {
    title: "Fashion & Apparels 7",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-7.webp"
  }, {
    title: "Fashion & Apparels 8",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-8.webp"
  }, {
    title: "Fashion & Apparels 9",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-9.webp"
  },
  // { title: "Fashion & Apparels 10", imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-10.webp" },
  {
    title: "Fashion & Apparels 11",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-11.webp"
  }, {
    title: "Fashion & Apparels 12",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-12.webp"
  }, {
    title: "Fashion & Apparels 13",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-13.webp"
  }, {
    title: "Fashion & Apparels 14",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-14.webp"
  }, {
    title: "Fashion & Apparels 15",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-15.webp"
  }, {
    title: "Fashion & Apparels 16",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-16.webp"
  }, {
    title: "Fashion & Apparels 17",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-17.webp"
  }, {
    title: "Fashion & Apparels 18",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-18.webp"
  }, {
    title: "Fashion & Apparels 19",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-19.webp"
  }, {
    title: "Fashion & Apparels 20",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-20.webp"
  }, {
    title: "Fashion & Apparels 21",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-21.webp"
  }, {
    title: "Fashion & Apparels 22",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-22.webp"
  }, {
    title: "Fashion & Apparels 23",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-23.webp"
  }, {
    title: "Fashion & Apparels 24",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-24.webp"
  }, {
    title: "Fashion & Apparels 25",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-25.webp"
  }, {
    title: "Fashion & Apparels 26",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-26.webp"
  }, {
    title: "Fashion & Apparels 27",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-27.webp"
  }, {
    title: "Fashion & Apparels 28",
    imgSrc: "/images/gallery/Fashion-Apparels/fashion-apparels-28.webp"
  }]
}, {
  program: "Food & Housekeeping",
  projects: [{
    title: "Food & Housekeeping 1",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-1.webp"
  }, {
    title: "Food & Housekeeping 2",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-2.webp"
  }, {
    title: "Food & Housekeeping 3",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-3.webp"
  }, {
    title: "Food & Housekeeping 4",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-4.webp"
  }, {
    title: "Food & Housekeeping 5",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-5.webp"
  }, {
    title: "Food & Housekeeping 6",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-6.webp"
  }, {
    title: "Food & Housekeeping 7",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-7.webp"
  }, {
    title: "Food & Housekeeping 8",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-8.webp"
  }, {
    title: "Food & Housekeeping 9",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-9.webp"
  }, {
    title: "Food & Housekeeping 10",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-10.webp"
  }, {
    title: "Food & Housekeeping 11",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-11.webp"
  }, {
    title: "Food & Housekeeping 12",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-12.webp"
  }, {
    title: "Food & Housekeeping 13",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-13.webp"
  }, {
    title: "Food & Housekeeping 14",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-14.webp"
  }, {
    title: "Food & Housekeeping 15",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-15.webp"
  }, {
    title: "Food & Housekeeping 16",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-16.webp"
  }, {
    title: "Food & Housekeeping 17",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-17.webp"
  }, {
    title: "Food & Housekeeping 18",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-18.webp"
  }, {
    title: "Food & Housekeeping 19",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-19.webp"
  }, {
    title: "Food & Housekeeping 20",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-20.webp"
  }, {
    title: "Food & Housekeeping 21",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-21.webp"
  }, {
    title: "Food & Housekeeping 22",
    imgSrc: "/images/gallery/Food-Housekeeping/food-housekeeping-22.webp"
  }]
}, {
  program: "Gramasabha",
  projects: [{
    title: "Gramasabha 1",
    imgSrc: "/images/gallery/gramasabha/gramasabha-1.webp"
  }, {
    title: "Gramasabha 2",
    imgSrc: "/images/gallery/gramasabha/gramasabha-2.webp"
  }, {
    title: "Gramasabha 3",
    imgSrc: "/images/gallery/gramasabha/gramasabha-3.webp"
  }, {
    title: "Gramasabha 4",
    imgSrc: "/images/gallery/gramasabha/gramasabha-4.webp"
  }, {
    title: "Gramasabha 5",
    imgSrc: "/images/gallery/gramasabha/gramasabha-5.webp"
  }, {
    title: "Gramasabha 6",
    imgSrc: "/images/gallery/gramasabha/gramasabha-6.webp"
  }, {
    title: "Gramasabha 7",
    imgSrc: "/images/gallery/gramasabha/gramasabha-7.webp"
  }, {
    title: "Gramasabha 8",
    imgSrc: "/images/gallery/gramasabha/gramasabha-8.webp"
  }, {
    title: "Gramasabha 9",
    imgSrc: "/images/gallery/gramasabha/gramasabha-9.webp"
  }, {
    title: "Gramasabha 10",
    imgSrc: "/images/gallery/gramasabha/gramasabha-10.webp"
  }, {
    title: "Gramasabha 11",
    imgSrc: "/images/gallery/gramasabha/gramasabha-11.webp"
  }, {
    title: "Gramasabha 12",
    imgSrc: "/images/gallery/gramasabha/gramasabha-12.webp"
  }, {
    title: "Gramasabha 13",
    imgSrc: "/images/gallery/gramasabha/gramasabha-13.webp"
  }, {
    title: "Gramasabha 14",
    imgSrc: "/images/gallery/gramasabha/gramasabha-14.webp"
  }, {
    title: "Gramasabha 15",
    imgSrc: "/images/gallery/gramasabha/gramasabha-15.webp"
  }, {
    title: "Gramasabha 16",
    imgSrc: "/images/gallery/gramasabha/gramasabha-16.webp"
  }, {
    title: "Gramasabha 17",
    imgSrc: "/images/gallery/gramasabha/gramasabha-17.webp"
  }, {
    title: "Gramasabha 18",
    imgSrc: "/images/gallery/gramasabha/gramasabha-18.webp"
  }, {
    title: "Gramasabha 19",
    imgSrc: "/images/gallery/gramasabha/gramasabha-19.webp"
  }, {
    title: "Gramasabha 20",
    imgSrc: "/images/gallery/gramasabha/gramasabha-20.webp"
  }, {
    title: "Gramasabha 21",
    imgSrc: "/images/gallery/gramasabha/gramasabha-21.webp"
  }, {
    title: "Gramasabha 22",
    imgSrc: "/images/gallery/gramasabha/gramasabha-22.webp"
  }]
}, {
  program: "Health",
  projects: [{
    title: "Health 1",
    imgSrc: "/images/gallery/health/health1-1.webp"
  }, {
    title: "Health 2",
    imgSrc: "/images/gallery/health/health1-2.webp"
  }, {
    title: "Health 3",
    imgSrc: "/images/gallery/health/health1-3.webp"
  }, {
    title: "Health 4",
    imgSrc: "/images/gallery/health/health1-4.webp"
  }, {
    title: "Health 5",
    imgSrc: "/images/gallery/health/health1-5.webp"
  }, {
    title: "Health 6",
    imgSrc: "/images/gallery/health/health1-6.webp"
  }, {
    title: "Health 7",
    imgSrc: "/images/gallery/health/health1-7.webp"
  }, {
    title: "Health 8",
    imgSrc: "/images/gallery/health/health1-8.webp"
  }, {
    title: "Health 9",
    imgSrc: "/images/gallery/health/health1-9.webp"
  }, {
    title: "Health 10",
    imgSrc: "/images/gallery/health/health1-10.webp"
  }, {
    title: "Health 11",
    imgSrc: "/images/gallery/health/health1-11.webp"
  }, {
    title: "Health 12",
    imgSrc: "/images/gallery/health/health1-12.webp"
  }, {
    title: "Health 13",
    imgSrc: "/images/gallery/health/health1-13.webp"
  }, {
    title: "Health 14",
    imgSrc: "/images/gallery/health/health1-14.webp"
  }, {
    title: "Health 15",
    imgSrc: "/images/gallery/health/health1-15.webp"
  }, {
    title: "Health 16",
    imgSrc: "/images/gallery/health/health1-16.webp"
  }, {
    title: "Health 17",
    imgSrc: "/images/gallery/health/health1-17.webp"
  }, {
    title: "Health 18",
    imgSrc: "/images/gallery/health/health1-18.webp"
  }]
}, {
  program: "Persons with Disability",
  projects: [{
    title: "Persons with Disability 1",
    imgSrc: "/images/gallery/pwd/pwd-1.webp"
  }, {
    title: "Persons with Disability 2",
    imgSrc: "/images/gallery/pwd/pwd-2.webp"
  }, {
    title: "Persons with Disability 3",
    imgSrc: "/images/gallery/pwd/pwd-3.webp"
  }, {
    title: "Persons with Disability 4",
    imgSrc: "/images/gallery/pwd/pwd-4.webp"
  }, {
    title: "Persons with Disability 5",
    imgSrc: "/images/gallery/pwd/pwd-5.webp"
  }, {
    title: "Persons with Disability 6",
    imgSrc: "/images/gallery/pwd/pwd-6.webp"
  }, {
    title: "Persons with Disability 7",
    imgSrc: "/images/gallery/pwd/pwd-7.webp"
  }, {
    title: "Persons with Disability 8",
    imgSrc: "/images/gallery/pwd/pwd-8.webp"
  }, {
    title: "Persons with Disability 9",
    imgSrc: "/images/gallery/pwd/pwd-9.webp"
  }, {
    title: "Persons with Disability 10",
    imgSrc: "/images/gallery/pwd/pwd-10.webp"
  }, {
    title: "Persons with Disability 11",
    imgSrc: "/images/newsandevents/ft-tide-1.webp"
  }, {
    title: "Persons with Disability 12",
    imgSrc: "/images/newsandevents/ft-tide-2.webp"
  }, {
    title: "Persons with Disability 13",
    imgSrc: "/images/newsandevents/ft-tide-3.webp"
  }, {
    title: "Persons with Disability 14",
    imgSrc: "/images/newsandevents/ft-tide-4.webp"
  }, {
    title: "Persons with Disability 15",
    imgSrc: "/images/newsandevents/ft-tide-5.webp"
  }, {
    title: "Persons with Disability 16",
    imgSrc: "/images/newsandevents/ft-tide-6.webp"
  }, {
    title: "Persons with Disability 17",
    imgSrc: "/images/newsandevents/ft-tide-7.webp"
  }]
}, {
  program: "International Day against Drug Abuse",
  projects: [{
    title: "International Day against Drug Abuse 15",
    imgSrc: "/images/newsandevents/ft-tide-15.webp"
  }, {
    title: "International Day against Drug Abuse 8",
    imgSrc: "/images/newsandevents/ft-tide-8.webp"
  }, {
    title: "International Day against Drug Abuse 9",
    imgSrc: "/images/newsandevents/ft-tide-9.webp"
  }, {
    title: "International Day against Drug Abuse 10",
    imgSrc: "/images/newsandevents/ft-tide-10.webp"
  }, {
    title: "International Day against Drug Abuse 11",
    imgSrc: "/images/newsandevents/ft-tide-11.webp"
  }, {
    title: "International Day against Drug Abuse 12",
    imgSrc: "/images/newsandevents/ft-tide-12.webp"
  }, {
    title: "International Day against Drug Abuse 13",
    imgSrc: "/images/newsandevents/ft-tide-13.webp"
  }, {
    title: "International Day against Drug Abuse 14",
    imgSrc: "/images/newsandevents/ft-tide-14.webp"
  }]
}];

// animations
const gridContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};
const gridItem = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring"
    }
  },
  exit: {
    opacity: 0,
    y: -10
  }
};
export default function ProjectsSection() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const currentList = programData[activeProgram].projects;
  const handleNext = () => {
    setSelectedIndex(prev => prev !== null ? (prev + 1) % currentList.length : 0);
  };
  const handlePrev = () => {
    setSelectedIndex(prev => prev !== null ? (prev - 1 + currentList.length) % currentList.length : 0);
  };

  // keyboard controls
  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, currentList.length]);
  const selectedImage = selectedIndex !== null ? currentList[selectedIndex] : null;
  return <>
      <ReuseBanner image="/images/gallery/others/photo-collage.jpg" title="Gallery" subtitle="A Visual Journey Through Our Work" />

      <Breadcrumb items={[{
      label: "Home",
      href: "/"
    }, {
      label: "Gallery",
      href: "/gallery"
    }, {
      label: ""
    }]} />

      <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4">

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {programData.map((p, i) => <button key={i} className={`px-6 py-2 rounded-lg font-semibold transition ${activeProgram === i ? "bg-blue-600 text-white shadow" : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white"}`} onClick={() => {
            setActiveProgram(i);
            setSelectedIndex(null);
          }}>
                {p.program}
              </button>)}
          </div>

          {/* Images Grid */}
          
            <div key={activeProgram} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentList.map((project, i) => <div key={i} className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group" onClick={() => setSelectedIndex(i)}>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-30 transition rounded-2xl"></div>

                  <Image src={project.imgSrc} alt={project.title} width={400} height={300} className="object-cover w-full h-60 rounded-2xl" />

                  <div className="absolute bottom-4 left-4 text-white font-semibold bg-black/50 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    {project.title}
                  </div>
                </div>)}
            </div>
          
        </div>

        {/* Modal */}
        
          {selectedImage && <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6" onClick={() => setSelectedIndex(null)}>
              <div className="relative w-full max-w-4xl mx-auto" onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button className="absolute -top-4 -right-4 bg-white text-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition" onClick={() => setSelectedIndex(null)}>
                  ✕
                </button>

                {/* Prev Button */}
                <button onClick={e => {
            e.stopPropagation();
            handlePrev();
          }} className="
          absolute top-1/2 -left-4 sm:-left-6 
          bg-white/80 text-black 
          w-8 h-8 sm:w-10 sm:h-10 
          rounded-full shadow flex items-center justify-center 
          hover:bg-white transition
        ">
                  ‹
                </button>

                {/* Image */}
                <div className="flex justify-center items-center">
                  <Image src={selectedImage.imgSrc} alt={selectedImage.title} width={1200} height={800} className="
            object-contain 
            w-full 
            max-h-[65vh] sm:max-h-[75vh] md:max-h-[80vh] 
            rounded
          " />
                </div>

                {/* Next Button */}
                <button onClick={e => {
            e.stopPropagation();
            handleNext();
          }} className="
          absolute top-1/2 -right-4 sm:-right-6 
          bg-white/80 text-black 
          w-8 h-8 sm:w-10 sm:h-10 
          rounded-full shadow flex items-center justify-center 
          hover:bg-white transition
        ">
                  ›
                </button>

                {/* Title */}
                <p className="text-center text-white mt-4 font-semibold text-sm sm:text-base md:text-lg">
                  {selectedImage.title}
                </p>
              </div>
            </div>}

        
      </section>
    </>;
}