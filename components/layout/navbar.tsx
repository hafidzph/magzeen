"use client";

import * as React from "react";
import Link from "next/link";
import {
  FaBook,
  FaBriefcase,
  FaBullhorn,
  FaCar,
  FaChartBar,
  FaChartLine,
  FaCity,
  FaCode,
  FaComments,
  FaDollarSign,
  FaFilm,
  FaFlag,
  FaFutbol,
  FaGlobe,
  FaGraduationCap,
  FaHospital,
  FaKaaba,
  FaLaptop,
  FaMapPin,
  FaMicroscope,
  FaMoneyBillWave,
  FaMosque,
  FaNewspaper,
  FaPen,
  FaPlane,
  FaRegNewspaper,
  FaRobot,
  FaStar,
  FaTag,
  FaTrophy,
  FaUser,
  FaWheelchair,
} from "react-icons/fa6";
import {
  FaBasketballBall,
  FaClinicMedical,
  FaCocktail,
  FaConciergeBell,
  FaGlobeAmericas,
  FaHeartbeat,
  FaLandmark,
  FaMapMarkedAlt,
  FaPaintBrush,
  FaShoppingCart,
  FaSmile,
  FaSubway,
  FaTheaterMasks,
  FaUserGraduate,
} from "react-icons/fa";

import { cn } from "@/lib/utils/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { IconType } from "react-icons";
import { GiPalmTree, GiSoccerBall } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdBusiness, MdPerson } from "react-icons/md";

const newsSource: string[] = [
  "Antara",
  "CNBC",
  "CNN",
  "JPNN",
  "Kumparan",
  "Merdeka",
  "Okezone",
  "Republika",
  "SINDOnews",
  "Suara",
  "Tempo",
  "Tribun",
];

const categories: { icon: IconType; title: string; color: string }[] = [
  {
    icon: FaRegNewspaper,
    title: "Terbaru",
    color: "text-blue-500",
  },
  {
    icon: FaLandmark,
    title: "Politik",
    color: "text-red-500",
  },
  {
    icon: FaChartLine,
    title: "Ekonomi",
    color: "text-green-500",
  },
  {
    icon: FaFutbol,
    title: "Bola",
    color: "text-yellow-500",
  },
  {
    icon: GiSoccerBall,
    title: "Olahraga",
    color: "text-orange-500",
  },
  {
    icon: FaUserGraduate,
    title: "Humaniora",
    color: "text-purple-500",
  },
  {
    icon: FaFilm,
    title: "Hiburan",
    color: "text-pink-500",
  },
  {
    icon: FaGlobe,
    title: "Dunia",
    color: "text-teal-500",
  },
  {
    icon: FaLaptop,
    title: "Tekno",
    color: "text-indigo-500",
  },
  {
    icon: FaCar,
    title: "Otomotif",
    color: "text-gray-600",
  },
  {
    icon: MdBusiness,
    title: "Investment",
    color: "text-green-700",
  },
  {
    icon: FaLandmark,
    title: "Hukum",
    color: "text-red-700",
  },
  {
    icon: FaFlag,
    title: "Nasional",
    color: "text-blue-700",
  },
  {
    icon: FaGlobeAmericas,
    title: "Internasional",
    color: "text-teal-700",
  },
  {
    icon: FaRegNewspaper,
    title: "News",
    color: "text-blue-400",
  },
  {
    icon: FaComments,
    title: "Opini",
    color: "text-yellow-500",
  },
  {
    icon: FaCode,
    title: "Tech",
    color: "text-indigo-600",
  },
  {
    icon: MdPerson,
    title: "Celebrity",
    color: "text-pink-600",
  },
  {
    icon: MdBusiness,
    title: "Business",
    color: "text-gray-700",
  },
  {
    icon: GiPalmTree,
    title: "Lifestyle",
    color: "text-green-600",
  },
  {
    icon: IoIosPeople,
    title: "Seleb",
    color: "text-pink-700",
  },
  {
    icon: FaCity,
    title: "Jakarta",
    color: "text-teal-600",
  },
  {
    icon: FaTag,
    title: "Khas",
    color: "text-yellow-600",
  },
  {
    icon: FaMicroscope,
    title: "Sains",
    color: "text-blue-600",
  },

  {
    icon: FaCode,
    title: "Teknologi",
    color: "text-indigo-700",
  },

  {
    icon: FaShoppingCart,
    title: "Market",
    color: "text-gray-700",
  },
  {
    icon: FaBriefcase,
    title: "Entrepreneur",
    color: "text-blue-600",
  },
  {
    icon: FaKaaba,
    title: "Syariah",
    color: "text-green-700",
  },
  {
    icon: FaUser,
    title: "Profil",
    color: "text-purple-600",
  },
  {
    icon: FaStar,
    title: "Gaya",
    color: "text-pink-500",
  },
  {
    icon: FaHeartbeat,
    title: "Sehat",
    color: "text-green-500",
  },
  {
    icon: FaCocktail,
    title: "Gaya Hidup",
    color: "text-purple-500",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Jateng",
    color: "text-brown-600",
  },
  {
    icon: FaMoneyBillWave,
    title: "Economy",
    color: "text-green-500",
  },
  {
    icon: FaRobot,
    title: "Techno",
    color: "text-blue-500",
  },
  {
    icon: FaBasketballBall,
    title: "Sports",
    color: "text-green-500",
  },
  {
    icon: FaBook,
    title: "Khazanah",
    color: "text-brown-600",
  },
  {
    icon: FaMosque,
    title: "Islam",
    color: "text-green-700",
  },
  {
    icon: FaConciergeBell,
    title: "Leisure",
    color: "text-purple-500",
  },
  {
    icon: FaSubway,
    title: "Metro",
    color: "text-blue-600",
  },
  {
    icon: FaDollarSign,
    title: "Ekbis",
    color: "text-green-600",
  },
  {
    icon: FaMapPin,
    title: "Daerah",
    color: "text-green-700",
  },
  {
    icon: FaGraduationCap,
    title: "Edukasi",
    color: "text-blue-500",
  },
  {
    icon: FaPen,
    title: "Kalam",
    color: "text-teal-700",
  },
  {
    icon: FaChartBar,
    title: "Bisnis",
    color: "text-blue-800",
  },
  {
    icon: FaTheaterMasks,
    title: "Entertainment",
    color: "text-yellow-500",
  },
  {
    icon: FaHospital,
    title: "Health",
    color: "text-green-500",
  },
  {
    icon: FaPlane,
    title: "Travel",
    color: "text-blue-600",
  },
  {
    icon: FaWheelchair,
    title: "Difabel",
    color: "text-indigo-600",
  },
  {
    icon: FaPaintBrush,
    title: "Creativelab",
    color: "text-purple-500",
  },
  {
    icon: FaNewspaper,
    title: "Inforial",
    color: "text-gray-600",
  },
  {
    icon: FaBullhorn,
    title: "Event",
    color: "text-red-500",
  },
  {
    icon: FaSmile,
    title: "Cantik",
    color: "text-pink-500",
  },
  {
    icon: FaTrophy,
    title: "Superskor",
    color: "text-yellow-500",
  },
  {
    icon: FaClinicMedical,
    title: "Kesehatan",
    color: "text-green-500",
  },
];

export const Navbar: React.FC = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 mx-24">
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <Icon className="h-7 w-7" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="custom-trigger relative hover:after:scale-x-100 after:absolute after:left-4 after:bottom-1 after:w-[15px] after:h-[4px] after:rounded-lg after:bg-red-500 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-out text-md">
              Sumber Berita
            </NavigationMenuTrigger>
            <NavigationMenuContent className="custom-content">
              <ul className="grid w-[50px] gap-3 p-4 md:w-[150px] md:grid-cols-2 lg:w-[250px]">
                {newsSource.map((news) => (
                  <ListItem key={news} title={news} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="custom-trigger relative hover:after:scale-x-100 after:absolute after:left-4 after:bottom-1 after:w-[15px] after:h-[4px] after:rounded-lg after:bg-red-500 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-out text-md">
              Kategori{" "}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="custom-content">
              <ul className="grid w-[650px] gap-3 p-4 md:w-[850px] md:grid-cols-6 lg:w-[1050px]">
                {categories.map((category) => (
                  <ListItem key={category.title} title={category.title}>
                    <category.icon className={`${category.color}`} />
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className="relative h-9 px-4 py-2 hover:after:scale-x-100 
                after:absolute after:left-4 after:bottom-0.5 after:w-[15px] after:h-[4px] 
                after:rounded-lg after:bg-red-500 after:transform after:scale-x-0 
                after:origin-left after:transition-transform after:duration-200 after:ease-out text-md"
              >
                Tentang Kami
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

function Icon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 122.88"
    >
      <path
        d="M17.89 0h88.9c8.85 0 16.1 7.24 16.1 16.1v90.68c0 8.85-7.24 16.1-16.1 16.1H16.1c-8.85 0-16.1-7.24-16.1-16.1v-88.9C0 8.05 8.05 0 17.89 0zm9.39 31.06h24.77l9.43 36.97 9.46-36.97H95.6v60.76H80.24V45.5L68.38 91.82H54.47L42.64 45.5v46.32H27.28V31.06z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {children}
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
