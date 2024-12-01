import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import { IconType } from "react-icons";
import { GiPalmTree, GiSoccerBall } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdBusiness, MdPerson } from "react-icons/md";
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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export function formatRelativeTime(dateString: string): string {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true, locale: id });
}

export function generatePaginationRange(
  currentPage: number,
  totalPages: number
) {
  const delta = 9;
  const range: (number | string)[] = [];

  range.push(1);

  const start = Math.max(2, currentPage - delta);
  const end = Math.min(totalPages - 1, currentPage + delta);

  if (start > 2) {
    range.push("...");
  }

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  if (end < totalPages - 1) {
    range.push("...");
  }

  if (totalPages > 1) {
    range.push(totalPages);
  }

  return range;
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function unslugify(title: string): string {
  return title.replace(/-/g, " ");
}

export const categories: { icon: IconType; title: string; color: string }[] = [
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
