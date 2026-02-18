import type { Brand } from "@/lib/types";

export const brands: Brand[] = [
  {
    id: "bostany",
    name: "Bostany",
    nameAr: "بستاني",
    slug: "bostany",
    logoUrl: "/images/logo/bostany-logo.png",
    color: "#C41E24",
  },
  {
    id: "king",
    name: "King",
    nameAr: "كينج",
    slug: "king",
    logoUrl: "",
    color: "#2D8B47",
  },
  {
    id: "topvalue",
    name: "TopValue",
    nameAr: "توب فاليو",
    slug: "topvalue",
    logoUrl: "",
    color: "#4A2C1A",
  },
  {
    id: "manutti",
    name: "Manutti",
    nameAr: "مانوتي",
    slug: "manutti",
    logoUrl: "",
    color: "#1B3A7B",
  },
  {
    id: "prego",
    name: "Prego",
    nameAr: "بريجو",
    slug: "prego",
    logoUrl: "",
    color: "#E8A825",
  },
  {
    id: "brigo",
    name: "Brigo",
    nameAr: "بريجو",
    slug: "brigo",
    logoUrl: "",
    color: "#E87D1E",
  },
  {
    id: "delice",
    name: "Delice",
    nameAr: "ديليس",
    slug: "delice",
    logoUrl: "",
    color: "#2196F3",
  },
];

export function getBrandById(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}
