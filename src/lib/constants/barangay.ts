export const getBarangays = (municipality_id: number | null) => {
  if (municipality_id === null) {
    return [];
  }
  return barangay.filter(
    (barangay) => barangay.municipality_id === municipality_id
  );
};

interface Barangay {
  barangay_id: number;
  municipality_id: number;
  barangay_name: string;
}

const barangay: Barangay[] = [
  {
    barangay_id: 1,
    municipality_id: 1,
    barangay_name: "Adams (Pob.)",
  },
  {
    barangay_id: 2,
    municipality_id: 2,
    barangay_name: "Bani",
  },
  {
    barangay_id: 3,
    municipality_id: 2,
    barangay_name: "Buyon",
  },
  {
    barangay_id: 4,
    municipality_id: 2,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 5,
    municipality_id: 2,
    barangay_name: "Cabulalaan",
  },
  {
    barangay_id: 6,
    municipality_id: 2,
    barangay_name: "Cabusligan",
  },
  {
    barangay_id: 7,
    municipality_id: 2,
    barangay_name: "Cadaratan",
  },
  {
    barangay_id: 8,
    municipality_id: 2,
    barangay_name: "Calioet-Libong",
  },
  {
    barangay_id: 9,
    municipality_id: 2,
    barangay_name: "Casilian",
  },
  {
    barangay_id: 10,
    municipality_id: 2,
    barangay_name: "Corocor",
  },
  {
    barangay_id: 11,
    municipality_id: 2,
    barangay_name: "Duripes",
  },
  {
    barangay_id: 12,
    municipality_id: 2,
    barangay_name: "Ganagan",
  },
  {
    barangay_id: 13,
    municipality_id: 2,
    barangay_name: "Libtong",
  },
  {
    barangay_id: 14,
    municipality_id: 2,
    barangay_name: "Macupit",
  },
  {
    barangay_id: 15,
    municipality_id: 2,
    barangay_name: "Nambaran",
  },
  {
    barangay_id: 16,
    municipality_id: 2,
    barangay_name: "Natba",
  },
  {
    barangay_id: 17,
    municipality_id: 2,
    barangay_name: "Paninaan",
  },
  {
    barangay_id: 18,
    municipality_id: 2,
    barangay_name: "Pasiocan",
  },
  {
    barangay_id: 19,
    municipality_id: 2,
    barangay_name: "Pasngal",
  },
  {
    barangay_id: 20,
    municipality_id: 2,
    barangay_name: "Pipias",
  },
  {
    barangay_id: 21,
    municipality_id: 2,
    barangay_name: "Pulangi",
  },
  {
    barangay_id: 22,
    municipality_id: 2,
    barangay_name: "Pungto",
  },
  {
    barangay_id: 23,
    municipality_id: 2,
    barangay_name: "San Agustin I (Pob.)",
  },
  {
    barangay_id: 24,
    municipality_id: 2,
    barangay_name: "San Agustin II (Pob.)",
  },
  {
    barangay_id: 25,
    municipality_id: 2,
    barangay_name: "San Andres I (Pob.)",
  },
  {
    barangay_id: 26,
    municipality_id: 2,
    barangay_name: "San Andres II (Pob.)",
  },
  {
    barangay_id: 27,
    municipality_id: 2,
    barangay_name: "San Gabriel I (Pob.)",
  },
  {
    barangay_id: 28,
    municipality_id: 2,
    barangay_name: "San Gabriel II (Pob.)",
  },
  {
    barangay_id: 29,
    municipality_id: 2,
    barangay_name: "San Pedro I (Pob.)",
  },
  {
    barangay_id: 30,
    municipality_id: 2,
    barangay_name: "San Pedro II (Pob.)",
  },
  {
    barangay_id: 31,
    municipality_id: 2,
    barangay_name: "San Roque I (Pob.)",
  },
  {
    barangay_id: 32,
    municipality_id: 2,
    barangay_name: "San Roque II (Pob.)",
  },
  {
    barangay_id: 33,
    municipality_id: 2,
    barangay_name: "San Simon I (Pob.)",
  },
  {
    barangay_id: 34,
    municipality_id: 2,
    barangay_name: "San Simon II (Pob.)",
  },
  {
    barangay_id: 35,
    municipality_id: 2,
    barangay_name: "San Vicente (Pob.)",
  },
  {
    barangay_id: 36,
    municipality_id: 2,
    barangay_name: "Sangil",
  },
  {
    barangay_id: 37,
    municipality_id: 2,
    barangay_name: "Santa Filomena I (Pob.)",
  },
  {
    barangay_id: 38,
    municipality_id: 2,
    barangay_name: "Santa Filomena II (Pob.)",
  },
  {
    barangay_id: 39,
    municipality_id: 2,
    barangay_name: "Santa Rita (Pob.)",
  },
  {
    barangay_id: 40,
    municipality_id: 2,
    barangay_name: "Santo Cristo I (Pob.)",
  },
  {
    barangay_id: 41,
    municipality_id: 2,
    barangay_name: "Santo Cristo II (Pob.)",
  },
  {
    barangay_id: 42,
    municipality_id: 2,
    barangay_name: "Tambidao",
  },
  {
    barangay_id: 43,
    municipality_id: 2,
    barangay_name: "Teppang",
  },
  {
    barangay_id: 44,
    municipality_id: 2,
    barangay_name: "Tubburan",
  },
  {
    barangay_id: 45,
    municipality_id: 3,
    barangay_name: "Alay-Nangbabaan",
  },
  {
    barangay_id: 46,
    municipality_id: 3,
    barangay_name: "Alogoog",
  },
  {
    barangay_id: 47,
    municipality_id: 3,
    barangay_name: "Ar-arusip",
  },
  {
    barangay_id: 48,
    municipality_id: 3,
    barangay_name: "Aring",
  },
  {
    barangay_id: 49,
    municipality_id: 3,
    barangay_name: "Balbaldez",
  },
  {
    barangay_id: 50,
    municipality_id: 3,
    barangay_name: "Bato",
  },
  {
    barangay_id: 51,
    municipality_id: 3,
    barangay_name: "Camanga",
  },
  {
    barangay_id: 52,
    municipality_id: 3,
    barangay_name: "Canaan (Pob.)",
  },
  {
    barangay_id: 53,
    municipality_id: 3,
    barangay_name: "Caraitan",
  },
  {
    barangay_id: 54,
    municipality_id: 3,
    barangay_name: "Gabut Norte",
  },
  {
    barangay_id: 55,
    municipality_id: 3,
    barangay_name: "Gabut Sur",
  },
  {
    barangay_id: 56,
    municipality_id: 3,
    barangay_name: "Garreta (Pob.)",
  },
  {
    barangay_id: 66,
    municipality_id: 3,
    barangay_name: "La Virgen Milagrosa",
  },
  {
    barangay_id: 57,
    municipality_id: 3,
    barangay_name: "Labut",
  },
  {
    barangay_id: 58,
    municipality_id: 3,
    barangay_name: "Lacuben",
  },
  {
    barangay_id: 59,
    municipality_id: 3,
    barangay_name: "Lubigan",
  },
  {
    barangay_id: 60,
    municipality_id: 3,
    barangay_name: "Mabusag Norte",
  },
  {
    barangay_id: 61,
    municipality_id: 3,
    barangay_name: "Mabusag Sur",
  },
  {
    barangay_id: 62,
    municipality_id: 3,
    barangay_name: "Madupayas",
  },
  {
    barangay_id: 63,
    municipality_id: 3,
    barangay_name: "Morong",
  },
  {
    barangay_id: 64,
    municipality_id: 3,
    barangay_name: "Nagrebcan",
  },
  {
    barangay_id: 65,
    municipality_id: 3,
    barangay_name: "Napu",
  },
  {
    barangay_id: 67,
    municipality_id: 3,
    barangay_name: "Pagsanahan Norte",
  },
  {
    barangay_id: 68,
    municipality_id: 3,
    barangay_name: "Pagsanahan Sur",
  },
  {
    barangay_id: 69,
    municipality_id: 3,
    barangay_name: "Paltit",
  },
  {
    barangay_id: 70,
    municipality_id: 3,
    barangay_name: "Parang",
  },
  {
    barangay_id: 71,
    municipality_id: 3,
    barangay_name: "Pasuc",
  },
  {
    barangay_id: 72,
    municipality_id: 3,
    barangay_name: "Santa Cruz Norte",
  },
  {
    barangay_id: 73,
    municipality_id: 3,
    barangay_name: "Santa Cruz Sur",
  },
  {
    barangay_id: 74,
    municipality_id: 3,
    barangay_name: "Saud",
  },
  {
    barangay_id: 75,
    municipality_id: 3,
    barangay_name: "Turod",
  },
  {
    barangay_id: 76,
    municipality_id: 4,
    barangay_name: "Abaca",
  },
  {
    barangay_id: 77,
    municipality_id: 4,
    barangay_name: "Bacsil",
  },
  {
    barangay_id: 78,
    municipality_id: 4,
    barangay_name: "Banban",
  },
  {
    barangay_id: 79,
    municipality_id: 4,
    barangay_name: "Baruyen",
  },
  {
    barangay_id: 80,
    municipality_id: 4,
    barangay_name: "Dadaor",
  },
  {
    barangay_id: 81,
    municipality_id: 4,
    barangay_name: "Lanao",
  },
  {
    barangay_id: 82,
    municipality_id: 4,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 83,
    municipality_id: 4,
    barangay_name: "Manayon",
  },
  {
    barangay_id: 84,
    municipality_id: 4,
    barangay_name: "Masikil",
  },
  {
    barangay_id: 85,
    municipality_id: 4,
    barangay_name: "Nagbalagan",
  },
  {
    barangay_id: 86,
    municipality_id: 4,
    barangay_name: "Payac",
  },
  {
    barangay_id: 87,
    municipality_id: 4,
    barangay_name: "San Lorenzo (Pob.)",
  },
  {
    barangay_id: 88,
    municipality_id: 4,
    barangay_name: "Taguiporo",
  },
  {
    barangay_id: 89,
    municipality_id: 4,
    barangay_name: "Utol",
  },
  {
    barangay_id: 111,
    municipality_id: 5,
    barangay_name: "Ablan Pob.",
  },
  {
    barangay_id: 110,
    municipality_id: 5,
    barangay_name: "Acosta Pob.",
  },
  {
    barangay_id: 90,
    municipality_id: 5,
    barangay_name: "Aglipay (Pob.)",
  },
  {
    barangay_id: 91,
    municipality_id: 5,
    barangay_name: "Baay",
  },
  {
    barangay_id: 92,
    municipality_id: 5,
    barangay_name: "Baligat",
  },
  {
    barangay_id: 94,
    municipality_id: 5,
    barangay_name: "Baoa East",
  },
  {
    barangay_id: 95,
    municipality_id: 5,
    barangay_name: "Baoa West",
  },
  {
    barangay_id: 96,
    municipality_id: 5,
    barangay_name: "Barani (Pob.)",
  },
  {
    barangay_id: 97,
    municipality_id: 5,
    barangay_name: "Ben-agan (Pob.)",
  },
  {
    barangay_id: 98,
    municipality_id: 5,
    barangay_name: "Bil-loca",
  },
  {
    barangay_id: 99,
    municipality_id: 5,
    barangay_name: "Biningan",
  },
  {
    barangay_id: 93,
    municipality_id: 5,
    barangay_name: "Bungon",
  },
  {
    barangay_id: 100,
    municipality_id: 5,
    barangay_name: "Callaguip (Pob.)",
  },
  {
    barangay_id: 101,
    municipality_id: 5,
    barangay_name: "Camandingan",
  },
  {
    barangay_id: 102,
    municipality_id: 5,
    barangay_name: "Camguidan",
  },
  {
    barangay_id: 103,
    municipality_id: 5,
    barangay_name: "Cangrunaan (Pob.)",
  },
  {
    barangay_id: 104,
    municipality_id: 5,
    barangay_name: "Capacuan",
  },
  {
    barangay_id: 105,
    municipality_id: 5,
    barangay_name: "Caunayan (Pob.)",
  },
  {
    barangay_id: 107,
    municipality_id: 5,
    barangay_name: "Colo",
  },
  {
    barangay_id: 109,
    municipality_id: 5,
    barangay_name: "Dariwdiw",
  },
  {
    barangay_id: 112,
    municipality_id: 5,
    barangay_name: "Lacub (Pob.)",
  },
  {
    barangay_id: 113,
    municipality_id: 5,
    barangay_name: "Mabaleng",
  },
  {
    barangay_id: 114,
    municipality_id: 5,
    barangay_name: "Magnuang",
  },
  {
    barangay_id: 115,
    municipality_id: 5,
    barangay_name: "Maipalig",
  },
  {
    barangay_id: 116,
    municipality_id: 5,
    barangay_name: "Nagbacalan",
  },
  {
    barangay_id: 117,
    municipality_id: 5,
    barangay_name: "Naguirangan",
  },
  {
    barangay_id: 119,
    municipality_id: 5,
    barangay_name: "Palongpong",
  },
  {
    barangay_id: 120,
    municipality_id: 5,
    barangay_name: "Palpalicong (Pob.)",
  },
  {
    barangay_id: 121,
    municipality_id: 5,
    barangay_name: "Parangopong",
  },
  {
    barangay_id: 122,
    municipality_id: 5,
    barangay_name: "Payao",
  },
  {
    barangay_id: 108,
    municipality_id: 5,
    barangay_name: "Pimentel",
  },
  {
    barangay_id: 123,
    municipality_id: 5,
    barangay_name: "Quiling Norte",
  },
  {
    barangay_id: 124,
    municipality_id: 5,
    barangay_name: "Quiling Sur",
  },
  {
    barangay_id: 125,
    municipality_id: 5,
    barangay_name: "Quiom",
  },
  {
    barangay_id: 126,
    municipality_id: 5,
    barangay_name: "Rayuray",
  },
  {
    barangay_id: 118,
    municipality_id: 5,
    barangay_name: "Ricarte Pob.",
  },
  {
    barangay_id: 127,
    municipality_id: 5,
    barangay_name: "San Julian (Pob.)",
  },
  {
    barangay_id: 128,
    municipality_id: 5,
    barangay_name: "San Mateo",
  },
  {
    barangay_id: 129,
    municipality_id: 5,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 130,
    municipality_id: 5,
    barangay_name: "Suabit (Pob.)",
  },
  {
    barangay_id: 131,
    municipality_id: 5,
    barangay_name: "Sumader",
  },
  {
    barangay_id: 132,
    municipality_id: 5,
    barangay_name: "Tabug",
  },
  {
    barangay_id: 106,
    municipality_id: 5,
    barangay_name: "Valdez Pob.",
  },
  {
    barangay_id: 133,
    municipality_id: 6,
    barangay_name: "Ablan Sarat",
  },
  {
    barangay_id: 134,
    municipality_id: 6,
    barangay_name: "Agaga",
  },
  {
    barangay_id: 135,
    municipality_id: 6,
    barangay_name: "Bayog",
  },
  {
    barangay_id: 136,
    municipality_id: 6,
    barangay_name: "Bobon",
  },
  {
    barangay_id: 137,
    municipality_id: 6,
    barangay_name: "Buduan",
  },
  {
    barangay_id: 138,
    municipality_id: 6,
    barangay_name: "Nagsurot",
  },
  {
    barangay_id: 139,
    municipality_id: 6,
    barangay_name: "Paayas",
  },
  {
    barangay_id: 140,
    municipality_id: 6,
    barangay_name: "Pagali",
  },
  {
    barangay_id: 141,
    municipality_id: 6,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 142,
    municipality_id: 6,
    barangay_name: "Saoit",
  },
  {
    barangay_id: 143,
    municipality_id: 6,
    barangay_name: "Tanap",
  },
  {
    barangay_id: 144,
    municipality_id: 7,
    barangay_name: "Angset",
  },
  {
    barangay_id: 145,
    municipality_id: 7,
    barangay_name: "Barbaqueso (Pob.)",
  },
  {
    barangay_id: 146,
    municipality_id: 7,
    barangay_name: "Virbira",
  },
  {
    barangay_id: 147,
    municipality_id: 8,
    barangay_name: "Anggapang Norte",
  },
  {
    barangay_id: 148,
    municipality_id: 8,
    barangay_name: "Anggapang Sur",
  },
  {
    barangay_id: 149,
    municipality_id: 8,
    barangay_name: "Bimmanga",
  },
  {
    barangay_id: 150,
    municipality_id: 8,
    barangay_name: "Cabuusan",
  },
  {
    barangay_id: 151,
    municipality_id: 8,
    barangay_name: "Comcomloong",
  },
  {
    barangay_id: 152,
    municipality_id: 8,
    barangay_name: "Gaang",
  },
  {
    barangay_id: 153,
    municipality_id: 8,
    barangay_name: "Lang-ayan-Baramban",
  },
  {
    barangay_id: 154,
    municipality_id: 8,
    barangay_name: "Lioes",
  },
  {
    barangay_id: 155,
    municipality_id: 8,
    barangay_name: "Maglaoi Centro",
  },
  {
    barangay_id: 156,
    municipality_id: 8,
    barangay_name: "Maglaoi Norte",
  },
  {
    barangay_id: 157,
    municipality_id: 8,
    barangay_name: "Maglaoi Sur",
  },
  {
    barangay_id: 158,
    municipality_id: 8,
    barangay_name: "Paguludan-Salindeg",
  },
  {
    barangay_id: 159,
    municipality_id: 8,
    barangay_name: "Pangil",
  },
  {
    barangay_id: 160,
    municipality_id: 8,
    barangay_name: "Pias Norte",
  },
  {
    barangay_id: 161,
    municipality_id: 8,
    barangay_name: "Pias Sur",
  },
  {
    barangay_id: 162,
    municipality_id: 8,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 163,
    municipality_id: 8,
    barangay_name: "Poblacion II",
  },
  {
    barangay_id: 164,
    municipality_id: 8,
    barangay_name: "Salugan",
  },
  {
    barangay_id: 165,
    municipality_id: 8,
    barangay_name: "San Simeon",
  },
  {
    barangay_id: 166,
    municipality_id: 8,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 167,
    municipality_id: 8,
    barangay_name: "Tapao-Tigue",
  },
  {
    barangay_id: 168,
    municipality_id: 8,
    barangay_name: "Torre",
  },
  {
    barangay_id: 169,
    municipality_id: 8,
    barangay_name: "Victoria",
  },
  {
    barangay_id: 170,
    municipality_id: 9,
    barangay_name: "Albano (Pob.)",
  },
  {
    barangay_id: 171,
    municipality_id: 9,
    barangay_name: "Bacsil",
  },
  {
    barangay_id: 172,
    municipality_id: 9,
    barangay_name: "Bagut",
  },
  {
    barangay_id: 174,
    municipality_id: 9,
    barangay_name: "Baresbes",
  },
  {
    barangay_id: 175,
    municipality_id: 9,
    barangay_name: "Barong",
  },
  {
    barangay_id: 176,
    municipality_id: 9,
    barangay_name: "Bungcag",
  },
  {
    barangay_id: 177,
    municipality_id: 9,
    barangay_name: "Cali",
  },
  {
    barangay_id: 178,
    municipality_id: 9,
    barangay_name: "Capasan",
  },
  {
    barangay_id: 179,
    municipality_id: 9,
    barangay_name: "Dancel (Pob.)",
  },
  {
    barangay_id: 200,
    municipality_id: 9,
    barangay_name: "Elizabeth",
  },
  {
    barangay_id: 195,
    municipality_id: 9,
    barangay_name: "Espiritu",
  },
  {
    barangay_id: 180,
    municipality_id: 9,
    barangay_name: "Foz",
  },
  {
    barangay_id: 181,
    municipality_id: 9,
    barangay_name: "Guerrero (Pob.)",
  },
  {
    barangay_id: 182,
    municipality_id: 9,
    barangay_name: "Lanas",
  },
  {
    barangay_id: 183,
    municipality_id: 9,
    barangay_name: "Lumbad",
  },
  {
    barangay_id: 184,
    municipality_id: 9,
    barangay_name: "Madamba (Pob.)",
  },
  {
    barangay_id: 185,
    municipality_id: 9,
    barangay_name: "Mandaloque",
  },
  {
    barangay_id: 186,
    municipality_id: 9,
    barangay_name: "Medina",
  },
  {
    barangay_id: 173,
    municipality_id: 9,
    barangay_name: "Parado (Bangay)",
  },
  {
    barangay_id: 190,
    municipality_id: 9,
    barangay_name: "Peralta (Pob.)",
  },
  {
    barangay_id: 189,
    municipality_id: 9,
    barangay_name: "Puruganan (Pob.)",
  },
  {
    barangay_id: 191,
    municipality_id: 9,
    barangay_name: "Root",
  },
  {
    barangay_id: 192,
    municipality_id: 9,
    barangay_name: "Sagpatan",
  },
  {
    barangay_id: 193,
    municipality_id: 9,
    barangay_name: "Saludares",
  },
  {
    barangay_id: 194,
    municipality_id: 9,
    barangay_name: "San Esteban",
  },
  {
    barangay_id: 197,
    municipality_id: 9,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 188,
    municipality_id: 9,
    barangay_name: "San Marcelino",
  },
  {
    barangay_id: 199,
    municipality_id: 9,
    barangay_name: "San Marcos",
  },
  {
    barangay_id: 196,
    municipality_id: 9,
    barangay_name: "Sulquiano",
  },
  {
    barangay_id: 198,
    municipality_id: 9,
    barangay_name: "Suyo",
  },
  {
    barangay_id: 187,
    municipality_id: 9,
    barangay_name: "Ver",
  },
  {
    barangay_id: 201,
    municipality_id: 10,
    barangay_name: "Cabaritan",
  },
  {
    barangay_id: 203,
    municipality_id: 10,
    barangay_name: "Kalaw",
  },
  {
    barangay_id: 204,
    municipality_id: 10,
    barangay_name: "Quibel",
  },
  {
    barangay_id: 202,
    municipality_id: 10,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 205,
    municipality_id: 11,
    barangay_name: "Balioeg",
  },
  {
    barangay_id: 206,
    municipality_id: 11,
    barangay_name: "Bangsar",
  },
  {
    barangay_id: 207,
    municipality_id: 11,
    barangay_name: "Barbarangay",
  },
  {
    barangay_id: 224,
    municipality_id: 11,
    barangay_name: "Binacag",
  },
  {
    barangay_id: 208,
    municipality_id: 11,
    barangay_name: "Bomitog",
  },
  {
    barangay_id: 209,
    municipality_id: 11,
    barangay_name: "Bugasi",
  },
  {
    barangay_id: 210,
    municipality_id: 11,
    barangay_name: "Caestebanan",
  },
  {
    barangay_id: 211,
    municipality_id: 11,
    barangay_name: "Caribquib",
  },
  {
    barangay_id: 212,
    municipality_id: 11,
    barangay_name: "Catagtaguen",
  },
  {
    barangay_id: 213,
    municipality_id: 11,
    barangay_name: "Crispina",
  },
  {
    barangay_id: 214,
    municipality_id: 11,
    barangay_name: "Hilario (Pob.)",
  },
  {
    barangay_id: 215,
    municipality_id: 11,
    barangay_name: "Imelda",
  },
  {
    barangay_id: 216,
    municipality_id: 11,
    barangay_name: "Lorenzo (Pob.)",
  },
  {
    barangay_id: 217,
    municipality_id: 11,
    barangay_name: "Macayepyep",
  },
  {
    barangay_id: 218,
    municipality_id: 11,
    barangay_name: "Marcos (Pob.)",
  },
  {
    barangay_id: 219,
    municipality_id: 11,
    barangay_name: "Nagpatayan",
  },
  {
    barangay_id: 221,
    municipality_id: 11,
    barangay_name: "Sinamar",
  },
  {
    barangay_id: 222,
    municipality_id: 11,
    barangay_name: "Tabtabagan",
  },
  {
    barangay_id: 220,
    municipality_id: 11,
    barangay_name: "Valdez",
  },
  {
    barangay_id: 223,
    municipality_id: 11,
    barangay_name: "Valenciano (Pob.)",
  },
  {
    barangay_id: 282,
    municipality_id: 12,
    barangay_name: "Bgy. No. 1, San Lorenzo (Pob.)",
  },
  {
    barangay_id: 281,
    municipality_id: 12,
    barangay_name: "Bgy. No. 10, San Jose (Pob.)",
  },
  {
    barangay_id: 292,
    municipality_id: 12,
    barangay_name: "Bgy. No. 11, Santa Balbina (Pob.)",
  },
  {
    barangay_id: 279,
    municipality_id: 12,
    barangay_name: "Bgy. No. 12, San Isidro (Pob.)",
  },
  {
    barangay_id: 267,
    municipality_id: 12,
    barangay_name: "Bgy. No. 13, Nstra. Sra. De Visitacion (Pob.)",
  },
  {
    barangay_id: 298,
    municipality_id: 12,
    barangay_name: "Bgy. No. 14, Santo Tomas (Pob.)",
  },
  {
    barangay_id: 278,
    municipality_id: 12,
    barangay_name: "Bgy. No. 15, San Guillermo (Pob.)",
  },
  {
    barangay_id: 280,
    municipality_id: 12,
    barangay_name: "Bgy. No. 16, San Jacinto (Pob.)",
  },
  {
    barangay_id: 276,
    municipality_id: 12,
    barangay_name: "Bgy. No. 17, San Francisco (Pob.)",
  },
  {
    barangay_id: 295,
    municipality_id: 12,
    barangay_name: "Bgy. No. 19, Santa Marcela (Pob.)",
  },
  {
    barangay_id: 294,
    municipality_id: 12,
    barangay_name: "Bgy. No. 2, Santa Joaquina (Pob.)",
  },
  {
    barangay_id: 286,
    municipality_id: 12,
    barangay_name: "Bgy. No. 20, San Miguel (Pob.)",
  },
  {
    barangay_id: 287,
    municipality_id: 12,
    barangay_name: "Bgy. No. 21, San Pedro (Pob.)",
  },
  {
    barangay_id: 274,
    municipality_id: 12,
    barangay_name: "Bgy. No. 22, San Andres (Pob.)",
  },
  {
    barangay_id: 285,
    municipality_id: 12,
    barangay_name: "Bgy. No. 23, San Matias (Pob.)",
  },
  {
    barangay_id: 263,
    municipality_id: 12,
    barangay_name: "Bgy. No. 24, Nstra. Sra. De Consolacion (Pob.)",
  },
  {
    barangay_id: 293,
    municipality_id: 12,
    barangay_name: "Bgy. No. 25, Santa Cayetana (Pob.)",
  },
  {
    barangay_id: 283,
    municipality_id: 12,
    barangay_name: "Bgy. No. 26, San Marcelino (Pob.)",
  },
  {
    barangay_id: 266,
    municipality_id: 12,
    barangay_name: "Bgy. No. 27, Nstra. Sra. De Soledad (Pob.)",
  },
  {
    barangay_id: 275,
    municipality_id: 12,
    barangay_name: "Bgy. No. 28, San Bernardo (Pob.)",
  },
  {
    barangay_id: 299,
    municipality_id: 12,
    barangay_name: "Bgy. No. 29, Santo Tomas (Pob.)",
  },
  {
    barangay_id: 268,
    municipality_id: 12,
    barangay_name: "Bgy. No. 3, Nstra. Sra. Del Rosario (Pob.)",
  },
  {
    barangay_id: 300,
    municipality_id: 12,
    barangay_name: "Bgy. No. 30-A, Suyo",
  },
  {
    barangay_id: 296,
    municipality_id: 12,
    barangay_name: "Bgy. No. 30-B, Santa Maria",
  },
  {
    barangay_id: 301,
    municipality_id: 12,
    barangay_name: "Bgy. No. 31, Talingaan",
  },
  {
    barangay_id: 252,
    municipality_id: 12,
    barangay_name: "Bgy. No. 32-A, La Paz East",
  },
  {
    barangay_id: 250,
    municipality_id: 12,
    barangay_name: "Bgy. No. 32-B, La Paz West",
  },
  {
    barangay_id: 248,
    municipality_id: 12,
    barangay_name: "Bgy. No. 32-C La Paz East",
  },
  {
    barangay_id: 253,
    municipality_id: 12,
    barangay_name: "Bgy. No. 33-A, La Paz Proper",
  },
  {
    barangay_id: 249,
    municipality_id: 12,
    barangay_name: "Bgy. No. 33-B, La Paz Proper",
  },
  {
    barangay_id: 246,
    municipality_id: 12,
    barangay_name: "Bgy. No. 34-A, Gabu Norte West",
  },
  {
    barangay_id: 245,
    municipality_id: 12,
    barangay_name: "Bgy. No. 34-B, Gabu Norte East",
  },
  {
    barangay_id: 247,
    municipality_id: 12,
    barangay_name: "Bgy. No. 35, Gabu Sur",
  },
  {
    barangay_id: 226,
    municipality_id: 12,
    barangay_name: "Bgy. No. 36, Araniw",
  },
  {
    barangay_id: 237,
    municipality_id: 12,
    barangay_name: "Bgy. No. 37, Calayab",
  },
  {
    barangay_id: 256,
    municipality_id: 12,
    barangay_name: "Bgy. No. 38-A, Mangato East",
  },
  {
    barangay_id: 257,
    municipality_id: 12,
    barangay_name: "Bgy. No. 38-B, Mangato West",
  },
  {
    barangay_id: 297,
    municipality_id: 12,
    barangay_name: "Bgy. No. 39, Santa Rosa",
  },
  {
    barangay_id: 277,
    municipality_id: 12,
    barangay_name: "Bgy. No. 4, San Guillermo (Pob.)",
  },
  {
    barangay_id: 230,
    municipality_id: 12,
    barangay_name: "Bgy. No. 40, Balatong",
  },
  {
    barangay_id: 229,
    municipality_id: 12,
    barangay_name: "Bgy. No. 41, Balacad",
  },
  {
    barangay_id: 225,
    municipality_id: 12,
    barangay_name: "Bgy. No. 42, Apaya",
  },
  {
    barangay_id: 241,
    municipality_id: 12,
    barangay_name: "Bgy. No. 43, Cavit",
  },
  {
    barangay_id: 304,
    municipality_id: 12,
    barangay_name: "Bgy. No. 44, Zamboanga",
  },
  {
    barangay_id: 302,
    municipality_id: 12,
    barangay_name: "Bgy. No. 45, Tangid",
  },
  {
    barangay_id: 260,
    municipality_id: 12,
    barangay_name: "Bgy. No. 46, Nalbo",
  },
  {
    barangay_id: 232,
    municipality_id: 12,
    barangay_name: "Bgy. No. 47, Bengcag",
  },
  {
    barangay_id: 236,
    municipality_id: 12,
    barangay_name: "Bgy. No. 48-B, Cabungaan South",
  },
  {
    barangay_id: 242,
    municipality_id: 12,
    barangay_name: "Bgy. No. 49-A, Darayday",
  },
  {
    barangay_id: 270,
    municipality_id: 12,
    barangay_name: "Bgy. No. 49-B, Raraburan",
  },
  {
    barangay_id: 288,
    municipality_id: 12,
    barangay_name: "Bgy. No. 5, San Pedro (Pob.)",
  },
  {
    barangay_id: 233,
    municipality_id: 12,
    barangay_name: "Bgy. No. 50, Buttong",
  },
  {
    barangay_id: 261,
    municipality_id: 12,
    barangay_name: "Bgy. No. 51-A, Nangalisan East",
  },
  {
    barangay_id: 262,
    municipality_id: 12,
    barangay_name: "Bgy. No. 51-B, Nangalisan West",
  },
  {
    barangay_id: 284,
    municipality_id: 12,
    barangay_name: "Bgy. No. 52-A, San Mateo",
  },
  {
    barangay_id: 254,
    municipality_id: 12,
    barangay_name: "Bgy. No. 52-B, Lataag",
  },
  {
    barangay_id: 271,
    municipality_id: 12,
    barangay_name: "Bgy. No. 53, Rioeng",
  },
  {
    barangay_id: 251,
    municipality_id: 12,
    barangay_name: "Bgy. No. 54-A, Lagui-Sail",
  },
  {
    barangay_id: 238,
    municipality_id: 12,
    barangay_name: "Bgy. No. 54-B, Camangaan",
  },
  {
    barangay_id: 231,
    municipality_id: 12,
    barangay_name: "Bgy. No. 55-A, Barit-Pandan",
  },
  {
    barangay_id: 272,
    municipality_id: 12,
    barangay_name: "Bgy. No. 55-B, Salet-Bulangon",
  },
  {
    barangay_id: 303,
    municipality_id: 12,
    barangay_name: "Bgy. No. 55-C, Vira",
  },
  {
    barangay_id: 227,
    municipality_id: 12,
    barangay_name: "Bgy. No. 56-A, Bacsil North",
  },
  {
    barangay_id: 228,
    municipality_id: 12,
    barangay_name: "Bgy. No. 56-B, Bacsil South",
  },
  {
    barangay_id: 269,
    municipality_id: 12,
    barangay_name: "Bgy. No. 57, Pila",
  },
  {
    barangay_id: 239,
    municipality_id: 12,
    barangay_name: "Bgy. No. 58, Casili",
  },
  {
    barangay_id: 244,
    municipality_id: 12,
    barangay_name: "Bgy. No. 59-A, Dibua South",
  },
  {
    barangay_id: 243,
    municipality_id: 12,
    barangay_name: "Bgy. No. 59-B, Dibua North",
  },
  {
    barangay_id: 273,
    municipality_id: 12,
    barangay_name: "Bgy. No. 6, San Agustin (Pob.)",
  },
  {
    barangay_id: 234,
    municipality_id: 12,
    barangay_name: "Bgy. No. 60-A, Caaoacan",
  },
  {
    barangay_id: 255,
    municipality_id: 12,
    barangay_name: "Bgy. No. 60-B, Madiladig",
  },
  {
    barangay_id: 240,
    municipality_id: 12,
    barangay_name: "Bgy. No. 61, Cataban",
  },
  {
    barangay_id: 258,
    municipality_id: 12,
    barangay_name: "Bgy. No. 62-A, Navotas North",
  },
  {
    barangay_id: 259,
    municipality_id: 12,
    barangay_name: "Bgy. No. 62-B, Navotas South",
  },
  {
    barangay_id: 264,
    municipality_id: 12,
    barangay_name: "Bgy. No. 7-A, Nstra. Sra. De Natividad (Pob.)",
  },
  {
    barangay_id: 265,
    municipality_id: 12,
    barangay_name: "Bgy. No. 7-B, Nstra. Sra. De Natividad (Pob.)",
  },
  {
    barangay_id: 290,
    municipality_id: 12,
    barangay_name: "Bgy. No. 8, San Vicente (Pob.)",
  },
  {
    barangay_id: 291,
    municipality_id: 12,
    barangay_name: "Bgy. No. 9, Santa Angela (Pob.)",
  },
  {
    barangay_id: 289,
    municipality_id: 12,
    barangay_name: "Bry. No. 18, San Quirino (Pob.)",
  },
  {
    barangay_id: 235,
    municipality_id: 12,
    barangay_name: "Bry. No. 48-A, Cabungaan North",
  },
  {
    barangay_id: 317,
    municipality_id: 13,
    barangay_name: "Cacafean",
  },
  {
    barangay_id: 308,
    municipality_id: 13,
    barangay_name: "Daquioag",
  },
  {
    barangay_id: 307,
    municipality_id: 13,
    barangay_name: "Elizabeth",
  },
  {
    barangay_id: 309,
    municipality_id: 13,
    barangay_name: "Escoda",
  },
  {
    barangay_id: 310,
    municipality_id: 13,
    barangay_name: "Ferdinand",
  },
  {
    barangay_id: 311,
    municipality_id: 13,
    barangay_name: "Fortuna",
  },
  {
    barangay_id: 306,
    municipality_id: 13,
    barangay_name: "Imelda",
  },
  {
    barangay_id: 312,
    municipality_id: 13,
    barangay_name: "Lydia (Pob.)",
  },
  {
    barangay_id: 313,
    municipality_id: 13,
    barangay_name: "Mabuti",
  },
  {
    barangay_id: 305,
    municipality_id: 13,
    barangay_name: "Pacifico",
  },
  {
    barangay_id: 316,
    municipality_id: 13,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 315,
    municipality_id: 13,
    barangay_name: "Tabucbuc",
  },
  {
    barangay_id: 314,
    municipality_id: 13,
    barangay_name: "Valdez",
  },
  {
    barangay_id: 318,
    municipality_id: 14,
    barangay_name: "Acnam",
  },
  {
    barangay_id: 319,
    municipality_id: 14,
    barangay_name: "Barangobong",
  },
  {
    barangay_id: 320,
    municipality_id: 14,
    barangay_name: "Barikir",
  },
  {
    barangay_id: 321,
    municipality_id: 14,
    barangay_name: "Bugayong",
  },
  {
    barangay_id: 322,
    municipality_id: 14,
    barangay_name: "Cabittauran",
  },
  {
    barangay_id: 323,
    municipality_id: 14,
    barangay_name: "Caray",
  },
  {
    barangay_id: 324,
    municipality_id: 14,
    barangay_name: "Garnaden",
  },
  {
    barangay_id: 325,
    municipality_id: 14,
    barangay_name: "Naguillan",
  },
  {
    barangay_id: 326,
    municipality_id: 14,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 327,
    municipality_id: 14,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 328,
    municipality_id: 14,
    barangay_name: "Uguis",
  },
  {
    barangay_id: 329,
    municipality_id: 15,
    barangay_name: "Aggasi",
  },
  {
    barangay_id: 330,
    municipality_id: 15,
    barangay_name: "Baduang",
  },
  {
    barangay_id: 331,
    municipality_id: 15,
    barangay_name: "Balaoi",
  },
  {
    barangay_id: 332,
    municipality_id: 15,
    barangay_name: "Burayoc",
  },
  {
    barangay_id: 344,
    municipality_id: 15,
    barangay_name: "Caparispisan",
  },
  {
    barangay_id: 333,
    municipality_id: 15,
    barangay_name: "Caunayan",
  },
  {
    barangay_id: 334,
    municipality_id: 15,
    barangay_name: "Dampig",
  },
  {
    barangay_id: 335,
    municipality_id: 15,
    barangay_name: "Ligaya",
  },
  {
    barangay_id: 336,
    municipality_id: 15,
    barangay_name: "Pancian",
  },
  {
    barangay_id: 337,
    municipality_id: 15,
    barangay_name: "Pasaleng",
  },
  {
    barangay_id: 338,
    municipality_id: 15,
    barangay_name: "Poblacion 1",
  },
  {
    barangay_id: 339,
    municipality_id: 15,
    barangay_name: "Poblacion 2",
  },
  {
    barangay_id: 340,
    municipality_id: 15,
    barangay_name: "Saguigui",
  },
  {
    barangay_id: 341,
    municipality_id: 15,
    barangay_name: "Saud",
  },
  {
    barangay_id: 342,
    municipality_id: 15,
    barangay_name: "Subec",
  },
  {
    barangay_id: 343,
    municipality_id: 15,
    barangay_name: "Tarrag",
  },
  {
    barangay_id: 345,
    municipality_id: 16,
    barangay_name: "Bacsil",
  },
  {
    barangay_id: 346,
    municipality_id: 16,
    barangay_name: "Cabagoan",
  },
  {
    barangay_id: 347,
    municipality_id: 16,
    barangay_name: "Cabangaran",
  },
  {
    barangay_id: 348,
    municipality_id: 16,
    barangay_name: "Callaguip",
  },
  {
    barangay_id: 349,
    municipality_id: 16,
    barangay_name: "Cayubog",
  },
  {
    barangay_id: 350,
    municipality_id: 16,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 351,
    municipality_id: 16,
    barangay_name: "Laoa",
  },
  {
    barangay_id: 352,
    municipality_id: 16,
    barangay_name: "Masintoc",
  },
  {
    barangay_id: 353,
    municipality_id: 16,
    barangay_name: "Monte",
  },
  {
    barangay_id: 354,
    municipality_id: 16,
    barangay_name: "Mumulaan",
  },
  {
    barangay_id: 355,
    municipality_id: 16,
    barangay_name: "Nagbacalan",
  },
  {
    barangay_id: 356,
    municipality_id: 16,
    barangay_name: "Nalasin",
  },
  {
    barangay_id: 357,
    municipality_id: 16,
    barangay_name: "Nanguyudan",
  },
  {
    barangay_id: 358,
    municipality_id: 16,
    barangay_name: "Oaig-Upay-Abulao",
  },
  {
    barangay_id: 359,
    municipality_id: 16,
    barangay_name: "Pambaran",
  },
  {
    barangay_id: 360,
    municipality_id: 16,
    barangay_name: "Pannaratan (Pob.)",
  },
  {
    barangay_id: 361,
    municipality_id: 16,
    barangay_name: "Paratong",
  },
  {
    barangay_id: 362,
    municipality_id: 16,
    barangay_name: "Pasil",
  },
  {
    barangay_id: 363,
    municipality_id: 16,
    barangay_name: "Salbang (Pob.)",
  },
  {
    barangay_id: 364,
    municipality_id: 16,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 365,
    municipality_id: 16,
    barangay_name: "San Blas (Pob.)",
  },
  {
    barangay_id: 366,
    municipality_id: 16,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 367,
    municipality_id: 16,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 368,
    municipality_id: 16,
    barangay_name: "San Roque (Pob.)",
  },
  {
    barangay_id: 369,
    municipality_id: 16,
    barangay_name: "Sangladan Pob.",
  },
  {
    barangay_id: 370,
    municipality_id: 16,
    barangay_name: "Santa Rita (Pob.)",
  },
  {
    barangay_id: 371,
    municipality_id: 16,
    barangay_name: "Sideg",
  },
  {
    barangay_id: 372,
    municipality_id: 16,
    barangay_name: "Suba",
  },
  {
    barangay_id: 373,
    municipality_id: 16,
    barangay_name: "Sungadan",
  },
  {
    barangay_id: 374,
    municipality_id: 16,
    barangay_name: "Surgui",
  },
  {
    barangay_id: 375,
    municipality_id: 16,
    barangay_name: "Veronica",
  },
  {
    barangay_id: 376,
    municipality_id: 17,
    barangay_name: "Batuli",
  },
  {
    barangay_id: 377,
    municipality_id: 17,
    barangay_name: "Binsang",
  },
  {
    barangay_id: 379,
    municipality_id: 17,
    barangay_name: "Caruan",
  },
  {
    barangay_id: 380,
    municipality_id: 17,
    barangay_name: "Carusikis",
  },
  {
    barangay_id: 381,
    municipality_id: 17,
    barangay_name: "Carusipan",
  },
  {
    barangay_id: 382,
    municipality_id: 17,
    barangay_name: "Dadaeman",
  },
  {
    barangay_id: 383,
    municipality_id: 17,
    barangay_name: "Darupidip",
  },
  {
    barangay_id: 384,
    municipality_id: 17,
    barangay_name: "Davila",
  },
  {
    barangay_id: 385,
    municipality_id: 17,
    barangay_name: "Dilanis",
  },
  {
    barangay_id: 386,
    municipality_id: 17,
    barangay_name: "Dilavo",
  },
  {
    barangay_id: 387,
    municipality_id: 17,
    barangay_name: "Estancia",
  },
  {
    barangay_id: 388,
    municipality_id: 17,
    barangay_name: "Naglicuan",
  },
  {
    barangay_id: 389,
    municipality_id: 17,
    barangay_name: "Nagsanga",
  },
  {
    barangay_id: 378,
    municipality_id: 17,
    barangay_name: "Nalvo",
  },
  {
    barangay_id: 390,
    municipality_id: 17,
    barangay_name: "Ngabangab",
  },
  {
    barangay_id: 391,
    municipality_id: 17,
    barangay_name: "Pangil",
  },
  {
    barangay_id: 392,
    municipality_id: 17,
    barangay_name: "Poblacion 1",
  },
  {
    barangay_id: 393,
    municipality_id: 17,
    barangay_name: "Poblacion 2",
  },
  {
    barangay_id: 394,
    municipality_id: 17,
    barangay_name: "Poblacion 3",
  },
  {
    barangay_id: 395,
    municipality_id: 17,
    barangay_name: "Poblacion 4",
  },
  {
    barangay_id: 396,
    municipality_id: 17,
    barangay_name: "Pragata",
  },
  {
    barangay_id: 397,
    municipality_id: 17,
    barangay_name: "Puyupuyan",
  },
  {
    barangay_id: 399,
    municipality_id: 17,
    barangay_name: "Salpad",
  },
  {
    barangay_id: 400,
    municipality_id: 17,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 401,
    municipality_id: 17,
    barangay_name: "Santa Catalina",
  },
  {
    barangay_id: 402,
    municipality_id: 17,
    barangay_name: "Santa Matilde",
  },
  {
    barangay_id: 403,
    municipality_id: 17,
    barangay_name: "Sapat",
  },
  {
    barangay_id: 404,
    municipality_id: 17,
    barangay_name: "Sulbec",
  },
  {
    barangay_id: 398,
    municipality_id: 17,
    barangay_name: "Sulongan",
  },
  {
    barangay_id: 405,
    municipality_id: 17,
    barangay_name: "Surong",
  },
  {
    barangay_id: 406,
    municipality_id: 17,
    barangay_name: "Susugaen",
  },
  {
    barangay_id: 407,
    municipality_id: 17,
    barangay_name: "Tabungao",
  },
  {
    barangay_id: 408,
    municipality_id: 17,
    barangay_name: "Tadao",
  },
  {
    barangay_id: 409,
    municipality_id: 18,
    barangay_name: "Ab-abut",
  },
  {
    barangay_id: 410,
    municipality_id: 18,
    barangay_name: "Abucay",
  },
  {
    barangay_id: 411,
    municipality_id: 18,
    barangay_name: "Anao (Pob.)",
  },
  {
    barangay_id: 412,
    municipality_id: 18,
    barangay_name: "Arua-ay",
  },
  {
    barangay_id: 413,
    municipality_id: 18,
    barangay_name: "Bimmanga",
  },
  {
    barangay_id: 414,
    municipality_id: 18,
    barangay_name: "Boyboy",
  },
  {
    barangay_id: 415,
    municipality_id: 18,
    barangay_name: "Cabaroan (Pob.)",
  },
  {
    barangay_id: 416,
    municipality_id: 18,
    barangay_name: "Calambeg",
  },
  {
    barangay_id: 417,
    municipality_id: 18,
    barangay_name: "Callusa",
  },
  {
    barangay_id: 418,
    municipality_id: 18,
    barangay_name: "Dupitac",
  },
  {
    barangay_id: 419,
    municipality_id: 18,
    barangay_name: "Estancia",
  },
  {
    barangay_id: 420,
    municipality_id: 18,
    barangay_name: "Gayamat",
  },
  {
    barangay_id: 421,
    municipality_id: 18,
    barangay_name: "Lagandit",
  },
  {
    barangay_id: 422,
    municipality_id: 18,
    barangay_name: "Libnaoan",
  },
  {
    barangay_id: 423,
    municipality_id: 18,
    barangay_name: "Loing (Pob.)",
  },
  {
    barangay_id: 424,
    municipality_id: 18,
    barangay_name: "Maab-abaca",
  },
  {
    barangay_id: 425,
    municipality_id: 18,
    barangay_name: "Mangitayag",
  },
  {
    barangay_id: 426,
    municipality_id: 18,
    barangay_name: "Maruaya",
  },
  {
    barangay_id: 427,
    municipality_id: 18,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 428,
    municipality_id: 18,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 429,
    municipality_id: 18,
    barangay_name: "Sucsuquen",
  },
  {
    barangay_id: 430,
    municipality_id: 18,
    barangay_name: "Tangaoan",
  },
  {
    barangay_id: 431,
    municipality_id: 18,
    barangay_name: "Tonoton",
  },
  {
    barangay_id: 432,
    municipality_id: 19,
    barangay_name: "Aglipay",
  },
  {
    barangay_id: 433,
    municipality_id: 19,
    barangay_name: "Apatut-Lubong",
  },
  {
    barangay_id: 434,
    municipality_id: 19,
    barangay_name: "Badio",
  },
  {
    barangay_id: 435,
    municipality_id: 19,
    barangay_name: "Barbar",
  },
  {
    barangay_id: 436,
    municipality_id: 19,
    barangay_name: "Buanga",
  },
  {
    barangay_id: 437,
    municipality_id: 19,
    barangay_name: "Bulbulala",
  },
  {
    barangay_id: 438,
    municipality_id: 19,
    barangay_name: "Bungro",
  },
  {
    barangay_id: 439,
    municipality_id: 19,
    barangay_name: "Cabaroan",
  },
  {
    barangay_id: 440,
    municipality_id: 19,
    barangay_name: "Capangdanan",
  },
  {
    barangay_id: 441,
    municipality_id: 19,
    barangay_name: "Dalayap",
  },
  {
    barangay_id: 442,
    municipality_id: 19,
    barangay_name: "Darat",
  },
  {
    barangay_id: 443,
    municipality_id: 19,
    barangay_name: "Gulpeng",
  },
  {
    barangay_id: 444,
    municipality_id: 19,
    barangay_name: "Liliputen",
  },
  {
    barangay_id: 445,
    municipality_id: 19,
    barangay_name: "Lumbaan-Bicbica",
  },
  {
    barangay_id: 446,
    municipality_id: 19,
    barangay_name: "Nagtrigoan",
  },
  {
    barangay_id: 447,
    municipality_id: 19,
    barangay_name: "Pagdilao (Pob.)",
  },
  {
    barangay_id: 448,
    municipality_id: 19,
    barangay_name: "Pugaoan",
  },
  {
    barangay_id: 449,
    municipality_id: 19,
    barangay_name: "Puritac",
  },
  {
    barangay_id: 454,
    municipality_id: 19,
    barangay_name: "Puzol",
  },
  {
    barangay_id: 450,
    municipality_id: 19,
    barangay_name: "Sacritan",
  },
  {
    barangay_id: 451,
    municipality_id: 19,
    barangay_name: "Salanap",
  },
  {
    barangay_id: 452,
    municipality_id: 19,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 453,
    municipality_id: 19,
    barangay_name: "Tartarabang",
  },
  {
    barangay_id: 455,
    municipality_id: 19,
    barangay_name: "Upon",
  },
  {
    barangay_id: 456,
    municipality_id: 19,
    barangay_name: "Valbuena (Pob.)",
  },
  {
    barangay_id: 459,
    municipality_id: 20,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 460,
    municipality_id: 20,
    barangay_name: "San Baltazar (Pob.)",
  },
  {
    barangay_id: 461,
    municipality_id: 20,
    barangay_name: "San Bartolome (Pob.)",
  },
  {
    barangay_id: 462,
    municipality_id: 20,
    barangay_name: "San Cayetano (Pob.)",
  },
  {
    barangay_id: 463,
    municipality_id: 20,
    barangay_name: "San Eugenio (Pob.)",
  },
  {
    barangay_id: 464,
    municipality_id: 20,
    barangay_name: "San Fernando (Pob.)",
  },
  {
    barangay_id: 457,
    municipality_id: 20,
    barangay_name: "San Francisco (Pob.)",
  },
  {
    barangay_id: 465,
    municipality_id: 20,
    barangay_name: "San Gregorio (Pob.)",
  },
  {
    barangay_id: 466,
    municipality_id: 20,
    barangay_name: "San Guillermo",
  },
  {
    barangay_id: 458,
    municipality_id: 20,
    barangay_name: "San Ildefonso (Pob.)",
  },
  {
    barangay_id: 467,
    municipality_id: 20,
    barangay_name: "San Jose (Pob.)",
  },
  {
    barangay_id: 468,
    municipality_id: 20,
    barangay_name: "San Juan Bautista (Pob.)",
  },
  {
    barangay_id: 469,
    municipality_id: 20,
    barangay_name: "San Lorenzo",
  },
  {
    barangay_id: 470,
    municipality_id: 20,
    barangay_name: "San Lucas (Pob.)",
  },
  {
    barangay_id: 471,
    municipality_id: 20,
    barangay_name: "San Marcos",
  },
  {
    barangay_id: 472,
    municipality_id: 20,
    barangay_name: "San Miguel (Pob.)",
  },
  {
    barangay_id: 473,
    municipality_id: 20,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 474,
    municipality_id: 20,
    barangay_name: "San Paulo (Pob.)",
  },
  {
    barangay_id: 475,
    municipality_id: 20,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 476,
    municipality_id: 20,
    barangay_name: "San Rufino (Pob.)",
  },
  {
    barangay_id: 477,
    municipality_id: 20,
    barangay_name: "San Silvestre (Pob.)",
  },
  {
    barangay_id: 478,
    municipality_id: 20,
    barangay_name: "Santa Asuncion",
  },
  {
    barangay_id: 479,
    municipality_id: 20,
    barangay_name: "Santa Cecilia",
  },
  {
    barangay_id: 480,
    municipality_id: 20,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 481,
    municipality_id: 21,
    barangay_name: "San Agustin (Pob.)",
  },
  {
    barangay_id: 482,
    municipality_id: 21,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 483,
    municipality_id: 21,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 484,
    municipality_id: 21,
    barangay_name: "San Bernabe",
  },
  {
    barangay_id: 485,
    municipality_id: 21,
    barangay_name: "San Cristobal",
  },
  {
    barangay_id: 486,
    municipality_id: 21,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 487,
    municipality_id: 21,
    barangay_name: "San Francisco (Pob.)",
  },
  {
    barangay_id: 488,
    municipality_id: 21,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 489,
    municipality_id: 21,
    barangay_name: "San Joaquin (Pob.)",
  },
  {
    barangay_id: 490,
    municipality_id: 21,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 491,
    municipality_id: 21,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 492,
    municipality_id: 21,
    barangay_name: "San Leandro (Pob.)",
  },
  {
    barangay_id: 493,
    municipality_id: 21,
    barangay_name: "San Lorenzo",
  },
  {
    barangay_id: 494,
    municipality_id: 21,
    barangay_name: "San Manuel",
  },
  {
    barangay_id: 495,
    municipality_id: 21,
    barangay_name: "San Marcos",
  },
  {
    barangay_id: 496,
    municipality_id: 21,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 497,
    municipality_id: 21,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 498,
    municipality_id: 21,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 499,
    municipality_id: 21,
    barangay_name: "San Vicente (Pob.)",
  },
  {
    barangay_id: 500,
    municipality_id: 21,
    barangay_name: "Santa Barbara (Pob.)",
  },
  {
    barangay_id: 501,
    municipality_id: 21,
    barangay_name: "Santa Magdalena",
  },
  {
    barangay_id: 502,
    municipality_id: 21,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 503,
    municipality_id: 21,
    barangay_name: "Santo Santiago",
  },
  {
    barangay_id: 504,
    municipality_id: 21,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 505,
    municipality_id: 22,
    barangay_name: "Aguitap",
  },
  {
    barangay_id: 506,
    municipality_id: 22,
    barangay_name: "Bagbag",
  },
  {
    barangay_id: 507,
    municipality_id: 22,
    barangay_name: "Bagbago",
  },
  {
    barangay_id: 508,
    municipality_id: 22,
    barangay_name: "Barcelona",
  },
  {
    barangay_id: 509,
    municipality_id: 22,
    barangay_name: "Bubuos",
  },
  {
    barangay_id: 510,
    municipality_id: 22,
    barangay_name: "Capurictan",
  },
  {
    barangay_id: 511,
    municipality_id: 22,
    barangay_name: "Catangraran",
  },
  {
    barangay_id: 512,
    municipality_id: 22,
    barangay_name: "Darasdas",
  },
  {
    barangay_id: 513,
    municipality_id: 22,
    barangay_name: "Juan (Pob.)",
  },
  {
    barangay_id: 514,
    municipality_id: 22,
    barangay_name: "Laureta (Pob.)",
  },
  {
    barangay_id: 515,
    municipality_id: 22,
    barangay_name: "Lipay",
  },
  {
    barangay_id: 516,
    municipality_id: 22,
    barangay_name: "Maananteng",
  },
  {
    barangay_id: 517,
    municipality_id: 22,
    barangay_name: "Manalpac",
  },
  {
    barangay_id: 518,
    municipality_id: 22,
    barangay_name: "Mariquet",
  },
  {
    barangay_id: 519,
    municipality_id: 22,
    barangay_name: "Nagpatpatan",
  },
  {
    barangay_id: 520,
    municipality_id: 22,
    barangay_name: "Nalasin",
  },
  {
    barangay_id: 521,
    municipality_id: 22,
    barangay_name: "Puttao",
  },
  {
    barangay_id: 522,
    municipality_id: 22,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 523,
    municipality_id: 22,
    barangay_name: "San Julian",
  },
  {
    barangay_id: 524,
    municipality_id: 22,
    barangay_name: "Santa Ana",
  },
  {
    barangay_id: 525,
    municipality_id: 22,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 526,
    municipality_id: 22,
    barangay_name: "Talugtog",
  },
  {
    barangay_id: 527,
    municipality_id: 23,
    barangay_name: "Abkir",
  },
  {
    barangay_id: 544,
    municipality_id: 23,
    barangay_name: "Alejo Malasig",
  },
  {
    barangay_id: 528,
    municipality_id: 23,
    barangay_name: "Alsem",
  },
  {
    barangay_id: 529,
    municipality_id: 23,
    barangay_name: "Bago",
  },
  {
    barangay_id: 530,
    municipality_id: 23,
    barangay_name: "Bulbulala",
  },
  {
    barangay_id: 531,
    municipality_id: 23,
    barangay_name: "Cabangaran",
  },
  {
    barangay_id: 532,
    municipality_id: 23,
    barangay_name: "Cabayo",
  },
  {
    barangay_id: 533,
    municipality_id: 23,
    barangay_name: "Cabisocolan",
  },
  {
    barangay_id: 534,
    municipality_id: 23,
    barangay_name: "Canaam",
  },
  {
    barangay_id: 535,
    municipality_id: 23,
    barangay_name: "Columbia",
  },
  {
    barangay_id: 536,
    municipality_id: 23,
    barangay_name: "Dagupan",
  },
  {
    barangay_id: 538,
    municipality_id: 23,
    barangay_name: "Dipilat",
  },
  {
    barangay_id: 539,
    municipality_id: 23,
    barangay_name: "Esperanza",
  },
  {
    barangay_id: 540,
    municipality_id: 23,
    barangay_name: "Ester",
  },
  {
    barangay_id: 541,
    municipality_id: 23,
    barangay_name: "Isic Isic",
  },
  {
    barangay_id: 542,
    municipality_id: 23,
    barangay_name: "Lubnac",
  },
  {
    barangay_id: 543,
    municipality_id: 23,
    barangay_name: "Mabanbanag",
  },
  {
    barangay_id: 548,
    municipality_id: 23,
    barangay_name: "Malampa",
  },
  {
    barangay_id: 545,
    municipality_id: 23,
    barangay_name: "Manarang",
  },
  {
    barangay_id: 546,
    municipality_id: 23,
    barangay_name: "Margaay",
  },
  {
    barangay_id: 547,
    municipality_id: 23,
    barangay_name: "Namoroc",
  },
  {
    barangay_id: 549,
    municipality_id: 23,
    barangay_name: "Parparoroc",
  },
  {
    barangay_id: 550,
    municipality_id: 23,
    barangay_name: "Parut",
  },
  {
    barangay_id: 537,
    municipality_id: 23,
    barangay_name: "Pedro F. Alviar",
  },
  {
    barangay_id: 551,
    municipality_id: 23,
    barangay_name: "Salsalamagui",
  },
  {
    barangay_id: 552,
    municipality_id: 23,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 553,
    municipality_id: 23,
    barangay_name: "San Nicolas (Pob.)",
  },
  {
    barangay_id: 554,
    municipality_id: 23,
    barangay_name: "San Pedro (Pob.)",
  },
  {
    barangay_id: 555,
    municipality_id: 23,
    barangay_name: "San Ramon (Pob.)",
  },
  {
    barangay_id: 556,
    municipality_id: 23,
    barangay_name: "San Roque (Pob.)",
  },
  {
    barangay_id: 557,
    municipality_id: 23,
    barangay_name: "Santa Maria (Pob.)",
  },
  {
    barangay_id: 558,
    municipality_id: 23,
    barangay_name: "Tamdagan",
  },
  {
    barangay_id: 559,
    municipality_id: 23,
    barangay_name: "Visaya",
  },
  {
    barangay_id: 560,
    municipality_id: 24,
    barangay_name: "Alilem Daya (Pob.)",
  },
  {
    barangay_id: 561,
    municipality_id: 24,
    barangay_name: "Amilongan",
  },
  {
    barangay_id: 562,
    municipality_id: 24,
    barangay_name: "Anaao",
  },
  {
    barangay_id: 563,
    municipality_id: 24,
    barangay_name: "Apang",
  },
  {
    barangay_id: 564,
    municipality_id: 24,
    barangay_name: "Apaya",
  },
  {
    barangay_id: 565,
    municipality_id: 24,
    barangay_name: "Batbato",
  },
  {
    barangay_id: 566,
    municipality_id: 24,
    barangay_name: "Daddaay",
  },
  {
    barangay_id: 567,
    municipality_id: 24,
    barangay_name: "Dalawa",
  },
  {
    barangay_id: 568,
    municipality_id: 24,
    barangay_name: "Kiat",
  },
  {
    barangay_id: 569,
    municipality_id: 25,
    barangay_name: "Bagbagotot",
  },
  {
    barangay_id: 570,
    municipality_id: 25,
    barangay_name: "Banbanaal",
  },
  {
    barangay_id: 571,
    municipality_id: 25,
    barangay_name: "Bisangol",
  },
  {
    barangay_id: 572,
    municipality_id: 25,
    barangay_name: "Cadanglaan",
  },
  {
    barangay_id: 573,
    municipality_id: 25,
    barangay_name: "Casilagan Norte",
  },
  {
    barangay_id: 574,
    municipality_id: 25,
    barangay_name: "Casilagan Sur",
  },
  {
    barangay_id: 575,
    municipality_id: 25,
    barangay_name: "Elefante",
  },
  {
    barangay_id: 576,
    municipality_id: 25,
    barangay_name: "Guardia",
  },
  {
    barangay_id: 577,
    municipality_id: 25,
    barangay_name: "Lintic",
  },
  {
    barangay_id: 578,
    municipality_id: 25,
    barangay_name: "Lopez",
  },
  {
    barangay_id: 579,
    municipality_id: 25,
    barangay_name: "Montero",
  },
  {
    barangay_id: 580,
    municipality_id: 25,
    barangay_name: "Naguimba",
  },
  {
    barangay_id: 581,
    municipality_id: 25,
    barangay_name: "Pila",
  },
  {
    barangay_id: 582,
    municipality_id: 25,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 583,
    municipality_id: 26,
    barangay_name: "Aggay",
  },
  {
    barangay_id: 584,
    municipality_id: 26,
    barangay_name: "An-annam",
  },
  {
    barangay_id: 585,
    municipality_id: 26,
    barangay_name: "Balaleng",
  },
  {
    barangay_id: 586,
    municipality_id: 26,
    barangay_name: "Banaoang",
  },
  {
    barangay_id: 611,
    municipality_id: 26,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 612,
    municipality_id: 26,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 613,
    municipality_id: 26,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 614,
    municipality_id: 26,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 615,
    municipality_id: 26,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 616,
    municipality_id: 26,
    barangay_name: "Barangay 6 (Pob.)",
  },
  {
    barangay_id: 587,
    municipality_id: 26,
    barangay_name: "Bulag",
  },
  {
    barangay_id: 588,
    municipality_id: 26,
    barangay_name: "Buquig",
  },
  {
    barangay_id: 589,
    municipality_id: 26,
    barangay_name: "Cabalanggan",
  },
  {
    barangay_id: 590,
    municipality_id: 26,
    barangay_name: "Cabaroan",
  },
  {
    barangay_id: 591,
    municipality_id: 26,
    barangay_name: "Cabusligan",
  },
  {
    barangay_id: 592,
    municipality_id: 26,
    barangay_name: "Capangdanan",
  },
  {
    barangay_id: 593,
    municipality_id: 26,
    barangay_name: "Guimod",
  },
  {
    barangay_id: 594,
    municipality_id: 26,
    barangay_name: "Lingsat",
  },
  {
    barangay_id: 595,
    municipality_id: 26,
    barangay_name: "Malingeb",
  },
  {
    barangay_id: 596,
    municipality_id: 26,
    barangay_name: "Mira",
  },
  {
    barangay_id: 597,
    municipality_id: 26,
    barangay_name: "Naguiddayan",
  },
  {
    barangay_id: 598,
    municipality_id: 26,
    barangay_name: "Ora",
  },
  {
    barangay_id: 599,
    municipality_id: 26,
    barangay_name: "Paing",
  },
  {
    barangay_id: 600,
    municipality_id: 26,
    barangay_name: "Puspus",
  },
  {
    barangay_id: 601,
    municipality_id: 26,
    barangay_name: "Quimmarayan",
  },
  {
    barangay_id: 602,
    municipality_id: 26,
    barangay_name: "Sagneb",
  },
  {
    barangay_id: 603,
    municipality_id: 26,
    barangay_name: "Sagpat",
  },
  {
    barangay_id: 605,
    municipality_id: 26,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 606,
    municipality_id: 26,
    barangay_name: "San Julian",
  },
  {
    barangay_id: 604,
    municipality_id: 26,
    barangay_name: "San Mariano",
  },
  {
    barangay_id: 607,
    municipality_id: 26,
    barangay_name: "Sinabaan",
  },
  {
    barangay_id: 608,
    municipality_id: 26,
    barangay_name: "Taguiporo",
  },
  {
    barangay_id: 609,
    municipality_id: 26,
    barangay_name: "Taleb",
  },
  {
    barangay_id: 610,
    municipality_id: 26,
    barangay_name: "Tay-ac",
  },
  {
    barangay_id: 617,
    municipality_id: 27,
    barangay_name: "Ambugat",
  },
  {
    barangay_id: 618,
    municipality_id: 27,
    barangay_name: "Balugang",
  },
  {
    barangay_id: 619,
    municipality_id: 27,
    barangay_name: "Bangbangar",
  },
  {
    barangay_id: 620,
    municipality_id: 27,
    barangay_name: "Bessang",
  },
  {
    barangay_id: 621,
    municipality_id: 27,
    barangay_name: "Cabcaburao",
  },
  {
    barangay_id: 622,
    municipality_id: 27,
    barangay_name: "Cadacad",
  },
  {
    barangay_id: 623,
    municipality_id: 27,
    barangay_name: "Callitong",
  },
  {
    barangay_id: 624,
    municipality_id: 27,
    barangay_name: "Dayanki",
  },
  {
    barangay_id: 635,
    municipality_id: 27,
    barangay_name: "Dirdirig",
  },
  {
    barangay_id: 625,
    municipality_id: 27,
    barangay_name: "Lesseb",
  },
  {
    barangay_id: 626,
    municipality_id: 27,
    barangay_name: "Lubing",
  },
  {
    barangay_id: 627,
    municipality_id: 27,
    barangay_name: "Lucaban",
  },
  {
    barangay_id: 628,
    municipality_id: 27,
    barangay_name: "Luna",
  },
  {
    barangay_id: 629,
    municipality_id: 27,
    barangay_name: "Macaoayan",
  },
  {
    barangay_id: 630,
    municipality_id: 27,
    barangay_name: "Mambug",
  },
  {
    barangay_id: 631,
    municipality_id: 27,
    barangay_name: "Manaboc",
  },
  {
    barangay_id: 632,
    municipality_id: 27,
    barangay_name: "Mapanit",
  },
  {
    barangay_id: 634,
    municipality_id: 27,
    barangay_name: "Nagpanaoan",
  },
  {
    barangay_id: 636,
    municipality_id: 27,
    barangay_name: "Paduros",
  },
  {
    barangay_id: 637,
    municipality_id: 27,
    barangay_name: "Patac",
  },
  {
    barangay_id: 638,
    municipality_id: 27,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 633,
    municipality_id: 27,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 639,
    municipality_id: 27,
    barangay_name: "Sabangan Pinggan",
  },
  {
    barangay_id: 640,
    municipality_id: 27,
    barangay_name: "Subadi Norte",
  },
  {
    barangay_id: 641,
    municipality_id: 27,
    barangay_name: "Subadi Sur",
  },
  {
    barangay_id: 642,
    municipality_id: 27,
    barangay_name: "Taliao",
  },
  {
    barangay_id: 643,
    municipality_id: 28,
    barangay_name: "Alinaay",
  },
  {
    barangay_id: 644,
    municipality_id: 28,
    barangay_name: "Aragan",
  },
  {
    barangay_id: 645,
    municipality_id: 28,
    barangay_name: "Arnap",
  },
  {
    barangay_id: 646,
    municipality_id: 28,
    barangay_name: "Baclig (Pob.)",
  },
  {
    barangay_id: 647,
    municipality_id: 28,
    barangay_name: "Bato",
  },
  {
    barangay_id: 648,
    municipality_id: 28,
    barangay_name: "Bonifacio (Pob.)",
  },
  {
    barangay_id: 649,
    municipality_id: 28,
    barangay_name: "Bungro",
  },
  {
    barangay_id: 650,
    municipality_id: 28,
    barangay_name: "Cacadiran",
  },
  {
    barangay_id: 651,
    municipality_id: 28,
    barangay_name: "Caellayan",
  },
  {
    barangay_id: 652,
    municipality_id: 28,
    barangay_name: "Carusipan",
  },
  {
    barangay_id: 653,
    municipality_id: 28,
    barangay_name: "Catucdaan",
  },
  {
    barangay_id: 654,
    municipality_id: 28,
    barangay_name: "Cuancabal",
  },
  {
    barangay_id: 655,
    municipality_id: 28,
    barangay_name: "Cuantacla",
  },
  {
    barangay_id: 656,
    municipality_id: 28,
    barangay_name: "Daclapan",
  },
  {
    barangay_id: 657,
    municipality_id: 28,
    barangay_name: "Dardarat",
  },
  {
    barangay_id: 658,
    municipality_id: 28,
    barangay_name: "Lipit",
  },
  {
    barangay_id: 659,
    municipality_id: 28,
    barangay_name: "Maradodon",
  },
  {
    barangay_id: 660,
    municipality_id: 28,
    barangay_name: "Margaay",
  },
  {
    barangay_id: 661,
    municipality_id: 28,
    barangay_name: "Nagsantaan",
  },
  {
    barangay_id: 662,
    municipality_id: 28,
    barangay_name: "Nagsincaoan",
  },
  {
    barangay_id: 663,
    municipality_id: 28,
    barangay_name: "Namruangan",
  },
  {
    barangay_id: 664,
    municipality_id: 28,
    barangay_name: "Pila",
  },
  {
    barangay_id: 665,
    municipality_id: 28,
    barangay_name: "Pug-os",
  },
  {
    barangay_id: 666,
    municipality_id: 28,
    barangay_name: "Quezon (Pob.)",
  },
  {
    barangay_id: 667,
    municipality_id: 28,
    barangay_name: "Reppaac",
  },
  {
    barangay_id: 668,
    municipality_id: 28,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 669,
    municipality_id: 28,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 670,
    municipality_id: 28,
    barangay_name: "Sagayaden",
  },
  {
    barangay_id: 671,
    municipality_id: 28,
    barangay_name: "Salapasap",
  },
  {
    barangay_id: 672,
    municipality_id: 28,
    barangay_name: "Salomague",
  },
  {
    barangay_id: 673,
    municipality_id: 28,
    barangay_name: "Sisim",
  },
  {
    barangay_id: 674,
    municipality_id: 28,
    barangay_name: "Turod",
  },
  {
    barangay_id: 675,
    municipality_id: 28,
    barangay_name: "Turod-Patac",
  },
  {
    barangay_id: 676,
    municipality_id: 29,
    barangay_name: "Allangigan Primero",
  },
  {
    barangay_id: 677,
    municipality_id: 29,
    barangay_name: "Allangigan Segundo",
  },
  {
    barangay_id: 678,
    municipality_id: 29,
    barangay_name: "Amguid",
  },
  {
    barangay_id: 679,
    municipality_id: 29,
    barangay_name: "Ayudante",
  },
  {
    barangay_id: 680,
    municipality_id: 29,
    barangay_name: "Bagani Camposanto",
  },
  {
    barangay_id: 681,
    municipality_id: 29,
    barangay_name: "Bagani Gabor",
  },
  {
    barangay_id: 682,
    municipality_id: 29,
    barangay_name: "Bagani Tocgo",
  },
  {
    barangay_id: 683,
    municipality_id: 29,
    barangay_name: "Bagani Ubbog",
  },
  {
    barangay_id: 684,
    municipality_id: 29,
    barangay_name: "Bagar",
  },
  {
    barangay_id: 685,
    municipality_id: 29,
    barangay_name: "Balingaoan",
  },
  {
    barangay_id: 686,
    municipality_id: 29,
    barangay_name: "Bugnay",
  },
  {
    barangay_id: 687,
    municipality_id: 29,
    barangay_name: "Calaoaan",
  },
  {
    barangay_id: 688,
    municipality_id: 29,
    barangay_name: "Calongbuyan",
  },
  {
    barangay_id: 689,
    municipality_id: 29,
    barangay_name: "Caterman",
  },
  {
    barangay_id: 690,
    municipality_id: 29,
    barangay_name: "Cubcubboot",
  },
  {
    barangay_id: 691,
    municipality_id: 29,
    barangay_name: "Darapidap",
  },
  {
    barangay_id: 692,
    municipality_id: 29,
    barangay_name: "Langlangca Primero",
  },
  {
    barangay_id: 693,
    municipality_id: 29,
    barangay_name: "Langlangca Segundo",
  },
  {
    barangay_id: 694,
    municipality_id: 29,
    barangay_name: "Oaig-Daya",
  },
  {
    barangay_id: 695,
    municipality_id: 29,
    barangay_name: "Palacapac",
  },
  {
    barangay_id: 696,
    municipality_id: 29,
    barangay_name: "Paras",
  },
  {
    barangay_id: 697,
    municipality_id: 29,
    barangay_name: "Parioc Primero",
  },
  {
    barangay_id: 698,
    municipality_id: 29,
    barangay_name: "Parioc Segundo",
  },
  {
    barangay_id: 699,
    municipality_id: 29,
    barangay_name: "Patpata Primero",
  },
  {
    barangay_id: 700,
    municipality_id: 29,
    barangay_name: "Patpata Segundo",
  },
  {
    barangay_id: 701,
    municipality_id: 29,
    barangay_name: "Paypayad",
  },
  {
    barangay_id: 702,
    municipality_id: 29,
    barangay_name: "Salvador Primero",
  },
  {
    barangay_id: 703,
    municipality_id: 29,
    barangay_name: "Salvador Segundo",
  },
  {
    barangay_id: 704,
    municipality_id: 29,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 705,
    municipality_id: 29,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 706,
    municipality_id: 29,
    barangay_name: "San Antonio (Pob.)",
  },
  {
    barangay_id: 707,
    municipality_id: 29,
    barangay_name: "San Isidro (Pob.)",
  },
  {
    barangay_id: 708,
    municipality_id: 29,
    barangay_name: "San Jose (Pob.)",
  },
  {
    barangay_id: 709,
    municipality_id: 29,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 710,
    municipality_id: 29,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 711,
    municipality_id: 29,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 712,
    municipality_id: 29,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 713,
    municipality_id: 29,
    barangay_name: "Tablac",
  },
  {
    barangay_id: 714,
    municipality_id: 29,
    barangay_name: "Talogtog",
  },
  {
    barangay_id: 715,
    municipality_id: 29,
    barangay_name: "Tamurong Primero",
  },
  {
    barangay_id: 716,
    municipality_id: 29,
    barangay_name: "Tamurong Segundo",
  },
  {
    barangay_id: 717,
    municipality_id: 29,
    barangay_name: "Villarica",
  },
  {
    barangay_id: 718,
    municipality_id: 30,
    barangay_name: "Anonang Mayor",
  },
  {
    barangay_id: 719,
    municipality_id: 30,
    barangay_name: "Anonang Menor",
  },
  {
    barangay_id: 720,
    municipality_id: 30,
    barangay_name: "Baggoc",
  },
  {
    barangay_id: 721,
    municipality_id: 30,
    barangay_name: "Callaguip",
  },
  {
    barangay_id: 722,
    municipality_id: 30,
    barangay_name: "Caparacadan",
  },
  {
    barangay_id: 733,
    municipality_id: 30,
    barangay_name: "Don Alejandro Quirolgico (Pob.)",
  },
  {
    barangay_id: 729,
    municipality_id: 30,
    barangay_name: "Don Dimas Querubin (Pob.)",
  },
  {
    barangay_id: 734,
    municipality_id: 30,
    barangay_name: "Don Lorenzo Querubin (Pob.)",
  },
  {
    barangay_id: 723,
    municipality_id: 30,
    barangay_name: "Fuerte",
  },
  {
    barangay_id: 724,
    municipality_id: 30,
    barangay_name: "Manangat",
  },
  {
    barangay_id: 725,
    municipality_id: 30,
    barangay_name: "Naguilian",
  },
  {
    barangay_id: 726,
    municipality_id: 30,
    barangay_name: "Nansuagao",
  },
  {
    barangay_id: 727,
    municipality_id: 30,
    barangay_name: "Pandan",
  },
  {
    barangay_id: 731,
    municipality_id: 30,
    barangay_name: "Pantay Tamurong",
  },
  {
    barangay_id: 728,
    municipality_id: 30,
    barangay_name: "Pantay-Quitiquit",
  },
  {
    barangay_id: 730,
    municipality_id: 30,
    barangay_name: "Puro",
  },
  {
    barangay_id: 732,
    municipality_id: 30,
    barangay_name: "Villamar",
  },
  {
    barangay_id: 735,
    municipality_id: 31,
    barangay_name: "Aluling",
  },
  {
    barangay_id: 736,
    municipality_id: 31,
    barangay_name: "Comillas North",
  },
  {
    barangay_id: 737,
    municipality_id: 31,
    barangay_name: "Comillas South",
  },
  {
    barangay_id: 738,
    municipality_id: 31,
    barangay_name: "Concepcion (Pob.)",
  },
  {
    barangay_id: 739,
    municipality_id: 31,
    barangay_name: "Dinwede East",
  },
  {
    barangay_id: 740,
    municipality_id: 31,
    barangay_name: "Dinwede West",
  },
  {
    barangay_id: 741,
    municipality_id: 31,
    barangay_name: "Libang",
  },
  {
    barangay_id: 747,
    municipality_id: 31,
    barangay_name: "Malaya",
  },
  {
    barangay_id: 742,
    municipality_id: 31,
    barangay_name: "Pilipil",
  },
  {
    barangay_id: 743,
    municipality_id: 31,
    barangay_name: "Remedios",
  },
  {
    barangay_id: 744,
    municipality_id: 31,
    barangay_name: "Rosario (Pob.)",
  },
  {
    barangay_id: 745,
    municipality_id: 31,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 746,
    municipality_id: 31,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 748,
    municipality_id: 32,
    barangay_name: "Abaya",
  },
  {
    barangay_id: 749,
    municipality_id: 32,
    barangay_name: "Baracbac",
  },
  {
    barangay_id: 750,
    municipality_id: 32,
    barangay_name: "Bidbiday",
  },
  {
    barangay_id: 751,
    municipality_id: 32,
    barangay_name: "Bitong",
  },
  {
    barangay_id: 752,
    municipality_id: 32,
    barangay_name: "Borobor",
  },
  {
    barangay_id: 753,
    municipality_id: 32,
    barangay_name: "Calimugtong",
  },
  {
    barangay_id: 754,
    municipality_id: 32,
    barangay_name: "Calongbuyan",
  },
  {
    barangay_id: 755,
    municipality_id: 32,
    barangay_name: "Calumbaya",
  },
  {
    barangay_id: 756,
    municipality_id: 32,
    barangay_name: "Daldagan",
  },
  {
    barangay_id: 757,
    municipality_id: 32,
    barangay_name: "Kilang",
  },
  {
    barangay_id: 758,
    municipality_id: 32,
    barangay_name: "Legaspi",
  },
  {
    barangay_id: 759,
    municipality_id: 32,
    barangay_name: "Mabayag",
  },
  {
    barangay_id: 760,
    municipality_id: 32,
    barangay_name: "Matanubong",
  },
  {
    barangay_id: 761,
    municipality_id: 32,
    barangay_name: "Mckinley",
  },
  {
    barangay_id: 762,
    municipality_id: 32,
    barangay_name: "Nagsingcaoan",
  },
  {
    barangay_id: 763,
    municipality_id: 32,
    barangay_name: "Oaig-Daya",
  },
  {
    barangay_id: 764,
    municipality_id: 32,
    barangay_name: "Pagangpang",
  },
  {
    barangay_id: 765,
    municipality_id: 32,
    barangay_name: "Patac",
  },
  {
    barangay_id: 766,
    municipality_id: 32,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 767,
    municipality_id: 32,
    barangay_name: "Rubio",
  },
  {
    barangay_id: 768,
    municipality_id: 32,
    barangay_name: "Sabangan-Bato",
  },
  {
    barangay_id: 769,
    municipality_id: 32,
    barangay_name: "Sacaang",
  },
  {
    barangay_id: 770,
    municipality_id: 32,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 771,
    municipality_id: 32,
    barangay_name: "Sapang",
  },
  {
    barangay_id: 772,
    municipality_id: 33,
    barangay_name: "Alfonso",
  },
  {
    barangay_id: 773,
    municipality_id: 33,
    barangay_name: "Bussot",
  },
  {
    barangay_id: 774,
    municipality_id: 33,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 775,
    municipality_id: 33,
    barangay_name: "Dapdappig",
  },
  {
    barangay_id: 776,
    municipality_id: 33,
    barangay_name: "Matue-Butarag",
  },
  {
    barangay_id: 777,
    municipality_id: 33,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 778,
    municipality_id: 33,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 779,
    municipality_id: 34,
    barangay_name: "Banucal",
  },
  {
    barangay_id: 780,
    municipality_id: 34,
    barangay_name: "Bequi-Walin",
  },
  {
    barangay_id: 781,
    municipality_id: 34,
    barangay_name: "Bugui",
  },
  {
    barangay_id: 782,
    municipality_id: 34,
    barangay_name: "Calungbuyan",
  },
  {
    barangay_id: 783,
    municipality_id: 34,
    barangay_name: "Carcarabasa",
  },
  {
    barangay_id: 784,
    municipality_id: 34,
    barangay_name: "Labut",
  },
  {
    barangay_id: 785,
    municipality_id: 34,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 786,
    municipality_id: 34,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 787,
    municipality_id: 34,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 788,
    municipality_id: 34,
    barangay_name: "Suysuyan",
  },
  {
    barangay_id: 789,
    municipality_id: 34,
    barangay_name: "Tay-ac",
  },
  {
    barangay_id: 790,
    municipality_id: 35,
    barangay_name: "Alangan",
  },
  {
    barangay_id: 791,
    municipality_id: 35,
    barangay_name: "Bacar",
  },
  {
    barangay_id: 792,
    municipality_id: 35,
    barangay_name: "Barbarit",
  },
  {
    barangay_id: 793,
    municipality_id: 35,
    barangay_name: "Bungro",
  },
  {
    barangay_id: 794,
    municipality_id: 35,
    barangay_name: "Cabaroan",
  },
  {
    barangay_id: 795,
    municipality_id: 35,
    barangay_name: "Cadanglaan",
  },
  {
    barangay_id: 796,
    municipality_id: 35,
    barangay_name: "Caraisan",
  },
  {
    barangay_id: 797,
    municipality_id: 35,
    barangay_name: "Dacutan",
  },
  {
    barangay_id: 798,
    municipality_id: 35,
    barangay_name: "Labut",
  },
  {
    barangay_id: 799,
    municipality_id: 35,
    barangay_name: "Maas-asin",
  },
  {
    barangay_id: 800,
    municipality_id: 35,
    barangay_name: "Macatcatud",
  },
  {
    barangay_id: 802,
    municipality_id: 35,
    barangay_name: "Manzante",
  },
  {
    barangay_id: 803,
    municipality_id: 35,
    barangay_name: "Maratudo",
  },
  {
    barangay_id: 804,
    municipality_id: 35,
    barangay_name: "Miramar",
  },
  {
    barangay_id: 801,
    municipality_id: 35,
    barangay_name: "Namalpalan",
  },
  {
    barangay_id: 805,
    municipality_id: 35,
    barangay_name: "Napo",
  },
  {
    barangay_id: 806,
    municipality_id: 35,
    barangay_name: "Pagsanaan Norte",
  },
  {
    barangay_id: 807,
    municipality_id: 35,
    barangay_name: "Pagsanaan Sur",
  },
  {
    barangay_id: 808,
    municipality_id: 35,
    barangay_name: "Panay Norte",
  },
  {
    barangay_id: 809,
    municipality_id: 35,
    barangay_name: "Panay Sur",
  },
  {
    barangay_id: 810,
    municipality_id: 35,
    barangay_name: "Patong",
  },
  {
    barangay_id: 811,
    municipality_id: 35,
    barangay_name: "Puro",
  },
  {
    barangay_id: 812,
    municipality_id: 35,
    barangay_name: "San Basilio (Pob.)",
  },
  {
    barangay_id: 813,
    municipality_id: 35,
    barangay_name: "San Clemente (Pob.)",
  },
  {
    barangay_id: 814,
    municipality_id: 35,
    barangay_name: "San Julian (Pob.)",
  },
  {
    barangay_id: 815,
    municipality_id: 35,
    barangay_name: "San Lucas (Pob.)",
  },
  {
    barangay_id: 816,
    municipality_id: 35,
    barangay_name: "San Ramon (Pob.)",
  },
  {
    barangay_id: 817,
    municipality_id: 35,
    barangay_name: "San Vicente (Pob.)",
  },
  {
    barangay_id: 818,
    municipality_id: 35,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 819,
    municipality_id: 35,
    barangay_name: "Sarsaracat",
  },
  {
    barangay_id: 820,
    municipality_id: 36,
    barangay_name: "Balaweg",
  },
  {
    barangay_id: 821,
    municipality_id: 36,
    barangay_name: "Bandril",
  },
  {
    barangay_id: 822,
    municipality_id: 36,
    barangay_name: "Bantugo",
  },
  {
    barangay_id: 823,
    municipality_id: 36,
    barangay_name: "Cadacad",
  },
  {
    barangay_id: 824,
    municipality_id: 36,
    barangay_name: "Casilagan",
  },
  {
    barangay_id: 825,
    municipality_id: 36,
    barangay_name: "Casocos",
  },
  {
    barangay_id: 826,
    municipality_id: 36,
    barangay_name: "Lapting",
  },
  {
    barangay_id: 827,
    municipality_id: 36,
    barangay_name: "Mapisi",
  },
  {
    barangay_id: 828,
    municipality_id: 36,
    barangay_name: "Mission",
  },
  {
    barangay_id: 829,
    municipality_id: 36,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 830,
    municipality_id: 36,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 831,
    municipality_id: 36,
    barangay_name: "Taleb",
  },
  {
    barangay_id: 832,
    municipality_id: 37,
    barangay_name: "Abuor",
  },
  {
    barangay_id: 833,
    municipality_id: 37,
    barangay_name: "Ambulogan",
  },
  {
    barangay_id: 834,
    municipality_id: 37,
    barangay_name: "Aquib",
  },
  {
    barangay_id: 835,
    municipality_id: 37,
    barangay_name: "Banglayan",
  },
  {
    barangay_id: 865,
    municipality_id: 37,
    barangay_name: "Bantay Abot",
  },
  {
    barangay_id: 836,
    municipality_id: 37,
    barangay_name: "Bulanos",
  },
  {
    barangay_id: 837,
    municipality_id: 37,
    barangay_name: "Cadacad",
  },
  {
    barangay_id: 838,
    municipality_id: 37,
    barangay_name: "Cagayungan",
  },
  {
    barangay_id: 839,
    municipality_id: 37,
    barangay_name: "Camarao",
  },
  {
    barangay_id: 840,
    municipality_id: 37,
    barangay_name: "Casilagan",
  },
  {
    barangay_id: 841,
    municipality_id: 37,
    barangay_name: "Codoog",
  },
  {
    barangay_id: 842,
    municipality_id: 37,
    barangay_name: "Dasay",
  },
  {
    barangay_id: 843,
    municipality_id: 37,
    barangay_name: "Dinalaoan",
  },
  {
    barangay_id: 844,
    municipality_id: 37,
    barangay_name: "Estancia",
  },
  {
    barangay_id: 845,
    municipality_id: 37,
    barangay_name: "Lanipao",
  },
  {
    barangay_id: 846,
    municipality_id: 37,
    barangay_name: "Lungog",
  },
  {
    barangay_id: 847,
    municipality_id: 37,
    barangay_name: "Margaay",
  },
  {
    barangay_id: 848,
    municipality_id: 37,
    barangay_name: "Marozo",
  },
  {
    barangay_id: 849,
    municipality_id: 37,
    barangay_name: "Naguneg",
  },
  {
    barangay_id: 850,
    municipality_id: 37,
    barangay_name: "Orence",
  },
  {
    barangay_id: 851,
    municipality_id: 37,
    barangay_name: "Pantoc",
  },
  {
    barangay_id: 852,
    municipality_id: 37,
    barangay_name: "Paratong",
  },
  {
    barangay_id: 853,
    municipality_id: 37,
    barangay_name: "Parparia",
  },
  {
    barangay_id: 854,
    municipality_id: 37,
    barangay_name: "Quinarayan",
  },
  {
    barangay_id: 855,
    municipality_id: 37,
    barangay_name: "Rivadavia",
  },
  {
    barangay_id: 856,
    municipality_id: 37,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 857,
    municipality_id: 37,
    barangay_name: "San Jose (Pob.)",
  },
  {
    barangay_id: 858,
    municipality_id: 37,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 859,
    municipality_id: 37,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 860,
    municipality_id: 37,
    barangay_name: "Santa Lucia (Pob.)",
  },
  {
    barangay_id: 861,
    municipality_id: 37,
    barangay_name: "Sarmingan",
  },
  {
    barangay_id: 862,
    municipality_id: 37,
    barangay_name: "Sucoc",
  },
  {
    barangay_id: 863,
    municipality_id: 37,
    barangay_name: "Sulvec",
  },
  {
    barangay_id: 864,
    municipality_id: 37,
    barangay_name: "Turod",
  },
  {
    barangay_id: 866,
    municipality_id: 38,
    barangay_name: "Banoen",
  },
  {
    barangay_id: 867,
    municipality_id: 38,
    barangay_name: "Cayus",
  },
  {
    barangay_id: 874,
    municipality_id: 38,
    barangay_name: "Lamag",
  },
  {
    barangay_id: 872,
    municipality_id: 38,
    barangay_name: "Legleg (Pob.)",
  },
  {
    barangay_id: 869,
    municipality_id: 38,
    barangay_name: "Malideg",
  },
  {
    barangay_id: 870,
    municipality_id: 38,
    barangay_name: "Namitpit",
  },
  {
    barangay_id: 871,
    municipality_id: 38,
    barangay_name: "Patiacan",
  },
  {
    barangay_id: 868,
    municipality_id: 38,
    barangay_name: "Patungcaleo",
  },
  {
    barangay_id: 873,
    municipality_id: 38,
    barangay_name: "Suagayan",
  },
  {
    barangay_id: 875,
    municipality_id: 39,
    barangay_name: "Atabay",
  },
  {
    barangay_id: 877,
    municipality_id: 39,
    barangay_name: "Balidbid",
  },
  {
    barangay_id: 878,
    municipality_id: 39,
    barangay_name: "Baluarte",
  },
  {
    barangay_id: 879,
    municipality_id: 39,
    barangay_name: "Baybayading",
  },
  {
    barangay_id: 880,
    municipality_id: 39,
    barangay_name: "Boguibog",
  },
  {
    barangay_id: 881,
    municipality_id: 39,
    barangay_name: "Bulala-Leguey",
  },
  {
    barangay_id: 876,
    municipality_id: 39,
    barangay_name: "Calangcuasan",
  },
  {
    barangay_id: 883,
    municipality_id: 39,
    barangay_name: "Culiong",
  },
  {
    barangay_id: 884,
    municipality_id: 39,
    barangay_name: "Dinaratan",
  },
  {
    barangay_id: 882,
    municipality_id: 39,
    barangay_name: "Kaliwakiw",
  },
  {
    barangay_id: 885,
    municipality_id: 39,
    barangay_name: "Kinmarin",
  },
  {
    barangay_id: 886,
    municipality_id: 39,
    barangay_name: "Lucbuban",
  },
  {
    barangay_id: 887,
    municipality_id: 39,
    barangay_name: "Madarang",
  },
  {
    barangay_id: 888,
    municipality_id: 39,
    barangay_name: "Maligcong",
  },
  {
    barangay_id: 889,
    municipality_id: 39,
    barangay_name: "Pias",
  },
  {
    barangay_id: 890,
    municipality_id: 39,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 891,
    municipality_id: 39,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 892,
    municipality_id: 39,
    barangay_name: "San Gaspar",
  },
  {
    barangay_id: 893,
    municipality_id: 39,
    barangay_name: "San Tiburcio",
  },
  {
    barangay_id: 894,
    municipality_id: 39,
    barangay_name: "Sorioan",
  },
  {
    barangay_id: 895,
    municipality_id: 39,
    barangay_name: "Ubbog",
  },
  {
    barangay_id: 896,
    municipality_id: 40,
    barangay_name: "Cabaroan (Pob.)",
  },
  {
    barangay_id: 897,
    municipality_id: 40,
    barangay_name: "Kalumsing",
  },
  {
    barangay_id: 898,
    municipality_id: 40,
    barangay_name: "Lancuas",
  },
  {
    barangay_id: 899,
    municipality_id: 40,
    barangay_name: "Matibuey",
  },
  {
    barangay_id: 900,
    municipality_id: 40,
    barangay_name: "Paltoc",
  },
  {
    barangay_id: 903,
    municipality_id: 40,
    barangay_name: "San Miliano",
  },
  {
    barangay_id: 901,
    municipality_id: 40,
    barangay_name: "Sibsibbu",
  },
  {
    barangay_id: 902,
    municipality_id: 40,
    barangay_name: "Tiagan",
  },
  {
    barangay_id: 904,
    municipality_id: 41,
    barangay_name: "Ansad",
  },
  {
    barangay_id: 905,
    municipality_id: 41,
    barangay_name: "Apatot",
  },
  {
    barangay_id: 906,
    municipality_id: 41,
    barangay_name: "Bateria",
  },
  {
    barangay_id: 907,
    municipality_id: 41,
    barangay_name: "Cabaroan",
  },
  {
    barangay_id: 908,
    municipality_id: 41,
    barangay_name: "Cappa-cappa",
  },
  {
    barangay_id: 909,
    municipality_id: 41,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 910,
    municipality_id: 41,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 911,
    municipality_id: 41,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 912,
    municipality_id: 41,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 913,
    municipality_id: 41,
    barangay_name: "Villa Quirino",
  },
  {
    barangay_id: 914,
    municipality_id: 42,
    barangay_name: "Arnap",
  },
  {
    barangay_id: 915,
    municipality_id: 42,
    barangay_name: "Bahet",
  },
  {
    barangay_id: 916,
    municipality_id: 42,
    barangay_name: "Belen",
  },
  {
    barangay_id: 917,
    municipality_id: 42,
    barangay_name: "Bungro",
  },
  {
    barangay_id: 919,
    municipality_id: 42,
    barangay_name: "Busiing Norte",
  },
  {
    barangay_id: 918,
    municipality_id: 42,
    barangay_name: "Busiing Sur",
  },
  {
    barangay_id: 920,
    municipality_id: 42,
    barangay_name: "Dongalo",
  },
  {
    barangay_id: 921,
    municipality_id: 42,
    barangay_name: "Gongogong",
  },
  {
    barangay_id: 922,
    municipality_id: 42,
    barangay_name: "Iboy",
  },
  {
    barangay_id: 926,
    municipality_id: 42,
    barangay_name: "Kinamantirisan",
  },
  {
    barangay_id: 923,
    municipality_id: 42,
    barangay_name: "Otol-Patac",
  },
  {
    barangay_id: 924,
    municipality_id: 42,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 925,
    municipality_id: 42,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 927,
    municipality_id: 42,
    barangay_name: "Sagneb",
  },
  {
    barangay_id: 928,
    municipality_id: 42,
    barangay_name: "Sagsagat",
  },
  {
    barangay_id: 960,
    municipality_id: 43,
    barangay_name: "Asilang",
  },
  {
    barangay_id: 929,
    municipality_id: 43,
    barangay_name: "Bacsil",
  },
  {
    barangay_id: 930,
    municipality_id: 43,
    barangay_name: "Baliw",
  },
  {
    barangay_id: 931,
    municipality_id: 43,
    barangay_name: "Bannuar (Pob.)",
  },
  {
    barangay_id: 932,
    municipality_id: 43,
    barangay_name: "Barbar",
  },
  {
    barangay_id: 933,
    municipality_id: 43,
    barangay_name: "Cabanglotan",
  },
  {
    barangay_id: 934,
    municipality_id: 43,
    barangay_name: "Cacandongan",
  },
  {
    barangay_id: 935,
    municipality_id: 43,
    barangay_name: "Camanggaan",
  },
  {
    barangay_id: 936,
    municipality_id: 43,
    barangay_name: "Camindoroan",
  },
  {
    barangay_id: 937,
    municipality_id: 43,
    barangay_name: "Caronoan",
  },
  {
    barangay_id: 938,
    municipality_id: 43,
    barangay_name: "Darao",
  },
  {
    barangay_id: 939,
    municipality_id: 43,
    barangay_name: "Dardarat",
  },
  {
    barangay_id: 940,
    municipality_id: 43,
    barangay_name: "Guimod Norte",
  },
  {
    barangay_id: 941,
    municipality_id: 43,
    barangay_name: "Guimod Sur",
  },
  {
    barangay_id: 942,
    municipality_id: 43,
    barangay_name: "Immayos Norte",
  },
  {
    barangay_id: 943,
    municipality_id: 43,
    barangay_name: "Immayos Sur",
  },
  {
    barangay_id: 944,
    municipality_id: 43,
    barangay_name: "Labnig",
  },
  {
    barangay_id: 945,
    municipality_id: 43,
    barangay_name: "Lapting",
  },
  {
    barangay_id: 946,
    municipality_id: 43,
    barangay_name: "Lira (Pob.)",
  },
  {
    barangay_id: 947,
    municipality_id: 43,
    barangay_name: "Malamin",
  },
  {
    barangay_id: 948,
    municipality_id: 43,
    barangay_name: "Muraya",
  },
  {
    barangay_id: 949,
    municipality_id: 43,
    barangay_name: "Nagsabaran",
  },
  {
    barangay_id: 950,
    municipality_id: 43,
    barangay_name: "Nagsupotan",
  },
  {
    barangay_id: 951,
    municipality_id: 43,
    barangay_name: "Pandayan (Pob.)",
  },
  {
    barangay_id: 952,
    municipality_id: 43,
    barangay_name: "Refaro",
  },
  {
    barangay_id: 953,
    municipality_id: 43,
    barangay_name: "Resurreccion (Pob.)",
  },
  {
    barangay_id: 954,
    municipality_id: 43,
    barangay_name: "Sabangan",
  },
  {
    barangay_id: 955,
    municipality_id: 43,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 956,
    municipality_id: 43,
    barangay_name: "Saoang",
  },
  {
    barangay_id: 957,
    municipality_id: 43,
    barangay_name: "Solotsolot",
  },
  {
    barangay_id: 958,
    municipality_id: 43,
    barangay_name: "Sunggiam",
  },
  {
    barangay_id: 959,
    municipality_id: 43,
    barangay_name: "Surngit",
  },
  {
    barangay_id: 961,
    municipality_id: 44,
    barangay_name: "Bantaoay",
  },
  {
    barangay_id: 962,
    municipality_id: 44,
    barangay_name: "Bayubay Norte",
  },
  {
    barangay_id: 963,
    municipality_id: 44,
    barangay_name: "Bayubay Sur",
  },
  {
    barangay_id: 964,
    municipality_id: 44,
    barangay_name: "Lubong",
  },
  {
    barangay_id: 965,
    municipality_id: 44,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 966,
    municipality_id: 44,
    barangay_name: "Pudoc",
  },
  {
    barangay_id: 967,
    municipality_id: 44,
    barangay_name: "San Sebastian",
  },
  {
    barangay_id: 968,
    municipality_id: 45,
    barangay_name: "Ampandula",
  },
  {
    barangay_id: 969,
    municipality_id: 45,
    barangay_name: "Banaoang",
  },
  {
    barangay_id: 970,
    municipality_id: 45,
    barangay_name: "Basug",
  },
  {
    barangay_id: 971,
    municipality_id: 45,
    barangay_name: "Bucalag",
  },
  {
    barangay_id: 972,
    municipality_id: 45,
    barangay_name: "Cabangaran",
  },
  {
    barangay_id: 973,
    municipality_id: 45,
    barangay_name: "Calungboyan",
  },
  {
    barangay_id: 974,
    municipality_id: 45,
    barangay_name: "Casiber",
  },
  {
    barangay_id: 975,
    municipality_id: 45,
    barangay_name: "Dammay",
  },
  {
    barangay_id: 976,
    municipality_id: 45,
    barangay_name: "Labut Norte",
  },
  {
    barangay_id: 977,
    municipality_id: 45,
    barangay_name: "Labut Sur",
  },
  {
    barangay_id: 979,
    municipality_id: 45,
    barangay_name: "Mabilbila Norte",
  },
  {
    barangay_id: 978,
    municipality_id: 45,
    barangay_name: "Mabilbila Sur",
  },
  {
    barangay_id: 980,
    municipality_id: 45,
    barangay_name: "Magsaysay District (Pob.)",
  },
  {
    barangay_id: 981,
    municipality_id: 45,
    barangay_name: "Manueva",
  },
  {
    barangay_id: 982,
    municipality_id: 45,
    barangay_name: "Marcos (Pob.)",
  },
  {
    barangay_id: 983,
    municipality_id: 45,
    barangay_name: "Nagpanaoan",
  },
  {
    barangay_id: 984,
    municipality_id: 45,
    barangay_name: "Namalangan",
  },
  {
    barangay_id: 985,
    municipality_id: 45,
    barangay_name: "Oribi",
  },
  {
    barangay_id: 986,
    municipality_id: 45,
    barangay_name: "Pasungol",
  },
  {
    barangay_id: 987,
    municipality_id: 45,
    barangay_name: "Quezon (Pob.)",
  },
  {
    barangay_id: 988,
    municipality_id: 45,
    barangay_name: "Quirino (Pob.)",
  },
  {
    barangay_id: 989,
    municipality_id: 45,
    barangay_name: "Rancho",
  },
  {
    barangay_id: 990,
    municipality_id: 45,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 991,
    municipality_id: 45,
    barangay_name: "Sacuyya Norte",
  },
  {
    barangay_id: 992,
    municipality_id: 45,
    barangay_name: "Sacuyya Sur",
  },
  {
    barangay_id: 993,
    municipality_id: 45,
    barangay_name: "Tabucolan",
  },
  {
    barangay_id: 994,
    municipality_id: 46,
    barangay_name: "Cabaroan",
  },
  {
    barangay_id: 995,
    municipality_id: 46,
    barangay_name: "Cabittaogan",
  },
  {
    barangay_id: 996,
    municipality_id: 46,
    barangay_name: "Cabuloan",
  },
  {
    barangay_id: 997,
    municipality_id: 46,
    barangay_name: "Pangada",
  },
  {
    barangay_id: 998,
    municipality_id: 46,
    barangay_name: "Paratong",
  },
  {
    barangay_id: 999,
    municipality_id: 46,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1000,
    municipality_id: 46,
    barangay_name: "Sinabaan",
  },
  {
    barangay_id: 1001,
    municipality_id: 46,
    barangay_name: "Subec",
  },
  {
    barangay_id: 1002,
    municipality_id: 46,
    barangay_name: "Tamorong",
  },
  {
    barangay_id: 1003,
    municipality_id: 47,
    barangay_name: "Amarao",
  },
  {
    barangay_id: 1004,
    municipality_id: 47,
    barangay_name: "Babayoan",
  },
  {
    barangay_id: 1005,
    municipality_id: 47,
    barangay_name: "Bacsayan",
  },
  {
    barangay_id: 1006,
    municipality_id: 47,
    barangay_name: "Banay",
  },
  {
    barangay_id: 1007,
    municipality_id: 47,
    barangay_name: "Bayugao Este",
  },
  {
    barangay_id: 1008,
    municipality_id: 47,
    barangay_name: "Bayugao Oeste",
  },
  {
    barangay_id: 1009,
    municipality_id: 47,
    barangay_name: "Besalan",
  },
  {
    barangay_id: 1010,
    municipality_id: 47,
    barangay_name: "Bugbuga",
  },
  {
    barangay_id: 1011,
    municipality_id: 47,
    barangay_name: "Calaoaan",
  },
  {
    barangay_id: 1012,
    municipality_id: 47,
    barangay_name: "Camanggaan",
  },
  {
    barangay_id: 1013,
    municipality_id: 47,
    barangay_name: "Candalican",
  },
  {
    barangay_id: 1014,
    municipality_id: 47,
    barangay_name: "Capariaan",
  },
  {
    barangay_id: 1015,
    municipality_id: 47,
    barangay_name: "Casilagan",
  },
  {
    barangay_id: 1016,
    municipality_id: 47,
    barangay_name: "Coscosnong",
  },
  {
    barangay_id: 1017,
    municipality_id: 47,
    barangay_name: "Daligan",
  },
  {
    barangay_id: 1018,
    municipality_id: 47,
    barangay_name: "Dili",
  },
  {
    barangay_id: 1019,
    municipality_id: 47,
    barangay_name: "Gabor Norte",
  },
  {
    barangay_id: 1020,
    municipality_id: 47,
    barangay_name: "Gabor Sur",
  },
  {
    barangay_id: 1021,
    municipality_id: 47,
    barangay_name: "Lalong",
  },
  {
    barangay_id: 1022,
    municipality_id: 47,
    barangay_name: "Lantag",
  },
  {
    barangay_id: 1023,
    municipality_id: 47,
    barangay_name: "Las-ud",
  },
  {
    barangay_id: 1024,
    municipality_id: 47,
    barangay_name: "Mambog",
  },
  {
    barangay_id: 1025,
    municipality_id: 47,
    barangay_name: "Mantanas",
  },
  {
    barangay_id: 1026,
    municipality_id: 47,
    barangay_name: "Nagtengnga",
  },
  {
    barangay_id: 1027,
    municipality_id: 47,
    barangay_name: "Padaoil",
  },
  {
    barangay_id: 1028,
    municipality_id: 47,
    barangay_name: "Paratong",
  },
  {
    barangay_id: 1029,
    municipality_id: 47,
    barangay_name: "Pattiqui",
  },
  {
    barangay_id: 1030,
    municipality_id: 47,
    barangay_name: "Pidpid",
  },
  {
    barangay_id: 1031,
    municipality_id: 47,
    barangay_name: "Pilar",
  },
  {
    barangay_id: 1032,
    municipality_id: 47,
    barangay_name: "Pinipin",
  },
  {
    barangay_id: 1033,
    municipality_id: 47,
    barangay_name: "Poblacion Este",
  },
  {
    barangay_id: 1034,
    municipality_id: 47,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 1036,
    municipality_id: 47,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 1035,
    municipality_id: 47,
    barangay_name: "Poblacion Weste",
  },
  {
    barangay_id: 1037,
    municipality_id: 47,
    barangay_name: "Quinfermin",
  },
  {
    barangay_id: 1038,
    municipality_id: 47,
    barangay_name: "Quinsoriano",
  },
  {
    barangay_id: 1039,
    municipality_id: 47,
    barangay_name: "Sagat",
  },
  {
    barangay_id: 1040,
    municipality_id: 47,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 1041,
    municipality_id: 47,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 1042,
    municipality_id: 47,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 1043,
    municipality_id: 47,
    barangay_name: "Saoat",
  },
  {
    barangay_id: 1044,
    municipality_id: 47,
    barangay_name: "Sevilla",
  },
  {
    barangay_id: 1045,
    municipality_id: 47,
    barangay_name: "Sidaoen",
  },
  {
    barangay_id: 1046,
    municipality_id: 47,
    barangay_name: "Suyo",
  },
  {
    barangay_id: 1047,
    municipality_id: 47,
    barangay_name: "Tampugo",
  },
  {
    barangay_id: 1048,
    municipality_id: 47,
    barangay_name: "Turod",
  },
  {
    barangay_id: 1049,
    municipality_id: 47,
    barangay_name: "Villa Garcia",
  },
  {
    barangay_id: 1050,
    municipality_id: 47,
    barangay_name: "Villa Hermosa",
  },
  {
    barangay_id: 1051,
    municipality_id: 47,
    barangay_name: "Villa Laurencia",
  },
  {
    barangay_id: 1052,
    municipality_id: 48,
    barangay_name: "Alincaoeg",
  },
  {
    barangay_id: 1053,
    municipality_id: 48,
    barangay_name: "Angkileng",
  },
  {
    barangay_id: 1054,
    municipality_id: 48,
    barangay_name: "Arangin",
  },
  {
    barangay_id: 1055,
    municipality_id: 48,
    barangay_name: "Ayusan (Pob.)",
  },
  {
    barangay_id: 1056,
    municipality_id: 48,
    barangay_name: "Banbanaba",
  },
  {
    barangay_id: 1087,
    municipality_id: 48,
    barangay_name: "Bani",
  },
  {
    barangay_id: 1057,
    municipality_id: 48,
    barangay_name: "Bao-as",
  },
  {
    barangay_id: 1058,
    municipality_id: 48,
    barangay_name: "Barangobong (Pob.)",
  },
  {
    barangay_id: 1059,
    municipality_id: 48,
    barangay_name: "Buliclic",
  },
  {
    barangay_id: 1060,
    municipality_id: 48,
    barangay_name: "Burgos (Pob.)",
  },
  {
    barangay_id: 1061,
    municipality_id: 48,
    barangay_name: "Cabaritan",
  },
  {
    barangay_id: 1062,
    municipality_id: 48,
    barangay_name: "Catayagan",
  },
  {
    barangay_id: 1063,
    municipality_id: 48,
    barangay_name: "Conconig East",
  },
  {
    barangay_id: 1064,
    municipality_id: 48,
    barangay_name: "Conconig West",
  },
  {
    barangay_id: 1065,
    municipality_id: 48,
    barangay_name: "Damacuag",
  },
  {
    barangay_id: 1067,
    municipality_id: 48,
    barangay_name: "Luba",
  },
  {
    barangay_id: 1066,
    municipality_id: 48,
    barangay_name: "Lubong",
  },
  {
    barangay_id: 1068,
    municipality_id: 48,
    barangay_name: "Nagrebcan",
  },
  {
    barangay_id: 1069,
    municipality_id: 48,
    barangay_name: "Nagtablaan",
  },
  {
    barangay_id: 1070,
    municipality_id: 48,
    barangay_name: "Namatican",
  },
  {
    barangay_id: 1071,
    municipality_id: 48,
    barangay_name: "Nangalisan",
  },
  {
    barangay_id: 1072,
    municipality_id: 48,
    barangay_name: "Palali Norte",
  },
  {
    barangay_id: 1073,
    municipality_id: 48,
    barangay_name: "Palali Sur",
  },
  {
    barangay_id: 1074,
    municipality_id: 48,
    barangay_name: "Paoc Norte",
  },
  {
    barangay_id: 1075,
    municipality_id: 48,
    barangay_name: "Paoc Sur",
  },
  {
    barangay_id: 1076,
    municipality_id: 48,
    barangay_name: "Paratong",
  },
  {
    barangay_id: 1077,
    municipality_id: 48,
    barangay_name: "Pila East",
  },
  {
    barangay_id: 1078,
    municipality_id: 48,
    barangay_name: "Pila West",
  },
  {
    barangay_id: 1079,
    municipality_id: 48,
    barangay_name: "Quinabalayangan",
  },
  {
    barangay_id: 1080,
    municipality_id: 48,
    barangay_name: "Ronda",
  },
  {
    barangay_id: 1081,
    municipality_id: 48,
    barangay_name: "Sabuanan",
  },
  {
    barangay_id: 1082,
    municipality_id: 48,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 1083,
    municipality_id: 48,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 1084,
    municipality_id: 48,
    barangay_name: "Sapang",
  },
  {
    barangay_id: 1085,
    municipality_id: 48,
    barangay_name: "Suagayan",
  },
  {
    barangay_id: 1086,
    municipality_id: 48,
    barangay_name: "Vical",
  },
  {
    barangay_id: 1088,
    municipality_id: 49,
    barangay_name: "Ag-agrao",
  },
  {
    barangay_id: 1089,
    municipality_id: 49,
    barangay_name: "Ampuagan",
  },
  {
    barangay_id: 1090,
    municipality_id: 49,
    barangay_name: "Baballasioan",
  },
  {
    barangay_id: 1091,
    municipality_id: 49,
    barangay_name: "Baliw Daya",
  },
  {
    barangay_id: 1092,
    municipality_id: 49,
    barangay_name: "Baliw Laud",
  },
  {
    barangay_id: 1093,
    municipality_id: 49,
    barangay_name: "Bia-o",
  },
  {
    barangay_id: 1094,
    municipality_id: 49,
    barangay_name: "Butir",
  },
  {
    barangay_id: 1095,
    municipality_id: 49,
    barangay_name: "Cabaroan",
  },
  {
    barangay_id: 1096,
    municipality_id: 49,
    barangay_name: "Danuman East",
  },
  {
    barangay_id: 1097,
    municipality_id: 49,
    barangay_name: "Danuman West",
  },
  {
    barangay_id: 1098,
    municipality_id: 49,
    barangay_name: "Dunglayan",
  },
  {
    barangay_id: 1099,
    municipality_id: 49,
    barangay_name: "Gusing",
  },
  {
    barangay_id: 1100,
    municipality_id: 49,
    barangay_name: "Langaoan",
  },
  {
    barangay_id: 1101,
    municipality_id: 49,
    barangay_name: "Laslasong Norte",
  },
  {
    barangay_id: 1102,
    municipality_id: 49,
    barangay_name: "Laslasong Sur",
  },
  {
    barangay_id: 1103,
    municipality_id: 49,
    barangay_name: "Laslasong West",
  },
  {
    barangay_id: 1104,
    municipality_id: 49,
    barangay_name: "Lesseb",
  },
  {
    barangay_id: 1105,
    municipality_id: 49,
    barangay_name: "Lingsat",
  },
  {
    barangay_id: 1106,
    municipality_id: 49,
    barangay_name: "Lubong",
  },
  {
    barangay_id: 1107,
    municipality_id: 49,
    barangay_name: "Maynganay Norte",
  },
  {
    barangay_id: 1108,
    municipality_id: 49,
    barangay_name: "Maynganay Sur",
  },
  {
    barangay_id: 1109,
    municipality_id: 49,
    barangay_name: "Nagsayaoan",
  },
  {
    barangay_id: 1110,
    municipality_id: 49,
    barangay_name: "Nagtupacan",
  },
  {
    barangay_id: 1111,
    municipality_id: 49,
    barangay_name: "Nalvo",
  },
  {
    barangay_id: 1112,
    municipality_id: 49,
    barangay_name: "Pacang",
  },
  {
    barangay_id: 1113,
    municipality_id: 49,
    barangay_name: "Penned",
  },
  {
    barangay_id: 1114,
    municipality_id: 49,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 1115,
    municipality_id: 49,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 1116,
    municipality_id: 49,
    barangay_name: "Silag",
  },
  {
    barangay_id: 1117,
    municipality_id: 49,
    barangay_name: "Sumagui",
  },
  {
    barangay_id: 1118,
    municipality_id: 49,
    barangay_name: "Suso",
  },
  {
    barangay_id: 1119,
    municipality_id: 49,
    barangay_name: "Tangaoan",
  },
  {
    barangay_id: 1120,
    municipality_id: 49,
    barangay_name: "Tinaan",
  },
  {
    barangay_id: 1121,
    municipality_id: 50,
    barangay_name: "Al-aludig",
  },
  {
    barangay_id: 1122,
    municipality_id: 50,
    barangay_name: "Ambucao",
  },
  {
    barangay_id: 1124,
    municipality_id: 50,
    barangay_name: "Baybayabas",
  },
  {
    barangay_id: 1125,
    municipality_id: 50,
    barangay_name: "Bigbiga",
  },
  {
    barangay_id: 1126,
    municipality_id: 50,
    barangay_name: "Bulbulala",
  },
  {
    barangay_id: 1127,
    municipality_id: 50,
    barangay_name: "Busel-busel",
  },
  {
    barangay_id: 1128,
    municipality_id: 50,
    barangay_name: "Butol",
  },
  {
    barangay_id: 1129,
    municipality_id: 50,
    barangay_name: "Caburao",
  },
  {
    barangay_id: 1130,
    municipality_id: 50,
    barangay_name: "Dan-ar",
  },
  {
    barangay_id: 1131,
    municipality_id: 50,
    barangay_name: "Gabao",
  },
  {
    barangay_id: 1132,
    municipality_id: 50,
    barangay_name: "Guinabang",
  },
  {
    barangay_id: 1133,
    municipality_id: 50,
    barangay_name: "Imus",
  },
  {
    barangay_id: 1134,
    municipality_id: 50,
    barangay_name: "Lang-ayan",
  },
  {
    barangay_id: 1135,
    municipality_id: 50,
    barangay_name: "Mambug",
  },
  {
    barangay_id: 1136,
    municipality_id: 50,
    barangay_name: "Nalasin",
  },
  {
    barangay_id: 1137,
    municipality_id: 50,
    barangay_name: "Olo-olo Norte",
  },
  {
    barangay_id: 1138,
    municipality_id: 50,
    barangay_name: "Olo-olo Sur",
  },
  {
    barangay_id: 1139,
    municipality_id: 50,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 1140,
    municipality_id: 50,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 1141,
    municipality_id: 50,
    barangay_name: "Sabangan",
  },
  {
    barangay_id: 1142,
    municipality_id: 50,
    barangay_name: "Salincub",
  },
  {
    barangay_id: 1123,
    municipality_id: 50,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 1143,
    municipality_id: 50,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 1144,
    municipality_id: 50,
    barangay_name: "Ubbog",
  },
  {
    barangay_id: 1145,
    municipality_id: 51,
    barangay_name: "Binalayangan",
  },
  {
    barangay_id: 1146,
    municipality_id: 51,
    barangay_name: "Binongan",
  },
  {
    barangay_id: 1147,
    municipality_id: 51,
    barangay_name: "Borobor",
  },
  {
    barangay_id: 1148,
    municipality_id: 51,
    barangay_name: "Cabaritan",
  },
  {
    barangay_id: 1149,
    municipality_id: 51,
    barangay_name: "Cabigbigaan",
  },
  {
    barangay_id: 1150,
    municipality_id: 51,
    barangay_name: "Calautit",
  },
  {
    barangay_id: 1151,
    municipality_id: 51,
    barangay_name: "Calay-ab",
  },
  {
    barangay_id: 1152,
    municipality_id: 51,
    barangay_name: "Camestizoan",
  },
  {
    barangay_id: 1153,
    municipality_id: 51,
    barangay_name: "Casili",
  },
  {
    barangay_id: 1154,
    municipality_id: 51,
    barangay_name: "Flora",
  },
  {
    barangay_id: 1155,
    municipality_id: 51,
    barangay_name: "Lagatit",
  },
  {
    barangay_id: 1156,
    municipality_id: 51,
    barangay_name: "Laoingen",
  },
  {
    barangay_id: 1157,
    municipality_id: 51,
    barangay_name: "Lussoc",
  },
  {
    barangay_id: 1159,
    municipality_id: 51,
    barangay_name: "Nagbettedan",
  },
  {
    barangay_id: 1160,
    municipality_id: 51,
    barangay_name: "Naglaoa-an",
  },
  {
    barangay_id: 1158,
    municipality_id: 51,
    barangay_name: "Nalasin",
  },
  {
    barangay_id: 1161,
    municipality_id: 51,
    barangay_name: "Nambaran",
  },
  {
    barangay_id: 1162,
    municipality_id: 51,
    barangay_name: "Nanerman",
  },
  {
    barangay_id: 1163,
    municipality_id: 51,
    barangay_name: "Napo",
  },
  {
    barangay_id: 1164,
    municipality_id: 51,
    barangay_name: "Padu Chico",
  },
  {
    barangay_id: 1165,
    municipality_id: 51,
    barangay_name: "Padu Grande",
  },
  {
    barangay_id: 1166,
    municipality_id: 51,
    barangay_name: "Paguraper",
  },
  {
    barangay_id: 1167,
    municipality_id: 51,
    barangay_name: "Panay",
  },
  {
    barangay_id: 1168,
    municipality_id: 51,
    barangay_name: "Pangpangdan",
  },
  {
    barangay_id: 1169,
    municipality_id: 51,
    barangay_name: "Parada",
  },
  {
    barangay_id: 1170,
    municipality_id: 51,
    barangay_name: "Paras",
  },
  {
    barangay_id: 1171,
    municipality_id: 51,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1172,
    municipality_id: 51,
    barangay_name: "Puerta Real",
  },
  {
    barangay_id: 1173,
    municipality_id: 51,
    barangay_name: "Pussuac",
  },
  {
    barangay_id: 1174,
    municipality_id: 51,
    barangay_name: "Quimmarayan",
  },
  {
    barangay_id: 1175,
    municipality_id: 51,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 1176,
    municipality_id: 51,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 1177,
    municipality_id: 51,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 1178,
    municipality_id: 51,
    barangay_name: "Sived",
  },
  {
    barangay_id: 1180,
    municipality_id: 51,
    barangay_name: "Suksukit",
  },
  {
    barangay_id: 1179,
    municipality_id: 51,
    barangay_name: "Vacunero",
  },
  {
    barangay_id: 1181,
    municipality_id: 52,
    barangay_name: "Abaccan",
  },
  {
    barangay_id: 1182,
    municipality_id: 52,
    barangay_name: "Mabileg",
  },
  {
    barangay_id: 1183,
    municipality_id: 52,
    barangay_name: "Matallucod",
  },
  {
    barangay_id: 1184,
    municipality_id: 52,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1185,
    municipality_id: 52,
    barangay_name: "San Elias",
  },
  {
    barangay_id: 1186,
    municipality_id: 52,
    barangay_name: "San Ramon",
  },
  {
    barangay_id: 1187,
    municipality_id: 52,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 1188,
    municipality_id: 53,
    barangay_name: "Aguing",
  },
  {
    barangay_id: 1190,
    municipality_id: 53,
    barangay_name: "Baliw",
  },
  {
    barangay_id: 1189,
    municipality_id: 53,
    barangay_name: "Ballaigui (Pob.)",
  },
  {
    barangay_id: 1191,
    municipality_id: 53,
    barangay_name: "Baracbac",
  },
  {
    barangay_id: 1192,
    municipality_id: 53,
    barangay_name: "Barikir",
  },
  {
    barangay_id: 1193,
    municipality_id: 53,
    barangay_name: "Battog",
  },
  {
    barangay_id: 1194,
    municipality_id: 53,
    barangay_name: "Binacud",
  },
  {
    barangay_id: 1195,
    municipality_id: 53,
    barangay_name: "Cabangtalan",
  },
  {
    barangay_id: 1196,
    municipality_id: 53,
    barangay_name: "Cabarambanan",
  },
  {
    barangay_id: 1197,
    municipality_id: 53,
    barangay_name: "Cabulalaan",
  },
  {
    barangay_id: 1198,
    municipality_id: 53,
    barangay_name: "Cadanglaan",
  },
  {
    barangay_id: 1205,
    municipality_id: 53,
    barangay_name: "Calanutian",
  },
  {
    barangay_id: 1199,
    municipality_id: 53,
    barangay_name: "Calingayan",
  },
  {
    barangay_id: 1200,
    municipality_id: 53,
    barangay_name: "Curtin",
  },
  {
    barangay_id: 1201,
    municipality_id: 53,
    barangay_name: "Dadalaquiten Norte",
  },
  {
    barangay_id: 1202,
    municipality_id: 53,
    barangay_name: "Dadalaquiten Sur",
  },
  {
    barangay_id: 1217,
    municipality_id: 53,
    barangay_name: "Dean Leopoldo Yabes",
  },
  {
    barangay_id: 1203,
    municipality_id: 53,
    barangay_name: "Duyayyat",
  },
  {
    barangay_id: 1204,
    municipality_id: 53,
    barangay_name: "Jordan",
  },
  {
    barangay_id: 1206,
    municipality_id: 53,
    barangay_name: "Katipunan",
  },
  {
    barangay_id: 1207,
    municipality_id: 53,
    barangay_name: "Macabiag (Pob.)",
  },
  {
    barangay_id: 1208,
    municipality_id: 53,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 1209,
    municipality_id: 53,
    barangay_name: "Marnay",
  },
  {
    barangay_id: 1210,
    municipality_id: 53,
    barangay_name: "Masadag",
  },
  {
    barangay_id: 1212,
    municipality_id: 53,
    barangay_name: "Nagbalioartian",
  },
  {
    barangay_id: 1211,
    municipality_id: 53,
    barangay_name: "Nagcullooban",
  },
  {
    barangay_id: 1213,
    municipality_id: 53,
    barangay_name: "Nagongburan",
  },
  {
    barangay_id: 1214,
    municipality_id: 53,
    barangay_name: "Namnama (Pob.)",
  },
  {
    barangay_id: 1215,
    municipality_id: 53,
    barangay_name: "Pacis",
  },
  {
    barangay_id: 1216,
    municipality_id: 53,
    barangay_name: "Paratong",
  },
  {
    barangay_id: 1218,
    municipality_id: 53,
    barangay_name: "Purag",
  },
  {
    barangay_id: 1219,
    municipality_id: 53,
    barangay_name: "Quibit-quibit",
  },
  {
    barangay_id: 1220,
    municipality_id: 53,
    barangay_name: "Quimmallogong",
  },
  {
    barangay_id: 1221,
    municipality_id: 53,
    barangay_name: "Rang-ay (Pob.)",
  },
  {
    barangay_id: 1222,
    municipality_id: 53,
    barangay_name: "Ricudo",
  },
  {
    barangay_id: 1223,
    municipality_id: 53,
    barangay_name: "Sabañgan",
  },
  {
    barangay_id: 1224,
    municipality_id: 53,
    barangay_name: "Sallacapo",
  },
  {
    barangay_id: 1225,
    municipality_id: 53,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 1226,
    municipality_id: 53,
    barangay_name: "Sapriana",
  },
  {
    barangay_id: 1227,
    municipality_id: 53,
    barangay_name: "Tapao",
  },
  {
    barangay_id: 1228,
    municipality_id: 53,
    barangay_name: "Teppeng",
  },
  {
    barangay_id: 1229,
    municipality_id: 53,
    barangay_name: "Tubigay",
  },
  {
    barangay_id: 1230,
    municipality_id: 53,
    barangay_name: "Ubbog",
  },
  {
    barangay_id: 1231,
    municipality_id: 53,
    barangay_name: "Zapat",
  },
  {
    barangay_id: 1237,
    municipality_id: 54,
    barangay_name: "Balbalayang (Pob.)",
  },
  {
    barangay_id: 1232,
    municipality_id: 54,
    barangay_name: "Banga",
  },
  {
    barangay_id: 1233,
    municipality_id: 54,
    barangay_name: "Caoayan",
  },
  {
    barangay_id: 1235,
    municipality_id: 54,
    barangay_name: "Danac",
  },
  {
    barangay_id: 1234,
    municipality_id: 54,
    barangay_name: "Licungan",
  },
  {
    barangay_id: 1236,
    municipality_id: 54,
    barangay_name: "Pangotan",
  },
  {
    barangay_id: 1238,
    municipality_id: 55,
    barangay_name: "Baringcucurong",
  },
  {
    barangay_id: 1239,
    municipality_id: 55,
    barangay_name: "Cabugao",
  },
  {
    barangay_id: 1240,
    municipality_id: 55,
    barangay_name: "Man-atong",
  },
  {
    barangay_id: 1241,
    municipality_id: 55,
    barangay_name: "Patoc-ao",
  },
  {
    barangay_id: 1242,
    municipality_id: 55,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1243,
    municipality_id: 55,
    barangay_name: "Suyo Proper",
  },
  {
    barangay_id: 1244,
    municipality_id: 55,
    barangay_name: "Urzadan",
  },
  {
    barangay_id: 1245,
    municipality_id: 55,
    barangay_name: "Uso",
  },
  {
    barangay_id: 1246,
    municipality_id: 56,
    barangay_name: "Ag-aguman",
  },
  {
    barangay_id: 1247,
    municipality_id: 56,
    barangay_name: "Ambalayat",
  },
  {
    barangay_id: 1248,
    municipality_id: 56,
    barangay_name: "Baracbac",
  },
  {
    barangay_id: 1249,
    municipality_id: 56,
    barangay_name: "Bario-an",
  },
  {
    barangay_id: 1250,
    municipality_id: 56,
    barangay_name: "Baritao",
  },
  {
    barangay_id: 1252,
    municipality_id: 56,
    barangay_name: "Becques",
  },
  {
    barangay_id: 1253,
    municipality_id: 56,
    barangay_name: "Bimmanga",
  },
  {
    barangay_id: 1254,
    municipality_id: 56,
    barangay_name: "Bio",
  },
  {
    barangay_id: 1255,
    municipality_id: 56,
    barangay_name: "Bitalag",
  },
  {
    barangay_id: 1251,
    municipality_id: 56,
    barangay_name: "Borono",
  },
  {
    barangay_id: 1256,
    municipality_id: 56,
    barangay_name: "Bucao East",
  },
  {
    barangay_id: 1257,
    municipality_id: 56,
    barangay_name: "Bucao West",
  },
  {
    barangay_id: 1258,
    municipality_id: 56,
    barangay_name: "Cabaroan",
  },
  {
    barangay_id: 1259,
    municipality_id: 56,
    barangay_name: "Cabugbugan",
  },
  {
    barangay_id: 1260,
    municipality_id: 56,
    barangay_name: "Cabulanglangan",
  },
  {
    barangay_id: 1261,
    municipality_id: 56,
    barangay_name: "Dacutan",
  },
  {
    barangay_id: 1262,
    municipality_id: 56,
    barangay_name: "Dardarat",
  },
  {
    barangay_id: 1263,
    municipality_id: 56,
    barangay_name: "Del Pilar (Pob.)",
  },
  {
    barangay_id: 1264,
    municipality_id: 56,
    barangay_name: "Farola",
  },
  {
    barangay_id: 1265,
    municipality_id: 56,
    barangay_name: "Gabur",
  },
  {
    barangay_id: 1266,
    municipality_id: 56,
    barangay_name: "Garitan",
  },
  {
    barangay_id: 1267,
    municipality_id: 56,
    barangay_name: "Jardin",
  },
  {
    barangay_id: 1268,
    municipality_id: 56,
    barangay_name: "Lacong",
  },
  {
    barangay_id: 1269,
    municipality_id: 56,
    barangay_name: "Lantag",
  },
  {
    barangay_id: 1270,
    municipality_id: 56,
    barangay_name: "Las-ud",
  },
  {
    barangay_id: 1271,
    municipality_id: 56,
    barangay_name: "Libtong",
  },
  {
    barangay_id: 1272,
    municipality_id: 56,
    barangay_name: "Lubnac",
  },
  {
    barangay_id: 1273,
    municipality_id: 56,
    barangay_name: "Magsaysay (Pob.)",
  },
  {
    barangay_id: 1274,
    municipality_id: 56,
    barangay_name: "Malacañang",
  },
  {
    barangay_id: 1275,
    municipality_id: 56,
    barangay_name: "Pacac",
  },
  {
    barangay_id: 1276,
    municipality_id: 56,
    barangay_name: "Pallogan",
  },
  {
    barangay_id: 1277,
    municipality_id: 56,
    barangay_name: "Pudoc East",
  },
  {
    barangay_id: 1278,
    municipality_id: 56,
    barangay_name: "Pudoc West",
  },
  {
    barangay_id: 1279,
    municipality_id: 56,
    barangay_name: "Pula",
  },
  {
    barangay_id: 1280,
    municipality_id: 56,
    barangay_name: "Quirino (Pob.)",
  },
  {
    barangay_id: 1281,
    municipality_id: 56,
    barangay_name: "Ranget",
  },
  {
    barangay_id: 1282,
    municipality_id: 56,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 1283,
    municipality_id: 56,
    barangay_name: "Salvacion",
  },
  {
    barangay_id: 1284,
    municipality_id: 56,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 1285,
    municipality_id: 56,
    barangay_name: "Sawat",
  },
  {
    barangay_id: 1286,
    municipality_id: 56,
    barangay_name: "Tallaoen",
  },
  {
    barangay_id: 1287,
    municipality_id: 56,
    barangay_name: "Tampugo",
  },
  {
    barangay_id: 1288,
    municipality_id: 56,
    barangay_name: "Tarangotong",
  },
  {
    barangay_id: 1289,
    municipality_id: 57,
    barangay_name: "Ayusan Norte",
  },
  {
    barangay_id: 1290,
    municipality_id: 57,
    barangay_name: "Ayusan Sur",
  },
  {
    barangay_id: 1291,
    municipality_id: 57,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 1292,
    municipality_id: 57,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 1293,
    municipality_id: 57,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 1294,
    municipality_id: 57,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 1327,
    municipality_id: 57,
    barangay_name: "Barangay IX",
  },
  {
    barangay_id: 1295,
    municipality_id: 57,
    barangay_name: "Barangay V (Pob.)",
  },
  {
    barangay_id: 1296,
    municipality_id: 57,
    barangay_name: "Barangay VI (Pob.)",
  },
  {
    barangay_id: 1325,
    municipality_id: 57,
    barangay_name: "Barangay VII",
  },
  {
    barangay_id: 1326,
    municipality_id: 57,
    barangay_name: "Barangay VIII",
  },
  {
    barangay_id: 1297,
    municipality_id: 57,
    barangay_name: "Barraca",
  },
  {
    barangay_id: 1299,
    municipality_id: 57,
    barangay_name: "Beddeng Daya",
  },
  {
    barangay_id: 1298,
    municipality_id: 57,
    barangay_name: "Beddeng Laud",
  },
  {
    barangay_id: 1300,
    municipality_id: 57,
    barangay_name: "Bongtolan",
  },
  {
    barangay_id: 1301,
    municipality_id: 57,
    barangay_name: "Bulala",
  },
  {
    barangay_id: 1302,
    municipality_id: 57,
    barangay_name: "Cabalangegan",
  },
  {
    barangay_id: 1303,
    municipality_id: 57,
    barangay_name: "Cabaroan Daya",
  },
  {
    barangay_id: 1304,
    municipality_id: 57,
    barangay_name: "Cabaroan Laud",
  },
  {
    barangay_id: 1305,
    municipality_id: 57,
    barangay_name: "Camangaan",
  },
  {
    barangay_id: 1306,
    municipality_id: 57,
    barangay_name: "Capangpangan",
  },
  {
    barangay_id: 1307,
    municipality_id: 57,
    barangay_name: "Mindoro",
  },
  {
    barangay_id: 1308,
    municipality_id: 57,
    barangay_name: "Nagsangalan",
  },
  {
    barangay_id: 1309,
    municipality_id: 57,
    barangay_name: "Pantay Daya",
  },
  {
    barangay_id: 1310,
    municipality_id: 57,
    barangay_name: "Pantay Fatima",
  },
  {
    barangay_id: 1311,
    municipality_id: 57,
    barangay_name: "Pantay Laud",
  },
  {
    barangay_id: 1312,
    municipality_id: 57,
    barangay_name: "Paoa",
  },
  {
    barangay_id: 1313,
    municipality_id: 57,
    barangay_name: "Paratong",
  },
  {
    barangay_id: 1314,
    municipality_id: 57,
    barangay_name: "Pong-ol",
  },
  {
    barangay_id: 1315,
    municipality_id: 57,
    barangay_name: "Purok-a-bassit",
  },
  {
    barangay_id: 1316,
    municipality_id: 57,
    barangay_name: "Purok-a-dackel",
  },
  {
    barangay_id: 1317,
    municipality_id: 57,
    barangay_name: "Raois",
  },
  {
    barangay_id: 1318,
    municipality_id: 57,
    barangay_name: "Rugsuanan",
  },
  {
    barangay_id: 1319,
    municipality_id: 57,
    barangay_name: "Salindeg",
  },
  {
    barangay_id: 1320,
    municipality_id: 57,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 1321,
    municipality_id: 57,
    barangay_name: "San Julian Norte",
  },
  {
    barangay_id: 1322,
    municipality_id: 57,
    barangay_name: "San Julian Sur",
  },
  {
    barangay_id: 1323,
    municipality_id: 57,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 1324,
    municipality_id: 57,
    barangay_name: "Tamag",
  },
  {
    barangay_id: 1328,
    municipality_id: 58,
    barangay_name: "Ambitacay",
  },
  {
    barangay_id: 1329,
    municipality_id: 58,
    barangay_name: "Balawarte",
  },
  {
    barangay_id: 1330,
    municipality_id: 58,
    barangay_name: "Capas",
  },
  {
    barangay_id: 1331,
    municipality_id: 58,
    barangay_name: "Consolacion (Pob.)",
  },
  {
    barangay_id: 1332,
    municipality_id: 58,
    barangay_name: "Macalva Central",
  },
  {
    barangay_id: 1333,
    municipality_id: 58,
    barangay_name: "Macalva Norte",
  },
  {
    barangay_id: 1334,
    municipality_id: 58,
    barangay_name: "Macalva Sur",
  },
  {
    barangay_id: 1335,
    municipality_id: 58,
    barangay_name: "Nazareno",
  },
  {
    barangay_id: 1336,
    municipality_id: 58,
    barangay_name: "Purok",
  },
  {
    barangay_id: 1337,
    municipality_id: 58,
    barangay_name: "San Agustin East",
  },
  {
    barangay_id: 1338,
    municipality_id: 58,
    barangay_name: "San Agustin Norte",
  },
  {
    barangay_id: 1339,
    municipality_id: 58,
    barangay_name: "San Agustin Sur",
  },
  {
    barangay_id: 1340,
    municipality_id: 58,
    barangay_name: "San Antonino",
  },
  {
    barangay_id: 1341,
    municipality_id: 58,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 1342,
    municipality_id: 58,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 1343,
    municipality_id: 58,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 1344,
    municipality_id: 58,
    barangay_name: "San Joaquin Norte",
  },
  {
    barangay_id: 1345,
    municipality_id: 58,
    barangay_name: "San Joaquin Sur",
  },
  {
    barangay_id: 1346,
    municipality_id: 58,
    barangay_name: "San Jose Norte",
  },
  {
    barangay_id: 1347,
    municipality_id: 58,
    barangay_name: "San Jose Sur",
  },
  {
    barangay_id: 1348,
    municipality_id: 58,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 1349,
    municipality_id: 58,
    barangay_name: "San Julian Central",
  },
  {
    barangay_id: 1350,
    municipality_id: 58,
    barangay_name: "San Julian East",
  },
  {
    barangay_id: 1351,
    municipality_id: 58,
    barangay_name: "San Julian Norte",
  },
  {
    barangay_id: 1352,
    municipality_id: 58,
    barangay_name: "San Julian West",
  },
  {
    barangay_id: 1353,
    municipality_id: 58,
    barangay_name: "San Manuel Norte",
  },
  {
    barangay_id: 1354,
    municipality_id: 58,
    barangay_name: "San Manuel Sur",
  },
  {
    barangay_id: 1355,
    municipality_id: 58,
    barangay_name: "San Marcos",
  },
  {
    barangay_id: 1356,
    municipality_id: 58,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 1357,
    municipality_id: 58,
    barangay_name: "San Nicolas Central (Pob.)",
  },
  {
    barangay_id: 1358,
    municipality_id: 58,
    barangay_name: "San Nicolas East",
  },
  {
    barangay_id: 1359,
    municipality_id: 58,
    barangay_name: "San Nicolas Norte (Pob.)",
  },
  {
    barangay_id: 1361,
    municipality_id: 58,
    barangay_name: "San Nicolas Sur (Pob.)",
  },
  {
    barangay_id: 1360,
    municipality_id: 58,
    barangay_name: "San Nicolas West",
  },
  {
    barangay_id: 1362,
    municipality_id: 58,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 1364,
    municipality_id: 58,
    barangay_name: "San Roque East",
  },
  {
    barangay_id: 1363,
    municipality_id: 58,
    barangay_name: "San Roque West",
  },
  {
    barangay_id: 1365,
    municipality_id: 58,
    barangay_name: "San Vicente Norte",
  },
  {
    barangay_id: 1366,
    municipality_id: 58,
    barangay_name: "San Vicente Sur",
  },
  {
    barangay_id: 1367,
    municipality_id: 58,
    barangay_name: "Santa Ana",
  },
  {
    barangay_id: 1368,
    municipality_id: 58,
    barangay_name: "Santa Barbara (Pob.)",
  },
  {
    barangay_id: 1369,
    municipality_id: 58,
    barangay_name: "Santa Fe",
  },
  {
    barangay_id: 1370,
    municipality_id: 58,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 1371,
    municipality_id: 58,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 1372,
    municipality_id: 58,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 1373,
    municipality_id: 58,
    barangay_name: "Santa Rita East",
  },
  {
    barangay_id: 1374,
    municipality_id: 58,
    barangay_name: "Santa Rita Norte",
  },
  {
    barangay_id: 1375,
    municipality_id: 58,
    barangay_name: "Santa Rita Sur",
  },
  {
    barangay_id: 1376,
    municipality_id: 58,
    barangay_name: "Santa Rita West",
  },
  {
    barangay_id: 1377,
    municipality_id: 59,
    barangay_name: "Alaska",
  },
  {
    barangay_id: 1378,
    municipality_id: 59,
    barangay_name: "Basca",
  },
  {
    barangay_id: 1379,
    municipality_id: 59,
    barangay_name: "Dulao",
  },
  {
    barangay_id: 1380,
    municipality_id: 59,
    barangay_name: "Gallano",
  },
  {
    barangay_id: 1381,
    municipality_id: 59,
    barangay_name: "Macabato",
  },
  {
    barangay_id: 1382,
    municipality_id: 59,
    barangay_name: "Manga",
  },
  {
    barangay_id: 1383,
    municipality_id: 59,
    barangay_name: "Pangao-aoan East",
  },
  {
    barangay_id: 1384,
    municipality_id: 59,
    barangay_name: "Pangao-aoan West",
  },
  {
    barangay_id: 1385,
    municipality_id: 59,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1386,
    municipality_id: 59,
    barangay_name: "Samara",
  },
  {
    barangay_id: 1387,
    municipality_id: 59,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 1388,
    municipality_id: 59,
    barangay_name: "San Benito Norte",
  },
  {
    barangay_id: 1389,
    municipality_id: 59,
    barangay_name: "San Benito Sur",
  },
  {
    barangay_id: 1390,
    municipality_id: 59,
    barangay_name: "San Eugenio",
  },
  {
    barangay_id: 1391,
    municipality_id: 59,
    barangay_name: "San Juan East",
  },
  {
    barangay_id: 1392,
    municipality_id: 59,
    barangay_name: "San Juan West",
  },
  {
    barangay_id: 1393,
    municipality_id: 59,
    barangay_name: "San Simon East",
  },
  {
    barangay_id: 1394,
    municipality_id: 59,
    barangay_name: "San Simon West",
  },
  {
    barangay_id: 1395,
    municipality_id: 59,
    barangay_name: "Santa Cecilia",
  },
  {
    barangay_id: 1396,
    municipality_id: 59,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 1397,
    municipality_id: 59,
    barangay_name: "Santa Rita East",
  },
  {
    barangay_id: 1398,
    municipality_id: 59,
    barangay_name: "Santa Rita West",
  },
  {
    barangay_id: 1399,
    municipality_id: 59,
    barangay_name: "Santo Rosario East",
  },
  {
    barangay_id: 1400,
    municipality_id: 59,
    barangay_name: "Santo Rosario West",
  },
  {
    barangay_id: 1401,
    municipality_id: 60,
    barangay_name: "Agtipal",
  },
  {
    barangay_id: 1402,
    municipality_id: 60,
    barangay_name: "Arosip",
  },
  {
    barangay_id: 1403,
    municipality_id: 60,
    barangay_name: "Bacqui",
  },
  {
    barangay_id: 1404,
    municipality_id: 60,
    barangay_name: "Bacsil",
  },
  {
    barangay_id: 1405,
    municipality_id: 60,
    barangay_name: "Bagutot",
  },
  {
    barangay_id: 1406,
    municipality_id: 60,
    barangay_name: "Ballogo",
  },
  {
    barangay_id: 1407,
    municipality_id: 60,
    barangay_name: "Baroro",
  },
  {
    barangay_id: 1408,
    municipality_id: 60,
    barangay_name: "Bitalag",
  },
  {
    barangay_id: 1409,
    municipality_id: 60,
    barangay_name: "Bulala",
  },
  {
    barangay_id: 1410,
    municipality_id: 60,
    barangay_name: "Burayoc",
  },
  {
    barangay_id: 1411,
    municipality_id: 60,
    barangay_name: "Bussaoit",
  },
  {
    barangay_id: 1412,
    municipality_id: 60,
    barangay_name: "Cabaroan",
  },
  {
    barangay_id: 1413,
    municipality_id: 60,
    barangay_name: "Cabarsican",
  },
  {
    barangay_id: 1414,
    municipality_id: 60,
    barangay_name: "Cabugao",
  },
  {
    barangay_id: 1415,
    municipality_id: 60,
    barangay_name: "Calautit",
  },
  {
    barangay_id: 1416,
    municipality_id: 60,
    barangay_name: "Carcarmay",
  },
  {
    barangay_id: 1417,
    municipality_id: 60,
    barangay_name: "Casiaman",
  },
  {
    barangay_id: 1418,
    municipality_id: 60,
    barangay_name: "Galongen",
  },
  {
    barangay_id: 1419,
    municipality_id: 60,
    barangay_name: "Guinabang",
  },
  {
    barangay_id: 1420,
    municipality_id: 60,
    barangay_name: "Legleg",
  },
  {
    barangay_id: 1421,
    municipality_id: 60,
    barangay_name: "Lisqueb",
  },
  {
    barangay_id: 1422,
    municipality_id: 60,
    barangay_name: "Mabanengbeng 1st",
  },
  {
    barangay_id: 1423,
    municipality_id: 60,
    barangay_name: "Mabanengbeng 2nd",
  },
  {
    barangay_id: 1424,
    municipality_id: 60,
    barangay_name: "Maragayap",
  },
  {
    barangay_id: 1426,
    municipality_id: 60,
    barangay_name: "Nagatiran",
  },
  {
    barangay_id: 1427,
    municipality_id: 60,
    barangay_name: "Nagsaraboan",
  },
  {
    barangay_id: 1428,
    municipality_id: 60,
    barangay_name: "Nagsimbaanan",
  },
  {
    barangay_id: 1425,
    municipality_id: 60,
    barangay_name: "Nangalisan",
  },
  {
    barangay_id: 1429,
    municipality_id: 60,
    barangay_name: "Narra",
  },
  {
    barangay_id: 1430,
    municipality_id: 60,
    barangay_name: "Ortega",
  },
  {
    barangay_id: 1446,
    municipality_id: 60,
    barangay_name: "Oya-oy",
  },
  {
    barangay_id: 1431,
    municipality_id: 60,
    barangay_name: "Paagan",
  },
  {
    barangay_id: 1432,
    municipality_id: 60,
    barangay_name: "Pandan",
  },
  {
    barangay_id: 1433,
    municipality_id: 60,
    barangay_name: "Pang-pang",
  },
  {
    barangay_id: 1434,
    municipality_id: 60,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1435,
    municipality_id: 60,
    barangay_name: "Quirino",
  },
  {
    barangay_id: 1436,
    municipality_id: 60,
    barangay_name: "Raois",
  },
  {
    barangay_id: 1437,
    municipality_id: 60,
    barangay_name: "Salincob",
  },
  {
    barangay_id: 1438,
    municipality_id: 60,
    barangay_name: "San Martin",
  },
  {
    barangay_id: 1439,
    municipality_id: 60,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 1440,
    municipality_id: 60,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 1441,
    municipality_id: 60,
    barangay_name: "Sapilang",
  },
  {
    barangay_id: 1442,
    municipality_id: 60,
    barangay_name: "Sayoan",
  },
  {
    barangay_id: 1443,
    municipality_id: 60,
    barangay_name: "Sipulo",
  },
  {
    barangay_id: 1444,
    municipality_id: 60,
    barangay_name: "Tammocalao",
  },
  {
    barangay_id: 1445,
    municipality_id: 60,
    barangay_name: "Ubbog",
  },
  {
    barangay_id: 1447,
    municipality_id: 60,
    barangay_name: "Zaragosa",
  },
  {
    barangay_id: 1448,
    municipality_id: 61,
    barangay_name: "Alibangsay",
  },
  {
    barangay_id: 1449,
    municipality_id: 61,
    barangay_name: "Baay",
  },
  {
    barangay_id: 1450,
    municipality_id: 61,
    barangay_name: "Cambaly",
  },
  {
    barangay_id: 1451,
    municipality_id: 61,
    barangay_name: "Cardiz",
  },
  {
    barangay_id: 1452,
    municipality_id: 61,
    barangay_name: "Dagup",
  },
  {
    barangay_id: 1453,
    municipality_id: 61,
    barangay_name: "Libbo",
  },
  {
    barangay_id: 1454,
    municipality_id: 61,
    barangay_name: "Suyo (Pob.)",
  },
  {
    barangay_id: 1455,
    municipality_id: 61,
    barangay_name: "Tagudtud",
  },
  {
    barangay_id: 1456,
    municipality_id: 61,
    barangay_name: "Tio-angan",
  },
  {
    barangay_id: 1457,
    municipality_id: 61,
    barangay_name: "Wallayan",
  },
  {
    barangay_id: 1484,
    municipality_id: 62,
    barangay_name: "Almieda",
  },
  {
    barangay_id: 1493,
    municipality_id: 62,
    barangay_name: "Antonino",
  },
  {
    barangay_id: 1458,
    municipality_id: 62,
    barangay_name: "Apatut",
  },
  {
    barangay_id: 1459,
    municipality_id: 62,
    barangay_name: "Ar-arampang",
  },
  {
    barangay_id: 1460,
    municipality_id: 62,
    barangay_name: "Baracbac Este",
  },
  {
    barangay_id: 1461,
    municipality_id: 62,
    barangay_name: "Baracbac Oeste",
  },
  {
    barangay_id: 1462,
    municipality_id: 62,
    barangay_name: "Bet-ang",
  },
  {
    barangay_id: 1463,
    municipality_id: 62,
    barangay_name: "Bulbulala",
  },
  {
    barangay_id: 1464,
    municipality_id: 62,
    barangay_name: "Bungol",
  },
  {
    barangay_id: 1465,
    municipality_id: 62,
    barangay_name: "Butubut Este",
  },
  {
    barangay_id: 1466,
    municipality_id: 62,
    barangay_name: "Butubut Norte",
  },
  {
    barangay_id: 1467,
    municipality_id: 62,
    barangay_name: "Butubut Oeste",
  },
  {
    barangay_id: 1468,
    municipality_id: 62,
    barangay_name: "Butubut Sur",
  },
  {
    barangay_id: 1469,
    municipality_id: 62,
    barangay_name: "Cabuaan Oeste (Pob.)",
  },
  {
    barangay_id: 1470,
    municipality_id: 62,
    barangay_name: "Calliat",
  },
  {
    barangay_id: 1471,
    municipality_id: 62,
    barangay_name: "Calungbuyan",
  },
  {
    barangay_id: 1472,
    municipality_id: 62,
    barangay_name: "Camiling",
  },
  {
    barangay_id: 1487,
    municipality_id: 62,
    barangay_name: "Dr. Camilo Osias Pob.",
  },
  {
    barangay_id: 1473,
    municipality_id: 62,
    barangay_name: "Guinaburan",
  },
  {
    barangay_id: 1474,
    municipality_id: 62,
    barangay_name: "Masupe",
  },
  {
    barangay_id: 1475,
    municipality_id: 62,
    barangay_name: "Nagsabaran Norte",
  },
  {
    barangay_id: 1476,
    municipality_id: 62,
    barangay_name: "Nagsabaran Sur",
  },
  {
    barangay_id: 1477,
    municipality_id: 62,
    barangay_name: "Nalasin",
  },
  {
    barangay_id: 1478,
    municipality_id: 62,
    barangay_name: "Napaset",
  },
  {
    barangay_id: 1483,
    municipality_id: 62,
    barangay_name: "Pa-o",
  },
  {
    barangay_id: 1479,
    municipality_id: 62,
    barangay_name: "Pagbennecan",
  },
  {
    barangay_id: 1480,
    municipality_id: 62,
    barangay_name: "Pagleddegan",
  },
  {
    barangay_id: 1481,
    municipality_id: 62,
    barangay_name: "Pantar Norte",
  },
  {
    barangay_id: 1482,
    municipality_id: 62,
    barangay_name: "Pantar Sur",
  },
  {
    barangay_id: 1485,
    municipality_id: 62,
    barangay_name: "Paraoir",
  },
  {
    barangay_id: 1486,
    municipality_id: 62,
    barangay_name: "Patpata",
  },
  {
    barangay_id: 1488,
    municipality_id: 62,
    barangay_name: "Sablut",
  },
  {
    barangay_id: 1489,
    municipality_id: 62,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 1490,
    municipality_id: 62,
    barangay_name: "Sinapangan Norte",
  },
  {
    barangay_id: 1491,
    municipality_id: 62,
    barangay_name: "Sinapangan Sur",
  },
  {
    barangay_id: 1492,
    municipality_id: 62,
    barangay_name: "Tallipugo",
  },
  {
    barangay_id: 1494,
    municipality_id: 63,
    barangay_name: "Agdeppa",
  },
  {
    barangay_id: 1495,
    municipality_id: 63,
    barangay_name: "Alzate",
  },
  {
    barangay_id: 1496,
    municipality_id: 63,
    barangay_name: "Bangaoilan East",
  },
  {
    barangay_id: 1497,
    municipality_id: 63,
    barangay_name: "Bangaoilan West",
  },
  {
    barangay_id: 1498,
    municipality_id: 63,
    barangay_name: "Barraca",
  },
  {
    barangay_id: 1499,
    municipality_id: 63,
    barangay_name: "Cadapli",
  },
  {
    barangay_id: 1500,
    municipality_id: 63,
    barangay_name: "Caggao",
  },
  {
    barangay_id: 1514,
    municipality_id: 63,
    barangay_name: "Central East No. 1 (Pob.)",
  },
  {
    barangay_id: 1515,
    municipality_id: 63,
    barangay_name: "Central East No. 2 (Pob.)",
  },
  {
    barangay_id: 1516,
    municipality_id: 63,
    barangay_name: "Central West No. 1 (Pob.)",
  },
  {
    barangay_id: 1517,
    municipality_id: 63,
    barangay_name: "Central West No. 2 (Pob.)",
  },
  {
    barangay_id: 1518,
    municipality_id: 63,
    barangay_name: "Central West No. 3 (Pob.)",
  },
  {
    barangay_id: 1501,
    municipality_id: 63,
    barangay_name: "Consuegra",
  },
  {
    barangay_id: 1502,
    municipality_id: 63,
    barangay_name: "General Prim East",
  },
  {
    barangay_id: 1503,
    municipality_id: 63,
    barangay_name: "General Prim West",
  },
  {
    barangay_id: 1504,
    municipality_id: 63,
    barangay_name: "General Terrero",
  },
  {
    barangay_id: 1505,
    municipality_id: 63,
    barangay_name: "Luzong Norte",
  },
  {
    barangay_id: 1506,
    municipality_id: 63,
    barangay_name: "Luzong Sur",
  },
  {
    barangay_id: 1507,
    municipality_id: 63,
    barangay_name: "Maria Cristina East",
  },
  {
    barangay_id: 1508,
    municipality_id: 63,
    barangay_name: "Maria Cristina West",
  },
  {
    barangay_id: 1509,
    municipality_id: 63,
    barangay_name: "Mindoro",
  },
  {
    barangay_id: 1510,
    municipality_id: 63,
    barangay_name: "Nagsabaran",
  },
  {
    barangay_id: 1512,
    municipality_id: 63,
    barangay_name: "Paratong No. 3",
  },
  {
    barangay_id: 1513,
    municipality_id: 63,
    barangay_name: "Paratong No. 4",
  },
  {
    barangay_id: 1511,
    municipality_id: 63,
    barangay_name: "Paratong Norte",
  },
  {
    barangay_id: 1519,
    municipality_id: 63,
    barangay_name: "Quintarong",
  },
  {
    barangay_id: 1520,
    municipality_id: 63,
    barangay_name: "Reyna Regente",
  },
  {
    barangay_id: 1521,
    municipality_id: 63,
    barangay_name: "Rissing",
  },
  {
    barangay_id: 1522,
    municipality_id: 63,
    barangay_name: "San Blas",
  },
  {
    barangay_id: 1523,
    municipality_id: 63,
    barangay_name: "San Cristobal",
  },
  {
    barangay_id: 1524,
    municipality_id: 63,
    barangay_name: "Sinapangan Norte",
  },
  {
    barangay_id: 1525,
    municipality_id: 63,
    barangay_name: "Sinapangan Sur",
  },
  {
    barangay_id: 1526,
    municipality_id: 63,
    barangay_name: "Ubbog",
  },
  {
    barangay_id: 1527,
    municipality_id: 64,
    barangay_name: "Acao",
  },
  {
    barangay_id: 1528,
    municipality_id: 64,
    barangay_name: "Baccuit Norte",
  },
  {
    barangay_id: 1529,
    municipality_id: 64,
    barangay_name: "Baccuit Sur",
  },
  {
    barangay_id: 1530,
    municipality_id: 64,
    barangay_name: "Bagbag",
  },
  {
    barangay_id: 1531,
    municipality_id: 64,
    barangay_name: "Ballay",
  },
  {
    barangay_id: 1532,
    municipality_id: 64,
    barangay_name: "Bawanta",
  },
  {
    barangay_id: 1533,
    municipality_id: 64,
    barangay_name: "Boy-utan",
  },
  {
    barangay_id: 1534,
    municipality_id: 64,
    barangay_name: "Bucayab",
  },
  {
    barangay_id: 1535,
    municipality_id: 64,
    barangay_name: "Cabalayangan",
  },
  {
    barangay_id: 1536,
    municipality_id: 64,
    barangay_name: "Cabisilan",
  },
  {
    barangay_id: 1537,
    municipality_id: 64,
    barangay_name: "Calumbaya",
  },
  {
    barangay_id: 1538,
    municipality_id: 64,
    barangay_name: "Carmay",
  },
  {
    barangay_id: 1539,
    municipality_id: 64,
    barangay_name: "Casilagan",
  },
  {
    barangay_id: 1540,
    municipality_id: 64,
    barangay_name: "Central East (Pob.)",
  },
  {
    barangay_id: 1541,
    municipality_id: 64,
    barangay_name: "Central West (Pob.)",
  },
  {
    barangay_id: 1542,
    municipality_id: 64,
    barangay_name: "Dili",
  },
  {
    barangay_id: 1543,
    municipality_id: 64,
    barangay_name: "Disso-or",
  },
  {
    barangay_id: 1544,
    municipality_id: 64,
    barangay_name: "Guerrero",
  },
  {
    barangay_id: 1560,
    municipality_id: 64,
    barangay_name: "Lower San Agustin",
  },
  {
    barangay_id: 1545,
    municipality_id: 64,
    barangay_name: "Nagrebcan",
  },
  {
    barangay_id: 1546,
    municipality_id: 64,
    barangay_name: "Pagdalagan Sur",
  },
  {
    barangay_id: 1547,
    municipality_id: 64,
    barangay_name: "Palintucang",
  },
  {
    barangay_id: 1548,
    municipality_id: 64,
    barangay_name: "Palugsi-Limmansangan",
  },
  {
    barangay_id: 1550,
    municipality_id: 64,
    barangay_name: "Parian Este",
  },
  {
    barangay_id: 1549,
    municipality_id: 64,
    barangay_name: "Parian Oeste",
  },
  {
    barangay_id: 1551,
    municipality_id: 64,
    barangay_name: "Paringao",
  },
  {
    barangay_id: 1552,
    municipality_id: 64,
    barangay_name: "Payocpoc Norte Este",
  },
  {
    barangay_id: 1553,
    municipality_id: 64,
    barangay_name: "Payocpoc Norte Oeste",
  },
  {
    barangay_id: 1554,
    municipality_id: 64,
    barangay_name: "Payocpoc Sur",
  },
  {
    barangay_id: 1555,
    municipality_id: 64,
    barangay_name: "Pilar",
  },
  {
    barangay_id: 1557,
    municipality_id: 64,
    barangay_name: "Pottot",
  },
  {
    barangay_id: 1556,
    municipality_id: 64,
    barangay_name: "Pudoc",
  },
  {
    barangay_id: 1558,
    municipality_id: 64,
    barangay_name: "Pugo",
  },
  {
    barangay_id: 1559,
    municipality_id: 64,
    barangay_name: "Quinavite",
  },
  {
    barangay_id: 1561,
    municipality_id: 64,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 1562,
    municipality_id: 64,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 1563,
    municipality_id: 64,
    barangay_name: "Taberna",
  },
  {
    barangay_id: 1564,
    municipality_id: 64,
    barangay_name: "Upper San Agustin",
  },
  {
    barangay_id: 1565,
    municipality_id: 64,
    barangay_name: "Urayong",
  },
  {
    barangay_id: 1566,
    municipality_id: 65,
    barangay_name: "Agpay",
  },
  {
    barangay_id: 1567,
    municipality_id: 65,
    barangay_name: "Bilis",
  },
  {
    barangay_id: 1568,
    municipality_id: 65,
    barangay_name: "Caoayan",
  },
  {
    barangay_id: 1569,
    municipality_id: 65,
    barangay_name: "Dalacdac",
  },
  {
    barangay_id: 1570,
    municipality_id: 65,
    barangay_name: "Delles",
  },
  {
    barangay_id: 1571,
    municipality_id: 65,
    barangay_name: "Imelda",
  },
  {
    barangay_id: 1572,
    municipality_id: 65,
    barangay_name: "Libtong",
  },
  {
    barangay_id: 1573,
    municipality_id: 65,
    barangay_name: "Linuan",
  },
  {
    barangay_id: 1576,
    municipality_id: 65,
    barangay_name: "Lower Tumapoc",
  },
  {
    barangay_id: 1574,
    municipality_id: 65,
    barangay_name: "New Poblacion",
  },
  {
    barangay_id: 1575,
    municipality_id: 65,
    barangay_name: "Old Poblacion",
  },
  {
    barangay_id: 1577,
    municipality_id: 65,
    barangay_name: "Upper Tumapoc",
  },
  {
    barangay_id: 1578,
    municipality_id: 66,
    barangay_name: "Bautista",
  },
  {
    barangay_id: 1579,
    municipality_id: 66,
    barangay_name: "Gana",
  },
  {
    barangay_id: 1580,
    municipality_id: 66,
    barangay_name: "Juan Cartas",
  },
  {
    barangay_id: 1581,
    municipality_id: 66,
    barangay_name: "Las-ud",
  },
  {
    barangay_id: 1582,
    municipality_id: 66,
    barangay_name: "Liquicia",
  },
  {
    barangay_id: 1583,
    municipality_id: 66,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 1584,
    municipality_id: 66,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 1585,
    municipality_id: 66,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 1586,
    municipality_id: 66,
    barangay_name: "San Cornelio",
  },
  {
    barangay_id: 1587,
    municipality_id: 66,
    barangay_name: "San Fermin",
  },
  {
    barangay_id: 1588,
    municipality_id: 66,
    barangay_name: "San Gregorio",
  },
  {
    barangay_id: 1589,
    municipality_id: 66,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 1590,
    municipality_id: 66,
    barangay_name: "Santiago Norte",
  },
  {
    barangay_id: 1591,
    municipality_id: 66,
    barangay_name: "Santiago Sur",
  },
  {
    barangay_id: 1592,
    municipality_id: 66,
    barangay_name: "Sobredillo",
  },
  {
    barangay_id: 1593,
    municipality_id: 66,
    barangay_name: "Urayong",
  },
  {
    barangay_id: 1594,
    municipality_id: 66,
    barangay_name: "Wenceslao",
  },
  {
    barangay_id: 1595,
    municipality_id: 67,
    barangay_name: "Alcala (Pob.)",
  },
  {
    barangay_id: 1596,
    municipality_id: 67,
    barangay_name: "Ayaoan",
  },
  {
    barangay_id: 1597,
    municipality_id: 67,
    barangay_name: "Barangobong",
  },
  {
    barangay_id: 1598,
    municipality_id: 67,
    barangay_name: "Barrientos",
  },
  {
    barangay_id: 1599,
    municipality_id: 67,
    barangay_name: "Bungro",
  },
  {
    barangay_id: 1600,
    municipality_id: 67,
    barangay_name: "Buselbusel",
  },
  {
    barangay_id: 1601,
    municipality_id: 67,
    barangay_name: "Cabalitocan",
  },
  {
    barangay_id: 1602,
    municipality_id: 67,
    barangay_name: "Cantoria No. 1",
  },
  {
    barangay_id: 1603,
    municipality_id: 67,
    barangay_name: "Cantoria No. 2",
  },
  {
    barangay_id: 1604,
    municipality_id: 67,
    barangay_name: "Cantoria No. 3",
  },
  {
    barangay_id: 1605,
    municipality_id: 67,
    barangay_name: "Cantoria No. 4",
  },
  {
    barangay_id: 1606,
    municipality_id: 67,
    barangay_name: "Carisquis",
  },
  {
    barangay_id: 1607,
    municipality_id: 67,
    barangay_name: "Darigayos",
  },
  {
    barangay_id: 1608,
    municipality_id: 67,
    barangay_name: "Magallanes (Pob.)",
  },
  {
    barangay_id: 1609,
    municipality_id: 67,
    barangay_name: "Magsiping",
  },
  {
    barangay_id: 1610,
    municipality_id: 67,
    barangay_name: "Mamay",
  },
  {
    barangay_id: 1611,
    municipality_id: 67,
    barangay_name: "Nagrebcan",
  },
  {
    barangay_id: 1612,
    municipality_id: 67,
    barangay_name: "Nalvo Norte",
  },
  {
    barangay_id: 1613,
    municipality_id: 67,
    barangay_name: "Nalvo Sur",
  },
  {
    barangay_id: 1614,
    municipality_id: 67,
    barangay_name: "Napaset",
  },
  {
    barangay_id: 1615,
    municipality_id: 67,
    barangay_name: "Oaqui No. 1",
  },
  {
    barangay_id: 1616,
    municipality_id: 67,
    barangay_name: "Oaqui No. 2",
  },
  {
    barangay_id: 1617,
    municipality_id: 67,
    barangay_name: "Oaqui No. 3",
  },
  {
    barangay_id: 1618,
    municipality_id: 67,
    barangay_name: "Oaqui No. 4",
  },
  {
    barangay_id: 1619,
    municipality_id: 67,
    barangay_name: "Pila",
  },
  {
    barangay_id: 1620,
    municipality_id: 67,
    barangay_name: "Pitpitac",
  },
  {
    barangay_id: 1621,
    municipality_id: 67,
    barangay_name: "Rimos No. 1",
  },
  {
    barangay_id: 1622,
    municipality_id: 67,
    barangay_name: "Rimos No. 2",
  },
  {
    barangay_id: 1623,
    municipality_id: 67,
    barangay_name: "Rimos No. 3",
  },
  {
    barangay_id: 1624,
    municipality_id: 67,
    barangay_name: "Rimos No. 4",
  },
  {
    barangay_id: 1625,
    municipality_id: 67,
    barangay_name: "Rimos No. 5",
  },
  {
    barangay_id: 1626,
    municipality_id: 67,
    barangay_name: "Rissing",
  },
  {
    barangay_id: 1627,
    municipality_id: 67,
    barangay_name: "Salcedo (Pob.)",
  },
  {
    barangay_id: 1628,
    municipality_id: 67,
    barangay_name: "Santo Domingo Norte",
  },
  {
    barangay_id: 1629,
    municipality_id: 67,
    barangay_name: "Santo Domingo Sur",
  },
  {
    barangay_id: 1630,
    municipality_id: 67,
    barangay_name: "Sucoc Norte",
  },
  {
    barangay_id: 1631,
    municipality_id: 67,
    barangay_name: "Sucoc Sur",
  },
  {
    barangay_id: 1632,
    municipality_id: 67,
    barangay_name: "Suyo",
  },
  {
    barangay_id: 1633,
    municipality_id: 67,
    barangay_name: "Tallaoen",
  },
  {
    barangay_id: 1634,
    municipality_id: 67,
    barangay_name: "Victoria (Pob.)",
  },
  {
    barangay_id: 1635,
    municipality_id: 68,
    barangay_name: "Aguioas",
  },
  {
    barangay_id: 1636,
    municipality_id: 68,
    barangay_name: "Al-alinao Norte",
  },
  {
    barangay_id: 1637,
    municipality_id: 68,
    barangay_name: "Al-alinao Sur",
  },
  {
    barangay_id: 1638,
    municipality_id: 68,
    barangay_name: "Ambaracao Norte",
  },
  {
    barangay_id: 1639,
    municipality_id: 68,
    barangay_name: "Ambaracao Sur",
  },
  {
    barangay_id: 1640,
    municipality_id: 68,
    barangay_name: "Angin",
  },
  {
    barangay_id: 1641,
    municipality_id: 68,
    barangay_name: "Balecbec",
  },
  {
    barangay_id: 1642,
    municipality_id: 68,
    barangay_name: "Bancagan",
  },
  {
    barangay_id: 1643,
    municipality_id: 68,
    barangay_name: "Baraoas Norte",
  },
  {
    barangay_id: 1644,
    municipality_id: 68,
    barangay_name: "Baraoas Sur",
  },
  {
    barangay_id: 1645,
    municipality_id: 68,
    barangay_name: "Bariquir",
  },
  {
    barangay_id: 1646,
    municipality_id: 68,
    barangay_name: "Bato",
  },
  {
    barangay_id: 1647,
    municipality_id: 68,
    barangay_name: "Bimmotobot",
  },
  {
    barangay_id: 1648,
    municipality_id: 68,
    barangay_name: "Cabaritan Norte",
  },
  {
    barangay_id: 1649,
    municipality_id: 68,
    barangay_name: "Cabaritan Sur",
  },
  {
    barangay_id: 1650,
    municipality_id: 68,
    barangay_name: "Casilagan",
  },
  {
    barangay_id: 1651,
    municipality_id: 68,
    barangay_name: "Dal-lipaoen",
  },
  {
    barangay_id: 1652,
    municipality_id: 68,
    barangay_name: "Daramuangan",
  },
  {
    barangay_id: 1653,
    municipality_id: 68,
    barangay_name: "Guesset",
  },
  {
    barangay_id: 1654,
    municipality_id: 68,
    barangay_name: "Gusing Norte",
  },
  {
    barangay_id: 1655,
    municipality_id: 68,
    barangay_name: "Gusing Sur",
  },
  {
    barangay_id: 1656,
    municipality_id: 68,
    barangay_name: "Imelda",
  },
  {
    barangay_id: 1657,
    municipality_id: 68,
    barangay_name: "Lioac Norte",
  },
  {
    barangay_id: 1658,
    municipality_id: 68,
    barangay_name: "Lioac Sur",
  },
  {
    barangay_id: 1659,
    municipality_id: 68,
    barangay_name: "Magungunay",
  },
  {
    barangay_id: 1660,
    municipality_id: 68,
    barangay_name: "Mamat-ing Norte",
  },
  {
    barangay_id: 1661,
    municipality_id: 68,
    barangay_name: "Mamat-ing Sur",
  },
  {
    barangay_id: 1662,
    municipality_id: 68,
    barangay_name: "Nagsidorisan",
  },
  {
    barangay_id: 1663,
    municipality_id: 68,
    barangay_name: "Natividad (Pob.)",
  },
  {
    barangay_id: 1664,
    municipality_id: 68,
    barangay_name: "Ortiz (Pob.)",
  },
  {
    barangay_id: 1665,
    municipality_id: 68,
    barangay_name: "Ribsuan",
  },
  {
    barangay_id: 1666,
    municipality_id: 68,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 1667,
    municipality_id: 68,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 1668,
    municipality_id: 68,
    barangay_name: "Sili",
  },
  {
    barangay_id: 1669,
    municipality_id: 68,
    barangay_name: "Suguidan Norte",
  },
  {
    barangay_id: 1670,
    municipality_id: 68,
    barangay_name: "Suguidan Sur",
  },
  {
    barangay_id: 1671,
    municipality_id: 68,
    barangay_name: "Tuddingan",
  },
  {
    barangay_id: 1672,
    municipality_id: 69,
    barangay_name: "Ambalite",
  },
  {
    barangay_id: 1673,
    municipality_id: 69,
    barangay_name: "Ambangonan",
  },
  {
    barangay_id: 1674,
    municipality_id: 69,
    barangay_name: "Cares",
  },
  {
    barangay_id: 1675,
    municipality_id: 69,
    barangay_name: "Cuenca",
  },
  {
    barangay_id: 1676,
    municipality_id: 69,
    barangay_name: "Duplas",
  },
  {
    barangay_id: 1677,
    municipality_id: 69,
    barangay_name: "Maoasoas Norte",
  },
  {
    barangay_id: 1678,
    municipality_id: 69,
    barangay_name: "Maoasoas Sur",
  },
  {
    barangay_id: 1679,
    municipality_id: 69,
    barangay_name: "Palina",
  },
  {
    barangay_id: 1680,
    municipality_id: 69,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 1685,
    municipality_id: 69,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 1681,
    municipality_id: 69,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 1682,
    municipality_id: 69,
    barangay_name: "Saytan",
  },
  {
    barangay_id: 1683,
    municipality_id: 69,
    barangay_name: "Tavora East",
  },
  {
    barangay_id: 1684,
    municipality_id: 69,
    barangay_name: "Tavora Proper",
  },
  {
    barangay_id: 1686,
    municipality_id: 70,
    barangay_name: "Alipang",
  },
  {
    barangay_id: 1687,
    municipality_id: 70,
    barangay_name: "Ambangonan",
  },
  {
    barangay_id: 1688,
    municipality_id: 70,
    barangay_name: "Amlang",
  },
  {
    barangay_id: 1689,
    municipality_id: 70,
    barangay_name: "Bacani",
  },
  {
    barangay_id: 1690,
    municipality_id: 70,
    barangay_name: "Bangar",
  },
  {
    barangay_id: 1691,
    municipality_id: 70,
    barangay_name: "Bani",
  },
  {
    barangay_id: 1692,
    municipality_id: 70,
    barangay_name: "Benteng-Sapilang",
  },
  {
    barangay_id: 1693,
    municipality_id: 70,
    barangay_name: "Cadumanian",
  },
  {
    barangay_id: 1694,
    municipality_id: 70,
    barangay_name: "Camp One",
  },
  {
    barangay_id: 1695,
    municipality_id: 70,
    barangay_name: "Carunuan East",
  },
  {
    barangay_id: 1696,
    municipality_id: 70,
    barangay_name: "Carunuan West",
  },
  {
    barangay_id: 1697,
    municipality_id: 70,
    barangay_name: "Casilagan",
  },
  {
    barangay_id: 1698,
    municipality_id: 70,
    barangay_name: "Cataguingtingan",
  },
  {
    barangay_id: 1699,
    municipality_id: 70,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 1700,
    municipality_id: 70,
    barangay_name: "Damortis",
  },
  {
    barangay_id: 1701,
    municipality_id: 70,
    barangay_name: "Gumot-Nagcolaran",
  },
  {
    barangay_id: 1702,
    municipality_id: 70,
    barangay_name: "Inabaan Norte",
  },
  {
    barangay_id: 1703,
    municipality_id: 70,
    barangay_name: "Inabaan Sur",
  },
  {
    barangay_id: 1712,
    municipality_id: 70,
    barangay_name: "Marcos",
  },
  {
    barangay_id: 1704,
    municipality_id: 70,
    barangay_name: "Nagtagaan",
  },
  {
    barangay_id: 1705,
    municipality_id: 70,
    barangay_name: "Nangcamotian",
  },
  {
    barangay_id: 1706,
    municipality_id: 70,
    barangay_name: "Parasapas",
  },
  {
    barangay_id: 1707,
    municipality_id: 70,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 1708,
    municipality_id: 70,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 1709,
    municipality_id: 70,
    barangay_name: "Puzon",
  },
  {
    barangay_id: 1710,
    municipality_id: 70,
    barangay_name: "Rabon",
  },
  {
    barangay_id: 1711,
    municipality_id: 70,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 1713,
    municipality_id: 70,
    barangay_name: "Subusub",
  },
  {
    barangay_id: 1714,
    municipality_id: 70,
    barangay_name: "Tabtabungao",
  },
  {
    barangay_id: 1715,
    municipality_id: 70,
    barangay_name: "Tanglag",
  },
  {
    barangay_id: 1716,
    municipality_id: 70,
    barangay_name: "Tay-ac",
  },
  {
    barangay_id: 1717,
    municipality_id: 70,
    barangay_name: "Udiao",
  },
  {
    barangay_id: 1718,
    municipality_id: 70,
    barangay_name: "Vila",
  },
  {
    barangay_id: 1719,
    municipality_id: 71,
    barangay_name: "Abut",
  },
  {
    barangay_id: 1720,
    municipality_id: 71,
    barangay_name: "Apaleng",
  },
  {
    barangay_id: 1721,
    municipality_id: 71,
    barangay_name: "Bacsil",
  },
  {
    barangay_id: 1722,
    municipality_id: 71,
    barangay_name: "Bangbangolan",
  },
  {
    barangay_id: 1723,
    municipality_id: 71,
    barangay_name: "Bangcusay",
  },
  {
    barangay_id: 1724,
    municipality_id: 71,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 1725,
    municipality_id: 71,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 1726,
    municipality_id: 71,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 1727,
    municipality_id: 71,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 1728,
    municipality_id: 71,
    barangay_name: "Baraoas",
  },
  {
    barangay_id: 1729,
    municipality_id: 71,
    barangay_name: "Bato",
  },
  {
    barangay_id: 1730,
    municipality_id: 71,
    barangay_name: "Biday",
  },
  {
    barangay_id: 1731,
    municipality_id: 71,
    barangay_name: "Birunget",
  },
  {
    barangay_id: 1732,
    municipality_id: 71,
    barangay_name: "Bungro",
  },
  {
    barangay_id: 1733,
    municipality_id: 71,
    barangay_name: "Cabaroan",
  },
  {
    barangay_id: 1734,
    municipality_id: 71,
    barangay_name: "Cabarsican",
  },
  {
    barangay_id: 1735,
    municipality_id: 71,
    barangay_name: "Cadaclan",
  },
  {
    barangay_id: 1736,
    municipality_id: 71,
    barangay_name: "Calabugao",
  },
  {
    barangay_id: 1737,
    municipality_id: 71,
    barangay_name: "Camansi",
  },
  {
    barangay_id: 1738,
    municipality_id: 71,
    barangay_name: "Canaoay",
  },
  {
    barangay_id: 1739,
    municipality_id: 71,
    barangay_name: "Carlatan",
  },
  {
    barangay_id: 1740,
    municipality_id: 71,
    barangay_name: "Catbangen",
  },
  {
    barangay_id: 1741,
    municipality_id: 71,
    barangay_name: "Dallangayan Este",
  },
  {
    barangay_id: 1742,
    municipality_id: 71,
    barangay_name: "Dallangayan Oeste",
  },
  {
    barangay_id: 1743,
    municipality_id: 71,
    barangay_name: "Dalumpinas Este",
  },
  {
    barangay_id: 1744,
    municipality_id: 71,
    barangay_name: "Dalumpinas Oeste",
  },
  {
    barangay_id: 1745,
    municipality_id: 71,
    barangay_name: "Ilocanos Norte",
  },
  {
    barangay_id: 1746,
    municipality_id: 71,
    barangay_name: "Ilocanos Sur",
  },
  {
    barangay_id: 1747,
    municipality_id: 71,
    barangay_name: "Langcuas",
  },
  {
    barangay_id: 1748,
    municipality_id: 71,
    barangay_name: "Lingsat",
  },
  {
    barangay_id: 1749,
    municipality_id: 71,
    barangay_name: "Madayegdeg",
  },
  {
    barangay_id: 1750,
    municipality_id: 71,
    barangay_name: "Mameltac",
  },
  {
    barangay_id: 1751,
    municipality_id: 71,
    barangay_name: "Masicong",
  },
  {
    barangay_id: 1752,
    municipality_id: 71,
    barangay_name: "Nagyubuyuban",
  },
  {
    barangay_id: 1753,
    municipality_id: 71,
    barangay_name: "Namtutan",
  },
  {
    barangay_id: 1754,
    municipality_id: 71,
    barangay_name: "Narra Este",
  },
  {
    barangay_id: 1755,
    municipality_id: 71,
    barangay_name: "Narra Oeste",
  },
  {
    barangay_id: 1756,
    municipality_id: 71,
    barangay_name: "Pacpaco",
  },
  {
    barangay_id: 1757,
    municipality_id: 71,
    barangay_name: "Pagdalagan",
  },
  {
    barangay_id: 1758,
    municipality_id: 71,
    barangay_name: "Pagdaraoan",
  },
  {
    barangay_id: 1759,
    municipality_id: 71,
    barangay_name: "Pagudpud",
  },
  {
    barangay_id: 1760,
    municipality_id: 71,
    barangay_name: "Pao Norte",
  },
  {
    barangay_id: 1761,
    municipality_id: 71,
    barangay_name: "Pao Sur",
  },
  {
    barangay_id: 1762,
    municipality_id: 71,
    barangay_name: "Parian",
  },
  {
    barangay_id: 1763,
    municipality_id: 71,
    barangay_name: "Pias",
  },
  {
    barangay_id: 1764,
    municipality_id: 71,
    barangay_name: "Poro",
  },
  {
    barangay_id: 1765,
    municipality_id: 71,
    barangay_name: "Puspus",
  },
  {
    barangay_id: 1766,
    municipality_id: 71,
    barangay_name: "Sacyud",
  },
  {
    barangay_id: 1767,
    municipality_id: 71,
    barangay_name: "Sagayad",
  },
  {
    barangay_id: 1768,
    municipality_id: 71,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 1769,
    municipality_id: 71,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 1770,
    municipality_id: 71,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 1771,
    municipality_id: 71,
    barangay_name: "Santiago Norte",
  },
  {
    barangay_id: 1772,
    municipality_id: 71,
    barangay_name: "Santiago Sur",
  },
  {
    barangay_id: 1773,
    municipality_id: 71,
    barangay_name: "Saoay",
  },
  {
    barangay_id: 1774,
    municipality_id: 71,
    barangay_name: "Sevilla",
  },
  {
    barangay_id: 1775,
    municipality_id: 71,
    barangay_name: "Siboan-Otong",
  },
  {
    barangay_id: 1776,
    municipality_id: 71,
    barangay_name: "Tanqui",
  },
  {
    barangay_id: 1777,
    municipality_id: 71,
    barangay_name: "Tanquigan",
  },
  {
    barangay_id: 1778,
    municipality_id: 72,
    barangay_name: "Amontoc",
  },
  {
    barangay_id: 1779,
    municipality_id: 72,
    barangay_name: "Apayao",
  },
  {
    barangay_id: 1780,
    municipality_id: 72,
    barangay_name: "Balbalayang",
  },
  {
    barangay_id: 1781,
    municipality_id: 72,
    barangay_name: "Bayabas",
  },
  {
    barangay_id: 1782,
    municipality_id: 72,
    barangay_name: "Bucao",
  },
  {
    barangay_id: 1783,
    municipality_id: 72,
    barangay_name: "Bumbuneg",
  },
  {
    barangay_id: 1792,
    municipality_id: 72,
    barangay_name: "Daking",
  },
  {
    barangay_id: 1784,
    municipality_id: 72,
    barangay_name: "Lacong",
  },
  {
    barangay_id: 1785,
    municipality_id: 72,
    barangay_name: "Lipay Este",
  },
  {
    barangay_id: 1786,
    municipality_id: 72,
    barangay_name: "Lipay Norte",
  },
  {
    barangay_id: 1787,
    municipality_id: 72,
    barangay_name: "Lipay Proper",
  },
  {
    barangay_id: 1788,
    municipality_id: 72,
    barangay_name: "Lipay Sur",
  },
  {
    barangay_id: 1789,
    municipality_id: 72,
    barangay_name: "Lon-oy",
  },
  {
    barangay_id: 1790,
    municipality_id: 72,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1791,
    municipality_id: 72,
    barangay_name: "Polipol",
  },
  {
    barangay_id: 1793,
    municipality_id: 73,
    barangay_name: "Allangigan",
  },
  {
    barangay_id: 1794,
    municipality_id: 73,
    barangay_name: "Aludaid",
  },
  {
    barangay_id: 1795,
    municipality_id: 73,
    barangay_name: "Bacsayan",
  },
  {
    barangay_id: 1796,
    municipality_id: 73,
    barangay_name: "Balballosa",
  },
  {
    barangay_id: 1797,
    municipality_id: 73,
    barangay_name: "Bambanay",
  },
  {
    barangay_id: 1798,
    municipality_id: 73,
    barangay_name: "Bugbugcao",
  },
  {
    barangay_id: 1799,
    municipality_id: 73,
    barangay_name: "Caarusipan",
  },
  {
    barangay_id: 1800,
    municipality_id: 73,
    barangay_name: "Cabaroan",
  },
  {
    barangay_id: 1801,
    municipality_id: 73,
    barangay_name: "Cabugnayan",
  },
  {
    barangay_id: 1802,
    municipality_id: 73,
    barangay_name: "Cacapian",
  },
  {
    barangay_id: 1803,
    municipality_id: 73,
    barangay_name: "Caculangan",
  },
  {
    barangay_id: 1804,
    municipality_id: 73,
    barangay_name: "Calincamasan",
  },
  {
    barangay_id: 1805,
    municipality_id: 73,
    barangay_name: "Casilagan",
  },
  {
    barangay_id: 1806,
    municipality_id: 73,
    barangay_name: "Catdongan",
  },
  {
    barangay_id: 1807,
    municipality_id: 73,
    barangay_name: "Dangdangla",
  },
  {
    barangay_id: 1808,
    municipality_id: 73,
    barangay_name: "Dasay",
  },
  {
    barangay_id: 1809,
    municipality_id: 73,
    barangay_name: "Dinanum",
  },
  {
    barangay_id: 1810,
    municipality_id: 73,
    barangay_name: "Duplas",
  },
  {
    barangay_id: 1811,
    municipality_id: 73,
    barangay_name: "Guinguinabang",
  },
  {
    barangay_id: 1812,
    municipality_id: 73,
    barangay_name: "Ili Norte (Pob.)",
  },
  {
    barangay_id: 1813,
    municipality_id: 73,
    barangay_name: "Ili Sur (Pob.)",
  },
  {
    barangay_id: 1814,
    municipality_id: 73,
    barangay_name: "Legleg",
  },
  {
    barangay_id: 1815,
    municipality_id: 73,
    barangay_name: "Lubing",
  },
  {
    barangay_id: 1816,
    municipality_id: 73,
    barangay_name: "Nadsaag",
  },
  {
    barangay_id: 1817,
    municipality_id: 73,
    barangay_name: "Nagsabaran",
  },
  {
    barangay_id: 1818,
    municipality_id: 73,
    barangay_name: "Naguirangan",
  },
  {
    barangay_id: 1819,
    municipality_id: 73,
    barangay_name: "Naguituban",
  },
  {
    barangay_id: 1820,
    municipality_id: 73,
    barangay_name: "Nagyubuyuban",
  },
  {
    barangay_id: 1821,
    municipality_id: 73,
    barangay_name: "Oaquing",
  },
  {
    barangay_id: 1822,
    municipality_id: 73,
    barangay_name: "Pacpacac",
  },
  {
    barangay_id: 1823,
    municipality_id: 73,
    barangay_name: "Pagdildilan",
  },
  {
    barangay_id: 1824,
    municipality_id: 73,
    barangay_name: "Panicsican",
  },
  {
    barangay_id: 1825,
    municipality_id: 73,
    barangay_name: "Quidem",
  },
  {
    barangay_id: 1826,
    municipality_id: 73,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 1827,
    municipality_id: 73,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 1828,
    municipality_id: 73,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 1829,
    municipality_id: 73,
    barangay_name: "Saracat",
  },
  {
    barangay_id: 1830,
    municipality_id: 73,
    barangay_name: "Sinapangan",
  },
  {
    barangay_id: 1831,
    municipality_id: 73,
    barangay_name: "Taboc",
  },
  {
    barangay_id: 1832,
    municipality_id: 73,
    barangay_name: "Talogtog",
  },
  {
    barangay_id: 1833,
    municipality_id: 73,
    barangay_name: "Urbiztondo",
  },
  {
    barangay_id: 1834,
    municipality_id: 74,
    barangay_name: "Ambitacay",
  },
  {
    barangay_id: 1835,
    municipality_id: 74,
    barangay_name: "Bail",
  },
  {
    barangay_id: 1836,
    municipality_id: 74,
    barangay_name: "Balaoc",
  },
  {
    barangay_id: 1837,
    municipality_id: 74,
    barangay_name: "Balsaan",
  },
  {
    barangay_id: 1838,
    municipality_id: 74,
    barangay_name: "Baybay",
  },
  {
    barangay_id: 1839,
    municipality_id: 74,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 1840,
    municipality_id: 74,
    barangay_name: "Casantaan",
  },
  {
    barangay_id: 1841,
    municipality_id: 74,
    barangay_name: "Casilagan",
  },
  {
    barangay_id: 1842,
    municipality_id: 74,
    barangay_name: "Cupang",
  },
  {
    barangay_id: 1843,
    municipality_id: 74,
    barangay_name: "Damortis",
  },
  {
    barangay_id: 1844,
    municipality_id: 74,
    barangay_name: "Fernando",
  },
  {
    barangay_id: 1845,
    municipality_id: 74,
    barangay_name: "Linong",
  },
  {
    barangay_id: 1846,
    municipality_id: 74,
    barangay_name: "Lomboy",
  },
  {
    barangay_id: 1847,
    municipality_id: 74,
    barangay_name: "Malabago",
  },
  {
    barangay_id: 1848,
    municipality_id: 74,
    barangay_name: "Namboongan",
  },
  {
    barangay_id: 1849,
    municipality_id: 74,
    barangay_name: "Namonitan",
  },
  {
    barangay_id: 1850,
    municipality_id: 74,
    barangay_name: "Narvacan",
  },
  {
    barangay_id: 1851,
    municipality_id: 74,
    barangay_name: "Patac",
  },
  {
    barangay_id: 1852,
    municipality_id: 74,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1853,
    municipality_id: 74,
    barangay_name: "Pongpong",
  },
  {
    barangay_id: 1854,
    municipality_id: 74,
    barangay_name: "Raois",
  },
  {
    barangay_id: 1856,
    municipality_id: 74,
    barangay_name: "Tococ",
  },
  {
    barangay_id: 1855,
    municipality_id: 74,
    barangay_name: "Tubod",
  },
  {
    barangay_id: 1857,
    municipality_id: 74,
    barangay_name: "Ubagan",
  },
  {
    barangay_id: 1858,
    municipality_id: 75,
    barangay_name: "Corrooy",
  },
  {
    barangay_id: 1859,
    municipality_id: 75,
    barangay_name: "Lettac Norte",
  },
  {
    barangay_id: 1860,
    municipality_id: 75,
    barangay_name: "Lettac Sur",
  },
  {
    barangay_id: 1861,
    municipality_id: 75,
    barangay_name: "Mangaan",
  },
  {
    barangay_id: 1862,
    municipality_id: 75,
    barangay_name: "Paagan",
  },
  {
    barangay_id: 1863,
    municipality_id: 75,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1864,
    municipality_id: 75,
    barangay_name: "Puguil",
  },
  {
    barangay_id: 1865,
    municipality_id: 75,
    barangay_name: "Ramot",
  },
  {
    barangay_id: 1866,
    municipality_id: 75,
    barangay_name: "Sapdaan",
  },
  {
    barangay_id: 1867,
    municipality_id: 75,
    barangay_name: "Sasaba",
  },
  {
    barangay_id: 1868,
    municipality_id: 75,
    barangay_name: "Tubaday",
  },
  {
    barangay_id: 1869,
    municipality_id: 76,
    barangay_name: "Bigbiga",
  },
  {
    barangay_id: 1885,
    municipality_id: 76,
    barangay_name: "Bulalaan",
  },
  {
    barangay_id: 1870,
    municipality_id: 76,
    barangay_name: "Castro",
  },
  {
    barangay_id: 1871,
    municipality_id: 76,
    barangay_name: "Duplas",
  },
  {
    barangay_id: 1873,
    municipality_id: 76,
    barangay_name: "Ilocano",
  },
  {
    barangay_id: 1872,
    municipality_id: 76,
    barangay_name: "Ipet",
  },
  {
    barangay_id: 1874,
    municipality_id: 76,
    barangay_name: "Maliclico",
  },
  {
    barangay_id: 1876,
    municipality_id: 76,
    barangay_name: "Namaltugan",
  },
  {
    barangay_id: 1875,
    municipality_id: 76,
    barangay_name: "Old Central",
  },
  {
    barangay_id: 1877,
    municipality_id: 76,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1878,
    municipality_id: 76,
    barangay_name: "Porporiket",
  },
  {
    barangay_id: 1879,
    municipality_id: 76,
    barangay_name: "San Francisco Norte",
  },
  {
    barangay_id: 1880,
    municipality_id: 76,
    barangay_name: "San Francisco Sur",
  },
  {
    barangay_id: 1881,
    municipality_id: 76,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 1882,
    municipality_id: 76,
    barangay_name: "Sengngat",
  },
  {
    barangay_id: 1883,
    municipality_id: 76,
    barangay_name: "Turod",
  },
  {
    barangay_id: 1884,
    municipality_id: 76,
    barangay_name: "Up-uplas",
  },
  {
    barangay_id: 1886,
    municipality_id: 77,
    barangay_name: "Amallapay",
  },
  {
    barangay_id: 1887,
    municipality_id: 77,
    barangay_name: "Anduyan",
  },
  {
    barangay_id: 1888,
    municipality_id: 77,
    barangay_name: "Caoigue",
  },
  {
    barangay_id: 1889,
    municipality_id: 77,
    barangay_name: "Francia Sur",
  },
  {
    barangay_id: 1890,
    municipality_id: 77,
    barangay_name: "Francia West",
  },
  {
    barangay_id: 1891,
    municipality_id: 77,
    barangay_name: "Garcia",
  },
  {
    barangay_id: 1892,
    municipality_id: 77,
    barangay_name: "Gonzales",
  },
  {
    barangay_id: 1893,
    municipality_id: 77,
    barangay_name: "Halog East",
  },
  {
    barangay_id: 1894,
    municipality_id: 77,
    barangay_name: "Halog West",
  },
  {
    barangay_id: 1895,
    municipality_id: 77,
    barangay_name: "Leones East",
  },
  {
    barangay_id: 1896,
    municipality_id: 77,
    barangay_name: "Leones West",
  },
  {
    barangay_id: 1897,
    municipality_id: 77,
    barangay_name: "Linapew",
  },
  {
    barangay_id: 1903,
    municipality_id: 77,
    barangay_name: "Lloren",
  },
  {
    barangay_id: 1898,
    municipality_id: 77,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 1899,
    municipality_id: 77,
    barangay_name: "Pideg",
  },
  {
    barangay_id: 1900,
    municipality_id: 77,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1901,
    municipality_id: 77,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 1902,
    municipality_id: 77,
    barangay_name: "Santa Teresa",
  },
  {
    barangay_id: 1904,
    municipality_id: 78,
    barangay_name: "Allabon",
  },
  {
    barangay_id: 1905,
    municipality_id: 78,
    barangay_name: "Aloleng",
  },
  {
    barangay_id: 1906,
    municipality_id: 78,
    barangay_name: "Bangan-Oda",
  },
  {
    barangay_id: 1907,
    municipality_id: 78,
    barangay_name: "Baruan",
  },
  {
    barangay_id: 1908,
    municipality_id: 78,
    barangay_name: "Boboy",
  },
  {
    barangay_id: 1909,
    municipality_id: 78,
    barangay_name: "Cayungnan",
  },
  {
    barangay_id: 1910,
    municipality_id: 78,
    barangay_name: "Dangley",
  },
  {
    barangay_id: 1911,
    municipality_id: 78,
    barangay_name: "Gayusan",
  },
  {
    barangay_id: 1912,
    municipality_id: 78,
    barangay_name: "Macaboboni",
  },
  {
    barangay_id: 1913,
    municipality_id: 78,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 1914,
    municipality_id: 78,
    barangay_name: "Namatucan",
  },
  {
    barangay_id: 1915,
    municipality_id: 78,
    barangay_name: "Patar",
  },
  {
    barangay_id: 1916,
    municipality_id: 78,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 1917,
    municipality_id: 78,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 1918,
    municipality_id: 78,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 1919,
    municipality_id: 78,
    barangay_name: "Tupa",
  },
  {
    barangay_id: 1920,
    municipality_id: 78,
    barangay_name: "Viga",
  },
  {
    barangay_id: 1921,
    municipality_id: 79,
    barangay_name: "Bayaoas",
  },
  {
    barangay_id: 1922,
    municipality_id: 79,
    barangay_name: "Baybay",
  },
  {
    barangay_id: 1923,
    municipality_id: 79,
    barangay_name: "Bocacliw",
  },
  {
    barangay_id: 1924,
    municipality_id: 79,
    barangay_name: "Bocboc East",
  },
  {
    barangay_id: 1925,
    municipality_id: 79,
    barangay_name: "Bocboc West",
  },
  {
    barangay_id: 1926,
    municipality_id: 79,
    barangay_name: "Buer",
  },
  {
    barangay_id: 1927,
    municipality_id: 79,
    barangay_name: "Calsib",
  },
  {
    barangay_id: 1934,
    municipality_id: 79,
    barangay_name: "Laoag",
  },
  {
    barangay_id: 1935,
    municipality_id: 79,
    barangay_name: "Manlocboc",
  },
  {
    barangay_id: 1928,
    municipality_id: 79,
    barangay_name: "Ninoy",
  },
  {
    barangay_id: 1936,
    municipality_id: 79,
    barangay_name: "Panacol",
  },
  {
    barangay_id: 1929,
    municipality_id: 79,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1930,
    municipality_id: 79,
    barangay_name: "Pogomboa",
  },
  {
    barangay_id: 1931,
    municipality_id: 79,
    barangay_name: "Pogonsili",
  },
  {
    barangay_id: 1932,
    municipality_id: 79,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 1933,
    municipality_id: 79,
    barangay_name: "Tampac",
  },
  {
    barangay_id: 1937,
    municipality_id: 80,
    barangay_name: "Alos",
  },
  {
    barangay_id: 1938,
    municipality_id: 80,
    barangay_name: "Amandiego",
  },
  {
    barangay_id: 1939,
    municipality_id: 80,
    barangay_name: "Amangbangan",
  },
  {
    barangay_id: 1940,
    municipality_id: 80,
    barangay_name: "Balangobong",
  },
  {
    barangay_id: 1941,
    municipality_id: 80,
    barangay_name: "Balayang",
  },
  {
    barangay_id: 1944,
    municipality_id: 80,
    barangay_name: "Baleyadaan",
  },
  {
    barangay_id: 1942,
    municipality_id: 80,
    barangay_name: "Bisocol",
  },
  {
    barangay_id: 1943,
    municipality_id: 80,
    barangay_name: "Bolaney",
  },
  {
    barangay_id: 1945,
    municipality_id: 80,
    barangay_name: "Bued",
  },
  {
    barangay_id: 1946,
    municipality_id: 80,
    barangay_name: "Cabatuan",
  },
  {
    barangay_id: 1947,
    municipality_id: 80,
    barangay_name: "Cayucay",
  },
  {
    barangay_id: 1948,
    municipality_id: 80,
    barangay_name: "Dulacac",
  },
  {
    barangay_id: 1949,
    municipality_id: 80,
    barangay_name: "Inerangan",
  },
  {
    barangay_id: 1972,
    municipality_id: 80,
    barangay_name: "Landoc",
  },
  {
    barangay_id: 1950,
    municipality_id: 80,
    barangay_name: "Linmansangan",
  },
  {
    barangay_id: 1951,
    municipality_id: 80,
    barangay_name: "Lucap",
  },
  {
    barangay_id: 1973,
    municipality_id: 80,
    barangay_name: "Maawi",
  },
  {
    barangay_id: 1952,
    municipality_id: 80,
    barangay_name: "Macatiw",
  },
  {
    barangay_id: 1953,
    municipality_id: 80,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 1954,
    municipality_id: 80,
    barangay_name: "Mona",
  },
  {
    barangay_id: 1955,
    municipality_id: 80,
    barangay_name: "Palamis",
  },
  {
    barangay_id: 1974,
    municipality_id: 80,
    barangay_name: "Pandan",
  },
  {
    barangay_id: 1956,
    municipality_id: 80,
    barangay_name: "Pangapisan",
  },
  {
    barangay_id: 1957,
    municipality_id: 80,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 1958,
    municipality_id: 80,
    barangay_name: "Pocalpocal",
  },
  {
    barangay_id: 1959,
    municipality_id: 80,
    barangay_name: "Pogo",
  },
  {
    barangay_id: 1960,
    municipality_id: 80,
    barangay_name: "Polo",
  },
  {
    barangay_id: 1961,
    municipality_id: 80,
    barangay_name: "Quibuar",
  },
  {
    barangay_id: 1962,
    municipality_id: 80,
    barangay_name: "Sabangan",
  },
  {
    barangay_id: 1975,
    municipality_id: 80,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 1963,
    municipality_id: 80,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 1964,
    municipality_id: 80,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 1965,
    municipality_id: 80,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 1966,
    municipality_id: 80,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 1967,
    municipality_id: 80,
    barangay_name: "Tanaytay",
  },
  {
    barangay_id: 1968,
    municipality_id: 80,
    barangay_name: "Tangcarang",
  },
  {
    barangay_id: 1969,
    municipality_id: 80,
    barangay_name: "Tawintawin",
  },
  {
    barangay_id: 1970,
    municipality_id: 80,
    barangay_name: "Telbang",
  },
  {
    barangay_id: 1971,
    municipality_id: 80,
    barangay_name: "Victoria",
  },
  {
    barangay_id: 1976,
    municipality_id: 81,
    barangay_name: "Anulid",
  },
  {
    barangay_id: 1977,
    municipality_id: 81,
    barangay_name: "Atainan",
  },
  {
    barangay_id: 1978,
    municipality_id: 81,
    barangay_name: "Bersamin",
  },
  {
    barangay_id: 1979,
    municipality_id: 81,
    barangay_name: "Canarvacanan",
  },
  {
    barangay_id: 1980,
    municipality_id: 81,
    barangay_name: "Caranglaan",
  },
  {
    barangay_id: 1981,
    municipality_id: 81,
    barangay_name: "Curareng",
  },
  {
    barangay_id: 1982,
    municipality_id: 81,
    barangay_name: "Gualsic",
  },
  {
    barangay_id: 1983,
    municipality_id: 81,
    barangay_name: "Kasikis",
  },
  {
    barangay_id: 1984,
    municipality_id: 81,
    barangay_name: "Laoac",
  },
  {
    barangay_id: 1985,
    municipality_id: 81,
    barangay_name: "Macayo",
  },
  {
    barangay_id: 1986,
    municipality_id: 81,
    barangay_name: "Pindangan Centro",
  },
  {
    barangay_id: 1987,
    municipality_id: 81,
    barangay_name: "Pindangan East",
  },
  {
    barangay_id: 1988,
    municipality_id: 81,
    barangay_name: "Pindangan West",
  },
  {
    barangay_id: 1989,
    municipality_id: 81,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 1990,
    municipality_id: 81,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 1991,
    municipality_id: 81,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 1992,
    municipality_id: 81,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 1993,
    municipality_id: 81,
    barangay_name: "San Pedro Apartado",
  },
  {
    barangay_id: 1994,
    municipality_id: 81,
    barangay_name: "San Pedro IlI",
  },
  {
    barangay_id: 1995,
    municipality_id: 81,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 1996,
    municipality_id: 81,
    barangay_name: "Vacante",
  },
  {
    barangay_id: 1998,
    municipality_id: 82,
    barangay_name: "Awag",
  },
  {
    barangay_id: 1997,
    municipality_id: 82,
    barangay_name: "Awile",
  },
  {
    barangay_id: 1999,
    municipality_id: 82,
    barangay_name: "Batiarao",
  },
  {
    barangay_id: 2000,
    municipality_id: 82,
    barangay_name: "Cabungan",
  },
  {
    barangay_id: 2001,
    municipality_id: 82,
    barangay_name: "Carot",
  },
  {
    barangay_id: 2002,
    municipality_id: 82,
    barangay_name: "Dolaoan",
  },
  {
    barangay_id: 2003,
    municipality_id: 82,
    barangay_name: "Imbo",
  },
  {
    barangay_id: 2004,
    municipality_id: 82,
    barangay_name: "Macaleeng",
  },
  {
    barangay_id: 2005,
    municipality_id: 82,
    barangay_name: "Macandocandong",
  },
  {
    barangay_id: 2006,
    municipality_id: 82,
    barangay_name: "Mal-ong",
  },
  {
    barangay_id: 2007,
    municipality_id: 82,
    barangay_name: "Namagbagan",
  },
  {
    barangay_id: 2008,
    municipality_id: 82,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2009,
    municipality_id: 82,
    barangay_name: "Roxas",
  },
  {
    barangay_id: 2010,
    municipality_id: 82,
    barangay_name: "Sablig",
  },
  {
    barangay_id: 2011,
    municipality_id: 82,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 2012,
    municipality_id: 82,
    barangay_name: "Siapar",
  },
  {
    barangay_id: 2013,
    municipality_id: 82,
    barangay_name: "Tondol",
  },
  {
    barangay_id: 2014,
    municipality_id: 82,
    barangay_name: "Toritori",
  },
  {
    barangay_id: 2015,
    municipality_id: 83,
    barangay_name: "Ariston Este",
  },
  {
    barangay_id: 2016,
    municipality_id: 83,
    barangay_name: "Ariston Weste",
  },
  {
    barangay_id: 2017,
    municipality_id: 83,
    barangay_name: "Bantog",
  },
  {
    barangay_id: 2018,
    municipality_id: 83,
    barangay_name: "Baro",
  },
  {
    barangay_id: 2019,
    municipality_id: 83,
    barangay_name: "Bobonan",
  },
  {
    barangay_id: 2020,
    municipality_id: 83,
    barangay_name: "Cabalitian",
  },
  {
    barangay_id: 2021,
    municipality_id: 83,
    barangay_name: "Calepaan",
  },
  {
    barangay_id: 2022,
    municipality_id: 83,
    barangay_name: "Carosucan Norte",
  },
  {
    barangay_id: 2023,
    municipality_id: 83,
    barangay_name: "Carosucan Sur",
  },
  {
    barangay_id: 2024,
    municipality_id: 83,
    barangay_name: "Coldit",
  },
  {
    barangay_id: 2025,
    municipality_id: 83,
    barangay_name: "Domanpot",
  },
  {
    barangay_id: 2026,
    municipality_id: 83,
    barangay_name: "Dupac",
  },
  {
    barangay_id: 2027,
    municipality_id: 83,
    barangay_name: "Macalong",
  },
  {
    barangay_id: 2028,
    municipality_id: 83,
    barangay_name: "Palaris",
  },
  {
    barangay_id: 2029,
    municipality_id: 83,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 2030,
    municipality_id: 83,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 2031,
    municipality_id: 83,
    barangay_name: "San Vicente Este",
  },
  {
    barangay_id: 2032,
    municipality_id: 83,
    barangay_name: "San Vicente Weste",
  },
  {
    barangay_id: 2033,
    municipality_id: 83,
    barangay_name: "Sanchez",
  },
  {
    barangay_id: 2034,
    municipality_id: 83,
    barangay_name: "Sobol",
  },
  {
    barangay_id: 2035,
    municipality_id: 83,
    barangay_name: "Toboy",
  },
  {
    barangay_id: 2036,
    municipality_id: 84,
    barangay_name: "Angayan Norte",
  },
  {
    barangay_id: 2037,
    municipality_id: 84,
    barangay_name: "Angayan Sur",
  },
  {
    barangay_id: 2038,
    municipality_id: 84,
    barangay_name: "Capulaan",
  },
  {
    barangay_id: 2039,
    municipality_id: 84,
    barangay_name: "Esmeralda",
  },
  {
    barangay_id: 2040,
    municipality_id: 84,
    barangay_name: "Kita-kita",
  },
  {
    barangay_id: 2041,
    municipality_id: 84,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 2042,
    municipality_id: 84,
    barangay_name: "Mauban",
  },
  {
    barangay_id: 2043,
    municipality_id: 84,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2044,
    municipality_id: 84,
    barangay_name: "Pugaro",
  },
  {
    barangay_id: 2045,
    municipality_id: 84,
    barangay_name: "Rajal",
  },
  {
    barangay_id: 2046,
    municipality_id: 84,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 2047,
    municipality_id: 84,
    barangay_name: "San Aurelio 1st",
  },
  {
    barangay_id: 2048,
    municipality_id: 84,
    barangay_name: "San Aurelio 2nd",
  },
  {
    barangay_id: 2049,
    municipality_id: 84,
    barangay_name: "San Aurelio 3rd",
  },
  {
    barangay_id: 2050,
    municipality_id: 84,
    barangay_name: "San Joaquin",
  },
  {
    barangay_id: 2051,
    municipality_id: 84,
    barangay_name: "San Julian",
  },
  {
    barangay_id: 2052,
    municipality_id: 84,
    barangay_name: "San Leon",
  },
  {
    barangay_id: 2053,
    municipality_id: 84,
    barangay_name: "San Marcelino",
  },
  {
    barangay_id: 2054,
    municipality_id: 84,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 2055,
    municipality_id: 84,
    barangay_name: "San Raymundo",
  },
  {
    barangay_id: 2056,
    municipality_id: 85,
    barangay_name: "Ambabaay",
  },
  {
    barangay_id: 2057,
    municipality_id: 85,
    barangay_name: "Aporao",
  },
  {
    barangay_id: 2058,
    municipality_id: 85,
    barangay_name: "Arwas",
  },
  {
    barangay_id: 2059,
    municipality_id: 85,
    barangay_name: "Ballag",
  },
  {
    barangay_id: 2060,
    municipality_id: 85,
    barangay_name: "Banog Norte",
  },
  {
    barangay_id: 2061,
    municipality_id: 85,
    barangay_name: "Banog Sur",
  },
  {
    barangay_id: 2082,
    municipality_id: 85,
    barangay_name: "Calabeng",
  },
  {
    barangay_id: 2062,
    municipality_id: 85,
    barangay_name: "Centro Toma",
  },
  {
    barangay_id: 2063,
    municipality_id: 85,
    barangay_name: "Colayo",
  },
  {
    barangay_id: 2064,
    municipality_id: 85,
    barangay_name: "Dacap Norte",
  },
  {
    barangay_id: 2065,
    municipality_id: 85,
    barangay_name: "Dacap Sur",
  },
  {
    barangay_id: 2066,
    municipality_id: 85,
    barangay_name: "Garrita",
  },
  {
    barangay_id: 2067,
    municipality_id: 85,
    barangay_name: "Luac",
  },
  {
    barangay_id: 2068,
    municipality_id: 85,
    barangay_name: "Macabit",
  },
  {
    barangay_id: 2069,
    municipality_id: 85,
    barangay_name: "Masidem",
  },
  {
    barangay_id: 2070,
    municipality_id: 85,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2071,
    municipality_id: 85,
    barangay_name: "Quinaoayanan",
  },
  {
    barangay_id: 2072,
    municipality_id: 85,
    barangay_name: "Ranao",
  },
  {
    barangay_id: 2073,
    municipality_id: 85,
    barangay_name: "Ranom Iloco",
  },
  {
    barangay_id: 2074,
    municipality_id: 85,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 2075,
    municipality_id: 85,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 2076,
    municipality_id: 85,
    barangay_name: "San Simon",
  },
  {
    barangay_id: 2077,
    municipality_id: 85,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 2078,
    municipality_id: 85,
    barangay_name: "Tiep",
  },
  {
    barangay_id: 2079,
    municipality_id: 85,
    barangay_name: "Tipor",
  },
  {
    barangay_id: 2080,
    municipality_id: 85,
    barangay_name: "Tugui Grande",
  },
  {
    barangay_id: 2081,
    municipality_id: 85,
    barangay_name: "Tugui Norte",
  },
  {
    barangay_id: 2083,
    municipality_id: 86,
    barangay_name: "Anambongan",
  },
  {
    barangay_id: 2084,
    municipality_id: 86,
    barangay_name: "Bayoyong",
  },
  {
    barangay_id: 2085,
    municipality_id: 86,
    barangay_name: "Cabeldatan",
  },
  {
    barangay_id: 2086,
    municipality_id: 86,
    barangay_name: "Dumpay",
  },
  {
    barangay_id: 2087,
    municipality_id: 86,
    barangay_name: "Malimpec East",
  },
  {
    barangay_id: 2088,
    municipality_id: 86,
    barangay_name: "Mapolopolo",
  },
  {
    barangay_id: 2089,
    municipality_id: 86,
    barangay_name: "Nalneran",
  },
  {
    barangay_id: 2090,
    municipality_id: 86,
    barangay_name: "Navatat",
  },
  {
    barangay_id: 2091,
    municipality_id: 86,
    barangay_name: "Obong",
  },
  {
    barangay_id: 2092,
    municipality_id: 86,
    barangay_name: "Osmena Sr.",
  },
  {
    barangay_id: 2093,
    municipality_id: 86,
    barangay_name: "Palma",
  },
  {
    barangay_id: 2094,
    municipality_id: 86,
    barangay_name: "Patacbo",
  },
  {
    barangay_id: 2095,
    municipality_id: 86,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2096,
    municipality_id: 87,
    barangay_name: "Artacho",
  },
  {
    barangay_id: 2113,
    municipality_id: 87,
    barangay_name: "Baluyot",
  },
  {
    barangay_id: 2097,
    municipality_id: 87,
    barangay_name: "Cabuaan",
  },
  {
    barangay_id: 2098,
    municipality_id: 87,
    barangay_name: "Cacandongan",
  },
  {
    barangay_id: 2099,
    municipality_id: 87,
    barangay_name: "Diaz",
  },
  {
    barangay_id: 2109,
    municipality_id: 87,
    barangay_name: "Ketegan",
  },
  {
    barangay_id: 2100,
    municipality_id: 87,
    barangay_name: "Nandacan",
  },
  {
    barangay_id: 2101,
    municipality_id: 87,
    barangay_name: "Nibaliw Norte",
  },
  {
    barangay_id: 2102,
    municipality_id: 87,
    barangay_name: "Nibaliw Sur",
  },
  {
    barangay_id: 2103,
    municipality_id: 87,
    barangay_name: "Palisoc",
  },
  {
    barangay_id: 2104,
    municipality_id: 87,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 2105,
    municipality_id: 87,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 2106,
    municipality_id: 87,
    barangay_name: "Pogo",
  },
  {
    barangay_id: 2107,
    municipality_id: 87,
    barangay_name: "Poponto",
  },
  {
    barangay_id: 2108,
    municipality_id: 87,
    barangay_name: "Primicias",
  },
  {
    barangay_id: 2110,
    municipality_id: 87,
    barangay_name: "Sinabaan",
  },
  {
    barangay_id: 2111,
    municipality_id: 87,
    barangay_name: "Vacante",
  },
  {
    barangay_id: 2112,
    municipality_id: 87,
    barangay_name: "Villanueva",
  },
  {
    barangay_id: 2114,
    municipality_id: 88,
    barangay_name: "Alinggan",
  },
  {
    barangay_id: 2115,
    municipality_id: 88,
    barangay_name: "Amamperez",
  },
  {
    barangay_id: 2116,
    municipality_id: 88,
    barangay_name: "Amancosiling Norte",
  },
  {
    barangay_id: 2117,
    municipality_id: 88,
    barangay_name: "Amancosiling Sur",
  },
  {
    barangay_id: 2118,
    municipality_id: 88,
    barangay_name: "Ambayat I",
  },
  {
    barangay_id: 2119,
    municipality_id: 88,
    barangay_name: "Ambayat II",
  },
  {
    barangay_id: 2120,
    municipality_id: 88,
    barangay_name: "Apalen",
  },
  {
    barangay_id: 2121,
    municipality_id: 88,
    barangay_name: "Asin",
  },
  {
    barangay_id: 2122,
    municipality_id: 88,
    barangay_name: "Ataynan",
  },
  {
    barangay_id: 2123,
    municipality_id: 88,
    barangay_name: "Bacnono",
  },
  {
    barangay_id: 2124,
    municipality_id: 88,
    barangay_name: "Balaybuaya",
  },
  {
    barangay_id: 2125,
    municipality_id: 88,
    barangay_name: "Banaban",
  },
  {
    barangay_id: 2126,
    municipality_id: 88,
    barangay_name: "Bani",
  },
  {
    barangay_id: 2127,
    municipality_id: 88,
    barangay_name: "Batangcawa",
  },
  {
    barangay_id: 2128,
    municipality_id: 88,
    barangay_name: "Beleng",
  },
  {
    barangay_id: 2129,
    municipality_id: 88,
    barangay_name: "Bical Norte",
  },
  {
    barangay_id: 2130,
    municipality_id: 88,
    barangay_name: "Bical Sur",
  },
  {
    barangay_id: 2131,
    municipality_id: 88,
    barangay_name: "Bongato East",
  },
  {
    barangay_id: 2132,
    municipality_id: 88,
    barangay_name: "Bongato West",
  },
  {
    barangay_id: 2133,
    municipality_id: 88,
    barangay_name: "Buayaen",
  },
  {
    barangay_id: 2134,
    municipality_id: 88,
    barangay_name: "Buenlag 1st",
  },
  {
    barangay_id: 2135,
    municipality_id: 88,
    barangay_name: "Buenlag 2nd",
  },
  {
    barangay_id: 2136,
    municipality_id: 88,
    barangay_name: "Cadre Site",
  },
  {
    barangay_id: 2137,
    municipality_id: 88,
    barangay_name: "Carungay",
  },
  {
    barangay_id: 2138,
    municipality_id: 88,
    barangay_name: "Caturay",
  },
  {
    barangay_id: 2176,
    municipality_id: 88,
    barangay_name: "Darawey",
  },
  {
    barangay_id: 2139,
    municipality_id: 88,
    barangay_name: "Duera",
  },
  {
    barangay_id: 2140,
    municipality_id: 88,
    barangay_name: "Dusoc",
  },
  {
    barangay_id: 2141,
    municipality_id: 88,
    barangay_name: "Hermoza",
  },
  {
    barangay_id: 2142,
    municipality_id: 88,
    barangay_name: "Idong",
  },
  {
    barangay_id: 2143,
    municipality_id: 88,
    barangay_name: "Inanlorenzana",
  },
  {
    barangay_id: 2144,
    municipality_id: 88,
    barangay_name: "Inirangan",
  },
  {
    barangay_id: 2145,
    municipality_id: 88,
    barangay_name: "Iton",
  },
  {
    barangay_id: 2146,
    municipality_id: 88,
    barangay_name: "Langiran",
  },
  {
    barangay_id: 2147,
    municipality_id: 88,
    barangay_name: "Ligue",
  },
  {
    barangay_id: 2148,
    municipality_id: 88,
    barangay_name: "M. H. del Pilar",
  },
  {
    barangay_id: 2149,
    municipality_id: 88,
    barangay_name: "Macayocayo",
  },
  {
    barangay_id: 2150,
    municipality_id: 88,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 2151,
    municipality_id: 88,
    barangay_name: "Maigpa",
  },
  {
    barangay_id: 2152,
    municipality_id: 88,
    barangay_name: "Malimpec",
  },
  {
    barangay_id: 2153,
    municipality_id: 88,
    barangay_name: "Malioer",
  },
  {
    barangay_id: 2154,
    municipality_id: 88,
    barangay_name: "Managos",
  },
  {
    barangay_id: 2155,
    municipality_id: 88,
    barangay_name: "Manambong Norte",
  },
  {
    barangay_id: 2156,
    municipality_id: 88,
    barangay_name: "Manambong Parte",
  },
  {
    barangay_id: 2157,
    municipality_id: 88,
    barangay_name: "Manambong Sur",
  },
  {
    barangay_id: 2158,
    municipality_id: 88,
    barangay_name: "Mangayao",
  },
  {
    barangay_id: 2159,
    municipality_id: 88,
    barangay_name: "Nalsian Norte",
  },
  {
    barangay_id: 2160,
    municipality_id: 88,
    barangay_name: "Nalsian Sur",
  },
  {
    barangay_id: 2161,
    municipality_id: 88,
    barangay_name: "Pangdel",
  },
  {
    barangay_id: 2162,
    municipality_id: 88,
    barangay_name: "Pantol",
  },
  {
    barangay_id: 2163,
    municipality_id: 88,
    barangay_name: "Paragos",
  },
  {
    barangay_id: 2164,
    municipality_id: 88,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 2165,
    municipality_id: 88,
    barangay_name: "Pugo",
  },
  {
    barangay_id: 2166,
    municipality_id: 88,
    barangay_name: "Reynado",
  },
  {
    barangay_id: 2167,
    municipality_id: 88,
    barangay_name: "San Gabriel 1st",
  },
  {
    barangay_id: 2168,
    municipality_id: 88,
    barangay_name: "San Gabriel 2nd",
  },
  {
    barangay_id: 2169,
    municipality_id: 88,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 2170,
    municipality_id: 88,
    barangay_name: "Sangcagulis",
  },
  {
    barangay_id: 2171,
    municipality_id: 88,
    barangay_name: "Sanlibo",
  },
  {
    barangay_id: 2172,
    municipality_id: 88,
    barangay_name: "Sapang",
  },
  {
    barangay_id: 2173,
    municipality_id: 88,
    barangay_name: "Tamaro",
  },
  {
    barangay_id: 2174,
    municipality_id: 88,
    barangay_name: "Tambac",
  },
  {
    barangay_id: 2175,
    municipality_id: 88,
    barangay_name: "Tampog",
  },
  {
    barangay_id: 2177,
    municipality_id: 88,
    barangay_name: "Tanolong",
  },
  {
    barangay_id: 2178,
    municipality_id: 88,
    barangay_name: "Tatarao",
  },
  {
    barangay_id: 2179,
    municipality_id: 88,
    barangay_name: "Telbang",
  },
  {
    barangay_id: 2180,
    municipality_id: 88,
    barangay_name: "Tococ East",
  },
  {
    barangay_id: 2181,
    municipality_id: 88,
    barangay_name: "Tococ West",
  },
  {
    barangay_id: 2182,
    municipality_id: 88,
    barangay_name: "Warding",
  },
  {
    barangay_id: 2183,
    municipality_id: 88,
    barangay_name: "Wawa",
  },
  {
    barangay_id: 2184,
    municipality_id: 88,
    barangay_name: "Zone I (Pob.)",
  },
  {
    barangay_id: 2185,
    municipality_id: 88,
    barangay_name: "Zone II (Pob.)",
  },
  {
    barangay_id: 2186,
    municipality_id: 88,
    barangay_name: "Zone III (Pob.)",
  },
  {
    barangay_id: 2187,
    municipality_id: 88,
    barangay_name: "Zone IV (Pob.)",
  },
  {
    barangay_id: 2188,
    municipality_id: 88,
    barangay_name: "Zone V (Pob.)",
  },
  {
    barangay_id: 2189,
    municipality_id: 88,
    barangay_name: "Zone VI (Pob.)",
  },
  {
    barangay_id: 2190,
    municipality_id: 88,
    barangay_name: "Zone VII (Pob.)",
  },
  {
    barangay_id: 2191,
    municipality_id: 89,
    barangay_name: "Balangobong",
  },
  {
    barangay_id: 2192,
    municipality_id: 89,
    barangay_name: "Bued",
  },
  {
    barangay_id: 2193,
    municipality_id: 89,
    barangay_name: "Bugayong",
  },
  {
    barangay_id: 2194,
    municipality_id: 89,
    barangay_name: "Camangaan",
  },
  {
    barangay_id: 2195,
    municipality_id: 89,
    barangay_name: "Canarvacanan",
  },
  {
    barangay_id: 2196,
    municipality_id: 89,
    barangay_name: "Capas",
  },
  {
    barangay_id: 2197,
    municipality_id: 89,
    barangay_name: "Cili",
  },
  {
    barangay_id: 2198,
    municipality_id: 89,
    barangay_name: "Dumayat",
  },
  {
    barangay_id: 2199,
    municipality_id: 89,
    barangay_name: "Linmansangan",
  },
  {
    barangay_id: 2200,
    municipality_id: 89,
    barangay_name: "Mangcasuy",
  },
  {
    barangay_id: 2201,
    municipality_id: 89,
    barangay_name: "Moreno",
  },
  {
    barangay_id: 2202,
    municipality_id: 89,
    barangay_name: "Pasileng Norte",
  },
  {
    barangay_id: 2203,
    municipality_id: 89,
    barangay_name: "Pasileng Sur",
  },
  {
    barangay_id: 2204,
    municipality_id: 89,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2205,
    municipality_id: 89,
    barangay_name: "San Felipe Central",
  },
  {
    barangay_id: 2206,
    municipality_id: 89,
    barangay_name: "San Felipe Sur",
  },
  {
    barangay_id: 2207,
    municipality_id: 89,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 2208,
    municipality_id: 89,
    barangay_name: "Santa Catalina",
  },
  {
    barangay_id: 2209,
    municipality_id: 89,
    barangay_name: "Santa Maria Norte",
  },
  {
    barangay_id: 2210,
    municipality_id: 89,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 2211,
    municipality_id: 89,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 2212,
    municipality_id: 89,
    barangay_name: "Sumabnit",
  },
  {
    barangay_id: 2213,
    municipality_id: 89,
    barangay_name: "Tabuyoc",
  },
  {
    barangay_id: 2214,
    municipality_id: 89,
    barangay_name: "Vacante",
  },
  {
    barangay_id: 2215,
    municipality_id: 90,
    barangay_name: "Amancoro",
  },
  {
    barangay_id: 2216,
    municipality_id: 90,
    barangay_name: "Balagan",
  },
  {
    barangay_id: 2217,
    municipality_id: 90,
    barangay_name: "Balogo",
  },
  {
    barangay_id: 2218,
    municipality_id: 90,
    barangay_name: "Basing",
  },
  {
    barangay_id: 2219,
    municipality_id: 90,
    barangay_name: "Baybay Lopez",
  },
  {
    barangay_id: 2220,
    municipality_id: 90,
    barangay_name: "Baybay Polong",
  },
  {
    barangay_id: 2221,
    municipality_id: 90,
    barangay_name: "Biec",
  },
  {
    barangay_id: 2222,
    municipality_id: 90,
    barangay_name: "Buenlag",
  },
  {
    barangay_id: 2223,
    municipality_id: 90,
    barangay_name: "Calit",
  },
  {
    barangay_id: 2247,
    municipality_id: 90,
    barangay_name: "Caloocan Dupo",
  },
  {
    barangay_id: 2224,
    municipality_id: 90,
    barangay_name: "Caloocan Norte",
  },
  {
    barangay_id: 2225,
    municipality_id: 90,
    barangay_name: "Caloocan Sur",
  },
  {
    barangay_id: 2226,
    municipality_id: 90,
    barangay_name: "Camaley",
  },
  {
    barangay_id: 2227,
    municipality_id: 90,
    barangay_name: "Canaoalan",
  },
  {
    barangay_id: 2228,
    municipality_id: 90,
    barangay_name: "Dulag",
  },
  {
    barangay_id: 2229,
    municipality_id: 90,
    barangay_name: "Gayaman",
  },
  {
    barangay_id: 2230,
    municipality_id: 90,
    barangay_name: "Linoc",
  },
  {
    barangay_id: 2231,
    municipality_id: 90,
    barangay_name: "Lomboy",
  },
  {
    barangay_id: 2233,
    municipality_id: 90,
    barangay_name: "Malindong",
  },
  {
    barangay_id: 2234,
    municipality_id: 90,
    barangay_name: "Manat",
  },
  {
    barangay_id: 2232,
    municipality_id: 90,
    barangay_name: "Nagpalangan",
  },
  {
    barangay_id: 2235,
    municipality_id: 90,
    barangay_name: "Naguilayan",
  },
  {
    barangay_id: 2236,
    municipality_id: 90,
    barangay_name: "Pallas",
  },
  {
    barangay_id: 2237,
    municipality_id: 90,
    barangay_name: "Papagueyan",
  },
  {
    barangay_id: 2238,
    municipality_id: 90,
    barangay_name: "Parayao",
  },
  {
    barangay_id: 2239,
    municipality_id: 90,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2240,
    municipality_id: 90,
    barangay_name: "Pototan",
  },
  {
    barangay_id: 2241,
    municipality_id: 90,
    barangay_name: "Sabangan",
  },
  {
    barangay_id: 2242,
    municipality_id: 90,
    barangay_name: "Salapingao",
  },
  {
    barangay_id: 2243,
    municipality_id: 90,
    barangay_name: "San Isidro Norte",
  },
  {
    barangay_id: 2244,
    municipality_id: 90,
    barangay_name: "San Isidro Sur",
  },
  {
    barangay_id: 2245,
    municipality_id: 90,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 2246,
    municipality_id: 90,
    barangay_name: "Tombor",
  },
  {
    barangay_id: 2248,
    municipality_id: 91,
    barangay_name: "Arnedo",
  },
  {
    barangay_id: 2249,
    municipality_id: 91,
    barangay_name: "Balingasay",
  },
  {
    barangay_id: 2250,
    municipality_id: 91,
    barangay_name: "Binabalian",
  },
  {
    barangay_id: 2251,
    municipality_id: 91,
    barangay_name: "Cabuyao",
  },
  {
    barangay_id: 2252,
    municipality_id: 91,
    barangay_name: "Catuday",
  },
  {
    barangay_id: 2253,
    municipality_id: 91,
    barangay_name: "Catungi",
  },
  {
    barangay_id: 2254,
    municipality_id: 91,
    barangay_name: "Concordia (Pob.)",
  },
  {
    barangay_id: 2255,
    municipality_id: 91,
    barangay_name: "Culang",
  },
  {
    barangay_id: 2256,
    municipality_id: 91,
    barangay_name: "Dewey",
  },
  {
    barangay_id: 2257,
    municipality_id: 91,
    barangay_name: "Estanza",
  },
  {
    barangay_id: 2258,
    municipality_id: 91,
    barangay_name: "Germinal (Pob.)",
  },
  {
    barangay_id: 2259,
    municipality_id: 91,
    barangay_name: "Goyoden",
  },
  {
    barangay_id: 2260,
    municipality_id: 91,
    barangay_name: "Ilogmalino",
  },
  {
    barangay_id: 2261,
    municipality_id: 91,
    barangay_name: "Lambes",
  },
  {
    barangay_id: 2262,
    municipality_id: 91,
    barangay_name: "Liwa-liwa",
  },
  {
    barangay_id: 2263,
    municipality_id: 91,
    barangay_name: "Lucero",
  },
  {
    barangay_id: 2264,
    municipality_id: 91,
    barangay_name: "Luciente 1.0",
  },
  {
    barangay_id: 2265,
    municipality_id: 91,
    barangay_name: "Luciente 2.0",
  },
  {
    barangay_id: 2266,
    municipality_id: 91,
    barangay_name: "Luna",
  },
  {
    barangay_id: 2267,
    municipality_id: 91,
    barangay_name: "Patar",
  },
  {
    barangay_id: 2268,
    municipality_id: 91,
    barangay_name: "Pilar",
  },
  {
    barangay_id: 2269,
    municipality_id: 91,
    barangay_name: "Salud",
  },
  {
    barangay_id: 2270,
    municipality_id: 91,
    barangay_name: "Samang Norte",
  },
  {
    barangay_id: 2271,
    municipality_id: 91,
    barangay_name: "Samang Sur",
  },
  {
    barangay_id: 2272,
    municipality_id: 91,
    barangay_name: "Sampaloc",
  },
  {
    barangay_id: 2273,
    municipality_id: 91,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 2274,
    municipality_id: 91,
    barangay_name: "Tara",
  },
  {
    barangay_id: 2275,
    municipality_id: 91,
    barangay_name: "Tupa",
  },
  {
    barangay_id: 2276,
    municipality_id: 91,
    barangay_name: "Victory",
  },
  {
    barangay_id: 2277,
    municipality_id: 91,
    barangay_name: "Zaragoza",
  },
  {
    barangay_id: 2278,
    municipality_id: 92,
    barangay_name: "Angarian",
  },
  {
    barangay_id: 2279,
    municipality_id: 92,
    barangay_name: "Asinan",
  },
  {
    barangay_id: 2281,
    municipality_id: 92,
    barangay_name: "Bacabac",
  },
  {
    barangay_id: 2280,
    municipality_id: 92,
    barangay_name: "Banaga",
  },
  {
    barangay_id: 2282,
    municipality_id: 92,
    barangay_name: "Bolaoen",
  },
  {
    barangay_id: 2283,
    municipality_id: 92,
    barangay_name: "Buenlag",
  },
  {
    barangay_id: 2284,
    municipality_id: 92,
    barangay_name: "Cabayaoasan",
  },
  {
    barangay_id: 2285,
    municipality_id: 92,
    barangay_name: "Cayanga",
  },
  {
    barangay_id: 2286,
    municipality_id: 92,
    barangay_name: "Gueset",
  },
  {
    barangay_id: 2287,
    municipality_id: 92,
    barangay_name: "Hacienda",
  },
  {
    barangay_id: 2288,
    municipality_id: 92,
    barangay_name: "Laguit Centro",
  },
  {
    barangay_id: 2289,
    municipality_id: 92,
    barangay_name: "Laguit Padilla",
  },
  {
    barangay_id: 2290,
    municipality_id: 92,
    barangay_name: "Magtaking",
  },
  {
    barangay_id: 2291,
    municipality_id: 92,
    barangay_name: "Pangascasan",
  },
  {
    barangay_id: 2292,
    municipality_id: 92,
    barangay_name: "Pantal",
  },
  {
    barangay_id: 2293,
    municipality_id: 92,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2294,
    municipality_id: 92,
    barangay_name: "Polong",
  },
  {
    barangay_id: 2295,
    municipality_id: 92,
    barangay_name: "Portic",
  },
  {
    barangay_id: 2296,
    municipality_id: 92,
    barangay_name: "Salasa",
  },
  {
    barangay_id: 2297,
    municipality_id: 92,
    barangay_name: "Salomague Norte",
  },
  {
    barangay_id: 2298,
    municipality_id: 92,
    barangay_name: "Salomague Sur",
  },
  {
    barangay_id: 2299,
    municipality_id: 92,
    barangay_name: "Samat",
  },
  {
    barangay_id: 2300,
    municipality_id: 92,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 2301,
    municipality_id: 92,
    barangay_name: "Umanday",
  },
  {
    barangay_id: 2302,
    municipality_id: 93,
    barangay_name: "Anapao",
  },
  {
    barangay_id: 2303,
    municipality_id: 93,
    barangay_name: "Cacayasen",
  },
  {
    barangay_id: 2304,
    municipality_id: 93,
    barangay_name: "Concordia",
  },
  {
    barangay_id: 2309,
    municipality_id: 93,
    barangay_name: "Don Matias",
  },
  {
    barangay_id: 2305,
    municipality_id: 93,
    barangay_name: "Ilio-ilio",
  },
  {
    barangay_id: 2306,
    municipality_id: 93,
    barangay_name: "Papallasen",
  },
  {
    barangay_id: 2307,
    municipality_id: 93,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2308,
    municipality_id: 93,
    barangay_name: "Pogoruac",
  },
  {
    barangay_id: 2310,
    municipality_id: 93,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 2311,
    municipality_id: 93,
    barangay_name: "San Pascual",
  },
  {
    barangay_id: 2312,
    municipality_id: 93,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 2313,
    municipality_id: 93,
    barangay_name: "Sapa Grande",
  },
  {
    barangay_id: 2314,
    municipality_id: 93,
    barangay_name: "Sapa Pequeña",
  },
  {
    barangay_id: 2315,
    municipality_id: 93,
    barangay_name: "Tambacan",
  },
  {
    barangay_id: 2316,
    municipality_id: 94,
    barangay_name: "Ambonao",
  },
  {
    barangay_id: 2317,
    municipality_id: 94,
    barangay_name: "Ambuetel",
  },
  {
    barangay_id: 2318,
    municipality_id: 94,
    barangay_name: "Banaoang",
  },
  {
    barangay_id: 2319,
    municipality_id: 94,
    barangay_name: "Bued",
  },
  {
    barangay_id: 2320,
    municipality_id: 94,
    barangay_name: "Buenlag",
  },
  {
    barangay_id: 2321,
    municipality_id: 94,
    barangay_name: "Cabilocaan",
  },
  {
    barangay_id: 2322,
    municipality_id: 94,
    barangay_name: "Dinalaoan",
  },
  {
    barangay_id: 2323,
    municipality_id: 94,
    barangay_name: "Doyong",
  },
  {
    barangay_id: 2324,
    municipality_id: 94,
    barangay_name: "Gabon",
  },
  {
    barangay_id: 2325,
    municipality_id: 94,
    barangay_name: "Lasip",
  },
  {
    barangay_id: 2326,
    municipality_id: 94,
    barangay_name: "Longos",
  },
  {
    barangay_id: 2327,
    municipality_id: 94,
    barangay_name: "Lumbang",
  },
  {
    barangay_id: 2328,
    municipality_id: 94,
    barangay_name: "Macabito",
  },
  {
    barangay_id: 2329,
    municipality_id: 94,
    barangay_name: "Malabago",
  },
  {
    barangay_id: 2330,
    municipality_id: 94,
    barangay_name: "Mancup",
  },
  {
    barangay_id: 2331,
    municipality_id: 94,
    barangay_name: "Nagsaing",
  },
  {
    barangay_id: 2332,
    municipality_id: 94,
    barangay_name: "Nalsian",
  },
  {
    barangay_id: 2333,
    municipality_id: 94,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 2334,
    municipality_id: 94,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 2335,
    municipality_id: 94,
    barangay_name: "Quesban",
  },
  {
    barangay_id: 2336,
    municipality_id: 94,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 2337,
    municipality_id: 94,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 2338,
    municipality_id: 94,
    barangay_name: "Songkoy",
  },
  {
    barangay_id: 2339,
    municipality_id: 94,
    barangay_name: "Talibaew",
  },
  {
    barangay_id: 2340,
    municipality_id: 95,
    barangay_name: "Bacayao Norte",
  },
  {
    barangay_id: 2341,
    municipality_id: 95,
    barangay_name: "Bacayao Sur",
  },
  {
    barangay_id: 2362,
    municipality_id: 95,
    barangay_name: "Barangay I",
  },
  {
    barangay_id: 2342,
    municipality_id: 95,
    barangay_name: "Barangay II",
  },
  {
    barangay_id: 2343,
    municipality_id: 95,
    barangay_name: "Barangay IV",
  },
  {
    barangay_id: 2344,
    municipality_id: 95,
    barangay_name: "Bolosan",
  },
  {
    barangay_id: 2345,
    municipality_id: 95,
    barangay_name: "Bonuan Binloc",
  },
  {
    barangay_id: 2346,
    municipality_id: 95,
    barangay_name: "Bonuan Boquig",
  },
  {
    barangay_id: 2347,
    municipality_id: 95,
    barangay_name: "Bonuan Gueset",
  },
  {
    barangay_id: 2348,
    municipality_id: 95,
    barangay_name: "Calmay",
  },
  {
    barangay_id: 2349,
    municipality_id: 95,
    barangay_name: "Carael",
  },
  {
    barangay_id: 2350,
    municipality_id: 95,
    barangay_name: "Caranglaan",
  },
  {
    barangay_id: 2351,
    municipality_id: 95,
    barangay_name: "Herrero",
  },
  {
    barangay_id: 2352,
    municipality_id: 95,
    barangay_name: "Lasip Chico",
  },
  {
    barangay_id: 2353,
    municipality_id: 95,
    barangay_name: "Lasip Grande",
  },
  {
    barangay_id: 2354,
    municipality_id: 95,
    barangay_name: "Lomboy",
  },
  {
    barangay_id: 2355,
    municipality_id: 95,
    barangay_name: "Lucao",
  },
  {
    barangay_id: 2356,
    municipality_id: 95,
    barangay_name: "Malued",
  },
  {
    barangay_id: 2357,
    municipality_id: 95,
    barangay_name: "Mamalingling",
  },
  {
    barangay_id: 2358,
    municipality_id: 95,
    barangay_name: "Mangin",
  },
  {
    barangay_id: 2359,
    municipality_id: 95,
    barangay_name: "Mayombo",
  },
  {
    barangay_id: 2360,
    municipality_id: 95,
    barangay_name: "Pantal",
  },
  {
    barangay_id: 2361,
    municipality_id: 95,
    barangay_name: "Poblacion Oeste",
  },
  {
    barangay_id: 2363,
    municipality_id: 95,
    barangay_name: "Pogo Chico",
  },
  {
    barangay_id: 2364,
    municipality_id: 95,
    barangay_name: "Pogo Grande",
  },
  {
    barangay_id: 2365,
    municipality_id: 95,
    barangay_name: "Pugaro Suit",
  },
  {
    barangay_id: 2366,
    municipality_id: 95,
    barangay_name: "Salapingao",
  },
  {
    barangay_id: 2367,
    municipality_id: 95,
    barangay_name: "Salisay",
  },
  {
    barangay_id: 2368,
    municipality_id: 95,
    barangay_name: "Tambac",
  },
  {
    barangay_id: 2369,
    municipality_id: 95,
    barangay_name: "Tapuac",
  },
  {
    barangay_id: 2370,
    municipality_id: 95,
    barangay_name: "Tebeng",
  },
  {
    barangay_id: 2371,
    municipality_id: 96,
    barangay_name: "Alilao",
  },
  {
    barangay_id: 2372,
    municipality_id: 96,
    barangay_name: "Amalbalan",
  },
  {
    barangay_id: 2373,
    municipality_id: 96,
    barangay_name: "Bobonot",
  },
  {
    barangay_id: 2374,
    municipality_id: 96,
    barangay_name: "Eguia",
  },
  {
    barangay_id: 2375,
    municipality_id: 96,
    barangay_name: "Gais-Guipe",
  },
  {
    barangay_id: 2376,
    municipality_id: 96,
    barangay_name: "Hermosa",
  },
  {
    barangay_id: 2377,
    municipality_id: 96,
    barangay_name: "Macalang",
  },
  {
    barangay_id: 2378,
    municipality_id: 96,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 2379,
    municipality_id: 96,
    barangay_name: "Malacapas",
  },
  {
    barangay_id: 2380,
    municipality_id: 96,
    barangay_name: "Malimpin",
  },
  {
    barangay_id: 2381,
    municipality_id: 96,
    barangay_name: "Osmeña",
  },
  {
    barangay_id: 2382,
    municipality_id: 96,
    barangay_name: "Petal",
  },
  {
    barangay_id: 2383,
    municipality_id: 96,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2384,
    municipality_id: 96,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 2385,
    municipality_id: 96,
    barangay_name: "Tambac",
  },
  {
    barangay_id: 2386,
    municipality_id: 96,
    barangay_name: "Tambobong",
  },
  {
    barangay_id: 2387,
    municipality_id: 96,
    barangay_name: "Uli",
  },
  {
    barangay_id: 2388,
    municipality_id: 96,
    barangay_name: "Viga",
  },
  {
    barangay_id: 2401,
    municipality_id: 97,
    barangay_name: "Babuyan",
  },
  {
    barangay_id: 2389,
    municipality_id: 97,
    barangay_name: "Bamban",
  },
  {
    barangay_id: 2390,
    municipality_id: 97,
    barangay_name: "Batang",
  },
  {
    barangay_id: 2391,
    municipality_id: 97,
    barangay_name: "Bayambang",
  },
  {
    barangay_id: 2392,
    municipality_id: 97,
    barangay_name: "Cato",
  },
  {
    barangay_id: 2393,
    municipality_id: 97,
    barangay_name: "Doliman",
  },
  {
    barangay_id: 2394,
    municipality_id: 97,
    barangay_name: "Fatima",
  },
  {
    barangay_id: 2395,
    municipality_id: 97,
    barangay_name: "Maya",
  },
  {
    barangay_id: 2396,
    municipality_id: 97,
    barangay_name: "Nangalisan",
  },
  {
    barangay_id: 2397,
    municipality_id: 97,
    barangay_name: "Nayom",
  },
  {
    barangay_id: 2398,
    municipality_id: 97,
    barangay_name: "Pita",
  },
  {
    barangay_id: 2399,
    municipality_id: 97,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2400,
    municipality_id: 97,
    barangay_name: "Potol",
  },
  {
    barangay_id: 2402,
    municipality_id: 98,
    barangay_name: "Bolo",
  },
  {
    barangay_id: 2403,
    municipality_id: 98,
    barangay_name: "Bongalon",
  },
  {
    barangay_id: 2404,
    municipality_id: 98,
    barangay_name: "Dulig",
  },
  {
    barangay_id: 2405,
    municipality_id: 98,
    barangay_name: "Laois",
  },
  {
    barangay_id: 2406,
    municipality_id: 98,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 2407,
    municipality_id: 98,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2408,
    municipality_id: 98,
    barangay_name: "San Gonzalo",
  },
  {
    barangay_id: 2409,
    municipality_id: 98,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 2410,
    municipality_id: 98,
    barangay_name: "Tobuan",
  },
  {
    barangay_id: 2411,
    municipality_id: 98,
    barangay_name: "Uyong",
  },
  {
    barangay_id: 2412,
    municipality_id: 99,
    barangay_name: "Aliwekwek",
  },
  {
    barangay_id: 2413,
    municipality_id: 99,
    barangay_name: "Baay",
  },
  {
    barangay_id: 2414,
    municipality_id: 99,
    barangay_name: "Balangobong",
  },
  {
    barangay_id: 2415,
    municipality_id: 99,
    barangay_name: "Balococ",
  },
  {
    barangay_id: 2416,
    municipality_id: 99,
    barangay_name: "Bantayan",
  },
  {
    barangay_id: 2417,
    municipality_id: 99,
    barangay_name: "Basing",
  },
  {
    barangay_id: 2418,
    municipality_id: 99,
    barangay_name: "Capandanan",
  },
  {
    barangay_id: 2419,
    municipality_id: 99,
    barangay_name: "Domalandan Center",
  },
  {
    barangay_id: 2420,
    municipality_id: 99,
    barangay_name: "Domalandan East",
  },
  {
    barangay_id: 2421,
    municipality_id: 99,
    barangay_name: "Domalandan West",
  },
  {
    barangay_id: 2422,
    municipality_id: 99,
    barangay_name: "Dorongan",
  },
  {
    barangay_id: 2423,
    municipality_id: 99,
    barangay_name: "Dulag",
  },
  {
    barangay_id: 2424,
    municipality_id: 99,
    barangay_name: "Estanza",
  },
  {
    barangay_id: 2425,
    municipality_id: 99,
    barangay_name: "Lasip",
  },
  {
    barangay_id: 2426,
    municipality_id: 99,
    barangay_name: "Libsong East",
  },
  {
    barangay_id: 2427,
    municipality_id: 99,
    barangay_name: "Libsong West",
  },
  {
    barangay_id: 2428,
    municipality_id: 99,
    barangay_name: "Malawa",
  },
  {
    barangay_id: 2429,
    municipality_id: 99,
    barangay_name: "Malimpuec",
  },
  {
    barangay_id: 2430,
    municipality_id: 99,
    barangay_name: "Maniboc",
  },
  {
    barangay_id: 2431,
    municipality_id: 99,
    barangay_name: "Matalava",
  },
  {
    barangay_id: 2432,
    municipality_id: 99,
    barangay_name: "Naguelguel",
  },
  {
    barangay_id: 2433,
    municipality_id: 99,
    barangay_name: "Namolan",
  },
  {
    barangay_id: 2434,
    municipality_id: 99,
    barangay_name: "Pangapisan North",
  },
  {
    barangay_id: 2435,
    municipality_id: 99,
    barangay_name: "Pangapisan Sur",
  },
  {
    barangay_id: 2436,
    municipality_id: 99,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2437,
    municipality_id: 99,
    barangay_name: "Quibaol",
  },
  {
    barangay_id: 2438,
    municipality_id: 99,
    barangay_name: "Rosario",
  },
  {
    barangay_id: 2439,
    municipality_id: 99,
    barangay_name: "Sabangan",
  },
  {
    barangay_id: 2440,
    municipality_id: 99,
    barangay_name: "Talogtog",
  },
  {
    barangay_id: 2441,
    municipality_id: 99,
    barangay_name: "Tonton",
  },
  {
    barangay_id: 2442,
    municipality_id: 99,
    barangay_name: "Tumbar",
  },
  {
    barangay_id: 2443,
    municipality_id: 99,
    barangay_name: "Wawa",
  },
  {
    barangay_id: 2444,
    municipality_id: 100,
    barangay_name: "Bacnit",
  },
  {
    barangay_id: 2445,
    municipality_id: 100,
    barangay_name: "Barlo",
  },
  {
    barangay_id: 2446,
    municipality_id: 100,
    barangay_name: "Caabiangaan",
  },
  {
    barangay_id: 2447,
    municipality_id: 100,
    barangay_name: "Cabanaetan",
  },
  {
    barangay_id: 2448,
    municipality_id: 100,
    barangay_name: "Cabinuangan",
  },
  {
    barangay_id: 2449,
    municipality_id: 100,
    barangay_name: "Calzada",
  },
  {
    barangay_id: 2450,
    municipality_id: 100,
    barangay_name: "Caranglaan",
  },
  {
    barangay_id: 2451,
    municipality_id: 100,
    barangay_name: "De Guzman",
  },
  {
    barangay_id: 2452,
    municipality_id: 100,
    barangay_name: "Luna",
  },
  {
    barangay_id: 2453,
    municipality_id: 100,
    barangay_name: "Magalong",
  },
  {
    barangay_id: 2454,
    municipality_id: 100,
    barangay_name: "Nibaliw",
  },
  {
    barangay_id: 2455,
    municipality_id: 100,
    barangay_name: "Patar",
  },
  {
    barangay_id: 2456,
    municipality_id: 100,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2457,
    municipality_id: 100,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 2458,
    municipality_id: 100,
    barangay_name: "Tagudin",
  },
  {
    barangay_id: 2459,
    municipality_id: 100,
    barangay_name: "Villacorta",
  },
  {
    barangay_id: 2460,
    municipality_id: 101,
    barangay_name: "Abonagan",
  },
  {
    barangay_id: 2461,
    municipality_id: 101,
    barangay_name: "Agdao",
  },
  {
    barangay_id: 2462,
    municipality_id: 101,
    barangay_name: "Alacan",
  },
  {
    barangay_id: 2463,
    municipality_id: 101,
    barangay_name: "Aliaga",
  },
  {
    barangay_id: 2464,
    municipality_id: 101,
    barangay_name: "Amacalan",
  },
  {
    barangay_id: 2465,
    municipality_id: 101,
    barangay_name: "Anolid",
  },
  {
    barangay_id: 2466,
    municipality_id: 101,
    barangay_name: "Apaya",
  },
  {
    barangay_id: 2467,
    municipality_id: 101,
    barangay_name: "Asin Este",
  },
  {
    barangay_id: 2468,
    municipality_id: 101,
    barangay_name: "Asin Weste",
  },
  {
    barangay_id: 2469,
    municipality_id: 101,
    barangay_name: "Bacundao Este",
  },
  {
    barangay_id: 2470,
    municipality_id: 101,
    barangay_name: "Bacundao Weste",
  },
  {
    barangay_id: 2471,
    municipality_id: 101,
    barangay_name: "Bakitiw",
  },
  {
    barangay_id: 2472,
    municipality_id: 101,
    barangay_name: "Balite",
  },
  {
    barangay_id: 2473,
    municipality_id: 101,
    barangay_name: "Banawang",
  },
  {
    barangay_id: 2474,
    municipality_id: 101,
    barangay_name: "Barang",
  },
  {
    barangay_id: 2475,
    municipality_id: 101,
    barangay_name: "Bawer",
  },
  {
    barangay_id: 2476,
    municipality_id: 101,
    barangay_name: "Binalay",
  },
  {
    barangay_id: 2477,
    municipality_id: 101,
    barangay_name: "Bobon",
  },
  {
    barangay_id: 2478,
    municipality_id: 101,
    barangay_name: "Bolaoit",
  },
  {
    barangay_id: 2479,
    municipality_id: 101,
    barangay_name: "Bongar",
  },
  {
    barangay_id: 2480,
    municipality_id: 101,
    barangay_name: "Butao",
  },
  {
    barangay_id: 2481,
    municipality_id: 101,
    barangay_name: "Cabatling",
  },
  {
    barangay_id: 2482,
    municipality_id: 101,
    barangay_name: "Cabueldatan",
  },
  {
    barangay_id: 2483,
    municipality_id: 101,
    barangay_name: "Calbueg",
  },
  {
    barangay_id: 2484,
    municipality_id: 101,
    barangay_name: "Canan Norte",
  },
  {
    barangay_id: 2485,
    municipality_id: 101,
    barangay_name: "Canan Sur",
  },
  {
    barangay_id: 2486,
    municipality_id: 101,
    barangay_name: "Cawayan Bogtong",
  },
  {
    barangay_id: 2487,
    municipality_id: 101,
    barangay_name: "Don Pedro",
  },
  {
    barangay_id: 2488,
    municipality_id: 101,
    barangay_name: "Gatang",
  },
  {
    barangay_id: 2489,
    municipality_id: 101,
    barangay_name: "Goliman",
  },
  {
    barangay_id: 2490,
    municipality_id: 101,
    barangay_name: "Gomez",
  },
  {
    barangay_id: 2491,
    municipality_id: 101,
    barangay_name: "Guilig",
  },
  {
    barangay_id: 2492,
    municipality_id: 101,
    barangay_name: "Ican",
  },
  {
    barangay_id: 2493,
    municipality_id: 101,
    barangay_name: "Ingalagala",
  },
  {
    barangay_id: 2494,
    municipality_id: 101,
    barangay_name: "Lareg-lareg",
  },
  {
    barangay_id: 2495,
    municipality_id: 101,
    barangay_name: "Lasip",
  },
  {
    barangay_id: 2496,
    municipality_id: 101,
    barangay_name: "Lepa",
  },
  {
    barangay_id: 2497,
    municipality_id: 101,
    barangay_name: "Loqueb Este",
  },
  {
    barangay_id: 2498,
    municipality_id: 101,
    barangay_name: "Loqueb Norte",
  },
  {
    barangay_id: 2499,
    municipality_id: 101,
    barangay_name: "Loqueb Sur",
  },
  {
    barangay_id: 2500,
    municipality_id: 101,
    barangay_name: "Lunec",
  },
  {
    barangay_id: 2501,
    municipality_id: 101,
    barangay_name: "Mabulitec",
  },
  {
    barangay_id: 2502,
    municipality_id: 101,
    barangay_name: "Malimpec",
  },
  {
    barangay_id: 2503,
    municipality_id: 101,
    barangay_name: "Manggan-Dampay",
  },
  {
    barangay_id: 2505,
    municipality_id: 101,
    barangay_name: "Nalsian Norte",
  },
  {
    barangay_id: 2506,
    municipality_id: 101,
    barangay_name: "Nalsian Sur",
  },
  {
    barangay_id: 2504,
    municipality_id: 101,
    barangay_name: "Nancapian",
  },
  {
    barangay_id: 2507,
    municipality_id: 101,
    barangay_name: "Nansangaan",
  },
  {
    barangay_id: 2508,
    municipality_id: 101,
    barangay_name: "Olea",
  },
  {
    barangay_id: 2509,
    municipality_id: 101,
    barangay_name: "Pacuan",
  },
  {
    barangay_id: 2510,
    municipality_id: 101,
    barangay_name: "Palapar Norte",
  },
  {
    barangay_id: 2511,
    municipality_id: 101,
    barangay_name: "Palapar Sur",
  },
  {
    barangay_id: 2512,
    municipality_id: 101,
    barangay_name: "Palong",
  },
  {
    barangay_id: 2513,
    municipality_id: 101,
    barangay_name: "Pamaranum",
  },
  {
    barangay_id: 2514,
    municipality_id: 101,
    barangay_name: "Pasima",
  },
  {
    barangay_id: 2515,
    municipality_id: 101,
    barangay_name: "Payar",
  },
  {
    barangay_id: 2516,
    municipality_id: 101,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2517,
    municipality_id: 101,
    barangay_name: "Polong Norte",
  },
  {
    barangay_id: 2518,
    municipality_id: 101,
    barangay_name: "Polong Sur",
  },
  {
    barangay_id: 2519,
    municipality_id: 101,
    barangay_name: "Potiocan",
  },
  {
    barangay_id: 2520,
    municipality_id: 101,
    barangay_name: "San Julian",
  },
  {
    barangay_id: 2521,
    municipality_id: 101,
    barangay_name: "Tabo-Sili",
  },
  {
    barangay_id: 2523,
    municipality_id: 101,
    barangay_name: "Talospatang",
  },
  {
    barangay_id: 2524,
    municipality_id: 101,
    barangay_name: "Taloy",
  },
  {
    barangay_id: 2525,
    municipality_id: 101,
    barangay_name: "Taloyan",
  },
  {
    barangay_id: 2526,
    municipality_id: 101,
    barangay_name: "Tambac",
  },
  {
    barangay_id: 2522,
    municipality_id: 101,
    barangay_name: "Tobor",
  },
  {
    barangay_id: 2527,
    municipality_id: 101,
    barangay_name: "Tolonguat",
  },
  {
    barangay_id: 2528,
    municipality_id: 101,
    barangay_name: "Tomling",
  },
  {
    barangay_id: 2529,
    municipality_id: 101,
    barangay_name: "Umando",
  },
  {
    barangay_id: 2530,
    municipality_id: 101,
    barangay_name: "Viado",
  },
  {
    barangay_id: 2531,
    municipality_id: 101,
    barangay_name: "Waig",
  },
  {
    barangay_id: 2532,
    municipality_id: 101,
    barangay_name: "Warey",
  },
  {
    barangay_id: 2533,
    municipality_id: 102,
    barangay_name: "Babasit",
  },
  {
    barangay_id: 2534,
    municipality_id: 102,
    barangay_name: "Baguinay",
  },
  {
    barangay_id: 2535,
    municipality_id: 102,
    barangay_name: "Baritao",
  },
  {
    barangay_id: 2536,
    municipality_id: 102,
    barangay_name: "Bisal",
  },
  {
    barangay_id: 2537,
    municipality_id: 102,
    barangay_name: "Bucao",
  },
  {
    barangay_id: 2538,
    municipality_id: 102,
    barangay_name: "Cabanbanan",
  },
  {
    barangay_id: 2539,
    municipality_id: 102,
    barangay_name: "Calaocan",
  },
  {
    barangay_id: 2540,
    municipality_id: 102,
    barangay_name: "Inamotan",
  },
  {
    barangay_id: 2541,
    municipality_id: 102,
    barangay_name: "Lelemaan",
  },
  {
    barangay_id: 2542,
    municipality_id: 102,
    barangay_name: "Licsi",
  },
  {
    barangay_id: 2543,
    municipality_id: 102,
    barangay_name: "Lipit Norte",
  },
  {
    barangay_id: 2544,
    municipality_id: 102,
    barangay_name: "Lipit Sur",
  },
  {
    barangay_id: 2546,
    municipality_id: 102,
    barangay_name: "Matolong",
  },
  {
    barangay_id: 2547,
    municipality_id: 102,
    barangay_name: "Mermer",
  },
  {
    barangay_id: 2548,
    municipality_id: 102,
    barangay_name: "Nalsian",
  },
  {
    barangay_id: 2549,
    municipality_id: 102,
    barangay_name: "Oraan East",
  },
  {
    barangay_id: 2550,
    municipality_id: 102,
    barangay_name: "Oraan West",
  },
  {
    barangay_id: 2551,
    municipality_id: 102,
    barangay_name: "Pantal",
  },
  {
    barangay_id: 2552,
    municipality_id: 102,
    barangay_name: "Pao",
  },
  {
    barangay_id: 2545,
    municipality_id: 102,
    barangay_name: "Parian",
  },
  {
    barangay_id: 2553,
    municipality_id: 102,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2554,
    municipality_id: 102,
    barangay_name: "Pugaro",
  },
  {
    barangay_id: 2555,
    municipality_id: 102,
    barangay_name: "San Ramon",
  },
  {
    barangay_id: 2556,
    municipality_id: 102,
    barangay_name: "Santa Ines",
  },
  {
    barangay_id: 2557,
    municipality_id: 102,
    barangay_name: "Sapang",
  },
  {
    barangay_id: 2558,
    municipality_id: 102,
    barangay_name: "Tebuel",
  },
  {
    barangay_id: 2559,
    municipality_id: 103,
    barangay_name: "Alitaya",
  },
  {
    barangay_id: 2560,
    municipality_id: 103,
    barangay_name: "Amansabina",
  },
  {
    barangay_id: 2561,
    municipality_id: 103,
    barangay_name: "Anolid",
  },
  {
    barangay_id: 2562,
    municipality_id: 103,
    barangay_name: "Banaoang",
  },
  {
    barangay_id: 2563,
    municipality_id: 103,
    barangay_name: "Bantayan",
  },
  {
    barangay_id: 2564,
    municipality_id: 103,
    barangay_name: "Bari",
  },
  {
    barangay_id: 2565,
    municipality_id: 103,
    barangay_name: "Bateng",
  },
  {
    barangay_id: 2566,
    municipality_id: 103,
    barangay_name: "Buenlag",
  },
  {
    barangay_id: 2567,
    municipality_id: 103,
    barangay_name: "David",
  },
  {
    barangay_id: 2568,
    municipality_id: 103,
    barangay_name: "Embarcadero",
  },
  {
    barangay_id: 2569,
    municipality_id: 103,
    barangay_name: "Gueguesangen",
  },
  {
    barangay_id: 2570,
    municipality_id: 103,
    barangay_name: "Guesang",
  },
  {
    barangay_id: 2571,
    municipality_id: 103,
    barangay_name: "Guiguilonen",
  },
  {
    barangay_id: 2572,
    municipality_id: 103,
    barangay_name: "Guilig",
  },
  {
    barangay_id: 2573,
    municipality_id: 103,
    barangay_name: "Inlambo",
  },
  {
    barangay_id: 2574,
    municipality_id: 103,
    barangay_name: "Lanas",
  },
  {
    barangay_id: 2575,
    municipality_id: 103,
    barangay_name: "Landas",
  },
  {
    barangay_id: 2576,
    municipality_id: 103,
    barangay_name: "Maasin",
  },
  {
    barangay_id: 2577,
    municipality_id: 103,
    barangay_name: "Macayug",
  },
  {
    barangay_id: 2578,
    municipality_id: 103,
    barangay_name: "Malabago",
  },
  {
    barangay_id: 2579,
    municipality_id: 103,
    barangay_name: "Navaluan",
  },
  {
    barangay_id: 2580,
    municipality_id: 103,
    barangay_name: "Nibaliw",
  },
  {
    barangay_id: 2581,
    municipality_id: 103,
    barangay_name: "Osiem",
  },
  {
    barangay_id: 2582,
    municipality_id: 103,
    barangay_name: "Palua",
  },
  {
    barangay_id: 2583,
    municipality_id: 103,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2584,
    municipality_id: 103,
    barangay_name: "Pogo",
  },
  {
    barangay_id: 2585,
    municipality_id: 103,
    barangay_name: "Salaan",
  },
  {
    barangay_id: 2586,
    municipality_id: 103,
    barangay_name: "Salay",
  },
  {
    barangay_id: 2588,
    municipality_id: 103,
    barangay_name: "Talogtog",
  },
  {
    barangay_id: 2587,
    municipality_id: 103,
    barangay_name: "Tebag",
  },
  {
    barangay_id: 2589,
    municipality_id: 104,
    barangay_name: "Andangin",
  },
  {
    barangay_id: 2590,
    municipality_id: 104,
    barangay_name: "Arellano Street (Pob.)",
  },
  {
    barangay_id: 2591,
    municipality_id: 104,
    barangay_name: "Bantay",
  },
  {
    barangay_id: 2592,
    municipality_id: 104,
    barangay_name: "Bantocaling",
  },
  {
    barangay_id: 2593,
    municipality_id: 104,
    barangay_name: "Baracbac",
  },
  {
    barangay_id: 2595,
    municipality_id: 104,
    barangay_name: "Bogtong Bolo",
  },
  {
    barangay_id: 2596,
    municipality_id: 104,
    barangay_name: "Bogtong Bunao",
  },
  {
    barangay_id: 2597,
    municipality_id: 104,
    barangay_name: "Bogtong Centro",
  },
  {
    barangay_id: 2598,
    municipality_id: 104,
    barangay_name: "Bogtong Niog",
  },
  {
    barangay_id: 2599,
    municipality_id: 104,
    barangay_name: "Bogtong Silag",
  },
  {
    barangay_id: 2600,
    municipality_id: 104,
    barangay_name: "Buaya",
  },
  {
    barangay_id: 2601,
    municipality_id: 104,
    barangay_name: "Buenlag",
  },
  {
    barangay_id: 2602,
    municipality_id: 104,
    barangay_name: "Bueno",
  },
  {
    barangay_id: 2603,
    municipality_id: 104,
    barangay_name: "Bunagan",
  },
  {
    barangay_id: 2604,
    municipality_id: 104,
    barangay_name: "Bunlalacao",
  },
  {
    barangay_id: 2605,
    municipality_id: 104,
    barangay_name: "Burgos Street (Pob.)",
  },
  {
    barangay_id: 2606,
    municipality_id: 104,
    barangay_name: "Cabaluyan 1st",
  },
  {
    barangay_id: 2607,
    municipality_id: 104,
    barangay_name: "Cabaluyan 2nd",
  },
  {
    barangay_id: 2608,
    municipality_id: 104,
    barangay_name: "Cabarabuan",
  },
  {
    barangay_id: 2609,
    municipality_id: 104,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 2610,
    municipality_id: 104,
    barangay_name: "Cabayaoasan",
  },
  {
    barangay_id: 2611,
    municipality_id: 104,
    barangay_name: "Cabayugan",
  },
  {
    barangay_id: 2612,
    municipality_id: 104,
    barangay_name: "Cacaoiten",
  },
  {
    barangay_id: 2613,
    municipality_id: 104,
    barangay_name: "Calumboyan Norte",
  },
  {
    barangay_id: 2614,
    municipality_id: 104,
    barangay_name: "Calumboyan Sur",
  },
  {
    barangay_id: 2615,
    municipality_id: 104,
    barangay_name: "Calvo (Pob.)",
  },
  {
    barangay_id: 2616,
    municipality_id: 104,
    barangay_name: "Casilagan",
  },
  {
    barangay_id: 2617,
    municipality_id: 104,
    barangay_name: "Catarataraan",
  },
  {
    barangay_id: 2618,
    municipality_id: 104,
    barangay_name: "Caturay Norte",
  },
  {
    barangay_id: 2619,
    municipality_id: 104,
    barangay_name: "Caturay Sur",
  },
  {
    barangay_id: 2620,
    municipality_id: 104,
    barangay_name: "Caviernesan",
  },
  {
    barangay_id: 2621,
    municipality_id: 104,
    barangay_name: "Dorongan Ketaket",
  },
  {
    barangay_id: 2622,
    municipality_id: 104,
    barangay_name: "Dorongan Linmansangan",
  },
  {
    barangay_id: 2623,
    municipality_id: 104,
    barangay_name: "Dorongan Punta",
  },
  {
    barangay_id: 2624,
    municipality_id: 104,
    barangay_name: "Dorongan Sawat",
  },
  {
    barangay_id: 2625,
    municipality_id: 104,
    barangay_name: "Dorongan Valerio",
  },
  {
    barangay_id: 2626,
    municipality_id: 104,
    barangay_name: "General Luna (Pob.)",
  },
  {
    barangay_id: 2627,
    municipality_id: 104,
    barangay_name: "Historia",
  },
  {
    barangay_id: 2628,
    municipality_id: 104,
    barangay_name: "Lawak Langka",
  },
  {
    barangay_id: 2629,
    municipality_id: 104,
    barangay_name: "Linmansangan",
  },
  {
    barangay_id: 2630,
    municipality_id: 104,
    barangay_name: "Lopez (Pob.)",
  },
  {
    barangay_id: 2631,
    municipality_id: 104,
    barangay_name: "Mabini (Pob.)",
  },
  {
    barangay_id: 2632,
    municipality_id: 104,
    barangay_name: "Macarang",
  },
  {
    barangay_id: 2633,
    municipality_id: 104,
    barangay_name: "Malabobo",
  },
  {
    barangay_id: 2634,
    municipality_id: 104,
    barangay_name: "Malibong",
  },
  {
    barangay_id: 2635,
    municipality_id: 104,
    barangay_name: "Malunec",
  },
  {
    barangay_id: 2636,
    municipality_id: 104,
    barangay_name: "Maravilla (Pob.)",
  },
  {
    barangay_id: 2637,
    municipality_id: 104,
    barangay_name: "Maravilla-Arellano Ext. (Pob.)",
  },
  {
    barangay_id: 2638,
    municipality_id: 104,
    barangay_name: "Muelang",
  },
  {
    barangay_id: 2639,
    municipality_id: 104,
    barangay_name: "Naguilayan East",
  },
  {
    barangay_id: 2640,
    municipality_id: 104,
    barangay_name: "Naguilayan West",
  },
  {
    barangay_id: 2641,
    municipality_id: 104,
    barangay_name: "Nancasalan",
  },
  {
    barangay_id: 2642,
    municipality_id: 104,
    barangay_name: "Niog-Cabison-Bulaney",
  },
  {
    barangay_id: 2643,
    municipality_id: 104,
    barangay_name: "Olegario-Caoile (Pob.)",
  },
  {
    barangay_id: 2644,
    municipality_id: 104,
    barangay_name: "Olo Cacamposan",
  },
  {
    barangay_id: 2645,
    municipality_id: 104,
    barangay_name: "Olo Cafabrosan",
  },
  {
    barangay_id: 2646,
    municipality_id: 104,
    barangay_name: "Olo Cagarlitan",
  },
  {
    barangay_id: 2647,
    municipality_id: 104,
    barangay_name: "Osmeña (Pob.)",
  },
  {
    barangay_id: 2648,
    municipality_id: 104,
    barangay_name: "Pacalat",
  },
  {
    barangay_id: 2649,
    municipality_id: 104,
    barangay_name: "Pampano",
  },
  {
    barangay_id: 2650,
    municipality_id: 104,
    barangay_name: "Parian",
  },
  {
    barangay_id: 2651,
    municipality_id: 104,
    barangay_name: "Paul",
  },
  {
    barangay_id: 2594,
    municipality_id: 104,
    barangay_name: "Peania Pedania",
  },
  {
    barangay_id: 2652,
    municipality_id: 104,
    barangay_name: "Pogon-Aniat",
  },
  {
    barangay_id: 2653,
    municipality_id: 104,
    barangay_name: "Pogon-Lomboy (Pob.)",
  },
  {
    barangay_id: 2654,
    municipality_id: 104,
    barangay_name: "Ponglo-Baleg",
  },
  {
    barangay_id: 2655,
    municipality_id: 104,
    barangay_name: "Ponglo-Muelag",
  },
  {
    barangay_id: 2656,
    municipality_id: 104,
    barangay_name: "Quetegan",
  },
  {
    barangay_id: 2657,
    municipality_id: 104,
    barangay_name: "Quezon (Pob.)",
  },
  {
    barangay_id: 2658,
    municipality_id: 104,
    barangay_name: "Salavante",
  },
  {
    barangay_id: 2659,
    municipality_id: 104,
    barangay_name: "Sapang",
  },
  {
    barangay_id: 2660,
    municipality_id: 104,
    barangay_name: "Sonson Ongkit",
  },
  {
    barangay_id: 2661,
    municipality_id: 104,
    barangay_name: "Suaco",
  },
  {
    barangay_id: 2662,
    municipality_id: 104,
    barangay_name: "Tagac",
  },
  {
    barangay_id: 2663,
    municipality_id: 104,
    barangay_name: "Takipan",
  },
  {
    barangay_id: 2664,
    municipality_id: 104,
    barangay_name: "Talogtog",
  },
  {
    barangay_id: 2665,
    municipality_id: 104,
    barangay_name: "Tococ Barikir",
  },
  {
    barangay_id: 2666,
    municipality_id: 104,
    barangay_name: "Torre 1st",
  },
  {
    barangay_id: 2667,
    municipality_id: 104,
    barangay_name: "Torre 2nd",
  },
  {
    barangay_id: 2668,
    municipality_id: 104,
    barangay_name: "Torres Bugallon (Pob.)",
  },
  {
    barangay_id: 2669,
    municipality_id: 104,
    barangay_name: "Umangan",
  },
  {
    barangay_id: 2670,
    municipality_id: 104,
    barangay_name: "Zamora (Pob.)",
  },
  {
    barangay_id: 2671,
    municipality_id: 105,
    barangay_name: "Amanoaoac",
  },
  {
    barangay_id: 2672,
    municipality_id: 105,
    barangay_name: "Apaya",
  },
  {
    barangay_id: 2673,
    municipality_id: 105,
    barangay_name: "Aserda",
  },
  {
    barangay_id: 2674,
    municipality_id: 105,
    barangay_name: "Baloling",
  },
  {
    barangay_id: 2675,
    municipality_id: 105,
    barangay_name: "Coral",
  },
  {
    barangay_id: 2676,
    municipality_id: 105,
    barangay_name: "Golden",
  },
  {
    barangay_id: 2677,
    municipality_id: 105,
    barangay_name: "Jimenez",
  },
  {
    barangay_id: 2678,
    municipality_id: 105,
    barangay_name: "Lambayan",
  },
  {
    barangay_id: 2679,
    municipality_id: 105,
    barangay_name: "Luyan",
  },
  {
    barangay_id: 2680,
    municipality_id: 105,
    barangay_name: "Nilombot",
  },
  {
    barangay_id: 2681,
    municipality_id: 105,
    barangay_name: "Pias",
  },
  {
    barangay_id: 2682,
    municipality_id: 105,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2683,
    municipality_id: 105,
    barangay_name: "Primicias",
  },
  {
    barangay_id: 2684,
    municipality_id: 105,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 2685,
    municipality_id: 105,
    barangay_name: "Torres",
  },
  {
    barangay_id: 2686,
    municipality_id: 106,
    barangay_name: "Barangobong",
  },
  {
    barangay_id: 2687,
    municipality_id: 106,
    barangay_name: "Batchelor East",
  },
  {
    barangay_id: 2688,
    municipality_id: 106,
    barangay_name: "Batchelor West",
  },
  {
    barangay_id: 2689,
    municipality_id: 106,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 2690,
    municipality_id: 106,
    barangay_name: "Cacandungan",
  },
  {
    barangay_id: 2691,
    municipality_id: 106,
    barangay_name: "Calapugan",
  },
  {
    barangay_id: 2692,
    municipality_id: 106,
    barangay_name: "Canarem",
  },
  {
    barangay_id: 2693,
    municipality_id: 106,
    barangay_name: "Luna",
  },
  {
    barangay_id: 2694,
    municipality_id: 106,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 2695,
    municipality_id: 106,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 2696,
    municipality_id: 106,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 2697,
    municipality_id: 106,
    barangay_name: "Salud",
  },
  {
    barangay_id: 2698,
    municipality_id: 106,
    barangay_name: "San Eugenio",
  },
  {
    barangay_id: 2699,
    municipality_id: 106,
    barangay_name: "San Macario Norte",
  },
  {
    barangay_id: 2700,
    municipality_id: 106,
    barangay_name: "San Macario Sur",
  },
  {
    barangay_id: 2701,
    municipality_id: 106,
    barangay_name: "San Maximo",
  },
  {
    barangay_id: 2702,
    municipality_id: 106,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 2703,
    municipality_id: 106,
    barangay_name: "Silag",
  },
  {
    barangay_id: 2704,
    municipality_id: 107,
    barangay_name: "Alipangpang",
  },
  {
    barangay_id: 2705,
    municipality_id: 107,
    barangay_name: "Amagbagan",
  },
  {
    barangay_id: 2706,
    municipality_id: 107,
    barangay_name: "Balacag",
  },
  {
    barangay_id: 2707,
    municipality_id: 107,
    barangay_name: "Banding",
  },
  {
    barangay_id: 2708,
    municipality_id: 107,
    barangay_name: "Bantugan",
  },
  {
    barangay_id: 2709,
    municipality_id: 107,
    barangay_name: "Batakil",
  },
  {
    barangay_id: 2710,
    municipality_id: 107,
    barangay_name: "Bobonan",
  },
  {
    barangay_id: 2711,
    municipality_id: 107,
    barangay_name: "Buneg",
  },
  {
    barangay_id: 2712,
    municipality_id: 107,
    barangay_name: "Cablong",
  },
  {
    barangay_id: 2737,
    municipality_id: 107,
    barangay_name: "Casanfernandoan",
  },
  {
    barangay_id: 2713,
    municipality_id: 107,
    barangay_name: "Castaño",
  },
  {
    barangay_id: 2714,
    municipality_id: 107,
    barangay_name: "Dilan",
  },
  {
    barangay_id: 2715,
    municipality_id: 107,
    barangay_name: "Don Benito",
  },
  {
    barangay_id: 2716,
    municipality_id: 107,
    barangay_name: "Haway",
  },
  {
    barangay_id: 2717,
    municipality_id: 107,
    barangay_name: "Imbalbalatong",
  },
  {
    barangay_id: 2718,
    municipality_id: 107,
    barangay_name: "Inoman",
  },
  {
    barangay_id: 2719,
    municipality_id: 107,
    barangay_name: "Laoac",
  },
  {
    barangay_id: 2720,
    municipality_id: 107,
    barangay_name: "Maambal",
  },
  {
    barangay_id: 2721,
    municipality_id: 107,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 2722,
    municipality_id: 107,
    barangay_name: "Malokiat",
  },
  {
    barangay_id: 2723,
    municipality_id: 107,
    barangay_name: "Manaol",
  },
  {
    barangay_id: 2724,
    municipality_id: 107,
    barangay_name: "Nama",
  },
  {
    barangay_id: 2725,
    municipality_id: 107,
    barangay_name: "Nantangalan",
  },
  {
    barangay_id: 2726,
    municipality_id: 107,
    barangay_name: "Palacpalac",
  },
  {
    barangay_id: 2727,
    municipality_id: 107,
    barangay_name: "Palguyod",
  },
  {
    barangay_id: 2728,
    municipality_id: 107,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 2729,
    municipality_id: 107,
    barangay_name: "Poblacion II",
  },
  {
    barangay_id: 2730,
    municipality_id: 107,
    barangay_name: "Poblacion III",
  },
  {
    barangay_id: 2731,
    municipality_id: 107,
    barangay_name: "Poblacion IV",
  },
  {
    barangay_id: 2732,
    municipality_id: 107,
    barangay_name: "Rosario",
  },
  {
    barangay_id: 2733,
    municipality_id: 107,
    barangay_name: "Sugcong",
  },
  {
    barangay_id: 2734,
    municipality_id: 107,
    barangay_name: "Talogtog",
  },
  {
    barangay_id: 2735,
    municipality_id: 107,
    barangay_name: "Tulnac",
  },
  {
    barangay_id: 2736,
    municipality_id: 107,
    barangay_name: "Villegas",
  },
  {
    barangay_id: 2738,
    municipality_id: 108,
    barangay_name: "Acop",
  },
  {
    barangay_id: 2739,
    municipality_id: 108,
    barangay_name: "Bakitbakit",
  },
  {
    barangay_id: 2740,
    municipality_id: 108,
    barangay_name: "Balingcanaway",
  },
  {
    barangay_id: 2741,
    municipality_id: 108,
    barangay_name: "Cabalaoangan Norte",
  },
  {
    barangay_id: 2742,
    municipality_id: 108,
    barangay_name: "Cabalaoangan Sur",
  },
  {
    barangay_id: 2750,
    municipality_id: 108,
    barangay_name: "Calanutan",
  },
  {
    barangay_id: 2743,
    municipality_id: 108,
    barangay_name: "Camangaan",
  },
  {
    barangay_id: 2744,
    municipality_id: 108,
    barangay_name: "Capitan Tomas",
  },
  {
    barangay_id: 2770,
    municipality_id: 108,
    barangay_name: "Carmay East",
  },
  {
    barangay_id: 2745,
    municipality_id: 108,
    barangay_name: "Carmay West",
  },
  {
    barangay_id: 2746,
    municipality_id: 108,
    barangay_name: "Carmen East",
  },
  {
    barangay_id: 2747,
    municipality_id: 108,
    barangay_name: "Carmen West",
  },
  {
    barangay_id: 2748,
    municipality_id: 108,
    barangay_name: "Casanicolasan",
  },
  {
    barangay_id: 2749,
    municipality_id: 108,
    barangay_name: "Coliling",
  },
  {
    barangay_id: 2771,
    municipality_id: 108,
    barangay_name: "Don Antonio Village",
  },
  {
    barangay_id: 2751,
    municipality_id: 108,
    barangay_name: "Guiling",
  },
  {
    barangay_id: 2752,
    municipality_id: 108,
    barangay_name: "Palakipak",
  },
  {
    barangay_id: 2753,
    municipality_id: 108,
    barangay_name: "Pangaoan",
  },
  {
    barangay_id: 2754,
    municipality_id: 108,
    barangay_name: "Rabago",
  },
  {
    barangay_id: 2755,
    municipality_id: 108,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 2756,
    municipality_id: 108,
    barangay_name: "Salvacion",
  },
  {
    barangay_id: 2764,
    municipality_id: 108,
    barangay_name: "San Angel",
  },
  {
    barangay_id: 2757,
    municipality_id: 108,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 2758,
    municipality_id: 108,
    barangay_name: "San Bartolome",
  },
  {
    barangay_id: 2759,
    municipality_id: 108,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 2760,
    municipality_id: 108,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 2761,
    municipality_id: 108,
    barangay_name: "San Pedro East",
  },
  {
    barangay_id: 2762,
    municipality_id: 108,
    barangay_name: "San Pedro West",
  },
  {
    barangay_id: 2763,
    municipality_id: 108,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 2765,
    municipality_id: 108,
    barangay_name: "Station District",
  },
  {
    barangay_id: 2766,
    municipality_id: 108,
    barangay_name: "Tomana East",
  },
  {
    barangay_id: 2767,
    municipality_id: 108,
    barangay_name: "Tomana West",
  },
  {
    barangay_id: 2768,
    municipality_id: 108,
    barangay_name: "Zone I (Pob.)",
  },
  {
    barangay_id: 2772,
    municipality_id: 108,
    barangay_name: "Zone II (Pob.)",
  },
  {
    barangay_id: 2773,
    municipality_id: 108,
    barangay_name: "Zone III (Pob.)",
  },
  {
    barangay_id: 2769,
    municipality_id: 108,
    barangay_name: "Zone IV (Pob.)",
  },
  {
    barangay_id: 2774,
    municipality_id: 108,
    barangay_name: "Zone V (Pob.)",
  },
  {
    barangay_id: 2775,
    municipality_id: 109,
    barangay_name: "Abanon",
  },
  {
    barangay_id: 2776,
    municipality_id: 109,
    barangay_name: "Agdao",
  },
  {
    barangay_id: 2777,
    municipality_id: 109,
    barangay_name: "Anando",
  },
  {
    barangay_id: 2778,
    municipality_id: 109,
    barangay_name: "Ano",
  },
  {
    barangay_id: 2779,
    municipality_id: 109,
    barangay_name: "Antipangol",
  },
  {
    barangay_id: 2780,
    municipality_id: 109,
    barangay_name: "Aponit",
  },
  {
    barangay_id: 2781,
    municipality_id: 109,
    barangay_name: "Bacnar",
  },
  {
    barangay_id: 2782,
    municipality_id: 109,
    barangay_name: "Balaya",
  },
  {
    barangay_id: 2783,
    municipality_id: 109,
    barangay_name: "Balayong",
  },
  {
    barangay_id: 2784,
    municipality_id: 109,
    barangay_name: "Baldog",
  },
  {
    barangay_id: 2785,
    municipality_id: 109,
    barangay_name: "Balite Sur",
  },
  {
    barangay_id: 2786,
    municipality_id: 109,
    barangay_name: "Balococ",
  },
  {
    barangay_id: 2787,
    municipality_id: 109,
    barangay_name: "Bani",
  },
  {
    barangay_id: 2788,
    municipality_id: 109,
    barangay_name: "Bega",
  },
  {
    barangay_id: 2789,
    municipality_id: 109,
    barangay_name: "Bocboc",
  },
  {
    barangay_id: 2791,
    municipality_id: 109,
    barangay_name: "Bogaoan",
  },
  {
    barangay_id: 2792,
    municipality_id: 109,
    barangay_name: "Bolingit",
  },
  {
    barangay_id: 2793,
    municipality_id: 109,
    barangay_name: "Bolosan",
  },
  {
    barangay_id: 2794,
    municipality_id: 109,
    barangay_name: "Bonifacio (Pob.)",
  },
  {
    barangay_id: 2795,
    municipality_id: 109,
    barangay_name: "Buenglat",
  },
  {
    barangay_id: 2790,
    municipality_id: 109,
    barangay_name: "Bugallon-Posadas Street (Pob.)",
  },
  {
    barangay_id: 2796,
    municipality_id: 109,
    barangay_name: "Burgos Padlan (Pob.)",
  },
  {
    barangay_id: 2797,
    municipality_id: 109,
    barangay_name: "Cacaritan",
  },
  {
    barangay_id: 2798,
    municipality_id: 109,
    barangay_name: "Caingal",
  },
  {
    barangay_id: 2799,
    municipality_id: 109,
    barangay_name: "Calobaoan",
  },
  {
    barangay_id: 2800,
    municipality_id: 109,
    barangay_name: "Calomboyan",
  },
  {
    barangay_id: 2802,
    municipality_id: 109,
    barangay_name: "Caoayan-Kiling",
  },
  {
    barangay_id: 2801,
    municipality_id: 109,
    barangay_name: "Capataan",
  },
  {
    barangay_id: 2803,
    municipality_id: 109,
    barangay_name: "Cobol",
  },
  {
    barangay_id: 2804,
    municipality_id: 109,
    barangay_name: "Coliling",
  },
  {
    barangay_id: 2805,
    municipality_id: 109,
    barangay_name: "Cruz",
  },
  {
    barangay_id: 2806,
    municipality_id: 109,
    barangay_name: "Doyong",
  },
  {
    barangay_id: 2807,
    municipality_id: 109,
    barangay_name: "Gamata",
  },
  {
    barangay_id: 2808,
    municipality_id: 109,
    barangay_name: "Guelew",
  },
  {
    barangay_id: 2809,
    municipality_id: 109,
    barangay_name: "Ilang",
  },
  {
    barangay_id: 2810,
    municipality_id: 109,
    barangay_name: "Inerangan",
  },
  {
    barangay_id: 2811,
    municipality_id: 109,
    barangay_name: "Isla",
  },
  {
    barangay_id: 2812,
    municipality_id: 109,
    barangay_name: "Libas",
  },
  {
    barangay_id: 2813,
    municipality_id: 109,
    barangay_name: "Lilimasan",
  },
  {
    barangay_id: 2814,
    municipality_id: 109,
    barangay_name: "Longos",
  },
  {
    barangay_id: 2815,
    municipality_id: 109,
    barangay_name: "Lucban (Pob.)",
  },
  {
    barangay_id: 2859,
    municipality_id: 109,
    barangay_name: "M. Soriano",
  },
  {
    barangay_id: 2816,
    municipality_id: 109,
    barangay_name: "Mabalbalino",
  },
  {
    barangay_id: 2817,
    municipality_id: 109,
    barangay_name: "Mabini (Pob.)",
  },
  {
    barangay_id: 2818,
    municipality_id: 109,
    barangay_name: "Magtaking",
  },
  {
    barangay_id: 2819,
    municipality_id: 109,
    barangay_name: "Malacañang",
  },
  {
    barangay_id: 2820,
    municipality_id: 109,
    barangay_name: "Maliwara",
  },
  {
    barangay_id: 2821,
    municipality_id: 109,
    barangay_name: "Mamarlao",
  },
  {
    barangay_id: 2822,
    municipality_id: 109,
    barangay_name: "Manzon",
  },
  {
    barangay_id: 2823,
    municipality_id: 109,
    barangay_name: "Matagdem",
  },
  {
    barangay_id: 2824,
    municipality_id: 109,
    barangay_name: "Mestizo Norte",
  },
  {
    barangay_id: 2825,
    municipality_id: 109,
    barangay_name: "Naguilayan",
  },
  {
    barangay_id: 2826,
    municipality_id: 109,
    barangay_name: "Nilentap",
  },
  {
    barangay_id: 2827,
    municipality_id: 109,
    barangay_name: "Padilla-Gomez",
  },
  {
    barangay_id: 2828,
    municipality_id: 109,
    barangay_name: "Pagal",
  },
  {
    barangay_id: 2835,
    municipality_id: 109,
    barangay_name: "Paitan-Panoypoy",
  },
  {
    barangay_id: 2829,
    municipality_id: 109,
    barangay_name: "Palaming",
  },
  {
    barangay_id: 2830,
    municipality_id: 109,
    barangay_name: "Palaris (Pob.)",
  },
  {
    barangay_id: 2831,
    municipality_id: 109,
    barangay_name: "Palospos",
  },
  {
    barangay_id: 2832,
    municipality_id: 109,
    barangay_name: "Pangalangan",
  },
  {
    barangay_id: 2833,
    municipality_id: 109,
    barangay_name: "Pangoloan",
  },
  {
    barangay_id: 2834,
    municipality_id: 109,
    barangay_name: "Pangpang",
  },
  {
    barangay_id: 2836,
    municipality_id: 109,
    barangay_name: "Parayao",
  },
  {
    barangay_id: 2837,
    municipality_id: 109,
    barangay_name: "Payapa",
  },
  {
    barangay_id: 2838,
    municipality_id: 109,
    barangay_name: "Payar",
  },
  {
    barangay_id: 2839,
    municipality_id: 109,
    barangay_name: "Perez Boulevard (Pob.)",
  },
  {
    barangay_id: 2849,
    municipality_id: 109,
    barangay_name: "PNR Station Site",
  },
  {
    barangay_id: 2840,
    municipality_id: 109,
    barangay_name: "Polo",
  },
  {
    barangay_id: 2841,
    municipality_id: 109,
    barangay_name: "Quezon Boulevard (Pob.)",
  },
  {
    barangay_id: 2842,
    municipality_id: 109,
    barangay_name: "Quintong",
  },
  {
    barangay_id: 2843,
    municipality_id: 109,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 2844,
    municipality_id: 109,
    barangay_name: "Roxas Boulevard (Pob.)",
  },
  {
    barangay_id: 2845,
    municipality_id: 109,
    barangay_name: "Salinap",
  },
  {
    barangay_id: 2846,
    municipality_id: 109,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 2847,
    municipality_id: 109,
    barangay_name: "San Pedro-Taloy",
  },
  {
    barangay_id: 2848,
    municipality_id: 109,
    barangay_name: "Sapinit",
  },
  {
    barangay_id: 2850,
    municipality_id: 109,
    barangay_name: "Supo",
  },
  {
    barangay_id: 2851,
    municipality_id: 109,
    barangay_name: "Talang",
  },
  {
    barangay_id: 2852,
    municipality_id: 109,
    barangay_name: "Tamayo",
  },
  {
    barangay_id: 2860,
    municipality_id: 109,
    barangay_name: "Tandang Sora",
  },
  {
    barangay_id: 2853,
    municipality_id: 109,
    barangay_name: "Tandoc",
  },
  {
    barangay_id: 2854,
    municipality_id: 109,
    barangay_name: "Tarece",
  },
  {
    barangay_id: 2855,
    municipality_id: 109,
    barangay_name: "Tarectec",
  },
  {
    barangay_id: 2856,
    municipality_id: 109,
    barangay_name: "Tayambani",
  },
  {
    barangay_id: 2857,
    municipality_id: 109,
    barangay_name: "Tebag",
  },
  {
    barangay_id: 2858,
    municipality_id: 109,
    barangay_name: "Turac",
  },
  {
    barangay_id: 2889,
    municipality_id: 110,
    barangay_name: "Alacan",
  },
  {
    barangay_id: 2861,
    municipality_id: 110,
    barangay_name: "Ambalangan-Dalin",
  },
  {
    barangay_id: 2862,
    municipality_id: 110,
    barangay_name: "Angio",
  },
  {
    barangay_id: 2863,
    municipality_id: 110,
    barangay_name: "Anonang",
  },
  {
    barangay_id: 2864,
    municipality_id: 110,
    barangay_name: "Aramal",
  },
  {
    barangay_id: 2865,
    municipality_id: 110,
    barangay_name: "Bigbiga",
  },
  {
    barangay_id: 2866,
    municipality_id: 110,
    barangay_name: "Binday",
  },
  {
    barangay_id: 2867,
    municipality_id: 110,
    barangay_name: "Bolaoen",
  },
  {
    barangay_id: 2868,
    municipality_id: 110,
    barangay_name: "Bolasi",
  },
  {
    barangay_id: 2890,
    municipality_id: 110,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 2869,
    municipality_id: 110,
    barangay_name: "Cayanga",
  },
  {
    barangay_id: 2886,
    municipality_id: 110,
    barangay_name: "Colisao",
  },
  {
    barangay_id: 2870,
    municipality_id: 110,
    barangay_name: "Gomot",
  },
  {
    barangay_id: 2871,
    municipality_id: 110,
    barangay_name: "Inmalog",
  },
  {
    barangay_id: 2891,
    municipality_id: 110,
    barangay_name: "Inmalog Norte",
  },
  {
    barangay_id: 2872,
    municipality_id: 110,
    barangay_name: "Lekep-Butao",
  },
  {
    barangay_id: 2885,
    municipality_id: 110,
    barangay_name: "Lipit-Tomeeng",
  },
  {
    barangay_id: 2873,
    municipality_id: 110,
    barangay_name: "Longos",
  },
  {
    barangay_id: 2893,
    municipality_id: 110,
    barangay_name: "Longos Proper",
  },
  {
    barangay_id: 2892,
    municipality_id: 110,
    barangay_name: "Longos-Amangonan-Parac-Parac Fabrica",
  },
  {
    barangay_id: 2874,
    municipality_id: 110,
    barangay_name: "Mabilao",
  },
  {
    barangay_id: 2875,
    municipality_id: 110,
    barangay_name: "Nibaliw Central",
  },
  {
    barangay_id: 2876,
    municipality_id: 110,
    barangay_name: "Nibaliw East",
  },
  {
    barangay_id: 2877,
    municipality_id: 110,
    barangay_name: "Nibaliw Magliba",
  },
  {
    barangay_id: 2887,
    municipality_id: 110,
    barangay_name: "Nibaliw Narvarte",
  },
  {
    barangay_id: 2888,
    municipality_id: 110,
    barangay_name: "Nibaliw Vidal",
  },
  {
    barangay_id: 2878,
    municipality_id: 110,
    barangay_name: "Palapad",
  },
  {
    barangay_id: 2879,
    municipality_id: 110,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 2880,
    municipality_id: 110,
    barangay_name: "Rabon",
  },
  {
    barangay_id: 2881,
    municipality_id: 110,
    barangay_name: "Sagud-Bahley",
  },
  {
    barangay_id: 2882,
    municipality_id: 110,
    barangay_name: "Sobol",
  },
  {
    barangay_id: 2883,
    municipality_id: 110,
    barangay_name: "Tempra-Guilig",
  },
  {
    barangay_id: 2894,
    municipality_id: 110,
    barangay_name: "Tiblong",
  },
  {
    barangay_id: 2884,
    municipality_id: 110,
    barangay_name: "Tocok",
  },
  {
    barangay_id: 2895,
    municipality_id: 111,
    barangay_name: "Awai",
  },
  {
    barangay_id: 2905,
    municipality_id: 111,
    barangay_name: "Bagong Pag-asa",
  },
  {
    barangay_id: 2896,
    municipality_id: 111,
    barangay_name: "Bolo",
  },
  {
    barangay_id: 2897,
    municipality_id: 111,
    barangay_name: "Capaoay (Pob.)",
  },
  {
    barangay_id: 2898,
    municipality_id: 111,
    barangay_name: "Casibong",
  },
  {
    barangay_id: 2900,
    municipality_id: 111,
    barangay_name: "Guibel",
  },
  {
    barangay_id: 2899,
    municipality_id: 111,
    barangay_name: "Imelda",
  },
  {
    barangay_id: 2901,
    municipality_id: 111,
    barangay_name: "Labney",
  },
  {
    barangay_id: 2903,
    municipality_id: 111,
    barangay_name: "Lobong",
  },
  {
    barangay_id: 2904,
    municipality_id: 111,
    barangay_name: "Macayug",
  },
  {
    barangay_id: 2902,
    municipality_id: 111,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 2906,
    municipality_id: 111,
    barangay_name: "San Guillermo",
  },
  {
    barangay_id: 2907,
    municipality_id: 111,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 2908,
    municipality_id: 111,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 2909,
    municipality_id: 111,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 2910,
    municipality_id: 111,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 2911,
    municipality_id: 111,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 2912,
    municipality_id: 111,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 2913,
    municipality_id: 111,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 2915,
    municipality_id: 112,
    barangay_name: "Cabacaraan",
  },
  {
    barangay_id: 2916,
    municipality_id: 112,
    barangay_name: "Cabaritan",
  },
  {
    barangay_id: 2917,
    municipality_id: 112,
    barangay_name: "Flores",
  },
  {
    barangay_id: 2918,
    municipality_id: 112,
    barangay_name: "Guiset Norte (Pob.)",
  },
  {
    barangay_id: 2919,
    municipality_id: 112,
    barangay_name: "Guiset Sur (Pob.)",
  },
  {
    barangay_id: 2920,
    municipality_id: 112,
    barangay_name: "Lapalo",
  },
  {
    barangay_id: 2921,
    municipality_id: 112,
    barangay_name: "Nagsaag",
  },
  {
    barangay_id: 2922,
    municipality_id: 112,
    barangay_name: "Narra",
  },
  {
    barangay_id: 2914,
    municipality_id: 112,
    barangay_name: "San Antonio-Arzadon",
  },
  {
    barangay_id: 2923,
    municipality_id: 112,
    barangay_name: "San Bonifacio",
  },
  {
    barangay_id: 2924,
    municipality_id: 112,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 2925,
    municipality_id: 112,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 2926,
    municipality_id: 112,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 2927,
    municipality_id: 112,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 2928,
    municipality_id: 113,
    barangay_name: "Bensican",
  },
  {
    barangay_id: 2929,
    municipality_id: 113,
    barangay_name: "Cabitnongan",
  },
  {
    barangay_id: 2930,
    municipality_id: 113,
    barangay_name: "Caboloan",
  },
  {
    barangay_id: 2931,
    municipality_id: 113,
    barangay_name: "Cacabugaoan",
  },
  {
    barangay_id: 2932,
    municipality_id: 113,
    barangay_name: "Calanutian",
  },
  {
    barangay_id: 2933,
    municipality_id: 113,
    barangay_name: "Calaocan",
  },
  {
    barangay_id: 2934,
    municipality_id: 113,
    barangay_name: "Camanggaan",
  },
  {
    barangay_id: 2935,
    municipality_id: 113,
    barangay_name: "Camindoroan",
  },
  {
    barangay_id: 2936,
    municipality_id: 113,
    barangay_name: "Casaratan",
  },
  {
    barangay_id: 2937,
    municipality_id: 113,
    barangay_name: "Dalumpinas",
  },
  {
    barangay_id: 2938,
    municipality_id: 113,
    barangay_name: "Fianza",
  },
  {
    barangay_id: 2939,
    municipality_id: 113,
    barangay_name: "Lungao",
  },
  {
    barangay_id: 2940,
    municipality_id: 113,
    barangay_name: "Malico",
  },
  {
    barangay_id: 2941,
    municipality_id: 113,
    barangay_name: "Malilion",
  },
  {
    barangay_id: 2942,
    municipality_id: 113,
    barangay_name: "Nagkaysa",
  },
  {
    barangay_id: 2943,
    municipality_id: 113,
    barangay_name: "Nining",
  },
  {
    barangay_id: 2944,
    municipality_id: 113,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 2945,
    municipality_id: 113,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 2946,
    municipality_id: 113,
    barangay_name: "Salingcob",
  },
  {
    barangay_id: 2947,
    municipality_id: 113,
    barangay_name: "Salpad",
  },
  {
    barangay_id: 2948,
    municipality_id: 113,
    barangay_name: "San Felipe East",
  },
  {
    barangay_id: 2949,
    municipality_id: 113,
    barangay_name: "San Felipe West",
  },
  {
    barangay_id: 2950,
    municipality_id: 113,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 2951,
    municipality_id: 113,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 2952,
    municipality_id: 113,
    barangay_name: "San Rafael Centro",
  },
  {
    barangay_id: 2953,
    municipality_id: 113,
    barangay_name: "San Rafael East",
  },
  {
    barangay_id: 2954,
    municipality_id: 113,
    barangay_name: "San Rafael West",
  },
  {
    barangay_id: 2955,
    municipality_id: 113,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 2956,
    municipality_id: 113,
    barangay_name: "Santa Maria East",
  },
  {
    barangay_id: 2957,
    municipality_id: 113,
    barangay_name: "Santa Maria West",
  },
  {
    barangay_id: 2958,
    municipality_id: 113,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 2959,
    municipality_id: 113,
    barangay_name: "Siblot",
  },
  {
    barangay_id: 2960,
    municipality_id: 113,
    barangay_name: "Sobol",
  },
  {
    barangay_id: 2961,
    municipality_id: 114,
    barangay_name: "Alac",
  },
  {
    barangay_id: 2962,
    municipality_id: 114,
    barangay_name: "Baligayan",
  },
  {
    barangay_id: 2963,
    municipality_id: 114,
    barangay_name: "Bantog",
  },
  {
    barangay_id: 2964,
    municipality_id: 114,
    barangay_name: "Bolintaguen",
  },
  {
    barangay_id: 2966,
    municipality_id: 114,
    barangay_name: "Cabalaoangan",
  },
  {
    barangay_id: 2965,
    municipality_id: 114,
    barangay_name: "Cabangaran",
  },
  {
    barangay_id: 2967,
    municipality_id: 114,
    barangay_name: "Calomboyan",
  },
  {
    barangay_id: 2968,
    municipality_id: 114,
    barangay_name: "Carayacan",
  },
  {
    barangay_id: 2969,
    municipality_id: 114,
    barangay_name: "Casantamarian",
  },
  {
    barangay_id: 2970,
    municipality_id: 114,
    barangay_name: "Gonzalo",
  },
  {
    barangay_id: 2971,
    municipality_id: 114,
    barangay_name: "Labuan",
  },
  {
    barangay_id: 2972,
    municipality_id: 114,
    barangay_name: "Lagasit",
  },
  {
    barangay_id: 2973,
    municipality_id: 114,
    barangay_name: "Lumayao",
  },
  {
    barangay_id: 2974,
    municipality_id: 114,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 2975,
    municipality_id: 114,
    barangay_name: "Mantacdang",
  },
  {
    barangay_id: 2976,
    municipality_id: 114,
    barangay_name: "Nangapugan",
  },
  {
    barangay_id: 2979,
    municipality_id: 114,
    barangay_name: "Poblacion Zone I",
  },
  {
    barangay_id: 2980,
    municipality_id: 114,
    barangay_name: "Poblacion Zone II",
  },
  {
    barangay_id: 2981,
    municipality_id: 114,
    barangay_name: "Poblacion Zone III",
  },
  {
    barangay_id: 2977,
    municipality_id: 114,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 2978,
    municipality_id: 114,
    barangay_name: "Ungib",
  },
  {
    barangay_id: 2982,
    municipality_id: 115,
    barangay_name: "Alibago",
  },
  {
    barangay_id: 2983,
    municipality_id: 115,
    barangay_name: "Balingueo",
  },
  {
    barangay_id: 2984,
    municipality_id: 115,
    barangay_name: "Banaoang",
  },
  {
    barangay_id: 2985,
    municipality_id: 115,
    barangay_name: "Banzal",
  },
  {
    barangay_id: 2986,
    municipality_id: 115,
    barangay_name: "Botao",
  },
  {
    barangay_id: 2987,
    municipality_id: 115,
    barangay_name: "Cablong",
  },
  {
    barangay_id: 2988,
    municipality_id: 115,
    barangay_name: "Carusocan",
  },
  {
    barangay_id: 2989,
    municipality_id: 115,
    barangay_name: "Dalongue",
  },
  {
    barangay_id: 2990,
    municipality_id: 115,
    barangay_name: "Erfe",
  },
  {
    barangay_id: 2991,
    municipality_id: 115,
    barangay_name: "Gueguesangen",
  },
  {
    barangay_id: 2992,
    municipality_id: 115,
    barangay_name: "Leet",
  },
  {
    barangay_id: 2993,
    municipality_id: 115,
    barangay_name: "Malanay",
  },
  {
    barangay_id: 2994,
    municipality_id: 115,
    barangay_name: "Maningding",
  },
  {
    barangay_id: 2995,
    municipality_id: 115,
    barangay_name: "Maronong",
  },
  {
    barangay_id: 2996,
    municipality_id: 115,
    barangay_name: "Maticmatic",
  },
  {
    barangay_id: 2997,
    municipality_id: 115,
    barangay_name: "Minien East",
  },
  {
    barangay_id: 2998,
    municipality_id: 115,
    barangay_name: "Minien West",
  },
  {
    barangay_id: 2999,
    municipality_id: 115,
    barangay_name: "Nilombot",
  },
  {
    barangay_id: 3000,
    municipality_id: 115,
    barangay_name: "Patayac",
  },
  {
    barangay_id: 3001,
    municipality_id: 115,
    barangay_name: "Payas",
  },
  {
    barangay_id: 3002,
    municipality_id: 115,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 3003,
    municipality_id: 115,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 3010,
    municipality_id: 115,
    barangay_name: "Primicias",
  },
  {
    barangay_id: 3004,
    municipality_id: 115,
    barangay_name: "Sapang",
  },
  {
    barangay_id: 3005,
    municipality_id: 115,
    barangay_name: "Sonquil",
  },
  {
    barangay_id: 3006,
    municipality_id: 115,
    barangay_name: "Tebag East",
  },
  {
    barangay_id: 3007,
    municipality_id: 115,
    barangay_name: "Tebag West",
  },
  {
    barangay_id: 3008,
    municipality_id: 115,
    barangay_name: "Tuliao",
  },
  {
    barangay_id: 3009,
    municipality_id: 115,
    barangay_name: "Ventinilla",
  },
  {
    barangay_id: 3011,
    municipality_id: 116,
    barangay_name: "Bal-loy",
  },
  {
    barangay_id: 3012,
    municipality_id: 116,
    barangay_name: "Bantog",
  },
  {
    barangay_id: 3013,
    municipality_id: 116,
    barangay_name: "Caboluan",
  },
  {
    barangay_id: 3014,
    municipality_id: 116,
    barangay_name: "Cal-litang",
  },
  {
    barangay_id: 3015,
    municipality_id: 116,
    barangay_name: "Capandanan",
  },
  {
    barangay_id: 3016,
    municipality_id: 116,
    barangay_name: "Cauplasan",
  },
  {
    barangay_id: 3017,
    municipality_id: 116,
    barangay_name: "Dalayap",
  },
  {
    barangay_id: 3018,
    municipality_id: 116,
    barangay_name: "Libsong",
  },
  {
    barangay_id: 3019,
    municipality_id: 116,
    barangay_name: "Namagbagan",
  },
  {
    barangay_id: 3020,
    municipality_id: 116,
    barangay_name: "Paitan",
  },
  {
    barangay_id: 3021,
    municipality_id: 116,
    barangay_name: "Pataquid",
  },
  {
    barangay_id: 3022,
    municipality_id: 116,
    barangay_name: "Pilar",
  },
  {
    barangay_id: 3023,
    municipality_id: 116,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 3024,
    municipality_id: 116,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 3025,
    municipality_id: 116,
    barangay_name: "Pugot",
  },
  {
    barangay_id: 3026,
    municipality_id: 116,
    barangay_name: "Samon",
  },
  {
    barangay_id: 3027,
    municipality_id: 116,
    barangay_name: "San Alejandro",
  },
  {
    barangay_id: 3028,
    municipality_id: 116,
    barangay_name: "San Mariano",
  },
  {
    barangay_id: 3029,
    municipality_id: 116,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 3030,
    municipality_id: 116,
    barangay_name: "San Patricio",
  },
  {
    barangay_id: 3031,
    municipality_id: 116,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 3032,
    municipality_id: 116,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 3033,
    municipality_id: 116,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 3034,
    municipality_id: 117,
    barangay_name: "La Luna",
  },
  {
    barangay_id: 3035,
    municipality_id: 117,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 3036,
    municipality_id: 117,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 3037,
    municipality_id: 117,
    barangay_name: "Salvacion",
  },
  {
    barangay_id: 3038,
    municipality_id: 117,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 3039,
    municipality_id: 117,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 3040,
    municipality_id: 117,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 3041,
    municipality_id: 117,
    barangay_name: "San Marcos",
  },
  {
    barangay_id: 3042,
    municipality_id: 117,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 3043,
    municipality_id: 117,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 3044,
    municipality_id: 118,
    barangay_name: "Agat",
  },
  {
    barangay_id: 3045,
    municipality_id: 118,
    barangay_name: "Alibeng",
  },
  {
    barangay_id: 3046,
    municipality_id: 118,
    barangay_name: "Amagbagan",
  },
  {
    barangay_id: 3047,
    municipality_id: 118,
    barangay_name: "Artacho",
  },
  {
    barangay_id: 3048,
    municipality_id: 118,
    barangay_name: "Asan Norte",
  },
  {
    barangay_id: 3049,
    municipality_id: 118,
    barangay_name: "Asan Sur",
  },
  {
    barangay_id: 3050,
    municipality_id: 118,
    barangay_name: "Bantay Insik",
  },
  {
    barangay_id: 3051,
    municipality_id: 118,
    barangay_name: "Bila",
  },
  {
    barangay_id: 3052,
    municipality_id: 118,
    barangay_name: "Binmeckeg",
  },
  {
    barangay_id: 3053,
    municipality_id: 118,
    barangay_name: "Bulaoen East",
  },
  {
    barangay_id: 3054,
    municipality_id: 118,
    barangay_name: "Bulaoen West",
  },
  {
    barangay_id: 3055,
    municipality_id: 118,
    barangay_name: "Cabaritan",
  },
  {
    barangay_id: 3056,
    municipality_id: 118,
    barangay_name: "Calunetan",
  },
  {
    barangay_id: 3057,
    municipality_id: 118,
    barangay_name: "Camangaan",
  },
  {
    barangay_id: 3058,
    municipality_id: 118,
    barangay_name: "Cauringan",
  },
  {
    barangay_id: 3059,
    municipality_id: 118,
    barangay_name: "Dungon",
  },
  {
    barangay_id: 3060,
    municipality_id: 118,
    barangay_name: "Esperanza",
  },
  {
    barangay_id: 3070,
    municipality_id: 118,
    barangay_name: "Inmalog",
  },
  {
    barangay_id: 3061,
    municipality_id: 118,
    barangay_name: "Killo",
  },
  {
    barangay_id: 3062,
    municipality_id: 118,
    barangay_name: "Labayug",
  },
  {
    barangay_id: 3063,
    municipality_id: 118,
    barangay_name: "Paldit",
  },
  {
    barangay_id: 3064,
    municipality_id: 118,
    barangay_name: "Pindangan",
  },
  {
    barangay_id: 3065,
    municipality_id: 118,
    barangay_name: "Pinmilapil",
  },
  {
    barangay_id: 3066,
    municipality_id: 118,
    barangay_name: "Poblacion Central",
  },
  {
    barangay_id: 3067,
    municipality_id: 118,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 3068,
    municipality_id: 118,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 3069,
    municipality_id: 118,
    barangay_name: "Sagunto",
  },
  {
    barangay_id: 3071,
    municipality_id: 118,
    barangay_name: "Tara-tara",
  },
  {
    barangay_id: 3072,
    municipality_id: 119,
    barangay_name: "Baquioen",
  },
  {
    barangay_id: 3073,
    municipality_id: 119,
    barangay_name: "Baybay Norte",
  },
  {
    barangay_id: 3074,
    municipality_id: 119,
    barangay_name: "Baybay Sur",
  },
  {
    barangay_id: 3075,
    municipality_id: 119,
    barangay_name: "Bolaoen",
  },
  {
    barangay_id: 3076,
    municipality_id: 119,
    barangay_name: "Cabalitian",
  },
  {
    barangay_id: 3077,
    municipality_id: 119,
    barangay_name: "Calumbuyan",
  },
  {
    barangay_id: 3078,
    municipality_id: 119,
    barangay_name: "Camagsingalan",
  },
  {
    barangay_id: 3079,
    municipality_id: 119,
    barangay_name: "Caoayan",
  },
  {
    barangay_id: 3080,
    municipality_id: 119,
    barangay_name: "Capantolan",
  },
  {
    barangay_id: 3081,
    municipality_id: 119,
    barangay_name: "Macaycayawan",
  },
  {
    barangay_id: 3082,
    municipality_id: 119,
    barangay_name: "Paitan East",
  },
  {
    barangay_id: 3083,
    municipality_id: 119,
    barangay_name: "Paitan West",
  },
  {
    barangay_id: 3084,
    municipality_id: 119,
    barangay_name: "Pangascasan",
  },
  {
    barangay_id: 3085,
    municipality_id: 119,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 3086,
    municipality_id: 119,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 3087,
    municipality_id: 119,
    barangay_name: "Seselangen",
  },
  {
    barangay_id: 3088,
    municipality_id: 119,
    barangay_name: "Sioasio East",
  },
  {
    barangay_id: 3089,
    municipality_id: 119,
    barangay_name: "Sioasio West",
  },
  {
    barangay_id: 3090,
    municipality_id: 119,
    barangay_name: "Victoria",
  },
  {
    barangay_id: 3091,
    municipality_id: 120,
    barangay_name: "Agno",
  },
  {
    barangay_id: 3092,
    municipality_id: 120,
    barangay_name: "Amistad",
  },
  {
    barangay_id: 3103,
    municipality_id: 120,
    barangay_name: "Barangay A (Pob.)",
  },
  {
    barangay_id: 3104,
    municipality_id: 120,
    barangay_name: "Barangay B (Pob.)",
  },
  {
    barangay_id: 3105,
    municipality_id: 120,
    barangay_name: "Barangay C (Pob.)",
  },
  {
    barangay_id: 3106,
    municipality_id: 120,
    barangay_name: "Barangay D (Pob.)",
  },
  {
    barangay_id: 3093,
    municipality_id: 120,
    barangay_name: "Barangobong",
  },
  {
    barangay_id: 3095,
    municipality_id: 120,
    barangay_name: "C. Lichauco",
  },
  {
    barangay_id: 3094,
    municipality_id: 120,
    barangay_name: "Carriedo",
  },
  {
    barangay_id: 3096,
    municipality_id: 120,
    barangay_name: "Evangelista",
  },
  {
    barangay_id: 3097,
    municipality_id: 120,
    barangay_name: "Guzon",
  },
  {
    barangay_id: 3098,
    municipality_id: 120,
    barangay_name: "Lawak",
  },
  {
    barangay_id: 3099,
    municipality_id: 120,
    barangay_name: "Legaspi",
  },
  {
    barangay_id: 3100,
    municipality_id: 120,
    barangay_name: "Libertad",
  },
  {
    barangay_id: 3101,
    municipality_id: 120,
    barangay_name: "Magallanes",
  },
  {
    barangay_id: 3102,
    municipality_id: 120,
    barangay_name: "Panganiban",
  },
  {
    barangay_id: 3107,
    municipality_id: 120,
    barangay_name: "Saleng",
  },
  {
    barangay_id: 3108,
    municipality_id: 120,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 3109,
    municipality_id: 120,
    barangay_name: "Toketec",
  },
  {
    barangay_id: 3110,
    municipality_id: 120,
    barangay_name: "Trenchera",
  },
  {
    barangay_id: 3111,
    municipality_id: 120,
    barangay_name: "Zamora",
  },
  {
    barangay_id: 3112,
    municipality_id: 121,
    barangay_name: "Abot Molina",
  },
  {
    barangay_id: 3113,
    municipality_id: 121,
    barangay_name: "Alo-o",
  },
  {
    barangay_id: 3114,
    municipality_id: 121,
    barangay_name: "Amaronan",
  },
  {
    barangay_id: 3115,
    municipality_id: 121,
    barangay_name: "Annam",
  },
  {
    barangay_id: 3116,
    municipality_id: 121,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 3117,
    municipality_id: 121,
    barangay_name: "Baracbac",
  },
  {
    barangay_id: 3118,
    municipality_id: 121,
    barangay_name: "Barat",
  },
  {
    barangay_id: 3119,
    municipality_id: 121,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 3120,
    municipality_id: 121,
    barangay_name: "Cabalitian",
  },
  {
    barangay_id: 3167,
    municipality_id: 121,
    barangay_name: "Cabangaran",
  },
  {
    barangay_id: 3121,
    municipality_id: 121,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 3122,
    municipality_id: 121,
    barangay_name: "Cabatuan",
  },
  {
    barangay_id: 3123,
    municipality_id: 121,
    barangay_name: "Cadiz",
  },
  {
    barangay_id: 3124,
    municipality_id: 121,
    barangay_name: "Calitlitan",
  },
  {
    barangay_id: 3125,
    municipality_id: 121,
    barangay_name: "Capas",
  },
  {
    barangay_id: 3168,
    municipality_id: 121,
    barangay_name: "Carayungan Sur",
  },
  {
    barangay_id: 3126,
    municipality_id: 121,
    barangay_name: "Carosalesan",
  },
  {
    barangay_id: 3127,
    municipality_id: 121,
    barangay_name: "Casilan",
  },
  {
    barangay_id: 3128,
    municipality_id: 121,
    barangay_name: "Caurdanetaan",
  },
  {
    barangay_id: 3129,
    municipality_id: 121,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 3130,
    municipality_id: 121,
    barangay_name: "Decreto",
  },
  {
    barangay_id: 3169,
    municipality_id: 121,
    barangay_name: "Del Rosario",
  },
  {
    barangay_id: 3131,
    municipality_id: 121,
    barangay_name: "Diaz",
  },
  {
    barangay_id: 3132,
    municipality_id: 121,
    barangay_name: "Diket",
  },
  {
    barangay_id: 3133,
    municipality_id: 121,
    barangay_name: "Don Justo Abalos",
  },
  {
    barangay_id: 3134,
    municipality_id: 121,
    barangay_name: "Don Montano",
  },
  {
    barangay_id: 3135,
    municipality_id: 121,
    barangay_name: "Esperanza",
  },
  {
    barangay_id: 3136,
    municipality_id: 121,
    barangay_name: "Evangelista",
  },
  {
    barangay_id: 3137,
    municipality_id: 121,
    barangay_name: "Flores",
  },
  {
    barangay_id: 3138,
    municipality_id: 121,
    barangay_name: "Fulgosino",
  },
  {
    barangay_id: 3139,
    municipality_id: 121,
    barangay_name: "Gonzales",
  },
  {
    barangay_id: 3140,
    municipality_id: 121,
    barangay_name: "La Paz",
  },
  {
    barangay_id: 3141,
    municipality_id: 121,
    barangay_name: "Labuan",
  },
  {
    barangay_id: 3142,
    municipality_id: 121,
    barangay_name: "Lauren",
  },
  {
    barangay_id: 3143,
    municipality_id: 121,
    barangay_name: "Lubong",
  },
  {
    barangay_id: 3145,
    municipality_id: 121,
    barangay_name: "Luna Este",
  },
  {
    barangay_id: 3144,
    municipality_id: 121,
    barangay_name: "Luna Weste",
  },
  {
    barangay_id: 3146,
    municipality_id: 121,
    barangay_name: "Mantacdang",
  },
  {
    barangay_id: 3147,
    municipality_id: 121,
    barangay_name: "Maseil-seil",
  },
  {
    barangay_id: 3148,
    municipality_id: 121,
    barangay_name: "Nampalcan",
  },
  {
    barangay_id: 3149,
    municipality_id: 121,
    barangay_name: "Nancalabasaan",
  },
  {
    barangay_id: 3150,
    municipality_id: 121,
    barangay_name: "Pangangaan",
  },
  {
    barangay_id: 3151,
    municipality_id: 121,
    barangay_name: "Papallasen",
  },
  {
    barangay_id: 3152,
    municipality_id: 121,
    barangay_name: "Pemienta",
  },
  {
    barangay_id: 3153,
    municipality_id: 121,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 3154,
    municipality_id: 121,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 3155,
    municipality_id: 121,
    barangay_name: "Prado",
  },
  {
    barangay_id: 3156,
    municipality_id: 121,
    barangay_name: "Resurreccion",
  },
  {
    barangay_id: 3157,
    municipality_id: 121,
    barangay_name: "Ricos",
  },
  {
    barangay_id: 3158,
    municipality_id: 121,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 3159,
    municipality_id: 121,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 3160,
    municipality_id: 121,
    barangay_name: "San Leon",
  },
  {
    barangay_id: 3161,
    municipality_id: 121,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 3162,
    municipality_id: 121,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 3163,
    municipality_id: 121,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 3164,
    municipality_id: 121,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 3165,
    municipality_id: 121,
    barangay_name: "Sinabaan",
  },
  {
    barangay_id: 3166,
    municipality_id: 121,
    barangay_name: "Tanggal Sawang",
  },
  {
    barangay_id: 3170,
    municipality_id: 122,
    barangay_name: "Angatel",
  },
  {
    barangay_id: 3171,
    municipality_id: 122,
    barangay_name: "Balangay",
  },
  {
    barangay_id: 3172,
    municipality_id: 122,
    barangay_name: "Batangcaoa",
  },
  {
    barangay_id: 3173,
    municipality_id: 122,
    barangay_name: "Baug",
  },
  {
    barangay_id: 3174,
    municipality_id: 122,
    barangay_name: "Bayaoas",
  },
  {
    barangay_id: 3175,
    municipality_id: 122,
    barangay_name: "Bituag",
  },
  {
    barangay_id: 3176,
    municipality_id: 122,
    barangay_name: "Camambugan",
  },
  {
    barangay_id: 3177,
    municipality_id: 122,
    barangay_name: "Dalangiring",
  },
  {
    barangay_id: 3178,
    municipality_id: 122,
    barangay_name: "Duplac",
  },
  {
    barangay_id: 3179,
    municipality_id: 122,
    barangay_name: "Galarin",
  },
  {
    barangay_id: 3180,
    municipality_id: 122,
    barangay_name: "Gueteb",
  },
  {
    barangay_id: 3181,
    municipality_id: 122,
    barangay_name: "Malaca",
  },
  {
    barangay_id: 3182,
    municipality_id: 122,
    barangay_name: "Malayo",
  },
  {
    barangay_id: 3183,
    municipality_id: 122,
    barangay_name: "Malibong",
  },
  {
    barangay_id: 3184,
    municipality_id: 122,
    barangay_name: "Pasibi East",
  },
  {
    barangay_id: 3185,
    municipality_id: 122,
    barangay_name: "Pasibi West",
  },
  {
    barangay_id: 3186,
    municipality_id: 122,
    barangay_name: "Pisuac",
  },
  {
    barangay_id: 3187,
    municipality_id: 122,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 3188,
    municipality_id: 122,
    barangay_name: "Real",
  },
  {
    barangay_id: 3189,
    municipality_id: 122,
    barangay_name: "Salavante",
  },
  {
    barangay_id: 3190,
    municipality_id: 122,
    barangay_name: "Sawat",
  },
  {
    barangay_id: 3191,
    municipality_id: 123,
    barangay_name: "Anonas",
  },
  {
    barangay_id: 3192,
    municipality_id: 123,
    barangay_name: "Bactad East",
  },
  {
    barangay_id: 3194,
    municipality_id: 123,
    barangay_name: "Bayaoas",
  },
  {
    barangay_id: 3195,
    municipality_id: 123,
    barangay_name: "Bolaoen",
  },
  {
    barangay_id: 3196,
    municipality_id: 123,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 3197,
    municipality_id: 123,
    barangay_name: "Cabuloan",
  },
  {
    barangay_id: 3198,
    municipality_id: 123,
    barangay_name: "Camanang",
  },
  {
    barangay_id: 3199,
    municipality_id: 123,
    barangay_name: "Camantiles",
  },
  {
    barangay_id: 3200,
    municipality_id: 123,
    barangay_name: "Casantaan",
  },
  {
    barangay_id: 3201,
    municipality_id: 123,
    barangay_name: "Catablan",
  },
  {
    barangay_id: 3202,
    municipality_id: 123,
    barangay_name: "Cayambanan",
  },
  {
    barangay_id: 3203,
    municipality_id: 123,
    barangay_name: "Consolacion",
  },
  {
    barangay_id: 3204,
    municipality_id: 123,
    barangay_name: "Dilan Paurido",
  },
  {
    barangay_id: 3193,
    municipality_id: 123,
    barangay_name: "Dr. Pedro T. Orata",
  },
  {
    barangay_id: 3205,
    municipality_id: 123,
    barangay_name: "Labit Proper",
  },
  {
    barangay_id: 3206,
    municipality_id: 123,
    barangay_name: "Labit West",
  },
  {
    barangay_id: 3207,
    municipality_id: 123,
    barangay_name: "Mabanogbog",
  },
  {
    barangay_id: 3208,
    municipality_id: 123,
    barangay_name: "Macalong",
  },
  {
    barangay_id: 3209,
    municipality_id: 123,
    barangay_name: "Nancalobasaan",
  },
  {
    barangay_id: 3210,
    municipality_id: 123,
    barangay_name: "Nancamaliran East",
  },
  {
    barangay_id: 3211,
    municipality_id: 123,
    barangay_name: "Nancamaliran West",
  },
  {
    barangay_id: 3212,
    municipality_id: 123,
    barangay_name: "Nancayasan",
  },
  {
    barangay_id: 3213,
    municipality_id: 123,
    barangay_name: "Oltama",
  },
  {
    barangay_id: 3214,
    municipality_id: 123,
    barangay_name: "Palina East",
  },
  {
    barangay_id: 3215,
    municipality_id: 123,
    barangay_name: "Palina West",
  },
  {
    barangay_id: 3216,
    municipality_id: 123,
    barangay_name: "Pinmaludpod",
  },
  {
    barangay_id: 3217,
    municipality_id: 123,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 3218,
    municipality_id: 123,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 3219,
    municipality_id: 123,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 3220,
    municipality_id: 123,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 3221,
    municipality_id: 123,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 3222,
    municipality_id: 123,
    barangay_name: "Sugcong",
  },
  {
    barangay_id: 3223,
    municipality_id: 123,
    barangay_name: "Tipuso",
  },
  {
    barangay_id: 3224,
    municipality_id: 123,
    barangay_name: "Tulong",
  },
  {
    barangay_id: 3225,
    municipality_id: 124,
    barangay_name: "Amamperez",
  },
  {
    barangay_id: 3226,
    municipality_id: 124,
    barangay_name: "Bacag",
  },
  {
    barangay_id: 3227,
    municipality_id: 124,
    barangay_name: "Barangobong",
  },
  {
    barangay_id: 3228,
    municipality_id: 124,
    barangay_name: "Barraca",
  },
  {
    barangay_id: 3229,
    municipality_id: 124,
    barangay_name: "Capulaan",
  },
  {
    barangay_id: 3230,
    municipality_id: 124,
    barangay_name: "Caramutan",
  },
  {
    barangay_id: 3231,
    municipality_id: 124,
    barangay_name: "La Paz",
  },
  {
    barangay_id: 3232,
    municipality_id: 124,
    barangay_name: "Labit",
  },
  {
    barangay_id: 3233,
    municipality_id: 124,
    barangay_name: "Lipay",
  },
  {
    barangay_id: 3234,
    municipality_id: 124,
    barangay_name: "Lomboy",
  },
  {
    barangay_id: 3235,
    municipality_id: 124,
    barangay_name: "Piaz",
  },
  {
    barangay_id: 3241,
    municipality_id: 124,
    barangay_name: "Puelay",
  },
  {
    barangay_id: 3242,
    municipality_id: 124,
    barangay_name: "San Blas",
  },
  {
    barangay_id: 3243,
    municipality_id: 124,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 3244,
    municipality_id: 124,
    barangay_name: "Tombod",
  },
  {
    barangay_id: 3245,
    municipality_id: 124,
    barangay_name: "Unzad",
  },
  {
    barangay_id: 3237,
    municipality_id: 124,
    barangay_name: "Zone I (Pob.)",
  },
  {
    barangay_id: 3238,
    municipality_id: 124,
    barangay_name: "Zone II (Pob.)",
  },
  {
    barangay_id: 3239,
    municipality_id: 124,
    barangay_name: "Zone III (Pob.)",
  },
  {
    barangay_id: 3240,
    municipality_id: 124,
    barangay_name: "Zone IV (Pob.)",
  },
  {
    barangay_id: 3236,
    municipality_id: 124,
    barangay_name: "Zone V (Pob.)",
  },
  {
    barangay_id: 3246,
    municipality_id: 125,
    barangay_name: "Anis",
  },
  {
    barangay_id: 3266,
    municipality_id: 125,
    barangay_name: "Balligi",
  },
  {
    barangay_id: 3267,
    municipality_id: 125,
    barangay_name: "Banuar",
  },
  {
    barangay_id: 3247,
    municipality_id: 125,
    barangay_name: "Botique",
  },
  {
    barangay_id: 3248,
    municipality_id: 125,
    barangay_name: "Caaringayan",
  },
  {
    barangay_id: 3250,
    municipality_id: 125,
    barangay_name: "Cabilaoan West",
  },
  {
    barangay_id: 3251,
    municipality_id: 125,
    barangay_name: "Cabulalaan",
  },
  {
    barangay_id: 3252,
    municipality_id: 125,
    barangay_name: "Calaoagan",
  },
  {
    barangay_id: 3253,
    municipality_id: 125,
    barangay_name: "Calmay",
  },
  {
    barangay_id: 3254,
    municipality_id: 125,
    barangay_name: "Casampagaan",
  },
  {
    barangay_id: 3255,
    municipality_id: 125,
    barangay_name: "Casanestebanan",
  },
  {
    barangay_id: 3256,
    municipality_id: 125,
    barangay_name: "Casantiagoan",
  },
  {
    barangay_id: 3249,
    municipality_id: 125,
    barangay_name: "Domingo Alarcio",
  },
  {
    barangay_id: 3257,
    municipality_id: 125,
    barangay_name: "Inmanduyan",
  },
  {
    barangay_id: 3259,
    municipality_id: 125,
    barangay_name: "Lebueg",
  },
  {
    barangay_id: 3260,
    municipality_id: 125,
    barangay_name: "Maraboc",
  },
  {
    barangay_id: 3261,
    municipality_id: 125,
    barangay_name: "Nanbagatan",
  },
  {
    barangay_id: 3262,
    municipality_id: 125,
    barangay_name: "Panaga",
  },
  {
    barangay_id: 3258,
    municipality_id: 125,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 3263,
    municipality_id: 125,
    barangay_name: "Talogtog",
  },
  {
    barangay_id: 3264,
    municipality_id: 125,
    barangay_name: "Turko",
  },
  {
    barangay_id: 3265,
    municipality_id: 125,
    barangay_name: "Yatyat",
  },
  {
    barangay_id: 3272,
    municipality_id: 126,
    barangay_name: "Chanarian",
  },
  {
    barangay_id: 3269,
    municipality_id: 126,
    barangay_name: "Ihubok I",
  },
  {
    barangay_id: 3268,
    municipality_id: 126,
    barangay_name: "Ihubok II",
  },
  {
    barangay_id: 3273,
    municipality_id: 126,
    barangay_name: "Kayhuvokan",
  },
  {
    barangay_id: 3270,
    municipality_id: 126,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 3271,
    municipality_id: 126,
    barangay_name: "San Joaquin",
  },
  {
    barangay_id: 3274,
    municipality_id: 127,
    barangay_name: "Raele",
  },
  {
    barangay_id: 3275,
    municipality_id: 127,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 3276,
    municipality_id: 127,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 3277,
    municipality_id: 127,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 3278,
    municipality_id: 127,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 3279,
    municipality_id: 128,
    barangay_name: "Radiwan",
  },
  {
    barangay_id: 3280,
    municipality_id: 128,
    barangay_name: "Salagao",
  },
  {
    barangay_id: 3281,
    municipality_id: 128,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 3282,
    municipality_id: 128,
    barangay_name: "Tuhel (Pob.)",
  },
  {
    barangay_id: 3283,
    municipality_id: 129,
    barangay_name: "Hañib",
  },
  {
    barangay_id: 3284,
    municipality_id: 129,
    barangay_name: "Kaumbakan",
  },
  {
    barangay_id: 3285,
    municipality_id: 129,
    barangay_name: "Panatayan",
  },
  {
    barangay_id: 3286,
    municipality_id: 129,
    barangay_name: "Uvoy (Pob.)",
  },
  {
    barangay_id: 3287,
    municipality_id: 130,
    barangay_name: "Chavayan",
  },
  {
    barangay_id: 3288,
    municipality_id: 130,
    barangay_name: "Malakdang (Pob.)",
  },
  {
    barangay_id: 3289,
    municipality_id: 130,
    barangay_name: "Nakanmuan",
  },
  {
    barangay_id: 3290,
    municipality_id: 130,
    barangay_name: "Savidug",
  },
  {
    barangay_id: 3291,
    municipality_id: 130,
    barangay_name: "Sinakan (Pob.)",
  },
  {
    barangay_id: 3292,
    municipality_id: 130,
    barangay_name: "Sumnanga",
  },
  {
    barangay_id: 3294,
    municipality_id: 131,
    barangay_name: "Imnajbu",
  },
  {
    barangay_id: 3295,
    municipality_id: 131,
    barangay_name: "Itbud",
  },
  {
    barangay_id: 3296,
    municipality_id: 131,
    barangay_name: "Kayuganan (Pob.)",
  },
  {
    barangay_id: 3293,
    municipality_id: 131,
    barangay_name: "Kayvaluganan (Pob.)",
  },
  {
    barangay_id: 3297,
    municipality_id: 132,
    barangay_name: "Alinunu",
  },
  {
    barangay_id: 3298,
    municipality_id: 132,
    barangay_name: "Bagu",
  },
  {
    barangay_id: 3299,
    municipality_id: 132,
    barangay_name: "Banguian",
  },
  {
    barangay_id: 3300,
    municipality_id: 132,
    barangay_name: "Calog Norte",
  },
  {
    barangay_id: 3301,
    municipality_id: 132,
    barangay_name: "Calog Sur",
  },
  {
    barangay_id: 3302,
    municipality_id: 132,
    barangay_name: "Canayun",
  },
  {
    barangay_id: 3303,
    municipality_id: 132,
    barangay_name: "Centro (Pob.)",
  },
  {
    barangay_id: 3304,
    municipality_id: 132,
    barangay_name: "Dana-Ili",
  },
  {
    barangay_id: 3305,
    municipality_id: 132,
    barangay_name: "Guiddam",
  },
  {
    barangay_id: 3306,
    municipality_id: 132,
    barangay_name: "Libertad",
  },
  {
    barangay_id: 3307,
    municipality_id: 132,
    barangay_name: "Lucban",
  },
  {
    barangay_id: 3308,
    municipality_id: 132,
    barangay_name: "Pinili",
  },
  {
    barangay_id: 3314,
    municipality_id: 132,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 3315,
    municipality_id: 132,
    barangay_name: "San Julian",
  },
  {
    barangay_id: 3309,
    municipality_id: 132,
    barangay_name: "Santa Filomena",
  },
  {
    barangay_id: 3316,
    municipality_id: 132,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 3310,
    municipality_id: 132,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 3311,
    municipality_id: 132,
    barangay_name: "Siguiran",
  },
  {
    barangay_id: 3312,
    municipality_id: 132,
    barangay_name: "Simayung",
  },
  {
    barangay_id: 3313,
    municipality_id: 132,
    barangay_name: "Sirit",
  },
  {
    barangay_id: 3317,
    municipality_id: 133,
    barangay_name: "Abbeg",
  },
  {
    barangay_id: 3318,
    municipality_id: 133,
    barangay_name: "Afusing Bato",
  },
  {
    barangay_id: 3319,
    municipality_id: 133,
    barangay_name: "Afusing Daga",
  },
  {
    barangay_id: 3320,
    municipality_id: 133,
    barangay_name: "Agani",
  },
  {
    barangay_id: 3321,
    municipality_id: 133,
    barangay_name: "Baculod",
  },
  {
    barangay_id: 3322,
    municipality_id: 133,
    barangay_name: "Baybayog",
  },
  {
    barangay_id: 3323,
    municipality_id: 133,
    barangay_name: "Cabuluan",
  },
  {
    barangay_id: 3324,
    municipality_id: 133,
    barangay_name: "Calantac",
  },
  {
    barangay_id: 3325,
    municipality_id: 133,
    barangay_name: "Carallangan",
  },
  {
    barangay_id: 3326,
    municipality_id: 133,
    barangay_name: "Centro Norte (Pob.)",
  },
  {
    barangay_id: 3327,
    municipality_id: 133,
    barangay_name: "Centro Sur (Pob.)",
  },
  {
    barangay_id: 3328,
    municipality_id: 133,
    barangay_name: "Dalaoig",
  },
  {
    barangay_id: 3329,
    municipality_id: 133,
    barangay_name: "Damurog",
  },
  {
    barangay_id: 3330,
    municipality_id: 133,
    barangay_name: "Jurisdiction",
  },
  {
    barangay_id: 3331,
    municipality_id: 133,
    barangay_name: "Malalatan",
  },
  {
    barangay_id: 3332,
    municipality_id: 133,
    barangay_name: "Maraburab",
  },
  {
    barangay_id: 3333,
    municipality_id: 133,
    barangay_name: "Masin",
  },
  {
    barangay_id: 3334,
    municipality_id: 133,
    barangay_name: "Pagbangkeruan",
  },
  {
    barangay_id: 3335,
    municipality_id: 133,
    barangay_name: "Pared",
  },
  {
    barangay_id: 3336,
    municipality_id: 133,
    barangay_name: "Piggatan",
  },
  {
    barangay_id: 3337,
    municipality_id: 133,
    barangay_name: "Pinopoc",
  },
  {
    barangay_id: 3338,
    municipality_id: 133,
    barangay_name: "Pussian",
  },
  {
    barangay_id: 3339,
    municipality_id: 133,
    barangay_name: "San Esteban",
  },
  {
    barangay_id: 3340,
    municipality_id: 133,
    barangay_name: "Tamban",
  },
  {
    barangay_id: 3341,
    municipality_id: 133,
    barangay_name: "Tupang",
  },
  {
    barangay_id: 3342,
    municipality_id: 134,
    barangay_name: "Bessang",
  },
  {
    barangay_id: 3343,
    municipality_id: 134,
    barangay_name: "Binobongan",
  },
  {
    barangay_id: 3344,
    municipality_id: 134,
    barangay_name: "Bulo",
  },
  {
    barangay_id: 3345,
    municipality_id: 134,
    barangay_name: "Burot",
  },
  {
    barangay_id: 3346,
    municipality_id: 134,
    barangay_name: "Capagaran",
  },
  {
    barangay_id: 3347,
    municipality_id: 134,
    barangay_name: "Capalutan",
  },
  {
    barangay_id: 3348,
    municipality_id: 134,
    barangay_name: "Capanickian Norte",
  },
  {
    barangay_id: 3349,
    municipality_id: 134,
    barangay_name: "Capanickian Sur",
  },
  {
    barangay_id: 3350,
    municipality_id: 134,
    barangay_name: "Cataratan",
  },
  {
    barangay_id: 3351,
    municipality_id: 134,
    barangay_name: "Centro East (Pob.)",
  },
  {
    barangay_id: 3352,
    municipality_id: 134,
    barangay_name: "Centro West (Pob.)",
  },
  {
    barangay_id: 3353,
    municipality_id: 134,
    barangay_name: "Daan-Ili",
  },
  {
    barangay_id: 3354,
    municipality_id: 134,
    barangay_name: "Dagupan",
  },
  {
    barangay_id: 3355,
    municipality_id: 134,
    barangay_name: "Dalayap",
  },
  {
    barangay_id: 3356,
    municipality_id: 134,
    barangay_name: "Gagaddangan",
  },
  {
    barangay_id: 3357,
    municipality_id: 134,
    barangay_name: "Iringan",
  },
  {
    barangay_id: 3358,
    municipality_id: 134,
    barangay_name: "Labben",
  },
  {
    barangay_id: 3359,
    municipality_id: 134,
    barangay_name: "Maluyo",
  },
  {
    barangay_id: 3360,
    municipality_id: 134,
    barangay_name: "Mapurao",
  },
  {
    barangay_id: 3361,
    municipality_id: 134,
    barangay_name: "Matucay",
  },
  {
    barangay_id: 3362,
    municipality_id: 134,
    barangay_name: "Nagattatan",
  },
  {
    barangay_id: 3363,
    municipality_id: 134,
    barangay_name: "Pacac",
  },
  {
    barangay_id: 3364,
    municipality_id: 134,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 3365,
    municipality_id: 134,
    barangay_name: "Silangan",
  },
  {
    barangay_id: 3366,
    municipality_id: 134,
    barangay_name: "Tamboli",
  },
  {
    barangay_id: 3367,
    municipality_id: 134,
    barangay_name: "Tubel",
  },
  {
    barangay_id: 3368,
    municipality_id: 134,
    barangay_name: "Utan",
  },
  {
    barangay_id: 3369,
    municipality_id: 135,
    barangay_name: "Abolo",
  },
  {
    barangay_id: 3370,
    municipality_id: 135,
    barangay_name: "Agguirit",
  },
  {
    barangay_id: 3371,
    municipality_id: 135,
    barangay_name: "Alitungtung",
  },
  {
    barangay_id: 3372,
    municipality_id: 135,
    barangay_name: "Annabuculan",
  },
  {
    barangay_id: 3373,
    municipality_id: 135,
    barangay_name: "Annafatan",
  },
  {
    barangay_id: 3374,
    municipality_id: 135,
    barangay_name: "Anquiray",
  },
  {
    barangay_id: 3375,
    municipality_id: 135,
    barangay_name: "Babayuan",
  },
  {
    barangay_id: 3376,
    municipality_id: 135,
    barangay_name: "Baccuit",
  },
  {
    barangay_id: 3377,
    municipality_id: 135,
    barangay_name: "Bacring",
  },
  {
    barangay_id: 3378,
    municipality_id: 135,
    barangay_name: "Baculud",
  },
  {
    barangay_id: 3379,
    municipality_id: 135,
    barangay_name: "Balauini",
  },
  {
    barangay_id: 3380,
    municipality_id: 135,
    barangay_name: "Bauan",
  },
  {
    barangay_id: 3381,
    municipality_id: 135,
    barangay_name: "Bayabat",
  },
  {
    barangay_id: 3382,
    municipality_id: 135,
    barangay_name: "Calamagui",
  },
  {
    barangay_id: 3383,
    municipality_id: 135,
    barangay_name: "Calintaan",
  },
  {
    barangay_id: 3384,
    municipality_id: 135,
    barangay_name: "Caratacat",
  },
  {
    barangay_id: 3385,
    municipality_id: 135,
    barangay_name: "Casingsingan Norte",
  },
  {
    barangay_id: 3386,
    municipality_id: 135,
    barangay_name: "Casingsingan Sur",
  },
  {
    barangay_id: 3387,
    municipality_id: 135,
    barangay_name: "Catarauan",
  },
  {
    barangay_id: 3388,
    municipality_id: 135,
    barangay_name: "Centro",
  },
  {
    barangay_id: 3389,
    municipality_id: 135,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 3390,
    municipality_id: 135,
    barangay_name: "Cordova",
  },
  {
    barangay_id: 3391,
    municipality_id: 135,
    barangay_name: "Dadda",
  },
  {
    barangay_id: 3392,
    municipality_id: 135,
    barangay_name: "Dafunganay",
  },
  {
    barangay_id: 3393,
    municipality_id: 135,
    barangay_name: "Dugayung",
  },
  {
    barangay_id: 3394,
    municipality_id: 135,
    barangay_name: "Estefania",
  },
  {
    barangay_id: 3395,
    municipality_id: 135,
    barangay_name: "Gabut",
  },
  {
    barangay_id: 3396,
    municipality_id: 135,
    barangay_name: "Gangauan",
  },
  {
    barangay_id: 3397,
    municipality_id: 135,
    barangay_name: "Goran",
  },
  {
    barangay_id: 3398,
    municipality_id: 135,
    barangay_name: "Jurisdiccion",
  },
  {
    barangay_id: 3399,
    municipality_id: 135,
    barangay_name: "La Suerte",
  },
  {
    barangay_id: 3400,
    municipality_id: 135,
    barangay_name: "Logung",
  },
  {
    barangay_id: 3401,
    municipality_id: 135,
    barangay_name: "Magogod",
  },
  {
    barangay_id: 3402,
    municipality_id: 135,
    barangay_name: "Manalo",
  },
  {
    barangay_id: 3403,
    municipality_id: 135,
    barangay_name: "Marobbob",
  },
  {
    barangay_id: 3404,
    municipality_id: 135,
    barangay_name: "Masical",
  },
  {
    barangay_id: 3405,
    municipality_id: 135,
    barangay_name: "Monte Alegre",
  },
  {
    barangay_id: 3406,
    municipality_id: 135,
    barangay_name: "Nabbialan",
  },
  {
    barangay_id: 3407,
    municipality_id: 135,
    barangay_name: "Nagsabaran",
  },
  {
    barangay_id: 3408,
    municipality_id: 135,
    barangay_name: "Nangalasauan",
  },
  {
    barangay_id: 3409,
    municipality_id: 135,
    barangay_name: "Nanuccauan",
  },
  {
    barangay_id: 3410,
    municipality_id: 135,
    barangay_name: "Pacac-Grande",
  },
  {
    barangay_id: 3411,
    municipality_id: 135,
    barangay_name: "Pacac-Pequeño",
  },
  {
    barangay_id: 3412,
    municipality_id: 135,
    barangay_name: "Palacu",
  },
  {
    barangay_id: 3413,
    municipality_id: 135,
    barangay_name: "Palayag",
  },
  {
    barangay_id: 3414,
    municipality_id: 135,
    barangay_name: "Tana",
  },
  {
    barangay_id: 3415,
    municipality_id: 135,
    barangay_name: "Unag",
  },
  {
    barangay_id: 3416,
    municipality_id: 136,
    barangay_name: "Backiling",
  },
  {
    barangay_id: 3417,
    municipality_id: 136,
    barangay_name: "Bangag",
  },
  {
    barangay_id: 3418,
    municipality_id: 136,
    barangay_name: "Binalan",
  },
  {
    barangay_id: 3419,
    municipality_id: 136,
    barangay_name: "Bisagu",
  },
  {
    barangay_id: 3434,
    municipality_id: 136,
    barangay_name: "Bukig",
  },
  {
    barangay_id: 3435,
    municipality_id: 136,
    barangay_name: "Bulala Norte",
  },
  {
    barangay_id: 3436,
    municipality_id: 136,
    barangay_name: "Bulala Sur",
  },
  {
    barangay_id: 3437,
    municipality_id: 136,
    barangay_name: "Caagaman",
  },
  {
    barangay_id: 3420,
    municipality_id: 136,
    barangay_name: "Centro 1 (Pob.)",
  },
  {
    barangay_id: 3429,
    municipality_id: 136,
    barangay_name: "Centro 10 (Pob.)",
  },
  {
    barangay_id: 3430,
    municipality_id: 136,
    barangay_name: "Centro 11 (Pob.)",
  },
  {
    barangay_id: 3431,
    municipality_id: 136,
    barangay_name: "Centro 12 (Pob.)",
  },
  {
    barangay_id: 3432,
    municipality_id: 136,
    barangay_name: "Centro 13 (Pob.)",
  },
  {
    barangay_id: 3433,
    municipality_id: 136,
    barangay_name: "Centro 14 (Pob.)",
  },
  {
    barangay_id: 3438,
    municipality_id: 136,
    barangay_name: "Centro 15 (Pob.)",
  },
  {
    barangay_id: 3421,
    municipality_id: 136,
    barangay_name: "Centro 2 (Pob.)",
  },
  {
    barangay_id: 3422,
    municipality_id: 136,
    barangay_name: "Centro 3 (Pob.)",
  },
  {
    barangay_id: 3423,
    municipality_id: 136,
    barangay_name: "Centro 4 (Pob.)",
  },
  {
    barangay_id: 3424,
    municipality_id: 136,
    barangay_name: "Centro 5 (Pob.)",
  },
  {
    barangay_id: 3425,
    municipality_id: 136,
    barangay_name: "Centro 6 (Pob.)",
  },
  {
    barangay_id: 3426,
    municipality_id: 136,
    barangay_name: "Centro 7 (Pob.)",
  },
  {
    barangay_id: 3427,
    municipality_id: 136,
    barangay_name: "Centro 8 (Pob.)",
  },
  {
    barangay_id: 3428,
    municipality_id: 136,
    barangay_name: "Centro 9 (Pob.)",
  },
  {
    barangay_id: 3439,
    municipality_id: 136,
    barangay_name: "Dodan",
  },
  {
    barangay_id: 3440,
    municipality_id: 136,
    barangay_name: "Fuga Island",
  },
  {
    barangay_id: 3441,
    municipality_id: 136,
    barangay_name: "Gaddang",
  },
  {
    barangay_id: 3442,
    municipality_id: 136,
    barangay_name: "Linao",
  },
  {
    barangay_id: 3443,
    municipality_id: 136,
    barangay_name: "Mabanguc",
  },
  {
    barangay_id: 3444,
    municipality_id: 136,
    barangay_name: "Macanaya",
  },
  {
    barangay_id: 3445,
    municipality_id: 136,
    barangay_name: "Maura",
  },
  {
    barangay_id: 3446,
    municipality_id: 136,
    barangay_name: "Minanga",
  },
  {
    barangay_id: 3447,
    municipality_id: 136,
    barangay_name: "Navagan",
  },
  {
    barangay_id: 3448,
    municipality_id: 136,
    barangay_name: "Paddaya",
  },
  {
    barangay_id: 3449,
    municipality_id: 136,
    barangay_name: "Paruddun Norte",
  },
  {
    barangay_id: 3450,
    municipality_id: 136,
    barangay_name: "Paruddun Sur",
  },
  {
    barangay_id: 3451,
    municipality_id: 136,
    barangay_name: "Plaza",
  },
  {
    barangay_id: 3452,
    municipality_id: 136,
    barangay_name: "Punta",
  },
  {
    barangay_id: 3453,
    municipality_id: 136,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 3456,
    municipality_id: 136,
    barangay_name: "Sanja",
  },
  {
    barangay_id: 3454,
    municipality_id: 136,
    barangay_name: "Tallungan",
  },
  {
    barangay_id: 3455,
    municipality_id: 136,
    barangay_name: "Toran",
  },
  {
    barangay_id: 3457,
    municipality_id: 136,
    barangay_name: "Zinarag",
  },
  {
    barangay_id: 3458,
    municipality_id: 137,
    barangay_name: "Adaoag",
  },
  {
    barangay_id: 3459,
    municipality_id: 137,
    barangay_name: "Agaman",
  },
  {
    barangay_id: 3503,
    municipality_id: 137,
    barangay_name: "Agaman Norte",
  },
  {
    barangay_id: 3504,
    municipality_id: 137,
    barangay_name: "Agaman Sur",
  },
  {
    barangay_id: 3460,
    municipality_id: 137,
    barangay_name: "Alba",
  },
  {
    barangay_id: 3461,
    municipality_id: 137,
    barangay_name: "Annayatan",
  },
  {
    barangay_id: 3462,
    municipality_id: 137,
    barangay_name: "Asassi",
  },
  {
    barangay_id: 3463,
    municipality_id: 137,
    barangay_name: "Asinga-Via",
  },
  {
    barangay_id: 3464,
    municipality_id: 137,
    barangay_name: "Awallan",
  },
  {
    barangay_id: 3465,
    municipality_id: 137,
    barangay_name: "Bacagan",
  },
  {
    barangay_id: 3466,
    municipality_id: 137,
    barangay_name: "Bagunot",
  },
  {
    barangay_id: 3467,
    municipality_id: 137,
    barangay_name: "Barsat East",
  },
  {
    barangay_id: 3468,
    municipality_id: 137,
    barangay_name: "Barsat West",
  },
  {
    barangay_id: 3469,
    municipality_id: 137,
    barangay_name: "Bitag Grande",
  },
  {
    barangay_id: 3470,
    municipality_id: 137,
    barangay_name: "Bitag Pequeño",
  },
  {
    barangay_id: 3471,
    municipality_id: 137,
    barangay_name: "Bunugan",
  },
  {
    barangay_id: 3505,
    municipality_id: 137,
    barangay_name: "C. Verzosa",
  },
  {
    barangay_id: 3472,
    municipality_id: 137,
    barangay_name: "Canagatan",
  },
  {
    barangay_id: 3473,
    municipality_id: 137,
    barangay_name: "Carupian",
  },
  {
    barangay_id: 3474,
    municipality_id: 137,
    barangay_name: "Catugay",
  },
  {
    barangay_id: 3476,
    municipality_id: 137,
    barangay_name: "Dabbac Grande",
  },
  {
    barangay_id: 3477,
    municipality_id: 137,
    barangay_name: "Dalin",
  },
  {
    barangay_id: 3478,
    municipality_id: 137,
    barangay_name: "Dalla",
  },
  {
    barangay_id: 3479,
    municipality_id: 137,
    barangay_name: "Hacienda Intal",
  },
  {
    barangay_id: 3480,
    municipality_id: 137,
    barangay_name: "Ibulo",
  },
  {
    barangay_id: 3481,
    municipality_id: 137,
    barangay_name: "Imurong",
  },
  {
    barangay_id: 3482,
    municipality_id: 137,
    barangay_name: "J. Pallagao",
  },
  {
    barangay_id: 3483,
    municipality_id: 137,
    barangay_name: "Lasilat",
  },
  {
    barangay_id: 3502,
    municipality_id: 137,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 3484,
    municipality_id: 137,
    barangay_name: "Masical",
  },
  {
    barangay_id: 3485,
    municipality_id: 137,
    barangay_name: "Mocag",
  },
  {
    barangay_id: 3486,
    municipality_id: 137,
    barangay_name: "Nangalinan",
  },
  {
    barangay_id: 3475,
    municipality_id: 137,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 3487,
    municipality_id: 137,
    barangay_name: "Remus",
  },
  {
    barangay_id: 3488,
    municipality_id: 137,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 3489,
    municipality_id: 137,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 3490,
    municipality_id: 137,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 3491,
    municipality_id: 137,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 3492,
    municipality_id: 137,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 3493,
    municipality_id: 137,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 3494,
    municipality_id: 137,
    barangay_name: "Santa Margarita",
  },
  {
    barangay_id: 3495,
    municipality_id: 137,
    barangay_name: "Santor",
  },
  {
    barangay_id: 3496,
    municipality_id: 137,
    barangay_name: "Taguing",
  },
  {
    barangay_id: 3497,
    municipality_id: 137,
    barangay_name: "Taguntungan",
  },
  {
    barangay_id: 3498,
    municipality_id: 137,
    barangay_name: "Tallang",
  },
  {
    barangay_id: 3500,
    municipality_id: 137,
    barangay_name: "Taytay",
  },
  {
    barangay_id: 3499,
    municipality_id: 137,
    barangay_name: "Temblique",
  },
  {
    barangay_id: 3501,
    municipality_id: 137,
    barangay_name: "Tungel",
  },
  {
    barangay_id: 3506,
    municipality_id: 138,
    barangay_name: "Ammubuan",
  },
  {
    barangay_id: 3507,
    municipality_id: 138,
    barangay_name: "Baran",
  },
  {
    barangay_id: 3508,
    municipality_id: 138,
    barangay_name: "Cabaritan East",
  },
  {
    barangay_id: 3509,
    municipality_id: 138,
    barangay_name: "Cabaritan West",
  },
  {
    barangay_id: 3510,
    municipality_id: 138,
    barangay_name: "Cabayu",
  },
  {
    barangay_id: 3511,
    municipality_id: 138,
    barangay_name: "Cabuluan East",
  },
  {
    barangay_id: 3512,
    municipality_id: 138,
    barangay_name: "Cabuluan West",
  },
  {
    barangay_id: 3513,
    municipality_id: 138,
    barangay_name: "Centro East (Pob.)",
  },
  {
    barangay_id: 3514,
    municipality_id: 138,
    barangay_name: "Centro West (Pob.)",
  },
  {
    barangay_id: 3515,
    municipality_id: 138,
    barangay_name: "Fugu",
  },
  {
    barangay_id: 3516,
    municipality_id: 138,
    barangay_name: "Mabuttal East",
  },
  {
    barangay_id: 3517,
    municipality_id: 138,
    barangay_name: "Mabuttal West",
  },
  {
    barangay_id: 3518,
    municipality_id: 138,
    barangay_name: "Nararagan",
  },
  {
    barangay_id: 3519,
    municipality_id: 138,
    barangay_name: "Palloc",
  },
  {
    barangay_id: 3520,
    municipality_id: 138,
    barangay_name: "Payagan East",
  },
  {
    barangay_id: 3521,
    municipality_id: 138,
    barangay_name: "Payagan West",
  },
  {
    barangay_id: 3522,
    municipality_id: 138,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 3523,
    municipality_id: 138,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 3524,
    municipality_id: 138,
    barangay_name: "Zitanga",
  },
  {
    barangay_id: 3548,
    municipality_id: 139,
    barangay_name: "Alucao Weste",
  },
  {
    barangay_id: 3534,
    municipality_id: 139,
    barangay_name: "Antiporda",
  },
  {
    barangay_id: 3525,
    municipality_id: 139,
    barangay_name: "Ballang",
  },
  {
    barangay_id: 3526,
    municipality_id: 139,
    barangay_name: "Balza",
  },
  {
    barangay_id: 3527,
    municipality_id: 139,
    barangay_name: "Cabaritan",
  },
  {
    barangay_id: 3528,
    municipality_id: 139,
    barangay_name: "Calamegatan",
  },
  {
    barangay_id: 3529,
    municipality_id: 139,
    barangay_name: "Centro (Pob.)",
  },
  {
    barangay_id: 3530,
    municipality_id: 139,
    barangay_name: "Centro West",
  },
  {
    barangay_id: 3531,
    municipality_id: 139,
    barangay_name: "Dalaya",
  },
  {
    barangay_id: 3532,
    municipality_id: 139,
    barangay_name: "Fula",
  },
  {
    barangay_id: 3533,
    municipality_id: 139,
    barangay_name: "Leron",
  },
  {
    barangay_id: 3535,
    municipality_id: 139,
    barangay_name: "Maddalero",
  },
  {
    barangay_id: 3536,
    municipality_id: 139,
    barangay_name: "Mala Este",
  },
  {
    barangay_id: 3537,
    municipality_id: 139,
    barangay_name: "Mala Weste",
  },
  {
    barangay_id: 3538,
    municipality_id: 139,
    barangay_name: "Minanga Este",
  },
  {
    barangay_id: 3549,
    municipality_id: 139,
    barangay_name: "Minanga Weste",
  },
  {
    barangay_id: 3539,
    municipality_id: 139,
    barangay_name: "Paddaya Este",
  },
  {
    barangay_id: 3550,
    municipality_id: 139,
    barangay_name: "Paddaya Weste",
  },
  {
    barangay_id: 3540,
    municipality_id: 139,
    barangay_name: "Pattao",
  },
  {
    barangay_id: 3541,
    municipality_id: 139,
    barangay_name: "Quinawegan",
  },
  {
    barangay_id: 3542,
    municipality_id: 139,
    barangay_name: "Remebella",
  },
  {
    barangay_id: 3543,
    municipality_id: 139,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 3551,
    municipality_id: 139,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 3552,
    municipality_id: 139,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 3544,
    municipality_id: 139,
    barangay_name: "Santa Isabel",
  },
  {
    barangay_id: 3545,
    municipality_id: 139,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 3546,
    municipality_id: 139,
    barangay_name: "Tabbac",
  },
  {
    barangay_id: 3547,
    municipality_id: 139,
    barangay_name: "Villa Cielo",
  },
  {
    barangay_id: 3553,
    municipality_id: 139,
    barangay_name: "Villa Gracia",
  },
  {
    barangay_id: 3554,
    municipality_id: 139,
    barangay_name: "Villa Leonora",
  },
  {
    barangay_id: 3563,
    municipality_id: 140,
    barangay_name: "Babuyan Claro",
  },
  {
    barangay_id: 3556,
    municipality_id: 140,
    barangay_name: "Balatubat",
  },
  {
    barangay_id: 3555,
    municipality_id: 140,
    barangay_name: "Cabudadan",
  },
  {
    barangay_id: 3564,
    municipality_id: 140,
    barangay_name: "Centro II",
  },
  {
    barangay_id: 3557,
    municipality_id: 140,
    barangay_name: "Dadao",
  },
  {
    barangay_id: 3565,
    municipality_id: 140,
    barangay_name: "Dalupiri",
  },
  {
    barangay_id: 3558,
    municipality_id: 140,
    barangay_name: "Dibay",
  },
  {
    barangay_id: 3559,
    municipality_id: 140,
    barangay_name: "Dilam",
  },
  {
    barangay_id: 3560,
    municipality_id: 140,
    barangay_name: "Magsidel",
  },
  {
    barangay_id: 3566,
    municipality_id: 140,
    barangay_name: "Minabel",
  },
  {
    barangay_id: 3561,
    municipality_id: 140,
    barangay_name: "Naguilian",
  },
  {
    barangay_id: 3562,
    municipality_id: 140,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 3567,
    municipality_id: 141,
    barangay_name: "Abagao",
  },
  {
    barangay_id: 3568,
    municipality_id: 141,
    barangay_name: "Afunan Cabayu",
  },
  {
    barangay_id: 3569,
    municipality_id: 141,
    barangay_name: "Agusi",
  },
  {
    barangay_id: 3570,
    municipality_id: 141,
    barangay_name: "Alilinu",
  },
  {
    barangay_id: 3571,
    municipality_id: 141,
    barangay_name: "Baggao",
  },
  {
    barangay_id: 3572,
    municipality_id: 141,
    barangay_name: "Bantay",
  },
  {
    barangay_id: 3573,
    municipality_id: 141,
    barangay_name: "Bulala",
  },
  {
    barangay_id: 3574,
    municipality_id: 141,
    barangay_name: "Casili Norte",
  },
  {
    barangay_id: 3591,
    municipality_id: 141,
    barangay_name: "Casili Sur",
  },
  {
    barangay_id: 3575,
    municipality_id: 141,
    barangay_name: "Catotoran Norte",
  },
  {
    barangay_id: 3592,
    municipality_id: 141,
    barangay_name: "Catotoran Sur",
  },
  {
    barangay_id: 3576,
    municipality_id: 141,
    barangay_name: "Centro Norte (Pob.)",
  },
  {
    barangay_id: 3577,
    municipality_id: 141,
    barangay_name: "Centro Sur (Pob.)",
  },
  {
    barangay_id: 3578,
    municipality_id: 141,
    barangay_name: "Cullit",
  },
  {
    barangay_id: 3579,
    municipality_id: 141,
    barangay_name: "Dacal-Lafugu",
  },
  {
    barangay_id: 3580,
    municipality_id: 141,
    barangay_name: "Dammang Norte",
  },
  {
    barangay_id: 3593,
    municipality_id: 141,
    barangay_name: "Dammang Sur",
  },
  {
    barangay_id: 3581,
    municipality_id: 141,
    barangay_name: "Dugo",
  },
  {
    barangay_id: 3582,
    municipality_id: 141,
    barangay_name: "Fusina",
  },
  {
    barangay_id: 3583,
    municipality_id: 141,
    barangay_name: "Gang-ngo",
  },
  {
    barangay_id: 3584,
    municipality_id: 141,
    barangay_name: "Jurisdiction",
  },
  {
    barangay_id: 3585,
    municipality_id: 141,
    barangay_name: "Luec",
  },
  {
    barangay_id: 3586,
    municipality_id: 141,
    barangay_name: "Minanga",
  },
  {
    barangay_id: 3587,
    municipality_id: 141,
    barangay_name: "Paragat",
  },
  {
    barangay_id: 3594,
    municipality_id: 141,
    barangay_name: "Sapping",
  },
  {
    barangay_id: 3588,
    municipality_id: 141,
    barangay_name: "Tagum",
  },
  {
    barangay_id: 3589,
    municipality_id: 141,
    barangay_name: "Tuluttuging",
  },
  {
    barangay_id: 3590,
    municipality_id: 141,
    barangay_name: "Ziminila",
  },
  {
    barangay_id: 3595,
    municipality_id: 142,
    barangay_name: "Alimoan",
  },
  {
    barangay_id: 3596,
    municipality_id: 142,
    barangay_name: "Bacsay Cataraoan Norte",
  },
  {
    barangay_id: 3624,
    municipality_id: 142,
    barangay_name: "Bacsay Cataraoan Sur",
  },
  {
    barangay_id: 3597,
    municipality_id: 142,
    barangay_name: "Bacsay Mapulapula",
  },
  {
    barangay_id: 3598,
    municipality_id: 142,
    barangay_name: "Bilibigao",
  },
  {
    barangay_id: 3599,
    municipality_id: 142,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 3600,
    municipality_id: 142,
    barangay_name: "Cadcadir East",
  },
  {
    barangay_id: 3625,
    municipality_id: 142,
    barangay_name: "Cadcadir West",
  },
  {
    barangay_id: 3626,
    municipality_id: 142,
    barangay_name: "Camalaggoan/D Leaño",
  },
  {
    barangay_id: 3601,
    municipality_id: 142,
    barangay_name: "Capanikian",
  },
  {
    barangay_id: 3602,
    municipality_id: 142,
    barangay_name: "Centro I (Pob.)",
  },
  {
    barangay_id: 3603,
    municipality_id: 142,
    barangay_name: "Centro II (Pob.)",
  },
  {
    barangay_id: 3627,
    municipality_id: 142,
    barangay_name: "Centro III",
  },
  {
    barangay_id: 3615,
    municipality_id: 142,
    barangay_name: "Centro IV",
  },
  {
    barangay_id: 3628,
    municipality_id: 142,
    barangay_name: "Centro V",
  },
  {
    barangay_id: 3613,
    municipality_id: 142,
    barangay_name: "Centro VI",
  },
  {
    barangay_id: 3611,
    municipality_id: 142,
    barangay_name: "Centro VII",
  },
  {
    barangay_id: 3629,
    municipality_id: 142,
    barangay_name: "Centro VIII",
  },
  {
    barangay_id: 3604,
    municipality_id: 142,
    barangay_name: "Culao",
  },
  {
    barangay_id: 3605,
    municipality_id: 142,
    barangay_name: "Dibalio",
  },
  {
    barangay_id: 3606,
    municipality_id: 142,
    barangay_name: "Kilkiling",
  },
  {
    barangay_id: 3607,
    municipality_id: 142,
    barangay_name: "Lablabig",
  },
  {
    barangay_id: 3608,
    municipality_id: 142,
    barangay_name: "Luzon",
  },
  {
    barangay_id: 3609,
    municipality_id: 142,
    barangay_name: "Mabnang",
  },
  {
    barangay_id: 3610,
    municipality_id: 142,
    barangay_name: "Magdalena",
  },
  {
    barangay_id: 3612,
    municipality_id: 142,
    barangay_name: "Malilitao",
  },
  {
    barangay_id: 3614,
    municipality_id: 142,
    barangay_name: "Nagsabaran",
  },
  {
    barangay_id: 3616,
    municipality_id: 142,
    barangay_name: "Pata East",
  },
  {
    barangay_id: 3630,
    municipality_id: 142,
    barangay_name: "Pata West",
  },
  {
    barangay_id: 3617,
    municipality_id: 142,
    barangay_name: "Pinas",
  },
  {
    barangay_id: 3631,
    municipality_id: 142,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 3632,
    municipality_id: 142,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 3633,
    municipality_id: 142,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 3620,
    municipality_id: 142,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 3618,
    municipality_id: 142,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 3634,
    municipality_id: 142,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 3619,
    municipality_id: 142,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 3621,
    municipality_id: 142,
    barangay_name: "Tabbugan",
  },
  {
    barangay_id: 3622,
    municipality_id: 142,
    barangay_name: "Taggat Norte",
  },
  {
    barangay_id: 3635,
    municipality_id: 142,
    barangay_name: "Taggat Sur",
  },
  {
    barangay_id: 3623,
    municipality_id: 142,
    barangay_name: "Union",
  },
  {
    barangay_id: 3636,
    municipality_id: 143,
    barangay_name: "Alibago",
  },
  {
    barangay_id: 3637,
    municipality_id: 143,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 3638,
    municipality_id: 143,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 3639,
    municipality_id: 143,
    barangay_name: "Barangay III",
  },
  {
    barangay_id: 3651,
    municipality_id: 143,
    barangay_name: "Barangay III-A",
  },
  {
    barangay_id: 3649,
    municipality_id: 143,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 3652,
    municipality_id: 143,
    barangay_name: "Batu",
  },
  {
    barangay_id: 3640,
    municipality_id: 143,
    barangay_name: "Divisoria",
  },
  {
    barangay_id: 3641,
    municipality_id: 143,
    barangay_name: "Inga",
  },
  {
    barangay_id: 3642,
    municipality_id: 143,
    barangay_name: "Lanna",
  },
  {
    barangay_id: 3643,
    municipality_id: 143,
    barangay_name: "Lemu Norte",
  },
  {
    barangay_id: 3653,
    municipality_id: 143,
    barangay_name: "Lemu Sur",
  },
  {
    barangay_id: 3644,
    municipality_id: 143,
    barangay_name: "Liwan Norte",
  },
  {
    barangay_id: 3645,
    municipality_id: 143,
    barangay_name: "Liwan Sur",
  },
  {
    barangay_id: 3646,
    municipality_id: 143,
    barangay_name: "Maddarulug Norte",
  },
  {
    barangay_id: 3654,
    municipality_id: 143,
    barangay_name: "Maddarulug Sur",
  },
  {
    barangay_id: 3647,
    municipality_id: 143,
    barangay_name: "Magalalag East",
  },
  {
    barangay_id: 3655,
    municipality_id: 143,
    barangay_name: "Magalalag West",
  },
  {
    barangay_id: 3648,
    municipality_id: 143,
    barangay_name: "Maracuru",
  },
  {
    barangay_id: 3650,
    municipality_id: 143,
    barangay_name: "Roma Norte",
  },
  {
    barangay_id: 3656,
    municipality_id: 143,
    barangay_name: "Roma Sur",
  },
  {
    barangay_id: 3657,
    municipality_id: 143,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 3658,
    municipality_id: 144,
    barangay_name: "Abra",
  },
  {
    barangay_id: 3659,
    municipality_id: 144,
    barangay_name: "Aguiguican",
  },
  {
    barangay_id: 3660,
    municipality_id: 144,
    barangay_name: "Bangatan Ngagan",
  },
  {
    barangay_id: 3661,
    municipality_id: 144,
    barangay_name: "Baracaoit",
  },
  {
    barangay_id: 3662,
    municipality_id: 144,
    barangay_name: "Baraoidan",
  },
  {
    barangay_id: 3663,
    municipality_id: 144,
    barangay_name: "Barbarit",
  },
  {
    barangay_id: 3664,
    municipality_id: 144,
    barangay_name: "Basao",
  },
  {
    barangay_id: 3706,
    municipality_id: 144,
    barangay_name: "Bolos Point",
  },
  {
    barangay_id: 3665,
    municipality_id: 144,
    barangay_name: "Cabayu",
  },
  {
    barangay_id: 3666,
    municipality_id: 144,
    barangay_name: "Calaoagan Bassit",
  },
  {
    barangay_id: 3667,
    municipality_id: 144,
    barangay_name: "Calaoagan Dackel",
  },
  {
    barangay_id: 3668,
    municipality_id: 144,
    barangay_name: "Capiddigan",
  },
  {
    barangay_id: 3669,
    municipality_id: 144,
    barangay_name: "Capissayan Norte",
  },
  {
    barangay_id: 3670,
    municipality_id: 144,
    barangay_name: "Capissayan Sur",
  },
  {
    barangay_id: 3672,
    municipality_id: 144,
    barangay_name: "Casicallan Norte",
  },
  {
    barangay_id: 3671,
    municipality_id: 144,
    barangay_name: "Casicallan Sur",
  },
  {
    barangay_id: 3673,
    municipality_id: 144,
    barangay_name: "Centro Norte (Pob.)",
  },
  {
    barangay_id: 3674,
    municipality_id: 144,
    barangay_name: "Centro Sur (Pob.)",
  },
  {
    barangay_id: 3675,
    municipality_id: 144,
    barangay_name: "Cullit",
  },
  {
    barangay_id: 3676,
    municipality_id: 144,
    barangay_name: "Cumao",
  },
  {
    barangay_id: 3677,
    municipality_id: 144,
    barangay_name: "Cunig",
  },
  {
    barangay_id: 3678,
    municipality_id: 144,
    barangay_name: "Dummun",
  },
  {
    barangay_id: 3679,
    municipality_id: 144,
    barangay_name: "Fugu",
  },
  {
    barangay_id: 3680,
    municipality_id: 144,
    barangay_name: "Ganzano",
  },
  {
    barangay_id: 3681,
    municipality_id: 144,
    barangay_name: "Guising",
  },
  {
    barangay_id: 3684,
    municipality_id: 144,
    barangay_name: "L. Adviento",
  },
  {
    barangay_id: 3682,
    municipality_id: 144,
    barangay_name: "Langgan",
  },
  {
    barangay_id: 3683,
    municipality_id: 144,
    barangay_name: "Lapogan",
  },
  {
    barangay_id: 3685,
    municipality_id: 144,
    barangay_name: "Mabuno",
  },
  {
    barangay_id: 3686,
    municipality_id: 144,
    barangay_name: "Nabaccayan",
  },
  {
    barangay_id: 3687,
    municipality_id: 144,
    barangay_name: "Naddungan",
  },
  {
    barangay_id: 3688,
    municipality_id: 144,
    barangay_name: "Nagatutuan",
  },
  {
    barangay_id: 3689,
    municipality_id: 144,
    barangay_name: "Nassiping",
  },
  {
    barangay_id: 3690,
    municipality_id: 144,
    barangay_name: "Newagac",
  },
  {
    barangay_id: 3691,
    municipality_id: 144,
    barangay_name: "Palagao Norte",
  },
  {
    barangay_id: 3692,
    municipality_id: 144,
    barangay_name: "Palagao Sur",
  },
  {
    barangay_id: 3693,
    municipality_id: 144,
    barangay_name: "Piña Este",
  },
  {
    barangay_id: 3694,
    municipality_id: 144,
    barangay_name: "Piña Weste",
  },
  {
    barangay_id: 3707,
    municipality_id: 144,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 3695,
    municipality_id: 144,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 3698,
    municipality_id: 144,
    barangay_name: "Santa Ana",
  },
  {
    barangay_id: 3696,
    municipality_id: 144,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 3697,
    municipality_id: 144,
    barangay_name: "Sidem",
  },
  {
    barangay_id: 3703,
    municipality_id: 144,
    barangay_name: "T. Elizaga",
  },
  {
    barangay_id: 3699,
    municipality_id: 144,
    barangay_name: "Tagumay",
  },
  {
    barangay_id: 3700,
    municipality_id: 144,
    barangay_name: "Takiki",
  },
  {
    barangay_id: 3701,
    municipality_id: 144,
    barangay_name: "Taligan",
  },
  {
    barangay_id: 3702,
    municipality_id: 144,
    barangay_name: "Tanglagan",
  },
  {
    barangay_id: 3704,
    municipality_id: 144,
    barangay_name: "Tubungan Este",
  },
  {
    barangay_id: 3705,
    municipality_id: 144,
    barangay_name: "Tubungan Weste",
  },
  {
    barangay_id: 3708,
    municipality_id: 145,
    barangay_name: "Amunitan",
  },
  {
    barangay_id: 3709,
    municipality_id: 145,
    barangay_name: "Batangan",
  },
  {
    barangay_id: 3710,
    municipality_id: 145,
    barangay_name: "Baua",
  },
  {
    barangay_id: 3711,
    municipality_id: 145,
    barangay_name: "Cabanbanan Norte",
  },
  {
    barangay_id: 3712,
    municipality_id: 145,
    barangay_name: "Cabanbanan Sur",
  },
  {
    barangay_id: 3713,
    municipality_id: 145,
    barangay_name: "Cabiraoan",
  },
  {
    barangay_id: 3715,
    municipality_id: 145,
    barangay_name: "Calayan",
  },
  {
    barangay_id: 3714,
    municipality_id: 145,
    barangay_name: "Callao",
  },
  {
    barangay_id: 3716,
    municipality_id: 145,
    barangay_name: "Caroan",
  },
  {
    barangay_id: 3717,
    municipality_id: 145,
    barangay_name: "Casitan",
  },
  {
    barangay_id: 3718,
    municipality_id: 145,
    barangay_name: "Flourishing (Pob.)",
  },
  {
    barangay_id: 3719,
    municipality_id: 145,
    barangay_name: "Ipil",
  },
  {
    barangay_id: 3720,
    municipality_id: 145,
    barangay_name: "Isca",
  },
  {
    barangay_id: 3721,
    municipality_id: 145,
    barangay_name: "Magrafil",
  },
  {
    barangay_id: 3722,
    municipality_id: 145,
    barangay_name: "Minanga",
  },
  {
    barangay_id: 3724,
    municipality_id: 145,
    barangay_name: "Paradise (Pob.)",
  },
  {
    barangay_id: 3725,
    municipality_id: 145,
    barangay_name: "Pateng",
  },
  {
    barangay_id: 3726,
    municipality_id: 145,
    barangay_name: "Progressive (Pob.)",
  },
  {
    barangay_id: 3723,
    municipality_id: 145,
    barangay_name: "Rebecca",
  },
  {
    barangay_id: 3727,
    municipality_id: 145,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 3728,
    municipality_id: 145,
    barangay_name: "Santa Clara",
  },
  {
    barangay_id: 3729,
    municipality_id: 145,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 3730,
    municipality_id: 145,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 3731,
    municipality_id: 145,
    barangay_name: "Smart (Pob.)",
  },
  {
    barangay_id: 3732,
    municipality_id: 145,
    barangay_name: "Tapel",
  },
  {
    barangay_id: 3733,
    municipality_id: 146,
    barangay_name: "Ajat (Pob.)",
  },
  {
    barangay_id: 3734,
    municipality_id: 146,
    barangay_name: "Atulu",
  },
  {
    barangay_id: 3735,
    municipality_id: 146,
    barangay_name: "Baculud",
  },
  {
    barangay_id: 3736,
    municipality_id: 146,
    barangay_name: "Bayo",
  },
  {
    barangay_id: 3737,
    municipality_id: 146,
    barangay_name: "Campo",
  },
  {
    barangay_id: 3739,
    municipality_id: 146,
    barangay_name: "Dumpao",
  },
  {
    barangay_id: 3740,
    municipality_id: 146,
    barangay_name: "Gammad",
  },
  {
    barangay_id: 3742,
    municipality_id: 146,
    barangay_name: "Garab",
  },
  {
    barangay_id: 3743,
    municipality_id: 146,
    barangay_name: "Malabbac",
  },
  {
    barangay_id: 3744,
    municipality_id: 146,
    barangay_name: "Manaoag",
  },
  {
    barangay_id: 3745,
    municipality_id: 146,
    barangay_name: "Minanga Norte",
  },
  {
    barangay_id: 3746,
    municipality_id: 146,
    barangay_name: "Minanga Sur",
  },
  {
    barangay_id: 3747,
    municipality_id: 146,
    barangay_name: "Nattanzan (Pob.)",
  },
  {
    barangay_id: 3748,
    municipality_id: 146,
    barangay_name: "Redondo",
  },
  {
    barangay_id: 3749,
    municipality_id: 146,
    barangay_name: "Salamague",
  },
  {
    barangay_id: 3738,
    municipality_id: 146,
    barangay_name: "San Esteban",
  },
  {
    barangay_id: 3750,
    municipality_id: 146,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 3751,
    municipality_id: 146,
    barangay_name: "San Lorenzo",
  },
  {
    barangay_id: 3755,
    municipality_id: 146,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 3752,
    municipality_id: 146,
    barangay_name: "Santa Barbara",
  },
  {
    barangay_id: 3753,
    municipality_id: 146,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 3741,
    municipality_id: 146,
    barangay_name: "Santa Teresa",
  },
  {
    barangay_id: 3754,
    municipality_id: 146,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 3756,
    municipality_id: 147,
    barangay_name: "Abagao",
  },
  {
    barangay_id: 3757,
    municipality_id: 147,
    barangay_name: "Alaguia",
  },
  {
    barangay_id: 3758,
    municipality_id: 147,
    barangay_name: "Bagumbayan",
  },
  {
    barangay_id: 3759,
    municipality_id: 147,
    barangay_name: "Bangag",
  },
  {
    barangay_id: 3760,
    municipality_id: 147,
    barangay_name: "Bical",
  },
  {
    barangay_id: 3761,
    municipality_id: 147,
    barangay_name: "Bicud",
  },
  {
    barangay_id: 3762,
    municipality_id: 147,
    barangay_name: "Binag",
  },
  {
    barangay_id: 3763,
    municipality_id: 147,
    barangay_name: "Cabayabasan",
  },
  {
    barangay_id: 3764,
    municipality_id: 147,
    barangay_name: "Cagoran",
  },
  {
    barangay_id: 3765,
    municipality_id: 147,
    barangay_name: "Cambong",
  },
  {
    barangay_id: 3766,
    municipality_id: 147,
    barangay_name: "Catayauan",
  },
  {
    barangay_id: 3767,
    municipality_id: 147,
    barangay_name: "Catugan",
  },
  {
    barangay_id: 3768,
    municipality_id: 147,
    barangay_name: "Centro (Pob.)",
  },
  {
    barangay_id: 3769,
    municipality_id: 147,
    barangay_name: "Cullit",
  },
  {
    barangay_id: 3770,
    municipality_id: 147,
    barangay_name: "Dagupan",
  },
  {
    barangay_id: 3771,
    municipality_id: 147,
    barangay_name: "Dalaya",
  },
  {
    barangay_id: 3772,
    municipality_id: 147,
    barangay_name: "Fabrica",
  },
  {
    barangay_id: 3773,
    municipality_id: 147,
    barangay_name: "Fusina",
  },
  {
    barangay_id: 3774,
    municipality_id: 147,
    barangay_name: "Jurisdiction",
  },
  {
    barangay_id: 3775,
    municipality_id: 147,
    barangay_name: "Lalafugan",
  },
  {
    barangay_id: 3776,
    municipality_id: 147,
    barangay_name: "Logac",
  },
  {
    barangay_id: 3777,
    municipality_id: 147,
    barangay_name: "Magallungon",
  },
  {
    barangay_id: 3778,
    municipality_id: 147,
    barangay_name: "Magapit",
  },
  {
    barangay_id: 3779,
    municipality_id: 147,
    barangay_name: "Malanao",
  },
  {
    barangay_id: 3780,
    municipality_id: 147,
    barangay_name: "Maxingal",
  },
  {
    barangay_id: 3781,
    municipality_id: 147,
    barangay_name: "Naguilian",
  },
  {
    barangay_id: 3782,
    municipality_id: 147,
    barangay_name: "Paranum",
  },
  {
    barangay_id: 3783,
    municipality_id: 147,
    barangay_name: "Rosario",
  },
  {
    barangay_id: 3784,
    municipality_id: 147,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 3785,
    municipality_id: 147,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 3786,
    municipality_id: 147,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 3787,
    municipality_id: 147,
    barangay_name: "San Lorenzo",
  },
  {
    barangay_id: 3788,
    municipality_id: 147,
    barangay_name: "San Mariano",
  },
  {
    barangay_id: 3789,
    municipality_id: 147,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 3790,
    municipality_id: 147,
    barangay_name: "Tucalana",
  },
  {
    barangay_id: 3791,
    municipality_id: 148,
    barangay_name: "Aggunetan",
  },
  {
    barangay_id: 3792,
    municipality_id: 148,
    barangay_name: "Alannay",
  },
  {
    barangay_id: 3793,
    municipality_id: 148,
    barangay_name: "Battalan",
  },
  {
    barangay_id: 3814,
    municipality_id: 148,
    barangay_name: "Cabatacan East",
  },
  {
    barangay_id: 3815,
    municipality_id: 148,
    barangay_name: "Cabatacan West",
  },
  {
    barangay_id: 3794,
    municipality_id: 148,
    barangay_name: "Calapangan Norte",
  },
  {
    barangay_id: 3795,
    municipality_id: 148,
    barangay_name: "Calapangan Sur",
  },
  {
    barangay_id: 3796,
    municipality_id: 148,
    barangay_name: "Callao Norte",
  },
  {
    barangay_id: 3797,
    municipality_id: 148,
    barangay_name: "Callao Sur",
  },
  {
    barangay_id: 3798,
    municipality_id: 148,
    barangay_name: "Cataliganan",
  },
  {
    barangay_id: 3808,
    municipality_id: 148,
    barangay_name: "Centro I (Pob.)",
  },
  {
    barangay_id: 3818,
    municipality_id: 148,
    barangay_name: "Centro II (Pob.)",
  },
  {
    barangay_id: 3819,
    municipality_id: 148,
    barangay_name: "Centro III (Pob.)",
  },
  {
    barangay_id: 3799,
    municipality_id: 148,
    barangay_name: "Finugo Norte",
  },
  {
    barangay_id: 3800,
    municipality_id: 148,
    barangay_name: "Gabun",
  },
  {
    barangay_id: 3801,
    municipality_id: 148,
    barangay_name: "Ignacio Jurado",
  },
  {
    barangay_id: 3802,
    municipality_id: 148,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 3803,
    municipality_id: 148,
    barangay_name: "Malinta",
  },
  {
    barangay_id: 3805,
    municipality_id: 148,
    barangay_name: "Minanga Norte",
  },
  {
    barangay_id: 3804,
    municipality_id: 148,
    barangay_name: "Minanga Sur",
  },
  {
    barangay_id: 3816,
    municipality_id: 148,
    barangay_name: "Nabannagan East",
  },
  {
    barangay_id: 3817,
    municipality_id: 148,
    barangay_name: "Nabannagan West",
  },
  {
    barangay_id: 3820,
    municipality_id: 148,
    barangay_name: "New Orlins",
  },
  {
    barangay_id: 3806,
    municipality_id: 148,
    barangay_name: "Nicolas Agatep",
  },
  {
    barangay_id: 3807,
    municipality_id: 148,
    barangay_name: "Peru",
  },
  {
    barangay_id: 3809,
    municipality_id: 148,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 3810,
    municipality_id: 148,
    barangay_name: "Sicalao",
  },
  {
    barangay_id: 3811,
    municipality_id: 148,
    barangay_name: "Tagao",
  },
  {
    barangay_id: 3812,
    municipality_id: 148,
    barangay_name: "Tucalan Passing",
  },
  {
    barangay_id: 3813,
    municipality_id: 148,
    barangay_name: "Viga",
  },
  {
    barangay_id: 3821,
    municipality_id: 149,
    barangay_name: "Abanqueruan",
  },
  {
    barangay_id: 3822,
    municipality_id: 149,
    barangay_name: "Allasitan",
  },
  {
    barangay_id: 3823,
    municipality_id: 149,
    barangay_name: "Bagu",
  },
  {
    barangay_id: 3824,
    municipality_id: 149,
    barangay_name: "Balingit",
  },
  {
    barangay_id: 3825,
    municipality_id: 149,
    barangay_name: "Bidduang",
  },
  {
    barangay_id: 3826,
    municipality_id: 149,
    barangay_name: "Cabaggan",
  },
  {
    barangay_id: 3827,
    municipality_id: 149,
    barangay_name: "Capalalian",
  },
  {
    barangay_id: 3828,
    municipality_id: 149,
    barangay_name: "Casitan",
  },
  {
    barangay_id: 3829,
    municipality_id: 149,
    barangay_name: "Centro (Pob.)",
  },
  {
    barangay_id: 3830,
    municipality_id: 149,
    barangay_name: "Curva",
  },
  {
    barangay_id: 3831,
    municipality_id: 149,
    barangay_name: "Gattu",
  },
  {
    barangay_id: 3832,
    municipality_id: 149,
    barangay_name: "Masi",
  },
  {
    barangay_id: 3833,
    municipality_id: 149,
    barangay_name: "Nagattatan",
  },
  {
    barangay_id: 3834,
    municipality_id: 149,
    barangay_name: "Nagtupacan",
  },
  {
    barangay_id: 3835,
    municipality_id: 149,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 3836,
    municipality_id: 149,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 3837,
    municipality_id: 149,
    barangay_name: "Tabba",
  },
  {
    barangay_id: 3838,
    municipality_id: 149,
    barangay_name: "Tupanna",
  },
  {
    barangay_id: 3839,
    municipality_id: 150,
    barangay_name: "Aggugaddan",
  },
  {
    barangay_id: 3840,
    municipality_id: 150,
    barangay_name: "Alimanao",
  },
  {
    barangay_id: 3841,
    municipality_id: 150,
    barangay_name: "Baliuag",
  },
  {
    barangay_id: 3842,
    municipality_id: 150,
    barangay_name: "Bical",
  },
  {
    barangay_id: 3843,
    municipality_id: 150,
    barangay_name: "Bugatay",
  },
  {
    barangay_id: 3844,
    municipality_id: 150,
    barangay_name: "Buyun",
  },
  {
    barangay_id: 3845,
    municipality_id: 150,
    barangay_name: "Cabasan",
  },
  {
    barangay_id: 3846,
    municipality_id: 150,
    barangay_name: "Cabbo",
  },
  {
    barangay_id: 3847,
    municipality_id: 150,
    barangay_name: "Callao",
  },
  {
    barangay_id: 3848,
    municipality_id: 150,
    barangay_name: "Camasi",
  },
  {
    barangay_id: 3849,
    municipality_id: 150,
    barangay_name: "Centro (Pob.)",
  },
  {
    barangay_id: 3850,
    municipality_id: 150,
    barangay_name: "Dodan",
  },
  {
    barangay_id: 3851,
    municipality_id: 150,
    barangay_name: "Lapi",
  },
  {
    barangay_id: 3852,
    municipality_id: 150,
    barangay_name: "Malibabag",
  },
  {
    barangay_id: 3853,
    municipality_id: 150,
    barangay_name: "Manga",
  },
  {
    barangay_id: 3854,
    municipality_id: 150,
    barangay_name: "Minanga",
  },
  {
    barangay_id: 3855,
    municipality_id: 150,
    barangay_name: "Nabbabalayan",
  },
  {
    barangay_id: 3856,
    municipality_id: 150,
    barangay_name: "Nanguilattan",
  },
  {
    barangay_id: 3857,
    municipality_id: 150,
    barangay_name: "Nannarian",
  },
  {
    barangay_id: 3858,
    municipality_id: 150,
    barangay_name: "Parabba",
  },
  {
    barangay_id: 3859,
    municipality_id: 150,
    barangay_name: "Patagueleg",
  },
  {
    barangay_id: 3860,
    municipality_id: 150,
    barangay_name: "Quibal",
  },
  {
    barangay_id: 3861,
    municipality_id: 150,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 3862,
    municipality_id: 150,
    barangay_name: "Sisim",
  },
  {
    barangay_id: 3863,
    municipality_id: 151,
    barangay_name: "Apayao",
  },
  {
    barangay_id: 3864,
    municipality_id: 151,
    barangay_name: "Aquib",
  },
  {
    barangay_id: 3876,
    municipality_id: 151,
    barangay_name: "Baung",
  },
  {
    barangay_id: 3877,
    municipality_id: 151,
    barangay_name: "Calaoagan",
  },
  {
    barangay_id: 3878,
    municipality_id: 151,
    barangay_name: "Catarauan",
  },
  {
    barangay_id: 3865,
    municipality_id: 151,
    barangay_name: "Dugayung",
  },
  {
    barangay_id: 3866,
    municipality_id: 151,
    barangay_name: "Gumarueng",
  },
  {
    barangay_id: 3867,
    municipality_id: 151,
    barangay_name: "Macapil",
  },
  {
    barangay_id: 3868,
    municipality_id: 151,
    barangay_name: "Maguilling",
  },
  {
    barangay_id: 3869,
    municipality_id: 151,
    barangay_name: "Minanga",
  },
  {
    barangay_id: 3870,
    municipality_id: 151,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 3879,
    municipality_id: 151,
    barangay_name: "Poblacion II",
  },
  {
    barangay_id: 3871,
    municipality_id: 151,
    barangay_name: "Santa Barbara",
  },
  {
    barangay_id: 3872,
    municipality_id: 151,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 3873,
    municipality_id: 151,
    barangay_name: "Sicatna",
  },
  {
    barangay_id: 3874,
    municipality_id: 151,
    barangay_name: "Villa Rey",
  },
  {
    barangay_id: 3880,
    municipality_id: 151,
    barangay_name: "Villa Reyno",
  },
  {
    barangay_id: 3875,
    municipality_id: 151,
    barangay_name: "Warat",
  },
  {
    barangay_id: 3881,
    municipality_id: 152,
    barangay_name: "Anagguan",
  },
  {
    barangay_id: 3883,
    municipality_id: 152,
    barangay_name: "Anungu",
  },
  {
    barangay_id: 3882,
    municipality_id: 152,
    barangay_name: "Anurturu",
  },
  {
    barangay_id: 3884,
    municipality_id: 152,
    barangay_name: "Balungcanag",
  },
  {
    barangay_id: 3906,
    municipality_id: 152,
    barangay_name: "Battut",
  },
  {
    barangay_id: 3885,
    municipality_id: 152,
    barangay_name: "Batu",
  },
  {
    barangay_id: 3907,
    municipality_id: 152,
    barangay_name: "Bural",
  },
  {
    barangay_id: 3886,
    municipality_id: 152,
    barangay_name: "Cambabangan",
  },
  {
    barangay_id: 3887,
    municipality_id: 152,
    barangay_name: "Capacuan",
  },
  {
    barangay_id: 3888,
    municipality_id: 152,
    barangay_name: "Dunggan",
  },
  {
    barangay_id: 3889,
    municipality_id: 152,
    barangay_name: "Duyun",
  },
  {
    barangay_id: 3890,
    municipality_id: 152,
    barangay_name: "Gaddangao",
  },
  {
    barangay_id: 3891,
    municipality_id: 152,
    barangay_name: "Gaggabutan East",
  },
  {
    barangay_id: 3908,
    municipality_id: 152,
    barangay_name: "Gaggabutan West",
  },
  {
    barangay_id: 3892,
    municipality_id: 152,
    barangay_name: "Illuru Norte",
  },
  {
    barangay_id: 3909,
    municipality_id: 152,
    barangay_name: "Illuru Sur",
  },
  {
    barangay_id: 3893,
    municipality_id: 152,
    barangay_name: "Lattut",
  },
  {
    barangay_id: 3894,
    municipality_id: 152,
    barangay_name: "Linno",
  },
  {
    barangay_id: 3895,
    municipality_id: 152,
    barangay_name: "Liwan",
  },
  {
    barangay_id: 3896,
    municipality_id: 152,
    barangay_name: "Mabbang",
  },
  {
    barangay_id: 3898,
    municipality_id: 152,
    barangay_name: "Masi",
  },
  {
    barangay_id: 3897,
    municipality_id: 152,
    barangay_name: "Mauanan",
  },
  {
    barangay_id: 3899,
    municipality_id: 152,
    barangay_name: "Minanga",
  },
  {
    barangay_id: 3900,
    municipality_id: 152,
    barangay_name: "Nanauatan",
  },
  {
    barangay_id: 3901,
    municipality_id: 152,
    barangay_name: "Nanungaran",
  },
  {
    barangay_id: 3902,
    municipality_id: 152,
    barangay_name: "Pasingan",
  },
  {
    barangay_id: 3903,
    municipality_id: 152,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 3904,
    municipality_id: 152,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 3905,
    municipality_id: 152,
    barangay_name: "Sinicking",
  },
  {
    barangay_id: 3910,
    municipality_id: 153,
    barangay_name: "Bangan",
  },
  {
    barangay_id: 3911,
    municipality_id: 153,
    barangay_name: "Callungan",
  },
  {
    barangay_id: 3912,
    municipality_id: 153,
    barangay_name: "Centro I (Pob.)",
  },
  {
    barangay_id: 3913,
    municipality_id: 153,
    barangay_name: "Centro II (Pob.)",
  },
  {
    barangay_id: 3914,
    municipality_id: 153,
    barangay_name: "Dacal",
  },
  {
    barangay_id: 3915,
    municipality_id: 153,
    barangay_name: "Dagueray",
  },
  {
    barangay_id: 3916,
    municipality_id: 153,
    barangay_name: "Dammang",
  },
  {
    barangay_id: 3917,
    municipality_id: 153,
    barangay_name: "Kittag",
  },
  {
    barangay_id: 3918,
    municipality_id: 153,
    barangay_name: "Langagan",
  },
  {
    barangay_id: 3919,
    municipality_id: 153,
    barangay_name: "Magacan",
  },
  {
    barangay_id: 3920,
    municipality_id: 153,
    barangay_name: "Marzan",
  },
  {
    barangay_id: 3921,
    municipality_id: 153,
    barangay_name: "Masisit",
  },
  {
    barangay_id: 3922,
    municipality_id: 153,
    barangay_name: "Nagrangtayan",
  },
  {
    barangay_id: 3923,
    municipality_id: 153,
    barangay_name: "Namuac",
  },
  {
    barangay_id: 3924,
    municipality_id: 153,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 3925,
    municipality_id: 153,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 3926,
    municipality_id: 153,
    barangay_name: "Santor",
  },
  {
    barangay_id: 3927,
    municipality_id: 153,
    barangay_name: "Tokitok",
  },
  {
    barangay_id: 3936,
    municipality_id: 154,
    barangay_name: "Batu-Parada",
  },
  {
    barangay_id: 3928,
    municipality_id: 154,
    barangay_name: "Casagan",
  },
  {
    barangay_id: 3929,
    municipality_id: 154,
    barangay_name: "Casambalangan",
  },
  {
    barangay_id: 3930,
    municipality_id: 154,
    barangay_name: "Centro (Pob.)",
  },
  {
    barangay_id: 3931,
    municipality_id: 154,
    barangay_name: "Diora-Zinungan",
  },
  {
    barangay_id: 3932,
    municipality_id: 154,
    barangay_name: "Dungeg",
  },
  {
    barangay_id: 3933,
    municipality_id: 154,
    barangay_name: "Kapanikian",
  },
  {
    barangay_id: 3934,
    municipality_id: 154,
    barangay_name: "Marede",
  },
  {
    barangay_id: 3935,
    municipality_id: 154,
    barangay_name: "Palawig",
  },
  {
    barangay_id: 3937,
    municipality_id: 154,
    barangay_name: "Patunungan",
  },
  {
    barangay_id: 3938,
    municipality_id: 154,
    barangay_name: "Rapuli",
  },
  {
    barangay_id: 3939,
    municipality_id: 154,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 3940,
    municipality_id: 154,
    barangay_name: "Santa Clara",
  },
  {
    barangay_id: 3941,
    municipality_id: 154,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 3943,
    municipality_id: 154,
    barangay_name: "Tangatan",
  },
  {
    barangay_id: 3942,
    municipality_id: 154,
    barangay_name: "Visitacion (Pob.)",
  },
  {
    barangay_id: 3944,
    municipality_id: 155,
    barangay_name: "Cadongdongan",
  },
  {
    barangay_id: 3945,
    municipality_id: 155,
    barangay_name: "Capacuan",
  },
  {
    barangay_id: 3946,
    municipality_id: 155,
    barangay_name: "Centro I (Pob.)",
  },
  {
    barangay_id: 3947,
    municipality_id: 155,
    barangay_name: "Centro II (Pob.)",
  },
  {
    barangay_id: 3948,
    municipality_id: 155,
    barangay_name: "Macatel",
  },
  {
    barangay_id: 3949,
    municipality_id: 155,
    barangay_name: "Portabaga",
  },
  {
    barangay_id: 3952,
    municipality_id: 155,
    barangay_name: "Salungsong",
  },
  {
    barangay_id: 3950,
    municipality_id: 155,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 3951,
    municipality_id: 155,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 3953,
    municipality_id: 155,
    barangay_name: "Sicul",
  },
  {
    barangay_id: 3954,
    municipality_id: 156,
    barangay_name: "Alucao",
  },
  {
    barangay_id: 3963,
    municipality_id: 156,
    barangay_name: "Aridawen",
  },
  {
    barangay_id: 3955,
    municipality_id: 156,
    barangay_name: "Buyun",
  },
  {
    barangay_id: 3964,
    municipality_id: 156,
    barangay_name: "Caniugan",
  },
  {
    barangay_id: 3956,
    municipality_id: 156,
    barangay_name: "Centro East (Pob.)",
  },
  {
    barangay_id: 3965,
    municipality_id: 156,
    barangay_name: "Centro West",
  },
  {
    barangay_id: 3957,
    municipality_id: 156,
    barangay_name: "Dungeg",
  },
  {
    barangay_id: 3958,
    municipality_id: 156,
    barangay_name: "Luga",
  },
  {
    barangay_id: 3959,
    municipality_id: 156,
    barangay_name: "Masi",
  },
  {
    barangay_id: 3960,
    municipality_id: 156,
    barangay_name: "Mission",
  },
  {
    barangay_id: 3966,
    municipality_id: 156,
    barangay_name: "Simbaluca",
  },
  {
    barangay_id: 3961,
    municipality_id: 156,
    barangay_name: "Simpatuyo",
  },
  {
    barangay_id: 3962,
    municipality_id: 156,
    barangay_name: "Villa",
  },
  {
    barangay_id: 3967,
    municipality_id: 157,
    barangay_name: "Abariongan Ruar",
  },
  {
    barangay_id: 3968,
    municipality_id: 157,
    barangay_name: "Abariongan Uneg",
  },
  {
    barangay_id: 3969,
    municipality_id: 157,
    barangay_name: "Balagan",
  },
  {
    barangay_id: 3970,
    municipality_id: 157,
    barangay_name: "Balanni",
  },
  {
    barangay_id: 3971,
    municipality_id: 157,
    barangay_name: "Cabayo",
  },
  {
    barangay_id: 3972,
    municipality_id: 157,
    barangay_name: "Calapangan",
  },
  {
    barangay_id: 3973,
    municipality_id: 157,
    barangay_name: "Calassitan",
  },
  {
    barangay_id: 3974,
    municipality_id: 157,
    barangay_name: "Campo",
  },
  {
    barangay_id: 3975,
    municipality_id: 157,
    barangay_name: "Centro Norte (Pob.)",
  },
  {
    barangay_id: 3976,
    municipality_id: 157,
    barangay_name: "Centro Sur (Pob.)",
  },
  {
    barangay_id: 3977,
    municipality_id: 157,
    barangay_name: "Dungao",
  },
  {
    barangay_id: 3978,
    municipality_id: 157,
    barangay_name: "Lattac",
  },
  {
    barangay_id: 3979,
    municipality_id: 157,
    barangay_name: "Lipatan",
  },
  {
    barangay_id: 3980,
    municipality_id: 157,
    barangay_name: "Lubo",
  },
  {
    barangay_id: 3981,
    municipality_id: 157,
    barangay_name: "Mabitbitnong",
  },
  {
    barangay_id: 3982,
    municipality_id: 157,
    barangay_name: "Mapitac",
  },
  {
    barangay_id: 3983,
    municipality_id: 157,
    barangay_name: "Masical",
  },
  {
    barangay_id: 3984,
    municipality_id: 157,
    barangay_name: "Matalao",
  },
  {
    barangay_id: 3985,
    municipality_id: 157,
    barangay_name: "Nag-uma",
  },
  {
    barangay_id: 3986,
    municipality_id: 157,
    barangay_name: "Namuccayan",
  },
  {
    barangay_id: 3987,
    municipality_id: 157,
    barangay_name: "Niug Norte",
  },
  {
    barangay_id: 3988,
    municipality_id: 157,
    barangay_name: "Niug Sur",
  },
  {
    barangay_id: 3989,
    municipality_id: 157,
    barangay_name: "Palusao",
  },
  {
    barangay_id: 3990,
    municipality_id: 157,
    barangay_name: "San Manuel",
  },
  {
    barangay_id: 3991,
    municipality_id: 157,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 3992,
    municipality_id: 157,
    barangay_name: "Santa Felicitas",
  },
  {
    barangay_id: 3993,
    municipality_id: 157,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 3994,
    municipality_id: 157,
    barangay_name: "Sidiran",
  },
  {
    barangay_id: 3995,
    municipality_id: 157,
    barangay_name: "Tabang",
  },
  {
    barangay_id: 3996,
    municipality_id: 157,
    barangay_name: "Tamucco",
  },
  {
    barangay_id: 3997,
    municipality_id: 157,
    barangay_name: "Virginia",
  },
  {
    barangay_id: 3998,
    municipality_id: 158,
    barangay_name: "Andarayan North",
  },
  {
    barangay_id: 4029,
    municipality_id: 158,
    barangay_name: "Andarayan South",
  },
  {
    barangay_id: 4000,
    municipality_id: 158,
    barangay_name: "Bangag",
  },
  {
    barangay_id: 4001,
    municipality_id: 158,
    barangay_name: "Bantay",
  },
  {
    barangay_id: 4002,
    municipality_id: 158,
    barangay_name: "Basi East",
  },
  {
    barangay_id: 4030,
    municipality_id: 158,
    barangay_name: "Basi West",
  },
  {
    barangay_id: 4003,
    municipality_id: 158,
    barangay_name: "Bauan East",
  },
  {
    barangay_id: 4031,
    municipality_id: 158,
    barangay_name: "Bauan West",
  },
  {
    barangay_id: 4004,
    municipality_id: 158,
    barangay_name: "Cadaanan",
  },
  {
    barangay_id: 4005,
    municipality_id: 158,
    barangay_name: "Calamagui",
  },
  {
    barangay_id: 4032,
    municipality_id: 158,
    barangay_name: "Calillauan",
  },
  {
    barangay_id: 4006,
    municipality_id: 158,
    barangay_name: "Carilucud",
  },
  {
    barangay_id: 4007,
    municipality_id: 158,
    barangay_name: "Cattaran",
  },
  {
    barangay_id: 4008,
    municipality_id: 158,
    barangay_name: "Centro Northeast (Pob.)",
  },
  {
    barangay_id: 4009,
    municipality_id: 158,
    barangay_name: "Centro Northwest (Pob.)",
  },
  {
    barangay_id: 4010,
    municipality_id: 158,
    barangay_name: "Centro Southeast (Pob.)",
  },
  {
    barangay_id: 4011,
    municipality_id: 158,
    barangay_name: "Centro Southwest (Pob.)",
  },
  {
    barangay_id: 4025,
    municipality_id: 158,
    barangay_name: "Dassun",
  },
  {
    barangay_id: 4026,
    municipality_id: 158,
    barangay_name: "Furagui",
  },
  {
    barangay_id: 4027,
    municipality_id: 158,
    barangay_name: "Gadu",
  },
  {
    barangay_id: 4033,
    municipality_id: 158,
    barangay_name: "Gen. Eulogio Balao",
  },
  {
    barangay_id: 4028,
    municipality_id: 158,
    barangay_name: "Iraga",
  },
  {
    barangay_id: 4012,
    municipality_id: 158,
    barangay_name: "Lanna",
  },
  {
    barangay_id: 3999,
    municipality_id: 158,
    barangay_name: "Lannig",
  },
  {
    barangay_id: 4013,
    municipality_id: 158,
    barangay_name: "Lingu",
  },
  {
    barangay_id: 4023,
    municipality_id: 158,
    barangay_name: "Maddarulug",
  },
  {
    barangay_id: 4014,
    municipality_id: 158,
    barangay_name: "Maguirig",
  },
  {
    barangay_id: 4035,
    municipality_id: 158,
    barangay_name: "Malalam-Malacabibi",
  },
  {
    barangay_id: 4015,
    municipality_id: 158,
    barangay_name: "Nabbotuan",
  },
  {
    barangay_id: 4016,
    municipality_id: 158,
    barangay_name: "Nangalisan",
  },
  {
    barangay_id: 4017,
    municipality_id: 158,
    barangay_name: "Natappian East",
  },
  {
    barangay_id: 4034,
    municipality_id: 158,
    barangay_name: "Natappian West",
  },
  {
    barangay_id: 4018,
    municipality_id: 158,
    barangay_name: "Padul",
  },
  {
    barangay_id: 4019,
    municipality_id: 158,
    barangay_name: "Palao",
  },
  {
    barangay_id: 4020,
    municipality_id: 158,
    barangay_name: "Parug-parug",
  },
  {
    barangay_id: 4021,
    municipality_id: 158,
    barangay_name: "Pataya",
  },
  {
    barangay_id: 4022,
    municipality_id: 158,
    barangay_name: "Sampaguita",
  },
  {
    barangay_id: 4024,
    municipality_id: 158,
    barangay_name: "Ubong",
  },
  {
    barangay_id: 4036,
    municipality_id: 159,
    barangay_name: "Accusilian",
  },
  {
    barangay_id: 4037,
    municipality_id: 159,
    barangay_name: "Alabiao",
  },
  {
    barangay_id: 4038,
    municipality_id: 159,
    barangay_name: "Alabug",
  },
  {
    barangay_id: 4039,
    municipality_id: 159,
    barangay_name: "Angang",
  },
  {
    barangay_id: 4040,
    municipality_id: 159,
    barangay_name: "Bagumbayan",
  },
  {
    barangay_id: 4045,
    municipality_id: 159,
    barangay_name: "Balagao",
  },
  {
    barangay_id: 4041,
    municipality_id: 159,
    barangay_name: "Barancuag",
  },
  {
    barangay_id: 4042,
    municipality_id: 159,
    barangay_name: "Battung",
  },
  {
    barangay_id: 4043,
    municipality_id: 159,
    barangay_name: "Bicok",
  },
  {
    barangay_id: 4044,
    municipality_id: 159,
    barangay_name: "Bugnay",
  },
  {
    barangay_id: 4046,
    municipality_id: 159,
    barangay_name: "Cagumitan",
  },
  {
    barangay_id: 4047,
    municipality_id: 159,
    barangay_name: "Cato",
  },
  {
    barangay_id: 4048,
    municipality_id: 159,
    barangay_name: "Culong",
  },
  {
    barangay_id: 4049,
    municipality_id: 159,
    barangay_name: "Dagupan",
  },
  {
    barangay_id: 4050,
    municipality_id: 159,
    barangay_name: "Fugu",
  },
  {
    barangay_id: 4051,
    municipality_id: 159,
    barangay_name: "Lakambini",
  },
  {
    barangay_id: 4052,
    municipality_id: 159,
    barangay_name: "Lallayug",
  },
  {
    barangay_id: 4067,
    municipality_id: 159,
    barangay_name: "Malalinta",
  },
  {
    barangay_id: 4053,
    municipality_id: 159,
    barangay_name: "Malumin",
  },
  {
    barangay_id: 4054,
    municipality_id: 159,
    barangay_name: "Mambacag",
  },
  {
    barangay_id: 4056,
    municipality_id: 159,
    barangay_name: "Mungo",
  },
  {
    barangay_id: 4057,
    municipality_id: 159,
    barangay_name: "Naruangan",
  },
  {
    barangay_id: 4058,
    municipality_id: 159,
    barangay_name: "Palca",
  },
  {
    barangay_id: 4059,
    municipality_id: 159,
    barangay_name: "Pata",
  },
  {
    barangay_id: 4065,
    municipality_id: 159,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 4066,
    municipality_id: 159,
    barangay_name: "Poblacion II",
  },
  {
    barangay_id: 4060,
    municipality_id: 159,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 4061,
    municipality_id: 159,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 4055,
    municipality_id: 159,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 4062,
    municipality_id: 159,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 4063,
    municipality_id: 159,
    barangay_name: "Taribubu",
  },
  {
    barangay_id: 4064,
    municipality_id: 159,
    barangay_name: "Villa Laida",
  },
  {
    barangay_id: 4068,
    municipality_id: 160,
    barangay_name: "Annafunan East",
  },
  {
    barangay_id: 4102,
    municipality_id: 160,
    barangay_name: "Annafunan West",
  },
  {
    barangay_id: 4069,
    municipality_id: 160,
    barangay_name: "Atulayan Norte",
  },
  {
    barangay_id: 4103,
    municipality_id: 160,
    barangay_name: "Atulayan Sur",
  },
  {
    barangay_id: 4070,
    municipality_id: 160,
    barangay_name: "Bagay",
  },
  {
    barangay_id: 4080,
    municipality_id: 160,
    barangay_name: "Buntun",
  },
  {
    barangay_id: 4081,
    municipality_id: 160,
    barangay_name: "Caggay",
  },
  {
    barangay_id: 4082,
    municipality_id: 160,
    barangay_name: "Capatan",
  },
  {
    barangay_id: 4083,
    municipality_id: 160,
    barangay_name: "Carig",
  },
  {
    barangay_id: 4104,
    municipality_id: 160,
    barangay_name: "Caritan Centro",
  },
  {
    barangay_id: 4084,
    municipality_id: 160,
    barangay_name: "Caritan Norte",
  },
  {
    barangay_id: 4085,
    municipality_id: 160,
    barangay_name: "Caritan Sur",
  },
  {
    barangay_id: 4086,
    municipality_id: 160,
    barangay_name: "Cataggaman Nuevo",
  },
  {
    barangay_id: 4105,
    municipality_id: 160,
    barangay_name: "Cataggaman Pardo",
  },
  {
    barangay_id: 4087,
    municipality_id: 160,
    barangay_name: "Cataggaman Viejo",
  },
  {
    barangay_id: 4071,
    municipality_id: 160,
    barangay_name: "Centro 1 (Pob.)",
  },
  {
    barangay_id: 4078,
    municipality_id: 160,
    barangay_name: "Centro 10 (Pob.)",
  },
  {
    barangay_id: 4079,
    municipality_id: 160,
    barangay_name: "Centro 11 (Pob.)",
  },
  {
    barangay_id: 4101,
    municipality_id: 160,
    barangay_name: "Centro 12 (Pob.)",
  },
  {
    barangay_id: 4099,
    municipality_id: 160,
    barangay_name: "Centro 2 (Pob.)",
  },
  {
    barangay_id: 4100,
    municipality_id: 160,
    barangay_name: "Centro 3 (Pob.)",
  },
  {
    barangay_id: 4072,
    municipality_id: 160,
    barangay_name: "Centro 4 (Pob.)",
  },
  {
    barangay_id: 4073,
    municipality_id: 160,
    barangay_name: "Centro 5 (Pob.)",
  },
  {
    barangay_id: 4074,
    municipality_id: 160,
    barangay_name: "Centro 6 (Pob.)",
  },
  {
    barangay_id: 4075,
    municipality_id: 160,
    barangay_name: "Centro 7 (Pob.)",
  },
  {
    barangay_id: 4076,
    municipality_id: 160,
    barangay_name: "Centro 8 (Pob.)",
  },
  {
    barangay_id: 4077,
    municipality_id: 160,
    barangay_name: "Centro 9 (Pob.)",
  },
  {
    barangay_id: 4106,
    municipality_id: 160,
    barangay_name: "Dadda",
  },
  {
    barangay_id: 4088,
    municipality_id: 160,
    barangay_name: "Gosi Norte",
  },
  {
    barangay_id: 4107,
    municipality_id: 160,
    barangay_name: "Gosi Sur",
  },
  {
    barangay_id: 4089,
    municipality_id: 160,
    barangay_name: "Larion Alto",
  },
  {
    barangay_id: 4090,
    municipality_id: 160,
    barangay_name: "Larion Bajo",
  },
  {
    barangay_id: 4108,
    municipality_id: 160,
    barangay_name: "Leonarda",
  },
  {
    barangay_id: 4091,
    municipality_id: 160,
    barangay_name: "Libag Norte",
  },
  {
    barangay_id: 4109,
    municipality_id: 160,
    barangay_name: "Libag Sur",
  },
  {
    barangay_id: 4092,
    municipality_id: 160,
    barangay_name: "Linao East",
  },
  {
    barangay_id: 4110,
    municipality_id: 160,
    barangay_name: "Linao Norte",
  },
  {
    barangay_id: 4111,
    municipality_id: 160,
    barangay_name: "Linao West",
  },
  {
    barangay_id: 4093,
    municipality_id: 160,
    barangay_name: "Nambbalan Norte",
  },
  {
    barangay_id: 4112,
    municipality_id: 160,
    barangay_name: "Nambbalan Sur",
  },
  {
    barangay_id: 4094,
    municipality_id: 160,
    barangay_name: "Pallua Norte",
  },
  {
    barangay_id: 4113,
    municipality_id: 160,
    barangay_name: "Pallua Sur",
  },
  {
    barangay_id: 4095,
    municipality_id: 160,
    barangay_name: "Pengue",
  },
  {
    barangay_id: 4114,
    municipality_id: 160,
    barangay_name: "Reyes",
  },
  {
    barangay_id: 4115,
    municipality_id: 160,
    barangay_name: "San Gabriel",
  },
  {
    barangay_id: 4096,
    municipality_id: 160,
    barangay_name: "Tagga",
  },
  {
    barangay_id: 4097,
    municipality_id: 160,
    barangay_name: "Tanza",
  },
  {
    barangay_id: 4098,
    municipality_id: 160,
    barangay_name: "Ugac Norte",
  },
  {
    barangay_id: 4116,
    municipality_id: 160,
    barangay_name: "Ugac Sur",
  },
  {
    barangay_id: 4117,
    municipality_id: 161,
    barangay_name: "Amistad",
  },
  {
    barangay_id: 4118,
    municipality_id: 161,
    barangay_name: "Antonino (Pob.)",
  },
  {
    barangay_id: 4119,
    municipality_id: 161,
    barangay_name: "Apanay",
  },
  {
    barangay_id: 4120,
    municipality_id: 161,
    barangay_name: "Aurora",
  },
  {
    barangay_id: 4121,
    municipality_id: 161,
    barangay_name: "Bagnos",
  },
  {
    barangay_id: 4122,
    municipality_id: 161,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 4123,
    municipality_id: 161,
    barangay_name: "Bantug-Petines",
  },
  {
    barangay_id: 4124,
    municipality_id: 161,
    barangay_name: "Bonifacio",
  },
  {
    barangay_id: 4125,
    municipality_id: 161,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 4126,
    municipality_id: 161,
    barangay_name: "Calaocan (Pob.)",
  },
  {
    barangay_id: 4127,
    municipality_id: 161,
    barangay_name: "Callao",
  },
  {
    barangay_id: 4128,
    municipality_id: 161,
    barangay_name: "Dagupan",
  },
  {
    barangay_id: 4129,
    municipality_id: 161,
    barangay_name: "Inanama",
  },
  {
    barangay_id: 4130,
    municipality_id: 161,
    barangay_name: "Linglingay",
  },
  {
    barangay_id: 4131,
    municipality_id: 161,
    barangay_name: "M.H. del Pilar",
  },
  {
    barangay_id: 4132,
    municipality_id: 161,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 4133,
    municipality_id: 161,
    barangay_name: "Magsaysay (Pob.)",
  },
  {
    barangay_id: 4134,
    municipality_id: 161,
    barangay_name: "Mataas na Kahoy",
  },
  {
    barangay_id: 4135,
    municipality_id: 161,
    barangay_name: "Paddad",
  },
  {
    barangay_id: 4136,
    municipality_id: 161,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 4137,
    municipality_id: 161,
    barangay_name: "Rizaluna",
  },
  {
    barangay_id: 4138,
    municipality_id: 161,
    barangay_name: "Salvacion",
  },
  {
    barangay_id: 4139,
    municipality_id: 161,
    barangay_name: "San Antonio (Pob.)",
  },
  {
    barangay_id: 4140,
    municipality_id: 161,
    barangay_name: "San Fernando",
  },
  {
    barangay_id: 4141,
    municipality_id: 161,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 4142,
    municipality_id: 161,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 4143,
    municipality_id: 161,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 4144,
    municipality_id: 161,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 4145,
    municipality_id: 161,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 4146,
    municipality_id: 161,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 4147,
    municipality_id: 161,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 4148,
    municipality_id: 161,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 4149,
    municipality_id: 161,
    barangay_name: "Victoria",
  },
  {
    barangay_id: 4150,
    municipality_id: 161,
    barangay_name: "Zamora",
  },
  {
    barangay_id: 4151,
    municipality_id: 162,
    barangay_name: "Allangigan",
  },
  {
    barangay_id: 4152,
    municipality_id: 162,
    barangay_name: "Aniog",
  },
  {
    barangay_id: 4153,
    municipality_id: 162,
    barangay_name: "Baniket",
  },
  {
    barangay_id: 4154,
    municipality_id: 162,
    barangay_name: "Bannawag",
  },
  {
    barangay_id: 4155,
    municipality_id: 162,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 4156,
    municipality_id: 162,
    barangay_name: "Barangcuag",
  },
  {
    barangay_id: 4157,
    municipality_id: 162,
    barangay_name: "Baui",
  },
  {
    barangay_id: 4158,
    municipality_id: 162,
    barangay_name: "Bonifacio",
  },
  {
    barangay_id: 4159,
    municipality_id: 162,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 4160,
    municipality_id: 162,
    barangay_name: "Bunnay",
  },
  {
    barangay_id: 4161,
    municipality_id: 162,
    barangay_name: "Calabayan-Minanga",
  },
  {
    barangay_id: 4162,
    municipality_id: 162,
    barangay_name: "Calaccab",
  },
  {
    barangay_id: 4163,
    municipality_id: 162,
    barangay_name: "Calaocan",
  },
  {
    barangay_id: 4165,
    municipality_id: 162,
    barangay_name: "Campanario",
  },
  {
    barangay_id: 4166,
    municipality_id: 162,
    barangay_name: "Canangan",
  },
  {
    barangay_id: 4167,
    municipality_id: 162,
    barangay_name: "Centro I (Pob.)",
  },
  {
    barangay_id: 4168,
    municipality_id: 162,
    barangay_name: "Centro II (Pob.)",
  },
  {
    barangay_id: 4169,
    municipality_id: 162,
    barangay_name: "Centro III (Pob.)",
  },
  {
    barangay_id: 4170,
    municipality_id: 162,
    barangay_name: "Consular",
  },
  {
    barangay_id: 4171,
    municipality_id: 162,
    barangay_name: "Cumu",
  },
  {
    barangay_id: 4172,
    municipality_id: 162,
    barangay_name: "Dalakip",
  },
  {
    barangay_id: 4173,
    municipality_id: 162,
    barangay_name: "Dalenat",
  },
  {
    barangay_id: 4174,
    municipality_id: 162,
    barangay_name: "Dipaluda",
  },
  {
    barangay_id: 4175,
    municipality_id: 162,
    barangay_name: "Duroc",
  },
  {
    barangay_id: 4177,
    municipality_id: 162,
    barangay_name: "Esperanza",
  },
  {
    barangay_id: 4178,
    municipality_id: 162,
    barangay_name: "Fugaru",
  },
  {
    barangay_id: 4180,
    municipality_id: 162,
    barangay_name: "Ingud Norte",
  },
  {
    barangay_id: 4181,
    municipality_id: 162,
    barangay_name: "Ingud Sur",
  },
  {
    barangay_id: 4164,
    municipality_id: 162,
    barangay_name: "Kalusutan",
  },
  {
    barangay_id: 4182,
    municipality_id: 162,
    barangay_name: "La Suerte",
  },
  {
    barangay_id: 4179,
    municipality_id: 162,
    barangay_name: "Liwliwa",
  },
  {
    barangay_id: 4183,
    municipality_id: 162,
    barangay_name: "Lomboy",
  },
  {
    barangay_id: 4184,
    municipality_id: 162,
    barangay_name: "Loria",
  },
  {
    barangay_id: 4176,
    municipality_id: 162,
    barangay_name: "Lourdes",
  },
  {
    barangay_id: 4185,
    municipality_id: 162,
    barangay_name: "Mabuhay",
  },
  {
    barangay_id: 4186,
    municipality_id: 162,
    barangay_name: "Macalauat",
  },
  {
    barangay_id: 4187,
    municipality_id: 162,
    barangay_name: "Macaniao",
  },
  {
    barangay_id: 4188,
    municipality_id: 162,
    barangay_name: "Malannao",
  },
  {
    barangay_id: 4189,
    municipality_id: 162,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 4190,
    municipality_id: 162,
    barangay_name: "Mangandingay",
  },
  {
    barangay_id: 4191,
    municipality_id: 162,
    barangay_name: "Minanga Proper",
  },
  {
    barangay_id: 4192,
    municipality_id: 162,
    barangay_name: "Pappat",
  },
  {
    barangay_id: 4193,
    municipality_id: 162,
    barangay_name: "Pissay",
  },
  {
    barangay_id: 4194,
    municipality_id: 162,
    barangay_name: "Ramona",
  },
  {
    barangay_id: 4195,
    municipality_id: 162,
    barangay_name: "Rancho Bassit",
  },
  {
    barangay_id: 4196,
    municipality_id: 162,
    barangay_name: "Rang-ayan",
  },
  {
    barangay_id: 4197,
    municipality_id: 162,
    barangay_name: "Salay",
  },
  {
    barangay_id: 4198,
    municipality_id: 162,
    barangay_name: "San Ambrocio",
  },
  {
    barangay_id: 4199,
    municipality_id: 162,
    barangay_name: "San Guillermo",
  },
  {
    barangay_id: 4200,
    municipality_id: 162,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 4201,
    municipality_id: 162,
    barangay_name: "San Marcelo",
  },
  {
    barangay_id: 4202,
    municipality_id: 162,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 4203,
    municipality_id: 162,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 4204,
    municipality_id: 162,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 4205,
    municipality_id: 162,
    barangay_name: "Saranay",
  },
  {
    barangay_id: 4206,
    municipality_id: 162,
    barangay_name: "Sinabbaran",
  },
  {
    barangay_id: 4207,
    municipality_id: 162,
    barangay_name: "Victory",
  },
  {
    barangay_id: 4208,
    municipality_id: 162,
    barangay_name: "Viga",
  },
  {
    barangay_id: 4209,
    municipality_id: 162,
    barangay_name: "Villa Domingo",
  },
  {
    barangay_id: 4210,
    municipality_id: 163,
    barangay_name: "Apiat",
  },
  {
    barangay_id: 4211,
    municipality_id: 163,
    barangay_name: "Bagnos",
  },
  {
    barangay_id: 4212,
    municipality_id: 163,
    barangay_name: "Bagong Tanza",
  },
  {
    barangay_id: 4213,
    municipality_id: 163,
    barangay_name: "Ballesteros",
  },
  {
    barangay_id: 4214,
    municipality_id: 163,
    barangay_name: "Bannagao",
  },
  {
    barangay_id: 4215,
    municipality_id: 163,
    barangay_name: "Bannawag",
  },
  {
    barangay_id: 4216,
    municipality_id: 163,
    barangay_name: "Bolinao",
  },
  {
    barangay_id: 4217,
    municipality_id: 163,
    barangay_name: "Caipilan",
  },
  {
    barangay_id: 4218,
    municipality_id: 163,
    barangay_name: "Camarunggayan",
  },
  {
    barangay_id: 4219,
    municipality_id: 163,
    barangay_name: "Dalig-Kalinga",
  },
  {
    barangay_id: 4220,
    municipality_id: 163,
    barangay_name: "Diamantina",
  },
  {
    barangay_id: 4221,
    municipality_id: 163,
    barangay_name: "Divisoria",
  },
  {
    barangay_id: 4222,
    municipality_id: 163,
    barangay_name: "Esperanza East",
  },
  {
    barangay_id: 4223,
    municipality_id: 163,
    barangay_name: "Esperanza West",
  },
  {
    barangay_id: 4224,
    municipality_id: 163,
    barangay_name: "Kalabaza",
  },
  {
    barangay_id: 4226,
    municipality_id: 163,
    barangay_name: "Macatal",
  },
  {
    barangay_id: 4227,
    municipality_id: 163,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 4228,
    municipality_id: 163,
    barangay_name: "Nampicuan",
  },
  {
    barangay_id: 4230,
    municipality_id: 163,
    barangay_name: "Panecien",
  },
  {
    barangay_id: 4225,
    municipality_id: 163,
    barangay_name: "Rizaluna",
  },
  {
    barangay_id: 4231,
    municipality_id: 163,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 4232,
    municipality_id: 163,
    barangay_name: "San Jose (Pob.)",
  },
  {
    barangay_id: 4241,
    municipality_id: 163,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 4242,
    municipality_id: 163,
    barangay_name: "San Pedro-San Pablo (Pob.)",
  },
  {
    barangay_id: 4233,
    municipality_id: 163,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 4234,
    municipality_id: 163,
    barangay_name: "San Ramon",
  },
  {
    barangay_id: 4235,
    municipality_id: 163,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 4236,
    municipality_id: 163,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 4237,
    municipality_id: 163,
    barangay_name: "Saranay",
  },
  {
    barangay_id: 4238,
    municipality_id: 163,
    barangay_name: "Sili",
  },
  {
    barangay_id: 4239,
    municipality_id: 163,
    barangay_name: "Victoria",
  },
  {
    barangay_id: 4240,
    municipality_id: 163,
    barangay_name: "Villa Fugu",
  },
  {
    barangay_id: 4229,
    municipality_id: 163,
    barangay_name: "Villa Nuesa",
  },
  {
    barangay_id: 4243,
    municipality_id: 164,
    barangay_name: "Andabuen",
  },
  {
    barangay_id: 4244,
    municipality_id: 164,
    barangay_name: "Ara",
  },
  {
    barangay_id: 4271,
    municipality_id: 164,
    barangay_name: "Balliao",
  },
  {
    barangay_id: 4245,
    municipality_id: 164,
    barangay_name: "Binogtungan",
  },
  {
    barangay_id: 4246,
    municipality_id: 164,
    barangay_name: "Capuseran",
  },
  {
    barangay_id: 4247,
    municipality_id: 164,
    barangay_name: "Dagupan",
  },
  {
    barangay_id: 4248,
    municipality_id: 164,
    barangay_name: "Danipa",
  },
  {
    barangay_id: 4258,
    municipality_id: 164,
    barangay_name: "District I (Pob.)",
  },
  {
    barangay_id: 4249,
    municipality_id: 164,
    barangay_name: "District II (Pob.)",
  },
  {
    barangay_id: 4250,
    municipality_id: 164,
    barangay_name: "Gomez",
  },
  {
    barangay_id: 4251,
    municipality_id: 164,
    barangay_name: "Guilingan",
  },
  {
    barangay_id: 4252,
    municipality_id: 164,
    barangay_name: "La Salette",
  },
  {
    barangay_id: 4265,
    municipality_id: 164,
    barangay_name: "Lucban",
  },
  {
    barangay_id: 4253,
    municipality_id: 164,
    barangay_name: "Makindol",
  },
  {
    barangay_id: 4254,
    municipality_id: 164,
    barangay_name: "Maluno Norte",
  },
  {
    barangay_id: 4255,
    municipality_id: 164,
    barangay_name: "Maluno Sur",
  },
  {
    barangay_id: 4256,
    municipality_id: 164,
    barangay_name: "Nacalma",
  },
  {
    barangay_id: 4257,
    municipality_id: 164,
    barangay_name: "New Magsaysay",
  },
  {
    barangay_id: 4270,
    municipality_id: 164,
    barangay_name: "Placer",
  },
  {
    barangay_id: 4259,
    municipality_id: 164,
    barangay_name: "Punit",
  },
  {
    barangay_id: 4260,
    municipality_id: 164,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 4261,
    municipality_id: 164,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 4262,
    municipality_id: 164,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 4269,
    municipality_id: 164,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 4263,
    municipality_id: 164,
    barangay_name: "Sevillana",
  },
  {
    barangay_id: 4264,
    municipality_id: 164,
    barangay_name: "Sinipit",
  },
  {
    barangay_id: 4266,
    municipality_id: 164,
    barangay_name: "Villaluz",
  },
  {
    barangay_id: 4267,
    municipality_id: 164,
    barangay_name: "Yeban Norte",
  },
  {
    barangay_id: 4268,
    municipality_id: 164,
    barangay_name: "Yeban Sur",
  },
  {
    barangay_id: 4272,
    municipality_id: 165,
    barangay_name: "Bacnor East",
  },
  {
    barangay_id: 4273,
    municipality_id: 165,
    barangay_name: "Bacnor West",
  },
  {
    barangay_id: 4274,
    municipality_id: 165,
    barangay_name: "Caliguian (Pob.)",
  },
  {
    barangay_id: 4275,
    municipality_id: 165,
    barangay_name: "Catabban",
  },
  {
    barangay_id: 4276,
    municipality_id: 165,
    barangay_name: "Cullalabo Del Norte",
  },
  {
    barangay_id: 4278,
    municipality_id: 165,
    barangay_name: "Cullalabo Del Sur",
  },
  {
    barangay_id: 4277,
    municipality_id: 165,
    barangay_name: "Cullalabo San Antonio",
  },
  {
    barangay_id: 4279,
    municipality_id: 165,
    barangay_name: "Dalig",
  },
  {
    barangay_id: 4280,
    municipality_id: 165,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 4281,
    municipality_id: 165,
    barangay_name: "Masigun",
  },
  {
    barangay_id: 4282,
    municipality_id: 165,
    barangay_name: "Raniag",
  },
  {
    barangay_id: 4283,
    municipality_id: 165,
    barangay_name: "San Bonifacio",
  },
  {
    barangay_id: 4284,
    municipality_id: 165,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 4285,
    municipality_id: 165,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 4286,
    municipality_id: 166,
    barangay_name: "Aggub",
  },
  {
    barangay_id: 4287,
    municipality_id: 166,
    barangay_name: "Anao",
  },
  {
    barangay_id: 4288,
    municipality_id: 166,
    barangay_name: "Angancasilian",
  },
  {
    barangay_id: 4289,
    municipality_id: 166,
    barangay_name: "Balasig",
  },
  {
    barangay_id: 4290,
    municipality_id: 166,
    barangay_name: "Cansan",
  },
  {
    barangay_id: 4291,
    municipality_id: 166,
    barangay_name: "Casibarag Norte",
  },
  {
    barangay_id: 4292,
    municipality_id: 166,
    barangay_name: "Casibarag Sur",
  },
  {
    barangay_id: 4293,
    municipality_id: 166,
    barangay_name: "Catabayungan",
  },
  {
    barangay_id: 4302,
    municipality_id: 166,
    barangay_name: "Centro (Pob.)",
  },
  {
    barangay_id: 4294,
    municipality_id: 166,
    barangay_name: "Cubag",
  },
  {
    barangay_id: 4295,
    municipality_id: 166,
    barangay_name: "Garita",
  },
  {
    barangay_id: 4296,
    municipality_id: 166,
    barangay_name: "Luquilu",
  },
  {
    barangay_id: 4297,
    municipality_id: 166,
    barangay_name: "Mabangug",
  },
  {
    barangay_id: 4298,
    municipality_id: 166,
    barangay_name: "Magassi",
  },
  {
    barangay_id: 4309,
    municipality_id: 166,
    barangay_name: "Masipi East",
  },
  {
    barangay_id: 4310,
    municipality_id: 166,
    barangay_name: "Masipi West",
  },
  {
    barangay_id: 4299,
    municipality_id: 166,
    barangay_name: "Ngarag",
  },
  {
    barangay_id: 4300,
    municipality_id: 166,
    barangay_name: "Pilig Abajo",
  },
  {
    barangay_id: 4301,
    municipality_id: 166,
    barangay_name: "Pilig Alto",
  },
  {
    barangay_id: 4311,
    municipality_id: 166,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 4303,
    municipality_id: 166,
    barangay_name: "San Bernardo",
  },
  {
    barangay_id: 4304,
    municipality_id: 166,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 4305,
    municipality_id: 166,
    barangay_name: "Saui",
  },
  {
    barangay_id: 4306,
    municipality_id: 166,
    barangay_name: "Tallag",
  },
  {
    barangay_id: 4307,
    municipality_id: 166,
    barangay_name: "Ugad",
  },
  {
    barangay_id: 4308,
    municipality_id: 166,
    barangay_name: "Union",
  },
  {
    barangay_id: 4313,
    municipality_id: 167,
    barangay_name: "Calaocan",
  },
  {
    barangay_id: 4314,
    municipality_id: 167,
    barangay_name: "Canan",
  },
  {
    barangay_id: 4315,
    municipality_id: 167,
    barangay_name: "Centro (Pob.)",
  },
  {
    barangay_id: 4316,
    municipality_id: 167,
    barangay_name: "Culing Centro",
  },
  {
    barangay_id: 4317,
    municipality_id: 167,
    barangay_name: "Culing East",
  },
  {
    barangay_id: 4318,
    municipality_id: 167,
    barangay_name: "Culing West",
  },
  {
    barangay_id: 4319,
    municipality_id: 167,
    barangay_name: "Del Corpuz",
  },
  {
    barangay_id: 4320,
    municipality_id: 167,
    barangay_name: "Del Pilar",
  },
  {
    barangay_id: 4321,
    municipality_id: 167,
    barangay_name: "Diamantina",
  },
  {
    barangay_id: 4322,
    municipality_id: 167,
    barangay_name: "La Paz",
  },
  {
    barangay_id: 4323,
    municipality_id: 167,
    barangay_name: "Luzon",
  },
  {
    barangay_id: 4324,
    municipality_id: 167,
    barangay_name: "Macalaoat",
  },
  {
    barangay_id: 4325,
    municipality_id: 167,
    barangay_name: "Magdalena",
  },
  {
    barangay_id: 4326,
    municipality_id: 167,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 4327,
    municipality_id: 167,
    barangay_name: "Namnama",
  },
  {
    barangay_id: 4328,
    municipality_id: 167,
    barangay_name: "Nueva Era",
  },
  {
    barangay_id: 4329,
    municipality_id: 167,
    barangay_name: "Paraiso",
  },
  {
    barangay_id: 4312,
    municipality_id: 167,
    barangay_name: "Rang-ay",
  },
  {
    barangay_id: 4330,
    municipality_id: 167,
    barangay_name: "Sampaloc",
  },
  {
    barangay_id: 4331,
    municipality_id: 167,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 4332,
    municipality_id: 167,
    barangay_name: "Saranay",
  },
  {
    barangay_id: 4333,
    municipality_id: 167,
    barangay_name: "Tandul",
  },
  {
    barangay_id: 4334,
    municipality_id: 168,
    barangay_name: "Alicaocao",
  },
  {
    barangay_id: 4335,
    municipality_id: 168,
    barangay_name: "Alinam",
  },
  {
    barangay_id: 4336,
    municipality_id: 168,
    barangay_name: "Amobocan",
  },
  {
    barangay_id: 4337,
    municipality_id: 168,
    barangay_name: "Andarayan",
  },
  {
    barangay_id: 4338,
    municipality_id: 168,
    barangay_name: "Baculod",
  },
  {
    barangay_id: 4339,
    municipality_id: 168,
    barangay_name: "Baringin Norte",
  },
  {
    barangay_id: 4340,
    municipality_id: 168,
    barangay_name: "Baringin Sur",
  },
  {
    barangay_id: 4341,
    municipality_id: 168,
    barangay_name: "Buena Suerte",
  },
  {
    barangay_id: 4342,
    municipality_id: 168,
    barangay_name: "Bugallon",
  },
  {
    barangay_id: 4343,
    municipality_id: 168,
    barangay_name: "Buyon",
  },
  {
    barangay_id: 4344,
    municipality_id: 168,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 4345,
    municipality_id: 168,
    barangay_name: "Cabugao",
  },
  {
    barangay_id: 4349,
    municipality_id: 168,
    barangay_name: "Carabatan Bacareno",
  },
  {
    barangay_id: 4346,
    municipality_id: 168,
    barangay_name: "Carabatan Chica",
  },
  {
    barangay_id: 4347,
    municipality_id: 168,
    barangay_name: "Carabatan Grande",
  },
  {
    barangay_id: 4348,
    municipality_id: 168,
    barangay_name: "Carabatan Punta",
  },
  {
    barangay_id: 4350,
    municipality_id: 168,
    barangay_name: "Casalatan",
  },
  {
    barangay_id: 4352,
    municipality_id: 168,
    barangay_name: "Cassap Fuera",
  },
  {
    barangay_id: 4353,
    municipality_id: 168,
    barangay_name: "Catalina",
  },
  {
    barangay_id: 4354,
    municipality_id: 168,
    barangay_name: "Culalabat",
  },
  {
    barangay_id: 4355,
    municipality_id: 168,
    barangay_name: "Dabburab",
  },
  {
    barangay_id: 4356,
    municipality_id: 168,
    barangay_name: "De Vera",
  },
  {
    barangay_id: 4357,
    municipality_id: 168,
    barangay_name: "Dianao",
  },
  {
    barangay_id: 4358,
    municipality_id: 168,
    barangay_name: "Disimuray",
  },
  {
    barangay_id: 4359,
    municipality_id: 168,
    barangay_name: "District I (Pob.)",
  },
  {
    barangay_id: 4360,
    municipality_id: 168,
    barangay_name: "District II (Pob.)",
  },
  {
    barangay_id: 4361,
    municipality_id: 168,
    barangay_name: "District III (Pob.)",
  },
  {
    barangay_id: 4362,
    municipality_id: 168,
    barangay_name: "Duminit",
  },
  {
    barangay_id: 4363,
    municipality_id: 168,
    barangay_name: "Faustino",
  },
  {
    barangay_id: 4364,
    municipality_id: 168,
    barangay_name: "Gagabutan",
  },
  {
    barangay_id: 4365,
    municipality_id: 168,
    barangay_name: "Gappal",
  },
  {
    barangay_id: 4366,
    municipality_id: 168,
    barangay_name: "Guayabal",
  },
  {
    barangay_id: 4367,
    municipality_id: 168,
    barangay_name: "Labinab",
  },
  {
    barangay_id: 4368,
    municipality_id: 168,
    barangay_name: "Linglingay",
  },
  {
    barangay_id: 4369,
    municipality_id: 168,
    barangay_name: "Mabantad",
  },
  {
    barangay_id: 4370,
    municipality_id: 168,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 4371,
    municipality_id: 168,
    barangay_name: "Manaoag",
  },
  {
    barangay_id: 4372,
    municipality_id: 168,
    barangay_name: "Marabulig I",
  },
  {
    barangay_id: 4373,
    municipality_id: 168,
    barangay_name: "Marabulig II",
  },
  {
    barangay_id: 4374,
    municipality_id: 168,
    barangay_name: "Minante I",
  },
  {
    barangay_id: 4375,
    municipality_id: 168,
    barangay_name: "Minante II",
  },
  {
    barangay_id: 4377,
    municipality_id: 168,
    barangay_name: "Naganacan",
  },
  {
    barangay_id: 4376,
    municipality_id: 168,
    barangay_name: "Nagcampegan",
  },
  {
    barangay_id: 4378,
    municipality_id: 168,
    barangay_name: "Nagrumbuan",
  },
  {
    barangay_id: 4379,
    municipality_id: 168,
    barangay_name: "Nungnungan I",
  },
  {
    barangay_id: 4380,
    municipality_id: 168,
    barangay_name: "Nungnungan II",
  },
  {
    barangay_id: 4381,
    municipality_id: 168,
    barangay_name: "Pinoma",
  },
  {
    barangay_id: 4382,
    municipality_id: 168,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 4383,
    municipality_id: 168,
    barangay_name: "Rogus",
  },
  {
    barangay_id: 4384,
    municipality_id: 168,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 4385,
    municipality_id: 168,
    barangay_name: "San Fermin",
  },
  {
    barangay_id: 4386,
    municipality_id: 168,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 4387,
    municipality_id: 168,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 4388,
    municipality_id: 168,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 4351,
    municipality_id: 168,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 4389,
    municipality_id: 168,
    barangay_name: "Santa Luciana",
  },
  {
    barangay_id: 4390,
    municipality_id: 168,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 4391,
    municipality_id: 168,
    barangay_name: "Sillawit",
  },
  {
    barangay_id: 4392,
    municipality_id: 168,
    barangay_name: "Sinippil",
  },
  {
    barangay_id: 4393,
    municipality_id: 168,
    barangay_name: "Tagaran",
  },
  {
    barangay_id: 4394,
    municipality_id: 168,
    barangay_name: "Turayong",
  },
  {
    barangay_id: 4395,
    municipality_id: 168,
    barangay_name: "Union",
  },
  {
    barangay_id: 4396,
    municipality_id: 168,
    barangay_name: "Villa Concepcion",
  },
  {
    barangay_id: 4397,
    municipality_id: 168,
    barangay_name: "Villa Luna",
  },
  {
    barangay_id: 4398,
    municipality_id: 168,
    barangay_name: "Villaflor",
  },
  {
    barangay_id: 4399,
    municipality_id: 169,
    barangay_name: "Aguinaldo",
  },
  {
    barangay_id: 4422,
    municipality_id: 169,
    barangay_name: "Anonang",
  },
  {
    barangay_id: 4400,
    municipality_id: 169,
    barangay_name: "Calimaturod",
  },
  {
    barangay_id: 4423,
    municipality_id: 169,
    barangay_name: "Camarao",
  },
  {
    barangay_id: 4401,
    municipality_id: 169,
    barangay_name: "Capirpiriwan",
  },
  {
    barangay_id: 4402,
    municipality_id: 169,
    barangay_name: "Caquilingan",
  },
  {
    barangay_id: 4403,
    municipality_id: 169,
    barangay_name: "Dallao",
  },
  {
    barangay_id: 4404,
    municipality_id: 169,
    barangay_name: "Gayong",
  },
  {
    barangay_id: 4405,
    municipality_id: 169,
    barangay_name: "Laurel",
  },
  {
    barangay_id: 4406,
    municipality_id: 169,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 4407,
    municipality_id: 169,
    barangay_name: "Malapat",
  },
  {
    barangay_id: 4408,
    municipality_id: 169,
    barangay_name: "Osmena",
  },
  {
    barangay_id: 4409,
    municipality_id: 169,
    barangay_name: "Quezon",
  },
  {
    barangay_id: 4410,
    municipality_id: 169,
    barangay_name: "Quirino",
  },
  {
    barangay_id: 4411,
    municipality_id: 169,
    barangay_name: "Rizaluna",
  },
  {
    barangay_id: 4412,
    municipality_id: 169,
    barangay_name: "Roxas Pob.",
  },
  {
    barangay_id: 4413,
    municipality_id: 169,
    barangay_name: "Sagat",
  },
  {
    barangay_id: 4414,
    municipality_id: 169,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 4415,
    municipality_id: 169,
    barangay_name: "Taliktik",
  },
  {
    barangay_id: 4416,
    municipality_id: 169,
    barangay_name: "Tanggal",
  },
  {
    barangay_id: 4417,
    municipality_id: 169,
    barangay_name: "Tarinsing",
  },
  {
    barangay_id: 4418,
    municipality_id: 169,
    barangay_name: "Turod Norte",
  },
  {
    barangay_id: 4419,
    municipality_id: 169,
    barangay_name: "Turod Sur",
  },
  {
    barangay_id: 4421,
    municipality_id: 169,
    barangay_name: "Villamarzo",
  },
  {
    barangay_id: 4420,
    municipality_id: 169,
    barangay_name: "Villamiemban",
  },
  {
    barangay_id: 4424,
    municipality_id: 169,
    barangay_name: "Wigan",
  },
  {
    barangay_id: 4425,
    municipality_id: 170,
    barangay_name: "Ayod",
  },
  {
    barangay_id: 4427,
    municipality_id: 170,
    barangay_name: "Bucal Norte",
  },
  {
    barangay_id: 4426,
    municipality_id: 170,
    barangay_name: "Bucal Sur",
  },
  {
    barangay_id: 4428,
    municipality_id: 170,
    barangay_name: "Dibulo",
  },
  {
    barangay_id: 4429,
    municipality_id: 170,
    barangay_name: "Digumased (Pob.)",
  },
  {
    barangay_id: 4430,
    municipality_id: 170,
    barangay_name: "Dimaluade",
  },
  {
    barangay_id: 4434,
    municipality_id: 171,
    barangay_name: "Bicobian",
  },
  {
    barangay_id: 4440,
    municipality_id: 171,
    barangay_name: "Dibulos",
  },
  {
    barangay_id: 4431,
    municipality_id: 171,
    barangay_name: "Dicambangan",
  },
  {
    barangay_id: 4432,
    municipality_id: 171,
    barangay_name: "Dicaroyan",
  },
  {
    barangay_id: 4433,
    municipality_id: 171,
    barangay_name: "Dicatian",
  },
  {
    barangay_id: 4435,
    municipality_id: 171,
    barangay_name: "Dilakit",
  },
  {
    barangay_id: 4436,
    municipality_id: 171,
    barangay_name: "Dimapnat",
  },
  {
    barangay_id: 4437,
    municipality_id: 171,
    barangay_name: "Dimapula (Pob.)",
  },
  {
    barangay_id: 4438,
    municipality_id: 171,
    barangay_name: "Dimasalansan",
  },
  {
    barangay_id: 4439,
    municipality_id: 171,
    barangay_name: "Dipudo",
  },
  {
    barangay_id: 4441,
    municipality_id: 171,
    barangay_name: "Ditarum",
  },
  {
    barangay_id: 4442,
    municipality_id: 171,
    barangay_name: "Sapinit",
  },
  {
    barangay_id: 4443,
    municipality_id: 172,
    barangay_name: "Angoluan",
  },
  {
    barangay_id: 4444,
    municipality_id: 172,
    barangay_name: "Annafunan",
  },
  {
    barangay_id: 4445,
    municipality_id: 172,
    barangay_name: "Arabiat",
  },
  {
    barangay_id: 4446,
    municipality_id: 172,
    barangay_name: "Aromin",
  },
  {
    barangay_id: 4447,
    municipality_id: 172,
    barangay_name: "Babaran",
  },
  {
    barangay_id: 4448,
    municipality_id: 172,
    barangay_name: "Bacradal",
  },
  {
    barangay_id: 4449,
    municipality_id: 172,
    barangay_name: "Benguet",
  },
  {
    barangay_id: 4450,
    municipality_id: 172,
    barangay_name: "Buneg",
  },
  {
    barangay_id: 4451,
    municipality_id: 172,
    barangay_name: "Busilelao",
  },
  {
    barangay_id: 4505,
    municipality_id: 172,
    barangay_name: "Cabugao (Pob.)",
  },
  {
    barangay_id: 4452,
    municipality_id: 172,
    barangay_name: "Caniguing",
  },
  {
    barangay_id: 4453,
    municipality_id: 172,
    barangay_name: "Carulay",
  },
  {
    barangay_id: 4454,
    municipality_id: 172,
    barangay_name: "Castillo",
  },
  {
    barangay_id: 4455,
    municipality_id: 172,
    barangay_name: "Dammang East",
  },
  {
    barangay_id: 4456,
    municipality_id: 172,
    barangay_name: "Dammang West",
  },
  {
    barangay_id: 4506,
    municipality_id: 172,
    barangay_name: "Diasan",
  },
  {
    barangay_id: 4457,
    municipality_id: 172,
    barangay_name: "Dicaraoyan",
  },
  {
    barangay_id: 4458,
    municipality_id: 172,
    barangay_name: "Dugayong",
  },
  {
    barangay_id: 4459,
    municipality_id: 172,
    barangay_name: "Fugu",
  },
  {
    barangay_id: 4460,
    municipality_id: 172,
    barangay_name: "Garit Norte",
  },
  {
    barangay_id: 4461,
    municipality_id: 172,
    barangay_name: "Garit Sur",
  },
  {
    barangay_id: 4462,
    municipality_id: 172,
    barangay_name: "Gucab",
  },
  {
    barangay_id: 4463,
    municipality_id: 172,
    barangay_name: "Gumbauan",
  },
  {
    barangay_id: 4464,
    municipality_id: 172,
    barangay_name: "Ipil",
  },
  {
    barangay_id: 4465,
    municipality_id: 172,
    barangay_name: "Libertad",
  },
  {
    barangay_id: 4466,
    municipality_id: 172,
    barangay_name: "Mabbayad",
  },
  {
    barangay_id: 4467,
    municipality_id: 172,
    barangay_name: "Mabuhay",
  },
  {
    barangay_id: 4468,
    municipality_id: 172,
    barangay_name: "Madadamian",
  },
  {
    barangay_id: 4469,
    municipality_id: 172,
    barangay_name: "Magleticia",
  },
  {
    barangay_id: 4470,
    municipality_id: 172,
    barangay_name: "Malibago",
  },
  {
    barangay_id: 4471,
    municipality_id: 172,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 4472,
    municipality_id: 172,
    barangay_name: "Malitao",
  },
  {
    barangay_id: 4473,
    municipality_id: 172,
    barangay_name: "Narra",
  },
  {
    barangay_id: 4474,
    municipality_id: 172,
    barangay_name: "Nilumisu",
  },
  {
    barangay_id: 4475,
    municipality_id: 172,
    barangay_name: "Pag-asa",
  },
  {
    barangay_id: 4476,
    municipality_id: 172,
    barangay_name: "Pangal Norte",
  },
  {
    barangay_id: 4477,
    municipality_id: 172,
    barangay_name: "Pangal Sur",
  },
  {
    barangay_id: 4478,
    municipality_id: 172,
    barangay_name: "Rumang-ay",
  },
  {
    barangay_id: 4479,
    municipality_id: 172,
    barangay_name: "Salay",
  },
  {
    barangay_id: 4480,
    municipality_id: 172,
    barangay_name: "Salvacion",
  },
  {
    barangay_id: 4482,
    municipality_id: 172,
    barangay_name: "San Antonio Minit",
  },
  {
    barangay_id: 4481,
    municipality_id: 172,
    barangay_name: "San Antonio Ugad",
  },
  {
    barangay_id: 4483,
    municipality_id: 172,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 4484,
    municipality_id: 172,
    barangay_name: "San Fabian",
  },
  {
    barangay_id: 4485,
    municipality_id: 172,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 4486,
    municipality_id: 172,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 4487,
    municipality_id: 172,
    barangay_name: "San Manuel",
  },
  {
    barangay_id: 4488,
    municipality_id: 172,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 4489,
    municipality_id: 172,
    barangay_name: "San Salvador",
  },
  {
    barangay_id: 4490,
    municipality_id: 172,
    barangay_name: "Santa Ana",
  },
  {
    barangay_id: 4491,
    municipality_id: 172,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 4492,
    municipality_id: 172,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 4493,
    municipality_id: 172,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 4494,
    municipality_id: 172,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 4496,
    municipality_id: 172,
    barangay_name: "Silauan Norte (Pob.)",
  },
  {
    barangay_id: 4495,
    municipality_id: 172,
    barangay_name: "Silauan Sur (Pob.)",
  },
  {
    barangay_id: 4497,
    municipality_id: 172,
    barangay_name: "Sinabbaran",
  },
  {
    barangay_id: 4498,
    municipality_id: 172,
    barangay_name: "Soyung",
  },
  {
    barangay_id: 4499,
    municipality_id: 172,
    barangay_name: "Taggappan",
  },
  {
    barangay_id: 4500,
    municipality_id: 172,
    barangay_name: "Tuguegarao",
  },
  {
    barangay_id: 4501,
    municipality_id: 172,
    barangay_name: "Villa Campo",
  },
  {
    barangay_id: 4502,
    municipality_id: 172,
    barangay_name: "Villa Fermin",
  },
  {
    barangay_id: 4503,
    municipality_id: 172,
    barangay_name: "Villa Rey",
  },
  {
    barangay_id: 4504,
    municipality_id: 172,
    barangay_name: "Villa Victoria",
  },
  {
    barangay_id: 4507,
    municipality_id: 173,
    barangay_name: "Barcolan",
  },
  {
    barangay_id: 4508,
    municipality_id: 173,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 4509,
    municipality_id: 173,
    barangay_name: "Dammao",
  },
  {
    barangay_id: 4516,
    municipality_id: 173,
    barangay_name: "District I (Pob.)",
  },
  {
    barangay_id: 4517,
    municipality_id: 173,
    barangay_name: "District II (Pob.)",
  },
  {
    barangay_id: 4518,
    municipality_id: 173,
    barangay_name: "District III (Pob.)",
  },
  {
    barangay_id: 4510,
    municipality_id: 173,
    barangay_name: "Furao",
  },
  {
    barangay_id: 4511,
    municipality_id: 173,
    barangay_name: "Guibang",
  },
  {
    barangay_id: 4512,
    municipality_id: 173,
    barangay_name: "Lenzon",
  },
  {
    barangay_id: 4513,
    municipality_id: 173,
    barangay_name: "Linglingay",
  },
  {
    barangay_id: 4514,
    municipality_id: 173,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 4515,
    municipality_id: 173,
    barangay_name: "Pintor",
  },
  {
    barangay_id: 4519,
    municipality_id: 173,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 4520,
    municipality_id: 173,
    barangay_name: "Songsong",
  },
  {
    barangay_id: 4521,
    municipality_id: 173,
    barangay_name: "Union",
  },
  {
    barangay_id: 4522,
    municipality_id: 173,
    barangay_name: "Upi",
  },
  {
    barangay_id: 4524,
    municipality_id: 174,
    barangay_name: "Aggasian",
  },
  {
    barangay_id: 4525,
    municipality_id: 174,
    barangay_name: "Alibagu",
  },
  {
    barangay_id: 4526,
    municipality_id: 174,
    barangay_name: "Allinguigan 1st",
  },
  {
    barangay_id: 4527,
    municipality_id: 174,
    barangay_name: "Allinguigan 2nd",
  },
  {
    barangay_id: 4528,
    municipality_id: 174,
    barangay_name: "Allinguigan 3rd",
  },
  {
    barangay_id: 4529,
    municipality_id: 174,
    barangay_name: "Arusip",
  },
  {
    barangay_id: 4530,
    municipality_id: 174,
    barangay_name: "Baculod (Pob.)",
  },
  {
    barangay_id: 4610,
    municipality_id: 174,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 4531,
    municipality_id: 174,
    barangay_name: "Bagumbayan (Pob.)",
  },
  {
    barangay_id: 4532,
    municipality_id: 174,
    barangay_name: "Baligatan",
  },
  {
    barangay_id: 4533,
    municipality_id: 174,
    barangay_name: "Ballacong",
  },
  {
    barangay_id: 4534,
    municipality_id: 174,
    barangay_name: "Bangag",
  },
  {
    barangay_id: 4536,
    municipality_id: 174,
    barangay_name: "Batong-Labang",
  },
  {
    barangay_id: 4537,
    municipality_id: 174,
    barangay_name: "Bigao",
  },
  {
    barangay_id: 4539,
    municipality_id: 174,
    barangay_name: "Cabannungan 1st",
  },
  {
    barangay_id: 4540,
    municipality_id: 174,
    barangay_name: "Cabannungan 2nd",
  },
  {
    barangay_id: 4563,
    municipality_id: 174,
    barangay_name: "Cabeseria 10",
  },
  {
    barangay_id: 4555,
    municipality_id: 174,
    barangay_name: "Cabeseria 14 and 16",
  },
  {
    barangay_id: 4596,
    municipality_id: 174,
    barangay_name: "Cabeseria 17 and 21",
  },
  {
    barangay_id: 4542,
    municipality_id: 174,
    barangay_name: "Cabeseria 19",
  },
  {
    barangay_id: 4556,
    municipality_id: 174,
    barangay_name: "Cabeseria 2",
  },
  {
    barangay_id: 4586,
    municipality_id: 174,
    barangay_name: "Cabeseria 22",
  },
  {
    barangay_id: 4545,
    municipality_id: 174,
    barangay_name: "Cabeseria 23",
  },
  {
    barangay_id: 4543,
    municipality_id: 174,
    barangay_name: "Cabeseria 25",
  },
  {
    barangay_id: 4523,
    municipality_id: 174,
    barangay_name: "Cabeseria 27",
  },
  {
    barangay_id: 4544,
    municipality_id: 174,
    barangay_name: "Cabeseria 3",
  },
  {
    barangay_id: 4538,
    municipality_id: 174,
    barangay_name: "Cabeseria 4",
  },
  {
    barangay_id: 4535,
    municipality_id: 174,
    barangay_name: "Cabeseria 5",
  },
  {
    barangay_id: 4541,
    municipality_id: 174,
    barangay_name: "Cabeseria 6 & 24",
  },
  {
    barangay_id: 4578,
    municipality_id: 174,
    barangay_name: "Cabeseria 7",
  },
  {
    barangay_id: 4552,
    municipality_id: 174,
    barangay_name: "Cabeseria 9 and 11",
  },
  {
    barangay_id: 4546,
    municipality_id: 174,
    barangay_name: "Cadu",
  },
  {
    barangay_id: 4547,
    municipality_id: 174,
    barangay_name: "Calamagui 1st",
  },
  {
    barangay_id: 4548,
    municipality_id: 174,
    barangay_name: "Calamagui 2nd",
  },
  {
    barangay_id: 4549,
    municipality_id: 174,
    barangay_name: "Camunatan",
  },
  {
    barangay_id: 4550,
    municipality_id: 174,
    barangay_name: "Capellan",
  },
  {
    barangay_id: 4551,
    municipality_id: 174,
    barangay_name: "Capo",
  },
  {
    barangay_id: 4553,
    municipality_id: 174,
    barangay_name: "Carikkikan Norte",
  },
  {
    barangay_id: 4554,
    municipality_id: 174,
    barangay_name: "Carikkikan Sur",
  },
  {
    barangay_id: 4589,
    municipality_id: 174,
    barangay_name: "Centro - San Antonio",
  },
  {
    barangay_id: 4609,
    municipality_id: 174,
    barangay_name: "Centro Poblacion",
  },
  {
    barangay_id: 4557,
    municipality_id: 174,
    barangay_name: "Fugu",
  },
  {
    barangay_id: 4558,
    municipality_id: 174,
    barangay_name: "Fuyo",
  },
  {
    barangay_id: 4559,
    municipality_id: 174,
    barangay_name: "Gayong-Gayong Norte",
  },
  {
    barangay_id: 4560,
    municipality_id: 174,
    barangay_name: "Gayong-Gayong Sur",
  },
  {
    barangay_id: 4561,
    municipality_id: 174,
    barangay_name: "Guinatan",
  },
  {
    barangay_id: 4611,
    municipality_id: 174,
    barangay_name: "Imelda Bliss Village",
  },
  {
    barangay_id: 4562,
    municipality_id: 174,
    barangay_name: "Lullutan",
  },
  {
    barangay_id: 4564,
    municipality_id: 174,
    barangay_name: "Malalam",
  },
  {
    barangay_id: 4565,
    municipality_id: 174,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 4566,
    municipality_id: 174,
    barangay_name: "Manaring",
  },
  {
    barangay_id: 4567,
    municipality_id: 174,
    barangay_name: "Mangcuram",
  },
  {
    barangay_id: 4569,
    municipality_id: 174,
    barangay_name: "Marana I",
  },
  {
    barangay_id: 4570,
    municipality_id: 174,
    barangay_name: "Marana II",
  },
  {
    barangay_id: 4571,
    municipality_id: 174,
    barangay_name: "Marana III",
  },
  {
    barangay_id: 4572,
    municipality_id: 174,
    barangay_name: "Minabang",
  },
  {
    barangay_id: 4573,
    municipality_id: 174,
    barangay_name: "Morado",
  },
  {
    barangay_id: 4574,
    municipality_id: 174,
    barangay_name: "Naguilian Norte",
  },
  {
    barangay_id: 4575,
    municipality_id: 174,
    barangay_name: "Naguilian Sur",
  },
  {
    barangay_id: 4576,
    municipality_id: 174,
    barangay_name: "Namnama",
  },
  {
    barangay_id: 4577,
    municipality_id: 174,
    barangay_name: "Nanaguan",
  },
  {
    barangay_id: 4579,
    municipality_id: 174,
    barangay_name: "Osmeña",
  },
  {
    barangay_id: 4580,
    municipality_id: 174,
    barangay_name: "Paliueg",
  },
  {
    barangay_id: 4581,
    municipality_id: 174,
    barangay_name: "Pasa",
  },
  {
    barangay_id: 4582,
    municipality_id: 174,
    barangay_name: "Pilar",
  },
  {
    barangay_id: 4583,
    municipality_id: 174,
    barangay_name: "Quimalabasa",
  },
  {
    barangay_id: 4584,
    municipality_id: 174,
    barangay_name: "Rang-ayan",
  },
  {
    barangay_id: 4585,
    municipality_id: 174,
    barangay_name: "Rugao",
  },
  {
    barangay_id: 4587,
    municipality_id: 174,
    barangay_name: "Salindingan",
  },
  {
    barangay_id: 4588,
    municipality_id: 174,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 4590,
    municipality_id: 174,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 4591,
    municipality_id: 174,
    barangay_name: "San Ignacio",
  },
  {
    barangay_id: 4592,
    municipality_id: 174,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 4593,
    municipality_id: 174,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 4594,
    municipality_id: 174,
    barangay_name: "San Lorenzo",
  },
  {
    barangay_id: 4595,
    municipality_id: 174,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 4612,
    municipality_id: 174,
    barangay_name: "San Rodrigo",
  },
  {
    barangay_id: 4597,
    municipality_id: 174,
    barangay_name: "San Vicente (Pob.)",
  },
  {
    barangay_id: 4598,
    municipality_id: 174,
    barangay_name: "Santa Barbara (Pob.)",
  },
  {
    barangay_id: 4599,
    municipality_id: 174,
    barangay_name: "Santa Catalina",
  },
  {
    barangay_id: 4600,
    municipality_id: 174,
    barangay_name: "Santa Isabel Norte",
  },
  {
    barangay_id: 4601,
    municipality_id: 174,
    barangay_name: "Santa Isabel Sur",
  },
  {
    barangay_id: 4613,
    municipality_id: 174,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 4602,
    municipality_id: 174,
    barangay_name: "Santa Victoria",
  },
  {
    barangay_id: 4603,
    municipality_id: 174,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 4604,
    municipality_id: 174,
    barangay_name: "Siffu",
  },
  {
    barangay_id: 4605,
    municipality_id: 174,
    barangay_name: "Sindon Bayabo",
  },
  {
    barangay_id: 4606,
    municipality_id: 174,
    barangay_name: "Sindon Maride",
  },
  {
    barangay_id: 4607,
    municipality_id: 174,
    barangay_name: "Sipay",
  },
  {
    barangay_id: 4608,
    municipality_id: 174,
    barangay_name: "Tangcul",
  },
  {
    barangay_id: 4568,
    municipality_id: 174,
    barangay_name: "Villa Imelda",
  },
  {
    barangay_id: 4614,
    municipality_id: 175,
    barangay_name: "Abulan",
  },
  {
    barangay_id: 4615,
    municipality_id: 175,
    barangay_name: "Addalam",
  },
  {
    barangay_id: 4616,
    municipality_id: 175,
    barangay_name: "Arubub",
  },
  {
    barangay_id: 4617,
    municipality_id: 175,
    barangay_name: "Bannawag",
  },
  {
    barangay_id: 4618,
    municipality_id: 175,
    barangay_name: "Bantay",
  },
  {
    barangay_id: 4619,
    municipality_id: 175,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 4620,
    municipality_id: 175,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 4621,
    municipality_id: 175,
    barangay_name: "Barangcuag",
  },
  {
    barangay_id: 4622,
    municipality_id: 175,
    barangay_name: "Dalibubon",
  },
  {
    barangay_id: 4623,
    municipality_id: 175,
    barangay_name: "Daligan",
  },
  {
    barangay_id: 4624,
    municipality_id: 175,
    barangay_name: "Diarao",
  },
  {
    barangay_id: 4625,
    municipality_id: 175,
    barangay_name: "Dibuluan",
  },
  {
    barangay_id: 4626,
    municipality_id: 175,
    barangay_name: "Dicamay I",
  },
  {
    barangay_id: 4627,
    municipality_id: 175,
    barangay_name: "Dicamay II",
  },
  {
    barangay_id: 4628,
    municipality_id: 175,
    barangay_name: "Dipangit",
  },
  {
    barangay_id: 4629,
    municipality_id: 175,
    barangay_name: "Disimpit",
  },
  {
    barangay_id: 4630,
    municipality_id: 175,
    barangay_name: "Divinan",
  },
  {
    barangay_id: 4631,
    municipality_id: 175,
    barangay_name: "Dumawing",
  },
  {
    barangay_id: 4632,
    municipality_id: 175,
    barangay_name: "Fugu",
  },
  {
    barangay_id: 4633,
    municipality_id: 175,
    barangay_name: "Lacab",
  },
  {
    barangay_id: 4634,
    municipality_id: 175,
    barangay_name: "Linamanan",
  },
  {
    barangay_id: 4635,
    municipality_id: 175,
    barangay_name: "Linomot",
  },
  {
    barangay_id: 4636,
    municipality_id: 175,
    barangay_name: "Malannit",
  },
  {
    barangay_id: 4637,
    municipality_id: 175,
    barangay_name: "Minuri",
  },
  {
    barangay_id: 4638,
    municipality_id: 175,
    barangay_name: "Namnama",
  },
  {
    barangay_id: 4639,
    municipality_id: 175,
    barangay_name: "Napaliong",
  },
  {
    barangay_id: 4640,
    municipality_id: 175,
    barangay_name: "Palagao",
  },
  {
    barangay_id: 4641,
    municipality_id: 175,
    barangay_name: "Papan Este",
  },
  {
    barangay_id: 4642,
    municipality_id: 175,
    barangay_name: "Papan Weste",
  },
  {
    barangay_id: 4643,
    municipality_id: 175,
    barangay_name: "Payac",
  },
  {
    barangay_id: 4644,
    municipality_id: 175,
    barangay_name: "Pongpongan",
  },
  {
    barangay_id: 4645,
    municipality_id: 175,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 4646,
    municipality_id: 175,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 4647,
    municipality_id: 175,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 4648,
    municipality_id: 175,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 4649,
    municipality_id: 175,
    barangay_name: "San Sebastian",
  },
  {
    barangay_id: 4650,
    municipality_id: 175,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 4651,
    municipality_id: 175,
    barangay_name: "Santa Isabel",
  },
  {
    barangay_id: 4652,
    municipality_id: 175,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 4653,
    municipality_id: 175,
    barangay_name: "Tupax",
  },
  {
    barangay_id: 4654,
    municipality_id: 175,
    barangay_name: "Usol",
  },
  {
    barangay_id: 4655,
    municipality_id: 175,
    barangay_name: "Villa Bello",
  },
  {
    barangay_id: 4656,
    municipality_id: 176,
    barangay_name: "Bustamante",
  },
  {
    barangay_id: 4657,
    municipality_id: 176,
    barangay_name: "Centro 1 (Pob.)",
  },
  {
    barangay_id: 4658,
    municipality_id: 176,
    barangay_name: "Centro 2 (Pob.)",
  },
  {
    barangay_id: 4659,
    municipality_id: 176,
    barangay_name: "Centro 3 (Pob.)",
  },
  {
    barangay_id: 4660,
    municipality_id: 176,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 4661,
    municipality_id: 176,
    barangay_name: "Dadap",
  },
  {
    barangay_id: 4662,
    municipality_id: 176,
    barangay_name: "Harana",
  },
  {
    barangay_id: 4663,
    municipality_id: 176,
    barangay_name: "Lalog 1",
  },
  {
    barangay_id: 4664,
    municipality_id: 176,
    barangay_name: "Lalog 2",
  },
  {
    barangay_id: 4665,
    municipality_id: 176,
    barangay_name: "Luyao",
  },
  {
    barangay_id: 4666,
    municipality_id: 176,
    barangay_name: "Macañao",
  },
  {
    barangay_id: 4667,
    municipality_id: 176,
    barangay_name: "Macugay",
  },
  {
    barangay_id: 4668,
    municipality_id: 176,
    barangay_name: "Mambabanga",
  },
  {
    barangay_id: 4669,
    municipality_id: 176,
    barangay_name: "Pulay",
  },
  {
    barangay_id: 4670,
    municipality_id: 176,
    barangay_name: "Puroc",
  },
  {
    barangay_id: 4671,
    municipality_id: 176,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 4672,
    municipality_id: 176,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 4673,
    municipality_id: 176,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 4674,
    municipality_id: 176,
    barangay_name: "Union Kalinga",
  },
  {
    barangay_id: 4683,
    municipality_id: 177,
    barangay_name: "Aplaya",
  },
  {
    barangay_id: 4682,
    municipality_id: 177,
    barangay_name: "Canadam",
  },
  {
    barangay_id: 4675,
    municipality_id: 177,
    barangay_name: "Diana",
  },
  {
    barangay_id: 4676,
    municipality_id: 177,
    barangay_name: "Eleonor (Pob.)",
  },
  {
    barangay_id: 4677,
    municipality_id: 177,
    barangay_name: "Fely (Pob.)",
  },
  {
    barangay_id: 4678,
    municipality_id: 177,
    barangay_name: "Lita (Pob.)",
  },
  {
    barangay_id: 4681,
    municipality_id: 177,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 4680,
    municipality_id: 177,
    barangay_name: "Minanga",
  },
  {
    barangay_id: 4679,
    municipality_id: 177,
    barangay_name: "Reina Mercedes",
  },
  {
    barangay_id: 4684,
    municipality_id: 177,
    barangay_name: "Santa Marina",
  },
  {
    barangay_id: 4685,
    municipality_id: 178,
    barangay_name: "Aga",
  },
  {
    barangay_id: 4686,
    municipality_id: 178,
    barangay_name: "Andarayan",
  },
  {
    barangay_id: 4687,
    municipality_id: 178,
    barangay_name: "Aneg",
  },
  {
    barangay_id: 4688,
    municipality_id: 178,
    barangay_name: "Bayabo",
  },
  {
    barangay_id: 4689,
    municipality_id: 178,
    barangay_name: "Calinaoan Sur",
  },
  {
    barangay_id: 4713,
    municipality_id: 178,
    barangay_name: "Caloocan",
  },
  {
    barangay_id: 4690,
    municipality_id: 178,
    barangay_name: "Capitol",
  },
  {
    barangay_id: 4691,
    municipality_id: 178,
    barangay_name: "Carmencita",
  },
  {
    barangay_id: 4692,
    municipality_id: 178,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 4693,
    municipality_id: 178,
    barangay_name: "Maui",
  },
  {
    barangay_id: 4694,
    municipality_id: 178,
    barangay_name: "Quibal",
  },
  {
    barangay_id: 4695,
    municipality_id: 178,
    barangay_name: "Ragan Almacen",
  },
  {
    barangay_id: 4696,
    municipality_id: 178,
    barangay_name: "Ragan Norte",
  },
  {
    barangay_id: 4697,
    municipality_id: 178,
    barangay_name: "Ragan Sur (Pob.)",
  },
  {
    barangay_id: 4698,
    municipality_id: 178,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 4699,
    municipality_id: 178,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 4700,
    municipality_id: 178,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 4701,
    municipality_id: 178,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 4702,
    municipality_id: 178,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 4703,
    municipality_id: 178,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 4704,
    municipality_id: 178,
    barangay_name: "San Macario",
  },
  {
    barangay_id: 4705,
    municipality_id: 178,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 4706,
    municipality_id: 178,
    barangay_name: "San Patricio",
  },
  {
    barangay_id: 4707,
    municipality_id: 178,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 4708,
    municipality_id: 178,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 4709,
    municipality_id: 178,
    barangay_name: "Santor",
  },
  {
    barangay_id: 4710,
    municipality_id: 178,
    barangay_name: "Villa Luz",
  },
  {
    barangay_id: 4711,
    municipality_id: 178,
    barangay_name: "Villa Pereda",
  },
  {
    barangay_id: 4712,
    municipality_id: 178,
    barangay_name: "Visitacion",
  },
  {
    barangay_id: 4715,
    municipality_id: 179,
    barangay_name: "Binmonton",
  },
  {
    barangay_id: 4716,
    municipality_id: 179,
    barangay_name: "Casili",
  },
  {
    barangay_id: 4717,
    municipality_id: 179,
    barangay_name: "Centro I (Pob.)",
  },
  {
    barangay_id: 4722,
    municipality_id: 179,
    barangay_name: "Centro II (Pob.)",
  },
  {
    barangay_id: 4718,
    municipality_id: 179,
    barangay_name: "Holy Friday",
  },
  {
    barangay_id: 4719,
    municipality_id: 179,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 4720,
    municipality_id: 179,
    barangay_name: "Manano",
  },
  {
    barangay_id: 4721,
    municipality_id: 179,
    barangay_name: "Olango",
  },
  {
    barangay_id: 4723,
    municipality_id: 179,
    barangay_name: "Rang-ayan",
  },
  {
    barangay_id: 4724,
    municipality_id: 179,
    barangay_name: "San Jose Norte I",
  },
  {
    barangay_id: 4729,
    municipality_id: 179,
    barangay_name: "San Jose Norte II",
  },
  {
    barangay_id: 4725,
    municipality_id: 179,
    barangay_name: "San Jose Sur",
  },
  {
    barangay_id: 4714,
    municipality_id: 179,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 4730,
    municipality_id: 179,
    barangay_name: "San Ramon",
  },
  {
    barangay_id: 4726,
    municipality_id: 179,
    barangay_name: "Siempre Viva Norte",
  },
  {
    barangay_id: 4731,
    municipality_id: 179,
    barangay_name: "Siempre Viva Sur",
  },
  {
    barangay_id: 4727,
    municipality_id: 179,
    barangay_name: "Trinidad",
  },
  {
    barangay_id: 4728,
    municipality_id: 179,
    barangay_name: "Victoria",
  },
  {
    barangay_id: 4732,
    municipality_id: 180,
    barangay_name: "Aguinaldo",
  },
  {
    barangay_id: 4733,
    municipality_id: 180,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 4734,
    municipality_id: 180,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 4735,
    municipality_id: 180,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 4736,
    municipality_id: 180,
    barangay_name: "Flores",
  },
  {
    barangay_id: 4737,
    municipality_id: 180,
    barangay_name: "La Union",
  },
  {
    barangay_id: 4738,
    municipality_id: 180,
    barangay_name: "Magsaysay (Pob.)",
  },
  {
    barangay_id: 4739,
    municipality_id: 180,
    barangay_name: "Manaring",
  },
  {
    barangay_id: 4740,
    municipality_id: 180,
    barangay_name: "Mansibang",
  },
  {
    barangay_id: 4741,
    municipality_id: 180,
    barangay_name: "Minallo",
  },
  {
    barangay_id: 4742,
    municipality_id: 180,
    barangay_name: "Minanga",
  },
  {
    barangay_id: 4743,
    municipality_id: 180,
    barangay_name: "Palattao",
  },
  {
    barangay_id: 4744,
    municipality_id: 180,
    barangay_name: "Quezon (Pob.)",
  },
  {
    barangay_id: 4745,
    municipality_id: 180,
    barangay_name: "Quinalabasa",
  },
  {
    barangay_id: 4746,
    municipality_id: 180,
    barangay_name: "Quirino (Pob.)",
  },
  {
    barangay_id: 4747,
    municipality_id: 180,
    barangay_name: "Rangayan",
  },
  {
    barangay_id: 4748,
    municipality_id: 180,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 4749,
    municipality_id: 180,
    barangay_name: "Roxas (Pob.)",
  },
  {
    barangay_id: 4750,
    municipality_id: 180,
    barangay_name: "San Manuel",
  },
  {
    barangay_id: 4756,
    municipality_id: 180,
    barangay_name: "Santa Victoria",
  },
  {
    barangay_id: 4751,
    municipality_id: 180,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 4752,
    municipality_id: 180,
    barangay_name: "Sunlife",
  },
  {
    barangay_id: 4753,
    municipality_id: 180,
    barangay_name: "Surcoc",
  },
  {
    barangay_id: 4754,
    municipality_id: 180,
    barangay_name: "Tomines",
  },
  {
    barangay_id: 4755,
    municipality_id: 180,
    barangay_name: "Villa Paz",
  },
  {
    barangay_id: 4771,
    municipality_id: 181,
    barangay_name: "Alomanay",
  },
  {
    barangay_id: 4757,
    municipality_id: 181,
    barangay_name: "Bisag",
  },
  {
    barangay_id: 4770,
    municipality_id: 181,
    barangay_name: "Culasi",
  },
  {
    barangay_id: 4758,
    municipality_id: 181,
    barangay_name: "Dialaoyao",
  },
  {
    barangay_id: 4766,
    municipality_id: 181,
    barangay_name: "Dicabisagan East (Pob.)",
  },
  {
    barangay_id: 4767,
    municipality_id: 181,
    barangay_name: "Dicabisagan West (Pob.)",
  },
  {
    barangay_id: 4759,
    municipality_id: 181,
    barangay_name: "Dicadyuan",
  },
  {
    barangay_id: 4772,
    municipality_id: 181,
    barangay_name: "Diddadungan",
  },
  {
    barangay_id: 4760,
    municipality_id: 181,
    barangay_name: "Didiyan",
  },
  {
    barangay_id: 4761,
    municipality_id: 181,
    barangay_name: "Dimalicu-licu",
  },
  {
    barangay_id: 4762,
    municipality_id: 181,
    barangay_name: "Dimasari",
  },
  {
    barangay_id: 4763,
    municipality_id: 181,
    barangay_name: "Dimatican",
  },
  {
    barangay_id: 4764,
    municipality_id: 181,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 4765,
    municipality_id: 181,
    barangay_name: "Marikit",
  },
  {
    barangay_id: 4773,
    municipality_id: 181,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 4768,
    municipality_id: 181,
    barangay_name: "Santa Jacinta",
  },
  {
    barangay_id: 4769,
    municipality_id: 181,
    barangay_name: "Villa Robles",
  },
  {
    barangay_id: 4774,
    municipality_id: 182,
    barangay_name: "Abut",
  },
  {
    barangay_id: 4775,
    municipality_id: 182,
    barangay_name: "Alunan (Pob.)",
  },
  {
    barangay_id: 4776,
    municipality_id: 182,
    barangay_name: "Arellano (Pob.)",
  },
  {
    barangay_id: 4777,
    municipality_id: 182,
    barangay_name: "Aurora",
  },
  {
    barangay_id: 4778,
    municipality_id: 182,
    barangay_name: "Barucboc Norte",
  },
  {
    barangay_id: 4787,
    municipality_id: 182,
    barangay_name: "Calangigan",
  },
  {
    barangay_id: 4786,
    municipality_id: 182,
    barangay_name: "Dunmon",
  },
  {
    barangay_id: 4779,
    municipality_id: 182,
    barangay_name: "Estrada",
  },
  {
    barangay_id: 4781,
    municipality_id: 182,
    barangay_name: "Lepanto",
  },
  {
    barangay_id: 4782,
    municipality_id: 182,
    barangay_name: "Mangga",
  },
  {
    barangay_id: 4783,
    municipality_id: 182,
    barangay_name: "Minagbag",
  },
  {
    barangay_id: 4784,
    municipality_id: 182,
    barangay_name: "Samonte (Pob.)",
  },
  {
    barangay_id: 4788,
    municipality_id: 182,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 4780,
    municipality_id: 182,
    barangay_name: "Santos (Pob.)",
  },
  {
    barangay_id: 4785,
    municipality_id: 182,
    barangay_name: "Turod",
  },
  {
    barangay_id: 4789,
    municipality_id: 183,
    barangay_name: "Binarzang",
  },
  {
    barangay_id: 4790,
    municipality_id: 183,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 4791,
    municipality_id: 183,
    barangay_name: "Camaal",
  },
  {
    barangay_id: 4792,
    municipality_id: 183,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 4793,
    municipality_id: 183,
    barangay_name: "Luna",
  },
  {
    barangay_id: 4794,
    municipality_id: 183,
    barangay_name: "Manaoag",
  },
  {
    barangay_id: 4795,
    municipality_id: 183,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 4796,
    municipality_id: 183,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 4797,
    municipality_id: 183,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 4798,
    municipality_id: 183,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 4799,
    municipality_id: 183,
    barangay_name: "San Mateo",
  },
  {
    barangay_id: 4800,
    municipality_id: 183,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 4801,
    municipality_id: 183,
    barangay_name: "Santa Catalina",
  },
  {
    barangay_id: 4802,
    municipality_id: 183,
    barangay_name: "Santa Lucia (Pob.)",
  },
  {
    barangay_id: 4803,
    municipality_id: 183,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 4804,
    municipality_id: 183,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 4805,
    municipality_id: 183,
    barangay_name: "Sinait",
  },
  {
    barangay_id: 4806,
    municipality_id: 183,
    barangay_name: "Suerte",
  },
  {
    barangay_id: 4807,
    municipality_id: 183,
    barangay_name: "Villa Bulusan",
  },
  {
    barangay_id: 4808,
    municipality_id: 183,
    barangay_name: "Villa Miguel",
  },
  {
    barangay_id: 4809,
    municipality_id: 183,
    barangay_name: "Vintar",
  },
  {
    barangay_id: 4810,
    municipality_id: 184,
    barangay_name: "Ambatali",
  },
  {
    barangay_id: 4811,
    municipality_id: 184,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 4812,
    municipality_id: 184,
    barangay_name: "Bugallon Norte",
  },
  {
    barangay_id: 4828,
    municipality_id: 184,
    barangay_name: "Bugallon Proper (Pob.)",
  },
  {
    barangay_id: 4813,
    municipality_id: 184,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 4827,
    municipality_id: 184,
    barangay_name: "General Aguinaldo",
  },
  {
    barangay_id: 4814,
    municipality_id: 184,
    barangay_name: "Nagbacalan",
  },
  {
    barangay_id: 4815,
    municipality_id: 184,
    barangay_name: "Oscariz",
  },
  {
    barangay_id: 4816,
    municipality_id: 184,
    barangay_name: "Pabil",
  },
  {
    barangay_id: 4817,
    municipality_id: 184,
    barangay_name: "Pagrang-ayan",
  },
  {
    barangay_id: 4818,
    municipality_id: 184,
    barangay_name: "Planas",
  },
  {
    barangay_id: 4819,
    municipality_id: 184,
    barangay_name: "Purok ni Bulan",
  },
  {
    barangay_id: 4820,
    municipality_id: 184,
    barangay_name: "Raniag",
  },
  {
    barangay_id: 4821,
    municipality_id: 184,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 4822,
    municipality_id: 184,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 4823,
    municipality_id: 184,
    barangay_name: "San Sebastian",
  },
  {
    barangay_id: 4824,
    municipality_id: 184,
    barangay_name: "Villa Beltran",
  },
  {
    barangay_id: 4825,
    municipality_id: 184,
    barangay_name: "Villa Carmen",
  },
  {
    barangay_id: 4826,
    municipality_id: 184,
    barangay_name: "Villa Marcos",
  },
  {
    barangay_id: 4829,
    municipality_id: 185,
    barangay_name: "Banquero",
  },
  {
    barangay_id: 4830,
    municipality_id: 185,
    barangay_name: "Binarsang",
  },
  {
    barangay_id: 4831,
    municipality_id: 185,
    barangay_name: "Cutog Grande",
  },
  {
    barangay_id: 4832,
    municipality_id: 185,
    barangay_name: "Cutog Pequeño",
  },
  {
    barangay_id: 4833,
    municipality_id: 185,
    barangay_name: "Dangan",
  },
  {
    barangay_id: 4834,
    municipality_id: 185,
    barangay_name: "District I (Pob.)",
  },
  {
    barangay_id: 4835,
    municipality_id: 185,
    barangay_name: "District II (Pob.)",
  },
  {
    barangay_id: 4836,
    municipality_id: 185,
    barangay_name: "Labinab Grande (Pob.)",
  },
  {
    barangay_id: 4837,
    municipality_id: 185,
    barangay_name: "Labinab Pequeño (Pob.)",
  },
  {
    barangay_id: 4838,
    municipality_id: 185,
    barangay_name: "Mallalatang Grande",
  },
  {
    barangay_id: 4839,
    municipality_id: 185,
    barangay_name: "Mallalatang Tunggui",
  },
  {
    barangay_id: 4840,
    municipality_id: 185,
    barangay_name: "Napaccu Grande",
  },
  {
    barangay_id: 4841,
    municipality_id: 185,
    barangay_name: "Napaccu Pequeño",
  },
  {
    barangay_id: 4842,
    municipality_id: 185,
    barangay_name: "Salucong",
  },
  {
    barangay_id: 4848,
    municipality_id: 185,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 4843,
    municipality_id: 185,
    barangay_name: "Santor",
  },
  {
    barangay_id: 4844,
    municipality_id: 185,
    barangay_name: "Sinippil",
  },
  {
    barangay_id: 4845,
    municipality_id: 185,
    barangay_name: "Tallungan (Pob.)",
  },
  {
    barangay_id: 4846,
    municipality_id: 185,
    barangay_name: "Turod",
  },
  {
    barangay_id: 4847,
    municipality_id: 185,
    barangay_name: "Villador",
  },
  {
    barangay_id: 4849,
    municipality_id: 186,
    barangay_name: "Anao",
  },
  {
    barangay_id: 4857,
    municipality_id: 186,
    barangay_name: "Bantug (Pob.)",
  },
  {
    barangay_id: 4873,
    municipality_id: 186,
    barangay_name: "Doña Concha",
  },
  {
    barangay_id: 4850,
    municipality_id: 186,
    barangay_name: "Imbiao",
  },
  {
    barangay_id: 4851,
    municipality_id: 186,
    barangay_name: "Lanting",
  },
  {
    barangay_id: 4852,
    municipality_id: 186,
    barangay_name: "Lucban",
  },
  {
    barangay_id: 4858,
    municipality_id: 186,
    barangay_name: "Luna (Pob.)",
  },
  {
    barangay_id: 4853,
    municipality_id: 186,
    barangay_name: "Marcos",
  },
  {
    barangay_id: 4854,
    municipality_id: 186,
    barangay_name: "Masigun",
  },
  {
    barangay_id: 4870,
    municipality_id: 186,
    barangay_name: "Matusalem",
  },
  {
    barangay_id: 4871,
    municipality_id: 186,
    barangay_name: "Muñoz East",
  },
  {
    barangay_id: 4872,
    municipality_id: 186,
    barangay_name: "Muñoz West",
  },
  {
    barangay_id: 4859,
    municipality_id: 186,
    barangay_name: "Quiling",
  },
  {
    barangay_id: 4860,
    municipality_id: 186,
    barangay_name: "Rang-ayan",
  },
  {
    barangay_id: 4855,
    municipality_id: 186,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 4861,
    municipality_id: 186,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 4862,
    municipality_id: 186,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 4874,
    municipality_id: 186,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 4863,
    municipality_id: 186,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 4864,
    municipality_id: 186,
    barangay_name: "San Placido",
  },
  {
    barangay_id: 4865,
    municipality_id: 186,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 4866,
    municipality_id: 186,
    barangay_name: "Simimbaan",
  },
  {
    barangay_id: 4867,
    municipality_id: 186,
    barangay_name: "Sinamar",
  },
  {
    barangay_id: 4868,
    municipality_id: 186,
    barangay_name: "Sotero Nuesa",
  },
  {
    barangay_id: 4869,
    municipality_id: 186,
    barangay_name: "Villa Concepcion",
  },
  {
    barangay_id: 4856,
    municipality_id: 186,
    barangay_name: "Vira (Pob.)",
  },
  {
    barangay_id: 4875,
    municipality_id: 187,
    barangay_name: "Bautista",
  },
  {
    barangay_id: 4876,
    municipality_id: 187,
    barangay_name: "Calaocan",
  },
  {
    barangay_id: 4877,
    municipality_id: 187,
    barangay_name: "Dabubu Grande",
  },
  {
    barangay_id: 4878,
    municipality_id: 187,
    barangay_name: "Dabubu Pequeño",
  },
  {
    barangay_id: 4879,
    municipality_id: 187,
    barangay_name: "Dappig",
  },
  {
    barangay_id: 4880,
    municipality_id: 187,
    barangay_name: "Laoag",
  },
  {
    barangay_id: 4881,
    municipality_id: 187,
    barangay_name: "Mapalad",
  },
  {
    barangay_id: 4882,
    municipality_id: 187,
    barangay_name: "Masaya Centro (Pob.)",
  },
  {
    barangay_id: 4883,
    municipality_id: 187,
    barangay_name: "Masaya Norte",
  },
  {
    barangay_id: 4884,
    municipality_id: 187,
    barangay_name: "Masaya Sur",
  },
  {
    barangay_id: 4885,
    municipality_id: 187,
    barangay_name: "Nemmatan",
  },
  {
    barangay_id: 4886,
    municipality_id: 187,
    barangay_name: "Palacian",
  },
  {
    barangay_id: 4887,
    municipality_id: 187,
    barangay_name: "Panang",
  },
  {
    barangay_id: 4888,
    municipality_id: 187,
    barangay_name: "Quimalabasa Norte",
  },
  {
    barangay_id: 4889,
    municipality_id: 187,
    barangay_name: "Quimalabasa Sur",
  },
  {
    barangay_id: 4890,
    municipality_id: 187,
    barangay_name: "Rang-ay",
  },
  {
    barangay_id: 4891,
    municipality_id: 187,
    barangay_name: "Salay",
  },
  {
    barangay_id: 4892,
    municipality_id: 187,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 4893,
    municipality_id: 187,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 4894,
    municipality_id: 187,
    barangay_name: "Santos",
  },
  {
    barangay_id: 4895,
    municipality_id: 187,
    barangay_name: "Sinaoangan Norte",
  },
  {
    barangay_id: 4896,
    municipality_id: 187,
    barangay_name: "Sinaoangan Sur",
  },
  {
    barangay_id: 4897,
    municipality_id: 187,
    barangay_name: "Virgoneza",
  },
  {
    barangay_id: 4898,
    municipality_id: 188,
    barangay_name: "Anonang",
  },
  {
    barangay_id: 4899,
    municipality_id: 188,
    barangay_name: "Aringay",
  },
  {
    barangay_id: 4920,
    municipality_id: 188,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 4922,
    municipality_id: 188,
    barangay_name: "Calaoagan",
  },
  {
    barangay_id: 4900,
    municipality_id: 188,
    barangay_name: "Centro 1 (Pob.)",
  },
  {
    barangay_id: 4901,
    municipality_id: 188,
    barangay_name: "Centro 2 (Pob.)",
  },
  {
    barangay_id: 4902,
    municipality_id: 188,
    barangay_name: "Colorado",
  },
  {
    barangay_id: 4903,
    municipality_id: 188,
    barangay_name: "Dietban",
  },
  {
    barangay_id: 4904,
    municipality_id: 188,
    barangay_name: "Dingading",
  },
  {
    barangay_id: 4905,
    municipality_id: 188,
    barangay_name: "Dipacamo",
  },
  {
    barangay_id: 4906,
    municipality_id: 188,
    barangay_name: "Estrella",
  },
  {
    barangay_id: 4907,
    municipality_id: 188,
    barangay_name: "Guam",
  },
  {
    barangay_id: 4908,
    municipality_id: 188,
    barangay_name: "Nakar",
  },
  {
    barangay_id: 4909,
    municipality_id: 188,
    barangay_name: "Palawan",
  },
  {
    barangay_id: 4910,
    municipality_id: 188,
    barangay_name: "Progreso",
  },
  {
    barangay_id: 4911,
    municipality_id: 188,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 4921,
    municipality_id: 188,
    barangay_name: "San Francisco Norte",
  },
  {
    barangay_id: 4912,
    municipality_id: 188,
    barangay_name: "San Francisco Sur",
  },
  {
    barangay_id: 4913,
    municipality_id: 188,
    barangay_name: "San Mariano Norte",
  },
  {
    barangay_id: 4914,
    municipality_id: 188,
    barangay_name: "San Mariano Sur",
  },
  {
    barangay_id: 4923,
    municipality_id: 188,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 4915,
    municipality_id: 188,
    barangay_name: "Sinalugan",
  },
  {
    barangay_id: 4916,
    municipality_id: 188,
    barangay_name: "Villa Remedios",
  },
  {
    barangay_id: 4917,
    municipality_id: 188,
    barangay_name: "Villa Rose",
  },
  {
    barangay_id: 4918,
    municipality_id: 188,
    barangay_name: "Villa Sanchez",
  },
  {
    barangay_id: 4919,
    municipality_id: 188,
    barangay_name: "Villa Teresita",
  },
  {
    barangay_id: 4924,
    municipality_id: 189,
    barangay_name: "Camarag",
  },
  {
    barangay_id: 4925,
    municipality_id: 189,
    barangay_name: "Cebu",
  },
  {
    barangay_id: 4926,
    municipality_id: 189,
    barangay_name: "Gomez",
  },
  {
    barangay_id: 4927,
    municipality_id: 189,
    barangay_name: "Gud",
  },
  {
    barangay_id: 4928,
    municipality_id: 189,
    barangay_name: "Nagbukel",
  },
  {
    barangay_id: 4929,
    municipality_id: 189,
    barangay_name: "Patanad",
  },
  {
    barangay_id: 4930,
    municipality_id: 189,
    barangay_name: "Quezon",
  },
  {
    barangay_id: 4931,
    municipality_id: 189,
    barangay_name: "Ramos East",
  },
  {
    barangay_id: 4932,
    municipality_id: 189,
    barangay_name: "Ramos West",
  },
  {
    barangay_id: 4933,
    municipality_id: 189,
    barangay_name: "Rizal East (Pob.)",
  },
  {
    barangay_id: 4934,
    municipality_id: 189,
    barangay_name: "Rizal West (Pob.)",
  },
  {
    barangay_id: 4935,
    municipality_id: 189,
    barangay_name: "Victoria",
  },
  {
    barangay_id: 4936,
    municipality_id: 189,
    barangay_name: "Villaflor",
  },
  {
    barangay_id: 4937,
    municipality_id: 190,
    barangay_name: "Agliam",
  },
  {
    barangay_id: 4938,
    municipality_id: 190,
    barangay_name: "Babanuang",
  },
  {
    barangay_id: 4939,
    municipality_id: 190,
    barangay_name: "Cabaritan",
  },
  {
    barangay_id: 4940,
    municipality_id: 190,
    barangay_name: "Caraniogan",
  },
  {
    barangay_id: 4946,
    municipality_id: 190,
    barangay_name: "District 1 (Pob.)",
  },
  {
    barangay_id: 4947,
    municipality_id: 190,
    barangay_name: "District 2 (Pob.)",
  },
  {
    barangay_id: 4948,
    municipality_id: 190,
    barangay_name: "District 3 (Pob.)",
  },
  {
    barangay_id: 4949,
    municipality_id: 190,
    barangay_name: "District 4 (Pob.)",
  },
  {
    barangay_id: 4941,
    municipality_id: 190,
    barangay_name: "Eden",
  },
  {
    barangay_id: 4942,
    municipality_id: 190,
    barangay_name: "Malalinta",
  },
  {
    barangay_id: 4943,
    municipality_id: 190,
    barangay_name: "Mararigue",
  },
  {
    barangay_id: 4944,
    municipality_id: 190,
    barangay_name: "Nueva Era",
  },
  {
    barangay_id: 4945,
    municipality_id: 190,
    barangay_name: "Pisang",
  },
  {
    barangay_id: 4950,
    municipality_id: 190,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 4951,
    municipality_id: 190,
    barangay_name: "Sandiat Centro",
  },
  {
    barangay_id: 4952,
    municipality_id: 190,
    barangay_name: "Sandiat East",
  },
  {
    barangay_id: 4953,
    municipality_id: 190,
    barangay_name: "Sandiat West",
  },
  {
    barangay_id: 4954,
    municipality_id: 190,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 4955,
    municipality_id: 190,
    barangay_name: "Villanueva",
  },
  {
    barangay_id: 4956,
    municipality_id: 191,
    barangay_name: "Alibadabad",
  },
  {
    barangay_id: 4991,
    municipality_id: 191,
    barangay_name: "Balagan",
  },
  {
    barangay_id: 4957,
    municipality_id: 191,
    barangay_name: "Binatug",
  },
  {
    barangay_id: 4958,
    municipality_id: 191,
    barangay_name: "Bitabian",
  },
  {
    barangay_id: 4959,
    municipality_id: 191,
    barangay_name: "Buyasan",
  },
  {
    barangay_id: 4960,
    municipality_id: 191,
    barangay_name: "Cadsalan",
  },
  {
    barangay_id: 4961,
    municipality_id: 191,
    barangay_name: "Casala",
  },
  {
    barangay_id: 4962,
    municipality_id: 191,
    barangay_name: "Cataguing",
  },
  {
    barangay_id: 4963,
    municipality_id: 191,
    barangay_name: "Daragutan East",
  },
  {
    barangay_id: 4964,
    municipality_id: 191,
    barangay_name: "Daragutan West",
  },
  {
    barangay_id: 4965,
    municipality_id: 191,
    barangay_name: "Del Pilar",
  },
  {
    barangay_id: 4966,
    municipality_id: 191,
    barangay_name: "Dibuluan",
  },
  {
    barangay_id: 4967,
    municipality_id: 191,
    barangay_name: "Dicamay",
  },
  {
    barangay_id: 4968,
    municipality_id: 191,
    barangay_name: "Dipusu",
  },
  {
    barangay_id: 4969,
    municipality_id: 191,
    barangay_name: "Disulap",
  },
  {
    barangay_id: 4970,
    municipality_id: 191,
    barangay_name: "Disusuan",
  },
  {
    barangay_id: 4971,
    municipality_id: 191,
    barangay_name: "Gangalan",
  },
  {
    barangay_id: 4972,
    municipality_id: 191,
    barangay_name: "Ibujan",
  },
  {
    barangay_id: 4973,
    municipality_id: 191,
    barangay_name: "Libertad",
  },
  {
    barangay_id: 4974,
    municipality_id: 191,
    barangay_name: "Macayucayu",
  },
  {
    barangay_id: 4975,
    municipality_id: 191,
    barangay_name: "Mallabo",
  },
  {
    barangay_id: 4976,
    municipality_id: 191,
    barangay_name: "Marannao",
  },
  {
    barangay_id: 4977,
    municipality_id: 191,
    barangay_name: "Minanga",
  },
  {
    barangay_id: 4978,
    municipality_id: 191,
    barangay_name: "Old San Mariano",
  },
  {
    barangay_id: 4979,
    municipality_id: 191,
    barangay_name: "Palutan",
  },
  {
    barangay_id: 4980,
    municipality_id: 191,
    barangay_name: "Panninan",
  },
  {
    barangay_id: 4984,
    municipality_id: 191,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 4985,
    municipality_id: 191,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 4986,
    municipality_id: 191,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 4987,
    municipality_id: 191,
    barangay_name: "Santa Filomina",
  },
  {
    barangay_id: 4988,
    municipality_id: 191,
    barangay_name: "Tappa",
  },
  {
    barangay_id: 4989,
    municipality_id: 191,
    barangay_name: "Ueg",
  },
  {
    barangay_id: 4990,
    municipality_id: 191,
    barangay_name: "Zamora",
  },
  {
    barangay_id: 4981,
    municipality_id: 191,
    barangay_name: "Zone I (Pob.)",
  },
  {
    barangay_id: 4982,
    municipality_id: 191,
    barangay_name: "Zone II (Pob.)",
  },
  {
    barangay_id: 4983,
    municipality_id: 191,
    barangay_name: "Zone III (Pob.)",
  },
  {
    barangay_id: 4992,
    municipality_id: 192,
    barangay_name: "Bacareña",
  },
  {
    barangay_id: 4993,
    municipality_id: 192,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 5004,
    municipality_id: 192,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 5005,
    municipality_id: 192,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 5006,
    municipality_id: 192,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 5007,
    municipality_id: 192,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 4994,
    municipality_id: 192,
    barangay_name: "Bella Luz",
  },
  {
    barangay_id: 5023,
    municipality_id: 192,
    barangay_name: "Dagupan",
  },
  {
    barangay_id: 5024,
    municipality_id: 192,
    barangay_name: "Daramuangan Norte",
  },
  {
    barangay_id: 4995,
    municipality_id: 192,
    barangay_name: "Daramuangan Sur",
  },
  {
    barangay_id: 4996,
    municipality_id: 192,
    barangay_name: "Estrella",
  },
  {
    barangay_id: 4997,
    municipality_id: 192,
    barangay_name: "Gaddanan",
  },
  {
    barangay_id: 4998,
    municipality_id: 192,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 4999,
    municipality_id: 192,
    barangay_name: "Mapuroc",
  },
  {
    barangay_id: 5000,
    municipality_id: 192,
    barangay_name: "Marasat Grande",
  },
  {
    barangay_id: 5001,
    municipality_id: 192,
    barangay_name: "Marasat Pequeño",
  },
  {
    barangay_id: 5002,
    municipality_id: 192,
    barangay_name: "Old Centro I",
  },
  {
    barangay_id: 5003,
    municipality_id: 192,
    barangay_name: "Old Centro II",
  },
  {
    barangay_id: 5008,
    municipality_id: 192,
    barangay_name: "Salinungan East",
  },
  {
    barangay_id: 5009,
    municipality_id: 192,
    barangay_name: "Salinungan West",
  },
  {
    barangay_id: 5010,
    municipality_id: 192,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 5011,
    municipality_id: 192,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 5012,
    municipality_id: 192,
    barangay_name: "San Ignacio",
  },
  {
    barangay_id: 5013,
    municipality_id: 192,
    barangay_name: "San Manuel",
  },
  {
    barangay_id: 5014,
    municipality_id: 192,
    barangay_name: "San Marcos",
  },
  {
    barangay_id: 5015,
    municipality_id: 192,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 5016,
    municipality_id: 192,
    barangay_name: "Sinamar Norte",
  },
  {
    barangay_id: 5017,
    municipality_id: 192,
    barangay_name: "Sinamar Sur",
  },
  {
    barangay_id: 5018,
    municipality_id: 192,
    barangay_name: "Victoria",
  },
  {
    barangay_id: 5020,
    municipality_id: 192,
    barangay_name: "Villa Cruz",
  },
  {
    barangay_id: 5022,
    municipality_id: 192,
    barangay_name: "Villa Gamiao",
  },
  {
    barangay_id: 5021,
    municipality_id: 192,
    barangay_name: "Villa Magat",
  },
  {
    barangay_id: 5019,
    municipality_id: 192,
    barangay_name: "Villafuerte",
  },
  {
    barangay_id: 5025,
    municipality_id: 193,
    barangay_name: "Annanuman",
  },
  {
    barangay_id: 5026,
    municipality_id: 193,
    barangay_name: "Auitan",
  },
  {
    barangay_id: 5027,
    municipality_id: 193,
    barangay_name: "Ballacayu",
  },
  {
    barangay_id: 5028,
    municipality_id: 193,
    barangay_name: "Binguang",
  },
  {
    barangay_id: 5029,
    municipality_id: 193,
    barangay_name: "Bungad",
  },
  {
    barangay_id: 5031,
    municipality_id: 193,
    barangay_name: "Caddangan/Limbauan",
  },
  {
    barangay_id: 5032,
    municipality_id: 193,
    barangay_name: "Calamagui",
  },
  {
    barangay_id: 5033,
    municipality_id: 193,
    barangay_name: "Caralucud",
  },
  {
    barangay_id: 5030,
    municipality_id: 193,
    barangay_name: "Dalena",
  },
  {
    barangay_id: 5034,
    municipality_id: 193,
    barangay_name: "Guminga",
  },
  {
    barangay_id: 5035,
    municipality_id: 193,
    barangay_name: "Minanga Norte",
  },
  {
    barangay_id: 5036,
    municipality_id: 193,
    barangay_name: "Minanga Sur",
  },
  {
    barangay_id: 5038,
    municipality_id: 193,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5037,
    municipality_id: 193,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 5039,
    municipality_id: 193,
    barangay_name: "Simanu Norte",
  },
  {
    barangay_id: 5040,
    municipality_id: 193,
    barangay_name: "Simanu Sur",
  },
  {
    barangay_id: 5041,
    municipality_id: 193,
    barangay_name: "Tupa",
  },
  {
    barangay_id: 5042,
    municipality_id: 194,
    barangay_name: "Bangad",
  },
  {
    barangay_id: 5043,
    municipality_id: 194,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 5045,
    municipality_id: 194,
    barangay_name: "Calamagui East",
  },
  {
    barangay_id: 5044,
    municipality_id: 194,
    barangay_name: "Calamagui North",
  },
  {
    barangay_id: 5046,
    municipality_id: 194,
    barangay_name: "Calamagui West",
  },
  {
    barangay_id: 5047,
    municipality_id: 194,
    barangay_name: "Divisoria",
  },
  {
    barangay_id: 5048,
    municipality_id: 194,
    barangay_name: "Lingaling",
  },
  {
    barangay_id: 5050,
    municipality_id: 194,
    barangay_name: "Mozzozzin North",
  },
  {
    barangay_id: 5049,
    municipality_id: 194,
    barangay_name: "Mozzozzin Sur",
  },
  {
    barangay_id: 5051,
    municipality_id: 194,
    barangay_name: "Naganacan",
  },
  {
    barangay_id: 5052,
    municipality_id: 194,
    barangay_name: "Poblacion 1",
  },
  {
    barangay_id: 5053,
    municipality_id: 194,
    barangay_name: "Poblacion 2",
  },
  {
    barangay_id: 5054,
    municipality_id: 194,
    barangay_name: "Poblacion 3",
  },
  {
    barangay_id: 5055,
    municipality_id: 194,
    barangay_name: "Quinagabian",
  },
  {
    barangay_id: 5056,
    municipality_id: 194,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 5057,
    municipality_id: 194,
    barangay_name: "San Isidro East",
  },
  {
    barangay_id: 5058,
    municipality_id: 194,
    barangay_name: "San Isidro West",
  },
  {
    barangay_id: 5060,
    municipality_id: 194,
    barangay_name: "San Rafael East",
  },
  {
    barangay_id: 5059,
    municipality_id: 194,
    barangay_name: "San Rafael West",
  },
  {
    barangay_id: 5061,
    municipality_id: 194,
    barangay_name: "Villabuena",
  },
  {
    barangay_id: 5062,
    municipality_id: 195,
    barangay_name: "Abra",
  },
  {
    barangay_id: 5063,
    municipality_id: 195,
    barangay_name: "Ambalatungan",
  },
  {
    barangay_id: 5064,
    municipality_id: 195,
    barangay_name: "Balintocatoc",
  },
  {
    barangay_id: 5065,
    municipality_id: 195,
    barangay_name: "Baluarte",
  },
  {
    barangay_id: 5066,
    municipality_id: 195,
    barangay_name: "Bannawag Norte",
  },
  {
    barangay_id: 5067,
    municipality_id: 195,
    barangay_name: "Batal",
  },
  {
    barangay_id: 5068,
    municipality_id: 195,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 5069,
    municipality_id: 195,
    barangay_name: "Cabulay",
  },
  {
    barangay_id: 5070,
    municipality_id: 195,
    barangay_name: "Calao East (Pob.)",
  },
  {
    barangay_id: 5071,
    municipality_id: 195,
    barangay_name: "Calao West (Pob.)",
  },
  {
    barangay_id: 5072,
    municipality_id: 195,
    barangay_name: "Calaocan",
  },
  {
    barangay_id: 5074,
    municipality_id: 195,
    barangay_name: "Centro East (Pob.)",
  },
  {
    barangay_id: 5075,
    municipality_id: 195,
    barangay_name: "Centro West (Pob.)",
  },
  {
    barangay_id: 5076,
    municipality_id: 195,
    barangay_name: "Divisoria",
  },
  {
    barangay_id: 5077,
    municipality_id: 195,
    barangay_name: "Dubinan East",
  },
  {
    barangay_id: 5078,
    municipality_id: 195,
    barangay_name: "Dubinan West",
  },
  {
    barangay_id: 5079,
    municipality_id: 195,
    barangay_name: "Luna",
  },
  {
    barangay_id: 5080,
    municipality_id: 195,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 5081,
    municipality_id: 195,
    barangay_name: "Malvar",
  },
  {
    barangay_id: 5082,
    municipality_id: 195,
    barangay_name: "Nabbuan",
  },
  {
    barangay_id: 5083,
    municipality_id: 195,
    barangay_name: "Naggasican",
  },
  {
    barangay_id: 5084,
    municipality_id: 195,
    barangay_name: "Patul",
  },
  {
    barangay_id: 5085,
    municipality_id: 195,
    barangay_name: "Plaridel",
  },
  {
    barangay_id: 5086,
    municipality_id: 195,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 5087,
    municipality_id: 195,
    barangay_name: "Rosario",
  },
  {
    barangay_id: 5088,
    municipality_id: 195,
    barangay_name: "Sagana",
  },
  {
    barangay_id: 5089,
    municipality_id: 195,
    barangay_name: "Salvador",
  },
  {
    barangay_id: 5090,
    municipality_id: 195,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 5091,
    municipality_id: 195,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 5092,
    municipality_id: 195,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 5095,
    municipality_id: 195,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 5093,
    municipality_id: 195,
    barangay_name: "Sinili",
  },
  {
    barangay_id: 5094,
    municipality_id: 195,
    barangay_name: "Sinsayon",
  },
  {
    barangay_id: 5096,
    municipality_id: 195,
    barangay_name: "Victory Norte",
  },
  {
    barangay_id: 5097,
    municipality_id: 195,
    barangay_name: "Victory Sur",
  },
  {
    barangay_id: 5073,
    municipality_id: 195,
    barangay_name: "Villa Gonzaga",
  },
  {
    barangay_id: 5098,
    municipality_id: 195,
    barangay_name: "Villasis",
  },
  {
    barangay_id: 5099,
    municipality_id: 196,
    barangay_name: "Ammugauan",
  },
  {
    barangay_id: 5100,
    municipality_id: 196,
    barangay_name: "Antagan",
  },
  {
    barangay_id: 5101,
    municipality_id: 196,
    barangay_name: "Bagabag",
  },
  {
    barangay_id: 5102,
    municipality_id: 196,
    barangay_name: "Bagutari",
  },
  {
    barangay_id: 5103,
    municipality_id: 196,
    barangay_name: "Balelleng",
  },
  {
    barangay_id: 5104,
    municipality_id: 196,
    barangay_name: "Barumbong",
  },
  {
    barangay_id: 5122,
    municipality_id: 196,
    barangay_name: "Biga Occidental",
  },
  {
    barangay_id: 5123,
    municipality_id: 196,
    barangay_name: "Biga Oriental",
  },
  {
    barangay_id: 5106,
    municipality_id: 196,
    barangay_name: "Bolinao-Culalabo",
  },
  {
    barangay_id: 5105,
    municipality_id: 196,
    barangay_name: "Bubug",
  },
  {
    barangay_id: 5124,
    municipality_id: 196,
    barangay_name: "Calanigan Norte",
  },
  {
    barangay_id: 5125,
    municipality_id: 196,
    barangay_name: "Calanigan Sur",
  },
  {
    barangay_id: 5108,
    municipality_id: 196,
    barangay_name: "Calinaoan Centro",
  },
  {
    barangay_id: 5109,
    municipality_id: 196,
    barangay_name: "Calinaoan Malasin",
  },
  {
    barangay_id: 5110,
    municipality_id: 196,
    barangay_name: "Calinaoan Norte",
  },
  {
    barangay_id: 5107,
    municipality_id: 196,
    barangay_name: "Cañogan Abajo Norte",
  },
  {
    barangay_id: 5111,
    municipality_id: 196,
    barangay_name: "Cañogan Abajo Sur",
  },
  {
    barangay_id: 5112,
    municipality_id: 196,
    barangay_name: "Cañogan Alto",
  },
  {
    barangay_id: 5113,
    municipality_id: 196,
    barangay_name: "Centro",
  },
  {
    barangay_id: 5114,
    municipality_id: 196,
    barangay_name: "Colunguan",
  },
  {
    barangay_id: 5115,
    municipality_id: 196,
    barangay_name: "Malapagay",
  },
  {
    barangay_id: 5116,
    municipality_id: 196,
    barangay_name: "San Rafael Abajo",
  },
  {
    barangay_id: 5117,
    municipality_id: 196,
    barangay_name: "San Rafael Alto",
  },
  {
    barangay_id: 5118,
    municipality_id: 196,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 5119,
    municipality_id: 196,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 5121,
    municipality_id: 196,
    barangay_name: "Uauang-Galicia",
  },
  {
    barangay_id: 5120,
    municipality_id: 196,
    barangay_name: "Uauang-Tuliao",
  },
  {
    barangay_id: 5126,
    municipality_id: 197,
    barangay_name: "Annafunan",
  },
  {
    barangay_id: 5127,
    municipality_id: 197,
    barangay_name: "Antagan I",
  },
  {
    barangay_id: 5128,
    municipality_id: 197,
    barangay_name: "Antagan II",
  },
  {
    barangay_id: 5129,
    municipality_id: 197,
    barangay_name: "Arcon",
  },
  {
    barangay_id: 5130,
    municipality_id: 197,
    barangay_name: "Balug",
  },
  {
    barangay_id: 5131,
    municipality_id: 197,
    barangay_name: "Banig",
  },
  {
    barangay_id: 5132,
    municipality_id: 197,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 5156,
    municipality_id: 197,
    barangay_name: "Barangay District 1 (Pob.)",
  },
  {
    barangay_id: 5157,
    municipality_id: 197,
    barangay_name: "Barangay District 2 (Pob.)",
  },
  {
    barangay_id: 5158,
    municipality_id: 197,
    barangay_name: "Barangay District 3 (Pob.)",
  },
  {
    barangay_id: 5159,
    municipality_id: 197,
    barangay_name: "Barangay District 4 (Pob.)",
  },
  {
    barangay_id: 5133,
    municipality_id: 197,
    barangay_name: "Bayabo East",
  },
  {
    barangay_id: 5134,
    municipality_id: 197,
    barangay_name: "Caligayan",
  },
  {
    barangay_id: 5135,
    municipality_id: 197,
    barangay_name: "Camasi",
  },
  {
    barangay_id: 5136,
    municipality_id: 197,
    barangay_name: "Carpentero",
  },
  {
    barangay_id: 5137,
    municipality_id: 197,
    barangay_name: "Compania",
  },
  {
    barangay_id: 5138,
    municipality_id: 197,
    barangay_name: "Cumabao",
  },
  {
    barangay_id: 5142,
    municipality_id: 197,
    barangay_name: "Fermeldy",
  },
  {
    barangay_id: 5139,
    municipality_id: 197,
    barangay_name: "Fugu Abajo",
  },
  {
    barangay_id: 5140,
    municipality_id: 197,
    barangay_name: "Fugu Norte",
  },
  {
    barangay_id: 5141,
    municipality_id: 197,
    barangay_name: "Fugu Sur",
  },
  {
    barangay_id: 5143,
    municipality_id: 197,
    barangay_name: "Lalauanan",
  },
  {
    barangay_id: 5144,
    municipality_id: 197,
    barangay_name: "Lanna",
  },
  {
    barangay_id: 5145,
    municipality_id: 197,
    barangay_name: "Lapogan",
  },
  {
    barangay_id: 5146,
    municipality_id: 197,
    barangay_name: "Lingaling",
  },
  {
    barangay_id: 5147,
    municipality_id: 197,
    barangay_name: "Liwanag",
  },
  {
    barangay_id: 5149,
    municipality_id: 197,
    barangay_name: "Malamag East",
  },
  {
    barangay_id: 5150,
    municipality_id: 197,
    barangay_name: "Malamag West",
  },
  {
    barangay_id: 5151,
    municipality_id: 197,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 5152,
    municipality_id: 197,
    barangay_name: "Minanga",
  },
  {
    barangay_id: 5171,
    municipality_id: 197,
    barangay_name: "Moldero",
  },
  {
    barangay_id: 5153,
    municipality_id: 197,
    barangay_name: "Namnama",
  },
  {
    barangay_id: 5154,
    municipality_id: 197,
    barangay_name: "Paragu",
  },
  {
    barangay_id: 5155,
    municipality_id: 197,
    barangay_name: "Pilitan",
  },
  {
    barangay_id: 5160,
    municipality_id: 197,
    barangay_name: "San Mateo",
  },
  {
    barangay_id: 5161,
    municipality_id: 197,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 5162,
    municipality_id: 197,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 5163,
    municipality_id: 197,
    barangay_name: "Santa",
  },
  {
    barangay_id: 5164,
    municipality_id: 197,
    barangay_name: "Santa Catalina",
  },
  {
    barangay_id: 5148,
    municipality_id: 197,
    barangay_name: "Santa Visitacion",
  },
  {
    barangay_id: 5165,
    municipality_id: 197,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 5166,
    municipality_id: 197,
    barangay_name: "Sinippil",
  },
  {
    barangay_id: 5167,
    municipality_id: 197,
    barangay_name: "Sisim Abajo",
  },
  {
    barangay_id: 5168,
    municipality_id: 197,
    barangay_name: "Sisim Alto",
  },
  {
    barangay_id: 5169,
    municipality_id: 197,
    barangay_name: "Tunggui",
  },
  {
    barangay_id: 5170,
    municipality_id: 197,
    barangay_name: "Ugad",
  },
  {
    barangay_id: 5172,
    municipality_id: 198,
    barangay_name: "Ammueg",
  },
  {
    barangay_id: 5173,
    municipality_id: 198,
    barangay_name: "Camandag",
  },
  {
    barangay_id: 5179,
    municipality_id: 198,
    barangay_name: "Dulli",
  },
  {
    barangay_id: 5174,
    municipality_id: 198,
    barangay_name: "Labang",
  },
  {
    barangay_id: 5175,
    municipality_id: 198,
    barangay_name: "Napo",
  },
  {
    barangay_id: 5176,
    municipality_id: 198,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5177,
    municipality_id: 198,
    barangay_name: "Salingsingan",
  },
  {
    barangay_id: 5178,
    municipality_id: 198,
    barangay_name: "Tiblac",
  },
  {
    barangay_id: 5194,
    municipality_id: 199,
    barangay_name: "Anayo",
  },
  {
    barangay_id: 5195,
    municipality_id: 199,
    barangay_name: "Baan",
  },
  {
    barangay_id: 5196,
    municipality_id: 199,
    barangay_name: "Balite",
  },
  {
    barangay_id: 5180,
    municipality_id: 199,
    barangay_name: "Banganan",
  },
  {
    barangay_id: 5181,
    municipality_id: 199,
    barangay_name: "Beti",
  },
  {
    barangay_id: 5182,
    municipality_id: 199,
    barangay_name: "Bone North",
  },
  {
    barangay_id: 5183,
    municipality_id: 199,
    barangay_name: "Bone South",
  },
  {
    barangay_id: 5184,
    municipality_id: 199,
    barangay_name: "Calitlitan",
  },
  {
    barangay_id: 5197,
    municipality_id: 199,
    barangay_name: "Canabuan",
  },
  {
    barangay_id: 5198,
    municipality_id: 199,
    barangay_name: "Canarem",
  },
  {
    barangay_id: 5185,
    municipality_id: 199,
    barangay_name: "Comon",
  },
  {
    barangay_id: 5186,
    municipality_id: 199,
    barangay_name: "Cutar",
  },
  {
    barangay_id: 5187,
    municipality_id: 199,
    barangay_name: "Darapidap",
  },
  {
    barangay_id: 5188,
    municipality_id: 199,
    barangay_name: "Kirang",
  },
  {
    barangay_id: 5199,
    municipality_id: 199,
    barangay_name: "Latar-Nocnoc-San Francisco",
  },
  {
    barangay_id: 5189,
    municipality_id: 199,
    barangay_name: "Nagcuartelan",
  },
  {
    barangay_id: 5200,
    municipality_id: 199,
    barangay_name: "Ocao-Capiniaan",
  },
  {
    barangay_id: 5190,
    municipality_id: 199,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5191,
    municipality_id: 199,
    barangay_name: "Santa Clara",
  },
  {
    barangay_id: 5192,
    municipality_id: 199,
    barangay_name: "Tabueng",
  },
  {
    barangay_id: 5193,
    municipality_id: 199,
    barangay_name: "Tucanon",
  },
  {
    barangay_id: 5201,
    municipality_id: 199,
    barangay_name: "Yaway",
  },
  {
    barangay_id: 5202,
    municipality_id: 200,
    barangay_name: "Bakir",
  },
  {
    barangay_id: 5203,
    municipality_id: 200,
    barangay_name: "Baretbet",
  },
  {
    barangay_id: 5204,
    municipality_id: 200,
    barangay_name: "Careb",
  },
  {
    barangay_id: 5205,
    municipality_id: 200,
    barangay_name: "Lantap",
  },
  {
    barangay_id: 5206,
    municipality_id: 200,
    barangay_name: "Murong",
  },
  {
    barangay_id: 5207,
    municipality_id: 200,
    barangay_name: "Nangalisan",
  },
  {
    barangay_id: 5208,
    municipality_id: 200,
    barangay_name: "Paniki",
  },
  {
    barangay_id: 5209,
    municipality_id: 200,
    barangay_name: "Pogonsino",
  },
  {
    barangay_id: 5216,
    municipality_id: 200,
    barangay_name: "Quirino (Pob.)",
  },
  {
    barangay_id: 5210,
    municipality_id: 200,
    barangay_name: "San Geronimo (Pob.)",
  },
  {
    barangay_id: 5211,
    municipality_id: 200,
    barangay_name: "San Pedro (Pob.)",
  },
  {
    barangay_id: 5212,
    municipality_id: 200,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 5213,
    municipality_id: 200,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 5214,
    municipality_id: 200,
    barangay_name: "Tuao North",
  },
  {
    barangay_id: 5218,
    municipality_id: 200,
    barangay_name: "Tuao South",
  },
  {
    barangay_id: 5215,
    municipality_id: 200,
    barangay_name: "Villa Coloma (Pob.)",
  },
  {
    barangay_id: 5217,
    municipality_id: 200,
    barangay_name: "Villaros",
  },
  {
    barangay_id: 5219,
    municipality_id: 201,
    barangay_name: "Abian",
  },
  {
    barangay_id: 5220,
    municipality_id: 201,
    barangay_name: "Abinganan",
  },
  {
    barangay_id: 5221,
    municipality_id: 201,
    barangay_name: "Aliaga",
  },
  {
    barangay_id: 5222,
    municipality_id: 201,
    barangay_name: "Almaguer North",
  },
  {
    barangay_id: 5223,
    municipality_id: 201,
    barangay_name: "Almaguer South",
  },
  {
    barangay_id: 5224,
    municipality_id: 201,
    barangay_name: "Banggot (Pob.)",
  },
  {
    barangay_id: 5225,
    municipality_id: 201,
    barangay_name: "Barat",
  },
  {
    barangay_id: 5226,
    municipality_id: 201,
    barangay_name: "Buag (Pob.)",
  },
  {
    barangay_id: 5227,
    municipality_id: 201,
    barangay_name: "Calaocan (Pob.)",
  },
  {
    barangay_id: 5228,
    municipality_id: 201,
    barangay_name: "Dullao",
  },
  {
    barangay_id: 5229,
    municipality_id: 201,
    barangay_name: "Homestead",
  },
  {
    barangay_id: 5230,
    municipality_id: 201,
    barangay_name: "Indiana",
  },
  {
    barangay_id: 5231,
    municipality_id: 201,
    barangay_name: "Mabuslo",
  },
  {
    barangay_id: 5232,
    municipality_id: 201,
    barangay_name: "Macate",
  },
  {
    barangay_id: 5242,
    municipality_id: 201,
    barangay_name: "Magsaysay Hills",
  },
  {
    barangay_id: 5233,
    municipality_id: 201,
    barangay_name: "Manamtam",
  },
  {
    barangay_id: 5234,
    municipality_id: 201,
    barangay_name: "Mauan",
  },
  {
    barangay_id: 5241,
    municipality_id: 201,
    barangay_name: "Pallas",
  },
  {
    barangay_id: 5235,
    municipality_id: 201,
    barangay_name: "Salinas",
  },
  {
    barangay_id: 5236,
    municipality_id: 201,
    barangay_name: "San Antonio North",
  },
  {
    barangay_id: 5237,
    municipality_id: 201,
    barangay_name: "San Antonio South",
  },
  {
    barangay_id: 5238,
    municipality_id: 201,
    barangay_name: "San Fernando",
  },
  {
    barangay_id: 5239,
    municipality_id: 201,
    barangay_name: "San Leonardo",
  },
  {
    barangay_id: 5240,
    municipality_id: 201,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 5243,
    municipality_id: 201,
    barangay_name: "Santo Domingo West",
  },
  {
    barangay_id: 5259,
    municipality_id: 202,
    barangay_name: "Bansing",
  },
  {
    barangay_id: 5244,
    municipality_id: 202,
    barangay_name: "Bonfal East",
  },
  {
    barangay_id: 5245,
    municipality_id: 202,
    barangay_name: "Bonfal Proper",
  },
  {
    barangay_id: 5246,
    municipality_id: 202,
    barangay_name: "Bonfal West",
  },
  {
    barangay_id: 5247,
    municipality_id: 202,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 5248,
    municipality_id: 202,
    barangay_name: "Busilac",
  },
  {
    barangay_id: 5260,
    municipality_id: 202,
    barangay_name: "Cabuaan",
  },
  {
    barangay_id: 5249,
    municipality_id: 202,
    barangay_name: "Casat",
  },
  {
    barangay_id: 5257,
    municipality_id: 202,
    barangay_name: "District III Pob.",
  },
  {
    barangay_id: 5258,
    municipality_id: 202,
    barangay_name: "District IV (Pob.)",
  },
  {
    barangay_id: 5255,
    municipality_id: 202,
    barangay_name: "Don Domingo Maddela Pob. ",
  },
  {
    barangay_id: 5261,
    municipality_id: 202,
    barangay_name: "Don Mariano Marcos",
  },
  {
    barangay_id: 5256,
    municipality_id: 202,
    barangay_name: "Don Tomas Maddela Pob.",
  },
  {
    barangay_id: 5262,
    municipality_id: 202,
    barangay_name: "Ipil-Cuneg",
  },
  {
    barangay_id: 5250,
    municipality_id: 202,
    barangay_name: "La Torre North",
  },
  {
    barangay_id: 5263,
    municipality_id: 202,
    barangay_name: "La Torre South",
  },
  {
    barangay_id: 5264,
    municipality_id: 202,
    barangay_name: "Luyang",
  },
  {
    barangay_id: 5251,
    municipality_id: 202,
    barangay_name: "Magapuy",
  },
  {
    barangay_id: 5252,
    municipality_id: 202,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 5253,
    municipality_id: 202,
    barangay_name: "Masoc",
  },
  {
    barangay_id: 5254,
    municipality_id: 202,
    barangay_name: "Paitan",
  },
  {
    barangay_id: 5265,
    municipality_id: 202,
    barangay_name: "Salvacion",
  },
  {
    barangay_id: 5266,
    municipality_id: 202,
    barangay_name: "San Nicolas North",
  },
  {
    barangay_id: 5267,
    municipality_id: 202,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 5268,
    municipality_id: 202,
    barangay_name: "Vista Alegre",
  },
  {
    barangay_id: 5279,
    municipality_id: 203,
    barangay_name: "Ampakling",
  },
  {
    barangay_id: 5269,
    municipality_id: 203,
    barangay_name: "Arwas",
  },
  {
    barangay_id: 5270,
    municipality_id: 203,
    barangay_name: "Balete",
  },
  {
    barangay_id: 5271,
    municipality_id: 203,
    barangay_name: "Bugnay",
  },
  {
    barangay_id: 5280,
    municipality_id: 203,
    barangay_name: "Butao",
  },
  {
    barangay_id: 5272,
    municipality_id: 203,
    barangay_name: "Decabacan",
  },
  {
    barangay_id: 5273,
    municipality_id: 203,
    barangay_name: "Duruarog",
  },
  {
    barangay_id: 5274,
    municipality_id: 203,
    barangay_name: "Escoting",
  },
  {
    barangay_id: 5281,
    municipality_id: 203,
    barangay_name: "Langca",
  },
  {
    barangay_id: 5282,
    municipality_id: 203,
    barangay_name: "Lurad",
  },
  {
    barangay_id: 5275,
    municipality_id: 203,
    barangay_name: "Nagsabaran",
  },
  {
    barangay_id: 5276,
    municipality_id: 203,
    barangay_name: "Namamparan",
  },
  {
    barangay_id: 5277,
    municipality_id: 203,
    barangay_name: "Pinya",
  },
  {
    barangay_id: 5278,
    municipality_id: 203,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5283,
    municipality_id: 203,
    barangay_name: "Rosario",
  },
  {
    barangay_id: 5284,
    municipality_id: 203,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 5285,
    municipality_id: 203,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 5286,
    municipality_id: 203,
    barangay_name: "Villa Aurora",
  },
  {
    barangay_id: 5287,
    municipality_id: 203,
    barangay_name: "Villa Florentino",
  },
  {
    barangay_id: 5288,
    municipality_id: 204,
    barangay_name: "Belance",
  },
  {
    barangay_id: 5299,
    municipality_id: 204,
    barangay_name: "Binnuangan",
  },
  {
    barangay_id: 5300,
    municipality_id: 204,
    barangay_name: "Bitnong",
  },
  {
    barangay_id: 5289,
    municipality_id: 204,
    barangay_name: "Bulala",
  },
  {
    barangay_id: 5290,
    municipality_id: 204,
    barangay_name: "Inaban",
  },
  {
    barangay_id: 5291,
    municipality_id: 204,
    barangay_name: "Ineangan",
  },
  {
    barangay_id: 5292,
    municipality_id: 204,
    barangay_name: "Lamo",
  },
  {
    barangay_id: 5293,
    municipality_id: 204,
    barangay_name: "Mabasa",
  },
  {
    barangay_id: 5301,
    municipality_id: 204,
    barangay_name: "Macabenga",
  },
  {
    barangay_id: 5294,
    municipality_id: 204,
    barangay_name: "Malasin (Pob.)",
  },
  {
    barangay_id: 5295,
    municipality_id: 204,
    barangay_name: "Munguia",
  },
  {
    barangay_id: 5297,
    municipality_id: 204,
    barangay_name: "New Gumiad",
  },
  {
    barangay_id: 5296,
    municipality_id: 204,
    barangay_name: "Oyao",
  },
  {
    barangay_id: 5302,
    municipality_id: 204,
    barangay_name: "Parai",
  },
  {
    barangay_id: 5298,
    municipality_id: 204,
    barangay_name: "Yabbi",
  },
  {
    barangay_id: 5303,
    municipality_id: 205,
    barangay_name: "Abaca",
  },
  {
    barangay_id: 5312,
    municipality_id: 205,
    barangay_name: "Bagumbayan",
  },
  {
    barangay_id: 5313,
    municipality_id: 205,
    barangay_name: "Balsain",
  },
  {
    barangay_id: 5304,
    municipality_id: 205,
    barangay_name: "Banila",
  },
  {
    barangay_id: 5311,
    municipality_id: 205,
    barangay_name: "Biruk",
  },
  {
    barangay_id: 5314,
    municipality_id: 205,
    barangay_name: "Canabay",
  },
  {
    barangay_id: 5305,
    municipality_id: 205,
    barangay_name: "Carolotan",
  },
  {
    barangay_id: 5315,
    municipality_id: 205,
    barangay_name: "Domang",
  },
  {
    barangay_id: 5316,
    municipality_id: 205,
    barangay_name: "Dopaj",
  },
  {
    barangay_id: 5306,
    municipality_id: 205,
    barangay_name: "Gabut",
  },
  {
    barangay_id: 5307,
    municipality_id: 205,
    barangay_name: "Ganao",
  },
  {
    barangay_id: 5317,
    municipality_id: 205,
    barangay_name: "Kimbutan",
  },
  {
    barangay_id: 5318,
    municipality_id: 205,
    barangay_name: "Kinabuan",
  },
  {
    barangay_id: 5308,
    municipality_id: 205,
    barangay_name: "Lukidnon",
  },
  {
    barangay_id: 5309,
    municipality_id: 205,
    barangay_name: "Mangayang",
  },
  {
    barangay_id: 5310,
    municipality_id: 205,
    barangay_name: "Palabotan",
  },
  {
    barangay_id: 5319,
    municipality_id: 205,
    barangay_name: "Sanguit",
  },
  {
    barangay_id: 5320,
    municipality_id: 205,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 5321,
    municipality_id: 205,
    barangay_name: "Talbek",
  },
  {
    barangay_id: 5323,
    municipality_id: 206,
    barangay_name: "Alimit",
  },
  {
    barangay_id: 5349,
    municipality_id: 206,
    barangay_name: "Alloy",
  },
  {
    barangay_id: 5322,
    municipality_id: 206,
    barangay_name: "Antutot",
  },
  {
    barangay_id: 5325,
    municipality_id: 206,
    barangay_name: "Bilet",
  },
  {
    barangay_id: 5326,
    municipality_id: 206,
    barangay_name: "Binogawan",
  },
  {
    barangay_id: 5328,
    municipality_id: 206,
    barangay_name: "Biyoy",
  },
  {
    barangay_id: 5327,
    municipality_id: 206,
    barangay_name: "Bua",
  },
  {
    barangay_id: 5346,
    municipality_id: 206,
    barangay_name: "Camamasi",
  },
  {
    barangay_id: 5329,
    municipality_id: 206,
    barangay_name: "Capisaan",
  },
  {
    barangay_id: 5347,
    municipality_id: 206,
    barangay_name: "Catarawan",
  },
  {
    barangay_id: 5330,
    municipality_id: 206,
    barangay_name: "Cordon",
  },
  {
    barangay_id: 5331,
    municipality_id: 206,
    barangay_name: "Didipio",
  },
  {
    barangay_id: 5332,
    municipality_id: 206,
    barangay_name: "Dine",
  },
  {
    barangay_id: 5333,
    municipality_id: 206,
    barangay_name: "Kakiduguen",
  },
  {
    barangay_id: 5350,
    municipality_id: 206,
    barangay_name: "Kongkong",
  },
  {
    barangay_id: 5334,
    municipality_id: 206,
    barangay_name: "Lupa",
  },
  {
    barangay_id: 5335,
    municipality_id: 206,
    barangay_name: "Macalong",
  },
  {
    barangay_id: 5336,
    municipality_id: 206,
    barangay_name: "Malabing",
  },
  {
    barangay_id: 5337,
    municipality_id: 206,
    barangay_name: "Muta",
  },
  {
    barangay_id: 5348,
    municipality_id: 206,
    barangay_name: "Nantawacan",
  },
  {
    barangay_id: 5351,
    municipality_id: 206,
    barangay_name: "Pacquet",
  },
  {
    barangay_id: 5338,
    municipality_id: 206,
    barangay_name: "Pao",
  },
  {
    barangay_id: 5339,
    municipality_id: 206,
    barangay_name: "Papaya",
  },
  {
    barangay_id: 5324,
    municipality_id: 206,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5340,
    municipality_id: 206,
    barangay_name: "Pudi",
  },
  {
    barangay_id: 5342,
    municipality_id: 206,
    barangay_name: "Seguem",
  },
  {
    barangay_id: 5343,
    municipality_id: 206,
    barangay_name: "Tadji",
  },
  {
    barangay_id: 5341,
    municipality_id: 206,
    barangay_name: "Tokod",
  },
  {
    barangay_id: 5344,
    municipality_id: 206,
    barangay_name: "Wangal",
  },
  {
    barangay_id: 5345,
    municipality_id: 206,
    barangay_name: "Watwat",
  },
  {
    barangay_id: 5352,
    municipality_id: 207,
    barangay_name: "Acacia",
  },
  {
    barangay_id: 5374,
    municipality_id: 207,
    barangay_name: "Alang-Salacsac",
  },
  {
    barangay_id: 5353,
    municipality_id: 207,
    barangay_name: "Amilong Labeng",
  },
  {
    barangay_id: 5354,
    municipality_id: 207,
    barangay_name: "Ansipsip",
  },
  {
    barangay_id: 5355,
    municipality_id: 207,
    barangay_name: "Baan",
  },
  {
    barangay_id: 5356,
    municipality_id: 207,
    barangay_name: "Babadi",
  },
  {
    barangay_id: 5357,
    municipality_id: 207,
    barangay_name: "Balangabang",
  },
  {
    barangay_id: 5375,
    municipality_id: 207,
    barangay_name: "Balete",
  },
  {
    barangay_id: 5358,
    municipality_id: 207,
    barangay_name: "Banao",
  },
  {
    barangay_id: 5360,
    municipality_id: 207,
    barangay_name: "Besong",
  },
  {
    barangay_id: 5359,
    municipality_id: 207,
    barangay_name: "Binalian",
  },
  {
    barangay_id: 5376,
    municipality_id: 207,
    barangay_name: "Buyasyas",
  },
  {
    barangay_id: 5361,
    municipality_id: 207,
    barangay_name: "Cabalatan-Alang",
  },
  {
    barangay_id: 5362,
    municipality_id: 207,
    barangay_name: "Cabanglasan",
  },
  {
    barangay_id: 5377,
    municipality_id: 207,
    barangay_name: "Cabayo",
  },
  {
    barangay_id: 5378,
    municipality_id: 207,
    barangay_name: "Castillo Village",
  },
  {
    barangay_id: 5363,
    municipality_id: 207,
    barangay_name: "Kayapa Proper East",
  },
  {
    barangay_id: 5364,
    municipality_id: 207,
    barangay_name: "Kayapa Proper West",
  },
  {
    barangay_id: 5379,
    municipality_id: 207,
    barangay_name: "Latbang",
  },
  {
    barangay_id: 5380,
    municipality_id: 207,
    barangay_name: "Lawigan",
  },
  {
    barangay_id: 5365,
    municipality_id: 207,
    barangay_name: "Mapayao",
  },
  {
    barangay_id: 5366,
    municipality_id: 207,
    barangay_name: "Nansiakan",
  },
  {
    barangay_id: 5367,
    municipality_id: 207,
    barangay_name: "Pampang (Pob.)",
  },
  {
    barangay_id: 5368,
    municipality_id: 207,
    barangay_name: "Pangawan",
  },
  {
    barangay_id: 5369,
    municipality_id: 207,
    barangay_name: "Pinayag",
  },
  {
    barangay_id: 5370,
    municipality_id: 207,
    barangay_name: "Pingkian",
  },
  {
    barangay_id: 5371,
    municipality_id: 207,
    barangay_name: "San Fabian",
  },
  {
    barangay_id: 5372,
    municipality_id: 207,
    barangay_name: "Talecabcab",
  },
  {
    barangay_id: 5381,
    municipality_id: 207,
    barangay_name: "Tidang Village",
  },
  {
    barangay_id: 5373,
    municipality_id: 207,
    barangay_name: "Tubongan",
  },
  {
    barangay_id: 5382,
    municipality_id: 208,
    barangay_name: "Aurora",
  },
  {
    barangay_id: 5383,
    municipality_id: 208,
    barangay_name: "Baresbes",
  },
  {
    barangay_id: 5385,
    municipality_id: 208,
    barangay_name: "Bonifacio",
  },
  {
    barangay_id: 5384,
    municipality_id: 208,
    barangay_name: "Buliwao",
  },
  {
    barangay_id: 5386,
    municipality_id: 208,
    barangay_name: "Calaocan",
  },
  {
    barangay_id: 5387,
    municipality_id: 208,
    barangay_name: "Caliat (Pob.)",
  },
  {
    barangay_id: 5393,
    municipality_id: 208,
    barangay_name: "Dagupan",
  },
  {
    barangay_id: 5388,
    municipality_id: 208,
    barangay_name: "Darubba",
  },
  {
    barangay_id: 5392,
    municipality_id: 208,
    barangay_name: "Maasin",
  },
  {
    barangay_id: 5389,
    municipality_id: 208,
    barangay_name: "Maddiangat",
  },
  {
    barangay_id: 5390,
    municipality_id: 208,
    barangay_name: "Nalubbunan",
  },
  {
    barangay_id: 5391,
    municipality_id: 208,
    barangay_name: "Runruno",
  },
  {
    barangay_id: 5404,
    municipality_id: 209,
    barangay_name: "Atbu",
  },
  {
    barangay_id: 5394,
    municipality_id: 209,
    barangay_name: "Bacneng",
  },
  {
    barangay_id: 5405,
    municipality_id: 209,
    barangay_name: "Balete",
  },
  {
    barangay_id: 5395,
    municipality_id: 209,
    barangay_name: "Baliling",
  },
  {
    barangay_id: 5396,
    municipality_id: 209,
    barangay_name: "Bantinan",
  },
  {
    barangay_id: 5397,
    municipality_id: 209,
    barangay_name: "Baracbac",
  },
  {
    barangay_id: 5398,
    municipality_id: 209,
    barangay_name: "Buyasyas",
  },
  {
    barangay_id: 5406,
    municipality_id: 209,
    barangay_name: "Canabuan",
  },
  {
    barangay_id: 5399,
    municipality_id: 209,
    barangay_name: "Imugan",
  },
  {
    barangay_id: 5407,
    municipality_id: 209,
    barangay_name: "Malico",
  },
  {
    barangay_id: 5400,
    municipality_id: 209,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5408,
    municipality_id: 209,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 5401,
    municipality_id: 209,
    barangay_name: "Sinapaoan",
  },
  {
    barangay_id: 5402,
    municipality_id: 209,
    barangay_name: "Tactac",
  },
  {
    barangay_id: 5409,
    municipality_id: 209,
    barangay_name: "Unib",
  },
  {
    barangay_id: 5403,
    municipality_id: 209,
    barangay_name: "Villa Flores",
  },
  {
    barangay_id: 5410,
    municipality_id: 210,
    barangay_name: "Aggub",
  },
  {
    barangay_id: 5428,
    municipality_id: 210,
    barangay_name: "Bagahabag",
  },
  {
    barangay_id: 5411,
    municipality_id: 210,
    barangay_name: "Bangaan",
  },
  {
    barangay_id: 5412,
    municipality_id: 210,
    barangay_name: "Bangar",
  },
  {
    barangay_id: 5413,
    municipality_id: 210,
    barangay_name: "Bascaran",
  },
  {
    barangay_id: 5429,
    municipality_id: 210,
    barangay_name: "Communal",
  },
  {
    barangay_id: 5430,
    municipality_id: 210,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 5414,
    municipality_id: 210,
    barangay_name: "Curifang",
  },
  {
    barangay_id: 5415,
    municipality_id: 210,
    barangay_name: "Dadap",
  },
  {
    barangay_id: 5416,
    municipality_id: 210,
    barangay_name: "Lactawan",
  },
  {
    barangay_id: 5417,
    municipality_id: 210,
    barangay_name: "Osmeña",
  },
  {
    barangay_id: 5431,
    municipality_id: 210,
    barangay_name: "Pilar D. Galima",
  },
  {
    barangay_id: 5418,
    municipality_id: 210,
    barangay_name: "Poblacion North",
  },
  {
    barangay_id: 5419,
    municipality_id: 210,
    barangay_name: "Poblacion South",
  },
  {
    barangay_id: 5420,
    municipality_id: 210,
    barangay_name: "Quezon",
  },
  {
    barangay_id: 5421,
    municipality_id: 210,
    barangay_name: "Quirino",
  },
  {
    barangay_id: 5422,
    municipality_id: 210,
    barangay_name: "Roxas",
  },
  {
    barangay_id: 5423,
    municipality_id: 210,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 5424,
    municipality_id: 210,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 5425,
    municipality_id: 210,
    barangay_name: "Tucal",
  },
  {
    barangay_id: 5426,
    municipality_id: 210,
    barangay_name: "Uddiawan",
  },
  {
    barangay_id: 5427,
    municipality_id: 210,
    barangay_name: "Wacal",
  },
  {
    barangay_id: 5440,
    municipality_id: 211,
    barangay_name: "Bintawan Norte",
  },
  {
    barangay_id: 5432,
    municipality_id: 211,
    barangay_name: "Bintawan Sur",
  },
  {
    barangay_id: 5434,
    municipality_id: 211,
    barangay_name: "Cabuluan",
  },
  {
    barangay_id: 5433,
    municipality_id: 211,
    barangay_name: "Ibung",
  },
  {
    barangay_id: 5435,
    municipality_id: 211,
    barangay_name: "Nagbitin",
  },
  {
    barangay_id: 5436,
    municipality_id: 211,
    barangay_name: "Ocapon",
  },
  {
    barangay_id: 5437,
    municipality_id: 211,
    barangay_name: "Pieza",
  },
  {
    barangay_id: 5439,
    municipality_id: 211,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5438,
    municipality_id: 211,
    barangay_name: "Sawmill",
  },
  {
    barangay_id: 5441,
    municipality_id: 212,
    barangay_name: "Abuyo",
  },
  {
    barangay_id: 5443,
    municipality_id: 212,
    barangay_name: "Cauayan",
  },
  {
    barangay_id: 5442,
    municipality_id: 212,
    barangay_name: "Galintuja",
  },
  {
    barangay_id: 5444,
    municipality_id: 212,
    barangay_name: "Lipuga",
  },
  {
    barangay_id: 5445,
    municipality_id: 212,
    barangay_name: "Lublub (Pob.)",
  },
  {
    barangay_id: 5446,
    municipality_id: 212,
    barangay_name: "Pelaway",
  },
  {
    barangay_id: 5464,
    municipality_id: 213,
    barangay_name: "Alicia",
  },
  {
    barangay_id: 5465,
    municipality_id: 213,
    barangay_name: "Cabugao",
  },
  {
    barangay_id: 5447,
    municipality_id: 213,
    barangay_name: "Dagupan",
  },
  {
    barangay_id: 5466,
    municipality_id: 213,
    barangay_name: "Diodol",
  },
  {
    barangay_id: 5448,
    municipality_id: 213,
    barangay_name: "Dumabel",
  },
  {
    barangay_id: 5449,
    municipality_id: 213,
    barangay_name: "Dungo",
  },
  {
    barangay_id: 5450,
    municipality_id: 213,
    barangay_name: "Guinalbin",
  },
  {
    barangay_id: 5451,
    municipality_id: 213,
    barangay_name: "Ligaya",
  },
  {
    barangay_id: 5467,
    municipality_id: 213,
    barangay_name: "Nagabgaban",
  },
  {
    barangay_id: 5452,
    municipality_id: 213,
    barangay_name: "Palacian",
  },
  {
    barangay_id: 5468,
    municipality_id: 213,
    barangay_name: "Pinaripad Norte",
  },
  {
    barangay_id: 5453,
    municipality_id: 213,
    barangay_name: "Pinaripad Sur",
  },
  {
    barangay_id: 5454,
    municipality_id: 213,
    barangay_name: "Progreso (Pob.)",
  },
  {
    barangay_id: 5455,
    municipality_id: 213,
    barangay_name: "Ramos",
  },
  {
    barangay_id: 5456,
    municipality_id: 213,
    barangay_name: "Rang-ayan",
  },
  {
    barangay_id: 5457,
    municipality_id: 213,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 5469,
    municipality_id: 213,
    barangay_name: "San Benigno",
  },
  {
    barangay_id: 5458,
    municipality_id: 213,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 5459,
    municipality_id: 213,
    barangay_name: "San Leonardo",
  },
  {
    barangay_id: 5470,
    municipality_id: 213,
    barangay_name: "San Manuel",
  },
  {
    barangay_id: 5460,
    municipality_id: 213,
    barangay_name: "San Ramon",
  },
  {
    barangay_id: 5461,
    municipality_id: 213,
    barangay_name: "Victoria",
  },
  {
    barangay_id: 5462,
    municipality_id: 213,
    barangay_name: "Villa Pagaduan",
  },
  {
    barangay_id: 5463,
    municipality_id: 213,
    barangay_name: "Villa Santiago",
  },
  {
    barangay_id: 5471,
    municipality_id: 213,
    barangay_name: "Villa Ventura",
  },
  {
    barangay_id: 5472,
    municipality_id: 214,
    barangay_name: "Banuar",
  },
  {
    barangay_id: 5473,
    municipality_id: 214,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 5474,
    municipality_id: 214,
    barangay_name: "Calaocan",
  },
  {
    barangay_id: 5475,
    municipality_id: 214,
    barangay_name: "Del Pilar",
  },
  {
    barangay_id: 5476,
    municipality_id: 214,
    barangay_name: "Dibibi",
  },
  {
    barangay_id: 5485,
    municipality_id: 214,
    barangay_name: "Dingasan",
  },
  {
    barangay_id: 5477,
    municipality_id: 214,
    barangay_name: "Eden",
  },
  {
    barangay_id: 5487,
    municipality_id: 214,
    barangay_name: "Gomez",
  },
  {
    barangay_id: 5478,
    municipality_id: 214,
    barangay_name: "Gundaway (Pob.)",
  },
  {
    barangay_id: 5479,
    municipality_id: 214,
    barangay_name: "Mangandingay (Pob.)",
  },
  {
    barangay_id: 5480,
    municipality_id: 214,
    barangay_name: "San Marcos",
  },
  {
    barangay_id: 5488,
    municipality_id: 214,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 5486,
    municipality_id: 214,
    barangay_name: "Tucod",
  },
  {
    barangay_id: 5484,
    municipality_id: 214,
    barangay_name: "Villa Peña",
  },
  {
    barangay_id: 5481,
    municipality_id: 214,
    barangay_name: "Villamor",
  },
  {
    barangay_id: 5483,
    municipality_id: 214,
    barangay_name: "Villarose",
  },
  {
    barangay_id: 5482,
    municipality_id: 214,
    barangay_name: "Zamora",
  },
  {
    barangay_id: 5519,
    municipality_id: 215,
    barangay_name: "Aklan Village",
  },
  {
    barangay_id: 5489,
    municipality_id: 215,
    barangay_name: "Andres Bonifacio (Pob.)",
  },
  {
    barangay_id: 5490,
    municipality_id: 215,
    barangay_name: "Aurora East (Pob.)",
  },
  {
    barangay_id: 5491,
    municipality_id: 215,
    barangay_name: "Aurora West (Pob.)",
  },
  {
    barangay_id: 5492,
    municipality_id: 215,
    barangay_name: "Baguio Village",
  },
  {
    barangay_id: 5493,
    municipality_id: 215,
    barangay_name: "Balagbag",
  },
  {
    barangay_id: 5494,
    municipality_id: 215,
    barangay_name: "Bannawag",
  },
  {
    barangay_id: 5495,
    municipality_id: 215,
    barangay_name: "Cajel",
  },
  {
    barangay_id: 5496,
    municipality_id: 215,
    barangay_name: "Campamento",
  },
  {
    barangay_id: 5497,
    municipality_id: 215,
    barangay_name: "Diego Silang",
  },
  {
    barangay_id: 5521,
    municipality_id: 215,
    barangay_name: "Don Faustino Pagaduan",
  },
  {
    barangay_id: 5498,
    municipality_id: 215,
    barangay_name: "Don Mariano Perez, Sr.",
  },
  {
    barangay_id: 5499,
    municipality_id: 215,
    barangay_name: "Doña Imelda",
  },
  {
    barangay_id: 5500,
    municipality_id: 215,
    barangay_name: "Dumanisi",
  },
  {
    barangay_id: 5501,
    municipality_id: 215,
    barangay_name: "Gabriela Silang",
  },
  {
    barangay_id: 5520,
    municipality_id: 215,
    barangay_name: "Gregorio Pimentel",
  },
  {
    barangay_id: 5502,
    municipality_id: 215,
    barangay_name: "Gulac",
  },
  {
    barangay_id: 5503,
    municipality_id: 215,
    barangay_name: "Guribang",
  },
  {
    barangay_id: 5504,
    municipality_id: 215,
    barangay_name: "Ifugao Village",
  },
  {
    barangay_id: 5505,
    municipality_id: 215,
    barangay_name: "Isidro Paredes",
  },
  {
    barangay_id: 5507,
    municipality_id: 215,
    barangay_name: "Liwayway",
  },
  {
    barangay_id: 5508,
    municipality_id: 215,
    barangay_name: "Luttuad",
  },
  {
    barangay_id: 5509,
    municipality_id: 215,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 5510,
    municipality_id: 215,
    barangay_name: "Makate",
  },
  {
    barangay_id: 5511,
    municipality_id: 215,
    barangay_name: "Maria Clara",
  },
  {
    barangay_id: 5512,
    municipality_id: 215,
    barangay_name: "Rafael Palma",
  },
  {
    barangay_id: 5513,
    municipality_id: 215,
    barangay_name: "Ricarte Norte",
  },
  {
    barangay_id: 5514,
    municipality_id: 215,
    barangay_name: "Ricarte Sur",
  },
  {
    barangay_id: 5506,
    municipality_id: 215,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 5515,
    municipality_id: 215,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 5516,
    municipality_id: 215,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 5517,
    municipality_id: 215,
    barangay_name: "San Pascual",
  },
  {
    barangay_id: 5518,
    municipality_id: 215,
    barangay_name: "Villa Pascua",
  },
  {
    barangay_id: 5522,
    municipality_id: 216,
    barangay_name: "Abbag",
  },
  {
    barangay_id: 5523,
    municipality_id: 216,
    barangay_name: "Balligui",
  },
  {
    barangay_id: 5525,
    municipality_id: 216,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 5526,
    municipality_id: 216,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 5527,
    municipality_id: 216,
    barangay_name: "Cabua-an",
  },
  {
    barangay_id: 5528,
    municipality_id: 216,
    barangay_name: "Cofcaville",
  },
  {
    barangay_id: 5529,
    municipality_id: 216,
    barangay_name: "Diduyon",
  },
  {
    barangay_id: 5530,
    municipality_id: 216,
    barangay_name: "Dipintin",
  },
  {
    barangay_id: 5531,
    municipality_id: 216,
    barangay_name: "Divisoria Norte",
  },
  {
    barangay_id: 5524,
    municipality_id: 216,
    barangay_name: "Divisoria Sur",
  },
  {
    barangay_id: 5532,
    municipality_id: 216,
    barangay_name: "Dumabato Norte",
  },
  {
    barangay_id: 5533,
    municipality_id: 216,
    barangay_name: "Dumabato Sur",
  },
  {
    barangay_id: 5552,
    municipality_id: 216,
    barangay_name: "Jose Ancheta",
  },
  {
    barangay_id: 5534,
    municipality_id: 216,
    barangay_name: "Lusod",
  },
  {
    barangay_id: 5535,
    municipality_id: 216,
    barangay_name: "Manglad",
  },
  {
    barangay_id: 5536,
    municipality_id: 216,
    barangay_name: "Pedlisan",
  },
  {
    barangay_id: 5537,
    municipality_id: 216,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 5550,
    municipality_id: 216,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 5538,
    municipality_id: 216,
    barangay_name: "San Bernabe",
  },
  {
    barangay_id: 5539,
    municipality_id: 216,
    barangay_name: "San Dionisio I",
  },
  {
    barangay_id: 5540,
    municipality_id: 216,
    barangay_name: "San Martin",
  },
  {
    barangay_id: 5541,
    municipality_id: 216,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 5542,
    municipality_id: 216,
    barangay_name: "San Salvador",
  },
  {
    barangay_id: 5553,
    municipality_id: 216,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 5543,
    municipality_id: 216,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 5544,
    municipality_id: 216,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 5549,
    municipality_id: 216,
    barangay_name: "Villa Agullana",
  },
  {
    barangay_id: 5545,
    municipality_id: 216,
    barangay_name: "Villa Gracia",
  },
  {
    barangay_id: 5547,
    municipality_id: 216,
    barangay_name: "Villa Hermosa Norte",
  },
  {
    barangay_id: 5546,
    municipality_id: 216,
    barangay_name: "Villa Hermosa Sur",
  },
  {
    barangay_id: 5551,
    municipality_id: 216,
    barangay_name: "Villa Jose V Ylanan",
  },
  {
    barangay_id: 5548,
    municipality_id: 216,
    barangay_name: "Ysmael",
  },
  {
    barangay_id: 5561,
    municipality_id: 217,
    barangay_name: "Cardenas",
  },
  {
    barangay_id: 5554,
    municipality_id: 217,
    barangay_name: "Dibul",
  },
  {
    barangay_id: 5562,
    municipality_id: 217,
    barangay_name: "Gamis",
  },
  {
    barangay_id: 5555,
    municipality_id: 217,
    barangay_name: "La Paz",
  },
  {
    barangay_id: 5556,
    municipality_id: 217,
    barangay_name: "Magsaysay (Pob.)",
  },
  {
    barangay_id: 5557,
    municipality_id: 217,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 5558,
    municipality_id: 217,
    barangay_name: "Salvacion",
  },
  {
    barangay_id: 5559,
    municipality_id: 217,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 5560,
    municipality_id: 217,
    barangay_name: "Tres Reyes",
  },
  {
    barangay_id: 5563,
    municipality_id: 218,
    barangay_name: "Anak",
  },
  {
    barangay_id: 5578,
    municipality_id: 218,
    barangay_name: "Asaklat",
  },
  {
    barangay_id: 5564,
    municipality_id: 218,
    barangay_name: "Dipantan",
  },
  {
    barangay_id: 5565,
    municipality_id: 218,
    barangay_name: "Dissimungal",
  },
  {
    barangay_id: 5566,
    municipality_id: 218,
    barangay_name: "Guino",
  },
  {
    barangay_id: 5567,
    municipality_id: 218,
    barangay_name: "La Conwap",
  },
  {
    barangay_id: 5568,
    municipality_id: 218,
    barangay_name: "Landingan",
  },
  {
    barangay_id: 5569,
    municipality_id: 218,
    barangay_name: "Mataddi",
  },
  {
    barangay_id: 5570,
    municipality_id: 218,
    barangay_name: "Matmad",
  },
  {
    barangay_id: 5571,
    municipality_id: 218,
    barangay_name: "Old Gumiad",
  },
  {
    barangay_id: 5572,
    municipality_id: 218,
    barangay_name: "Ponggo",
  },
  {
    barangay_id: 5573,
    municipality_id: 218,
    barangay_name: "San Dionisio II",
  },
  {
    barangay_id: 5574,
    municipality_id: 218,
    barangay_name: "San Pugo",
  },
  {
    barangay_id: 5575,
    municipality_id: 218,
    barangay_name: "San Ramos",
  },
  {
    barangay_id: 5576,
    municipality_id: 218,
    barangay_name: "Sangbay",
  },
  {
    barangay_id: 5577,
    municipality_id: 218,
    barangay_name: "Wasid",
  },
  {
    barangay_id: 5579,
    municipality_id: 219,
    barangay_name: "Bangkal",
  },
  {
    barangay_id: 5580,
    municipality_id: 219,
    barangay_name: "Calaylayan (Pob.)",
  },
  {
    barangay_id: 5581,
    municipality_id: 219,
    barangay_name: "Capitangan",
  },
  {
    barangay_id: 5582,
    municipality_id: 219,
    barangay_name: "Gabon",
  },
  {
    barangay_id: 5583,
    municipality_id: 219,
    barangay_name: "Laon (Pob.)",
  },
  {
    barangay_id: 5584,
    municipality_id: 219,
    barangay_name: "Mabatang",
  },
  {
    barangay_id: 5585,
    municipality_id: 219,
    barangay_name: "Omboy",
  },
  {
    barangay_id: 5586,
    municipality_id: 219,
    barangay_name: "Salian",
  },
  {
    barangay_id: 5587,
    municipality_id: 219,
    barangay_name: "Wawa (Pob.)",
  },
  {
    barangay_id: 5601,
    municipality_id: 220,
    barangay_name: "Atilano L. Ricardo",
  },
  {
    barangay_id: 5588,
    municipality_id: 220,
    barangay_name: "Bagumbayan (Pob.)",
  },
  {
    barangay_id: 5589,
    municipality_id: 220,
    barangay_name: "Banawang",
  },
  {
    barangay_id: 5590,
    municipality_id: 220,
    barangay_name: "Binuangan",
  },
  {
    barangay_id: 5591,
    municipality_id: 220,
    barangay_name: "Binukawan",
  },
  {
    barangay_id: 5592,
    municipality_id: 220,
    barangay_name: "Ibaba",
  },
  {
    barangay_id: 5593,
    municipality_id: 220,
    barangay_name: "Ibis",
  },
  {
    barangay_id: 5594,
    municipality_id: 220,
    barangay_name: "Pag-asa",
  },
  {
    barangay_id: 5595,
    municipality_id: 220,
    barangay_name: "Parang",
  },
  {
    barangay_id: 5596,
    municipality_id: 220,
    barangay_name: "Paysawan",
  },
  {
    barangay_id: 5597,
    municipality_id: 220,
    barangay_name: "Quinawan",
  },
  {
    barangay_id: 5598,
    municipality_id: 220,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 5599,
    municipality_id: 220,
    barangay_name: "Saysain",
  },
  {
    barangay_id: 5600,
    municipality_id: 220,
    barangay_name: "Tabing-Ilog (Pob.)",
  },
  {
    barangay_id: 5623,
    municipality_id: 221,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 5602,
    municipality_id: 221,
    barangay_name: "Bagumbayan",
  },
  {
    barangay_id: 5603,
    municipality_id: 221,
    barangay_name: "Cabog-Cabog",
  },
  {
    barangay_id: 5617,
    municipality_id: 221,
    barangay_name: "Camacho",
  },
  {
    barangay_id: 5605,
    municipality_id: 221,
    barangay_name: "Cataning",
  },
  {
    barangay_id: 5606,
    municipality_id: 221,
    barangay_name: "Central",
  },
  {
    barangay_id: 5624,
    municipality_id: 221,
    barangay_name: "Cupang North",
  },
  {
    barangay_id: 5607,
    municipality_id: 221,
    barangay_name: "Cupang Proper",
  },
  {
    barangay_id: 5608,
    municipality_id: 221,
    barangay_name: "Cupang West",
  },
  {
    barangay_id: 5609,
    municipality_id: 221,
    barangay_name: "Dangcol",
  },
  {
    barangay_id: 5625,
    municipality_id: 221,
    barangay_name: "Doña Francisca",
  },
  {
    barangay_id: 5610,
    municipality_id: 221,
    barangay_name: "Ibayo",
  },
  {
    barangay_id: 5626,
    municipality_id: 221,
    barangay_name: "Lote",
  },
  {
    barangay_id: 5611,
    municipality_id: 221,
    barangay_name: "Malabia",
  },
  {
    barangay_id: 5604,
    municipality_id: 221,
    barangay_name: "Munting Batangas",
  },
  {
    barangay_id: 5612,
    municipality_id: 221,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5613,
    municipality_id: 221,
    barangay_name: "Pto. Rivas Ibaba",
  },
  {
    barangay_id: 5614,
    municipality_id: 221,
    barangay_name: "Pto. Rivas Itaas",
  },
  {
    barangay_id: 5615,
    municipality_id: 221,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 5616,
    municipality_id: 221,
    barangay_name: "Sibacan",
  },
  {
    barangay_id: 5618,
    municipality_id: 221,
    barangay_name: "Talisay",
  },
  {
    barangay_id: 5619,
    municipality_id: 221,
    barangay_name: "Tanato",
  },
  {
    barangay_id: 5620,
    municipality_id: 221,
    barangay_name: "Tenejero",
  },
  {
    barangay_id: 5621,
    municipality_id: 221,
    barangay_name: "Tortugas",
  },
  {
    barangay_id: 5622,
    municipality_id: 221,
    barangay_name: "Tuyo",
  },
  {
    barangay_id: 5666,
    municipality_id: 222,
    barangay_name: "Aquino",
  },
  {
    barangay_id: 5627,
    municipality_id: 222,
    barangay_name: "Bangal",
  },
  {
    barangay_id: 5667,
    municipality_id: 222,
    barangay_name: "Bayan-bayanan",
  },
  {
    barangay_id: 5628,
    municipality_id: 222,
    barangay_name: "Bonifacio (Pob.)",
  },
  {
    barangay_id: 5629,
    municipality_id: 222,
    barangay_name: "Burgos (Pob.)",
  },
  {
    barangay_id: 5630,
    municipality_id: 222,
    barangay_name: "Colo",
  },
  {
    barangay_id: 5631,
    municipality_id: 222,
    barangay_name: "Daang Bago",
  },
  {
    barangay_id: 5632,
    municipality_id: 222,
    barangay_name: "Dalao",
  },
  {
    barangay_id: 5633,
    municipality_id: 222,
    barangay_name: "Del Pilar (Pob.)",
  },
  {
    barangay_id: 5634,
    municipality_id: 222,
    barangay_name: "Gen. Luna (Pob.)",
  },
  {
    barangay_id: 5635,
    municipality_id: 222,
    barangay_name: "Gomez (Pob.)",
  },
  {
    barangay_id: 5636,
    municipality_id: 222,
    barangay_name: "Happy Valley",
  },
  {
    barangay_id: 5672,
    municipality_id: 222,
    barangay_name: "Jose C. Payumo, Jr.",
  },
  {
    barangay_id: 5637,
    municipality_id: 222,
    barangay_name: "Kataasan",
  },
  {
    barangay_id: 5638,
    municipality_id: 222,
    barangay_name: "Layac",
  },
  {
    barangay_id: 5639,
    municipality_id: 222,
    barangay_name: "Luacan",
  },
  {
    barangay_id: 5641,
    municipality_id: 222,
    barangay_name: "Mabini Ext. (Pob.)",
  },
  {
    barangay_id: 5640,
    municipality_id: 222,
    barangay_name: "Mabini Proper (Pob.)",
  },
  {
    barangay_id: 5642,
    municipality_id: 222,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 5668,
    municipality_id: 222,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 5643,
    municipality_id: 222,
    barangay_name: "Naparing",
  },
  {
    barangay_id: 5644,
    municipality_id: 222,
    barangay_name: "New San Jose",
  },
  {
    barangay_id: 5645,
    municipality_id: 222,
    barangay_name: "Old San Jose",
  },
  {
    barangay_id: 5646,
    municipality_id: 222,
    barangay_name: "Padre Dandan (Pob.)",
  },
  {
    barangay_id: 5647,
    municipality_id: 222,
    barangay_name: "Pag-asa",
  },
  {
    barangay_id: 5648,
    municipality_id: 222,
    barangay_name: "Pagalanggang",
  },
  {
    barangay_id: 5669,
    municipality_id: 222,
    barangay_name: "Payangan",
  },
  {
    barangay_id: 5670,
    municipality_id: 222,
    barangay_name: "Pentor",
  },
  {
    barangay_id: 5649,
    municipality_id: 222,
    barangay_name: "Pinulot",
  },
  {
    barangay_id: 5650,
    municipality_id: 222,
    barangay_name: "Pita",
  },
  {
    barangay_id: 5651,
    municipality_id: 222,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 5652,
    municipality_id: 222,
    barangay_name: "Roosevelt",
  },
  {
    barangay_id: 5653,
    municipality_id: 222,
    barangay_name: "Roxas (Pob.)",
  },
  {
    barangay_id: 5654,
    municipality_id: 222,
    barangay_name: "Saguing",
  },
  {
    barangay_id: 5655,
    municipality_id: 222,
    barangay_name: "San Benito",
  },
  {
    barangay_id: 5656,
    municipality_id: 222,
    barangay_name: "San Isidro (Pob.)",
  },
  {
    barangay_id: 5657,
    municipality_id: 222,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 5658,
    municipality_id: 222,
    barangay_name: "San Ramon",
  },
  {
    barangay_id: 5659,
    municipality_id: 222,
    barangay_name: "San Simon",
  },
  {
    barangay_id: 5662,
    municipality_id: 222,
    barangay_name: "Santa Isabel",
  },
  {
    barangay_id: 5660,
    municipality_id: 222,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 5661,
    municipality_id: 222,
    barangay_name: "Sapang Balas",
  },
  {
    barangay_id: 5663,
    municipality_id: 222,
    barangay_name: "Torres Bugauen (Pob.)",
  },
  {
    barangay_id: 5671,
    municipality_id: 222,
    barangay_name: "Tubo-tubo",
  },
  {
    barangay_id: 5664,
    municipality_id: 222,
    barangay_name: "Tucop",
  },
  {
    barangay_id: 5665,
    municipality_id: 222,
    barangay_name: "Zamora (Pob.)",
  },
  {
    barangay_id: 5673,
    municipality_id: 223,
    barangay_name: "A. Rivera (Pob.)",
  },
  {
    barangay_id: 5674,
    municipality_id: 223,
    barangay_name: "Almacen",
  },
  {
    barangay_id: 5675,
    municipality_id: 223,
    barangay_name: "Bacong",
  },
  {
    barangay_id: 5676,
    municipality_id: 223,
    barangay_name: "Balsic",
  },
  {
    barangay_id: 5677,
    municipality_id: 223,
    barangay_name: "Bamban",
  },
  {
    barangay_id: 5678,
    municipality_id: 223,
    barangay_name: "Burgos-Soliman (Pob.)",
  },
  {
    barangay_id: 5679,
    municipality_id: 223,
    barangay_name: "Cataning (Pob.)",
  },
  {
    barangay_id: 5680,
    municipality_id: 223,
    barangay_name: "Culis",
  },
  {
    barangay_id: 5681,
    municipality_id: 223,
    barangay_name: "Daungan (Pob.)",
  },
  {
    barangay_id: 5694,
    municipality_id: 223,
    barangay_name: "Judge Roman Cruz Sr.",
  },
  {
    barangay_id: 5682,
    municipality_id: 223,
    barangay_name: "Mabiga",
  },
  {
    barangay_id: 5683,
    municipality_id: 223,
    barangay_name: "Mabuco",
  },
  {
    barangay_id: 5684,
    municipality_id: 223,
    barangay_name: "Maite",
  },
  {
    barangay_id: 5685,
    municipality_id: 223,
    barangay_name: "Mambog - Mandama",
  },
  {
    barangay_id: 5686,
    municipality_id: 223,
    barangay_name: "Palihan",
  },
  {
    barangay_id: 5687,
    municipality_id: 223,
    barangay_name: "Pandatung",
  },
  {
    barangay_id: 5688,
    municipality_id: 223,
    barangay_name: "Pulo",
  },
  {
    barangay_id: 5689,
    municipality_id: 223,
    barangay_name: "Saba",
  },
  {
    barangay_id: 5695,
    municipality_id: 223,
    barangay_name: "Sacrifice Valley",
  },
  {
    barangay_id: 5690,
    municipality_id: 223,
    barangay_name: "San Pedro (Pob.)",
  },
  {
    barangay_id: 5691,
    municipality_id: 223,
    barangay_name: "Santo Cristo (Pob.)",
  },
  {
    barangay_id: 5692,
    municipality_id: 223,
    barangay_name: "Sumalo",
  },
  {
    barangay_id: 5693,
    municipality_id: 223,
    barangay_name: "Tipo",
  },
  {
    barangay_id: 5696,
    municipality_id: 224,
    barangay_name: "Alangan",
  },
  {
    barangay_id: 5705,
    municipality_id: 224,
    barangay_name: "Duale",
  },
  {
    barangay_id: 5698,
    municipality_id: 224,
    barangay_name: "Kitang 2 & Luz",
  },
  {
    barangay_id: 5697,
    municipality_id: 224,
    barangay_name: "Kitang I",
  },
  {
    barangay_id: 5699,
    municipality_id: 224,
    barangay_name: "Lamao",
  },
  {
    barangay_id: 5700,
    municipality_id: 224,
    barangay_name: "Landing",
  },
  {
    barangay_id: 5701,
    municipality_id: 224,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5702,
    municipality_id: 224,
    barangay_name: "Reformista",
  },
  {
    barangay_id: 5706,
    municipality_id: 224,
    barangay_name: "San Francisco de Asis",
  },
  {
    barangay_id: 5707,
    municipality_id: 224,
    barangay_name: "St. Francis II",
  },
  {
    barangay_id: 5703,
    municipality_id: 224,
    barangay_name: "Townsite",
  },
  {
    barangay_id: 5704,
    municipality_id: 224,
    barangay_name: "Wawa",
  },
  {
    barangay_id: 5708,
    municipality_id: 225,
    barangay_name: "Alas-asin",
  },
  {
    barangay_id: 5709,
    municipality_id: 225,
    barangay_name: "Alion",
  },
  {
    barangay_id: 5718,
    municipality_id: 225,
    barangay_name: "Balon-Anito",
  },
  {
    barangay_id: 5713,
    municipality_id: 225,
    barangay_name: "Baseco Country",
  },
  {
    barangay_id: 5710,
    municipality_id: 225,
    barangay_name: "Batangas II",
  },
  {
    barangay_id: 5719,
    municipality_id: 225,
    barangay_name: "Biaan",
  },
  {
    barangay_id: 5711,
    municipality_id: 225,
    barangay_name: "Cabcaben",
  },
  {
    barangay_id: 5720,
    municipality_id: 225,
    barangay_name: "Camaya",
  },
  {
    barangay_id: 5721,
    municipality_id: 225,
    barangay_name: "Ipag",
  },
  {
    barangay_id: 5712,
    municipality_id: 225,
    barangay_name: "Lucanin",
  },
  {
    barangay_id: 5722,
    municipality_id: 225,
    barangay_name: "Malaya",
  },
  {
    barangay_id: 5723,
    municipality_id: 225,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 5724,
    municipality_id: 225,
    barangay_name: "Mt. View",
  },
  {
    barangay_id: 5714,
    municipality_id: 225,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5715,
    municipality_id: 225,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 5716,
    municipality_id: 225,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 5717,
    municipality_id: 225,
    barangay_name: "Sisiman",
  },
  {
    barangay_id: 5725,
    municipality_id: 225,
    barangay_name: "Townsite",
  },
  {
    barangay_id: 5726,
    municipality_id: 226,
    barangay_name: "Binaritan",
  },
  {
    barangay_id: 5727,
    municipality_id: 226,
    barangay_name: "Mabayo",
  },
  {
    barangay_id: 5728,
    municipality_id: 226,
    barangay_name: "Nagbalayong",
  },
  {
    barangay_id: 5729,
    municipality_id: 226,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5730,
    municipality_id: 226,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 5755,
    municipality_id: 227,
    barangay_name: "Apollo",
  },
  {
    barangay_id: 5731,
    municipality_id: 227,
    barangay_name: "Bagong Paraiso (Pob.)",
  },
  {
    barangay_id: 5732,
    municipality_id: 227,
    barangay_name: "Balut (Pob.)",
  },
  {
    barangay_id: 5733,
    municipality_id: 227,
    barangay_name: "Bayan (Pob.)",
  },
  {
    barangay_id: 5734,
    municipality_id: 227,
    barangay_name: "Calero (Pob.)",
  },
  {
    barangay_id: 5746,
    municipality_id: 227,
    barangay_name: "Centro I (Pob.)",
  },
  {
    barangay_id: 5736,
    municipality_id: 227,
    barangay_name: "Centro II (Pob.)",
  },
  {
    barangay_id: 5737,
    municipality_id: 227,
    barangay_name: "Dona",
  },
  {
    barangay_id: 5756,
    municipality_id: 227,
    barangay_name: "Kabalutan",
  },
  {
    barangay_id: 5738,
    municipality_id: 227,
    barangay_name: "Kaparangan",
  },
  {
    barangay_id: 5757,
    municipality_id: 227,
    barangay_name: "Maria Fe",
  },
  {
    barangay_id: 5739,
    municipality_id: 227,
    barangay_name: "Masantol",
  },
  {
    barangay_id: 5740,
    municipality_id: 227,
    barangay_name: "Mulawin",
  },
  {
    barangay_id: 5741,
    municipality_id: 227,
    barangay_name: "Pag-asa",
  },
  {
    barangay_id: 5735,
    municipality_id: 227,
    barangay_name: "Paking-Carbonero (Pob.)",
  },
  {
    barangay_id: 5742,
    municipality_id: 227,
    barangay_name: "Palihan (Pob.)",
  },
  {
    barangay_id: 5743,
    municipality_id: 227,
    barangay_name: "Pantalan Bago (Pob.)",
  },
  {
    barangay_id: 5744,
    municipality_id: 227,
    barangay_name: "Pantalan Luma (Pob.)",
  },
  {
    barangay_id: 5745,
    municipality_id: 227,
    barangay_name: "Parang Parang (Pob.)",
  },
  {
    barangay_id: 5758,
    municipality_id: 227,
    barangay_name: "Puksuan",
  },
  {
    barangay_id: 5747,
    municipality_id: 227,
    barangay_name: "Sibul",
  },
  {
    barangay_id: 5748,
    municipality_id: 227,
    barangay_name: "Silahis",
  },
  {
    barangay_id: 5759,
    municipality_id: 227,
    barangay_name: "Tagumpay",
  },
  {
    barangay_id: 5749,
    municipality_id: 227,
    barangay_name: "Tala",
  },
  {
    barangay_id: 5750,
    municipality_id: 227,
    barangay_name: "Talimundoc",
  },
  {
    barangay_id: 5751,
    municipality_id: 227,
    barangay_name: "Tapulao",
  },
  {
    barangay_id: 5752,
    municipality_id: 227,
    barangay_name: "Tenejero (Pob.)",
  },
  {
    barangay_id: 5753,
    municipality_id: 227,
    barangay_name: "Tugatog",
  },
  {
    barangay_id: 5754,
    municipality_id: 227,
    barangay_name: "Wawa (Pob.)",
  },
  {
    barangay_id: 5760,
    municipality_id: 228,
    barangay_name: "Arellano (Pob.)",
  },
  {
    barangay_id: 5761,
    municipality_id: 228,
    barangay_name: "Bagumbayan (Pob.)",
  },
  {
    barangay_id: 5762,
    municipality_id: 228,
    barangay_name: "Balagtas (Pob.)",
  },
  {
    barangay_id: 5763,
    municipality_id: 228,
    barangay_name: "Balut (Pob.)",
  },
  {
    barangay_id: 5764,
    municipality_id: 228,
    barangay_name: "Bantan",
  },
  {
    barangay_id: 5765,
    municipality_id: 228,
    barangay_name: "Bilolo",
  },
  {
    barangay_id: 5766,
    municipality_id: 228,
    barangay_name: "Calungusan",
  },
  {
    barangay_id: 5767,
    municipality_id: 228,
    barangay_name: "Camachile",
  },
  {
    barangay_id: 5768,
    municipality_id: 228,
    barangay_name: "Daang Bago (Pob.)",
  },
  {
    barangay_id: 5769,
    municipality_id: 228,
    barangay_name: "Daang Bilolo (Pob.)",
  },
  {
    barangay_id: 5770,
    municipality_id: 228,
    barangay_name: "Daang Pare",
  },
  {
    barangay_id: 5771,
    municipality_id: 228,
    barangay_name: "General Lim",
  },
  {
    barangay_id: 5772,
    municipality_id: 228,
    barangay_name: "Kapunitan",
  },
  {
    barangay_id: 5773,
    municipality_id: 228,
    barangay_name: "Lati (Pob.)",
  },
  {
    barangay_id: 5774,
    municipality_id: 228,
    barangay_name: "Lusungan (Pob.)",
  },
  {
    barangay_id: 5775,
    municipality_id: 228,
    barangay_name: "Puting Buhangin",
  },
  {
    barangay_id: 5776,
    municipality_id: 228,
    barangay_name: "Sabatan",
  },
  {
    barangay_id: 5777,
    municipality_id: 228,
    barangay_name: "San Vicente (Pob.)",
  },
  {
    barangay_id: 5782,
    municipality_id: 228,
    barangay_name: "Santa Elena",
  },
  {
    barangay_id: 5778,
    municipality_id: 228,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 5779,
    municipality_id: 228,
    barangay_name: "Villa Angeles (Pob.)",
  },
  {
    barangay_id: 5780,
    municipality_id: 228,
    barangay_name: "Wakas (Pob.)",
  },
  {
    barangay_id: 5781,
    municipality_id: 228,
    barangay_name: "Wawa (Pob.)",
  },
  {
    barangay_id: 5783,
    municipality_id: 229,
    barangay_name: "Ala-uli",
  },
  {
    barangay_id: 5784,
    municipality_id: 229,
    barangay_name: "Bagumbayan",
  },
  {
    barangay_id: 5785,
    municipality_id: 229,
    barangay_name: "Balut I",
  },
  {
    barangay_id: 5786,
    municipality_id: 229,
    barangay_name: "Balut II",
  },
  {
    barangay_id: 5787,
    municipality_id: 229,
    barangay_name: "Bantan Munti",
  },
  {
    barangay_id: 5788,
    municipality_id: 229,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 5789,
    municipality_id: 229,
    barangay_name: "Del Rosario (Pob.)",
  },
  {
    barangay_id: 5790,
    municipality_id: 229,
    barangay_name: "Diwa",
  },
  {
    barangay_id: 5791,
    municipality_id: 229,
    barangay_name: "Landing",
  },
  {
    barangay_id: 5792,
    municipality_id: 229,
    barangay_name: "Liyang",
  },
  {
    barangay_id: 5793,
    municipality_id: 229,
    barangay_name: "Nagwaling",
  },
  {
    barangay_id: 5794,
    municipality_id: 229,
    barangay_name: "Panilao",
  },
  {
    barangay_id: 5795,
    municipality_id: 229,
    barangay_name: "Pantingan",
  },
  {
    barangay_id: 5796,
    municipality_id: 229,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5797,
    municipality_id: 229,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 5798,
    municipality_id: 229,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 5799,
    municipality_id: 229,
    barangay_name: "Wakas North",
  },
  {
    barangay_id: 5800,
    municipality_id: 229,
    barangay_name: "Wakas South",
  },
  {
    barangay_id: 5801,
    municipality_id: 229,
    barangay_name: "Wawa",
  },
  {
    barangay_id: 5802,
    municipality_id: 230,
    barangay_name: "East Calaguiman (Pob.)",
  },
  {
    barangay_id: 5803,
    municipality_id: 230,
    barangay_name: "East Daang Bago (Pob.)",
  },
  {
    barangay_id: 5813,
    municipality_id: 230,
    barangay_name: "Gugo",
  },
  {
    barangay_id: 5804,
    municipality_id: 230,
    barangay_name: "Ibaba (Pob.)",
  },
  {
    barangay_id: 5805,
    municipality_id: 230,
    barangay_name: "Imelda",
  },
  {
    barangay_id: 5806,
    municipality_id: 230,
    barangay_name: "Lalawigan",
  },
  {
    barangay_id: 5807,
    municipality_id: 230,
    barangay_name: "Palili",
  },
  {
    barangay_id: 5808,
    municipality_id: 230,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 5809,
    municipality_id: 230,
    barangay_name: "San Roque (Pob.)",
  },
  {
    barangay_id: 5810,
    municipality_id: 230,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 5811,
    municipality_id: 230,
    barangay_name: "Sapa",
  },
  {
    barangay_id: 5812,
    municipality_id: 230,
    barangay_name: "Tabing Ilog",
  },
  {
    barangay_id: 5814,
    municipality_id: 230,
    barangay_name: "West Calaguiman (Pob.)",
  },
  {
    barangay_id: 5815,
    municipality_id: 230,
    barangay_name: "West Daang Bago (Pob.)",
  },
  {
    barangay_id: 5816,
    municipality_id: 231,
    barangay_name: "Banaban",
  },
  {
    barangay_id: 5817,
    municipality_id: 231,
    barangay_name: "Baybay",
  },
  {
    barangay_id: 5818,
    municipality_id: 231,
    barangay_name: "Binagbag",
  },
  {
    barangay_id: 5819,
    municipality_id: 231,
    barangay_name: "Donacion",
  },
  {
    barangay_id: 5820,
    municipality_id: 231,
    barangay_name: "Encanto",
  },
  {
    barangay_id: 5821,
    municipality_id: 231,
    barangay_name: "Laog",
  },
  {
    barangay_id: 5822,
    municipality_id: 231,
    barangay_name: "Marungko",
  },
  {
    barangay_id: 5823,
    municipality_id: 231,
    barangay_name: "Niugan",
  },
  {
    barangay_id: 5824,
    municipality_id: 231,
    barangay_name: "Paltok",
  },
  {
    barangay_id: 5825,
    municipality_id: 231,
    barangay_name: "Pulong Yantok",
  },
  {
    barangay_id: 5826,
    municipality_id: 231,
    barangay_name: "San Roque (Pob.)",
  },
  {
    barangay_id: 5827,
    municipality_id: 231,
    barangay_name: "Santa Cruz (Pob.)",
  },
  {
    barangay_id: 5828,
    municipality_id: 231,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 5829,
    municipality_id: 231,
    barangay_name: "Santo Cristo (Pob.)",
  },
  {
    barangay_id: 5830,
    municipality_id: 231,
    barangay_name: "Sulucan",
  },
  {
    barangay_id: 5831,
    municipality_id: 231,
    barangay_name: "Taboc",
  },
  {
    barangay_id: 5833,
    municipality_id: 232,
    barangay_name: "Borol 1st",
  },
  {
    barangay_id: 5832,
    municipality_id: 232,
    barangay_name: "Borol 2nd",
  },
  {
    barangay_id: 5834,
    municipality_id: 232,
    barangay_name: "Dalig",
  },
  {
    barangay_id: 5835,
    municipality_id: 232,
    barangay_name: "Longos",
  },
  {
    barangay_id: 5836,
    municipality_id: 232,
    barangay_name: "Panginay",
  },
  {
    barangay_id: 5837,
    municipality_id: 232,
    barangay_name: "Pulong Gubat",
  },
  {
    barangay_id: 5838,
    municipality_id: 232,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 5839,
    municipality_id: 232,
    barangay_name: "Santol",
  },
  {
    barangay_id: 5840,
    municipality_id: 232,
    barangay_name: "Wawa (Pob.)",
  },
  {
    barangay_id: 5841,
    municipality_id: 233,
    barangay_name: "Bagong Nayon",
  },
  {
    barangay_id: 5842,
    municipality_id: 233,
    barangay_name: "Barangca",
  },
  {
    barangay_id: 5843,
    municipality_id: 233,
    barangay_name: "Calantipay",
  },
  {
    barangay_id: 5844,
    municipality_id: 233,
    barangay_name: "Catulinan",
  },
  {
    barangay_id: 5845,
    municipality_id: 233,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 5846,
    municipality_id: 233,
    barangay_name: "Hinukay",
  },
  {
    barangay_id: 5847,
    municipality_id: 233,
    barangay_name: "Makinabang",
  },
  {
    barangay_id: 5848,
    municipality_id: 233,
    barangay_name: "Matangtubig",
  },
  {
    barangay_id: 5849,
    municipality_id: 233,
    barangay_name: "Pagala",
  },
  {
    barangay_id: 5850,
    municipality_id: 233,
    barangay_name: "Paitan",
  },
  {
    barangay_id: 5851,
    municipality_id: 233,
    barangay_name: "Piel",
  },
  {
    barangay_id: 5852,
    municipality_id: 233,
    barangay_name: "Pinagbarilan",
  },
  {
    barangay_id: 5853,
    municipality_id: 233,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5854,
    municipality_id: 233,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 5855,
    municipality_id: 233,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 5856,
    municipality_id: 233,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 5857,
    municipality_id: 233,
    barangay_name: "Santa Barbara",
  },
  {
    barangay_id: 5858,
    municipality_id: 233,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 5859,
    municipality_id: 233,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 5860,
    municipality_id: 233,
    barangay_name: "Subic",
  },
  {
    barangay_id: 5861,
    municipality_id: 233,
    barangay_name: "Sulivan",
  },
  {
    barangay_id: 5862,
    municipality_id: 233,
    barangay_name: "Tangos",
  },
  {
    barangay_id: 5863,
    municipality_id: 233,
    barangay_name: "Tarcan",
  },
  {
    barangay_id: 5864,
    municipality_id: 233,
    barangay_name: "Tiaong",
  },
  {
    barangay_id: 5865,
    municipality_id: 233,
    barangay_name: "Tibag",
  },
  {
    barangay_id: 5866,
    municipality_id: 233,
    barangay_name: "Tilapayong",
  },
  {
    barangay_id: 5867,
    municipality_id: 233,
    barangay_name: "Virgen delas Flores",
  },
  {
    barangay_id: 5868,
    municipality_id: 234,
    barangay_name: "Antipona",
  },
  {
    barangay_id: 5869,
    municipality_id: 234,
    barangay_name: "Bagumbayan",
  },
  {
    barangay_id: 5870,
    municipality_id: 234,
    barangay_name: "Bambang",
  },
  {
    barangay_id: 5871,
    municipality_id: 234,
    barangay_name: "Batia",
  },
  {
    barangay_id: 5872,
    municipality_id: 234,
    barangay_name: "Biñang 1st",
  },
  {
    barangay_id: 5873,
    municipality_id: 234,
    barangay_name: "Biñang 2nd",
  },
  {
    barangay_id: 5874,
    municipality_id: 234,
    barangay_name: "Bolacan",
  },
  {
    barangay_id: 5875,
    municipality_id: 234,
    barangay_name: "Bundukan",
  },
  {
    barangay_id: 5876,
    municipality_id: 234,
    barangay_name: "Bunlo",
  },
  {
    barangay_id: 5877,
    municipality_id: 234,
    barangay_name: "Caingin",
  },
  {
    barangay_id: 5878,
    municipality_id: 234,
    barangay_name: "Duhat",
  },
  {
    barangay_id: 5879,
    municipality_id: 234,
    barangay_name: "Igulot",
  },
  {
    barangay_id: 5880,
    municipality_id: 234,
    barangay_name: "Lolomboy",
  },
  {
    barangay_id: 5881,
    municipality_id: 234,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5882,
    municipality_id: 234,
    barangay_name: "Sulucan",
  },
  {
    barangay_id: 5883,
    municipality_id: 234,
    barangay_name: "Taal",
  },
  {
    barangay_id: 5884,
    municipality_id: 234,
    barangay_name: "Tambobong",
  },
  {
    barangay_id: 5885,
    municipality_id: 234,
    barangay_name: "Turo",
  },
  {
    barangay_id: 5886,
    municipality_id: 234,
    barangay_name: "Wakas",
  },
  {
    barangay_id: 5887,
    municipality_id: 235,
    barangay_name: "Bagumbayan",
  },
  {
    barangay_id: 5888,
    municipality_id: 235,
    barangay_name: "Balubad",
  },
  {
    barangay_id: 5889,
    municipality_id: 235,
    barangay_name: "Bambang",
  },
  {
    barangay_id: 5890,
    municipality_id: 235,
    barangay_name: "Matungao",
  },
  {
    barangay_id: 5891,
    municipality_id: 235,
    barangay_name: "Maysantol",
  },
  {
    barangay_id: 5892,
    municipality_id: 235,
    barangay_name: "Perez",
  },
  {
    barangay_id: 5893,
    municipality_id: 235,
    barangay_name: "Pitpitan",
  },
  {
    barangay_id: 5894,
    municipality_id: 235,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 5895,
    municipality_id: 235,
    barangay_name: "San Jose (Pob.)",
  },
  {
    barangay_id: 5896,
    municipality_id: 235,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 5897,
    municipality_id: 235,
    barangay_name: "Santa Ana",
  },
  {
    barangay_id: 5898,
    municipality_id: 235,
    barangay_name: "Santa Ines",
  },
  {
    barangay_id: 5899,
    municipality_id: 235,
    barangay_name: "Taliptip",
  },
  {
    barangay_id: 5900,
    municipality_id: 235,
    barangay_name: "Tibig",
  },
  {
    barangay_id: 5901,
    municipality_id: 236,
    barangay_name: "Bonga Mayor",
  },
  {
    barangay_id: 5902,
    municipality_id: 236,
    barangay_name: "Bonga Menor",
  },
  {
    barangay_id: 5903,
    municipality_id: 236,
    barangay_name: "Buisan",
  },
  {
    barangay_id: 5904,
    municipality_id: 236,
    barangay_name: "Camachilihan",
  },
  {
    barangay_id: 5905,
    municipality_id: 236,
    barangay_name: "Cambaog",
  },
  {
    barangay_id: 5906,
    municipality_id: 236,
    barangay_name: "Catacte",
  },
  {
    barangay_id: 5907,
    municipality_id: 236,
    barangay_name: "Liciada",
  },
  {
    barangay_id: 5908,
    municipality_id: 236,
    barangay_name: "Malamig",
  },
  {
    barangay_id: 5909,
    municipality_id: 236,
    barangay_name: "Malawak",
  },
  {
    barangay_id: 5910,
    municipality_id: 236,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5911,
    municipality_id: 236,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 5912,
    municipality_id: 236,
    barangay_name: "Talampas",
  },
  {
    barangay_id: 5913,
    municipality_id: 236,
    barangay_name: "Tanawan",
  },
  {
    barangay_id: 5914,
    municipality_id: 236,
    barangay_name: "Tibagan",
  },
  {
    barangay_id: 5915,
    municipality_id: 237,
    barangay_name: "Balite",
  },
  {
    barangay_id: 5916,
    municipality_id: 237,
    barangay_name: "Balungao",
  },
  {
    barangay_id: 5917,
    municipality_id: 237,
    barangay_name: "Buguion",
  },
  {
    barangay_id: 5918,
    municipality_id: 237,
    barangay_name: "Bulusan",
  },
  {
    barangay_id: 5919,
    municipality_id: 237,
    barangay_name: "Calizon",
  },
  {
    barangay_id: 5920,
    municipality_id: 237,
    barangay_name: "Calumpang",
  },
  {
    barangay_id: 5921,
    municipality_id: 237,
    barangay_name: "Caniogan",
  },
  {
    barangay_id: 5922,
    municipality_id: 237,
    barangay_name: "Corazon",
  },
  {
    barangay_id: 5923,
    municipality_id: 237,
    barangay_name: "Frances",
  },
  {
    barangay_id: 5924,
    municipality_id: 237,
    barangay_name: "Gatbuca",
  },
  {
    barangay_id: 5925,
    municipality_id: 237,
    barangay_name: "Gugo",
  },
  {
    barangay_id: 5926,
    municipality_id: 237,
    barangay_name: "Iba Este",
  },
  {
    barangay_id: 5927,
    municipality_id: 237,
    barangay_name: "Iba O'Este",
  },
  {
    barangay_id: 5928,
    municipality_id: 237,
    barangay_name: "Longos",
  },
  {
    barangay_id: 5929,
    municipality_id: 237,
    barangay_name: "Meysulao",
  },
  {
    barangay_id: 5930,
    municipality_id: 237,
    barangay_name: "Meyto",
  },
  {
    barangay_id: 5931,
    municipality_id: 237,
    barangay_name: "Palimbang",
  },
  {
    barangay_id: 5932,
    municipality_id: 237,
    barangay_name: "Panducot",
  },
  {
    barangay_id: 5933,
    municipality_id: 237,
    barangay_name: "Pio Cruzcosa",
  },
  {
    barangay_id: 5934,
    municipality_id: 237,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5935,
    municipality_id: 237,
    barangay_name: "Pungo",
  },
  {
    barangay_id: 5936,
    municipality_id: 237,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 5937,
    municipality_id: 237,
    barangay_name: "San Marcos",
  },
  {
    barangay_id: 5938,
    municipality_id: 237,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 5939,
    municipality_id: 237,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 5940,
    municipality_id: 237,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 5941,
    municipality_id: 237,
    barangay_name: "Sapang Bayan",
  },
  {
    barangay_id: 5942,
    municipality_id: 237,
    barangay_name: "Sergio Bayan",
  },
  {
    barangay_id: 5943,
    municipality_id: 237,
    barangay_name: "Sucol",
  },
  {
    barangay_id: 5944,
    municipality_id: 238,
    barangay_name: "Cutcut",
  },
  {
    barangay_id: 5945,
    municipality_id: 238,
    barangay_name: "Daungan",
  },
  {
    barangay_id: 5946,
    municipality_id: 238,
    barangay_name: "Ilang-Ilang",
  },
  {
    barangay_id: 5947,
    municipality_id: 238,
    barangay_name: "Malis",
  },
  {
    barangay_id: 5948,
    municipality_id: 238,
    barangay_name: "Panginay",
  },
  {
    barangay_id: 5949,
    municipality_id: 238,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 5950,
    municipality_id: 238,
    barangay_name: "Pritil",
  },
  {
    barangay_id: 5951,
    municipality_id: 238,
    barangay_name: "Pulong Gubat",
  },
  {
    barangay_id: 5952,
    municipality_id: 238,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 5953,
    municipality_id: 238,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 5954,
    municipality_id: 238,
    barangay_name: "Tabang",
  },
  {
    barangay_id: 5955,
    municipality_id: 238,
    barangay_name: "Tabe",
  },
  {
    barangay_id: 5956,
    municipality_id: 238,
    barangay_name: "Tiaong",
  },
  {
    barangay_id: 5957,
    municipality_id: 238,
    barangay_name: "Tuktukan",
  },
  {
    barangay_id: 5958,
    municipality_id: 239,
    barangay_name: "Abulalas",
  },
  {
    barangay_id: 5959,
    municipality_id: 239,
    barangay_name: "Carillo",
  },
  {
    barangay_id: 5960,
    municipality_id: 239,
    barangay_name: "Iba",
  },
  {
    barangay_id: 5983,
    municipality_id: 239,
    barangay_name: "Iba-Ibayo",
  },
  {
    barangay_id: 5961,
    municipality_id: 239,
    barangay_name: "Mercado",
  },
  {
    barangay_id: 5962,
    municipality_id: 239,
    barangay_name: "Palapat",
  },
  {
    barangay_id: 5963,
    municipality_id: 239,
    barangay_name: "Pugad",
  },
  {
    barangay_id: 5964,
    municipality_id: 239,
    barangay_name: "Sagrada Familia",
  },
  {
    barangay_id: 5965,
    municipality_id: 239,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 5966,
    municipality_id: 239,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 5967,
    municipality_id: 239,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 5968,
    municipality_id: 239,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 5969,
    municipality_id: 239,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 5970,
    municipality_id: 239,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 5971,
    municipality_id: 239,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 5972,
    municipality_id: 239,
    barangay_name: "San Pascual",
  },
  {
    barangay_id: 5973,
    municipality_id: 239,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 5974,
    municipality_id: 239,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 5975,
    municipality_id: 239,
    barangay_name: "San Sebastian",
  },
  {
    barangay_id: 5976,
    municipality_id: 239,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 5977,
    municipality_id: 239,
    barangay_name: "Santa Elena",
  },
  {
    barangay_id: 5978,
    municipality_id: 239,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 5979,
    municipality_id: 239,
    barangay_name: "Santo Niño (Pob.)",
  },
  {
    barangay_id: 5980,
    municipality_id: 239,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 5981,
    municipality_id: 239,
    barangay_name: "Tampok",
  },
  {
    barangay_id: 5982,
    municipality_id: 239,
    barangay_name: "Tibaguin",
  },
  {
    barangay_id: 5984,
    municipality_id: 240,
    barangay_name: "Anilao",
  },
  {
    barangay_id: 5985,
    municipality_id: 240,
    barangay_name: "Atlag",
  },
  {
    barangay_id: 5986,
    municipality_id: 240,
    barangay_name: "Babatnin",
  },
  {
    barangay_id: 5987,
    municipality_id: 240,
    barangay_name: "Bagna",
  },
  {
    barangay_id: 5988,
    municipality_id: 240,
    barangay_name: "Bagong Bayan",
  },
  {
    barangay_id: 5989,
    municipality_id: 240,
    barangay_name: "Balayong",
  },
  {
    barangay_id: 5990,
    municipality_id: 240,
    barangay_name: "Balite",
  },
  {
    barangay_id: 5991,
    municipality_id: 240,
    barangay_name: "Bangkal",
  },
  {
    barangay_id: 5992,
    municipality_id: 240,
    barangay_name: "Barihan",
  },
  {
    barangay_id: 5993,
    municipality_id: 240,
    barangay_name: "Bulihan",
  },
  {
    barangay_id: 5994,
    municipality_id: 240,
    barangay_name: "Bungahan",
  },
  {
    barangay_id: 5997,
    municipality_id: 240,
    barangay_name: "Caingin",
  },
  {
    barangay_id: 5998,
    municipality_id: 240,
    barangay_name: "Calero",
  },
  {
    barangay_id: 5999,
    municipality_id: 240,
    barangay_name: "Caliligawan",
  },
  {
    barangay_id: 6000,
    municipality_id: 240,
    barangay_name: "Canalate",
  },
  {
    barangay_id: 6001,
    municipality_id: 240,
    barangay_name: "Caniogan",
  },
  {
    barangay_id: 6002,
    municipality_id: 240,
    barangay_name: "Catmon",
  },
  {
    barangay_id: 6034,
    municipality_id: 240,
    barangay_name: "Cofradia",
  },
  {
    barangay_id: 5995,
    municipality_id: 240,
    barangay_name: "Dakila",
  },
  {
    barangay_id: 5996,
    municipality_id: 240,
    barangay_name: "Guinhawa",
  },
  {
    barangay_id: 6003,
    municipality_id: 240,
    barangay_name: "Ligas",
  },
  {
    barangay_id: 6004,
    municipality_id: 240,
    barangay_name: "Liyang",
  },
  {
    barangay_id: 6005,
    municipality_id: 240,
    barangay_name: "Longos",
  },
  {
    barangay_id: 6006,
    municipality_id: 240,
    barangay_name: "Look 1st",
  },
  {
    barangay_id: 6007,
    municipality_id: 240,
    barangay_name: "Look 2nd",
  },
  {
    barangay_id: 6008,
    municipality_id: 240,
    barangay_name: "Lugam",
  },
  {
    barangay_id: 6009,
    municipality_id: 240,
    barangay_name: "Mabolo",
  },
  {
    barangay_id: 6010,
    municipality_id: 240,
    barangay_name: "Mambog",
  },
  {
    barangay_id: 6011,
    municipality_id: 240,
    barangay_name: "Masile",
  },
  {
    barangay_id: 6012,
    municipality_id: 240,
    barangay_name: "Matimbo",
  },
  {
    barangay_id: 6013,
    municipality_id: 240,
    barangay_name: "Mojon",
  },
  {
    barangay_id: 6014,
    municipality_id: 240,
    barangay_name: "Namayan",
  },
  {
    barangay_id: 6015,
    municipality_id: 240,
    barangay_name: "Niugan",
  },
  {
    barangay_id: 6016,
    municipality_id: 240,
    barangay_name: "Pamarawan",
  },
  {
    barangay_id: 6017,
    municipality_id: 240,
    barangay_name: "Panasahan",
  },
  {
    barangay_id: 6018,
    municipality_id: 240,
    barangay_name: "Pinagbakahan",
  },
  {
    barangay_id: 6019,
    municipality_id: 240,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 6020,
    municipality_id: 240,
    barangay_name: "San Gabriel",
  },
  {
    barangay_id: 6021,
    municipality_id: 240,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 6022,
    municipality_id: 240,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 6023,
    municipality_id: 240,
    barangay_name: "San Vicente (Pob.)",
  },
  {
    barangay_id: 6024,
    municipality_id: 240,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 6025,
    municipality_id: 240,
    barangay_name: "Santisima Trinidad",
  },
  {
    barangay_id: 6026,
    municipality_id: 240,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 6027,
    municipality_id: 240,
    barangay_name: "Santo Niño (Pob.)",
  },
  {
    barangay_id: 6028,
    municipality_id: 240,
    barangay_name: "Santo Rosario (Pob.)",
  },
  {
    barangay_id: 6029,
    municipality_id: 240,
    barangay_name: "Santol",
  },
  {
    barangay_id: 6030,
    municipality_id: 240,
    barangay_name: "Sumapang Bata",
  },
  {
    barangay_id: 6031,
    municipality_id: 240,
    barangay_name: "Sumapang Matanda",
  },
  {
    barangay_id: 6032,
    municipality_id: 240,
    barangay_name: "Taal",
  },
  {
    barangay_id: 6033,
    municipality_id: 240,
    barangay_name: "Tikay",
  },
  {
    barangay_id: 6035,
    municipality_id: 241,
    barangay_name: "Abangan Norte",
  },
  {
    barangay_id: 6036,
    municipality_id: 241,
    barangay_name: "Abangan Sur",
  },
  {
    barangay_id: 6037,
    municipality_id: 241,
    barangay_name: "Ibayo",
  },
  {
    barangay_id: 6038,
    municipality_id: 241,
    barangay_name: "Lambakin",
  },
  {
    barangay_id: 6039,
    municipality_id: 241,
    barangay_name: "Lias",
  },
  {
    barangay_id: 6040,
    municipality_id: 241,
    barangay_name: "Loma de Gato",
  },
  {
    barangay_id: 6041,
    municipality_id: 241,
    barangay_name: "Nagbalon",
  },
  {
    barangay_id: 6042,
    municipality_id: 241,
    barangay_name: "Patubig",
  },
  {
    barangay_id: 6043,
    municipality_id: 241,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 6044,
    municipality_id: 241,
    barangay_name: "Poblacion II",
  },
  {
    barangay_id: 6045,
    municipality_id: 241,
    barangay_name: "Prenza I",
  },
  {
    barangay_id: 6046,
    municipality_id: 241,
    barangay_name: "Prenza II",
  },
  {
    barangay_id: 6047,
    municipality_id: 241,
    barangay_name: "Santa Rosa I",
  },
  {
    barangay_id: 6048,
    municipality_id: 241,
    barangay_name: "Santa Rosa II",
  },
  {
    barangay_id: 6049,
    municipality_id: 241,
    barangay_name: "Saog",
  },
  {
    barangay_id: 6050,
    municipality_id: 241,
    barangay_name: "Tabing Ilog",
  },
  {
    barangay_id: 6051,
    municipality_id: 242,
    barangay_name: "Bagbaguin",
  },
  {
    barangay_id: 6052,
    municipality_id: 242,
    barangay_name: "Bahay Pare",
  },
  {
    barangay_id: 6053,
    municipality_id: 242,
    barangay_name: "Bancal",
  },
  {
    barangay_id: 6054,
    municipality_id: 242,
    barangay_name: "Banga",
  },
  {
    barangay_id: 6055,
    municipality_id: 242,
    barangay_name: "Bayugo",
  },
  {
    barangay_id: 6076,
    municipality_id: 242,
    barangay_name: "Caingin",
  },
  {
    barangay_id: 6056,
    municipality_id: 242,
    barangay_name: "Calvario",
  },
  {
    barangay_id: 6057,
    municipality_id: 242,
    barangay_name: "Camalig",
  },
  {
    barangay_id: 6058,
    municipality_id: 242,
    barangay_name: "Hulo",
  },
  {
    barangay_id: 6059,
    municipality_id: 242,
    barangay_name: "Iba",
  },
  {
    barangay_id: 6060,
    municipality_id: 242,
    barangay_name: "Langka",
  },
  {
    barangay_id: 6061,
    municipality_id: 242,
    barangay_name: "Lawa",
  },
  {
    barangay_id: 6062,
    municipality_id: 242,
    barangay_name: "Libtong",
  },
  {
    barangay_id: 6063,
    municipality_id: 242,
    barangay_name: "Liputan",
  },
  {
    barangay_id: 6064,
    municipality_id: 242,
    barangay_name: "Longos",
  },
  {
    barangay_id: 6065,
    municipality_id: 242,
    barangay_name: "Malhacan",
  },
  {
    barangay_id: 6066,
    municipality_id: 242,
    barangay_name: "Pajo",
  },
  {
    barangay_id: 6067,
    municipality_id: 242,
    barangay_name: "Pandayan",
  },
  {
    barangay_id: 6068,
    municipality_id: 242,
    barangay_name: "Pantoc",
  },
  {
    barangay_id: 6069,
    municipality_id: 242,
    barangay_name: "Perez",
  },
  {
    barangay_id: 6070,
    municipality_id: 242,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6072,
    municipality_id: 242,
    barangay_name: "Saint Francis",
  },
  {
    barangay_id: 6071,
    municipality_id: 242,
    barangay_name: "Saluysoy",
  },
  {
    barangay_id: 6073,
    municipality_id: 242,
    barangay_name: "Tugatog",
  },
  {
    barangay_id: 6074,
    municipality_id: 242,
    barangay_name: "Ubihan",
  },
  {
    barangay_id: 6075,
    municipality_id: 242,
    barangay_name: "Zamora",
  },
  {
    barangay_id: 6077,
    municipality_id: 243,
    barangay_name: "Bangkal",
  },
  {
    barangay_id: 6078,
    municipality_id: 243,
    barangay_name: "Baraka",
  },
  {
    barangay_id: 6079,
    municipality_id: 243,
    barangay_name: "Bigte",
  },
  {
    barangay_id: 6080,
    municipality_id: 243,
    barangay_name: "Bitungol",
  },
  {
    barangay_id: 6089,
    municipality_id: 243,
    barangay_name: "Friendship Village Resources",
  },
  {
    barangay_id: 6081,
    municipality_id: 243,
    barangay_name: "Matictic",
  },
  {
    barangay_id: 6082,
    municipality_id: 243,
    barangay_name: "Minuyan",
  },
  {
    barangay_id: 6083,
    municipality_id: 243,
    barangay_name: "Partida",
  },
  {
    barangay_id: 6084,
    municipality_id: 243,
    barangay_name: "Pinagtulayan",
  },
  {
    barangay_id: 6085,
    municipality_id: 243,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6088,
    municipality_id: 243,
    barangay_name: "San Lorenzo",
  },
  {
    barangay_id: 6086,
    municipality_id: 243,
    barangay_name: "San Mateo",
  },
  {
    barangay_id: 6087,
    municipality_id: 243,
    barangay_name: "Tigbe",
  },
  {
    barangay_id: 6090,
    municipality_id: 244,
    barangay_name: "Binuangan",
  },
  {
    barangay_id: 6091,
    municipality_id: 244,
    barangay_name: "Catanghalan",
  },
  {
    barangay_id: 6092,
    municipality_id: 244,
    barangay_name: "Hulo",
  },
  {
    barangay_id: 6093,
    municipality_id: 244,
    barangay_name: "Lawa",
  },
  {
    barangay_id: 6095,
    municipality_id: 244,
    barangay_name: "Paco",
  },
  {
    barangay_id: 6096,
    municipality_id: 244,
    barangay_name: "Pag-asa (Pob.)",
  },
  {
    barangay_id: 6097,
    municipality_id: 244,
    barangay_name: "Paliwas",
  },
  {
    barangay_id: 6098,
    municipality_id: 244,
    barangay_name: "Panghulo",
  },
  {
    barangay_id: 6094,
    municipality_id: 244,
    barangay_name: "Salambao",
  },
  {
    barangay_id: 6099,
    municipality_id: 244,
    barangay_name: "San Pascual",
  },
  {
    barangay_id: 6100,
    municipality_id: 244,
    barangay_name: "Tawiran",
  },
  {
    barangay_id: 6101,
    municipality_id: 245,
    barangay_name: "Bagbaguin",
  },
  {
    barangay_id: 6102,
    municipality_id: 245,
    barangay_name: "Bagong Barrio",
  },
  {
    barangay_id: 6121,
    municipality_id: 245,
    barangay_name: "Baka-bakahan",
  },
  {
    barangay_id: 6104,
    municipality_id: 245,
    barangay_name: "Bunsuran I",
  },
  {
    barangay_id: 6105,
    municipality_id: 245,
    barangay_name: "Bunsuran II",
  },
  {
    barangay_id: 6103,
    municipality_id: 245,
    barangay_name: "Bunsuran III",
  },
  {
    barangay_id: 6106,
    municipality_id: 245,
    barangay_name: "Cacarong Bata",
  },
  {
    barangay_id: 6107,
    municipality_id: 245,
    barangay_name: "Cacarong Matanda",
  },
  {
    barangay_id: 6108,
    municipality_id: 245,
    barangay_name: "Cupang",
  },
  {
    barangay_id: 6109,
    municipality_id: 245,
    barangay_name: "Malibong Bata",
  },
  {
    barangay_id: 6110,
    municipality_id: 245,
    barangay_name: "Malibong Matanda",
  },
  {
    barangay_id: 6111,
    municipality_id: 245,
    barangay_name: "Manatal",
  },
  {
    barangay_id: 6112,
    municipality_id: 245,
    barangay_name: "Mapulang Lupa",
  },
  {
    barangay_id: 6113,
    municipality_id: 245,
    barangay_name: "Masagana",
  },
  {
    barangay_id: 6114,
    municipality_id: 245,
    barangay_name: "Masuso",
  },
  {
    barangay_id: 6115,
    municipality_id: 245,
    barangay_name: "Pinagkuartelan",
  },
  {
    barangay_id: 6116,
    municipality_id: 245,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6117,
    municipality_id: 245,
    barangay_name: "Real de Cacarong",
  },
  {
    barangay_id: 6118,
    municipality_id: 245,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 6122,
    municipality_id: 245,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 6119,
    municipality_id: 245,
    barangay_name: "Siling Bata",
  },
  {
    barangay_id: 6120,
    municipality_id: 245,
    barangay_name: "Siling Matanda",
  },
  {
    barangay_id: 6123,
    municipality_id: 246,
    barangay_name: "Binakod",
  },
  {
    barangay_id: 6124,
    municipality_id: 246,
    barangay_name: "Kapitangan",
  },
  {
    barangay_id: 6125,
    municipality_id: 246,
    barangay_name: "Malumot",
  },
  {
    barangay_id: 6126,
    municipality_id: 246,
    barangay_name: "Masukol",
  },
  {
    barangay_id: 6127,
    municipality_id: 246,
    barangay_name: "Pinalagdan",
  },
  {
    barangay_id: 6128,
    municipality_id: 246,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6129,
    municipality_id: 246,
    barangay_name: "San Isidro I",
  },
  {
    barangay_id: 6130,
    municipality_id: 246,
    barangay_name: "San Isidro II",
  },
  {
    barangay_id: 6131,
    municipality_id: 246,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 6132,
    municipality_id: 246,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 6133,
    municipality_id: 246,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 6134,
    municipality_id: 246,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 6135,
    municipality_id: 246,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 6136,
    municipality_id: 246,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 6137,
    municipality_id: 247,
    barangay_name: "Agnaya",
  },
  {
    barangay_id: 6138,
    municipality_id: 247,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 6139,
    municipality_id: 247,
    barangay_name: "Banga I",
  },
  {
    barangay_id: 6140,
    municipality_id: 247,
    barangay_name: "Banga II",
  },
  {
    barangay_id: 6141,
    municipality_id: 247,
    barangay_name: "Bintog",
  },
  {
    barangay_id: 6142,
    municipality_id: 247,
    barangay_name: "Bulihan",
  },
  {
    barangay_id: 6143,
    municipality_id: 247,
    barangay_name: "Culianin",
  },
  {
    barangay_id: 6144,
    municipality_id: 247,
    barangay_name: "Dampol",
  },
  {
    barangay_id: 6145,
    municipality_id: 247,
    barangay_name: "Lagundi",
  },
  {
    barangay_id: 6146,
    municipality_id: 247,
    barangay_name: "Lalangan",
  },
  {
    barangay_id: 6147,
    municipality_id: 247,
    barangay_name: "Lumang Bayan",
  },
  {
    barangay_id: 6148,
    municipality_id: 247,
    barangay_name: "Parulan",
  },
  {
    barangay_id: 6149,
    municipality_id: 247,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6150,
    municipality_id: 247,
    barangay_name: "Rueda",
  },
  {
    barangay_id: 6151,
    municipality_id: 247,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 6152,
    municipality_id: 247,
    barangay_name: "Santa Ines",
  },
  {
    barangay_id: 6153,
    municipality_id: 247,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 6154,
    municipality_id: 247,
    barangay_name: "Sipat",
  },
  {
    barangay_id: 6155,
    municipality_id: 247,
    barangay_name: "Tabang",
  },
  {
    barangay_id: 6156,
    municipality_id: 248,
    barangay_name: "Balatong A",
  },
  {
    barangay_id: 6157,
    municipality_id: 248,
    barangay_name: "Balatong B",
  },
  {
    barangay_id: 6158,
    municipality_id: 248,
    barangay_name: "Cutcot",
  },
  {
    barangay_id: 6159,
    municipality_id: 248,
    barangay_name: "Dampol I",
  },
  {
    barangay_id: 6160,
    municipality_id: 248,
    barangay_name: "Dampol II-A",
  },
  {
    barangay_id: 6161,
    municipality_id: 248,
    barangay_name: "Dampol II-B",
  },
  {
    barangay_id: 6162,
    municipality_id: 248,
    barangay_name: "Dulong Malabon",
  },
  {
    barangay_id: 6163,
    municipality_id: 248,
    barangay_name: "Inaon",
  },
  {
    barangay_id: 6164,
    municipality_id: 248,
    barangay_name: "Longos",
  },
  {
    barangay_id: 6165,
    municipality_id: 248,
    barangay_name: "Lumbac",
  },
  {
    barangay_id: 6166,
    municipality_id: 248,
    barangay_name: "Paltao",
  },
  {
    barangay_id: 6167,
    municipality_id: 248,
    barangay_name: "Penabatan",
  },
  {
    barangay_id: 6168,
    municipality_id: 248,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6169,
    municipality_id: 248,
    barangay_name: "Santa Peregrina",
  },
  {
    barangay_id: 6170,
    municipality_id: 248,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 6171,
    municipality_id: 248,
    barangay_name: "Taal",
  },
  {
    barangay_id: 6172,
    municipality_id: 248,
    barangay_name: "Tabon",
  },
  {
    barangay_id: 6173,
    municipality_id: 248,
    barangay_name: "Tibag",
  },
  {
    barangay_id: 6174,
    municipality_id: 248,
    barangay_name: "Tinejero",
  },
  {
    barangay_id: 6175,
    municipality_id: 249,
    barangay_name: "Akle",
  },
  {
    barangay_id: 6176,
    municipality_id: 249,
    barangay_name: "Alagao",
  },
  {
    barangay_id: 6177,
    municipality_id: 249,
    barangay_name: "Anyatam",
  },
  {
    barangay_id: 6178,
    municipality_id: 249,
    barangay_name: "Bagong Barrio",
  },
  {
    barangay_id: 6179,
    municipality_id: 249,
    barangay_name: "Basuit",
  },
  {
    barangay_id: 6181,
    municipality_id: 249,
    barangay_name: "Bubulong Malaki",
  },
  {
    barangay_id: 6180,
    municipality_id: 249,
    barangay_name: "Bubulong Munti",
  },
  {
    barangay_id: 6182,
    municipality_id: 249,
    barangay_name: "Buhol na Mangga",
  },
  {
    barangay_id: 6183,
    municipality_id: 249,
    barangay_name: "Bulusukan",
  },
  {
    barangay_id: 6184,
    municipality_id: 249,
    barangay_name: "Calasag",
  },
  {
    barangay_id: 6185,
    municipality_id: 249,
    barangay_name: "Calawitan",
  },
  {
    barangay_id: 6186,
    municipality_id: 249,
    barangay_name: "Casalat",
  },
  {
    barangay_id: 6187,
    municipality_id: 249,
    barangay_name: "Gabihan",
  },
  {
    barangay_id: 6188,
    municipality_id: 249,
    barangay_name: "Garlang",
  },
  {
    barangay_id: 6189,
    municipality_id: 249,
    barangay_name: "Lapnit",
  },
  {
    barangay_id: 6190,
    municipality_id: 249,
    barangay_name: "Maasim",
  },
  {
    barangay_id: 6191,
    municipality_id: 249,
    barangay_name: "Makapilapil",
  },
  {
    barangay_id: 6192,
    municipality_id: 249,
    barangay_name: "Malipampang",
  },
  {
    barangay_id: 6210,
    municipality_id: 249,
    barangay_name: "Mataas na Parang",
  },
  {
    barangay_id: 6193,
    municipality_id: 249,
    barangay_name: "Matimbubong",
  },
  {
    barangay_id: 6194,
    municipality_id: 249,
    barangay_name: "Nabaong Garlang",
  },
  {
    barangay_id: 6195,
    municipality_id: 249,
    barangay_name: "Palapala",
  },
  {
    barangay_id: 6196,
    municipality_id: 249,
    barangay_name: "Pasong Bangkal",
  },
  {
    barangay_id: 6197,
    municipality_id: 249,
    barangay_name: "Pinaod",
  },
  {
    barangay_id: 6198,
    municipality_id: 249,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6199,
    municipality_id: 249,
    barangay_name: "Pulong Tamo",
  },
  {
    barangay_id: 6200,
    municipality_id: 249,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 6201,
    municipality_id: 249,
    barangay_name: "Santa Catalina Bata",
  },
  {
    barangay_id: 6202,
    municipality_id: 249,
    barangay_name: "Santa Catalina Matanda",
  },
  {
    barangay_id: 6203,
    municipality_id: 249,
    barangay_name: "Sapang Dayap",
  },
  {
    barangay_id: 6204,
    municipality_id: 249,
    barangay_name: "Sapang Putik",
  },
  {
    barangay_id: 6205,
    municipality_id: 249,
    barangay_name: "Sapang Putol",
  },
  {
    barangay_id: 6206,
    municipality_id: 249,
    barangay_name: "Sumandig",
  },
  {
    barangay_id: 6207,
    municipality_id: 249,
    barangay_name: "Telepatio",
  },
  {
    barangay_id: 6209,
    municipality_id: 249,
    barangay_name: "Umpucan",
  },
  {
    barangay_id: 6208,
    municipality_id: 249,
    barangay_name: "Upig",
  },
  {
    barangay_id: 6229,
    municipality_id: 250,
    barangay_name: "Assumption",
  },
  {
    barangay_id: 6211,
    municipality_id: 250,
    barangay_name: "Bagong Buhay",
  },
  {
    barangay_id: 6230,
    municipality_id: 250,
    barangay_name: "Bagong Buhay II",
  },
  {
    barangay_id: 6231,
    municipality_id: 250,
    barangay_name: "Bagong Buhay III",
  },
  {
    barangay_id: 6222,
    municipality_id: 250,
    barangay_name: "Citrus",
  },
  {
    barangay_id: 6232,
    municipality_id: 250,
    barangay_name: "Ciudad Real",
  },
  {
    barangay_id: 6212,
    municipality_id: 250,
    barangay_name: "Dulong Bayan",
  },
  {
    barangay_id: 6225,
    municipality_id: 250,
    barangay_name: "Fatima",
  },
  {
    barangay_id: 6233,
    municipality_id: 250,
    barangay_name: "Fatima II",
  },
  {
    barangay_id: 6234,
    municipality_id: 250,
    barangay_name: "Fatima III",
  },
  {
    barangay_id: 6235,
    municipality_id: 250,
    barangay_name: "Fatima IV",
  },
  {
    barangay_id: 6236,
    municipality_id: 250,
    barangay_name: "Fatima V",
  },
  {
    barangay_id: 6237,
    municipality_id: 250,
    barangay_name: "Francisco Homes-Guijo",
  },
  {
    barangay_id: 6238,
    municipality_id: 250,
    barangay_name: "Francisco Homes-Mulawin",
  },
  {
    barangay_id: 6239,
    municipality_id: 250,
    barangay_name: "Francisco Homes-Narra",
  },
  {
    barangay_id: 6240,
    municipality_id: 250,
    barangay_name: "Francisco Homes-Yakal",
  },
  {
    barangay_id: 6213,
    municipality_id: 250,
    barangay_name: "Gaya-gaya",
  },
  {
    barangay_id: 6241,
    municipality_id: 250,
    barangay_name: "Graceville",
  },
  {
    barangay_id: 6242,
    municipality_id: 250,
    barangay_name: "Gumaoc Central",
  },
  {
    barangay_id: 6243,
    municipality_id: 250,
    barangay_name: "Gumaoc East",
  },
  {
    barangay_id: 6244,
    municipality_id: 250,
    barangay_name: "Gumaoc West",
  },
  {
    barangay_id: 6215,
    municipality_id: 250,
    barangay_name: "Kaybanban",
  },
  {
    barangay_id: 6214,
    municipality_id: 250,
    barangay_name: "Kaypian",
  },
  {
    barangay_id: 6245,
    municipality_id: 250,
    barangay_name: "Lawang Pari",
  },
  {
    barangay_id: 6246,
    municipality_id: 250,
    barangay_name: "Maharlika",
  },
  {
    barangay_id: 6216,
    municipality_id: 250,
    barangay_name: "Minuyan",
  },
  {
    barangay_id: 6247,
    municipality_id: 250,
    barangay_name: "Minuyan II",
  },
  {
    barangay_id: 6248,
    municipality_id: 250,
    barangay_name: "Minuyan III",
  },
  {
    barangay_id: 6249,
    municipality_id: 250,
    barangay_name: "Minuyan IV",
  },
  {
    barangay_id: 6251,
    municipality_id: 250,
    barangay_name: "Minuyan Proper",
  },
  {
    barangay_id: 6250,
    municipality_id: 250,
    barangay_name: "Minuyan V",
  },
  {
    barangay_id: 6217,
    municipality_id: 250,
    barangay_name: "Muzon",
  },
  {
    barangay_id: 6252,
    municipality_id: 250,
    barangay_name: "Paradise III",
  },
  {
    barangay_id: 6218,
    municipality_id: 250,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6253,
    municipality_id: 250,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 6254,
    municipality_id: 250,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 6255,
    municipality_id: 250,
    barangay_name: "San Manuel",
  },
  {
    barangay_id: 6223,
    municipality_id: 250,
    barangay_name: "San Martin",
  },
  {
    barangay_id: 6256,
    municipality_id: 250,
    barangay_name: "San Martin II",
  },
  {
    barangay_id: 6257,
    municipality_id: 250,
    barangay_name: "San Martin III",
  },
  {
    barangay_id: 6258,
    municipality_id: 250,
    barangay_name: "San Martin IV",
  },
  {
    barangay_id: 6226,
    municipality_id: 250,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 6227,
    municipality_id: 250,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 6259,
    municipality_id: 250,
    barangay_name: "San Rafael I",
  },
  {
    barangay_id: 6260,
    municipality_id: 250,
    barangay_name: "San Rafael III",
  },
  {
    barangay_id: 6261,
    municipality_id: 250,
    barangay_name: "San Rafael IV",
  },
  {
    barangay_id: 6262,
    municipality_id: 250,
    barangay_name: "San Rafael V",
  },
  {
    barangay_id: 6263,
    municipality_id: 250,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 6224,
    municipality_id: 250,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 6264,
    municipality_id: 250,
    barangay_name: "Santa Cruz II",
  },
  {
    barangay_id: 6265,
    municipality_id: 250,
    barangay_name: "Santa Cruz III",
  },
  {
    barangay_id: 6266,
    municipality_id: 250,
    barangay_name: "Santa Cruz IV",
  },
  {
    barangay_id: 6267,
    municipality_id: 250,
    barangay_name: "Santa Cruz V",
  },
  {
    barangay_id: 6219,
    municipality_id: 250,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 6228,
    municipality_id: 250,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 6268,
    municipality_id: 250,
    barangay_name: "Santo Niño II",
  },
  {
    barangay_id: 6220,
    municipality_id: 250,
    barangay_name: "Sapang Palay",
  },
  {
    barangay_id: 6269,
    municipality_id: 250,
    barangay_name: "St. Martin de Porres",
  },
  {
    barangay_id: 6221,
    municipality_id: 250,
    barangay_name: "Tungkong Mangga",
  },
  {
    barangay_id: 6315,
    municipality_id: 251,
    barangay_name: "Bagong Pag-asa",
  },
  {
    barangay_id: 6270,
    municipality_id: 251,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 6271,
    municipality_id: 251,
    barangay_name: "Balaong",
  },
  {
    barangay_id: 6272,
    municipality_id: 251,
    barangay_name: "Balite",
  },
  {
    barangay_id: 6273,
    municipality_id: 251,
    barangay_name: "Bantog",
  },
  {
    barangay_id: 6274,
    municipality_id: 251,
    barangay_name: "Bardias",
  },
  {
    barangay_id: 6275,
    municipality_id: 251,
    barangay_name: "Baritan",
  },
  {
    barangay_id: 6276,
    municipality_id: 251,
    barangay_name: "Batasan Bata",
  },
  {
    barangay_id: 6277,
    municipality_id: 251,
    barangay_name: "Batasan Matanda",
  },
  {
    barangay_id: 6278,
    municipality_id: 251,
    barangay_name: "Biak-na-Bato",
  },
  {
    barangay_id: 6279,
    municipality_id: 251,
    barangay_name: "Biclat",
  },
  {
    barangay_id: 6280,
    municipality_id: 251,
    barangay_name: "Buga",
  },
  {
    barangay_id: 6281,
    municipality_id: 251,
    barangay_name: "Buliran",
  },
  {
    barangay_id: 6282,
    municipality_id: 251,
    barangay_name: "Bulualto",
  },
  {
    barangay_id: 6283,
    municipality_id: 251,
    barangay_name: "Calumpang",
  },
  {
    barangay_id: 6284,
    municipality_id: 251,
    barangay_name: "Cambio",
  },
  {
    barangay_id: 6285,
    municipality_id: 251,
    barangay_name: "Camias",
  },
  {
    barangay_id: 6286,
    municipality_id: 251,
    barangay_name: "Ilog-Bulo",
  },
  {
    barangay_id: 6287,
    municipality_id: 251,
    barangay_name: "King Kabayo",
  },
  {
    barangay_id: 6288,
    municipality_id: 251,
    barangay_name: "Labne",
  },
  {
    barangay_id: 6289,
    municipality_id: 251,
    barangay_name: "Lambakin",
  },
  {
    barangay_id: 6290,
    municipality_id: 251,
    barangay_name: "Magmarale",
  },
  {
    barangay_id: 6291,
    municipality_id: 251,
    barangay_name: "Malibay",
  },
  {
    barangay_id: 6317,
    municipality_id: 251,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 6292,
    municipality_id: 251,
    barangay_name: "Mandile",
  },
  {
    barangay_id: 6293,
    municipality_id: 251,
    barangay_name: "Masalipit",
  },
  {
    barangay_id: 6294,
    municipality_id: 251,
    barangay_name: "Pacalag",
  },
  {
    barangay_id: 6295,
    municipality_id: 251,
    barangay_name: "Paliwasan",
  },
  {
    barangay_id: 6296,
    municipality_id: 251,
    barangay_name: "Partida",
  },
  {
    barangay_id: 6297,
    municipality_id: 251,
    barangay_name: "Pinambaran",
  },
  {
    barangay_id: 6298,
    municipality_id: 251,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6299,
    municipality_id: 251,
    barangay_name: "Pulong Bayabas",
  },
  {
    barangay_id: 6316,
    municipality_id: 251,
    barangay_name: "Pulong Duhat",
  },
  {
    barangay_id: 6300,
    municipality_id: 251,
    barangay_name: "Sacdalan",
  },
  {
    barangay_id: 6301,
    municipality_id: 251,
    barangay_name: "Salacot",
  },
  {
    barangay_id: 6302,
    municipality_id: 251,
    barangay_name: "Salangan",
  },
  {
    barangay_id: 6303,
    municipality_id: 251,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 6304,
    municipality_id: 251,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 6305,
    municipality_id: 251,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 6306,
    municipality_id: 251,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 6307,
    municipality_id: 251,
    barangay_name: "Santa Ines",
  },
  {
    barangay_id: 6308,
    municipality_id: 251,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 6309,
    municipality_id: 251,
    barangay_name: "Santa Rita Bata",
  },
  {
    barangay_id: 6310,
    municipality_id: 251,
    barangay_name: "Santa Rita Matanda",
  },
  {
    barangay_id: 6311,
    municipality_id: 251,
    barangay_name: "Sapang",
  },
  {
    barangay_id: 6312,
    municipality_id: 251,
    barangay_name: "Sibul",
  },
  {
    barangay_id: 6313,
    municipality_id: 251,
    barangay_name: "Tartaro",
  },
  {
    barangay_id: 6314,
    municipality_id: 251,
    barangay_name: "Tibagan",
  },
  {
    barangay_id: 6318,
    municipality_id: 251,
    barangay_name: "Tigpalas",
  },
  {
    barangay_id: 6320,
    municipality_id: 252,
    barangay_name: "Banca-banca",
  },
  {
    barangay_id: 6319,
    municipality_id: 252,
    barangay_name: "BMA-Balagtas",
  },
  {
    barangay_id: 6321,
    municipality_id: 252,
    barangay_name: "Caingin",
  },
  {
    barangay_id: 6327,
    municipality_id: 252,
    barangay_name: "Capihan",
  },
  {
    barangay_id: 6322,
    municipality_id: 252,
    barangay_name: "Coral na Bato",
  },
  {
    barangay_id: 6323,
    municipality_id: 252,
    barangay_name: "Cruz na Daan",
  },
  {
    barangay_id: 6324,
    municipality_id: 252,
    barangay_name: "Dagat-dagatan",
  },
  {
    barangay_id: 6325,
    municipality_id: 252,
    barangay_name: "Diliman I",
  },
  {
    barangay_id: 6326,
    municipality_id: 252,
    barangay_name: "Diliman II",
  },
  {
    barangay_id: 6328,
    municipality_id: 252,
    barangay_name: "Libis",
  },
  {
    barangay_id: 6329,
    municipality_id: 252,
    barangay_name: "Lico",
  },
  {
    barangay_id: 6330,
    municipality_id: 252,
    barangay_name: "Maasim",
  },
  {
    barangay_id: 6331,
    municipality_id: 252,
    barangay_name: "Mabalas-balas",
  },
  {
    barangay_id: 6332,
    municipality_id: 252,
    barangay_name: "Maguinao",
  },
  {
    barangay_id: 6333,
    municipality_id: 252,
    barangay_name: "Maronguillo",
  },
  {
    barangay_id: 6334,
    municipality_id: 252,
    barangay_name: "Paco",
  },
  {
    barangay_id: 6335,
    municipality_id: 252,
    barangay_name: "Pansumaloc",
  },
  {
    barangay_id: 6336,
    municipality_id: 252,
    barangay_name: "Pantubig",
  },
  {
    barangay_id: 6337,
    municipality_id: 252,
    barangay_name: "Pasong Bangkal",
  },
  {
    barangay_id: 6338,
    municipality_id: 252,
    barangay_name: "Pasong Callos",
  },
  {
    barangay_id: 6339,
    municipality_id: 252,
    barangay_name: "Pasong Intsik",
  },
  {
    barangay_id: 6340,
    municipality_id: 252,
    barangay_name: "Pinacpinacan",
  },
  {
    barangay_id: 6341,
    municipality_id: 252,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6342,
    municipality_id: 252,
    barangay_name: "Pulo",
  },
  {
    barangay_id: 6343,
    municipality_id: 252,
    barangay_name: "Pulong Bayabas",
  },
  {
    barangay_id: 6344,
    municipality_id: 252,
    barangay_name: "Salapungan",
  },
  {
    barangay_id: 6345,
    municipality_id: 252,
    barangay_name: "Sampaloc",
  },
  {
    barangay_id: 6346,
    municipality_id: 252,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 6347,
    municipality_id: 252,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 6352,
    municipality_id: 252,
    barangay_name: "Sapang Pahalang",
  },
  {
    barangay_id: 6348,
    municipality_id: 252,
    barangay_name: "Talacsan",
  },
  {
    barangay_id: 6349,
    municipality_id: 252,
    barangay_name: "Tambubong",
  },
  {
    barangay_id: 6350,
    municipality_id: 252,
    barangay_name: "Tukod",
  },
  {
    barangay_id: 6351,
    municipality_id: 252,
    barangay_name: "Ulingao",
  },
  {
    barangay_id: 6353,
    municipality_id: 253,
    barangay_name: "Bagbaguin",
  },
  {
    barangay_id: 6354,
    municipality_id: 253,
    barangay_name: "Balasing",
  },
  {
    barangay_id: 6355,
    municipality_id: 253,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 6356,
    municipality_id: 253,
    barangay_name: "Bulac",
  },
  {
    barangay_id: 6357,
    municipality_id: 253,
    barangay_name: "Camangyanan",
  },
  {
    barangay_id: 6358,
    municipality_id: 253,
    barangay_name: "Catmon",
  },
  {
    barangay_id: 6359,
    municipality_id: 253,
    barangay_name: "Cay Pombo",
  },
  {
    barangay_id: 6360,
    municipality_id: 253,
    barangay_name: "Caysio",
  },
  {
    barangay_id: 6361,
    municipality_id: 253,
    barangay_name: "Guyong",
  },
  {
    barangay_id: 6362,
    municipality_id: 253,
    barangay_name: "Lalakhan",
  },
  {
    barangay_id: 6363,
    municipality_id: 253,
    barangay_name: "Mag-asawang Sapa",
  },
  {
    barangay_id: 6364,
    municipality_id: 253,
    barangay_name: "Mahabang Parang",
  },
  {
    barangay_id: 6365,
    municipality_id: 253,
    barangay_name: "Manggahan",
  },
  {
    barangay_id: 6366,
    municipality_id: 253,
    barangay_name: "Parada",
  },
  {
    barangay_id: 6367,
    municipality_id: 253,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6368,
    municipality_id: 253,
    barangay_name: "Pulong Buhangin",
  },
  {
    barangay_id: 6369,
    municipality_id: 253,
    barangay_name: "San Gabriel",
  },
  {
    barangay_id: 6370,
    municipality_id: 253,
    barangay_name: "San Jose Patag",
  },
  {
    barangay_id: 6371,
    municipality_id: 253,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 6372,
    municipality_id: 253,
    barangay_name: "Santa Clara",
  },
  {
    barangay_id: 6373,
    municipality_id: 253,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 6374,
    municipality_id: 253,
    barangay_name: "Silangan",
  },
  {
    barangay_id: 6375,
    municipality_id: 253,
    barangay_name: "Tabing Bakod",
  },
  {
    barangay_id: 6376,
    municipality_id: 253,
    barangay_name: "Tumana",
  },
  {
    barangay_id: 6377,
    municipality_id: 254,
    barangay_name: "Bayabas",
  },
  {
    barangay_id: 6380,
    municipality_id: 254,
    barangay_name: "Camachile",
  },
  {
    barangay_id: 6379,
    municipality_id: 254,
    barangay_name: "Camachin",
  },
  {
    barangay_id: 6378,
    municipality_id: 254,
    barangay_name: "Kabayunan",
  },
  {
    barangay_id: 6381,
    municipality_id: 254,
    barangay_name: "Kalawakan",
  },
  {
    barangay_id: 6382,
    municipality_id: 254,
    barangay_name: "Pulong Sampalok",
  },
  {
    barangay_id: 6384,
    municipality_id: 254,
    barangay_name: "Sapang Bulak",
  },
  {
    barangay_id: 6383,
    municipality_id: 254,
    barangay_name: "Talbak",
  },
  {
    barangay_id: 6385,
    municipality_id: 255,
    barangay_name: "Betes",
  },
  {
    barangay_id: 6386,
    municipality_id: 255,
    barangay_name: "Bibiclat",
  },
  {
    barangay_id: 6387,
    municipality_id: 255,
    barangay_name: "Bucot",
  },
  {
    barangay_id: 6388,
    municipality_id: 255,
    barangay_name: "La Purisima",
  },
  {
    barangay_id: 6390,
    municipality_id: 255,
    barangay_name: "Macabucod",
  },
  {
    barangay_id: 6389,
    municipality_id: 255,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 6391,
    municipality_id: 255,
    barangay_name: "Pantoc",
  },
  {
    barangay_id: 6392,
    municipality_id: 255,
    barangay_name: "Poblacion Centro",
  },
  {
    barangay_id: 6393,
    municipality_id: 255,
    barangay_name: "Poblacion East I",
  },
  {
    barangay_id: 6394,
    municipality_id: 255,
    barangay_name: "Poblacion East II",
  },
  {
    barangay_id: 6395,
    municipality_id: 255,
    barangay_name: "Poblacion West III",
  },
  {
    barangay_id: 6396,
    municipality_id: 255,
    barangay_name: "Poblacion West IV",
  },
  {
    barangay_id: 6397,
    municipality_id: 255,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 6398,
    municipality_id: 255,
    barangay_name: "San Emiliano",
  },
  {
    barangay_id: 6399,
    municipality_id: 255,
    barangay_name: "San Eustacio",
  },
  {
    barangay_id: 6400,
    municipality_id: 255,
    barangay_name: "San Felipe Bata",
  },
  {
    barangay_id: 6401,
    municipality_id: 255,
    barangay_name: "San Felipe Matanda",
  },
  {
    barangay_id: 6402,
    municipality_id: 255,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 6403,
    municipality_id: 255,
    barangay_name: "San Pablo Bata",
  },
  {
    barangay_id: 6404,
    municipality_id: 255,
    barangay_name: "San Pablo Matanda",
  },
  {
    barangay_id: 6405,
    municipality_id: 255,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 6406,
    municipality_id: 255,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 6407,
    municipality_id: 255,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 6408,
    municipality_id: 255,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 6409,
    municipality_id: 255,
    barangay_name: "Sunson",
  },
  {
    barangay_id: 6410,
    municipality_id: 255,
    barangay_name: "Umangan",
  },
  {
    barangay_id: 6411,
    municipality_id: 256,
    barangay_name: "Antipolo",
  },
  {
    barangay_id: 6412,
    municipality_id: 256,
    barangay_name: "Ariendo",
  },
  {
    barangay_id: 6413,
    municipality_id: 256,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 6414,
    municipality_id: 256,
    barangay_name: "Calaanan",
  },
  {
    barangay_id: 6415,
    municipality_id: 256,
    barangay_name: "Commercial (Pob.)",
  },
  {
    barangay_id: 6416,
    municipality_id: 256,
    barangay_name: "Cruz",
  },
  {
    barangay_id: 6418,
    municipality_id: 256,
    barangay_name: "Curva",
  },
  {
    barangay_id: 6417,
    municipality_id: 256,
    barangay_name: "Digmala",
  },
  {
    barangay_id: 6419,
    municipality_id: 256,
    barangay_name: "Kaingin (Pob.)",
  },
  {
    barangay_id: 6420,
    municipality_id: 256,
    barangay_name: "Labi",
  },
  {
    barangay_id: 6421,
    municipality_id: 256,
    barangay_name: "Larcon",
  },
  {
    barangay_id: 6422,
    municipality_id: 256,
    barangay_name: "Lusok",
  },
  {
    barangay_id: 6423,
    municipality_id: 256,
    barangay_name: "Macabaclay",
  },
  {
    barangay_id: 6424,
    municipality_id: 256,
    barangay_name: "Magtanggol (Pob.)",
  },
  {
    barangay_id: 6425,
    municipality_id: 256,
    barangay_name: "Mantile (Pob.)",
  },
  {
    barangay_id: 6426,
    municipality_id: 256,
    barangay_name: "Olivete",
  },
  {
    barangay_id: 6427,
    municipality_id: 256,
    barangay_name: "Palo Maria (Pob.)",
  },
  {
    barangay_id: 6428,
    municipality_id: 256,
    barangay_name: "Pesa",
  },
  {
    barangay_id: 6429,
    municipality_id: 256,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 6430,
    municipality_id: 256,
    barangay_name: "Sampalucan (Pob.)",
  },
  {
    barangay_id: 6431,
    municipality_id: 256,
    barangay_name: "San Roque (Pob.)",
  },
  {
    barangay_id: 6432,
    municipality_id: 256,
    barangay_name: "Santor",
  },
  {
    barangay_id: 6433,
    municipality_id: 256,
    barangay_name: "Sinipit (Pob.)",
  },
  {
    barangay_id: 6434,
    municipality_id: 256,
    barangay_name: "Sisilang na Ligaya (Pob.)",
  },
  {
    barangay_id: 6435,
    municipality_id: 256,
    barangay_name: "Social (Pob.)",
  },
  {
    barangay_id: 6436,
    municipality_id: 256,
    barangay_name: "Tugatug",
  },
  {
    barangay_id: 6437,
    municipality_id: 256,
    barangay_name: "Tulay na Bato (Pob.)",
  },
  {
    barangay_id: 6438,
    municipality_id: 256,
    barangay_name: "Vega",
  },
  {
    barangay_id: 6439,
    municipality_id: 257,
    barangay_name: "Aduas Centro",
  },
  {
    barangay_id: 6517,
    municipality_id: 257,
    barangay_name: "Aduas Norte",
  },
  {
    barangay_id: 6518,
    municipality_id: 257,
    barangay_name: "Aduas Sur",
  },
  {
    barangay_id: 6441,
    municipality_id: 257,
    barangay_name: "Bagong Buhay",
  },
  {
    barangay_id: 6440,
    municipality_id: 257,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 6442,
    municipality_id: 257,
    barangay_name: "Bakero",
  },
  {
    barangay_id: 6443,
    municipality_id: 257,
    barangay_name: "Bakod Bayan",
  },
  {
    barangay_id: 6444,
    municipality_id: 257,
    barangay_name: "Balite",
  },
  {
    barangay_id: 6445,
    municipality_id: 257,
    barangay_name: "Bangad",
  },
  {
    barangay_id: 6446,
    municipality_id: 257,
    barangay_name: "Bantug Bulalo",
  },
  {
    barangay_id: 6447,
    municipality_id: 257,
    barangay_name: "Bantug Norte",
  },
  {
    barangay_id: 6448,
    municipality_id: 257,
    barangay_name: "Barlis",
  },
  {
    barangay_id: 6449,
    municipality_id: 257,
    barangay_name: "Barrera District (Pob.)",
  },
  {
    barangay_id: 6450,
    municipality_id: 257,
    barangay_name: "Bernardo District (Pob.)",
  },
  {
    barangay_id: 6451,
    municipality_id: 257,
    barangay_name: "Bitas",
  },
  {
    barangay_id: 6452,
    municipality_id: 257,
    barangay_name: "Bonifacio District (Pob.)",
  },
  {
    barangay_id: 6453,
    municipality_id: 257,
    barangay_name: "Buliran",
  },
  {
    barangay_id: 6454,
    municipality_id: 257,
    barangay_name: "Caalibangbangan",
  },
  {
    barangay_id: 6455,
    municipality_id: 257,
    barangay_name: "Cabu",
  },
  {
    barangay_id: 6473,
    municipality_id: 257,
    barangay_name: "Calawagan",
  },
  {
    barangay_id: 6456,
    municipality_id: 257,
    barangay_name: "Campo Tinio",
  },
  {
    barangay_id: 6523,
    municipality_id: 257,
    barangay_name: "Caridad",
  },
  {
    barangay_id: 6460,
    municipality_id: 257,
    barangay_name: "Caudillo",
  },
  {
    barangay_id: 6458,
    municipality_id: 257,
    barangay_name: "Cinco-Cinco",
  },
  {
    barangay_id: 6459,
    municipality_id: 257,
    barangay_name: "City Supermarket (Pob.)",
  },
  {
    barangay_id: 6461,
    municipality_id: 257,
    barangay_name: "Communal",
  },
  {
    barangay_id: 6462,
    municipality_id: 257,
    barangay_name: "Cruz Roja",
  },
  {
    barangay_id: 6463,
    municipality_id: 257,
    barangay_name: "Daang Sarile",
  },
  {
    barangay_id: 6464,
    municipality_id: 257,
    barangay_name: "Dalampang",
  },
  {
    barangay_id: 6465,
    municipality_id: 257,
    barangay_name: "Dicarma (Pob.)",
  },
  {
    barangay_id: 6466,
    municipality_id: 257,
    barangay_name: "Dimasalang (Pob.)",
  },
  {
    barangay_id: 6467,
    municipality_id: 257,
    barangay_name: "Dionisio S. Garcia",
  },
  {
    barangay_id: 6468,
    municipality_id: 257,
    barangay_name: "Fatima (Pob.)",
  },
  {
    barangay_id: 6469,
    municipality_id: 257,
    barangay_name: "General Luna (Pob.)",
  },
  {
    barangay_id: 6519,
    municipality_id: 257,
    barangay_name: "Hermogenes C. Concepcion, Sr.",
  },
  {
    barangay_id: 6470,
    municipality_id: 257,
    barangay_name: "Ibabao Bana",
  },
  {
    barangay_id: 6471,
    municipality_id: 257,
    barangay_name: "Imelda District",
  },
  {
    barangay_id: 6472,
    municipality_id: 257,
    barangay_name: "Isla (Pob.)",
  },
  {
    barangay_id: 6474,
    municipality_id: 257,
    barangay_name: "Kalikid Norte",
  },
  {
    barangay_id: 6475,
    municipality_id: 257,
    barangay_name: "Kalikid Sur",
  },
  {
    barangay_id: 6457,
    municipality_id: 257,
    barangay_name: "Kapitan Pepe (Pob.)",
  },
  {
    barangay_id: 6476,
    municipality_id: 257,
    barangay_name: "Lagare",
  },
  {
    barangay_id: 6483,
    municipality_id: 257,
    barangay_name: "Lourdes",
  },
  {
    barangay_id: 6477,
    municipality_id: 257,
    barangay_name: "M. S. Garcia",
  },
  {
    barangay_id: 6478,
    municipality_id: 257,
    barangay_name: "Mabini Extension",
  },
  {
    barangay_id: 6479,
    municipality_id: 257,
    barangay_name: "Mabini Homesite",
  },
  {
    barangay_id: 6480,
    municipality_id: 257,
    barangay_name: "Macatbong",
  },
  {
    barangay_id: 6481,
    municipality_id: 257,
    barangay_name: "Magsaysay District",
  },
  {
    barangay_id: 6524,
    municipality_id: 257,
    barangay_name: "Magsaysay South",
  },
  {
    barangay_id: 6525,
    municipality_id: 257,
    barangay_name: "Maria Theresa",
  },
  {
    barangay_id: 6482,
    municipality_id: 257,
    barangay_name: "Matadero (Pob.)",
  },
  {
    barangay_id: 6484,
    municipality_id: 257,
    barangay_name: "Mayapyap Norte",
  },
  {
    barangay_id: 6485,
    municipality_id: 257,
    barangay_name: "Mayapyap Sur",
  },
  {
    barangay_id: 6486,
    municipality_id: 257,
    barangay_name: "Melojavilla (Pob.)",
  },
  {
    barangay_id: 6514,
    municipality_id: 257,
    barangay_name: "Nabao (Pob.)",
  },
  {
    barangay_id: 6487,
    municipality_id: 257,
    barangay_name: "Obrero",
  },
  {
    barangay_id: 6515,
    municipality_id: 257,
    barangay_name: "Padre Burgos (Pob.)",
  },
  {
    barangay_id: 6488,
    municipality_id: 257,
    barangay_name: "Padre Crisostomo",
  },
  {
    barangay_id: 6489,
    municipality_id: 257,
    barangay_name: "Pagas",
  },
  {
    barangay_id: 6490,
    municipality_id: 257,
    barangay_name: "Palagay",
  },
  {
    barangay_id: 6491,
    municipality_id: 257,
    barangay_name: "Pamaldan",
  },
  {
    barangay_id: 6492,
    municipality_id: 257,
    barangay_name: "Pangatian",
  },
  {
    barangay_id: 6493,
    municipality_id: 257,
    barangay_name: "Patalac",
  },
  {
    barangay_id: 6494,
    municipality_id: 257,
    barangay_name: "Polilio",
  },
  {
    barangay_id: 6495,
    municipality_id: 257,
    barangay_name: "Pula",
  },
  {
    barangay_id: 6496,
    municipality_id: 257,
    barangay_name: "Quezon District (Pob.)",
  },
  {
    barangay_id: 6497,
    municipality_id: 257,
    barangay_name: "Rizdelis (Pob.)",
  },
  {
    barangay_id: 6498,
    municipality_id: 257,
    barangay_name: "Samon",
  },
  {
    barangay_id: 6499,
    municipality_id: 257,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 6500,
    municipality_id: 257,
    barangay_name: "San Josef Norte",
  },
  {
    barangay_id: 6501,
    municipality_id: 257,
    barangay_name: "San Josef Sur",
  },
  {
    barangay_id: 6502,
    municipality_id: 257,
    barangay_name: "San Juan Pob.",
  },
  {
    barangay_id: 6503,
    municipality_id: 257,
    barangay_name: "San Roque Norte",
  },
  {
    barangay_id: 6504,
    municipality_id: 257,
    barangay_name: "San Roque Sur",
  },
  {
    barangay_id: 6505,
    municipality_id: 257,
    barangay_name: "Sanbermicristi (Pob.)",
  },
  {
    barangay_id: 6506,
    municipality_id: 257,
    barangay_name: "Sangitan",
  },
  {
    barangay_id: 6526,
    municipality_id: 257,
    barangay_name: "Sangitan East",
  },
  {
    barangay_id: 6507,
    municipality_id: 257,
    barangay_name: "Santa Arcadia",
  },
  {
    barangay_id: 6527,
    municipality_id: 257,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 6520,
    municipality_id: 257,
    barangay_name: "Sapang",
  },
  {
    barangay_id: 6521,
    municipality_id: 257,
    barangay_name: "Sumacab Este",
  },
  {
    barangay_id: 6508,
    municipality_id: 257,
    barangay_name: "Sumacab Norte",
  },
  {
    barangay_id: 6522,
    municipality_id: 257,
    barangay_name: "Sumacab South",
  },
  {
    barangay_id: 6516,
    municipality_id: 257,
    barangay_name: "Talipapa",
  },
  {
    barangay_id: 6509,
    municipality_id: 257,
    barangay_name: "Valdefuente",
  },
  {
    barangay_id: 6510,
    municipality_id: 257,
    barangay_name: "Valle Cruz",
  },
  {
    barangay_id: 6511,
    municipality_id: 257,
    barangay_name: "Vijandre District (Pob.)",
  },
  {
    barangay_id: 6512,
    municipality_id: 257,
    barangay_name: "Villa Ofelia-Caridad",
  },
  {
    barangay_id: 6513,
    municipality_id: 257,
    barangay_name: "Zulueta District (Pob.)",
  },
  {
    barangay_id: 6528,
    municipality_id: 258,
    barangay_name: "Bagong Buhay",
  },
  {
    barangay_id: 6529,
    municipality_id: 258,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 6530,
    municipality_id: 258,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 6531,
    municipality_id: 258,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 6532,
    municipality_id: 258,
    barangay_name: "Entablado",
  },
  {
    barangay_id: 6533,
    municipality_id: 258,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 6534,
    municipality_id: 258,
    barangay_name: "Natividad North (Pob.)",
  },
  {
    barangay_id: 6535,
    municipality_id: 258,
    barangay_name: "Natividad South (Pob.)",
  },
  {
    barangay_id: 6536,
    municipality_id: 258,
    barangay_name: "Palasinan",
  },
  {
    barangay_id: 6547,
    municipality_id: 258,
    barangay_name: "Polilio",
  },
  {
    barangay_id: 6537,
    municipality_id: 258,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 6548,
    municipality_id: 258,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 6538,
    municipality_id: 258,
    barangay_name: "San Fernando Norte",
  },
  {
    barangay_id: 6539,
    municipality_id: 258,
    barangay_name: "San Fernando Sur",
  },
  {
    barangay_id: 6540,
    municipality_id: 258,
    barangay_name: "San Gregorio",
  },
  {
    barangay_id: 6541,
    municipality_id: 258,
    barangay_name: "San Juan North (Pob.)",
  },
  {
    barangay_id: 6542,
    municipality_id: 258,
    barangay_name: "San Juan South (Pob.)",
  },
  {
    barangay_id: 6543,
    municipality_id: 258,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 6544,
    municipality_id: 258,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 6550,
    municipality_id: 258,
    barangay_name: "Santa Ines",
  },
  {
    barangay_id: 6549,
    municipality_id: 258,
    barangay_name: "Santa Isabel",
  },
  {
    barangay_id: 6545,
    municipality_id: 258,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 6546,
    municipality_id: 258,
    barangay_name: "Sinipit",
  },
  {
    barangay_id: 6552,
    municipality_id: 259,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 6553,
    municipality_id: 259,
    barangay_name: "Bunga",
  },
  {
    barangay_id: 6554,
    municipality_id: 259,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 6555,
    municipality_id: 259,
    barangay_name: "Capintalan",
  },
  {
    barangay_id: 6566,
    municipality_id: 259,
    barangay_name: "D. L. Maglanoc Pob.",
  },
  {
    barangay_id: 6565,
    municipality_id: 259,
    barangay_name: "F. C. Otic Pob.",
  },
  {
    barangay_id: 6567,
    municipality_id: 259,
    barangay_name: "G. S. Rosario Pob.",
  },
  {
    barangay_id: 6557,
    municipality_id: 259,
    barangay_name: "General Luna",
  },
  {
    barangay_id: 6556,
    municipality_id: 259,
    barangay_name: "Joson",
  },
  {
    barangay_id: 6558,
    municipality_id: 259,
    barangay_name: "Minuli",
  },
  {
    barangay_id: 6559,
    municipality_id: 259,
    barangay_name: "Piut",
  },
  {
    barangay_id: 6560,
    municipality_id: 259,
    barangay_name: "Puncan",
  },
  {
    barangay_id: 6561,
    municipality_id: 259,
    barangay_name: "Putlan",
  },
  {
    barangay_id: 6551,
    municipality_id: 259,
    barangay_name: "R.A.Padilla",
  },
  {
    barangay_id: 6562,
    municipality_id: 259,
    barangay_name: "Salazar",
  },
  {
    barangay_id: 6563,
    municipality_id: 259,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 6564,
    municipality_id: 259,
    barangay_name: "T. L. Padilla Pob.",
  },
  {
    barangay_id: 6568,
    municipality_id: 260,
    barangay_name: "Baloy",
  },
  {
    barangay_id: 6569,
    municipality_id: 260,
    barangay_name: "Bambanaba",
  },
  {
    barangay_id: 6570,
    municipality_id: 260,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 6571,
    municipality_id: 260,
    barangay_name: "Bentigan",
  },
  {
    barangay_id: 6572,
    municipality_id: 260,
    barangay_name: "Bibiclat",
  },
  {
    barangay_id: 6573,
    municipality_id: 260,
    barangay_name: "Bonifacio",
  },
  {
    barangay_id: 6574,
    municipality_id: 260,
    barangay_name: "Bued",
  },
  {
    barangay_id: 6575,
    municipality_id: 260,
    barangay_name: "Bulala",
  },
  {
    barangay_id: 6576,
    municipality_id: 260,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 6578,
    municipality_id: 260,
    barangay_name: "Cabatuan",
  },
  {
    barangay_id: 6577,
    municipality_id: 260,
    barangay_name: "Cabileo",
  },
  {
    barangay_id: 6579,
    municipality_id: 260,
    barangay_name: "Cacapasan",
  },
  {
    barangay_id: 6580,
    municipality_id: 260,
    barangay_name: "Calancuasan Norte",
  },
  {
    barangay_id: 6581,
    municipality_id: 260,
    barangay_name: "Calancuasan Sur",
  },
  {
    barangay_id: 6582,
    municipality_id: 260,
    barangay_name: "Colosboa",
  },
  {
    barangay_id: 6583,
    municipality_id: 260,
    barangay_name: "Columbitin",
  },
  {
    barangay_id: 6584,
    municipality_id: 260,
    barangay_name: "Curva",
  },
  {
    barangay_id: 6585,
    municipality_id: 260,
    barangay_name: "District I",
  },
  {
    barangay_id: 6586,
    municipality_id: 260,
    barangay_name: "District II",
  },
  {
    barangay_id: 6587,
    municipality_id: 260,
    barangay_name: "District IV",
  },
  {
    barangay_id: 6588,
    municipality_id: 260,
    barangay_name: "District V",
  },
  {
    barangay_id: 6589,
    municipality_id: 260,
    barangay_name: "District VI",
  },
  {
    barangay_id: 6590,
    municipality_id: 260,
    barangay_name: "District VII",
  },
  {
    barangay_id: 6591,
    municipality_id: 260,
    barangay_name: "District VIII",
  },
  {
    barangay_id: 6592,
    municipality_id: 260,
    barangay_name: "Landig",
  },
  {
    barangay_id: 6593,
    municipality_id: 260,
    barangay_name: "Latap",
  },
  {
    barangay_id: 6594,
    municipality_id: 260,
    barangay_name: "Loob",
  },
  {
    barangay_id: 6595,
    municipality_id: 260,
    barangay_name: "Luna",
  },
  {
    barangay_id: 6596,
    municipality_id: 260,
    barangay_name: "Malbeg-Patalan",
  },
  {
    barangay_id: 6597,
    municipality_id: 260,
    barangay_name: "Malineng",
  },
  {
    barangay_id: 6598,
    municipality_id: 260,
    barangay_name: "Matindeg",
  },
  {
    barangay_id: 6599,
    municipality_id: 260,
    barangay_name: "Maycaban",
  },
  {
    barangay_id: 6600,
    municipality_id: 260,
    barangay_name: "Nacuralan",
  },
  {
    barangay_id: 6601,
    municipality_id: 260,
    barangay_name: "Nagmisahan",
  },
  {
    barangay_id: 6602,
    municipality_id: 260,
    barangay_name: "Paitan Norte",
  },
  {
    barangay_id: 6603,
    municipality_id: 260,
    barangay_name: "Paitan Sur",
  },
  {
    barangay_id: 6604,
    municipality_id: 260,
    barangay_name: "Piglisan",
  },
  {
    barangay_id: 6605,
    municipality_id: 260,
    barangay_name: "Pugo",
  },
  {
    barangay_id: 6606,
    municipality_id: 260,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 6607,
    municipality_id: 260,
    barangay_name: "Sabit",
  },
  {
    barangay_id: 6608,
    municipality_id: 260,
    barangay_name: "Salagusog",
  },
  {
    barangay_id: 6609,
    municipality_id: 260,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 6610,
    municipality_id: 260,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 6611,
    municipality_id: 260,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 6612,
    municipality_id: 260,
    barangay_name: "Santa Clara",
  },
  {
    barangay_id: 6613,
    municipality_id: 260,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 6614,
    municipality_id: 260,
    barangay_name: "Sinimbaan",
  },
  {
    barangay_id: 6615,
    municipality_id: 260,
    barangay_name: "Tagtagumbao",
  },
  {
    barangay_id: 6616,
    municipality_id: 260,
    barangay_name: "Tutuloy",
  },
  {
    barangay_id: 6617,
    municipality_id: 260,
    barangay_name: "Ungab",
  },
  {
    barangay_id: 6618,
    municipality_id: 260,
    barangay_name: "Villaflores",
  },
  {
    barangay_id: 6619,
    municipality_id: 261,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 6620,
    municipality_id: 261,
    barangay_name: "Bagting",
  },
  {
    barangay_id: 6621,
    municipality_id: 261,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 6622,
    municipality_id: 261,
    barangay_name: "Bitulok",
  },
  {
    barangay_id: 6623,
    municipality_id: 261,
    barangay_name: "Bugnan",
  },
  {
    barangay_id: 6624,
    municipality_id: 261,
    barangay_name: "Calabasa",
  },
  {
    barangay_id: 6625,
    municipality_id: 261,
    barangay_name: "Camachile",
  },
  {
    barangay_id: 6626,
    municipality_id: 261,
    barangay_name: "Cuyapa",
  },
  {
    barangay_id: 6627,
    municipality_id: 261,
    barangay_name: "Ligaya",
  },
  {
    barangay_id: 6628,
    municipality_id: 261,
    barangay_name: "Macasandal",
  },
  {
    barangay_id: 6629,
    municipality_id: 261,
    barangay_name: "Malinao",
  },
  {
    barangay_id: 6630,
    municipality_id: 261,
    barangay_name: "Pantoc",
  },
  {
    barangay_id: 6631,
    municipality_id: 261,
    barangay_name: "Pinamalisan",
  },
  {
    barangay_id: 6633,
    municipality_id: 261,
    barangay_name: "Sawmill",
  },
  {
    barangay_id: 6632,
    municipality_id: 261,
    barangay_name: "South Poblacion",
  },
  {
    barangay_id: 6634,
    municipality_id: 261,
    barangay_name: "Tagumpay",
  },
  {
    barangay_id: 6653,
    municipality_id: 262,
    barangay_name: "Balante",
  },
  {
    barangay_id: 6635,
    municipality_id: 262,
    barangay_name: "Bayanihan",
  },
  {
    barangay_id: 6636,
    municipality_id: 262,
    barangay_name: "Bulak",
  },
  {
    barangay_id: 6654,
    municipality_id: 262,
    barangay_name: "Bungo",
  },
  {
    barangay_id: 6637,
    municipality_id: 262,
    barangay_name: "Kapalangan",
  },
  {
    barangay_id: 6655,
    municipality_id: 262,
    barangay_name: "Mabunga",
  },
  {
    barangay_id: 6656,
    municipality_id: 262,
    barangay_name: "Maburak",
  },
  {
    barangay_id: 6638,
    municipality_id: 262,
    barangay_name: "Mahipon",
  },
  {
    barangay_id: 6652,
    municipality_id: 262,
    barangay_name: "Makabaclay",
  },
  {
    barangay_id: 6639,
    municipality_id: 262,
    barangay_name: "Malimba",
  },
  {
    barangay_id: 6640,
    municipality_id: 262,
    barangay_name: "Mangino",
  },
  {
    barangay_id: 6641,
    municipality_id: 262,
    barangay_name: "Marelo",
  },
  {
    barangay_id: 6642,
    municipality_id: 262,
    barangay_name: "Pambuan",
  },
  {
    barangay_id: 6643,
    municipality_id: 262,
    barangay_name: "Parcutela",
  },
  {
    barangay_id: 6657,
    municipality_id: 262,
    barangay_name: "Puting Tubig",
  },
  {
    barangay_id: 6644,
    municipality_id: 262,
    barangay_name: "San Lorenzo (Pob.)",
  },
  {
    barangay_id: 6645,
    municipality_id: 262,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 6646,
    municipality_id: 262,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 6647,
    municipality_id: 262,
    barangay_name: "San Vicente (Pob.)",
  },
  {
    barangay_id: 6648,
    municipality_id: 262,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 6649,
    municipality_id: 262,
    barangay_name: "Santo Cristo Norte",
  },
  {
    barangay_id: 6650,
    municipality_id: 262,
    barangay_name: "Santo Cristo Sur",
  },
  {
    barangay_id: 6651,
    municipality_id: 262,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 6658,
    municipality_id: 263,
    barangay_name: "Balangkare Norte",
  },
  {
    barangay_id: 6659,
    municipality_id: 263,
    barangay_name: "Balangkare Sur",
  },
  {
    barangay_id: 6660,
    municipality_id: 263,
    barangay_name: "Balaring",
  },
  {
    barangay_id: 6661,
    municipality_id: 263,
    barangay_name: "Belen",
  },
  {
    barangay_id: 6662,
    municipality_id: 263,
    barangay_name: "Bravo",
  },
  {
    barangay_id: 6663,
    municipality_id: 263,
    barangay_name: "Burol",
  },
  {
    barangay_id: 6664,
    municipality_id: 263,
    barangay_name: "Kabulihan",
  },
  {
    barangay_id: 6665,
    municipality_id: 263,
    barangay_name: "Mag-asawang Sampaloc",
  },
  {
    barangay_id: 6666,
    municipality_id: 263,
    barangay_name: "Manarog",
  },
  {
    barangay_id: 6667,
    municipality_id: 263,
    barangay_name: "Mataas na Kahoy",
  },
  {
    barangay_id: 6668,
    municipality_id: 263,
    barangay_name: "Panacsac",
  },
  {
    barangay_id: 6669,
    municipality_id: 263,
    barangay_name: "Picaleon",
  },
  {
    barangay_id: 6670,
    municipality_id: 263,
    barangay_name: "Pinahan",
  },
  {
    barangay_id: 6671,
    municipality_id: 263,
    barangay_name: "Platero",
  },
  {
    barangay_id: 6672,
    municipality_id: 263,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 6673,
    municipality_id: 263,
    barangay_name: "Pula",
  },
  {
    barangay_id: 6674,
    municipality_id: 263,
    barangay_name: "Pulong Singkamas",
  },
  {
    barangay_id: 6675,
    municipality_id: 263,
    barangay_name: "Sapang Bato",
  },
  {
    barangay_id: 6676,
    municipality_id: 263,
    barangay_name: "Talabutab Norte",
  },
  {
    barangay_id: 6677,
    municipality_id: 263,
    barangay_name: "Talabutab Sur",
  },
  {
    barangay_id: 6678,
    municipality_id: 264,
    barangay_name: "Bago",
  },
  {
    barangay_id: 6679,
    municipality_id: 264,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 6680,
    municipality_id: 264,
    barangay_name: "Nazareth",
  },
  {
    barangay_id: 6681,
    municipality_id: 264,
    barangay_name: "Padolina",
  },
  {
    barangay_id: 6690,
    municipality_id: 264,
    barangay_name: "Palale",
  },
  {
    barangay_id: 6682,
    municipality_id: 264,
    barangay_name: "Pias",
  },
  {
    barangay_id: 6687,
    municipality_id: 264,
    barangay_name: "Poblacion Central",
  },
  {
    barangay_id: 6684,
    municipality_id: 264,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 6685,
    municipality_id: 264,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 6688,
    municipality_id: 264,
    barangay_name: "Pulong Matong",
  },
  {
    barangay_id: 6686,
    municipality_id: 264,
    barangay_name: "Rio Chico",
  },
  {
    barangay_id: 6689,
    municipality_id: 264,
    barangay_name: "Sampaguita",
  },
  {
    barangay_id: 6683,
    municipality_id: 264,
    barangay_name: "San Pedro (Pob.)",
  },
  {
    barangay_id: 6691,
    municipality_id: 265,
    barangay_name: "Agcano",
  },
  {
    barangay_id: 6692,
    municipality_id: 265,
    barangay_name: "Ayos Lomboy",
  },
  {
    barangay_id: 6693,
    municipality_id: 265,
    barangay_name: "Bacayao",
  },
  {
    barangay_id: 6694,
    municipality_id: 265,
    barangay_name: "Bagong Barrio",
  },
  {
    barangay_id: 6695,
    municipality_id: 265,
    barangay_name: "Balbalino",
  },
  {
    barangay_id: 6696,
    municipality_id: 265,
    barangay_name: "Balingog East",
  },
  {
    barangay_id: 6697,
    municipality_id: 265,
    barangay_name: "Balingog West",
  },
  {
    barangay_id: 6698,
    municipality_id: 265,
    barangay_name: "Banitan",
  },
  {
    barangay_id: 6699,
    municipality_id: 265,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 6700,
    municipality_id: 265,
    barangay_name: "Bulakid",
  },
  {
    barangay_id: 6754,
    municipality_id: 265,
    barangay_name: "Bunol",
  },
  {
    barangay_id: 6701,
    municipality_id: 265,
    barangay_name: "Caballero",
  },
  {
    barangay_id: 6702,
    municipality_id: 265,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 6703,
    municipality_id: 265,
    barangay_name: "Caingin Tabing Ilog",
  },
  {
    barangay_id: 6704,
    municipality_id: 265,
    barangay_name: "Calem",
  },
  {
    barangay_id: 6705,
    municipality_id: 265,
    barangay_name: "Camiling",
  },
  {
    barangay_id: 6706,
    municipality_id: 265,
    barangay_name: "Cardinal",
  },
  {
    barangay_id: 6707,
    municipality_id: 265,
    barangay_name: "Casongsong",
  },
  {
    barangay_id: 6708,
    municipality_id: 265,
    barangay_name: "Catimon",
  },
  {
    barangay_id: 6709,
    municipality_id: 265,
    barangay_name: "Cavite",
  },
  {
    barangay_id: 6710,
    municipality_id: 265,
    barangay_name: "Cawayan Bugtong",
  },
  {
    barangay_id: 6711,
    municipality_id: 265,
    barangay_name: "Consuelo",
  },
  {
    barangay_id: 6712,
    municipality_id: 265,
    barangay_name: "Culong",
  },
  {
    barangay_id: 6713,
    municipality_id: 265,
    barangay_name: "Escano",
  },
  {
    barangay_id: 6714,
    municipality_id: 265,
    barangay_name: "Faigal",
  },
  {
    barangay_id: 6715,
    municipality_id: 265,
    barangay_name: "Galvan",
  },
  {
    barangay_id: 6716,
    municipality_id: 265,
    barangay_name: "Guiset",
  },
  {
    barangay_id: 6717,
    municipality_id: 265,
    barangay_name: "Lamorito",
  },
  {
    barangay_id: 6718,
    municipality_id: 265,
    barangay_name: "Lennec",
  },
  {
    barangay_id: 6719,
    municipality_id: 265,
    barangay_name: "Macamias",
  },
  {
    barangay_id: 6720,
    municipality_id: 265,
    barangay_name: "Macapabellag",
  },
  {
    barangay_id: 6721,
    municipality_id: 265,
    barangay_name: "Macatcatuit",
  },
  {
    barangay_id: 6722,
    municipality_id: 265,
    barangay_name: "Manacsac",
  },
  {
    barangay_id: 6723,
    municipality_id: 265,
    barangay_name: "Manggang Marikit",
  },
  {
    barangay_id: 6724,
    municipality_id: 265,
    barangay_name: "Maturanoc",
  },
  {
    barangay_id: 6725,
    municipality_id: 265,
    barangay_name: "Maybubon",
  },
  {
    barangay_id: 6726,
    municipality_id: 265,
    barangay_name: "Naglabrahan",
  },
  {
    barangay_id: 6727,
    municipality_id: 265,
    barangay_name: "Nagpandayan",
  },
  {
    barangay_id: 6728,
    municipality_id: 265,
    barangay_name: "Narvacan I",
  },
  {
    barangay_id: 6729,
    municipality_id: 265,
    barangay_name: "Narvacan II",
  },
  {
    barangay_id: 6730,
    municipality_id: 265,
    barangay_name: "Pacac",
  },
  {
    barangay_id: 6731,
    municipality_id: 265,
    barangay_name: "Partida I",
  },
  {
    barangay_id: 6732,
    municipality_id: 265,
    barangay_name: "Partida II",
  },
  {
    barangay_id: 6733,
    municipality_id: 265,
    barangay_name: "Pasong Inchic",
  },
  {
    barangay_id: 6734,
    municipality_id: 265,
    barangay_name: "Saint John District (Pob.)",
  },
  {
    barangay_id: 6735,
    municipality_id: 265,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 6736,
    municipality_id: 265,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 6737,
    municipality_id: 265,
    barangay_name: "San Bernardino",
  },
  {
    barangay_id: 6738,
    municipality_id: 265,
    barangay_name: "San Marcelino",
  },
  {
    barangay_id: 6739,
    municipality_id: 265,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 6740,
    municipality_id: 265,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 6741,
    municipality_id: 265,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 6742,
    municipality_id: 265,
    barangay_name: "Santa Ana",
  },
  {
    barangay_id: 6743,
    municipality_id: 265,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 6744,
    municipality_id: 265,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 6745,
    municipality_id: 265,
    barangay_name: "Santa Veronica District (Pob.)",
  },
  {
    barangay_id: 6746,
    municipality_id: 265,
    barangay_name: "Santo Cristo District (Pob.)",
  },
  {
    barangay_id: 6747,
    municipality_id: 265,
    barangay_name: "Saranay District (Pob.)",
  },
  {
    barangay_id: 6748,
    municipality_id: 265,
    barangay_name: "Sinulatan",
  },
  {
    barangay_id: 6749,
    municipality_id: 265,
    barangay_name: "Subol",
  },
  {
    barangay_id: 6750,
    municipality_id: 265,
    barangay_name: "Tampac I",
  },
  {
    barangay_id: 6751,
    municipality_id: 265,
    barangay_name: "Tampac II & III",
  },
  {
    barangay_id: 6752,
    municipality_id: 265,
    barangay_name: "Triala",
  },
  {
    barangay_id: 6753,
    municipality_id: 265,
    barangay_name: "Yuson",
  },
  {
    barangay_id: 6755,
    municipality_id: 266,
    barangay_name: "Calabasa",
  },
  {
    barangay_id: 6756,
    municipality_id: 266,
    barangay_name: "Dampulan (Pob.)",
  },
  {
    barangay_id: 6765,
    municipality_id: 266,
    barangay_name: "Don Mariano Marcos (Pob.)",
  },
  {
    barangay_id: 6757,
    municipality_id: 266,
    barangay_name: "Hilera",
  },
  {
    barangay_id: 6758,
    municipality_id: 266,
    barangay_name: "Imbunia",
  },
  {
    barangay_id: 6759,
    municipality_id: 266,
    barangay_name: "Imelda Pob.",
  },
  {
    barangay_id: 6760,
    municipality_id: 266,
    barangay_name: "Lambakin",
  },
  {
    barangay_id: 6761,
    municipality_id: 266,
    barangay_name: "Langla",
  },
  {
    barangay_id: 6762,
    municipality_id: 266,
    barangay_name: "Magsalisi",
  },
  {
    barangay_id: 6763,
    municipality_id: 266,
    barangay_name: "Malabon-Kaingin",
  },
  {
    barangay_id: 6764,
    municipality_id: 266,
    barangay_name: "Marawa",
  },
  {
    barangay_id: 6767,
    municipality_id: 266,
    barangay_name: "Niyugan",
  },
  {
    barangay_id: 6773,
    municipality_id: 266,
    barangay_name: "Ocampo-Rivera District (Pob.)",
  },
  {
    barangay_id: 6769,
    municipality_id: 266,
    barangay_name: "Pakol",
  },
  {
    barangay_id: 6768,
    municipality_id: 266,
    barangay_name: "Pamacpacan",
  },
  {
    barangay_id: 6770,
    municipality_id: 266,
    barangay_name: "Pinanggaan",
  },
  {
    barangay_id: 6772,
    municipality_id: 266,
    barangay_name: "Putlod",
  },
  {
    barangay_id: 6774,
    municipality_id: 266,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 6766,
    municipality_id: 266,
    barangay_name: "San Josef",
  },
  {
    barangay_id: 6775,
    municipality_id: 266,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 6776,
    municipality_id: 266,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 6777,
    municipality_id: 266,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 6778,
    municipality_id: 266,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 6779,
    municipality_id: 266,
    barangay_name: "Santo Tomas North",
  },
  {
    barangay_id: 6780,
    municipality_id: 266,
    barangay_name: "Santo Tomas South",
  },
  {
    barangay_id: 6781,
    municipality_id: 266,
    barangay_name: "Sapang",
  },
  {
    barangay_id: 6771,
    municipality_id: 266,
    barangay_name: "Ulanin-Pitak",
  },
  {
    barangay_id: 6782,
    municipality_id: 267,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 6783,
    municipality_id: 267,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 6784,
    municipality_id: 267,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 6785,
    municipality_id: 267,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 6786,
    municipality_id: 267,
    barangay_name: "Betania",
  },
  {
    barangay_id: 6787,
    municipality_id: 267,
    barangay_name: "Canantong",
  },
  {
    barangay_id: 6788,
    municipality_id: 267,
    barangay_name: "Nauzon",
  },
  {
    barangay_id: 6789,
    municipality_id: 267,
    barangay_name: "Pangarulong",
  },
  {
    barangay_id: 6790,
    municipality_id: 267,
    barangay_name: "Pinagbayanan",
  },
  {
    barangay_id: 6791,
    municipality_id: 267,
    barangay_name: "Sagana",
  },
  {
    barangay_id: 6798,
    municipality_id: 267,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 6792,
    municipality_id: 267,
    barangay_name: "San Fernando",
  },
  {
    barangay_id: 6793,
    municipality_id: 267,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 6794,
    municipality_id: 267,
    barangay_name: "San Josef",
  },
  {
    barangay_id: 6795,
    municipality_id: 267,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 6796,
    municipality_id: 267,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 6797,
    municipality_id: 267,
    barangay_name: "Siclong",
  },
  {
    barangay_id: 6809,
    municipality_id: 268,
    barangay_name: "Aquino",
  },
  {
    barangay_id: 6799,
    municipality_id: 268,
    barangay_name: "Linao",
  },
  {
    barangay_id: 6800,
    municipality_id: 268,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 6801,
    municipality_id: 268,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 6802,
    municipality_id: 268,
    barangay_name: "San Casimiro",
  },
  {
    barangay_id: 6803,
    municipality_id: 268,
    barangay_name: "San Cristobal",
  },
  {
    barangay_id: 6804,
    municipality_id: 268,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 6805,
    municipality_id: 268,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 6806,
    municipality_id: 268,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 6807,
    municipality_id: 268,
    barangay_name: "Tabing Ilog",
  },
  {
    barangay_id: 6808,
    municipality_id: 268,
    barangay_name: "Villarosa",
  },
  {
    barangay_id: 6810,
    municipality_id: 269,
    barangay_name: "A. Bonifacio",
  },
  {
    barangay_id: 6823,
    municipality_id: 269,
    barangay_name: "Bagumbayan (Pob.)",
  },
  {
    barangay_id: 6831,
    municipality_id: 269,
    barangay_name: "Bosque",
  },
  {
    barangay_id: 6811,
    municipality_id: 269,
    barangay_name: "Caridad Norte",
  },
  {
    barangay_id: 6812,
    municipality_id: 269,
    barangay_name: "Caridad Sur",
  },
  {
    barangay_id: 6813,
    municipality_id: 269,
    barangay_name: "Casile",
  },
  {
    barangay_id: 6814,
    municipality_id: 269,
    barangay_name: "Florida Blanca",
  },
  {
    barangay_id: 6815,
    municipality_id: 269,
    barangay_name: "General Luna",
  },
  {
    barangay_id: 6816,
    municipality_id: 269,
    barangay_name: "General Ricarte",
  },
  {
    barangay_id: 6817,
    municipality_id: 269,
    barangay_name: "Gomez",
  },
  {
    barangay_id: 6818,
    municipality_id: 269,
    barangay_name: "Inanama",
  },
  {
    barangay_id: 6819,
    municipality_id: 269,
    barangay_name: "Ligaya",
  },
  {
    barangay_id: 6820,
    municipality_id: 269,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 6821,
    municipality_id: 269,
    barangay_name: "Murcon",
  },
  {
    barangay_id: 6822,
    municipality_id: 269,
    barangay_name: "Plaridel",
  },
  {
    barangay_id: 6824,
    municipality_id: 269,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 6825,
    municipality_id: 269,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 6826,
    municipality_id: 269,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 6827,
    municipality_id: 269,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 6828,
    municipality_id: 269,
    barangay_name: "Santa Barbara",
  },
  {
    barangay_id: 6829,
    municipality_id: 269,
    barangay_name: "Victoria",
  },
  {
    barangay_id: 6830,
    municipality_id: 269,
    barangay_name: "Villa Viniegas",
  },
  {
    barangay_id: 6832,
    municipality_id: 270,
    barangay_name: "Agupalo Este",
  },
  {
    barangay_id: 6833,
    municipality_id: 270,
    barangay_name: "Agupalo Weste",
  },
  {
    barangay_id: 6834,
    municipality_id: 270,
    barangay_name: "Alalay Chica",
  },
  {
    barangay_id: 6835,
    municipality_id: 270,
    barangay_name: "Alalay Grande",
  },
  {
    barangay_id: 6837,
    municipality_id: 270,
    barangay_name: "Bagong Flores",
  },
  {
    barangay_id: 6838,
    municipality_id: 270,
    barangay_name: "Balbalungao",
  },
  {
    barangay_id: 6839,
    municipality_id: 270,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 6840,
    municipality_id: 270,
    barangay_name: "Cordero",
  },
  {
    barangay_id: 6836,
    municipality_id: 270,
    barangay_name: "J. U. Tienzo",
  },
  {
    barangay_id: 6841,
    municipality_id: 270,
    barangay_name: "Mapangpang",
  },
  {
    barangay_id: 6842,
    municipality_id: 270,
    barangay_name: "Namulandayan",
  },
  {
    barangay_id: 6843,
    municipality_id: 270,
    barangay_name: "Parista",
  },
  {
    barangay_id: 6844,
    municipality_id: 270,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 6845,
    municipality_id: 270,
    barangay_name: "Poblacion North",
  },
  {
    barangay_id: 6846,
    municipality_id: 270,
    barangay_name: "Poblacion South",
  },
  {
    barangay_id: 6847,
    municipality_id: 270,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 6848,
    municipality_id: 270,
    barangay_name: "Salvacion I",
  },
  {
    barangay_id: 6849,
    municipality_id: 270,
    barangay_name: "Salvacion II",
  },
  {
    barangay_id: 6850,
    municipality_id: 270,
    barangay_name: "San Antonio Este",
  },
  {
    barangay_id: 6851,
    municipality_id: 270,
    barangay_name: "San Antonio Weste",
  },
  {
    barangay_id: 6852,
    municipality_id: 270,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 6853,
    municipality_id: 270,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 6854,
    municipality_id: 270,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 6855,
    municipality_id: 270,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 6856,
    municipality_id: 271,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 6857,
    municipality_id: 271,
    barangay_name: "Balante",
  },
  {
    barangay_id: 6858,
    municipality_id: 271,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 6859,
    municipality_id: 271,
    barangay_name: "Bical",
  },
  {
    barangay_id: 6860,
    municipality_id: 271,
    barangay_name: "Cabisuculan",
  },
  {
    barangay_id: 6861,
    municipality_id: 271,
    barangay_name: "Calabalabaan",
  },
  {
    barangay_id: 6862,
    municipality_id: 271,
    barangay_name: "Calisitan",
  },
  {
    barangay_id: 6863,
    municipality_id: 271,
    barangay_name: "Catalanacan",
  },
  {
    barangay_id: 6864,
    municipality_id: 271,
    barangay_name: "Curva",
  },
  {
    barangay_id: 6865,
    municipality_id: 271,
    barangay_name: "Franza",
  },
  {
    barangay_id: 6866,
    municipality_id: 271,
    barangay_name: "Gabaldon",
  },
  {
    barangay_id: 6867,
    municipality_id: 271,
    barangay_name: "Labney",
  },
  {
    barangay_id: 6868,
    municipality_id: 271,
    barangay_name: "Licaong",
  },
  {
    barangay_id: 6869,
    municipality_id: 271,
    barangay_name: "Linglingay",
  },
  {
    barangay_id: 6871,
    municipality_id: 271,
    barangay_name: "Magtanggol",
  },
  {
    barangay_id: 6872,
    municipality_id: 271,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 6870,
    municipality_id: 271,
    barangay_name: "Mangandingay",
  },
  {
    barangay_id: 6873,
    municipality_id: 271,
    barangay_name: "Mapangpang",
  },
  {
    barangay_id: 6874,
    municipality_id: 271,
    barangay_name: "Maragol",
  },
  {
    barangay_id: 6875,
    municipality_id: 271,
    barangay_name: "Matingkis",
  },
  {
    barangay_id: 6876,
    municipality_id: 271,
    barangay_name: "Naglabrahan",
  },
  {
    barangay_id: 6877,
    municipality_id: 271,
    barangay_name: "Palusapis",
  },
  {
    barangay_id: 6878,
    municipality_id: 271,
    barangay_name: "Pandalla",
  },
  {
    barangay_id: 6879,
    municipality_id: 271,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 6880,
    municipality_id: 271,
    barangay_name: "Poblacion North",
  },
  {
    barangay_id: 6881,
    municipality_id: 271,
    barangay_name: "Poblacion South",
  },
  {
    barangay_id: 6882,
    municipality_id: 271,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 6883,
    municipality_id: 271,
    barangay_name: "Rang-ayan",
  },
  {
    barangay_id: 6884,
    municipality_id: 271,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 6885,
    municipality_id: 271,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 6886,
    municipality_id: 271,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 6887,
    municipality_id: 271,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 6888,
    municipality_id: 271,
    barangay_name: "Sapang Cawayan",
  },
  {
    barangay_id: 6892,
    municipality_id: 271,
    barangay_name: "Villa Cuizon",
  },
  {
    barangay_id: 6889,
    municipality_id: 271,
    barangay_name: "Villa Isla",
  },
  {
    barangay_id: 6890,
    municipality_id: 271,
    barangay_name: "Villa Nati",
  },
  {
    barangay_id: 6891,
    municipality_id: 271,
    barangay_name: "Villa Santos",
  },
  {
    barangay_id: 6893,
    municipality_id: 272,
    barangay_name: "Alemania",
  },
  {
    barangay_id: 6894,
    municipality_id: 272,
    barangay_name: "Ambasador Alzate Village",
  },
  {
    barangay_id: 6895,
    municipality_id: 272,
    barangay_name: "Cabaducan East (Pob.)",
  },
  {
    barangay_id: 6896,
    municipality_id: 272,
    barangay_name: "Cabaducan West (Pob.)",
  },
  {
    barangay_id: 6897,
    municipality_id: 272,
    barangay_name: "Cabawangan",
  },
  {
    barangay_id: 6898,
    municipality_id: 272,
    barangay_name: "East Central Poblacion",
  },
  {
    barangay_id: 6899,
    municipality_id: 272,
    barangay_name: "Edy",
  },
  {
    barangay_id: 6906,
    municipality_id: 272,
    barangay_name: "Estacion (Pob.)",
  },
  {
    barangay_id: 6900,
    municipality_id: 272,
    barangay_name: "Maeling",
  },
  {
    barangay_id: 6901,
    municipality_id: 272,
    barangay_name: "Mayantoc",
  },
  {
    barangay_id: 6902,
    municipality_id: 272,
    barangay_name: "Medico",
  },
  {
    barangay_id: 6903,
    municipality_id: 272,
    barangay_name: "Monic",
  },
  {
    barangay_id: 6904,
    municipality_id: 272,
    barangay_name: "North Poblacion",
  },
  {
    barangay_id: 6905,
    municipality_id: 272,
    barangay_name: "Northwest Poblacion",
  },
  {
    barangay_id: 6908,
    municipality_id: 272,
    barangay_name: "Recuerdo",
  },
  {
    barangay_id: 6909,
    municipality_id: 272,
    barangay_name: "South Central Poblacion",
  },
  {
    barangay_id: 6910,
    municipality_id: 272,
    barangay_name: "Southeast Poblacion",
  },
  {
    barangay_id: 6911,
    municipality_id: 272,
    barangay_name: "Southwest Poblacion",
  },
  {
    barangay_id: 6912,
    municipality_id: 272,
    barangay_name: "Tony",
  },
  {
    barangay_id: 6913,
    municipality_id: 272,
    barangay_name: "West Central Poblacion",
  },
  {
    barangay_id: 6907,
    municipality_id: 272,
    barangay_name: "West Poblacion",
  },
  {
    barangay_id: 6924,
    municipality_id: 273,
    barangay_name: "Atate",
  },
  {
    barangay_id: 6914,
    municipality_id: 273,
    barangay_name: "Aulo",
  },
  {
    barangay_id: 6932,
    municipality_id: 273,
    barangay_name: "Bagong Buhay",
  },
  {
    barangay_id: 6915,
    municipality_id: 273,
    barangay_name: "Bo. Militar",
  },
  {
    barangay_id: 6925,
    municipality_id: 273,
    barangay_name: "Caballero",
  },
  {
    barangay_id: 6926,
    municipality_id: 273,
    barangay_name: "Caimito",
  },
  {
    barangay_id: 6927,
    municipality_id: 273,
    barangay_name: "Doña Josefa",
  },
  {
    barangay_id: 6916,
    municipality_id: 273,
    barangay_name: "Ganaderia",
  },
  {
    barangay_id: 6928,
    municipality_id: 273,
    barangay_name: "Imelda Valley",
  },
  {
    barangay_id: 6929,
    municipality_id: 273,
    barangay_name: "Langka",
  },
  {
    barangay_id: 6921,
    municipality_id: 273,
    barangay_name: "Malate (Pob.)",
  },
  {
    barangay_id: 6917,
    municipality_id: 273,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 6918,
    municipality_id: 273,
    barangay_name: "Manacnac",
  },
  {
    barangay_id: 6919,
    municipality_id: 273,
    barangay_name: "Mapait",
  },
  {
    barangay_id: 6920,
    municipality_id: 273,
    barangay_name: "Marcos Village",
  },
  {
    barangay_id: 6931,
    municipality_id: 273,
    barangay_name: "Popolon Pagas",
  },
  {
    barangay_id: 6930,
    municipality_id: 273,
    barangay_name: "Santolan",
  },
  {
    barangay_id: 6922,
    municipality_id: 273,
    barangay_name: "Sapang Buho",
  },
  {
    barangay_id: 6923,
    municipality_id: 273,
    barangay_name: "Singalat",
  },
  {
    barangay_id: 6933,
    municipality_id: 274,
    barangay_name: "Cadaclan",
  },
  {
    barangay_id: 6934,
    municipality_id: 274,
    barangay_name: "Cambitala",
  },
  {
    barangay_id: 6935,
    municipality_id: 274,
    barangay_name: "Conversion",
  },
  {
    barangay_id: 6946,
    municipality_id: 274,
    barangay_name: "Fatima",
  },
  {
    barangay_id: 6936,
    municipality_id: 274,
    barangay_name: "Ganduz",
  },
  {
    barangay_id: 6937,
    municipality_id: 274,
    barangay_name: "Liberty",
  },
  {
    barangay_id: 6938,
    municipality_id: 274,
    barangay_name: "Malbang",
  },
  {
    barangay_id: 6939,
    municipality_id: 274,
    barangay_name: "Marikit",
  },
  {
    barangay_id: 6940,
    municipality_id: 274,
    barangay_name: "Napon-Napon",
  },
  {
    barangay_id: 6941,
    municipality_id: 274,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 6942,
    municipality_id: 274,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 6943,
    municipality_id: 274,
    barangay_name: "Sampaloc",
  },
  {
    barangay_id: 6944,
    municipality_id: 274,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 6945,
    municipality_id: 274,
    barangay_name: "Villarica",
  },
  {
    barangay_id: 6947,
    municipality_id: 275,
    barangay_name: "Callos",
  },
  {
    barangay_id: 6948,
    municipality_id: 275,
    barangay_name: "Las Piñas",
  },
  {
    barangay_id: 6949,
    municipality_id: 275,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 6950,
    municipality_id: 275,
    barangay_name: "Poblacion II",
  },
  {
    barangay_id: 6951,
    municipality_id: 275,
    barangay_name: "Poblacion III",
  },
  {
    barangay_id: 6952,
    municipality_id: 275,
    barangay_name: "Poblacion IV",
  },
  {
    barangay_id: 6955,
    municipality_id: 275,
    barangay_name: "San Josef",
  },
  {
    barangay_id: 6956,
    municipality_id: 275,
    barangay_name: "San Mariano",
  },
  {
    barangay_id: 6953,
    municipality_id: 275,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 6954,
    municipality_id: 275,
    barangay_name: "Sinasajan",
  },
  {
    barangay_id: 6961,
    municipality_id: 276,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 6962,
    municipality_id: 276,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 6957,
    municipality_id: 276,
    barangay_name: "Bertese",
  },
  {
    barangay_id: 6958,
    municipality_id: 276,
    barangay_name: "Doña Lucia",
  },
  {
    barangay_id: 6959,
    municipality_id: 276,
    barangay_name: "Dulong Bayan",
  },
  {
    barangay_id: 6960,
    municipality_id: 276,
    barangay_name: "Ilog Baliwag",
  },
  {
    barangay_id: 6963,
    municipality_id: 276,
    barangay_name: "Pulong Bahay",
  },
  {
    barangay_id: 6964,
    municipality_id: 276,
    barangay_name: "San Alejandro",
  },
  {
    barangay_id: 6965,
    municipality_id: 276,
    barangay_name: "San Andres I",
  },
  {
    barangay_id: 6966,
    municipality_id: 276,
    barangay_name: "San Andres II",
  },
  {
    barangay_id: 6967,
    municipality_id: 276,
    barangay_name: "San Manuel",
  },
  {
    barangay_id: 6972,
    municipality_id: 276,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 6968,
    municipality_id: 276,
    barangay_name: "Santa Clara",
  },
  {
    barangay_id: 6969,
    municipality_id: 276,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 6970,
    municipality_id: 276,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 6971,
    municipality_id: 276,
    barangay_name: "Santo Tomas Feria",
  },
  {
    barangay_id: 6973,
    municipality_id: 277,
    barangay_name: "Agbannawag",
  },
  {
    barangay_id: 6980,
    municipality_id: 277,
    barangay_name: "Aglipay",
  },
  {
    barangay_id: 6974,
    municipality_id: 277,
    barangay_name: "Bicos",
  },
  {
    barangay_id: 6975,
    municipality_id: 277,
    barangay_name: "Cabucbucan",
  },
  {
    barangay_id: 6976,
    municipality_id: 277,
    barangay_name: "Calaocan District",
  },
  {
    barangay_id: 6977,
    municipality_id: 277,
    barangay_name: "Canaan East",
  },
  {
    barangay_id: 6978,
    municipality_id: 277,
    barangay_name: "Canaan West",
  },
  {
    barangay_id: 6979,
    municipality_id: 277,
    barangay_name: "Casilagan",
  },
  {
    barangay_id: 6981,
    municipality_id: 277,
    barangay_name: "Del Pilar",
  },
  {
    barangay_id: 6982,
    municipality_id: 277,
    barangay_name: "Estrella",
  },
  {
    barangay_id: 6983,
    municipality_id: 277,
    barangay_name: "General Luna",
  },
  {
    barangay_id: 6984,
    municipality_id: 277,
    barangay_name: "Macapsing",
  },
  {
    barangay_id: 6985,
    municipality_id: 277,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 6986,
    municipality_id: 277,
    barangay_name: "Paco Roman",
  },
  {
    barangay_id: 6987,
    municipality_id: 277,
    barangay_name: "Pag-asa",
  },
  {
    barangay_id: 6988,
    municipality_id: 277,
    barangay_name: "Poblacion Central",
  },
  {
    barangay_id: 6989,
    municipality_id: 277,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 6990,
    municipality_id: 277,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 6991,
    municipality_id: 277,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 6992,
    municipality_id: 277,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 6993,
    municipality_id: 277,
    barangay_name: "Portal",
  },
  {
    barangay_id: 6994,
    municipality_id: 277,
    barangay_name: "San Esteban",
  },
  {
    barangay_id: 6998,
    municipality_id: 277,
    barangay_name: "San Gregorio",
  },
  {
    barangay_id: 6995,
    municipality_id: 277,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 6996,
    municipality_id: 277,
    barangay_name: "Villa Labrador",
  },
  {
    barangay_id: 6997,
    municipality_id: 277,
    barangay_name: "Villa Paraiso",
  },
  {
    barangay_id: 6999,
    municipality_id: 278,
    barangay_name: "Buliran",
  },
  {
    barangay_id: 7000,
    municipality_id: 278,
    barangay_name: "Cama Juan",
  },
  {
    barangay_id: 7001,
    municipality_id: 278,
    barangay_name: "Julo",
  },
  {
    barangay_id: 7002,
    municipality_id: 278,
    barangay_name: "Lawang Kupang",
  },
  {
    barangay_id: 7003,
    municipality_id: 278,
    barangay_name: "Luyos",
  },
  {
    barangay_id: 7004,
    municipality_id: 278,
    barangay_name: "Maugat",
  },
  {
    barangay_id: 7005,
    municipality_id: 278,
    barangay_name: "Panabingan",
  },
  {
    barangay_id: 7006,
    municipality_id: 278,
    barangay_name: "Papaya",
  },
  {
    barangay_id: 7007,
    municipality_id: 278,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 7008,
    municipality_id: 278,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 7009,
    municipality_id: 278,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7010,
    municipality_id: 278,
    barangay_name: "San Mariano",
  },
  {
    barangay_id: 7013,
    municipality_id: 278,
    barangay_name: "Santa Barbara",
  },
  {
    barangay_id: 7011,
    municipality_id: 278,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 7012,
    municipality_id: 278,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 7014,
    municipality_id: 278,
    barangay_name: "Tikiw",
  },
  {
    barangay_id: 7015,
    municipality_id: 279,
    barangay_name: "Alua",
  },
  {
    barangay_id: 7016,
    municipality_id: 279,
    barangay_name: "Calaba",
  },
  {
    barangay_id: 7017,
    municipality_id: 279,
    barangay_name: "Malapit",
  },
  {
    barangay_id: 7018,
    municipality_id: 279,
    barangay_name: "Mangga",
  },
  {
    barangay_id: 7019,
    municipality_id: 279,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 7020,
    municipality_id: 279,
    barangay_name: "Pulo",
  },
  {
    barangay_id: 7021,
    municipality_id: 279,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7022,
    municipality_id: 279,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 7023,
    municipality_id: 279,
    barangay_name: "Tabon",
  },
  {
    barangay_id: 7024,
    municipality_id: 280,
    barangay_name: "A. Pascual",
  },
  {
    barangay_id: 7026,
    municipality_id: 280,
    barangay_name: "Abar 2nd",
  },
  {
    barangay_id: 7025,
    municipality_id: 280,
    barangay_name: "Abar Ist",
  },
  {
    barangay_id: 7027,
    municipality_id: 280,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 7028,
    municipality_id: 280,
    barangay_name: "Caanawan",
  },
  {
    barangay_id: 7029,
    municipality_id: 280,
    barangay_name: "Calaocan",
  },
  {
    barangay_id: 7030,
    municipality_id: 280,
    barangay_name: "Camanacsacan",
  },
  {
    barangay_id: 7043,
    municipality_id: 280,
    barangay_name: "Canuto Ramos Pob.",
  },
  {
    barangay_id: 7045,
    municipality_id: 280,
    barangay_name: "Crisanto Sanchez Pob.",
  },
  {
    barangay_id: 7031,
    municipality_id: 280,
    barangay_name: "Culaylay",
  },
  {
    barangay_id: 7032,
    municipality_id: 280,
    barangay_name: "Dizol",
  },
  {
    barangay_id: 7042,
    municipality_id: 280,
    barangay_name: "Ferdinand E. Marcos Pob.",
  },
  {
    barangay_id: 7033,
    municipality_id: 280,
    barangay_name: "Kaliwanagan",
  },
  {
    barangay_id: 7034,
    municipality_id: 280,
    barangay_name: "Kita-Kita",
  },
  {
    barangay_id: 7035,
    municipality_id: 280,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 7036,
    municipality_id: 280,
    barangay_name: "Manicla",
  },
  {
    barangay_id: 7037,
    municipality_id: 280,
    barangay_name: "Palestina",
  },
  {
    barangay_id: 7038,
    municipality_id: 280,
    barangay_name: "Parang Mangga",
  },
  {
    barangay_id: 7040,
    municipality_id: 280,
    barangay_name: "Pinili",
  },
  {
    barangay_id: 7046,
    municipality_id: 280,
    barangay_name: "Porais",
  },
  {
    barangay_id: 7041,
    municipality_id: 280,
    barangay_name: "Rafael Rueda, Sr. Pob.",
  },
  {
    barangay_id: 7044,
    municipality_id: 280,
    barangay_name: "Raymundo Eugenio Pob.",
  },
  {
    barangay_id: 7047,
    municipality_id: 280,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7048,
    municipality_id: 280,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 7049,
    municipality_id: 280,
    barangay_name: "San Mauricio",
  },
  {
    barangay_id: 7050,
    municipality_id: 280,
    barangay_name: "Santo Niño 1st",
  },
  {
    barangay_id: 7051,
    municipality_id: 280,
    barangay_name: "Santo Niño 2nd",
  },
  {
    barangay_id: 7055,
    municipality_id: 280,
    barangay_name: "Santo Niño 3rd",
  },
  {
    barangay_id: 7052,
    municipality_id: 280,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 7053,
    municipality_id: 280,
    barangay_name: "Sibut",
  },
  {
    barangay_id: 7054,
    municipality_id: 280,
    barangay_name: "Sinipit Bubon",
  },
  {
    barangay_id: 7056,
    municipality_id: 280,
    barangay_name: "Tabulac",
  },
  {
    barangay_id: 7057,
    municipality_id: 280,
    barangay_name: "Tayabo",
  },
  {
    barangay_id: 7058,
    municipality_id: 280,
    barangay_name: "Tondod",
  },
  {
    barangay_id: 7059,
    municipality_id: 280,
    barangay_name: "Tulat",
  },
  {
    barangay_id: 7060,
    municipality_id: 280,
    barangay_name: "Villa Floresca",
  },
  {
    barangay_id: 7039,
    municipality_id: 280,
    barangay_name: "Villa Joson",
  },
  {
    barangay_id: 7061,
    municipality_id: 280,
    barangay_name: "Villa Marina",
  },
  {
    barangay_id: 7062,
    municipality_id: 281,
    barangay_name: "Bonifacio District (Pob.)",
  },
  {
    barangay_id: 7063,
    municipality_id: 281,
    barangay_name: "Burgos District (Pob.)",
  },
  {
    barangay_id: 7064,
    municipality_id: 281,
    barangay_name: "Castellano",
  },
  {
    barangay_id: 7065,
    municipality_id: 281,
    barangay_name: "Diversion",
  },
  {
    barangay_id: 7066,
    municipality_id: 281,
    barangay_name: "Magpapalayoc",
  },
  {
    barangay_id: 7067,
    municipality_id: 281,
    barangay_name: "Mallorca",
  },
  {
    barangay_id: 7068,
    municipality_id: 281,
    barangay_name: "Mambangnan",
  },
  {
    barangay_id: 7069,
    municipality_id: 281,
    barangay_name: "Nieves",
  },
  {
    barangay_id: 7071,
    municipality_id: 281,
    barangay_name: "Rizal District (Pob.)",
  },
  {
    barangay_id: 7072,
    municipality_id: 281,
    barangay_name: "San Anton",
  },
  {
    barangay_id: 7070,
    municipality_id: 281,
    barangay_name: "San Bartolome (Pob.)",
  },
  {
    barangay_id: 7073,
    municipality_id: 281,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7074,
    municipality_id: 281,
    barangay_name: "Tabuating",
  },
  {
    barangay_id: 7075,
    municipality_id: 281,
    barangay_name: "Tagumpay",
  },
  {
    barangay_id: 7076,
    municipality_id: 281,
    barangay_name: "Tambo Adorable",
  },
  {
    barangay_id: 7094,
    municipality_id: 282,
    barangay_name: "Aguinaldo",
  },
  {
    barangay_id: 7095,
    municipality_id: 282,
    barangay_name: "Berang",
  },
  {
    barangay_id: 7096,
    municipality_id: 282,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 7077,
    municipality_id: 282,
    barangay_name: "Cojuangco (Pob.)",
  },
  {
    barangay_id: 7097,
    municipality_id: 282,
    barangay_name: "Del Pilar",
  },
  {
    barangay_id: 7098,
    municipality_id: 282,
    barangay_name: "Gomez",
  },
  {
    barangay_id: 7099,
    municipality_id: 282,
    barangay_name: "Inspector",
  },
  {
    barangay_id: 7100,
    municipality_id: 282,
    barangay_name: "Isla",
  },
  {
    barangay_id: 7078,
    municipality_id: 282,
    barangay_name: "La Fuente",
  },
  {
    barangay_id: 7079,
    municipality_id: 282,
    barangay_name: "Liwayway",
  },
  {
    barangay_id: 7101,
    municipality_id: 282,
    barangay_name: "Lourdes",
  },
  {
    barangay_id: 7102,
    municipality_id: 282,
    barangay_name: "Luna",
  },
  {
    barangay_id: 7103,
    municipality_id: 282,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 7080,
    municipality_id: 282,
    barangay_name: "Malacañang",
  },
  {
    barangay_id: 7081,
    municipality_id: 282,
    barangay_name: "Maliolio",
  },
  {
    barangay_id: 7082,
    municipality_id: 282,
    barangay_name: "Mapalad",
  },
  {
    barangay_id: 7084,
    municipality_id: 282,
    barangay_name: "Rajal Centro",
  },
  {
    barangay_id: 7085,
    municipality_id: 282,
    barangay_name: "Rajal Norte",
  },
  {
    barangay_id: 7086,
    municipality_id: 282,
    barangay_name: "Rajal Sur",
  },
  {
    barangay_id: 7083,
    municipality_id: 282,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 7087,
    municipality_id: 282,
    barangay_name: "San Gregorio",
  },
  {
    barangay_id: 7104,
    municipality_id: 282,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7105,
    municipality_id: 282,
    barangay_name: "San Josep",
  },
  {
    barangay_id: 7088,
    municipality_id: 282,
    barangay_name: "San Mariano",
  },
  {
    barangay_id: 7089,
    municipality_id: 282,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 7106,
    municipality_id: 282,
    barangay_name: "Santa Teresita",
  },
  {
    barangay_id: 7090,
    municipality_id: 282,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7107,
    municipality_id: 282,
    barangay_name: "Sapsap",
  },
  {
    barangay_id: 7091,
    municipality_id: 282,
    barangay_name: "Soledad",
  },
  {
    barangay_id: 7108,
    municipality_id: 282,
    barangay_name: "Tagpos",
  },
  {
    barangay_id: 7109,
    municipality_id: 282,
    barangay_name: "Tramo",
  },
  {
    barangay_id: 7092,
    municipality_id: 282,
    barangay_name: "Valenzuela (Pob.)",
  },
  {
    barangay_id: 7093,
    municipality_id: 282,
    barangay_name: "Zamora (Pob.)",
  },
  {
    barangay_id: 7110,
    municipality_id: 283,
    barangay_name: "Baloc",
  },
  {
    barangay_id: 7111,
    municipality_id: 283,
    barangay_name: "Buasao",
  },
  {
    barangay_id: 7112,
    municipality_id: 283,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 7113,
    municipality_id: 283,
    barangay_name: "Cabugao",
  },
  {
    barangay_id: 7114,
    municipality_id: 283,
    barangay_name: "Casulucan",
  },
  {
    barangay_id: 7115,
    municipality_id: 283,
    barangay_name: "Comitang",
  },
  {
    barangay_id: 7116,
    municipality_id: 283,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 7117,
    municipality_id: 283,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 7118,
    municipality_id: 283,
    barangay_name: "General Luna",
  },
  {
    barangay_id: 7119,
    municipality_id: 283,
    barangay_name: "Hulo",
  },
  {
    barangay_id: 7120,
    municipality_id: 283,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 7121,
    municipality_id: 283,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 7125,
    municipality_id: 283,
    barangay_name: "Malaya",
  },
  {
    barangay_id: 7122,
    municipality_id: 283,
    barangay_name: "Malayantoc",
  },
  {
    barangay_id: 7123,
    municipality_id: 283,
    barangay_name: "Mambarao",
  },
  {
    barangay_id: 7124,
    municipality_id: 283,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 7126,
    municipality_id: 283,
    barangay_name: "Pulong Buli",
  },
  {
    barangay_id: 7127,
    municipality_id: 283,
    barangay_name: "Sagaba",
  },
  {
    barangay_id: 7128,
    municipality_id: 283,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7129,
    municipality_id: 283,
    barangay_name: "San Fabian",
  },
  {
    barangay_id: 7130,
    municipality_id: 283,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 7131,
    municipality_id: 283,
    barangay_name: "San Pascual",
  },
  {
    barangay_id: 7132,
    municipality_id: 283,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 7133,
    municipality_id: 283,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7134,
    municipality_id: 284,
    barangay_name: "Andal Alino (Pob.)",
  },
  {
    barangay_id: 7135,
    municipality_id: 284,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 7136,
    municipality_id: 284,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 7137,
    municipality_id: 284,
    barangay_name: "Bakal I",
  },
  {
    barangay_id: 7138,
    municipality_id: 284,
    barangay_name: "Bakal II",
  },
  {
    barangay_id: 7139,
    municipality_id: 284,
    barangay_name: "Bakal III",
  },
  {
    barangay_id: 7140,
    municipality_id: 284,
    barangay_name: "Baluga",
  },
  {
    barangay_id: 7141,
    municipality_id: 284,
    barangay_name: "Bantug",
  },
  {
    barangay_id: 7142,
    municipality_id: 284,
    barangay_name: "Bantug Hacienda",
  },
  {
    barangay_id: 7143,
    municipality_id: 284,
    barangay_name: "Bantug Hamog",
  },
  {
    barangay_id: 7144,
    municipality_id: 284,
    barangay_name: "Bugtong na Buli",
  },
  {
    barangay_id: 7145,
    municipality_id: 284,
    barangay_name: "Bulac",
  },
  {
    barangay_id: 7146,
    municipality_id: 284,
    barangay_name: "Burnay",
  },
  {
    barangay_id: 7159,
    municipality_id: 284,
    barangay_name: "Caaniplahan",
  },
  {
    barangay_id: 7158,
    municipality_id: 284,
    barangay_name: "Cabubulaonan",
  },
  {
    barangay_id: 7147,
    municipality_id: 284,
    barangay_name: "Calipahan",
  },
  {
    barangay_id: 7148,
    municipality_id: 284,
    barangay_name: "Campos",
  },
  {
    barangay_id: 7160,
    municipality_id: 284,
    barangay_name: "Caputican",
  },
  {
    barangay_id: 7149,
    municipality_id: 284,
    barangay_name: "Casulucan Este",
  },
  {
    barangay_id: 7150,
    municipality_id: 284,
    barangay_name: "Collado",
  },
  {
    barangay_id: 7151,
    municipality_id: 284,
    barangay_name: "Dimasalang Norte",
  },
  {
    barangay_id: 7152,
    municipality_id: 284,
    barangay_name: "Dimasalang Sur",
  },
  {
    barangay_id: 7153,
    municipality_id: 284,
    barangay_name: "Dinarayat",
  },
  {
    barangay_id: 7154,
    municipality_id: 284,
    barangay_name: "Esguerra District (Pob.)",
  },
  {
    barangay_id: 7155,
    municipality_id: 284,
    barangay_name: "Gulod",
  },
  {
    barangay_id: 7156,
    municipality_id: 284,
    barangay_name: "Homestead I",
  },
  {
    barangay_id: 7157,
    municipality_id: 284,
    barangay_name: "Homestead II",
  },
  {
    barangay_id: 7161,
    municipality_id: 284,
    barangay_name: "Kinalanguyan",
  },
  {
    barangay_id: 7162,
    municipality_id: 284,
    barangay_name: "La Torre",
  },
  {
    barangay_id: 7163,
    municipality_id: 284,
    barangay_name: "Lomboy",
  },
  {
    barangay_id: 7164,
    municipality_id: 284,
    barangay_name: "Mabuhay",
  },
  {
    barangay_id: 7165,
    municipality_id: 284,
    barangay_name: "Maestrang Kikay (Pob.)",
  },
  {
    barangay_id: 7166,
    municipality_id: 284,
    barangay_name: "Mamandil",
  },
  {
    barangay_id: 7167,
    municipality_id: 284,
    barangay_name: "Marcos District (Pob.)",
  },
  {
    barangay_id: 7169,
    municipality_id: 284,
    barangay_name: "Matingkis",
  },
  {
    barangay_id: 7170,
    municipality_id: 284,
    barangay_name: "Minabuyoc",
  },
  {
    barangay_id: 7171,
    municipality_id: 284,
    barangay_name: "Pag-asa (Pob.)",
  },
  {
    barangay_id: 7172,
    municipality_id: 284,
    barangay_name: "Paludpod",
  },
  {
    barangay_id: 7173,
    municipality_id: 284,
    barangay_name: "Pantoc Bulac",
  },
  {
    barangay_id: 7174,
    municipality_id: 284,
    barangay_name: "Pinagpanaan",
  },
  {
    barangay_id: 7175,
    municipality_id: 284,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 7176,
    municipality_id: 284,
    barangay_name: "Pula",
  },
  {
    barangay_id: 7177,
    municipality_id: 284,
    barangay_name: "Pulong San Miguel (Pob.)",
  },
  {
    barangay_id: 7168,
    municipality_id: 284,
    barangay_name: "Purok Matias (Pob.)",
  },
  {
    barangay_id: 7178,
    municipality_id: 284,
    barangay_name: "Sampaloc",
  },
  {
    barangay_id: 7179,
    municipality_id: 284,
    barangay_name: "San Miguel na Munti",
  },
  {
    barangay_id: 7180,
    municipality_id: 284,
    barangay_name: "San Pascual",
  },
  {
    barangay_id: 7181,
    municipality_id: 284,
    barangay_name: "San Ricardo",
  },
  {
    barangay_id: 7182,
    municipality_id: 284,
    barangay_name: "Sibul",
  },
  {
    barangay_id: 7183,
    municipality_id: 284,
    barangay_name: "Sicsican Matanda",
  },
  {
    barangay_id: 7184,
    municipality_id: 284,
    barangay_name: "Tabacao",
  },
  {
    barangay_id: 7185,
    municipality_id: 284,
    barangay_name: "Tagaytay",
  },
  {
    barangay_id: 7186,
    municipality_id: 284,
    barangay_name: "Valle",
  },
  {
    barangay_id: 7187,
    municipality_id: 285,
    barangay_name: "Alula",
  },
  {
    barangay_id: 7188,
    municipality_id: 285,
    barangay_name: "Baybayabas",
  },
  {
    barangay_id: 7189,
    municipality_id: 285,
    barangay_name: "Buted",
  },
  {
    barangay_id: 7190,
    municipality_id: 285,
    barangay_name: "Cabiangan",
  },
  {
    barangay_id: 7191,
    municipality_id: 285,
    barangay_name: "Calisitan",
  },
  {
    barangay_id: 7192,
    municipality_id: 285,
    barangay_name: "Cinense",
  },
  {
    barangay_id: 7193,
    municipality_id: 285,
    barangay_name: "Culiat",
  },
  {
    barangay_id: 7194,
    municipality_id: 285,
    barangay_name: "Maasin",
  },
  {
    barangay_id: 7195,
    municipality_id: 285,
    barangay_name: "Magsaysay (Pob.)",
  },
  {
    barangay_id: 7196,
    municipality_id: 285,
    barangay_name: "Mayamot I",
  },
  {
    barangay_id: 7197,
    municipality_id: 285,
    barangay_name: "Mayamot II",
  },
  {
    barangay_id: 7198,
    municipality_id: 285,
    barangay_name: "Nangabulan",
  },
  {
    barangay_id: 7199,
    municipality_id: 285,
    barangay_name: "Osmeña (Pob.)",
  },
  {
    barangay_id: 7200,
    municipality_id: 285,
    barangay_name: "Pangit",
  },
  {
    barangay_id: 7201,
    municipality_id: 285,
    barangay_name: "Patola",
  },
  {
    barangay_id: 7202,
    municipality_id: 285,
    barangay_name: "Quezon (Pob.)",
  },
  {
    barangay_id: 7203,
    municipality_id: 285,
    barangay_name: "Quirino (Pob.)",
  },
  {
    barangay_id: 7204,
    municipality_id: 285,
    barangay_name: "Roxas (Pob.)",
  },
  {
    barangay_id: 7205,
    municipality_id: 285,
    barangay_name: "Saguing",
  },
  {
    barangay_id: 7206,
    municipality_id: 285,
    barangay_name: "Sampaloc",
  },
  {
    barangay_id: 7207,
    municipality_id: 285,
    barangay_name: "Santa Catalina",
  },
  {
    barangay_id: 7208,
    municipality_id: 285,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 7209,
    municipality_id: 285,
    barangay_name: "Saringaya",
  },
  {
    barangay_id: 7210,
    municipality_id: 285,
    barangay_name: "Saverona",
  },
  {
    barangay_id: 7211,
    municipality_id: 285,
    barangay_name: "Tandoc",
  },
  {
    barangay_id: 7212,
    municipality_id: 285,
    barangay_name: "Tibag",
  },
  {
    barangay_id: 7214,
    municipality_id: 285,
    barangay_name: "Villa Boado",
  },
  {
    barangay_id: 7213,
    municipality_id: 285,
    barangay_name: "Villa Rosario",
  },
  {
    barangay_id: 7215,
    municipality_id: 286,
    barangay_name: "Batitang",
  },
  {
    barangay_id: 7216,
    municipality_id: 286,
    barangay_name: "Carmen",
  },
  {
    barangay_id: 7217,
    municipality_id: 286,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 7218,
    municipality_id: 286,
    barangay_name: "Del Pilar",
  },
  {
    barangay_id: 7219,
    municipality_id: 286,
    barangay_name: "General Luna",
  },
  {
    barangay_id: 7220,
    municipality_id: 286,
    barangay_name: "H. Romero",
  },
  {
    barangay_id: 7221,
    municipality_id: 286,
    barangay_name: "Macarse",
  },
  {
    barangay_id: 7222,
    municipality_id: 286,
    barangay_name: "Manaul",
  },
  {
    barangay_id: 7223,
    municipality_id: 286,
    barangay_name: "Mayamot",
  },
  {
    barangay_id: 7224,
    municipality_id: 286,
    barangay_name: "Pantoc",
  },
  {
    barangay_id: 7226,
    municipality_id: 286,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7227,
    municipality_id: 286,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 7225,
    municipality_id: 286,
    barangay_name: "San Vicente (Pob.)",
  },
  {
    barangay_id: 7228,
    municipality_id: 286,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 7229,
    municipality_id: 286,
    barangay_name: "Santa Lucia Old",
  },
  {
    barangay_id: 7230,
    municipality_id: 286,
    barangay_name: "Santa Lucia Young",
  },
  {
    barangay_id: 7231,
    municipality_id: 286,
    barangay_name: "Santo Rosario Old",
  },
  {
    barangay_id: 7232,
    municipality_id: 286,
    barangay_name: "Santo Rosario Young",
  },
  {
    barangay_id: 7233,
    municipality_id: 286,
    barangay_name: "Valeriana",
  },
  {
    barangay_id: 7234,
    municipality_id: 287,
    barangay_name: "Agapito del Rosario",
  },
  {
    barangay_id: 7265,
    municipality_id: 287,
    barangay_name: "Amsic",
  },
  {
    barangay_id: 7235,
    municipality_id: 287,
    barangay_name: "Anunas",
  },
  {
    barangay_id: 7236,
    municipality_id: 287,
    barangay_name: "Balibago",
  },
  {
    barangay_id: 7237,
    municipality_id: 287,
    barangay_name: "Capaya",
  },
  {
    barangay_id: 7238,
    municipality_id: 287,
    barangay_name: "Claro M. Recto",
  },
  {
    barangay_id: 7239,
    municipality_id: 287,
    barangay_name: "Cuayan",
  },
  {
    barangay_id: 7240,
    municipality_id: 287,
    barangay_name: "Cutcut",
  },
  {
    barangay_id: 7241,
    municipality_id: 287,
    barangay_name: "Cutud",
  },
  {
    barangay_id: 7242,
    municipality_id: 287,
    barangay_name: "Lourdes North West",
  },
  {
    barangay_id: 7243,
    municipality_id: 287,
    barangay_name: "Lourdes Sur",
  },
  {
    barangay_id: 7244,
    municipality_id: 287,
    barangay_name: "Lourdes Sur East",
  },
  {
    barangay_id: 7245,
    municipality_id: 287,
    barangay_name: "Malabanias",
  },
  {
    barangay_id: 7246,
    municipality_id: 287,
    barangay_name: "Margot",
  },
  {
    barangay_id: 7247,
    municipality_id: 287,
    barangay_name: "Mining",
  },
  {
    barangay_id: 7266,
    municipality_id: 287,
    barangay_name: "Ninoy Aquino",
  },
  {
    barangay_id: 7248,
    municipality_id: 287,
    barangay_name: "Pampang",
  },
  {
    barangay_id: 7249,
    municipality_id: 287,
    barangay_name: "Pandan",
  },
  {
    barangay_id: 7252,
    municipality_id: 287,
    barangay_name: "Pulung Cacutud",
  },
  {
    barangay_id: 7250,
    municipality_id: 287,
    barangay_name: "Pulung Maragul",
  },
  {
    barangay_id: 7251,
    municipality_id: 287,
    barangay_name: "Pulungbulu",
  },
  {
    barangay_id: 7253,
    municipality_id: 287,
    barangay_name: "Salapungan",
  },
  {
    barangay_id: 7254,
    municipality_id: 287,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7255,
    municipality_id: 287,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 7256,
    municipality_id: 287,
    barangay_name: "Santa Teresita",
  },
  {
    barangay_id: 7257,
    municipality_id: 287,
    barangay_name: "Santa Trinidad",
  },
  {
    barangay_id: 7258,
    municipality_id: 287,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 7259,
    municipality_id: 287,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 7260,
    municipality_id: 287,
    barangay_name: "Santo Rosario (Pob.)",
  },
  {
    barangay_id: 7261,
    municipality_id: 287,
    barangay_name: "Sapalibutad",
  },
  {
    barangay_id: 7262,
    municipality_id: 287,
    barangay_name: "Sapangbato",
  },
  {
    barangay_id: 7263,
    municipality_id: 287,
    barangay_name: "Tabun",
  },
  {
    barangay_id: 7264,
    municipality_id: 287,
    barangay_name: "Virgen Delos Remedios",
  },
  {
    barangay_id: 7267,
    municipality_id: 288,
    barangay_name: "Balucuc",
  },
  {
    barangay_id: 7268,
    municipality_id: 288,
    barangay_name: "Calantipe",
  },
  {
    barangay_id: 7269,
    municipality_id: 288,
    barangay_name: "Cansinala",
  },
  {
    barangay_id: 7270,
    municipality_id: 288,
    barangay_name: "Capalangan",
  },
  {
    barangay_id: 7271,
    municipality_id: 288,
    barangay_name: "Colgante",
  },
  {
    barangay_id: 7272,
    municipality_id: 288,
    barangay_name: "Paligui",
  },
  {
    barangay_id: 7273,
    municipality_id: 288,
    barangay_name: "Sampaloc",
  },
  {
    barangay_id: 7274,
    municipality_id: 288,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 7275,
    municipality_id: 288,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7276,
    municipality_id: 288,
    barangay_name: "Sucad",
  },
  {
    barangay_id: 7277,
    municipality_id: 288,
    barangay_name: "Sulipan",
  },
  {
    barangay_id: 7278,
    municipality_id: 288,
    barangay_name: "Tabuyuc",
  },
  {
    barangay_id: 7279,
    municipality_id: 289,
    barangay_name: "Arenas",
  },
  {
    barangay_id: 7280,
    municipality_id: 289,
    barangay_name: "Baliti",
  },
  {
    barangay_id: 7281,
    municipality_id: 289,
    barangay_name: "Batasan",
  },
  {
    barangay_id: 7282,
    municipality_id: 289,
    barangay_name: "Buensuceso",
  },
  {
    barangay_id: 7283,
    municipality_id: 289,
    barangay_name: "Candating",
  },
  {
    barangay_id: 7303,
    municipality_id: 289,
    barangay_name: "Cupang",
  },
  {
    barangay_id: 7284,
    municipality_id: 289,
    barangay_name: "Gatiawin",
  },
  {
    barangay_id: 7285,
    municipality_id: 289,
    barangay_name: "Guemasan",
  },
  {
    barangay_id: 7308,
    municipality_id: 289,
    barangay_name: "Kaledian",
  },
  {
    barangay_id: 7286,
    municipality_id: 289,
    barangay_name: "La Paz",
  },
  {
    barangay_id: 7287,
    municipality_id: 289,
    barangay_name: "Lacmit",
  },
  {
    barangay_id: 7288,
    municipality_id: 289,
    barangay_name: "Lacquios",
  },
  {
    barangay_id: 7289,
    municipality_id: 289,
    barangay_name: "Mangga-Cacutud",
  },
  {
    barangay_id: 7290,
    municipality_id: 289,
    barangay_name: "Mapalad",
  },
  {
    barangay_id: 7304,
    municipality_id: 289,
    barangay_name: "Matamo",
  },
  {
    barangay_id: 7291,
    municipality_id: 289,
    barangay_name: "Panlinlang",
  },
  {
    barangay_id: 7292,
    municipality_id: 289,
    barangay_name: "Paralaya",
  },
  {
    barangay_id: 7293,
    municipality_id: 289,
    barangay_name: "Plazang Luma",
  },
  {
    barangay_id: 7294,
    municipality_id: 289,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 7295,
    municipality_id: 289,
    barangay_name: "San Agustin Norte",
  },
  {
    barangay_id: 7296,
    municipality_id: 289,
    barangay_name: "San Agustin Sur",
  },
  {
    barangay_id: 7297,
    municipality_id: 289,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 7298,
    municipality_id: 289,
    barangay_name: "San Jose Mesulo",
  },
  {
    barangay_id: 7299,
    municipality_id: 289,
    barangay_name: "San Juan Bano",
  },
  {
    barangay_id: 7300,
    municipality_id: 289,
    barangay_name: "San Mateo",
  },
  {
    barangay_id: 7301,
    municipality_id: 289,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 7302,
    municipality_id: 289,
    barangay_name: "San Roque Bitas",
  },
  {
    barangay_id: 7305,
    municipality_id: 289,
    barangay_name: "Santo Niño Tabuan",
  },
  {
    barangay_id: 7306,
    municipality_id: 289,
    barangay_name: "Suclayin",
  },
  {
    barangay_id: 7307,
    municipality_id: 289,
    barangay_name: "Telapayong",
  },
  {
    barangay_id: 7309,
    municipality_id: 290,
    barangay_name: "Balas",
  },
  {
    barangay_id: 7310,
    municipality_id: 290,
    barangay_name: "Cabalantian",
  },
  {
    barangay_id: 7311,
    municipality_id: 290,
    barangay_name: "Cabambangan (Pob.)",
  },
  {
    barangay_id: 7312,
    municipality_id: 290,
    barangay_name: "Cabetican",
  },
  {
    barangay_id: 7313,
    municipality_id: 290,
    barangay_name: "Calibutbut",
  },
  {
    barangay_id: 7314,
    municipality_id: 290,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 7315,
    municipality_id: 290,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 7316,
    municipality_id: 290,
    barangay_name: "Duat",
  },
  {
    barangay_id: 7317,
    municipality_id: 290,
    barangay_name: "Macabacle",
  },
  {
    barangay_id: 7318,
    municipality_id: 290,
    barangay_name: "Magliman",
  },
  {
    barangay_id: 7319,
    municipality_id: 290,
    barangay_name: "Maliwalu",
  },
  {
    barangay_id: 7320,
    municipality_id: 290,
    barangay_name: "Mesalipit",
  },
  {
    barangay_id: 7321,
    municipality_id: 290,
    barangay_name: "Parulog",
  },
  {
    barangay_id: 7322,
    municipality_id: 290,
    barangay_name: "Potrero",
  },
  {
    barangay_id: 7323,
    municipality_id: 290,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 7324,
    municipality_id: 290,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7325,
    municipality_id: 290,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7326,
    municipality_id: 290,
    barangay_name: "Santa Barbara",
  },
  {
    barangay_id: 7327,
    municipality_id: 290,
    barangay_name: "Santa Ines",
  },
  {
    barangay_id: 7328,
    municipality_id: 290,
    barangay_name: "Talba",
  },
  {
    barangay_id: 7329,
    municipality_id: 290,
    barangay_name: "Tinajero",
  },
  {
    barangay_id: 7330,
    municipality_id: 291,
    barangay_name: "Bahay Pare",
  },
  {
    barangay_id: 7331,
    municipality_id: 291,
    barangay_name: "Bambang",
  },
  {
    barangay_id: 7332,
    municipality_id: 291,
    barangay_name: "Barangca",
  },
  {
    barangay_id: 7333,
    municipality_id: 291,
    barangay_name: "Barit",
  },
  {
    barangay_id: 7334,
    municipality_id: 291,
    barangay_name: "Buas (Pob.)",
  },
  {
    barangay_id: 7335,
    municipality_id: 291,
    barangay_name: "Cuayang Bugtong",
  },
  {
    barangay_id: 7336,
    municipality_id: 291,
    barangay_name: "Dalayap",
  },
  {
    barangay_id: 7337,
    municipality_id: 291,
    barangay_name: "Dulong Ilog",
  },
  {
    barangay_id: 7338,
    municipality_id: 291,
    barangay_name: "Gulap",
  },
  {
    barangay_id: 7339,
    municipality_id: 291,
    barangay_name: "Lanang",
  },
  {
    barangay_id: 7340,
    municipality_id: 291,
    barangay_name: "Lourdes",
  },
  {
    barangay_id: 7341,
    municipality_id: 291,
    barangay_name: "Magumbali",
  },
  {
    barangay_id: 7342,
    municipality_id: 291,
    barangay_name: "Mandasig",
  },
  {
    barangay_id: 7343,
    municipality_id: 291,
    barangay_name: "Mandili",
  },
  {
    barangay_id: 7344,
    municipality_id: 291,
    barangay_name: "Mangga",
  },
  {
    barangay_id: 7345,
    municipality_id: 291,
    barangay_name: "Mapaniqui",
  },
  {
    barangay_id: 7346,
    municipality_id: 291,
    barangay_name: "Paligui",
  },
  {
    barangay_id: 7347,
    municipality_id: 291,
    barangay_name: "Pangclara",
  },
  {
    barangay_id: 7348,
    municipality_id: 291,
    barangay_name: "Pansinao",
  },
  {
    barangay_id: 7349,
    municipality_id: 291,
    barangay_name: "Paralaya (Pob.)",
  },
  {
    barangay_id: 7350,
    municipality_id: 291,
    barangay_name: "Pasig",
  },
  {
    barangay_id: 7351,
    municipality_id: 291,
    barangay_name: "Pescadores (Pob.)",
  },
  {
    barangay_id: 7352,
    municipality_id: 291,
    barangay_name: "Pulong Gubat",
  },
  {
    barangay_id: 7353,
    municipality_id: 291,
    barangay_name: "Pulong Palazan",
  },
  {
    barangay_id: 7354,
    municipality_id: 291,
    barangay_name: "Salapungan",
  },
  {
    barangay_id: 7355,
    municipality_id: 291,
    barangay_name: "San Agustin (Pob.)",
  },
  {
    barangay_id: 7356,
    municipality_id: 291,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7357,
    municipality_id: 291,
    barangay_name: "Tagulod",
  },
  {
    barangay_id: 7358,
    municipality_id: 291,
    barangay_name: "Talang",
  },
  {
    barangay_id: 7359,
    municipality_id: 291,
    barangay_name: "Tenejero",
  },
  {
    barangay_id: 7360,
    municipality_id: 291,
    barangay_name: "Vizal San Pablo",
  },
  {
    barangay_id: 7361,
    municipality_id: 291,
    barangay_name: "Vizal Santo Cristo",
  },
  {
    barangay_id: 7362,
    municipality_id: 291,
    barangay_name: "Vizal Santo Niño",
  },
  {
    barangay_id: 7363,
    municipality_id: 292,
    barangay_name: "Anon",
  },
  {
    barangay_id: 7364,
    municipality_id: 292,
    barangay_name: "Apalit",
  },
  {
    barangay_id: 7365,
    municipality_id: 292,
    barangay_name: "Basa Air Base",
  },
  {
    barangay_id: 7366,
    municipality_id: 292,
    barangay_name: "Benedicto",
  },
  {
    barangay_id: 7367,
    municipality_id: 292,
    barangay_name: "Bodega",
  },
  {
    barangay_id: 7368,
    municipality_id: 292,
    barangay_name: "Cabangcalan",
  },
  {
    barangay_id: 7369,
    municipality_id: 292,
    barangay_name: "Calantas",
  },
  {
    barangay_id: 7370,
    municipality_id: 292,
    barangay_name: "Carmencita",
  },
  {
    barangay_id: 7371,
    municipality_id: 292,
    barangay_name: "Consuelo",
  },
  {
    barangay_id: 7372,
    municipality_id: 292,
    barangay_name: "Dampe",
  },
  {
    barangay_id: 7373,
    municipality_id: 292,
    barangay_name: "Del Carmen",
  },
  {
    barangay_id: 7374,
    municipality_id: 292,
    barangay_name: "Fortuna",
  },
  {
    barangay_id: 7375,
    municipality_id: 292,
    barangay_name: "Gutad",
  },
  {
    barangay_id: 7376,
    municipality_id: 292,
    barangay_name: "Mabical",
  },
  {
    barangay_id: 7378,
    municipality_id: 292,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 7395,
    municipality_id: 292,
    barangay_name: "Mawacat",
  },
  {
    barangay_id: 7379,
    municipality_id: 292,
    barangay_name: "Nabuclod",
  },
  {
    barangay_id: 7380,
    municipality_id: 292,
    barangay_name: "Pabanlag",
  },
  {
    barangay_id: 7381,
    municipality_id: 292,
    barangay_name: "Paguiruan",
  },
  {
    barangay_id: 7382,
    municipality_id: 292,
    barangay_name: "Palmayo",
  },
  {
    barangay_id: 7383,
    municipality_id: 292,
    barangay_name: "Pandaguirig",
  },
  {
    barangay_id: 7384,
    municipality_id: 292,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 7385,
    municipality_id: 292,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 7386,
    municipality_id: 292,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7387,
    municipality_id: 292,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7388,
    municipality_id: 292,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 7389,
    municipality_id: 292,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 7390,
    municipality_id: 292,
    barangay_name: "San Ramon",
  },
  {
    barangay_id: 7391,
    municipality_id: 292,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7392,
    municipality_id: 292,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 7377,
    municipality_id: 292,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7393,
    municipality_id: 292,
    barangay_name: "Solib",
  },
  {
    barangay_id: 7394,
    municipality_id: 292,
    barangay_name: "Valdez",
  },
  {
    barangay_id: 7426,
    municipality_id: 293,
    barangay_name: "Ascomo",
  },
  {
    barangay_id: 7396,
    municipality_id: 293,
    barangay_name: "Bancal",
  },
  {
    barangay_id: 7397,
    municipality_id: 293,
    barangay_name: "Jose Abad Santos",
  },
  {
    barangay_id: 7398,
    municipality_id: 293,
    barangay_name: "Lambac",
  },
  {
    barangay_id: 7399,
    municipality_id: 293,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 7400,
    municipality_id: 293,
    barangay_name: "Maquiapo",
  },
  {
    barangay_id: 7401,
    municipality_id: 293,
    barangay_name: "Natividad",
  },
  {
    barangay_id: 7402,
    municipality_id: 293,
    barangay_name: "Plaza Burgos (Pob.)",
  },
  {
    barangay_id: 7403,
    municipality_id: 293,
    barangay_name: "Pulungmasle",
  },
  {
    barangay_id: 7404,
    municipality_id: 293,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 7405,
    municipality_id: 293,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7406,
    municipality_id: 293,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 7407,
    municipality_id: 293,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7408,
    municipality_id: 293,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7420,
    municipality_id: 293,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 7409,
    municipality_id: 293,
    barangay_name: "San Juan Bautista",
  },
  {
    barangay_id: 7410,
    municipality_id: 293,
    barangay_name: "San Juan Nepomuceno",
  },
  {
    barangay_id: 7411,
    municipality_id: 293,
    barangay_name: "San Matias",
  },
  {
    barangay_id: 7412,
    municipality_id: 293,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 7413,
    municipality_id: 293,
    barangay_name: "San Nicolas 1st",
  },
  {
    barangay_id: 7414,
    municipality_id: 293,
    barangay_name: "San Nicolas 2nd",
  },
  {
    barangay_id: 7415,
    municipality_id: 293,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 7416,
    municipality_id: 293,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 7417,
    municipality_id: 293,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 7418,
    municipality_id: 293,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7419,
    municipality_id: 293,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7421,
    municipality_id: 293,
    barangay_name: "Santa Filomena (Pob.)",
  },
  {
    barangay_id: 7422,
    municipality_id: 293,
    barangay_name: "Santa Ines",
  },
  {
    barangay_id: 7423,
    municipality_id: 293,
    barangay_name: "Santa Ursula",
  },
  {
    barangay_id: 7424,
    municipality_id: 293,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 7425,
    municipality_id: 293,
    barangay_name: "Santo Niño (Pob.)",
  },
  {
    barangay_id: 7427,
    municipality_id: 294,
    barangay_name: "Balantacan",
  },
  {
    barangay_id: 7429,
    municipality_id: 294,
    barangay_name: "Bancal Pugad",
  },
  {
    barangay_id: 7428,
    municipality_id: 294,
    barangay_name: "Bancal Sinubli",
  },
  {
    barangay_id: 7430,
    municipality_id: 294,
    barangay_name: "Baruya",
  },
  {
    barangay_id: 7431,
    municipality_id: 294,
    barangay_name: "Calangain",
  },
  {
    barangay_id: 7432,
    municipality_id: 294,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 7434,
    municipality_id: 294,
    barangay_name: "De La Paz",
  },
  {
    barangay_id: 7433,
    municipality_id: 294,
    barangay_name: "Del Carmen",
  },
  {
    barangay_id: 7435,
    municipality_id: 294,
    barangay_name: "Don Ignacio Dimson",
  },
  {
    barangay_id: 7436,
    municipality_id: 294,
    barangay_name: "Lourdes",
  },
  {
    barangay_id: 7437,
    municipality_id: 294,
    barangay_name: "Prado Siongco",
  },
  {
    barangay_id: 7438,
    municipality_id: 294,
    barangay_name: "Remedios",
  },
  {
    barangay_id: 7439,
    municipality_id: 294,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7440,
    municipality_id: 294,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 7441,
    municipality_id: 294,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 7442,
    municipality_id: 294,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7443,
    municipality_id: 294,
    barangay_name: "San Jose Apunan",
  },
  {
    barangay_id: 7444,
    municipality_id: 294,
    barangay_name: "San Jose Gumi",
  },
  {
    barangay_id: 7445,
    municipality_id: 294,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 7446,
    municipality_id: 294,
    barangay_name: "San Matias",
  },
  {
    barangay_id: 7447,
    municipality_id: 294,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 7448,
    municipality_id: 294,
    barangay_name: "San Nicolas 1st (Pob.)",
  },
  {
    barangay_id: 7449,
    municipality_id: 294,
    barangay_name: "San Nicolas 2nd",
  },
  {
    barangay_id: 7450,
    municipality_id: 294,
    barangay_name: "San Pablo 1st",
  },
  {
    barangay_id: 7451,
    municipality_id: 294,
    barangay_name: "San Pablo 2nd",
  },
  {
    barangay_id: 7452,
    municipality_id: 294,
    barangay_name: "San Pedro Palcarangan",
  },
  {
    barangay_id: 7453,
    municipality_id: 294,
    barangay_name: "San Pedro Saug",
  },
  {
    barangay_id: 7454,
    municipality_id: 294,
    barangay_name: "San Roque Arbol",
  },
  {
    barangay_id: 7455,
    municipality_id: 294,
    barangay_name: "San Roque Dau",
  },
  {
    barangay_id: 7456,
    municipality_id: 294,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7457,
    municipality_id: 294,
    barangay_name: "Santa Barbara",
  },
  {
    barangay_id: 7458,
    municipality_id: 294,
    barangay_name: "Santa Catalina",
  },
  {
    barangay_id: 7459,
    municipality_id: 294,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 7460,
    municipality_id: 294,
    barangay_name: "Santa Lucia (Pob.)",
  },
  {
    barangay_id: 7461,
    municipality_id: 294,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 7462,
    municipality_id: 294,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 7463,
    municipality_id: 294,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 7464,
    municipality_id: 294,
    barangay_name: "Santa Teresa 1st",
  },
  {
    barangay_id: 7465,
    municipality_id: 294,
    barangay_name: "Santa Teresa 2nd",
  },
  {
    barangay_id: 7466,
    municipality_id: 294,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 7470,
    municipality_id: 294,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 7467,
    municipality_id: 294,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 7468,
    municipality_id: 294,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 7469,
    municipality_id: 294,
    barangay_name: "Santo Tomas (Pob.)",
  },
  {
    barangay_id: 7471,
    municipality_id: 295,
    barangay_name: "Atlu-Bola",
  },
  {
    barangay_id: 7472,
    municipality_id: 295,
    barangay_name: "Bical",
  },
  {
    barangay_id: 7473,
    municipality_id: 295,
    barangay_name: "Bundagul",
  },
  {
    barangay_id: 7474,
    municipality_id: 295,
    barangay_name: "Cacutud",
  },
  {
    barangay_id: 7475,
    municipality_id: 295,
    barangay_name: "Calumpang",
  },
  {
    barangay_id: 7476,
    municipality_id: 295,
    barangay_name: "Camachiles",
  },
  {
    barangay_id: 7477,
    municipality_id: 295,
    barangay_name: "Dapdap",
  },
  {
    barangay_id: 7478,
    municipality_id: 295,
    barangay_name: "Dau",
  },
  {
    barangay_id: 7479,
    municipality_id: 295,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 7480,
    municipality_id: 295,
    barangay_name: "Duquit",
  },
  {
    barangay_id: 7481,
    municipality_id: 295,
    barangay_name: "Lakandula",
  },
  {
    barangay_id: 7482,
    municipality_id: 295,
    barangay_name: "Mabiga",
  },
  {
    barangay_id: 7483,
    municipality_id: 295,
    barangay_name: "Macapagal Village",
  },
  {
    barangay_id: 7484,
    municipality_id: 295,
    barangay_name: "Mamatitang",
  },
  {
    barangay_id: 7485,
    municipality_id: 295,
    barangay_name: "Mangalit",
  },
  {
    barangay_id: 7486,
    municipality_id: 295,
    barangay_name: "Marcos Village",
  },
  {
    barangay_id: 7487,
    municipality_id: 295,
    barangay_name: "Mawaque",
  },
  {
    barangay_id: 7488,
    municipality_id: 295,
    barangay_name: "Paralayunan",
  },
  {
    barangay_id: 7489,
    municipality_id: 295,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 7490,
    municipality_id: 295,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 7491,
    municipality_id: 295,
    barangay_name: "San Joaquin",
  },
  {
    barangay_id: 7492,
    municipality_id: 295,
    barangay_name: "Santa Ines",
  },
  {
    barangay_id: 7493,
    municipality_id: 295,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 7494,
    municipality_id: 295,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7495,
    municipality_id: 295,
    barangay_name: "Sapang Balen",
  },
  {
    barangay_id: 7496,
    municipality_id: 295,
    barangay_name: "Sapang Biabas",
  },
  {
    barangay_id: 7497,
    municipality_id: 295,
    barangay_name: "Tabun",
  },
  {
    barangay_id: 7498,
    municipality_id: 296,
    barangay_name: "Batasan",
  },
  {
    barangay_id: 7499,
    municipality_id: 296,
    barangay_name: "Caduang Tete",
  },
  {
    barangay_id: 7500,
    municipality_id: 296,
    barangay_name: "Candelaria",
  },
  {
    barangay_id: 7501,
    municipality_id: 296,
    barangay_name: "Castuli",
  },
  {
    barangay_id: 7502,
    municipality_id: 296,
    barangay_name: "Consuelo",
  },
  {
    barangay_id: 7503,
    municipality_id: 296,
    barangay_name: "Dalayap",
  },
  {
    barangay_id: 7504,
    municipality_id: 296,
    barangay_name: "Mataguiti",
  },
  {
    barangay_id: 7505,
    municipality_id: 296,
    barangay_name: "San Esteban",
  },
  {
    barangay_id: 7506,
    municipality_id: 296,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 7507,
    municipality_id: 296,
    barangay_name: "San Gabriel (Pob.)",
  },
  {
    barangay_id: 7508,
    municipality_id: 296,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7509,
    municipality_id: 296,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7510,
    municipality_id: 296,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 7511,
    municipality_id: 296,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 7512,
    municipality_id: 296,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7513,
    municipality_id: 296,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7514,
    municipality_id: 296,
    barangay_name: "Santa Cruz (Pob.)",
  },
  {
    barangay_id: 7515,
    municipality_id: 296,
    barangay_name: "Santa Lutgarda",
  },
  {
    barangay_id: 7516,
    municipality_id: 296,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 7517,
    municipality_id: 296,
    barangay_name: "Santa Rita (Pob.)",
  },
  {
    barangay_id: 7518,
    municipality_id: 296,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 7519,
    municipality_id: 296,
    barangay_name: "Santo Rosario (Pob.)",
  },
  {
    barangay_id: 7520,
    municipality_id: 296,
    barangay_name: "Saplad David",
  },
  {
    barangay_id: 7521,
    municipality_id: 296,
    barangay_name: "Tacasan",
  },
  {
    barangay_id: 7522,
    municipality_id: 296,
    barangay_name: "Telacsan",
  },
  {
    barangay_id: 7549,
    municipality_id: 297,
    barangay_name: "Ayala",
  },
  {
    barangay_id: 7547,
    municipality_id: 297,
    barangay_name: "Bucanan",
  },
  {
    barangay_id: 7523,
    municipality_id: 297,
    barangay_name: "Camias",
  },
  {
    barangay_id: 7524,
    municipality_id: 297,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 7525,
    municipality_id: 297,
    barangay_name: "Escaler",
  },
  {
    barangay_id: 7526,
    municipality_id: 297,
    barangay_name: "La Paz",
  },
  {
    barangay_id: 7527,
    municipality_id: 297,
    barangay_name: "Navaling",
  },
  {
    barangay_id: 7528,
    municipality_id: 297,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7529,
    municipality_id: 297,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 7530,
    municipality_id: 297,
    barangay_name: "San Franciso",
  },
  {
    barangay_id: 7531,
    municipality_id: 297,
    barangay_name: "San Ildefonso",
  },
  {
    barangay_id: 7532,
    municipality_id: 297,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7533,
    municipality_id: 297,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7534,
    municipality_id: 297,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 7535,
    municipality_id: 297,
    barangay_name: "San Nicolas 1st (Pob.)",
  },
  {
    barangay_id: 7536,
    municipality_id: 297,
    barangay_name: "San Nicolas 2nd",
  },
  {
    barangay_id: 7537,
    municipality_id: 297,
    barangay_name: "San Pablo (Pob.)",
  },
  {
    barangay_id: 7538,
    municipality_id: 297,
    barangay_name: "San Pedro I",
  },
  {
    barangay_id: 7539,
    municipality_id: 297,
    barangay_name: "San Pedro II",
  },
  {
    barangay_id: 7540,
    municipality_id: 297,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7541,
    municipality_id: 297,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7542,
    municipality_id: 297,
    barangay_name: "Santa Cruz (Pob.)",
  },
  {
    barangay_id: 7543,
    municipality_id: 297,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 7544,
    municipality_id: 297,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 7545,
    municipality_id: 297,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 7546,
    municipality_id: 297,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7548,
    municipality_id: 297,
    barangay_name: "Turu",
  },
  {
    barangay_id: 7550,
    municipality_id: 298,
    barangay_name: "Alauli",
  },
  {
    barangay_id: 7551,
    municipality_id: 298,
    barangay_name: "Bagang",
  },
  {
    barangay_id: 7552,
    municipality_id: 298,
    barangay_name: "Balibago",
  },
  {
    barangay_id: 7553,
    municipality_id: 298,
    barangay_name: "Bebe Anac",
  },
  {
    barangay_id: 7554,
    municipality_id: 298,
    barangay_name: "Bebe Matua",
  },
  {
    barangay_id: 7555,
    municipality_id: 298,
    barangay_name: "Bulacus",
  },
  {
    barangay_id: 7558,
    municipality_id: 298,
    barangay_name: "Cambasi",
  },
  {
    barangay_id: 7559,
    municipality_id: 298,
    barangay_name: "Malauli",
  },
  {
    barangay_id: 7560,
    municipality_id: 298,
    barangay_name: "Nigui",
  },
  {
    barangay_id: 7561,
    municipality_id: 298,
    barangay_name: "Palimpe",
  },
  {
    barangay_id: 7562,
    municipality_id: 298,
    barangay_name: "Puti",
  },
  {
    barangay_id: 7563,
    municipality_id: 298,
    barangay_name: "Sagrada",
  },
  {
    barangay_id: 7556,
    municipality_id: 298,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7564,
    municipality_id: 298,
    barangay_name: "San Isidro Anac",
  },
  {
    barangay_id: 7565,
    municipality_id: 298,
    barangay_name: "San Isidro Matua (Pob.)",
  },
  {
    barangay_id: 7566,
    municipality_id: 298,
    barangay_name: "San Nicolas (Pob.)",
  },
  {
    barangay_id: 7567,
    municipality_id: 298,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 7568,
    municipality_id: 298,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 7572,
    municipality_id: 298,
    barangay_name: "Santa Lucia Anac (Pob.)",
  },
  {
    barangay_id: 7569,
    municipality_id: 298,
    barangay_name: "Santa Lucia Matua",
  },
  {
    barangay_id: 7570,
    municipality_id: 298,
    barangay_name: "Santa Lucia Paguiba",
  },
  {
    barangay_id: 7571,
    municipality_id: 298,
    barangay_name: "Santa Lucia Wakas",
  },
  {
    barangay_id: 7557,
    municipality_id: 298,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 7575,
    municipality_id: 298,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 7573,
    municipality_id: 298,
    barangay_name: "Sapang Kawayan",
  },
  {
    barangay_id: 7574,
    municipality_id: 298,
    barangay_name: "Sua",
  },
  {
    barangay_id: 7576,
    municipality_id: 299,
    barangay_name: "Acli",
  },
  {
    barangay_id: 7577,
    municipality_id: 299,
    barangay_name: "Anao",
  },
  {
    barangay_id: 7578,
    municipality_id: 299,
    barangay_name: "Balas",
  },
  {
    barangay_id: 7579,
    municipality_id: 299,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 7580,
    municipality_id: 299,
    barangay_name: "Camuning",
  },
  {
    barangay_id: 7581,
    municipality_id: 299,
    barangay_name: "Cawayan",
  },
  {
    barangay_id: 7582,
    municipality_id: 299,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 7583,
    municipality_id: 299,
    barangay_name: "Culubasa",
  },
  {
    barangay_id: 7584,
    municipality_id: 299,
    barangay_name: "Divisoria",
  },
  {
    barangay_id: 7585,
    municipality_id: 299,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 7586,
    municipality_id: 299,
    barangay_name: "Eden",
  },
  {
    barangay_id: 7587,
    municipality_id: 299,
    barangay_name: "Gandus",
  },
  {
    barangay_id: 7588,
    municipality_id: 299,
    barangay_name: "Lagundi",
  },
  {
    barangay_id: 7589,
    municipality_id: 299,
    barangay_name: "Laput",
  },
  {
    barangay_id: 7590,
    municipality_id: 299,
    barangay_name: "Laug",
  },
  {
    barangay_id: 7591,
    municipality_id: 299,
    barangay_name: "Masamat",
  },
  {
    barangay_id: 7592,
    municipality_id: 299,
    barangay_name: "Masangsang",
  },
  {
    barangay_id: 7593,
    municipality_id: 299,
    barangay_name: "Nueva Victoria",
  },
  {
    barangay_id: 7594,
    municipality_id: 299,
    barangay_name: "Pandacaqui",
  },
  {
    barangay_id: 7595,
    municipality_id: 299,
    barangay_name: "Pangatlan",
  },
  {
    barangay_id: 7596,
    municipality_id: 299,
    barangay_name: "Panipuan",
  },
  {
    barangay_id: 7597,
    municipality_id: 299,
    barangay_name: "Parian (Pob.)",
  },
  {
    barangay_id: 7598,
    municipality_id: 299,
    barangay_name: "Sabanilla",
  },
  {
    barangay_id: 7599,
    municipality_id: 299,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 7600,
    municipality_id: 299,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 7601,
    municipality_id: 299,
    barangay_name: "San Jose Malino",
  },
  {
    barangay_id: 7602,
    municipality_id: 299,
    barangay_name: "San Jose Matulid",
  },
  {
    barangay_id: 7603,
    municipality_id: 299,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 7604,
    municipality_id: 299,
    barangay_name: "San Lorenzo",
  },
  {
    barangay_id: 7605,
    municipality_id: 299,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 7606,
    municipality_id: 299,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 7607,
    municipality_id: 299,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 7608,
    municipality_id: 299,
    barangay_name: "San Patricio",
  },
  {
    barangay_id: 7609,
    municipality_id: 299,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 7610,
    municipality_id: 299,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7611,
    municipality_id: 299,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7612,
    municipality_id: 299,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 7613,
    municipality_id: 299,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 7614,
    municipality_id: 299,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 7615,
    municipality_id: 299,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7616,
    municipality_id: 299,
    barangay_name: "Sapang Maisac",
  },
  {
    barangay_id: 7617,
    municipality_id: 299,
    barangay_name: "Suclaban",
  },
  {
    barangay_id: 7618,
    municipality_id: 299,
    barangay_name: "Tangle",
  },
  {
    barangay_id: 7619,
    municipality_id: 300,
    barangay_name: "Bulac",
  },
  {
    barangay_id: 7620,
    municipality_id: 300,
    barangay_name: "Dawe",
  },
  {
    barangay_id: 7621,
    municipality_id: 300,
    barangay_name: "Lourdes",
  },
  {
    barangay_id: 7622,
    municipality_id: 300,
    barangay_name: "Maniango",
  },
  {
    barangay_id: 7623,
    municipality_id: 300,
    barangay_name: "San Francisco 1st",
  },
  {
    barangay_id: 7624,
    municipality_id: 300,
    barangay_name: "San Francisco 2nd",
  },
  {
    barangay_id: 7625,
    municipality_id: 300,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7626,
    municipality_id: 300,
    barangay_name: "San Nicolas (Pob.)",
  },
  {
    barangay_id: 7627,
    municipality_id: 300,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 7628,
    municipality_id: 300,
    barangay_name: "Santa Catalina",
  },
  {
    barangay_id: 7629,
    municipality_id: 300,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 7630,
    municipality_id: 300,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 7631,
    municipality_id: 300,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 7632,
    municipality_id: 300,
    barangay_name: "Santo Rosario (Pob.)",
  },
  {
    barangay_id: 7633,
    municipality_id: 300,
    barangay_name: "Saplad",
  },
  {
    barangay_id: 7634,
    municipality_id: 301,
    barangay_name: "Babo Pangulo",
  },
  {
    barangay_id: 7635,
    municipality_id: 301,
    barangay_name: "Babo Sacan",
  },
  {
    barangay_id: 7636,
    municipality_id: 301,
    barangay_name: "Balubad",
  },
  {
    barangay_id: 7637,
    municipality_id: 301,
    barangay_name: "Calzadang Bayu",
  },
  {
    barangay_id: 7638,
    municipality_id: 301,
    barangay_name: "Camias",
  },
  {
    barangay_id: 7639,
    municipality_id: 301,
    barangay_name: "Cangatba",
  },
  {
    barangay_id: 7640,
    municipality_id: 301,
    barangay_name: "Diaz",
  },
  {
    barangay_id: 7641,
    municipality_id: 301,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 7661,
    municipality_id: 301,
    barangay_name: "Inararo",
  },
  {
    barangay_id: 7642,
    municipality_id: 301,
    barangay_name: "Jalung",
  },
  {
    barangay_id: 7643,
    municipality_id: 301,
    barangay_name: "Mancatian",
  },
  {
    barangay_id: 7644,
    municipality_id: 301,
    barangay_name: "Manibaug Libutad",
  },
  {
    barangay_id: 7645,
    municipality_id: 301,
    barangay_name: "Manibaug Paralaya",
  },
  {
    barangay_id: 7646,
    municipality_id: 301,
    barangay_name: "Manibaug Pasig",
  },
  {
    barangay_id: 7647,
    municipality_id: 301,
    barangay_name: "Manuali",
  },
  {
    barangay_id: 7648,
    municipality_id: 301,
    barangay_name: "Mitla Proper",
  },
  {
    barangay_id: 7649,
    municipality_id: 301,
    barangay_name: "Palat",
  },
  {
    barangay_id: 7650,
    municipality_id: 301,
    barangay_name: "Pias",
  },
  {
    barangay_id: 7651,
    municipality_id: 301,
    barangay_name: "Pio",
  },
  {
    barangay_id: 7652,
    municipality_id: 301,
    barangay_name: "Planas",
  },
  {
    barangay_id: 7653,
    municipality_id: 301,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 7654,
    municipality_id: 301,
    barangay_name: "Pulong Santol",
  },
  {
    barangay_id: 7655,
    municipality_id: 301,
    barangay_name: "Salu",
  },
  {
    barangay_id: 7656,
    municipality_id: 301,
    barangay_name: "San Jose Mitla",
  },
  {
    barangay_id: 7657,
    municipality_id: 301,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 7662,
    municipality_id: 301,
    barangay_name: "Sapang Uwak",
  },
  {
    barangay_id: 7658,
    municipality_id: 301,
    barangay_name: "Sepung Bulaun",
  },
  {
    barangay_id: 7659,
    municipality_id: 301,
    barangay_name: "Sinura",
  },
  {
    barangay_id: 7660,
    municipality_id: 301,
    barangay_name: "Villa Maria",
  },
  {
    barangay_id: 7663,
    municipality_id: 302,
    barangay_name: "Alasas",
  },
  {
    barangay_id: 7664,
    municipality_id: 302,
    barangay_name: "Baliti",
  },
  {
    barangay_id: 7665,
    municipality_id: 302,
    barangay_name: "Bulaon",
  },
  {
    barangay_id: 7666,
    municipality_id: 302,
    barangay_name: "Calulut",
  },
  {
    barangay_id: 7669,
    municipality_id: 302,
    barangay_name: "Del Carmen",
  },
  {
    barangay_id: 7670,
    municipality_id: 302,
    barangay_name: "Del Pilar",
  },
  {
    barangay_id: 7671,
    municipality_id: 302,
    barangay_name: "Del Rosario",
  },
  {
    barangay_id: 7667,
    municipality_id: 302,
    barangay_name: "Dela Paz Norte",
  },
  {
    barangay_id: 7668,
    municipality_id: 302,
    barangay_name: "Dela Paz Sur",
  },
  {
    barangay_id: 7672,
    municipality_id: 302,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 7673,
    municipality_id: 302,
    barangay_name: "Juliana",
  },
  {
    barangay_id: 7674,
    municipality_id: 302,
    barangay_name: "Lara",
  },
  {
    barangay_id: 7675,
    municipality_id: 302,
    barangay_name: "Lourdes",
  },
  {
    barangay_id: 7676,
    municipality_id: 302,
    barangay_name: "Magliman",
  },
  {
    barangay_id: 7677,
    municipality_id: 302,
    barangay_name: "Maimpis",
  },
  {
    barangay_id: 7678,
    municipality_id: 302,
    barangay_name: "Malino",
  },
  {
    barangay_id: 7679,
    municipality_id: 302,
    barangay_name: "Malpitic",
  },
  {
    barangay_id: 7680,
    municipality_id: 302,
    barangay_name: "Pandaras",
  },
  {
    barangay_id: 7681,
    municipality_id: 302,
    barangay_name: "Panipuan",
  },
  {
    barangay_id: 7697,
    municipality_id: 302,
    barangay_name: "Pulung Bulu",
  },
  {
    barangay_id: 7683,
    municipality_id: 302,
    barangay_name: "Quebiauan",
  },
  {
    barangay_id: 7684,
    municipality_id: 302,
    barangay_name: "Saguin",
  },
  {
    barangay_id: 7685,
    municipality_id: 302,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7686,
    municipality_id: 302,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 7687,
    municipality_id: 302,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7688,
    municipality_id: 302,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7689,
    municipality_id: 302,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 7690,
    municipality_id: 302,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 7691,
    municipality_id: 302,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 7692,
    municipality_id: 302,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 7693,
    municipality_id: 302,
    barangay_name: "Santa Teresita",
  },
  {
    barangay_id: 7694,
    municipality_id: 302,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 7682,
    municipality_id: 302,
    barangay_name: "Santo Rosario (Pob.)",
  },
  {
    barangay_id: 7695,
    municipality_id: 302,
    barangay_name: "Sindalan",
  },
  {
    barangay_id: 7696,
    municipality_id: 302,
    barangay_name: "Telabastagan",
  },
  {
    barangay_id: 7698,
    municipality_id: 303,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7699,
    municipality_id: 303,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 7700,
    municipality_id: 303,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7701,
    municipality_id: 303,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7702,
    municipality_id: 303,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 7703,
    municipality_id: 303,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 7704,
    municipality_id: 303,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7705,
    municipality_id: 303,
    barangay_name: "San Sebastian",
  },
  {
    barangay_id: 7706,
    municipality_id: 303,
    barangay_name: "Santa Catalina",
  },
  {
    barangay_id: 7707,
    municipality_id: 303,
    barangay_name: "Santa Cruz Pambilog",
  },
  {
    barangay_id: 7708,
    municipality_id: 303,
    barangay_name: "Santa Cruz Poblacion",
  },
  {
    barangay_id: 7709,
    municipality_id: 303,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 7710,
    municipality_id: 303,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 7711,
    municipality_id: 303,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 7712,
    municipality_id: 303,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 7713,
    municipality_id: 303,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7714,
    municipality_id: 303,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 7715,
    municipality_id: 304,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 7716,
    municipality_id: 304,
    barangay_name: "De La Paz",
  },
  {
    barangay_id: 7718,
    municipality_id: 304,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7719,
    municipality_id: 304,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7720,
    municipality_id: 304,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7717,
    municipality_id: 304,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 7721,
    municipality_id: 304,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 7722,
    municipality_id: 304,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 7723,
    municipality_id: 304,
    barangay_name: "San Pablo Libutad",
  },
  {
    barangay_id: 7724,
    municipality_id: 304,
    barangay_name: "San Pablo Proper",
  },
  {
    barangay_id: 7725,
    municipality_id: 304,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 7726,
    municipality_id: 304,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 7727,
    municipality_id: 304,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 7728,
    municipality_id: 304,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 7729,
    municipality_id: 305,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7730,
    municipality_id: 305,
    barangay_name: "San Bartolome",
  },
  {
    barangay_id: 7731,
    municipality_id: 305,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7732,
    municipality_id: 305,
    barangay_name: "San Joaquin (Pob.)",
  },
  {
    barangay_id: 7733,
    municipality_id: 305,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7734,
    municipality_id: 305,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 7735,
    municipality_id: 305,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 7736,
    municipality_id: 305,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 7737,
    municipality_id: 305,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 7738,
    municipality_id: 305,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7739,
    municipality_id: 305,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 7740,
    municipality_id: 305,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 7741,
    municipality_id: 305,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 7742,
    municipality_id: 305,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7743,
    municipality_id: 306,
    barangay_name: "Becuran",
  },
  {
    barangay_id: 7744,
    municipality_id: 306,
    barangay_name: "Dila-dila",
  },
  {
    barangay_id: 7745,
    municipality_id: 306,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7746,
    municipality_id: 306,
    barangay_name: "San Basilio",
  },
  {
    barangay_id: 7747,
    municipality_id: 306,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7748,
    municipality_id: 306,
    barangay_name: "San Jose (Pob.)",
  },
  {
    barangay_id: 7749,
    municipality_id: 306,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 7750,
    municipality_id: 306,
    barangay_name: "San Matias",
  },
  {
    barangay_id: 7751,
    municipality_id: 306,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7752,
    municipality_id: 306,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 7753,
    municipality_id: 307,
    barangay_name: "Moras De La Paz",
  },
  {
    barangay_id: 7754,
    municipality_id: 307,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 7755,
    municipality_id: 307,
    barangay_name: "San Bartolome",
  },
  {
    barangay_id: 7756,
    municipality_id: 307,
    barangay_name: "San Matias",
  },
  {
    barangay_id: 7757,
    municipality_id: 307,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7758,
    municipality_id: 307,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7759,
    municipality_id: 307,
    barangay_name: "Sapa",
  },
  {
    barangay_id: 7760,
    municipality_id: 308,
    barangay_name: "Batang 1st",
  },
  {
    barangay_id: 7761,
    municipality_id: 308,
    barangay_name: "Batang 2nd",
  },
  {
    barangay_id: 7762,
    municipality_id: 308,
    barangay_name: "Mabuanbuan",
  },
  {
    barangay_id: 7763,
    municipality_id: 308,
    barangay_name: "Malusac",
  },
  {
    barangay_id: 7771,
    municipality_id: 308,
    barangay_name: "Sabitanan",
  },
  {
    barangay_id: 7765,
    municipality_id: 308,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 7766,
    municipality_id: 308,
    barangay_name: "San Nicolas 1st",
  },
  {
    barangay_id: 7767,
    municipality_id: 308,
    barangay_name: "San Nicolas 2nd",
  },
  {
    barangay_id: 7768,
    municipality_id: 308,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 7764,
    municipality_id: 308,
    barangay_name: "Santa Lucia (Pob.)",
  },
  {
    barangay_id: 7769,
    municipality_id: 308,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 7770,
    municipality_id: 308,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 7772,
    municipality_id: 309,
    barangay_name: "Baguindoc",
  },
  {
    barangay_id: 7773,
    municipality_id: 309,
    barangay_name: "Bantog",
  },
  {
    barangay_id: 7774,
    municipality_id: 309,
    barangay_name: "Campos",
  },
  {
    barangay_id: 7775,
    municipality_id: 309,
    barangay_name: "Carmen",
  },
  {
    barangay_id: 7776,
    municipality_id: 309,
    barangay_name: "Casili",
  },
  {
    barangay_id: 7777,
    municipality_id: 309,
    barangay_name: "Don Ramon",
  },
  {
    barangay_id: 7778,
    municipality_id: 309,
    barangay_name: "Hernando",
  },
  {
    barangay_id: 7779,
    municipality_id: 309,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 7780,
    municipality_id: 309,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 7781,
    municipality_id: 309,
    barangay_name: "San Francisco East",
  },
  {
    barangay_id: 7782,
    municipality_id: 309,
    barangay_name: "San Francisco West",
  },
  {
    barangay_id: 7783,
    municipality_id: 309,
    barangay_name: "San Jose North",
  },
  {
    barangay_id: 7784,
    municipality_id: 309,
    barangay_name: "San Jose South",
  },
  {
    barangay_id: 7785,
    municipality_id: 309,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 7786,
    municipality_id: 309,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7787,
    municipality_id: 309,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 7788,
    municipality_id: 309,
    barangay_name: "Sinense",
  },
  {
    barangay_id: 7789,
    municipality_id: 309,
    barangay_name: "Suaverdez",
  },
  {
    barangay_id: 7790,
    municipality_id: 310,
    barangay_name: "Anupul",
  },
  {
    barangay_id: 7791,
    municipality_id: 310,
    barangay_name: "Banaba",
  },
  {
    barangay_id: 7792,
    municipality_id: 310,
    barangay_name: "Bangcu",
  },
  {
    barangay_id: 7793,
    municipality_id: 310,
    barangay_name: "Culubasa",
  },
  {
    barangay_id: 7794,
    municipality_id: 310,
    barangay_name: "Dela Cruz",
  },
  {
    barangay_id: 7795,
    municipality_id: 310,
    barangay_name: "La Paz",
  },
  {
    barangay_id: 7796,
    municipality_id: 310,
    barangay_name: "Lourdes",
  },
  {
    barangay_id: 7797,
    municipality_id: 310,
    barangay_name: "Malonzo",
  },
  {
    barangay_id: 7799,
    municipality_id: 310,
    barangay_name: "San Nicolas (Pob.)",
  },
  {
    barangay_id: 7800,
    municipality_id: 310,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 7801,
    municipality_id: 310,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 7802,
    municipality_id: 310,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 7803,
    municipality_id: 310,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7804,
    municipality_id: 310,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 7798,
    municipality_id: 310,
    barangay_name: "Virgen de los Remedios",
  },
  {
    barangay_id: 7805,
    municipality_id: 311,
    barangay_name: "Anoling 1st",
  },
  {
    barangay_id: 7806,
    municipality_id: 311,
    barangay_name: "Anoling 2nd",
  },
  {
    barangay_id: 7807,
    municipality_id: 311,
    barangay_name: "Anoling 3rd",
  },
  {
    barangay_id: 7808,
    municipality_id: 311,
    barangay_name: "Bacabac",
  },
  {
    barangay_id: 7809,
    municipality_id: 311,
    barangay_name: "Bacsay",
  },
  {
    barangay_id: 7810,
    municipality_id: 311,
    barangay_name: "Bancay 1st",
  },
  {
    barangay_id: 7811,
    municipality_id: 311,
    barangay_name: "Bancay 2nd",
  },
  {
    barangay_id: 7812,
    municipality_id: 311,
    barangay_name: "Bilad",
  },
  {
    barangay_id: 7813,
    municipality_id: 311,
    barangay_name: "Birbira",
  },
  {
    barangay_id: 7815,
    municipality_id: 311,
    barangay_name: "Bobon 1st",
  },
  {
    barangay_id: 7816,
    municipality_id: 311,
    barangay_name: "Bobon 2nd",
  },
  {
    barangay_id: 7814,
    municipality_id: 311,
    barangay_name: "Bobon Caarosipan",
  },
  {
    barangay_id: 7817,
    municipality_id: 311,
    barangay_name: "Cabanabaan",
  },
  {
    barangay_id: 7818,
    municipality_id: 311,
    barangay_name: "Cacamilingan Norte",
  },
  {
    barangay_id: 7819,
    municipality_id: 311,
    barangay_name: "Cacamilingan Sur",
  },
  {
    barangay_id: 7820,
    municipality_id: 311,
    barangay_name: "Caniag",
  },
  {
    barangay_id: 7821,
    municipality_id: 311,
    barangay_name: "Carael",
  },
  {
    barangay_id: 7822,
    municipality_id: 311,
    barangay_name: "Cayaoan",
  },
  {
    barangay_id: 7823,
    municipality_id: 311,
    barangay_name: "Cayasan",
  },
  {
    barangay_id: 7824,
    municipality_id: 311,
    barangay_name: "Florida",
  },
  {
    barangay_id: 7825,
    municipality_id: 311,
    barangay_name: "Lasong",
  },
  {
    barangay_id: 7826,
    municipality_id: 311,
    barangay_name: "Libueg",
  },
  {
    barangay_id: 7827,
    municipality_id: 311,
    barangay_name: "Malacampa",
  },
  {
    barangay_id: 7828,
    municipality_id: 311,
    barangay_name: "Manakem",
  },
  {
    barangay_id: 7829,
    municipality_id: 311,
    barangay_name: "Manupeg",
  },
  {
    barangay_id: 7830,
    municipality_id: 311,
    barangay_name: "Marawi",
  },
  {
    barangay_id: 7831,
    municipality_id: 311,
    barangay_name: "Matubog",
  },
  {
    barangay_id: 7832,
    municipality_id: 311,
    barangay_name: "Nagrambacan",
  },
  {
    barangay_id: 7833,
    municipality_id: 311,
    barangay_name: "Nagserialan",
  },
  {
    barangay_id: 7834,
    municipality_id: 311,
    barangay_name: "Palimbo Proper",
  },
  {
    barangay_id: 7835,
    municipality_id: 311,
    barangay_name: "Palimbo-Caarosipan",
  },
  {
    barangay_id: 7836,
    municipality_id: 311,
    barangay_name: "Pao 1st",
  },
  {
    barangay_id: 7837,
    municipality_id: 311,
    barangay_name: "Pao 2nd",
  },
  {
    barangay_id: 7838,
    municipality_id: 311,
    barangay_name: "Pao 3rd",
  },
  {
    barangay_id: 7839,
    municipality_id: 311,
    barangay_name: "Papaac",
  },
  {
    barangay_id: 7840,
    municipality_id: 311,
    barangay_name: "Pindangan 1st",
  },
  {
    barangay_id: 7841,
    municipality_id: 311,
    barangay_name: "Pindangan 2nd",
  },
  {
    barangay_id: 7842,
    municipality_id: 311,
    barangay_name: "Poblacion A",
  },
  {
    barangay_id: 7843,
    municipality_id: 311,
    barangay_name: "Poblacion B",
  },
  {
    barangay_id: 7844,
    municipality_id: 311,
    barangay_name: "Poblacion C",
  },
  {
    barangay_id: 7845,
    municipality_id: 311,
    barangay_name: "Poblacion D",
  },
  {
    barangay_id: 7846,
    municipality_id: 311,
    barangay_name: "Poblacion E",
  },
  {
    barangay_id: 7847,
    municipality_id: 311,
    barangay_name: "Poblacion F",
  },
  {
    barangay_id: 7848,
    municipality_id: 311,
    barangay_name: "Poblacion G",
  },
  {
    barangay_id: 7849,
    municipality_id: 311,
    barangay_name: "Poblacion H",
  },
  {
    barangay_id: 7850,
    municipality_id: 311,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 7851,
    municipality_id: 311,
    barangay_name: "Poblacion J",
  },
  {
    barangay_id: 7852,
    municipality_id: 311,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 7853,
    municipality_id: 311,
    barangay_name: "Sawat",
  },
  {
    barangay_id: 7854,
    municipality_id: 311,
    barangay_name: "Sinilian 1st",
  },
  {
    barangay_id: 7855,
    municipality_id: 311,
    barangay_name: "Sinilian 2nd",
  },
  {
    barangay_id: 7856,
    municipality_id: 311,
    barangay_name: "Sinilian 3rd",
  },
  {
    barangay_id: 7857,
    municipality_id: 311,
    barangay_name: "Sinilian Cacalibosoan",
  },
  {
    barangay_id: 7858,
    municipality_id: 311,
    barangay_name: "Sinulatan 1st",
  },
  {
    barangay_id: 7859,
    municipality_id: 311,
    barangay_name: "Sinulatan 2nd",
  },
  {
    barangay_id: 7860,
    municipality_id: 311,
    barangay_name: "Surgui 1st",
  },
  {
    barangay_id: 7861,
    municipality_id: 311,
    barangay_name: "Surgui 2nd",
  },
  {
    barangay_id: 7862,
    municipality_id: 311,
    barangay_name: "Surgui 3rd",
  },
  {
    barangay_id: 7863,
    municipality_id: 311,
    barangay_name: "Tambugan",
  },
  {
    barangay_id: 7864,
    municipality_id: 311,
    barangay_name: "Telbang",
  },
  {
    barangay_id: 7865,
    municipality_id: 311,
    barangay_name: "Tuec",
  },
  {
    barangay_id: 7866,
    municipality_id: 312,
    barangay_name: "Aranguren",
  },
  {
    barangay_id: 7867,
    municipality_id: 312,
    barangay_name: "Bueno",
  },
  {
    barangay_id: 7885,
    municipality_id: 312,
    barangay_name: "Cristo Rey",
  },
  {
    barangay_id: 7868,
    municipality_id: 312,
    barangay_name: "Cubcub (Pob.)",
  },
  {
    barangay_id: 7869,
    municipality_id: 312,
    barangay_name: "Cutcut 1st",
  },
  {
    barangay_id: 7870,
    municipality_id: 312,
    barangay_name: "Cutcut 2nd",
  },
  {
    barangay_id: 7871,
    municipality_id: 312,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 7872,
    municipality_id: 312,
    barangay_name: "Estrada",
  },
  {
    barangay_id: 7873,
    municipality_id: 312,
    barangay_name: "Lawy",
  },
  {
    barangay_id: 7874,
    municipality_id: 312,
    barangay_name: "Manga",
  },
  {
    barangay_id: 7875,
    municipality_id: 312,
    barangay_name: "Manlapig",
  },
  {
    barangay_id: 7883,
    municipality_id: 312,
    barangay_name: "Maruglu",
  },
  {
    barangay_id: 7876,
    municipality_id: 312,
    barangay_name: "O'Donnell",
  },
  {
    barangay_id: 7884,
    municipality_id: 312,
    barangay_name: "Santa Juliana",
  },
  {
    barangay_id: 7877,
    municipality_id: 312,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 7878,
    municipality_id: 312,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 7879,
    municipality_id: 312,
    barangay_name: "Santo Domingo 1st",
  },
  {
    barangay_id: 7880,
    municipality_id: 312,
    barangay_name: "Santo Domingo 2nd",
  },
  {
    barangay_id: 7881,
    municipality_id: 312,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7882,
    municipality_id: 312,
    barangay_name: "Talaga",
  },
  {
    barangay_id: 7886,
    municipality_id: 313,
    barangay_name: "Alfonso",
  },
  {
    barangay_id: 7887,
    municipality_id: 313,
    barangay_name: "Balutu",
  },
  {
    barangay_id: 7888,
    municipality_id: 313,
    barangay_name: "Cafe",
  },
  {
    barangay_id: 7889,
    municipality_id: 313,
    barangay_name: "Calius Gueco",
  },
  {
    barangay_id: 7890,
    municipality_id: 313,
    barangay_name: "Caluluan",
  },
  {
    barangay_id: 7891,
    municipality_id: 313,
    barangay_name: "Castillo",
  },
  {
    barangay_id: 7892,
    municipality_id: 313,
    barangay_name: "Corazon de Jesus",
  },
  {
    barangay_id: 7893,
    municipality_id: 313,
    barangay_name: "Culatingan",
  },
  {
    barangay_id: 7894,
    municipality_id: 313,
    barangay_name: "Dungan",
  },
  {
    barangay_id: 7895,
    municipality_id: 313,
    barangay_name: "Dutung-A-Matas",
  },
  {
    barangay_id: 7930,
    municipality_id: 313,
    barangay_name: "Green Village",
  },
  {
    barangay_id: 7896,
    municipality_id: 313,
    barangay_name: "Lilibangan",
  },
  {
    barangay_id: 7897,
    municipality_id: 313,
    barangay_name: "Mabilog",
  },
  {
    barangay_id: 7898,
    municipality_id: 313,
    barangay_name: "Magao",
  },
  {
    barangay_id: 7899,
    municipality_id: 313,
    barangay_name: "Malupa",
  },
  {
    barangay_id: 7900,
    municipality_id: 313,
    barangay_name: "Minane",
  },
  {
    barangay_id: 7901,
    municipality_id: 313,
    barangay_name: "Panalicsian",
  },
  {
    barangay_id: 7902,
    municipality_id: 313,
    barangay_name: "Pando",
  },
  {
    barangay_id: 7903,
    municipality_id: 313,
    barangay_name: "Parang",
  },
  {
    barangay_id: 7904,
    municipality_id: 313,
    barangay_name: "Parulung",
  },
  {
    barangay_id: 7905,
    municipality_id: 313,
    barangay_name: "Pitabunan",
  },
  {
    barangay_id: 7906,
    municipality_id: 313,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7907,
    municipality_id: 313,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 7908,
    municipality_id: 313,
    barangay_name: "San Bartolome",
  },
  {
    barangay_id: 7909,
    municipality_id: 313,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 7910,
    municipality_id: 313,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 7911,
    municipality_id: 313,
    barangay_name: "San Jose (Pob.)",
  },
  {
    barangay_id: 7912,
    municipality_id: 313,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 7913,
    municipality_id: 313,
    barangay_name: "San Martin",
  },
  {
    barangay_id: 7914,
    municipality_id: 313,
    barangay_name: "San Nicolas (Pob.)",
  },
  {
    barangay_id: 7915,
    municipality_id: 313,
    barangay_name: "San Nicolas Balas",
  },
  {
    barangay_id: 7929,
    municipality_id: 313,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 7917,
    municipality_id: 313,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 7918,
    municipality_id: 313,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 7919,
    municipality_id: 313,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 7920,
    municipality_id: 313,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 7921,
    municipality_id: 313,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 7922,
    municipality_id: 313,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 7923,
    municipality_id: 313,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 7916,
    municipality_id: 313,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 7924,
    municipality_id: 313,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 7925,
    municipality_id: 313,
    barangay_name: "Talimunduc Marimla",
  },
  {
    barangay_id: 7926,
    municipality_id: 313,
    barangay_name: "Talimunduc San Miguel",
  },
  {
    barangay_id: 7927,
    municipality_id: 313,
    barangay_name: "Telabanca",
  },
  {
    barangay_id: 7928,
    municipality_id: 313,
    barangay_name: "Tinang",
  },
  {
    barangay_id: 7931,
    municipality_id: 314,
    barangay_name: "Abagon",
  },
  {
    barangay_id: 7932,
    municipality_id: 314,
    barangay_name: "Amacalan",
  },
  {
    barangay_id: 7933,
    municipality_id: 314,
    barangay_name: "Apsayan",
  },
  {
    barangay_id: 7934,
    municipality_id: 314,
    barangay_name: "Ayson",
  },
  {
    barangay_id: 7935,
    municipality_id: 314,
    barangay_name: "Bawa",
  },
  {
    barangay_id: 7936,
    municipality_id: 314,
    barangay_name: "Buenlag",
  },
  {
    barangay_id: 7937,
    municipality_id: 314,
    barangay_name: "Bularit",
  },
  {
    barangay_id: 7938,
    municipality_id: 314,
    barangay_name: "Calayaan",
  },
  {
    barangay_id: 7939,
    municipality_id: 314,
    barangay_name: "Carbonel",
  },
  {
    barangay_id: 7940,
    municipality_id: 314,
    barangay_name: "Cardona",
  },
  {
    barangay_id: 7941,
    municipality_id: 314,
    barangay_name: "Caturay",
  },
  {
    barangay_id: 7942,
    municipality_id: 314,
    barangay_name: "Danzo",
  },
  {
    barangay_id: 7943,
    municipality_id: 314,
    barangay_name: "Dicolor",
  },
  {
    barangay_id: 7944,
    municipality_id: 314,
    barangay_name: "Don Basilio",
  },
  {
    barangay_id: 7945,
    municipality_id: 314,
    barangay_name: "Luna",
  },
  {
    barangay_id: 7946,
    municipality_id: 314,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 7947,
    municipality_id: 314,
    barangay_name: "Magaspac",
  },
  {
    barangay_id: 7948,
    municipality_id: 314,
    barangay_name: "Malayep",
  },
  {
    barangay_id: 7949,
    municipality_id: 314,
    barangay_name: "Matapitap",
  },
  {
    barangay_id: 7950,
    municipality_id: 314,
    barangay_name: "Matayumcab",
  },
  {
    barangay_id: 7951,
    municipality_id: 314,
    barangay_name: "New Salem",
  },
  {
    barangay_id: 7952,
    municipality_id: 314,
    barangay_name: "Oloybuaya",
  },
  {
    barangay_id: 7953,
    municipality_id: 314,
    barangay_name: "Padapada",
  },
  {
    barangay_id: 7954,
    municipality_id: 314,
    barangay_name: "Parsolingan",
  },
  {
    barangay_id: 7955,
    municipality_id: 314,
    barangay_name: "Pinasling",
  },
  {
    barangay_id: 7956,
    municipality_id: 314,
    barangay_name: "Plastado",
  },
  {
    barangay_id: 7957,
    municipality_id: 314,
    barangay_name: "Poblacion 1",
  },
  {
    barangay_id: 7958,
    municipality_id: 314,
    barangay_name: "Poblacion 2",
  },
  {
    barangay_id: 7959,
    municipality_id: 314,
    barangay_name: "Poblacion 3",
  },
  {
    barangay_id: 7960,
    municipality_id: 314,
    barangay_name: "Quezon",
  },
  {
    barangay_id: 7961,
    municipality_id: 314,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 7962,
    municipality_id: 314,
    barangay_name: "Salapungan",
  },
  {
    barangay_id: 7963,
    municipality_id: 314,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 7964,
    municipality_id: 314,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 7965,
    municipality_id: 314,
    barangay_name: "San Bartolome",
  },
  {
    barangay_id: 7966,
    municipality_id: 314,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 7967,
    municipality_id: 314,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 7968,
    municipality_id: 314,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 7969,
    municipality_id: 314,
    barangay_name: "Sembrano",
  },
  {
    barangay_id: 7970,
    municipality_id: 314,
    barangay_name: "Singat",
  },
  {
    barangay_id: 7971,
    municipality_id: 314,
    barangay_name: "Sulipa",
  },
  {
    barangay_id: 7972,
    municipality_id: 314,
    barangay_name: "Tagumbao",
  },
  {
    barangay_id: 7973,
    municipality_id: 314,
    barangay_name: "Tangcaran",
  },
  {
    barangay_id: 7974,
    municipality_id: 314,
    barangay_name: "Villa Paz",
  },
  {
    barangay_id: 7975,
    municipality_id: 315,
    barangay_name: "Balanoy",
  },
  {
    barangay_id: 7976,
    municipality_id: 315,
    barangay_name: "Bantog-Caricutan",
  },
  {
    barangay_id: 7977,
    municipality_id: 315,
    barangay_name: "Caramutan",
  },
  {
    barangay_id: 7978,
    municipality_id: 315,
    barangay_name: "Caut",
  },
  {
    barangay_id: 7979,
    municipality_id: 315,
    barangay_name: "Comillas",
  },
  {
    barangay_id: 7980,
    municipality_id: 315,
    barangay_name: "Dumarais",
  },
  {
    barangay_id: 7981,
    municipality_id: 315,
    barangay_name: "Guevarra",
  },
  {
    barangay_id: 7982,
    municipality_id: 315,
    barangay_name: "Kapanikian",
  },
  {
    barangay_id: 7983,
    municipality_id: 315,
    barangay_name: "La Purisima",
  },
  {
    barangay_id: 7984,
    municipality_id: 315,
    barangay_name: "Lara",
  },
  {
    barangay_id: 7985,
    municipality_id: 315,
    barangay_name: "Laungcupang",
  },
  {
    barangay_id: 7986,
    municipality_id: 315,
    barangay_name: "Lomboy",
  },
  {
    barangay_id: 7987,
    municipality_id: 315,
    barangay_name: "Macalong",
  },
  {
    barangay_id: 7988,
    municipality_id: 315,
    barangay_name: "Matayumtayum",
  },
  {
    barangay_id: 7989,
    municipality_id: 315,
    barangay_name: "Mayang",
  },
  {
    barangay_id: 7990,
    municipality_id: 315,
    barangay_name: "Motrico",
  },
  {
    barangay_id: 7991,
    municipality_id: 315,
    barangay_name: "Paludpud",
  },
  {
    barangay_id: 7992,
    municipality_id: 315,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 7993,
    municipality_id: 315,
    barangay_name: "San Isidro (Pob.)",
  },
  {
    barangay_id: 7994,
    municipality_id: 315,
    barangay_name: "San Roque (Pob.)",
  },
  {
    barangay_id: 7995,
    municipality_id: 315,
    barangay_name: "Sierra",
  },
  {
    barangay_id: 7996,
    municipality_id: 316,
    barangay_name: "Ambalingit",
  },
  {
    barangay_id: 7997,
    municipality_id: 316,
    barangay_name: "Baybayaoas",
  },
  {
    barangay_id: 7998,
    municipality_id: 316,
    barangay_name: "Bigbiga",
  },
  {
    barangay_id: 7999,
    municipality_id: 316,
    barangay_name: "Binbinaca",
  },
  {
    barangay_id: 8000,
    municipality_id: 316,
    barangay_name: "Calabtangan",
  },
  {
    barangay_id: 8001,
    municipality_id: 316,
    barangay_name: "Caocaoayan",
  },
  {
    barangay_id: 8002,
    municipality_id: 316,
    barangay_name: "Carabaoan",
  },
  {
    barangay_id: 8003,
    municipality_id: 316,
    barangay_name: "Cubcub",
  },
  {
    barangay_id: 8004,
    municipality_id: 316,
    barangay_name: "Gayonggayong",
  },
  {
    barangay_id: 8005,
    municipality_id: 316,
    barangay_name: "Gossood",
  },
  {
    barangay_id: 8006,
    municipality_id: 316,
    barangay_name: "Labney",
  },
  {
    barangay_id: 8007,
    municipality_id: 316,
    barangay_name: "Mamonit",
  },
  {
    barangay_id: 8008,
    municipality_id: 316,
    barangay_name: "Maniniog",
  },
  {
    barangay_id: 8009,
    municipality_id: 316,
    barangay_name: "Mapandan",
  },
  {
    barangay_id: 8010,
    municipality_id: 316,
    barangay_name: "Nambalan",
  },
  {
    barangay_id: 8011,
    municipality_id: 316,
    barangay_name: "Pedro L. Quines",
  },
  {
    barangay_id: 8012,
    municipality_id: 316,
    barangay_name: "Pitombayog",
  },
  {
    barangay_id: 8013,
    municipality_id: 316,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 8014,
    municipality_id: 316,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 8015,
    municipality_id: 316,
    barangay_name: "Rotrottooc",
  },
  {
    barangay_id: 8016,
    municipality_id: 316,
    barangay_name: "San Bartolome",
  },
  {
    barangay_id: 8017,
    municipality_id: 316,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 8018,
    municipality_id: 316,
    barangay_name: "Taldiapan",
  },
  {
    barangay_id: 8019,
    municipality_id: 316,
    barangay_name: "Tangcarang",
  },
  {
    barangay_id: 8020,
    municipality_id: 317,
    barangay_name: "Ablang-Sapang",
  },
  {
    barangay_id: 8021,
    municipality_id: 317,
    barangay_name: "Aringin",
  },
  {
    barangay_id: 8022,
    municipality_id: 317,
    barangay_name: "Atencio",
  },
  {
    barangay_id: 8023,
    municipality_id: 317,
    barangay_name: "Banaoang East",
  },
  {
    barangay_id: 8024,
    municipality_id: 317,
    barangay_name: "Banaoang West",
  },
  {
    barangay_id: 8025,
    municipality_id: 317,
    barangay_name: "Baquero Norte",
  },
  {
    barangay_id: 8026,
    municipality_id: 317,
    barangay_name: "Baquero Sur",
  },
  {
    barangay_id: 8027,
    municipality_id: 317,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 8028,
    municipality_id: 317,
    barangay_name: "Calamay",
  },
  {
    barangay_id: 8029,
    municipality_id: 317,
    barangay_name: "Calapan",
  },
  {
    barangay_id: 8030,
    municipality_id: 317,
    barangay_name: "Camangaan East",
  },
  {
    barangay_id: 8031,
    municipality_id: 317,
    barangay_name: "Camangaan West",
  },
  {
    barangay_id: 8032,
    municipality_id: 317,
    barangay_name: "Camposanto 1 - Norte",
  },
  {
    barangay_id: 8033,
    municipality_id: 317,
    barangay_name: "Camposanto 1 - Sur",
  },
  {
    barangay_id: 8034,
    municipality_id: 317,
    barangay_name: "Camposanto 2",
  },
  {
    barangay_id: 8035,
    municipality_id: 317,
    barangay_name: "Capaoayan",
  },
  {
    barangay_id: 8036,
    municipality_id: 317,
    barangay_name: "Lapsing",
  },
  {
    barangay_id: 8037,
    municipality_id: 317,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 8038,
    municipality_id: 317,
    barangay_name: "Maluac",
  },
  {
    barangay_id: 8039,
    municipality_id: 317,
    barangay_name: "Poblacion 1",
  },
  {
    barangay_id: 8040,
    municipality_id: 317,
    barangay_name: "Poblacion 2",
  },
  {
    barangay_id: 8041,
    municipality_id: 317,
    barangay_name: "Poblacion 3",
  },
  {
    barangay_id: 8042,
    municipality_id: 317,
    barangay_name: "Poblacion 4",
  },
  {
    barangay_id: 8043,
    municipality_id: 317,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 8044,
    municipality_id: 317,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 8045,
    municipality_id: 317,
    barangay_name: "San Julian",
  },
  {
    barangay_id: 8046,
    municipality_id: 317,
    barangay_name: "San Leon",
  },
  {
    barangay_id: 8047,
    municipality_id: 317,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 8048,
    municipality_id: 317,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 8049,
    municipality_id: 317,
    barangay_name: "Santa Lucia East",
  },
  {
    barangay_id: 8050,
    municipality_id: 317,
    barangay_name: "Santa Lucia West",
  },
  {
    barangay_id: 8051,
    municipality_id: 317,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 8052,
    municipality_id: 317,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 8054,
    municipality_id: 317,
    barangay_name: "Tolega Norte",
  },
  {
    barangay_id: 8055,
    municipality_id: 317,
    barangay_name: "Tolega Sur",
  },
  {
    barangay_id: 8053,
    municipality_id: 317,
    barangay_name: "Tubectubang",
  },
  {
    barangay_id: 8056,
    municipality_id: 317,
    barangay_name: "Villa",
  },
  {
    barangay_id: 8057,
    municipality_id: 318,
    barangay_name: "Abogado",
  },
  {
    barangay_id: 8058,
    municipality_id: 318,
    barangay_name: "Acocolao",
  },
  {
    barangay_id: 8059,
    municipality_id: 318,
    barangay_name: "Aduas",
  },
  {
    barangay_id: 8060,
    municipality_id: 318,
    barangay_name: "Apulid",
  },
  {
    barangay_id: 8061,
    municipality_id: 318,
    barangay_name: "Balaoang",
  },
  {
    barangay_id: 8062,
    municipality_id: 318,
    barangay_name: "Barang",
  },
  {
    barangay_id: 8063,
    municipality_id: 318,
    barangay_name: "Brillante",
  },
  {
    barangay_id: 8064,
    municipality_id: 318,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 8065,
    municipality_id: 318,
    barangay_name: "Cabayaoasan",
  },
  {
    barangay_id: 8066,
    municipality_id: 318,
    barangay_name: "Canan",
  },
  {
    barangay_id: 8067,
    municipality_id: 318,
    barangay_name: "Carino",
  },
  {
    barangay_id: 8068,
    municipality_id: 318,
    barangay_name: "Cayanga",
  },
  {
    barangay_id: 8069,
    municipality_id: 318,
    barangay_name: "Colibangbang",
  },
  {
    barangay_id: 8070,
    municipality_id: 318,
    barangay_name: "Coral",
  },
  {
    barangay_id: 8071,
    municipality_id: 318,
    barangay_name: "Dapdap",
  },
  {
    barangay_id: 8072,
    municipality_id: 318,
    barangay_name: "Estacion",
  },
  {
    barangay_id: 8073,
    municipality_id: 318,
    barangay_name: "Mabilang",
  },
  {
    barangay_id: 8074,
    municipality_id: 318,
    barangay_name: "Manaois",
  },
  {
    barangay_id: 8075,
    municipality_id: 318,
    barangay_name: "Matalapitap",
  },
  {
    barangay_id: 8076,
    municipality_id: 318,
    barangay_name: "Nagmisaan",
  },
  {
    barangay_id: 8077,
    municipality_id: 318,
    barangay_name: "Nancamarinan",
  },
  {
    barangay_id: 8078,
    municipality_id: 318,
    barangay_name: "Nipaco",
  },
  {
    barangay_id: 8079,
    municipality_id: 318,
    barangay_name: "Patalan",
  },
  {
    barangay_id: 8080,
    municipality_id: 318,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 8081,
    municipality_id: 318,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 8082,
    municipality_id: 318,
    barangay_name: "Rang-ayan",
  },
  {
    barangay_id: 8083,
    municipality_id: 318,
    barangay_name: "Salumague",
  },
  {
    barangay_id: 8084,
    municipality_id: 318,
    barangay_name: "Samput",
  },
  {
    barangay_id: 8085,
    municipality_id: 318,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 8086,
    municipality_id: 318,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 8087,
    municipality_id: 318,
    barangay_name: "San Juan de Milla",
  },
  {
    barangay_id: 8088,
    municipality_id: 318,
    barangay_name: "Santa Ines",
  },
  {
    barangay_id: 8089,
    municipality_id: 318,
    barangay_name: "Sinigpit",
  },
  {
    barangay_id: 8090,
    municipality_id: 318,
    barangay_name: "Tablang",
  },
  {
    barangay_id: 8091,
    municipality_id: 318,
    barangay_name: "Ventenilla",
  },
  {
    barangay_id: 8092,
    municipality_id: 319,
    barangay_name: "Balite",
  },
  {
    barangay_id: 8093,
    municipality_id: 319,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 8094,
    municipality_id: 319,
    barangay_name: "Cadanglaan",
  },
  {
    barangay_id: 8095,
    municipality_id: 319,
    barangay_name: "Estipona",
  },
  {
    barangay_id: 8096,
    municipality_id: 319,
    barangay_name: "Linao",
  },
  {
    barangay_id: 8097,
    municipality_id: 319,
    barangay_name: "Maasin",
  },
  {
    barangay_id: 8098,
    municipality_id: 319,
    barangay_name: "Matindeg",
  },
  {
    barangay_id: 8099,
    municipality_id: 319,
    barangay_name: "Maungib",
  },
  {
    barangay_id: 8100,
    municipality_id: 319,
    barangay_name: "Naya",
  },
  {
    barangay_id: 8101,
    municipality_id: 319,
    barangay_name: "Nilasin 1st",
  },
  {
    barangay_id: 8102,
    municipality_id: 319,
    barangay_name: "Nilasin 2nd",
  },
  {
    barangay_id: 8103,
    municipality_id: 319,
    barangay_name: "Poblacion 1",
  },
  {
    barangay_id: 8104,
    municipality_id: 319,
    barangay_name: "Poblacion 2",
  },
  {
    barangay_id: 8105,
    municipality_id: 319,
    barangay_name: "Poblacion 3",
  },
  {
    barangay_id: 8106,
    municipality_id: 319,
    barangay_name: "Poroc",
  },
  {
    barangay_id: 8107,
    municipality_id: 319,
    barangay_name: "Singat",
  },
  {
    barangay_id: 8108,
    municipality_id: 320,
    barangay_name: "Coral-Iloco",
  },
  {
    barangay_id: 8109,
    municipality_id: 320,
    barangay_name: "Guiteb",
  },
  {
    barangay_id: 8110,
    municipality_id: 320,
    barangay_name: "Pance",
  },
  {
    barangay_id: 8111,
    municipality_id: 320,
    barangay_name: "Poblacion Center",
  },
  {
    barangay_id: 8112,
    municipality_id: 320,
    barangay_name: "Poblacion North",
  },
  {
    barangay_id: 8113,
    municipality_id: 320,
    barangay_name: "Poblacion South",
  },
  {
    barangay_id: 8114,
    municipality_id: 320,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 8115,
    municipality_id: 320,
    barangay_name: "San Raymundo",
  },
  {
    barangay_id: 8116,
    municipality_id: 320,
    barangay_name: "Toledo",
  },
  {
    barangay_id: 8117,
    municipality_id: 321,
    barangay_name: "Balloc",
  },
  {
    barangay_id: 8118,
    municipality_id: 321,
    barangay_name: "Bamban",
  },
  {
    barangay_id: 8119,
    municipality_id: 321,
    barangay_name: "Casipo",
  },
  {
    barangay_id: 8120,
    municipality_id: 321,
    barangay_name: "Catagudingan",
  },
  {
    barangay_id: 8121,
    municipality_id: 321,
    barangay_name: "Daldalayap",
  },
  {
    barangay_id: 8122,
    municipality_id: 321,
    barangay_name: "Doclong 1",
  },
  {
    barangay_id: 8123,
    municipality_id: 321,
    barangay_name: "Doclong 2",
  },
  {
    barangay_id: 8124,
    municipality_id: 321,
    barangay_name: "Maasin",
  },
  {
    barangay_id: 8125,
    municipality_id: 321,
    barangay_name: "Nagsabaran",
  },
  {
    barangay_id: 8126,
    municipality_id: 321,
    barangay_name: "Pit-ao",
  },
  {
    barangay_id: 8127,
    municipality_id: 321,
    barangay_name: "Poblacion Norte",
  },
  {
    barangay_id: 8128,
    municipality_id: 321,
    barangay_name: "Poblacion Sur",
  },
  {
    barangay_id: 8129,
    municipality_id: 322,
    barangay_name: "Colubot",
  },
  {
    barangay_id: 8130,
    municipality_id: 322,
    barangay_name: "Lanat",
  },
  {
    barangay_id: 8131,
    municipality_id: 322,
    barangay_name: "Legaspi",
  },
  {
    barangay_id: 8132,
    municipality_id: 322,
    barangay_name: "Mangandingay",
  },
  {
    barangay_id: 8133,
    municipality_id: 322,
    barangay_name: "Matarannoc",
  },
  {
    barangay_id: 8134,
    municipality_id: 322,
    barangay_name: "Pacpaco",
  },
  {
    barangay_id: 8135,
    municipality_id: 322,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 8136,
    municipality_id: 322,
    barangay_name: "Salcedo",
  },
  {
    barangay_id: 8137,
    municipality_id: 322,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 8138,
    municipality_id: 322,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 8139,
    municipality_id: 322,
    barangay_name: "San Jacinto",
  },
  {
    barangay_id: 8140,
    municipality_id: 322,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 8141,
    municipality_id: 322,
    barangay_name: "San Narciso",
  },
  {
    barangay_id: 8142,
    municipality_id: 322,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 8143,
    municipality_id: 322,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 8144,
    municipality_id: 323,
    barangay_name: "Baldios",
  },
  {
    barangay_id: 8145,
    municipality_id: 323,
    barangay_name: "Botbotones",
  },
  {
    barangay_id: 8146,
    municipality_id: 323,
    barangay_name: "Caanamongan",
  },
  {
    barangay_id: 8147,
    municipality_id: 323,
    barangay_name: "Cabaruan",
  },
  {
    barangay_id: 8148,
    municipality_id: 323,
    barangay_name: "Cabugbugan",
  },
  {
    barangay_id: 8149,
    municipality_id: 323,
    barangay_name: "Caduldulaoan",
  },
  {
    barangay_id: 8150,
    municipality_id: 323,
    barangay_name: "Calipayan",
  },
  {
    barangay_id: 8151,
    municipality_id: 323,
    barangay_name: "Macaguing",
  },
  {
    barangay_id: 8152,
    municipality_id: 323,
    barangay_name: "Nambalan",
  },
  {
    barangay_id: 8153,
    municipality_id: 323,
    barangay_name: "Padapada",
  },
  {
    barangay_id: 8154,
    municipality_id: 323,
    barangay_name: "Pilpila",
  },
  {
    barangay_id: 8155,
    municipality_id: 323,
    barangay_name: "Pinpinas",
  },
  {
    barangay_id: 8156,
    municipality_id: 323,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 8157,
    municipality_id: 323,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 8158,
    municipality_id: 323,
    barangay_name: "Pugo-Cecilio",
  },
  {
    barangay_id: 8159,
    municipality_id: 323,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 8160,
    municipality_id: 323,
    barangay_name: "San Sotero",
  },
  {
    barangay_id: 8161,
    municipality_id: 323,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 8162,
    municipality_id: 323,
    barangay_name: "Santa Ines Centro",
  },
  {
    barangay_id: 8163,
    municipality_id: 323,
    barangay_name: "Santa Ines East",
  },
  {
    barangay_id: 8164,
    municipality_id: 323,
    barangay_name: "Santa Ines West",
  },
  {
    barangay_id: 8165,
    municipality_id: 323,
    barangay_name: "Taguiporo",
  },
  {
    barangay_id: 8166,
    municipality_id: 323,
    barangay_name: "Timmaguab",
  },
  {
    barangay_id: 8167,
    municipality_id: 323,
    barangay_name: "Vargas",
  },
  {
    barangay_id: 8168,
    municipality_id: 324,
    barangay_name: "Aguso",
  },
  {
    barangay_id: 8169,
    municipality_id: 324,
    barangay_name: "Alvindia Segundo",
  },
  {
    barangay_id: 8170,
    municipality_id: 324,
    barangay_name: "Amucao",
  },
  {
    barangay_id: 8171,
    municipality_id: 324,
    barangay_name: "Armenia",
  },
  {
    barangay_id: 8172,
    municipality_id: 324,
    barangay_name: "Asturias",
  },
  {
    barangay_id: 8173,
    municipality_id: 324,
    barangay_name: "Atioc",
  },
  {
    barangay_id: 8174,
    municipality_id: 324,
    barangay_name: "Balanti",
  },
  {
    barangay_id: 8175,
    municipality_id: 324,
    barangay_name: "Balete",
  },
  {
    barangay_id: 8176,
    municipality_id: 324,
    barangay_name: "Balibago I",
  },
  {
    barangay_id: 8177,
    municipality_id: 324,
    barangay_name: "Balibago II",
  },
  {
    barangay_id: 8178,
    municipality_id: 324,
    barangay_name: "Balingcanaway",
  },
  {
    barangay_id: 8179,
    municipality_id: 324,
    barangay_name: "Banaba",
  },
  {
    barangay_id: 8180,
    municipality_id: 324,
    barangay_name: "Bantog",
  },
  {
    barangay_id: 8181,
    municipality_id: 324,
    barangay_name: "Baras-baras",
  },
  {
    barangay_id: 8182,
    municipality_id: 324,
    barangay_name: "Batang-batang",
  },
  {
    barangay_id: 8183,
    municipality_id: 324,
    barangay_name: "Binauganan",
  },
  {
    barangay_id: 8184,
    municipality_id: 324,
    barangay_name: "Bora",
  },
  {
    barangay_id: 8185,
    municipality_id: 324,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 8186,
    municipality_id: 324,
    barangay_name: "Buhilit",
  },
  {
    barangay_id: 8187,
    municipality_id: 324,
    barangay_name: "Burot",
  },
  {
    barangay_id: 8188,
    municipality_id: 324,
    barangay_name: "Calingcuan",
  },
  {
    barangay_id: 8189,
    municipality_id: 324,
    barangay_name: "Capehan",
  },
  {
    barangay_id: 8190,
    municipality_id: 324,
    barangay_name: "Carangian",
  },
  {
    barangay_id: 8243,
    municipality_id: 324,
    barangay_name: "Care",
  },
  {
    barangay_id: 8191,
    municipality_id: 324,
    barangay_name: "Central",
  },
  {
    barangay_id: 8192,
    municipality_id: 324,
    barangay_name: "Culipat",
  },
  {
    barangay_id: 8193,
    municipality_id: 324,
    barangay_name: "Cut-cut I",
  },
  {
    barangay_id: 8194,
    municipality_id: 324,
    barangay_name: "Cut-cut II",
  },
  {
    barangay_id: 8195,
    municipality_id: 324,
    barangay_name: "Dalayap",
  },
  {
    barangay_id: 8196,
    municipality_id: 324,
    barangay_name: "Dela Paz",
  },
  {
    barangay_id: 8197,
    municipality_id: 324,
    barangay_name: "Dolores",
  },
  {
    barangay_id: 8198,
    municipality_id: 324,
    barangay_name: "Laoang",
  },
  {
    barangay_id: 8199,
    municipality_id: 324,
    barangay_name: "Ligtasan",
  },
  {
    barangay_id: 8200,
    municipality_id: 324,
    barangay_name: "Lourdes",
  },
  {
    barangay_id: 8201,
    municipality_id: 324,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 8202,
    municipality_id: 324,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 8203,
    municipality_id: 324,
    barangay_name: "Maliwalo",
  },
  {
    barangay_id: 8204,
    municipality_id: 324,
    barangay_name: "Mapalacsiao",
  },
  {
    barangay_id: 8205,
    municipality_id: 324,
    barangay_name: "Mapalad",
  },
  {
    barangay_id: 8240,
    municipality_id: 324,
    barangay_name: "Matadero",
  },
  {
    barangay_id: 8206,
    municipality_id: 324,
    barangay_name: "Matatalaib",
  },
  {
    barangay_id: 8207,
    municipality_id: 324,
    barangay_name: "Paraiso",
  },
  {
    barangay_id: 8208,
    municipality_id: 324,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 8241,
    municipality_id: 324,
    barangay_name: "Salapungan",
  },
  {
    barangay_id: 8209,
    municipality_id: 324,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 8210,
    municipality_id: 324,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 8211,
    municipality_id: 324,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 8212,
    municipality_id: 324,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 8213,
    municipality_id: 324,
    barangay_name: "San Jose de Urquico",
  },
  {
    barangay_id: 8214,
    municipality_id: 324,
    barangay_name: "San Juan de Mata",
  },
  {
    barangay_id: 8215,
    municipality_id: 324,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 8216,
    municipality_id: 324,
    barangay_name: "San Manuel",
  },
  {
    barangay_id: 8217,
    municipality_id: 324,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 8218,
    municipality_id: 324,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 8219,
    municipality_id: 324,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 8220,
    municipality_id: 324,
    barangay_name: "San Pascual",
  },
  {
    barangay_id: 8221,
    municipality_id: 324,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 8222,
    municipality_id: 324,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 8223,
    municipality_id: 324,
    barangay_name: "San Sebastian",
  },
  {
    barangay_id: 8224,
    municipality_id: 324,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 8225,
    municipality_id: 324,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 8226,
    municipality_id: 324,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 8227,
    municipality_id: 324,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 8228,
    municipality_id: 324,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 8229,
    municipality_id: 324,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 8230,
    municipality_id: 324,
    barangay_name: "Sapang Maragul",
  },
  {
    barangay_id: 8231,
    municipality_id: 324,
    barangay_name: "Sapang Tagalog",
  },
  {
    barangay_id: 8232,
    municipality_id: 324,
    barangay_name: "Sepung Calzada",
  },
  {
    barangay_id: 8233,
    municipality_id: 324,
    barangay_name: "Sinait",
  },
  {
    barangay_id: 8234,
    municipality_id: 324,
    barangay_name: "Suizo",
  },
  {
    barangay_id: 8235,
    municipality_id: 324,
    barangay_name: "Tariji",
  },
  {
    barangay_id: 8236,
    municipality_id: 324,
    barangay_name: "Tibag",
  },
  {
    barangay_id: 8237,
    municipality_id: 324,
    barangay_name: "Tibagan",
  },
  {
    barangay_id: 8238,
    municipality_id: 324,
    barangay_name: "Trinidad",
  },
  {
    barangay_id: 8239,
    municipality_id: 324,
    barangay_name: "Ungot",
  },
  {
    barangay_id: 8242,
    municipality_id: 324,
    barangay_name: "Villa Bacolor",
  },
  {
    barangay_id: 8244,
    municipality_id: 325,
    barangay_name: "Baculong",
  },
  {
    barangay_id: 8245,
    municipality_id: 325,
    barangay_name: "Balayang",
  },
  {
    barangay_id: 8246,
    municipality_id: 325,
    barangay_name: "Balbaloto",
  },
  {
    barangay_id: 8247,
    municipality_id: 325,
    barangay_name: "Bangar",
  },
  {
    barangay_id: 8248,
    municipality_id: 325,
    barangay_name: "Bantog",
  },
  {
    barangay_id: 8249,
    municipality_id: 325,
    barangay_name: "Batangbatang",
  },
  {
    barangay_id: 8250,
    municipality_id: 325,
    barangay_name: "Bulo",
  },
  {
    barangay_id: 8251,
    municipality_id: 325,
    barangay_name: "Cabuluan",
  },
  {
    barangay_id: 8252,
    municipality_id: 325,
    barangay_name: "Calibungan",
  },
  {
    barangay_id: 8253,
    municipality_id: 325,
    barangay_name: "Canarem",
  },
  {
    barangay_id: 8254,
    municipality_id: 325,
    barangay_name: "Cruz",
  },
  {
    barangay_id: 8255,
    municipality_id: 325,
    barangay_name: "Lalapac",
  },
  {
    barangay_id: 8256,
    municipality_id: 325,
    barangay_name: "Maluid",
  },
  {
    barangay_id: 8257,
    municipality_id: 325,
    barangay_name: "Mangolago",
  },
  {
    barangay_id: 8258,
    municipality_id: 325,
    barangay_name: "Masalasa",
  },
  {
    barangay_id: 8259,
    municipality_id: 325,
    barangay_name: "Palacpalac",
  },
  {
    barangay_id: 8260,
    municipality_id: 325,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 8261,
    municipality_id: 325,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 8262,
    municipality_id: 325,
    barangay_name: "San Fernando (Pob.)",
  },
  {
    barangay_id: 8263,
    municipality_id: 325,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 8264,
    municipality_id: 325,
    barangay_name: "San Gavino (Pob.)",
  },
  {
    barangay_id: 8265,
    municipality_id: 325,
    barangay_name: "San Jacinto",
  },
  {
    barangay_id: 8266,
    municipality_id: 325,
    barangay_name: "San Nicolas (Pob.)",
  },
  {
    barangay_id: 8267,
    municipality_id: 325,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 8268,
    municipality_id: 325,
    barangay_name: "Santa Barbara",
  },
  {
    barangay_id: 8269,
    municipality_id: 325,
    barangay_name: "Santa Lucia (Pob.)",
  },
  {
    barangay_id: 8270,
    municipality_id: 326,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 8271,
    municipality_id: 326,
    barangay_name: "David",
  },
  {
    barangay_id: 8272,
    municipality_id: 326,
    barangay_name: "Iba",
  },
  {
    barangay_id: 8273,
    municipality_id: 326,
    barangay_name: "Labney",
  },
  {
    barangay_id: 8274,
    municipality_id: 326,
    barangay_name: "Lawacamulag",
  },
  {
    barangay_id: 8275,
    municipality_id: 326,
    barangay_name: "Lubigan",
  },
  {
    barangay_id: 8276,
    municipality_id: 326,
    barangay_name: "Maamot",
  },
  {
    barangay_id: 8277,
    municipality_id: 326,
    barangay_name: "Mababanaba",
  },
  {
    barangay_id: 8278,
    municipality_id: 326,
    barangay_name: "Moriones",
  },
  {
    barangay_id: 8279,
    municipality_id: 326,
    barangay_name: "Pao",
  },
  {
    barangay_id: 8280,
    municipality_id: 326,
    barangay_name: "San Juan de Valdez",
  },
  {
    barangay_id: 8281,
    municipality_id: 326,
    barangay_name: "Sula",
  },
  {
    barangay_id: 8282,
    municipality_id: 326,
    barangay_name: "Villa Aglipay",
  },
  {
    barangay_id: 8305,
    municipality_id: 327,
    barangay_name: "Bancal",
  },
  {
    barangay_id: 8283,
    municipality_id: 327,
    barangay_name: "Bangan",
  },
  {
    barangay_id: 8284,
    municipality_id: 327,
    barangay_name: "Batonlapoc",
  },
  {
    barangay_id: 8306,
    municipality_id: 327,
    barangay_name: "Belbel",
  },
  {
    barangay_id: 8285,
    municipality_id: 327,
    barangay_name: "Beneg",
  },
  {
    barangay_id: 8307,
    municipality_id: 327,
    barangay_name: "Binuclutan",
  },
  {
    barangay_id: 8308,
    municipality_id: 327,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 8309,
    municipality_id: 327,
    barangay_name: "Cabatuan",
  },
  {
    barangay_id: 8286,
    municipality_id: 327,
    barangay_name: "Capayawan",
  },
  {
    barangay_id: 8287,
    municipality_id: 327,
    barangay_name: "Carael",
  },
  {
    barangay_id: 8288,
    municipality_id: 327,
    barangay_name: "Danacbunga",
  },
  {
    barangay_id: 8289,
    municipality_id: 327,
    barangay_name: "Maguisguis",
  },
  {
    barangay_id: 8310,
    municipality_id: 327,
    barangay_name: "Malomboy",
  },
  {
    barangay_id: 8290,
    municipality_id: 327,
    barangay_name: "Mambog",
  },
  {
    barangay_id: 8291,
    municipality_id: 327,
    barangay_name: "Moraza",
  },
  {
    barangay_id: 8311,
    municipality_id: 327,
    barangay_name: "Nacolcol",
  },
  {
    barangay_id: 8312,
    municipality_id: 327,
    barangay_name: "Owaog-Nibloc",
  },
  {
    barangay_id: 8292,
    municipality_id: 327,
    barangay_name: "Paco (Pob.)",
  },
  {
    barangay_id: 8313,
    municipality_id: 327,
    barangay_name: "Palis",
  },
  {
    barangay_id: 8293,
    municipality_id: 327,
    barangay_name: "Panan",
  },
  {
    barangay_id: 8294,
    municipality_id: 327,
    barangay_name: "Parel",
  },
  {
    barangay_id: 8295,
    municipality_id: 327,
    barangay_name: "Paudpod",
  },
  {
    barangay_id: 8296,
    municipality_id: 327,
    barangay_name: "Poonbato",
  },
  {
    barangay_id: 8297,
    municipality_id: 327,
    barangay_name: "Porac",
  },
  {
    barangay_id: 8298,
    municipality_id: 327,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 8299,
    municipality_id: 327,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 8300,
    municipality_id: 327,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 8301,
    municipality_id: 327,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 8302,
    municipality_id: 327,
    barangay_name: "Tampo (Pob.)",
  },
  {
    barangay_id: 8303,
    municipality_id: 327,
    barangay_name: "Taugtog",
  },
  {
    barangay_id: 8304,
    municipality_id: 327,
    barangay_name: "Villar",
  },
  {
    barangay_id: 8314,
    municipality_id: 328,
    barangay_name: "Anonang",
  },
  {
    barangay_id: 8315,
    municipality_id: 328,
    barangay_name: "Apo-apo",
  },
  {
    barangay_id: 8316,
    municipality_id: 328,
    barangay_name: "Arew",
  },
  {
    barangay_id: 8317,
    municipality_id: 328,
    barangay_name: "Banuambayo (Pob.)",
  },
  {
    barangay_id: 8318,
    municipality_id: 328,
    barangay_name: "Cadmang-Reserva",
  },
  {
    barangay_id: 8319,
    municipality_id: 328,
    barangay_name: "Camiling",
  },
  {
    barangay_id: 8320,
    municipality_id: 328,
    barangay_name: "Casabaan",
  },
  {
    barangay_id: 8322,
    municipality_id: 328,
    barangay_name: "Del Carmen (Pob.)",
  },
  {
    barangay_id: 8321,
    municipality_id: 328,
    barangay_name: "Dolores (Pob.)",
  },
  {
    barangay_id: 8335,
    municipality_id: 328,
    barangay_name: "Felmida-Diaz",
  },
  {
    barangay_id: 8323,
    municipality_id: 328,
    barangay_name: "Laoag",
  },
  {
    barangay_id: 8324,
    municipality_id: 328,
    barangay_name: "Lomboy",
  },
  {
    barangay_id: 8325,
    municipality_id: 328,
    barangay_name: "Longos",
  },
  {
    barangay_id: 8326,
    municipality_id: 328,
    barangay_name: "Mabanglit",
  },
  {
    barangay_id: 8327,
    municipality_id: 328,
    barangay_name: "New San Juan",
  },
  {
    barangay_id: 8328,
    municipality_id: 328,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 8329,
    municipality_id: 328,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 8330,
    municipality_id: 328,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 8331,
    municipality_id: 328,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 8332,
    municipality_id: 328,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 8333,
    municipality_id: 328,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 8334,
    municipality_id: 328,
    barangay_name: "Tondo",
  },
  {
    barangay_id: 8336,
    municipality_id: 329,
    barangay_name: "Babancal",
  },
  {
    barangay_id: 8337,
    municipality_id: 329,
    barangay_name: "Binabalian",
  },
  {
    barangay_id: 8338,
    municipality_id: 329,
    barangay_name: "Catol",
  },
  {
    barangay_id: 8339,
    municipality_id: 329,
    barangay_name: "Dampay",
  },
  {
    barangay_id: 8340,
    municipality_id: 329,
    barangay_name: "Lauis",
  },
  {
    barangay_id: 8341,
    municipality_id: 329,
    barangay_name: "Libertador",
  },
  {
    barangay_id: 8342,
    municipality_id: 329,
    barangay_name: "Malabon",
  },
  {
    barangay_id: 8343,
    municipality_id: 329,
    barangay_name: "Malimanga",
  },
  {
    barangay_id: 8344,
    municipality_id: 329,
    barangay_name: "Pamibian",
  },
  {
    barangay_id: 8345,
    municipality_id: 329,
    barangay_name: "Panayonan",
  },
  {
    barangay_id: 8346,
    municipality_id: 329,
    barangay_name: "Pinagrealan",
  },
  {
    barangay_id: 8347,
    municipality_id: 329,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 8348,
    municipality_id: 329,
    barangay_name: "Sinabacan",
  },
  {
    barangay_id: 8349,
    municipality_id: 329,
    barangay_name: "Taposo",
  },
  {
    barangay_id: 8350,
    municipality_id: 329,
    barangay_name: "Uacon",
  },
  {
    barangay_id: 8351,
    municipality_id: 329,
    barangay_name: "Yamot",
  },
  {
    barangay_id: 8352,
    municipality_id: 330,
    barangay_name: "Balaybay",
  },
  {
    barangay_id: 8353,
    municipality_id: 330,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 8354,
    municipality_id: 330,
    barangay_name: "Del Pilar",
  },
  {
    barangay_id: 8355,
    municipality_id: 330,
    barangay_name: "Looc",
  },
  {
    barangay_id: 8356,
    municipality_id: 330,
    barangay_name: "Magsaysay",
  },
  {
    barangay_id: 8357,
    municipality_id: 330,
    barangay_name: "Nagbayan",
  },
  {
    barangay_id: 8358,
    municipality_id: 330,
    barangay_name: "Nagbunga",
  },
  {
    barangay_id: 8359,
    municipality_id: 330,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 8360,
    municipality_id: 330,
    barangay_name: "San Jose (Pob.)",
  },
  {
    barangay_id: 8361,
    municipality_id: 330,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 8362,
    municipality_id: 330,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 8363,
    municipality_id: 330,
    barangay_name: "San Pablo (Pob.)",
  },
  {
    barangay_id: 8364,
    municipality_id: 330,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 8365,
    municipality_id: 330,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 8366,
    municipality_id: 331,
    barangay_name: "Amungan",
  },
  {
    barangay_id: 8369,
    municipality_id: 331,
    barangay_name: "Bangantalinga",
  },
  {
    barangay_id: 8372,
    municipality_id: 331,
    barangay_name: "Dirita-Baloguen",
  },
  {
    barangay_id: 8374,
    municipality_id: 331,
    barangay_name: "Lipay-Dingin-Panibuatan",
  },
  {
    barangay_id: 8375,
    municipality_id: 331,
    barangay_name: "Palanginan",
  },
  {
    barangay_id: 8377,
    municipality_id: 331,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 8378,
    municipality_id: 331,
    barangay_name: "Santa Barbara",
  },
  {
    barangay_id: 8379,
    municipality_id: 331,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 8373,
    municipality_id: 331,
    barangay_name: "Zone 1 Pob.",
  },
  {
    barangay_id: 8367,
    municipality_id: 331,
    barangay_name: "Zone 2 Pob.",
  },
  {
    barangay_id: 8371,
    municipality_id: 331,
    barangay_name: "Zone 3 Pob.",
  },
  {
    barangay_id: 8376,
    municipality_id: 331,
    barangay_name: "Zone 4 Pob.",
  },
  {
    barangay_id: 8368,
    municipality_id: 331,
    barangay_name: "Zone 5 Pob.",
  },
  {
    barangay_id: 8370,
    municipality_id: 331,
    barangay_name: "Zone 6 Pob.",
  },
  {
    barangay_id: 8380,
    municipality_id: 332,
    barangay_name: "Baloganon",
  },
  {
    barangay_id: 8381,
    municipality_id: 332,
    barangay_name: "Bamban",
  },
  {
    barangay_id: 8382,
    municipality_id: 332,
    barangay_name: "Bani",
  },
  {
    barangay_id: 8383,
    municipality_id: 332,
    barangay_name: "Collat",
  },
  {
    barangay_id: 8384,
    municipality_id: 332,
    barangay_name: "Inhobol",
  },
  {
    barangay_id: 8385,
    municipality_id: 332,
    barangay_name: "North Poblacion",
  },
  {
    barangay_id: 8386,
    municipality_id: 332,
    barangay_name: "San Lorenzo",
  },
  {
    barangay_id: 8387,
    municipality_id: 332,
    barangay_name: "San Salvador",
  },
  {
    barangay_id: 8388,
    municipality_id: 332,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 8389,
    municipality_id: 332,
    barangay_name: "Santo Rosario",
  },
  {
    barangay_id: 8390,
    municipality_id: 332,
    barangay_name: "South Poblacion",
  },
  {
    barangay_id: 8391,
    municipality_id: 332,
    barangay_name: "Taltal",
  },
  {
    barangay_id: 8392,
    municipality_id: 332,
    barangay_name: "Tapuac",
  },
  {
    barangay_id: 8393,
    municipality_id: 333,
    barangay_name: "Asinan",
  },
  {
    barangay_id: 8394,
    municipality_id: 333,
    barangay_name: "Banicain",
  },
  {
    barangay_id: 8395,
    municipality_id: 333,
    barangay_name: "Barreto",
  },
  {
    barangay_id: 8396,
    municipality_id: 333,
    barangay_name: "East Bajac-bajac",
  },
  {
    barangay_id: 8397,
    municipality_id: 333,
    barangay_name: "East Tapinac",
  },
  {
    barangay_id: 8398,
    municipality_id: 333,
    barangay_name: "Gordon Heights",
  },
  {
    barangay_id: 8399,
    municipality_id: 333,
    barangay_name: "Kalaklan",
  },
  {
    barangay_id: 8401,
    municipality_id: 333,
    barangay_name: "Mabayuan",
  },
  {
    barangay_id: 8402,
    municipality_id: 333,
    barangay_name: "New Cabalan",
  },
  {
    barangay_id: 8403,
    municipality_id: 333,
    barangay_name: "New Ilalim",
  },
  {
    barangay_id: 8404,
    municipality_id: 333,
    barangay_name: "New Kababae",
  },
  {
    barangay_id: 8400,
    municipality_id: 333,
    barangay_name: "New Kalalake",
  },
  {
    barangay_id: 8409,
    municipality_id: 333,
    barangay_name: "Old Cabalan",
  },
  {
    barangay_id: 8405,
    municipality_id: 333,
    barangay_name: "Pag-asa",
  },
  {
    barangay_id: 8406,
    municipality_id: 333,
    barangay_name: "Santa Rita",
  },
  {
    barangay_id: 8407,
    municipality_id: 333,
    barangay_name: "West Bajac-bajac",
  },
  {
    barangay_id: 8408,
    municipality_id: 333,
    barangay_name: "West Tapinac",
  },
  {
    barangay_id: 8410,
    municipality_id: 334,
    barangay_name: "Alwa",
  },
  {
    barangay_id: 8411,
    municipality_id: 334,
    barangay_name: "Bato",
  },
  {
    barangay_id: 8412,
    municipality_id: 334,
    barangay_name: "Bulawen",
  },
  {
    barangay_id: 8413,
    municipality_id: 334,
    barangay_name: "Cauyan",
  },
  {
    barangay_id: 8422,
    municipality_id: 334,
    barangay_name: "East Poblacion",
  },
  {
    barangay_id: 8414,
    municipality_id: 334,
    barangay_name: "Garreta",
  },
  {
    barangay_id: 8415,
    municipality_id: 334,
    barangay_name: "Libaba",
  },
  {
    barangay_id: 8416,
    municipality_id: 334,
    barangay_name: "Liozon",
  },
  {
    barangay_id: 8417,
    municipality_id: 334,
    barangay_name: "Lipay",
  },
  {
    barangay_id: 8418,
    municipality_id: 334,
    barangay_name: "Locloc",
  },
  {
    barangay_id: 8419,
    municipality_id: 334,
    barangay_name: "Macarang",
  },
  {
    barangay_id: 8420,
    municipality_id: 334,
    barangay_name: "Magalawa",
  },
  {
    barangay_id: 8421,
    municipality_id: 334,
    barangay_name: "Pangolingan",
  },
  {
    barangay_id: 8424,
    municipality_id: 334,
    barangay_name: "Salaza",
  },
  {
    barangay_id: 8425,
    municipality_id: 334,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 8426,
    municipality_id: 334,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 8427,
    municipality_id: 334,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 8428,
    municipality_id: 334,
    barangay_name: "Tition",
  },
  {
    barangay_id: 8423,
    municipality_id: 334,
    barangay_name: "West Poblacion",
  },
  {
    barangay_id: 8429,
    municipality_id: 335,
    barangay_name: "Angeles",
  },
  {
    barangay_id: 8430,
    municipality_id: 335,
    barangay_name: "Antipolo (Pob.)",
  },
  {
    barangay_id: 8431,
    municipality_id: 335,
    barangay_name: "Burgos (Pob.)",
  },
  {
    barangay_id: 8433,
    municipality_id: 335,
    barangay_name: "East Dirita",
  },
  {
    barangay_id: 8434,
    municipality_id: 335,
    barangay_name: "Luna (Pob.)",
  },
  {
    barangay_id: 8435,
    municipality_id: 335,
    barangay_name: "Pundaquit",
  },
  {
    barangay_id: 8442,
    municipality_id: 335,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 8436,
    municipality_id: 335,
    barangay_name: "San Esteban",
  },
  {
    barangay_id: 8437,
    municipality_id: 335,
    barangay_name: "San Gregorio (Pob.)",
  },
  {
    barangay_id: 8438,
    municipality_id: 335,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 8439,
    municipality_id: 335,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 8440,
    municipality_id: 335,
    barangay_name: "San Nicolas (Pob.)",
  },
  {
    barangay_id: 8441,
    municipality_id: 335,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 8432,
    municipality_id: 335,
    barangay_name: "West Dirita",
  },
  {
    barangay_id: 8443,
    municipality_id: 336,
    barangay_name: "Amagna (Pob.)",
  },
  {
    barangay_id: 8444,
    municipality_id: 336,
    barangay_name: "Apostol (Pob.)",
  },
  {
    barangay_id: 8445,
    municipality_id: 336,
    barangay_name: "Balincaguing",
  },
  {
    barangay_id: 8446,
    municipality_id: 336,
    barangay_name: "Farañal (Pob.)",
  },
  {
    barangay_id: 8447,
    municipality_id: 336,
    barangay_name: "Feria (Pob.)",
  },
  {
    barangay_id: 8448,
    municipality_id: 336,
    barangay_name: "Maloma",
  },
  {
    barangay_id: 8449,
    municipality_id: 336,
    barangay_name: "Manglicmot (Pob.)",
  },
  {
    barangay_id: 8450,
    municipality_id: 336,
    barangay_name: "Rosete (Pob.)",
  },
  {
    barangay_id: 8451,
    municipality_id: 336,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 8452,
    municipality_id: 336,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 8453,
    municipality_id: 336,
    barangay_name: "Sindol",
  },
  {
    barangay_id: 8454,
    municipality_id: 337,
    barangay_name: "Aglao",
  },
  {
    barangay_id: 8455,
    municipality_id: 337,
    barangay_name: "Buhawen",
  },
  {
    barangay_id: 8456,
    municipality_id: 337,
    barangay_name: "Burgos (Pob.)",
  },
  {
    barangay_id: 8470,
    municipality_id: 337,
    barangay_name: "Central (Pob.)",
  },
  {
    barangay_id: 8457,
    municipality_id: 337,
    barangay_name: "Consuelo Norte",
  },
  {
    barangay_id: 8458,
    municipality_id: 337,
    barangay_name: "Consuelo Sur (Pob.)",
  },
  {
    barangay_id: 8459,
    municipality_id: 337,
    barangay_name: "La Paz (Pob.)",
  },
  {
    barangay_id: 8460,
    municipality_id: 337,
    barangay_name: "Laoag",
  },
  {
    barangay_id: 8461,
    municipality_id: 337,
    barangay_name: "Linasin",
  },
  {
    barangay_id: 8462,
    municipality_id: 337,
    barangay_name: "Linusungan",
  },
  {
    barangay_id: 8463,
    municipality_id: 337,
    barangay_name: "Lucero (Pob.)",
  },
  {
    barangay_id: 8464,
    municipality_id: 337,
    barangay_name: "Nagbunga",
  },
  {
    barangay_id: 8471,
    municipality_id: 337,
    barangay_name: "Rabanes",
  },
  {
    barangay_id: 8465,
    municipality_id: 337,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 8466,
    municipality_id: 337,
    barangay_name: "San Guillermo (Pob.)",
  },
  {
    barangay_id: 8467,
    municipality_id: 337,
    barangay_name: "San Isidro (Pob.)",
  },
  {
    barangay_id: 8468,
    municipality_id: 337,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 8469,
    municipality_id: 337,
    barangay_name: "Santa Fe",
  },
  {
    barangay_id: 8472,
    municipality_id: 338,
    barangay_name: "Alusiis",
  },
  {
    barangay_id: 8473,
    municipality_id: 338,
    barangay_name: "Beddeng",
  },
  {
    barangay_id: 8474,
    municipality_id: 338,
    barangay_name: "Candelaria (Pob.)",
  },
  {
    barangay_id: 8475,
    municipality_id: 338,
    barangay_name: "Dallipawen",
  },
  {
    barangay_id: 8476,
    municipality_id: 338,
    barangay_name: "Grullo",
  },
  {
    barangay_id: 8477,
    municipality_id: 338,
    barangay_name: "La Paz",
  },
  {
    barangay_id: 8478,
    municipality_id: 338,
    barangay_name: "Libertad (Pob.)",
  },
  {
    barangay_id: 8479,
    municipality_id: 338,
    barangay_name: "Namatacan",
  },
  {
    barangay_id: 8480,
    municipality_id: 338,
    barangay_name: "Natividad (Pob.)",
  },
  {
    barangay_id: 8488,
    municipality_id: 338,
    barangay_name: "Omaya",
  },
  {
    barangay_id: 8481,
    municipality_id: 338,
    barangay_name: "Paite",
  },
  {
    barangay_id: 8482,
    municipality_id: 338,
    barangay_name: "Patrocinio (Pob.)",
  },
  {
    barangay_id: 8483,
    municipality_id: 338,
    barangay_name: "San Jose (Pob.)",
  },
  {
    barangay_id: 8484,
    municipality_id: 338,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 8485,
    municipality_id: 338,
    barangay_name: "San Pascual (Pob.)",
  },
  {
    barangay_id: 8486,
    municipality_id: 338,
    barangay_name: "San Rafael (Pob.)",
  },
  {
    barangay_id: 8487,
    municipality_id: 338,
    barangay_name: "Siminublan",
  },
  {
    barangay_id: 8489,
    municipality_id: 339,
    barangay_name: "Babuyan",
  },
  {
    barangay_id: 8491,
    municipality_id: 339,
    barangay_name: "Bangcol",
  },
  {
    barangay_id: 8492,
    municipality_id: 339,
    barangay_name: "Bayto",
  },
  {
    barangay_id: 8493,
    municipality_id: 339,
    barangay_name: "Biay",
  },
  {
    barangay_id: 8490,
    municipality_id: 339,
    barangay_name: "Bolitoc",
  },
  {
    barangay_id: 8513,
    municipality_id: 339,
    barangay_name: "Bulawon",
  },
  {
    barangay_id: 8494,
    municipality_id: 339,
    barangay_name: "Canaynayan",
  },
  {
    barangay_id: 8495,
    municipality_id: 339,
    barangay_name: "Gama",
  },
  {
    barangay_id: 8496,
    municipality_id: 339,
    barangay_name: "Guinabon",
  },
  {
    barangay_id: 8497,
    municipality_id: 339,
    barangay_name: "Guisguis",
  },
  {
    barangay_id: 8498,
    municipality_id: 339,
    barangay_name: "Lipay",
  },
  {
    barangay_id: 8499,
    municipality_id: 339,
    barangay_name: "Lomboy",
  },
  {
    barangay_id: 8500,
    municipality_id: 339,
    barangay_name: "Lucapon North",
  },
  {
    barangay_id: 8501,
    municipality_id: 339,
    barangay_name: "Lucapon South",
  },
  {
    barangay_id: 8502,
    municipality_id: 339,
    barangay_name: "Malabago",
  },
  {
    barangay_id: 8503,
    municipality_id: 339,
    barangay_name: "Naulo",
  },
  {
    barangay_id: 8505,
    municipality_id: 339,
    barangay_name: "Pagatpat",
  },
  {
    barangay_id: 8506,
    municipality_id: 339,
    barangay_name: "Pamonoran",
  },
  {
    barangay_id: 8504,
    municipality_id: 339,
    barangay_name: "Poblacion North",
  },
  {
    barangay_id: 8509,
    municipality_id: 339,
    barangay_name: "Poblacion South",
  },
  {
    barangay_id: 8507,
    municipality_id: 339,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 8508,
    municipality_id: 339,
    barangay_name: "San Fernando",
  },
  {
    barangay_id: 8510,
    municipality_id: 339,
    barangay_name: "Tabalong",
  },
  {
    barangay_id: 8511,
    municipality_id: 339,
    barangay_name: "Tubotubo North",
  },
  {
    barangay_id: 8512,
    municipality_id: 339,
    barangay_name: "Tubotubo South",
  },
  {
    barangay_id: 8514,
    municipality_id: 340,
    barangay_name: "Aningway Sacatihan",
  },
  {
    barangay_id: 8515,
    municipality_id: 340,
    barangay_name: "Asinan Poblacion",
  },
  {
    barangay_id: 8516,
    municipality_id: 340,
    barangay_name: "Asinan Proper",
  },
  {
    barangay_id: 8517,
    municipality_id: 340,
    barangay_name: "Baraca-Camachile (Pob.)",
  },
  {
    barangay_id: 8518,
    municipality_id: 340,
    barangay_name: "Batiawan",
  },
  {
    barangay_id: 8519,
    municipality_id: 340,
    barangay_name: "Calapacuan",
  },
  {
    barangay_id: 8520,
    municipality_id: 340,
    barangay_name: "Calapandayan (Pob.)",
  },
  {
    barangay_id: 8521,
    municipality_id: 340,
    barangay_name: "Cawag",
  },
  {
    barangay_id: 8522,
    municipality_id: 340,
    barangay_name: "Ilwas (Pob.)",
  },
  {
    barangay_id: 8523,
    municipality_id: 340,
    barangay_name: "Mangan-Vaca",
  },
  {
    barangay_id: 8524,
    municipality_id: 340,
    barangay_name: "Matain",
  },
  {
    barangay_id: 8525,
    municipality_id: 340,
    barangay_name: "Naugsol",
  },
  {
    barangay_id: 8526,
    municipality_id: 340,
    barangay_name: "Pamatawan",
  },
  {
    barangay_id: 8527,
    municipality_id: 340,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 8528,
    municipality_id: 340,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 8529,
    municipality_id: 340,
    barangay_name: "Wawandue (Pob.)",
  },
  {
    barangay_id: 8530,
    municipality_id: 341,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 8531,
    municipality_id: 341,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 8532,
    municipality_id: 341,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 8533,
    municipality_id: 341,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 8534,
    municipality_id: 341,
    barangay_name: "Barangay V (Pob.)",
  },
  {
    barangay_id: 8535,
    municipality_id: 341,
    barangay_name: "Buhangin",
  },
  {
    barangay_id: 8536,
    municipality_id: 341,
    barangay_name: "Calabuanan",
  },
  {
    barangay_id: 8537,
    municipality_id: 341,
    barangay_name: "Obligacion",
  },
  {
    barangay_id: 8538,
    municipality_id: 341,
    barangay_name: "Pingit",
  },
  {
    barangay_id: 8539,
    municipality_id: 341,
    barangay_name: "Reserva",
  },
  {
    barangay_id: 8540,
    municipality_id: 341,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 8541,
    municipality_id: 341,
    barangay_name: "Suclayin",
  },
  {
    barangay_id: 8542,
    municipality_id: 341,
    barangay_name: "Zabali",
  },
  {
    barangay_id: 8543,
    municipality_id: 342,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 8544,
    municipality_id: 342,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 8545,
    municipality_id: 342,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 8546,
    municipality_id: 342,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 8547,
    municipality_id: 342,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 8548,
    municipality_id: 342,
    barangay_name: "Barangay 6 (Pob.)",
  },
  {
    barangay_id: 8549,
    municipality_id: 342,
    barangay_name: "Barangay 7 (Pob.)",
  },
  {
    barangay_id: 8550,
    municipality_id: 342,
    barangay_name: "Barangay 8 (Pob.)",
  },
  {
    barangay_id: 8561,
    municipality_id: 342,
    barangay_name: "Bianuan",
  },
  {
    barangay_id: 8551,
    municipality_id: 342,
    barangay_name: "Calabgan",
  },
  {
    barangay_id: 8552,
    municipality_id: 342,
    barangay_name: "Calangcuasan",
  },
  {
    barangay_id: 8553,
    municipality_id: 342,
    barangay_name: "Calantas",
  },
  {
    barangay_id: 8562,
    municipality_id: 342,
    barangay_name: "Cozo",
  },
  {
    barangay_id: 8554,
    municipality_id: 342,
    barangay_name: "Culat",
  },
  {
    barangay_id: 8563,
    municipality_id: 342,
    barangay_name: "Dibacong",
  },
  {
    barangay_id: 8555,
    municipality_id: 342,
    barangay_name: "Dibet",
  },
  {
    barangay_id: 8564,
    municipality_id: 342,
    barangay_name: "Ditinagyan",
  },
  {
    barangay_id: 8556,
    municipality_id: 342,
    barangay_name: "Esperanza",
  },
  {
    barangay_id: 8565,
    municipality_id: 342,
    barangay_name: "Esteves",
  },
  {
    barangay_id: 8557,
    municipality_id: 342,
    barangay_name: "Lual",
  },
  {
    barangay_id: 8558,
    municipality_id: 342,
    barangay_name: "Marikit",
  },
  {
    barangay_id: 8566,
    municipality_id: 342,
    barangay_name: "San Ildefonso",
  },
  {
    barangay_id: 8559,
    municipality_id: 342,
    barangay_name: "Tabas",
  },
  {
    barangay_id: 8560,
    municipality_id: 342,
    barangay_name: "Tinib",
  },
  {
    barangay_id: 8567,
    municipality_id: 343,
    barangay_name: "Diagyan",
  },
  {
    barangay_id: 8568,
    municipality_id: 343,
    barangay_name: "Dicabasan",
  },
  {
    barangay_id: 8569,
    municipality_id: 343,
    barangay_name: "Dilaguidi",
  },
  {
    barangay_id: 8570,
    municipality_id: 343,
    barangay_name: "Dimaseset",
  },
  {
    barangay_id: 8571,
    municipality_id: 343,
    barangay_name: "Diniog",
  },
  {
    barangay_id: 8577,
    municipality_id: 343,
    barangay_name: "Esperanza",
  },
  {
    barangay_id: 8572,
    municipality_id: 343,
    barangay_name: "Lawang",
  },
  {
    barangay_id: 8573,
    municipality_id: 343,
    barangay_name: "Maligaya (Pob.)",
  },
  {
    barangay_id: 8574,
    municipality_id: 343,
    barangay_name: "Manggitahan",
  },
  {
    barangay_id: 8575,
    municipality_id: 343,
    barangay_name: "Masagana (Pob.)",
  },
  {
    barangay_id: 8576,
    municipality_id: 343,
    barangay_name: "Ura",
  },
  {
    barangay_id: 8578,
    municipality_id: 344,
    barangay_name: "Abuleg",
  },
  {
    barangay_id: 8582,
    municipality_id: 344,
    barangay_name: "Dibaraybay",
  },
  {
    barangay_id: 8583,
    municipality_id: 344,
    barangay_name: "Ditawini",
  },
  {
    barangay_id: 8584,
    municipality_id: 344,
    barangay_name: "Mapalad",
  },
  {
    barangay_id: 8581,
    municipality_id: 344,
    barangay_name: "Nipoo",
  },
  {
    barangay_id: 8585,
    municipality_id: 344,
    barangay_name: "Paleg",
  },
  {
    barangay_id: 8586,
    municipality_id: 344,
    barangay_name: "Simbahan",
  },
  {
    barangay_id: 8579,
    municipality_id: 344,
    barangay_name: "Zone I (Pob.)",
  },
  {
    barangay_id: 8580,
    municipality_id: 344,
    barangay_name: "Zone II (Pob.)",
  },
  {
    barangay_id: 8587,
    municipality_id: 345,
    barangay_name: "Aplaya",
  },
  {
    barangay_id: 8588,
    municipality_id: 345,
    barangay_name: "Butas Na Bato",
  },
  {
    barangay_id: 8589,
    municipality_id: 345,
    barangay_name: "Cabog",
  },
  {
    barangay_id: 8590,
    municipality_id: 345,
    barangay_name: "Caragsacan",
  },
  {
    barangay_id: 8591,
    municipality_id: 345,
    barangay_name: "Davildavilan",
  },
  {
    barangay_id: 8592,
    municipality_id: 345,
    barangay_name: "Dikapanikian",
  },
  {
    barangay_id: 8593,
    municipality_id: 345,
    barangay_name: "Ibona",
  },
  {
    barangay_id: 8594,
    municipality_id: 345,
    barangay_name: "Paltic",
  },
  {
    barangay_id: 8595,
    municipality_id: 345,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 8596,
    municipality_id: 345,
    barangay_name: "Tanawan",
  },
  {
    barangay_id: 8597,
    municipality_id: 345,
    barangay_name: "Umiray",
  },
  {
    barangay_id: 8598,
    municipality_id: 346,
    barangay_name: "Bayabas",
  },
  {
    barangay_id: 8600,
    municipality_id: 346,
    barangay_name: "Borlongan",
  },
  {
    barangay_id: 8599,
    municipality_id: 346,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 8601,
    municipality_id: 346,
    barangay_name: "Calaocan",
  },
  {
    barangay_id: 8622,
    municipality_id: 346,
    barangay_name: "Diamanen",
  },
  {
    barangay_id: 8602,
    municipality_id: 346,
    barangay_name: "Dianed",
  },
  {
    barangay_id: 8603,
    municipality_id: 346,
    barangay_name: "Diarabasin",
  },
  {
    barangay_id: 8604,
    municipality_id: 346,
    barangay_name: "Dibutunan",
  },
  {
    barangay_id: 8605,
    municipality_id: 346,
    barangay_name: "Dimabuno",
  },
  {
    barangay_id: 8606,
    municipality_id: 346,
    barangay_name: "Dinadiawan",
  },
  {
    barangay_id: 8607,
    municipality_id: 346,
    barangay_name: "Ditale",
  },
  {
    barangay_id: 8608,
    municipality_id: 346,
    barangay_name: "Gupa",
  },
  {
    barangay_id: 8609,
    municipality_id: 346,
    barangay_name: "Ipil",
  },
  {
    barangay_id: 8610,
    municipality_id: 346,
    barangay_name: "Laboy",
  },
  {
    barangay_id: 8611,
    municipality_id: 346,
    barangay_name: "Lipit",
  },
  {
    barangay_id: 8612,
    municipality_id: 346,
    barangay_name: "Lobbot",
  },
  {
    barangay_id: 8613,
    municipality_id: 346,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 8614,
    municipality_id: 346,
    barangay_name: "Mijares",
  },
  {
    barangay_id: 8615,
    municipality_id: 346,
    barangay_name: "Mucdol",
  },
  {
    barangay_id: 8616,
    municipality_id: 346,
    barangay_name: "North Poblacion",
  },
  {
    barangay_id: 8617,
    municipality_id: 346,
    barangay_name: "Puangi",
  },
  {
    barangay_id: 8618,
    municipality_id: 346,
    barangay_name: "Salay",
  },
  {
    barangay_id: 8619,
    municipality_id: 346,
    barangay_name: "Sapangkawayan",
  },
  {
    barangay_id: 8620,
    municipality_id: 346,
    barangay_name: "South Poblacion",
  },
  {
    barangay_id: 8621,
    municipality_id: 346,
    barangay_name: "Toytoyan",
  },
  {
    barangay_id: 8623,
    municipality_id: 347,
    barangay_name: "Alcala",
  },
  {
    barangay_id: 8624,
    municipality_id: 347,
    barangay_name: "Bagtu",
  },
  {
    barangay_id: 8625,
    municipality_id: 347,
    barangay_name: "Bangco",
  },
  {
    barangay_id: 8626,
    municipality_id: 347,
    barangay_name: "Bannawag",
  },
  {
    barangay_id: 8627,
    municipality_id: 347,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 8628,
    municipality_id: 347,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 8629,
    municipality_id: 347,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 8630,
    municipality_id: 347,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 8631,
    municipality_id: 347,
    barangay_name: "Baubo",
  },
  {
    barangay_id: 8632,
    municipality_id: 347,
    barangay_name: "Bayanihan",
  },
  {
    barangay_id: 8633,
    municipality_id: 347,
    barangay_name: "Bazal",
  },
  {
    barangay_id: 8634,
    municipality_id: 347,
    barangay_name: "Cabituculan East",
  },
  {
    barangay_id: 8635,
    municipality_id: 347,
    barangay_name: "Cabituculan West",
  },
  {
    barangay_id: 8649,
    municipality_id: 347,
    barangay_name: "Cadayacan",
  },
  {
    barangay_id: 8636,
    municipality_id: 347,
    barangay_name: "Debucao",
  },
  {
    barangay_id: 8637,
    municipality_id: 347,
    barangay_name: "Decoliat",
  },
  {
    barangay_id: 8638,
    municipality_id: 347,
    barangay_name: "Detailen",
  },
  {
    barangay_id: 8639,
    municipality_id: 347,
    barangay_name: "Diaat",
  },
  {
    barangay_id: 8640,
    municipality_id: 347,
    barangay_name: "Dialatman",
  },
  {
    barangay_id: 8641,
    municipality_id: 347,
    barangay_name: "Diaman",
  },
  {
    barangay_id: 8642,
    municipality_id: 347,
    barangay_name: "Dianawan",
  },
  {
    barangay_id: 8643,
    municipality_id: 347,
    barangay_name: "Dikildit",
  },
  {
    barangay_id: 8644,
    municipality_id: 347,
    barangay_name: "Dimanpudso",
  },
  {
    barangay_id: 8645,
    municipality_id: 347,
    barangay_name: "Diome",
  },
  {
    barangay_id: 8646,
    municipality_id: 347,
    barangay_name: "Estonilo",
  },
  {
    barangay_id: 8647,
    municipality_id: 347,
    barangay_name: "Florida",
  },
  {
    barangay_id: 8648,
    municipality_id: 347,
    barangay_name: "Galintuja",
  },
  {
    barangay_id: 8650,
    municipality_id: 347,
    barangay_name: "Malasin",
  },
  {
    barangay_id: 8651,
    municipality_id: 347,
    barangay_name: "Ponglo",
  },
  {
    barangay_id: 8652,
    municipality_id: 347,
    barangay_name: "Quirino",
  },
  {
    barangay_id: 8653,
    municipality_id: 347,
    barangay_name: "Ramada",
  },
  {
    barangay_id: 8654,
    municipality_id: 347,
    barangay_name: "San Joaquin",
  },
  {
    barangay_id: 8655,
    municipality_id: 347,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 8662,
    municipality_id: 347,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 8656,
    municipality_id: 347,
    barangay_name: "San Leonardo",
  },
  {
    barangay_id: 8657,
    municipality_id: 347,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 8658,
    municipality_id: 347,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 8659,
    municipality_id: 347,
    barangay_name: "Suguit",
  },
  {
    barangay_id: 8660,
    municipality_id: 347,
    barangay_name: "Villa Aurora",
  },
  {
    barangay_id: 8661,
    municipality_id: 347,
    barangay_name: "Wenceslao",
  },
  {
    barangay_id: 8663,
    municipality_id: 348,
    barangay_name: "Bacong",
  },
  {
    barangay_id: 8664,
    municipality_id: 348,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 8665,
    municipality_id: 348,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 8666,
    municipality_id: 348,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 8667,
    municipality_id: 348,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 8668,
    municipality_id: 348,
    barangay_name: "Dibalo",
  },
  {
    barangay_id: 8669,
    municipality_id: 348,
    barangay_name: "Dibayabay",
  },
  {
    barangay_id: 8670,
    municipality_id: 348,
    barangay_name: "Dibut",
  },
  {
    barangay_id: 8671,
    municipality_id: 348,
    barangay_name: "Dikapinisan",
  },
  {
    barangay_id: 8672,
    municipality_id: 348,
    barangay_name: "Dimanayat",
  },
  {
    barangay_id: 8673,
    municipality_id: 348,
    barangay_name: "Diteki",
  },
  {
    barangay_id: 8674,
    municipality_id: 348,
    barangay_name: "Ditumabo",
  },
  {
    barangay_id: 8675,
    municipality_id: 348,
    barangay_name: "L. Pimentel",
  },
  {
    barangay_id: 8676,
    municipality_id: 348,
    barangay_name: "Nonong Senior",
  },
  {
    barangay_id: 8677,
    municipality_id: 348,
    barangay_name: "Real",
  },
  {
    barangay_id: 8678,
    municipality_id: 348,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 8679,
    municipality_id: 348,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 8680,
    municipality_id: 348,
    barangay_name: "Zarah",
  },
  {
    barangay_id: 8681,
    municipality_id: 349,
    barangay_name: "Adia",
  },
  {
    barangay_id: 8682,
    municipality_id: 349,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 8683,
    municipality_id: 349,
    barangay_name: "Balangon",
  },
  {
    barangay_id: 8685,
    municipality_id: 349,
    barangay_name: "Bangin",
  },
  {
    barangay_id: 8701,
    municipality_id: 349,
    barangay_name: "Banyaga",
  },
  {
    barangay_id: 8686,
    municipality_id: 349,
    barangay_name: "Barigon",
  },
  {
    barangay_id: 8684,
    municipality_id: 349,
    barangay_name: "Bilibinwang",
  },
  {
    barangay_id: 8687,
    municipality_id: 349,
    barangay_name: "Coral Na Munti",
  },
  {
    barangay_id: 8688,
    municipality_id: 349,
    barangay_name: "Guitna",
  },
  {
    barangay_id: 8689,
    municipality_id: 349,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 8690,
    municipality_id: 349,
    barangay_name: "Pamiga",
  },
  {
    barangay_id: 8691,
    municipality_id: 349,
    barangay_name: "Panhulan",
  },
  {
    barangay_id: 8692,
    municipality_id: 349,
    barangay_name: "Pansipit",
  },
  {
    barangay_id: 8693,
    municipality_id: 349,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 8694,
    municipality_id: 349,
    barangay_name: "Pook",
  },
  {
    barangay_id: 8695,
    municipality_id: 349,
    barangay_name: "San Jacinto",
  },
  {
    barangay_id: 8696,
    municipality_id: 349,
    barangay_name: "San Teodoro",
  },
  {
    barangay_id: 8697,
    municipality_id: 349,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 8698,
    municipality_id: 349,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 8699,
    municipality_id: 349,
    barangay_name: "Subic Ibaba",
  },
  {
    barangay_id: 8700,
    municipality_id: 349,
    barangay_name: "Subic Ilaya",
  },
  {
    barangay_id: 8702,
    municipality_id: 350,
    barangay_name: "Balagbag",
  },
  {
    barangay_id: 8703,
    municipality_id: 350,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 8704,
    municipality_id: 350,
    barangay_name: "Concordia",
  },
  {
    barangay_id: 8705,
    municipality_id: 350,
    barangay_name: "Dalipit East",
  },
  {
    barangay_id: 8706,
    municipality_id: 350,
    barangay_name: "Dalipit West",
  },
  {
    barangay_id: 8707,
    municipality_id: 350,
    barangay_name: "Dominador East",
  },
  {
    barangay_id: 8708,
    municipality_id: 350,
    barangay_name: "Dominador West",
  },
  {
    barangay_id: 8710,
    municipality_id: 350,
    barangay_name: "Munlawin Norte",
  },
  {
    barangay_id: 8709,
    municipality_id: 350,
    barangay_name: "Munlawin Sur",
  },
  {
    barangay_id: 8711,
    municipality_id: 350,
    barangay_name: "Muzon Primero",
  },
  {
    barangay_id: 8712,
    municipality_id: 350,
    barangay_name: "Muzon Segundo",
  },
  {
    barangay_id: 8713,
    municipality_id: 350,
    barangay_name: "Pinagkurusan",
  },
  {
    barangay_id: 8714,
    municipality_id: 350,
    barangay_name: "Ping-As",
  },
  {
    barangay_id: 8715,
    municipality_id: 350,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 8716,
    municipality_id: 350,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 8717,
    municipality_id: 350,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 8720,
    municipality_id: 350,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 8718,
    municipality_id: 350,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 8719,
    municipality_id: 350,
    barangay_name: "Tadlac",
  },
  {
    barangay_id: 8721,
    municipality_id: 351,
    barangay_name: "Baclaran",
  },
  {
    barangay_id: 8722,
    municipality_id: 351,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 8723,
    municipality_id: 351,
    barangay_name: "Barangay 10 (Pob.)",
  },
  {
    barangay_id: 8724,
    municipality_id: 351,
    barangay_name: "Barangay 11 (Pob.)",
  },
  {
    barangay_id: 8725,
    municipality_id: 351,
    barangay_name: "Barangay 12 (Pob.)",
  },
  {
    barangay_id: 8726,
    municipality_id: 351,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 8727,
    municipality_id: 351,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 8728,
    municipality_id: 351,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 8729,
    municipality_id: 351,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 8730,
    municipality_id: 351,
    barangay_name: "Barangay 6 (Pob.)",
  },
  {
    barangay_id: 8731,
    municipality_id: 351,
    barangay_name: "Barangay 7 (Pob.)",
  },
  {
    barangay_id: 8732,
    municipality_id: 351,
    barangay_name: "Barangay 8 (Pob.)",
  },
  {
    barangay_id: 8733,
    municipality_id: 351,
    barangay_name: "Barangay 9 (Pob.)",
  },
  {
    barangay_id: 8734,
    municipality_id: 351,
    barangay_name: "Calan",
  },
  {
    barangay_id: 8735,
    municipality_id: 351,
    barangay_name: "Caloocan",
  },
  {
    barangay_id: 8736,
    municipality_id: 351,
    barangay_name: "Calzada",
  },
  {
    barangay_id: 8737,
    municipality_id: 351,
    barangay_name: "Canda",
  },
  {
    barangay_id: 8738,
    municipality_id: 351,
    barangay_name: "Carenahan",
  },
  {
    barangay_id: 8739,
    municipality_id: 351,
    barangay_name: "Caybunga",
  },
  {
    barangay_id: 8740,
    municipality_id: 351,
    barangay_name: "Cayponce",
  },
  {
    barangay_id: 8741,
    municipality_id: 351,
    barangay_name: "Dalig",
  },
  {
    barangay_id: 8742,
    municipality_id: 351,
    barangay_name: "Dao",
  },
  {
    barangay_id: 8743,
    municipality_id: 351,
    barangay_name: "Dilao",
  },
  {
    barangay_id: 8744,
    municipality_id: 351,
    barangay_name: "Duhatan",
  },
  {
    barangay_id: 8745,
    municipality_id: 351,
    barangay_name: "Durungao",
  },
  {
    barangay_id: 8746,
    municipality_id: 351,
    barangay_name: "Gimalas",
  },
  {
    barangay_id: 8747,
    municipality_id: 351,
    barangay_name: "Gumamela",
  },
  {
    barangay_id: 8748,
    municipality_id: 351,
    barangay_name: "Lagnas",
  },
  {
    barangay_id: 8749,
    municipality_id: 351,
    barangay_name: "Lanatan",
  },
  {
    barangay_id: 8750,
    municipality_id: 351,
    barangay_name: "Langgangan",
  },
  {
    barangay_id: 8752,
    municipality_id: 351,
    barangay_name: "Lucban Pook",
  },
  {
    barangay_id: 8751,
    municipality_id: 351,
    barangay_name: "Lucban Putol",
  },
  {
    barangay_id: 8753,
    municipality_id: 351,
    barangay_name: "Magabe",
  },
  {
    barangay_id: 8754,
    municipality_id: 351,
    barangay_name: "Malalay",
  },
  {
    barangay_id: 8755,
    municipality_id: 351,
    barangay_name: "Munting Tubig",
  },
  {
    barangay_id: 8756,
    municipality_id: 351,
    barangay_name: "Navotas",
  },
  {
    barangay_id: 8758,
    municipality_id: 351,
    barangay_name: "Palikpikan",
  },
  {
    barangay_id: 8757,
    municipality_id: 351,
    barangay_name: "Patugo",
  },
  {
    barangay_id: 8759,
    municipality_id: 351,
    barangay_name: "Pooc",
  },
  {
    barangay_id: 8760,
    municipality_id: 351,
    barangay_name: "Sambat",
  },
  {
    barangay_id: 8761,
    municipality_id: 351,
    barangay_name: "Sampaga",
  },
  {
    barangay_id: 8762,
    municipality_id: 351,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 8763,
    municipality_id: 351,
    barangay_name: "San Piro",
  },
  {
    barangay_id: 8764,
    municipality_id: 351,
    barangay_name: "Santol",
  },
  {
    barangay_id: 8765,
    municipality_id: 351,
    barangay_name: "Sukol",
  },
  {
    barangay_id: 8766,
    municipality_id: 351,
    barangay_name: "Tactac",
  },
  {
    barangay_id: 8767,
    municipality_id: 351,
    barangay_name: "Taludtud",
  },
  {
    barangay_id: 8768,
    municipality_id: 351,
    barangay_name: "Tanggoy",
  },
  {
    barangay_id: 8769,
    municipality_id: 352,
    barangay_name: "Alangilan",
  },
  {
    barangay_id: 8770,
    municipality_id: 352,
    barangay_name: "Calawit",
  },
  {
    barangay_id: 8771,
    municipality_id: 352,
    barangay_name: "Looc",
  },
  {
    barangay_id: 8772,
    municipality_id: 352,
    barangay_name: "Magapi",
  },
  {
    barangay_id: 8773,
    municipality_id: 352,
    barangay_name: "Makina",
  },
  {
    barangay_id: 8774,
    municipality_id: 352,
    barangay_name: "Malabanan",
  },
  {
    barangay_id: 8775,
    municipality_id: 352,
    barangay_name: "Paligawan",
  },
  {
    barangay_id: 8776,
    municipality_id: 352,
    barangay_name: "Palsara",
  },
  {
    barangay_id: 8777,
    municipality_id: 352,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 8778,
    municipality_id: 352,
    barangay_name: "Sala",
  },
  {
    barangay_id: 8779,
    municipality_id: 352,
    barangay_name: "Sampalocan",
  },
  {
    barangay_id: 8781,
    municipality_id: 352,
    barangay_name: "San Sebastian",
  },
  {
    barangay_id: 8780,
    municipality_id: 352,
    barangay_name: "Solis",
  },
  {
    barangay_id: 8782,
    municipality_id: 353,
    barangay_name: "Alangilan",
  },
  {
    barangay_id: 8783,
    municipality_id: 353,
    barangay_name: "Balagtas",
  },
  {
    barangay_id: 8784,
    municipality_id: 353,
    barangay_name: "Balete",
  },
  {
    barangay_id: 8785,
    municipality_id: 353,
    barangay_name: "Banaba Center",
  },
  {
    barangay_id: 8788,
    municipality_id: 353,
    barangay_name: "Banaba Ibaba",
  },
  {
    barangay_id: 8786,
    municipality_id: 353,
    barangay_name: "Banaba Kanluran",
  },
  {
    barangay_id: 8787,
    municipality_id: 353,
    barangay_name: "Banaba Silangan",
  },
  {
    barangay_id: 8832,
    municipality_id: 353,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 8833,
    municipality_id: 353,
    barangay_name: "Barangay 10 (Pob.)",
  },
  {
    barangay_id: 8834,
    municipality_id: 353,
    barangay_name: "Barangay 11 (Pob.)",
  },
  {
    barangay_id: 8835,
    municipality_id: 353,
    barangay_name: "Barangay 12 (Pob.)",
  },
  {
    barangay_id: 8836,
    municipality_id: 353,
    barangay_name: "Barangay 13 (Pob.)",
  },
  {
    barangay_id: 8837,
    municipality_id: 353,
    barangay_name: "Barangay 14 (Pob.)",
  },
  {
    barangay_id: 8838,
    municipality_id: 353,
    barangay_name: "Barangay 15 (Pob.)",
  },
  {
    barangay_id: 8839,
    municipality_id: 353,
    barangay_name: "Barangay 16 (Pob.)",
  },
  {
    barangay_id: 8840,
    municipality_id: 353,
    barangay_name: "Barangay 17 (Pob.)",
  },
  {
    barangay_id: 8841,
    municipality_id: 353,
    barangay_name: "Barangay 18 (Pob.)",
  },
  {
    barangay_id: 8842,
    municipality_id: 353,
    barangay_name: "Barangay 19 (Pob.)",
  },
  {
    barangay_id: 8843,
    municipality_id: 353,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 8844,
    municipality_id: 353,
    barangay_name: "Barangay 20 (Pob.)",
  },
  {
    barangay_id: 8845,
    municipality_id: 353,
    barangay_name: "Barangay 21 (Pob.)",
  },
  {
    barangay_id: 8846,
    municipality_id: 353,
    barangay_name: "Barangay 22 (Pob.)",
  },
  {
    barangay_id: 8847,
    municipality_id: 353,
    barangay_name: "Barangay 23 (Pob.)",
  },
  {
    barangay_id: 8848,
    municipality_id: 353,
    barangay_name: "Barangay 24 (Pob.)",
  },
  {
    barangay_id: 8849,
    municipality_id: 353,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 8850,
    municipality_id: 353,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 8851,
    municipality_id: 353,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 8852,
    municipality_id: 353,
    barangay_name: "Barangay 6 (Pob.)",
  },
  {
    barangay_id: 8853,
    municipality_id: 353,
    barangay_name: "Barangay 7 (Pob.)",
  },
  {
    barangay_id: 8854,
    municipality_id: 353,
    barangay_name: "Barangay 8 (Pob.)",
  },
  {
    barangay_id: 8855,
    municipality_id: 353,
    barangay_name: "Barangay 9 (Pob.)",
  },
  {
    barangay_id: 8789,
    municipality_id: 353,
    barangay_name: "Bilogo",
  },
  {
    barangay_id: 8791,
    municipality_id: 353,
    barangay_name: "Bolbok",
  },
  {
    barangay_id: 8792,
    municipality_id: 353,
    barangay_name: "Bukal",
  },
  {
    barangay_id: 8793,
    municipality_id: 353,
    barangay_name: "Calicanto",
  },
  {
    barangay_id: 8794,
    municipality_id: 353,
    barangay_name: "Catandala",
  },
  {
    barangay_id: 8795,
    municipality_id: 353,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 8796,
    municipality_id: 353,
    barangay_name: "Conde Itaas",
  },
  {
    barangay_id: 8797,
    municipality_id: 353,
    barangay_name: "Conde Labak",
  },
  {
    barangay_id: 8798,
    municipality_id: 353,
    barangay_name: "Cuta",
  },
  {
    barangay_id: 8799,
    municipality_id: 353,
    barangay_name: "Dalig",
  },
  {
    barangay_id: 8800,
    municipality_id: 353,
    barangay_name: "Dela Paz",
  },
  {
    barangay_id: 8801,
    municipality_id: 353,
    barangay_name: "Dela Paz Pulot Aplaya",
  },
  {
    barangay_id: 8802,
    municipality_id: 353,
    barangay_name: "Dela Paz Pulot Itaas",
  },
  {
    barangay_id: 8803,
    municipality_id: 353,
    barangay_name: "Domoclay",
  },
  {
    barangay_id: 8804,
    municipality_id: 353,
    barangay_name: "Dumantay",
  },
  {
    barangay_id: 8805,
    municipality_id: 353,
    barangay_name: "Gulod Itaas",
  },
  {
    barangay_id: 8806,
    municipality_id: 353,
    barangay_name: "Gulod Labak",
  },
  {
    barangay_id: 8807,
    municipality_id: 353,
    barangay_name: "Haligue Kanluran",
  },
  {
    barangay_id: 8808,
    municipality_id: 353,
    barangay_name: "Haligue Silangan",
  },
  {
    barangay_id: 8809,
    municipality_id: 353,
    barangay_name: "Ilihan",
  },
  {
    barangay_id: 8810,
    municipality_id: 353,
    barangay_name: "Kumba",
  },
  {
    barangay_id: 8811,
    municipality_id: 353,
    barangay_name: "Kumintang Ibaba",
  },
  {
    barangay_id: 8812,
    municipality_id: 353,
    barangay_name: "Kumintang Ilaya",
  },
  {
    barangay_id: 8813,
    municipality_id: 353,
    barangay_name: "Libjo",
  },
  {
    barangay_id: 8814,
    municipality_id: 353,
    barangay_name: "Liponpon, Isla Verde",
  },
  {
    barangay_id: 8790,
    municipality_id: 353,
    barangay_name: "Maapas",
  },
  {
    barangay_id: 8823,
    municipality_id: 353,
    barangay_name: "Mabacong",
  },
  {
    barangay_id: 8815,
    municipality_id: 353,
    barangay_name: "Mahabang Dahilig",
  },
  {
    barangay_id: 8816,
    municipality_id: 353,
    barangay_name: "Mahabang Parang",
  },
  {
    barangay_id: 8818,
    municipality_id: 353,
    barangay_name: "Mahacot Kanluran",
  },
  {
    barangay_id: 8817,
    municipality_id: 353,
    barangay_name: "Mahacot Silangan",
  },
  {
    barangay_id: 8819,
    municipality_id: 353,
    barangay_name: "Malalim",
  },
  {
    barangay_id: 8820,
    municipality_id: 353,
    barangay_name: "Malibayo",
  },
  {
    barangay_id: 8821,
    municipality_id: 353,
    barangay_name: "Malitam",
  },
  {
    barangay_id: 8822,
    municipality_id: 353,
    barangay_name: "Maruclap",
  },
  {
    barangay_id: 8824,
    municipality_id: 353,
    barangay_name: "Pagkilatan",
  },
  {
    barangay_id: 8825,
    municipality_id: 353,
    barangay_name: "Paharang Kanluran",
  },
  {
    barangay_id: 8826,
    municipality_id: 353,
    barangay_name: "Paharang Silangan",
  },
  {
    barangay_id: 8828,
    municipality_id: 353,
    barangay_name: "Pallocan Kanluran",
  },
  {
    barangay_id: 8827,
    municipality_id: 353,
    barangay_name: "Pallocan Silangan",
  },
  {
    barangay_id: 8829,
    municipality_id: 353,
    barangay_name: "Pinamucan",
  },
  {
    barangay_id: 8830,
    municipality_id: 353,
    barangay_name: "Pinamucan Ibaba",
  },
  {
    barangay_id: 8831,
    municipality_id: 353,
    barangay_name: "Pinamucan Silangan",
  },
  {
    barangay_id: 8856,
    municipality_id: 353,
    barangay_name: "Sampaga",
  },
  {
    barangay_id: 8857,
    municipality_id: 353,
    barangay_name: "San Agapito, Isla Verde",
  },
  {
    barangay_id: 8858,
    municipality_id: 353,
    barangay_name: "San Agustin Kanluran, Isla Verde",
  },
  {
    barangay_id: 8859,
    municipality_id: 353,
    barangay_name: "San Agustin Silangan, Isla Verde",
  },
  {
    barangay_id: 8860,
    municipality_id: 353,
    barangay_name: "San Andres, Isla Verde",
  },
  {
    barangay_id: 8861,
    municipality_id: 353,
    barangay_name: "San Antonio, Isla Verde",
  },
  {
    barangay_id: 8862,
    municipality_id: 353,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 8863,
    municipality_id: 353,
    barangay_name: "San Jose Sico",
  },
  {
    barangay_id: 8864,
    municipality_id: 353,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 8865,
    municipality_id: 353,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 8866,
    municipality_id: 353,
    barangay_name: "Santa Clara",
  },
  {
    barangay_id: 8867,
    municipality_id: 353,
    barangay_name: "Santa Rita Aplaya",
  },
  {
    barangay_id: 8868,
    municipality_id: 353,
    barangay_name: "Santa Rita Karsada",
  },
  {
    barangay_id: 8869,
    municipality_id: 353,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 8870,
    municipality_id: 353,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 8871,
    municipality_id: 353,
    barangay_name: "Simlong",
  },
  {
    barangay_id: 8872,
    municipality_id: 353,
    barangay_name: "Sirang Lupa",
  },
  {
    barangay_id: 8873,
    municipality_id: 353,
    barangay_name: "Sorosoro Ibaba",
  },
  {
    barangay_id: 8874,
    municipality_id: 353,
    barangay_name: "Sorosoro Ilaya",
  },
  {
    barangay_id: 8875,
    municipality_id: 353,
    barangay_name: "Sorosoro Karsada",
  },
  {
    barangay_id: 8877,
    municipality_id: 353,
    barangay_name: "Tabangao Ambulong",
  },
  {
    barangay_id: 8876,
    municipality_id: 353,
    barangay_name: "Tabangao Aplaya",
  },
  {
    barangay_id: 8878,
    municipality_id: 353,
    barangay_name: "Tabangao Dao",
  },
  {
    barangay_id: 8879,
    municipality_id: 353,
    barangay_name: "Talahib Pandayan",
  },
  {
    barangay_id: 8880,
    municipality_id: 353,
    barangay_name: "Talahib Payapa",
  },
  {
    barangay_id: 8881,
    municipality_id: 353,
    barangay_name: "Talumpok Kanluran",
  },
  {
    barangay_id: 8882,
    municipality_id: 353,
    barangay_name: "Talumpok Silangan",
  },
  {
    barangay_id: 8883,
    municipality_id: 353,
    barangay_name: "Tinga Itaas",
  },
  {
    barangay_id: 8884,
    municipality_id: 353,
    barangay_name: "Tinga Labak",
  },
  {
    barangay_id: 8885,
    municipality_id: 353,
    barangay_name: "Tulo",
  },
  {
    barangay_id: 8886,
    municipality_id: 353,
    barangay_name: "Wawa",
  },
  {
    barangay_id: 8887,
    municipality_id: 354,
    barangay_name: "Alagao",
  },
  {
    barangay_id: 8888,
    municipality_id: 354,
    barangay_name: "Aplaya",
  },
  {
    barangay_id: 8889,
    municipality_id: 354,
    barangay_name: "As-Is",
  },
  {
    barangay_id: 8890,
    municipality_id: 354,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 8891,
    municipality_id: 354,
    barangay_name: "Baguilawa",
  },
  {
    barangay_id: 8892,
    municipality_id: 354,
    barangay_name: "Balayong",
  },
  {
    barangay_id: 8893,
    municipality_id: 354,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 8894,
    municipality_id: 354,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 8895,
    municipality_id: 354,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 8896,
    municipality_id: 354,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 8897,
    municipality_id: 354,
    barangay_name: "Bolo",
  },
  {
    barangay_id: 8898,
    municipality_id: 354,
    barangay_name: "Colvo",
  },
  {
    barangay_id: 8899,
    municipality_id: 354,
    barangay_name: "Cupang",
  },
  {
    barangay_id: 8900,
    municipality_id: 354,
    barangay_name: "Durungao",
  },
  {
    barangay_id: 8901,
    municipality_id: 354,
    barangay_name: "Gulibay",
  },
  {
    barangay_id: 8902,
    municipality_id: 354,
    barangay_name: "Inicbulan",
  },
  {
    barangay_id: 8903,
    municipality_id: 354,
    barangay_name: "Locloc",
  },
  {
    barangay_id: 8904,
    municipality_id: 354,
    barangay_name: "Magalang-Galang",
  },
  {
    barangay_id: 8905,
    municipality_id: 354,
    barangay_name: "Malindig",
  },
  {
    barangay_id: 8906,
    municipality_id: 354,
    barangay_name: "Manalupong",
  },
  {
    barangay_id: 8907,
    municipality_id: 354,
    barangay_name: "Manghinao Proper",
  },
  {
    barangay_id: 8908,
    municipality_id: 354,
    barangay_name: "Manghinao Uno",
  },
  {
    barangay_id: 8909,
    municipality_id: 354,
    barangay_name: "New Danglayan",
  },
  {
    barangay_id: 8910,
    municipality_id: 354,
    barangay_name: "Orense",
  },
  {
    barangay_id: 8911,
    municipality_id: 354,
    barangay_name: "Pitugo",
  },
  {
    barangay_id: 8912,
    municipality_id: 354,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 8913,
    municipality_id: 354,
    barangay_name: "Sampaguita",
  },
  {
    barangay_id: 8914,
    municipality_id: 354,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 8915,
    municipality_id: 354,
    barangay_name: "San Andres Proper",
  },
  {
    barangay_id: 8916,
    municipality_id: 354,
    barangay_name: "San Andres Uno",
  },
  {
    barangay_id: 8917,
    municipality_id: 354,
    barangay_name: "San Diego",
  },
  {
    barangay_id: 8918,
    municipality_id: 354,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 8919,
    municipality_id: 354,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 8920,
    municipality_id: 354,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 8921,
    municipality_id: 354,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 8922,
    municipality_id: 354,
    barangay_name: "San Teodoro",
  },
  {
    barangay_id: 8923,
    municipality_id: 354,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 8924,
    municipality_id: 354,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 8925,
    municipality_id: 354,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 8926,
    municipality_id: 354,
    barangay_name: "Sinala",
  },
  {
    barangay_id: 8928,
    municipality_id: 355,
    barangay_name: "Baclas",
  },
  {
    barangay_id: 8927,
    municipality_id: 355,
    barangay_name: "Bagong Tubig",
  },
  {
    barangay_id: 8929,
    municipality_id: 355,
    barangay_name: "Balimbing",
  },
  {
    barangay_id: 8930,
    municipality_id: 355,
    barangay_name: "Bambang",
  },
  {
    barangay_id: 8931,
    municipality_id: 355,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 8932,
    municipality_id: 355,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 8933,
    municipality_id: 355,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 8934,
    municipality_id: 355,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 8935,
    municipality_id: 355,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 8936,
    municipality_id: 355,
    barangay_name: "Barangay 6 (Pob.)",
  },
  {
    barangay_id: 8937,
    municipality_id: 355,
    barangay_name: "Bisaya",
  },
  {
    barangay_id: 8938,
    municipality_id: 355,
    barangay_name: "Cahil",
  },
  {
    barangay_id: 8940,
    municipality_id: 355,
    barangay_name: "Calantas",
  },
  {
    barangay_id: 8939,
    municipality_id: 355,
    barangay_name: "Caluangan",
  },
  {
    barangay_id: 8941,
    municipality_id: 355,
    barangay_name: "Camastilisan",
  },
  {
    barangay_id: 8943,
    municipality_id: 355,
    barangay_name: "Coral Ni Bacal",
  },
  {
    barangay_id: 8942,
    municipality_id: 355,
    barangay_name: "Coral Ni Lopez",
  },
  {
    barangay_id: 8944,
    municipality_id: 355,
    barangay_name: "Dacanlao",
  },
  {
    barangay_id: 8945,
    municipality_id: 355,
    barangay_name: "Dila",
  },
  {
    barangay_id: 8946,
    municipality_id: 355,
    barangay_name: "Loma",
  },
  {
    barangay_id: 8947,
    municipality_id: 355,
    barangay_name: "Lumbang Calzada",
  },
  {
    barangay_id: 8948,
    municipality_id: 355,
    barangay_name: "Lumbang Na Bata",
  },
  {
    barangay_id: 8949,
    municipality_id: 355,
    barangay_name: "Lumbang Na Matanda",
  },
  {
    barangay_id: 8950,
    municipality_id: 355,
    barangay_name: "Madalunot",
  },
  {
    barangay_id: 8951,
    municipality_id: 355,
    barangay_name: "Makina",
  },
  {
    barangay_id: 8952,
    municipality_id: 355,
    barangay_name: "Matipok",
  },
  {
    barangay_id: 8953,
    municipality_id: 355,
    barangay_name: "Munting Coral",
  },
  {
    barangay_id: 8954,
    municipality_id: 355,
    barangay_name: "Niyugan",
  },
  {
    barangay_id: 8955,
    municipality_id: 355,
    barangay_name: "Pantay",
  },
  {
    barangay_id: 8958,
    municipality_id: 355,
    barangay_name: "Puting Bato East",
  },
  {
    barangay_id: 8956,
    municipality_id: 355,
    barangay_name: "Puting Bato West",
  },
  {
    barangay_id: 8957,
    municipality_id: 355,
    barangay_name: "Puting Kahoy",
  },
  {
    barangay_id: 8959,
    municipality_id: 355,
    barangay_name: "Quisumbing",
  },
  {
    barangay_id: 8960,
    municipality_id: 355,
    barangay_name: "Salong",
  },
  {
    barangay_id: 8961,
    municipality_id: 355,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 8962,
    municipality_id: 355,
    barangay_name: "Sinisian",
  },
  {
    barangay_id: 8963,
    municipality_id: 355,
    barangay_name: "Taklang Anak",
  },
  {
    barangay_id: 8964,
    municipality_id: 355,
    barangay_name: "Talisay",
  },
  {
    barangay_id: 8965,
    municipality_id: 355,
    barangay_name: "Tamayo",
  },
  {
    barangay_id: 8966,
    municipality_id: 355,
    barangay_name: "Timbain",
  },
  {
    barangay_id: 8967,
    municipality_id: 356,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 8968,
    municipality_id: 356,
    barangay_name: "Baha",
  },
  {
    barangay_id: 8969,
    municipality_id: 356,
    barangay_name: "Balibago",
  },
  {
    barangay_id: 8970,
    municipality_id: 356,
    barangay_name: "Balitoc",
  },
  {
    barangay_id: 8981,
    municipality_id: 356,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 8982,
    municipality_id: 356,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 8983,
    municipality_id: 356,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 8984,
    municipality_id: 356,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 8971,
    municipality_id: 356,
    barangay_name: "Biga",
  },
  {
    barangay_id: 8972,
    municipality_id: 356,
    barangay_name: "Bucal",
  },
  {
    barangay_id: 8973,
    municipality_id: 356,
    barangay_name: "Carlosa",
  },
  {
    barangay_id: 8974,
    municipality_id: 356,
    barangay_name: "Carretunan",
  },
  {
    barangay_id: 8975,
    municipality_id: 356,
    barangay_name: "Encarnacion",
  },
  {
    barangay_id: 8976,
    municipality_id: 356,
    barangay_name: "Gulod",
  },
  {
    barangay_id: 8977,
    municipality_id: 356,
    barangay_name: "Hukay",
  },
  {
    barangay_id: 8978,
    municipality_id: 356,
    barangay_name: "Lucsuhin",
  },
  {
    barangay_id: 8979,
    municipality_id: 356,
    barangay_name: "Luya",
  },
  {
    barangay_id: 8980,
    municipality_id: 356,
    barangay_name: "Paraiso",
  },
  {
    barangay_id: 8985,
    municipality_id: 356,
    barangay_name: "Quilitisan",
  },
  {
    barangay_id: 8986,
    municipality_id: 356,
    barangay_name: "Real",
  },
  {
    barangay_id: 8987,
    municipality_id: 356,
    barangay_name: "Sambungan",
  },
  {
    barangay_id: 8988,
    municipality_id: 356,
    barangay_name: "Santa Ana",
  },
  {
    barangay_id: 8989,
    municipality_id: 356,
    barangay_name: "Talibayog",
  },
  {
    barangay_id: 8990,
    municipality_id: 356,
    barangay_name: "Talisay",
  },
  {
    barangay_id: 8991,
    municipality_id: 356,
    barangay_name: "Tanagan",
  },
  {
    barangay_id: 8992,
    municipality_id: 357,
    barangay_name: "Balagbag",
  },
  {
    barangay_id: 9005,
    municipality_id: 357,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 9006,
    municipality_id: 357,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 9007,
    municipality_id: 357,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 9008,
    municipality_id: 357,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 9009,
    municipality_id: 357,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 9010,
    municipality_id: 357,
    barangay_name: "Barangay 6 (Pob.)",
  },
  {
    barangay_id: 9011,
    municipality_id: 357,
    barangay_name: "Barangay 7 (Pob.)",
  },
  {
    barangay_id: 9012,
    municipality_id: 357,
    barangay_name: "Barangay 8 (Pob.)",
  },
  {
    barangay_id: 8993,
    municipality_id: 357,
    barangay_name: "Bungahan",
  },
  {
    barangay_id: 8994,
    municipality_id: 357,
    barangay_name: "Calumayin",
  },
  {
    barangay_id: 8995,
    municipality_id: 357,
    barangay_name: "Dalipit East",
  },
  {
    barangay_id: 8996,
    municipality_id: 357,
    barangay_name: "Dalipit West",
  },
  {
    barangay_id: 8997,
    municipality_id: 357,
    barangay_name: "Dita",
  },
  {
    barangay_id: 8998,
    municipality_id: 357,
    barangay_name: "Don Juan",
  },
  {
    barangay_id: 8999,
    municipality_id: 357,
    barangay_name: "Emmanuel",
  },
  {
    barangay_id: 9000,
    municipality_id: 357,
    barangay_name: "Ibabao",
  },
  {
    barangay_id: 9001,
    municipality_id: 357,
    barangay_name: "Labac",
  },
  {
    barangay_id: 9002,
    municipality_id: 357,
    barangay_name: "Pinagkaisahan",
  },
  {
    barangay_id: 9003,
    municipality_id: 357,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 9004,
    municipality_id: 357,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 9013,
    municipality_id: 358,
    barangay_name: "Bago",
  },
  {
    barangay_id: 9014,
    municipality_id: 358,
    barangay_name: "Balanga",
  },
  {
    barangay_id: 9015,
    municipality_id: 358,
    barangay_name: "Bungahan",
  },
  {
    barangay_id: 9016,
    municipality_id: 358,
    barangay_name: "Calamias",
  },
  {
    barangay_id: 9017,
    municipality_id: 358,
    barangay_name: "Catandala",
  },
  {
    barangay_id: 9018,
    municipality_id: 358,
    barangay_name: "Coliat",
  },
  {
    barangay_id: 9019,
    municipality_id: 358,
    barangay_name: "Dayapan",
  },
  {
    barangay_id: 9020,
    municipality_id: 358,
    barangay_name: "Lapu-lapu",
  },
  {
    barangay_id: 9021,
    municipality_id: 358,
    barangay_name: "Lucsuhin",
  },
  {
    barangay_id: 9022,
    municipality_id: 358,
    barangay_name: "Mabalor",
  },
  {
    barangay_id: 9023,
    municipality_id: 358,
    barangay_name: "Malainin",
  },
  {
    barangay_id: 9024,
    municipality_id: 358,
    barangay_name: "Matala",
  },
  {
    barangay_id: 9025,
    municipality_id: 358,
    barangay_name: "Munting-Tubig",
  },
  {
    barangay_id: 9026,
    municipality_id: 358,
    barangay_name: "Palindan",
  },
  {
    barangay_id: 9027,
    municipality_id: 358,
    barangay_name: "Pangao",
  },
  {
    barangay_id: 9028,
    municipality_id: 358,
    barangay_name: "Panghayaan",
  },
  {
    barangay_id: 9029,
    municipality_id: 358,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 9030,
    municipality_id: 358,
    barangay_name: "Quilo",
  },
  {
    barangay_id: 9031,
    municipality_id: 358,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 9032,
    municipality_id: 358,
    barangay_name: "Salaban I",
  },
  {
    barangay_id: 9038,
    municipality_id: 358,
    barangay_name: "Salaban II",
  },
  {
    barangay_id: 9033,
    municipality_id: 358,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 9034,
    municipality_id: 358,
    barangay_name: "Sandalan",
  },
  {
    barangay_id: 9035,
    municipality_id: 358,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 9036,
    municipality_id: 358,
    barangay_name: "Talaibon",
  },
  {
    barangay_id: 9037,
    municipality_id: 358,
    barangay_name: "Tulay Na Patpat",
  },
  {
    barangay_id: 9039,
    municipality_id: 359,
    barangay_name: "As-Is",
  },
  {
    barangay_id: 9040,
    municipality_id: 359,
    barangay_name: "Balakilong",
  },
  {
    barangay_id: 9051,
    municipality_id: 359,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 9052,
    municipality_id: 359,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 9053,
    municipality_id: 359,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 9054,
    municipality_id: 359,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 9055,
    municipality_id: 359,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 9041,
    municipality_id: 359,
    barangay_name: "Berinayan",
  },
  {
    barangay_id: 9042,
    municipality_id: 359,
    barangay_name: "Bugaan East",
  },
  {
    barangay_id: 9043,
    municipality_id: 359,
    barangay_name: "Bugaan West",
  },
  {
    barangay_id: 9044,
    municipality_id: 359,
    barangay_name: "Buso-buso",
  },
  {
    barangay_id: 9045,
    municipality_id: 359,
    barangay_name: "Dayap Itaas",
  },
  {
    barangay_id: 9046,
    municipality_id: 359,
    barangay_name: "Gulod",
  },
  {
    barangay_id: 9047,
    municipality_id: 359,
    barangay_name: "J. Leviste",
  },
  {
    barangay_id: 9048,
    municipality_id: 359,
    barangay_name: "Molinete",
  },
  {
    barangay_id: 9049,
    municipality_id: 359,
    barangay_name: "Niyugan",
  },
  {
    barangay_id: 9050,
    municipality_id: 359,
    barangay_name: "Paliparan",
  },
  {
    barangay_id: 9056,
    municipality_id: 359,
    barangay_name: "San Gabriel",
  },
  {
    barangay_id: 9057,
    municipality_id: 359,
    barangay_name: "San Gregorio",
  },
  {
    barangay_id: 9058,
    municipality_id: 359,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 9059,
    municipality_id: 359,
    barangay_name: "Ticub",
  },
  {
    barangay_id: 9060,
    municipality_id: 360,
    barangay_name: "Anak-Dagat",
  },
  {
    barangay_id: 9061,
    municipality_id: 360,
    barangay_name: "Arumahan",
  },
  {
    barangay_id: 9062,
    municipality_id: 360,
    barangay_name: "Ayao-iyao",
  },
  {
    barangay_id: 9063,
    municipality_id: 360,
    barangay_name: "Bagong Pook",
  },
  {
    barangay_id: 9064,
    municipality_id: 360,
    barangay_name: "Bagong Sikat",
  },
  {
    barangay_id: 9065,
    municipality_id: 360,
    barangay_name: "Balanga",
  },
  {
    barangay_id: 9066,
    municipality_id: 360,
    barangay_name: "Bukal",
  },
  {
    barangay_id: 9067,
    municipality_id: 360,
    barangay_name: "Cahilan I",
  },
  {
    barangay_id: 9068,
    municipality_id: 360,
    barangay_name: "Cahilan II",
  },
  {
    barangay_id: 9069,
    municipality_id: 360,
    barangay_name: "Dayapan",
  },
  {
    barangay_id: 9089,
    municipality_id: 360,
    barangay_name: "District I (Pob.)",
  },
  {
    barangay_id: 9090,
    municipality_id: 360,
    barangay_name: "District II (Pob.)",
  },
  {
    barangay_id: 9091,
    municipality_id: 360,
    barangay_name: "District III (Pob.)",
  },
  {
    barangay_id: 9092,
    municipality_id: 360,
    barangay_name: "District IV (Pob.)",
  },
  {
    barangay_id: 9070,
    municipality_id: 360,
    barangay_name: "Dita",
  },
  {
    barangay_id: 9071,
    municipality_id: 360,
    barangay_name: "Gulod",
  },
  {
    barangay_id: 9072,
    municipality_id: 360,
    barangay_name: "Lucky",
  },
  {
    barangay_id: 9073,
    municipality_id: 360,
    barangay_name: "Maguihan",
  },
  {
    barangay_id: 9074,
    municipality_id: 360,
    barangay_name: "Mahabang Dahilig",
  },
  {
    barangay_id: 9075,
    municipality_id: 360,
    barangay_name: "Mahayahay",
  },
  {
    barangay_id: 9076,
    municipality_id: 360,
    barangay_name: "Maigsing Dahilig",
  },
  {
    barangay_id: 9077,
    municipality_id: 360,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 9078,
    municipality_id: 360,
    barangay_name: "Malinis",
  },
  {
    barangay_id: 9079,
    municipality_id: 360,
    barangay_name: "Masalisi",
  },
  {
    barangay_id: 9080,
    municipality_id: 360,
    barangay_name: "Mataas Na Bayan",
  },
  {
    barangay_id: 9081,
    municipality_id: 360,
    barangay_name: "Matingain I",
  },
  {
    barangay_id: 9082,
    municipality_id: 360,
    barangay_name: "Matingain II",
  },
  {
    barangay_id: 9083,
    municipality_id: 360,
    barangay_name: "Mayasang",
  },
  {
    barangay_id: 9084,
    municipality_id: 360,
    barangay_name: "Niugan",
  },
  {
    barangay_id: 9085,
    municipality_id: 360,
    barangay_name: "Nonong Casto",
  },
  {
    barangay_id: 9086,
    municipality_id: 360,
    barangay_name: "Palanas",
  },
  {
    barangay_id: 9087,
    municipality_id: 360,
    barangay_name: "Payapa Ibaba",
  },
  {
    barangay_id: 9088,
    municipality_id: 360,
    barangay_name: "Payapa Ilaya",
  },
  {
    barangay_id: 9093,
    municipality_id: 360,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 9094,
    municipality_id: 360,
    barangay_name: "Sambal Ibaba",
  },
  {
    barangay_id: 9095,
    municipality_id: 360,
    barangay_name: "Sambal Ilaya",
  },
  {
    barangay_id: 9096,
    municipality_id: 360,
    barangay_name: "San Isidro Ibaba",
  },
  {
    barangay_id: 9097,
    municipality_id: 360,
    barangay_name: "San Isidro Itaas",
  },
  {
    barangay_id: 9098,
    municipality_id: 360,
    barangay_name: "Sangalang",
  },
  {
    barangay_id: 9104,
    municipality_id: 360,
    barangay_name: "Sinisian East",
  },
  {
    barangay_id: 9105,
    municipality_id: 360,
    barangay_name: "Sinisian West",
  },
  {
    barangay_id: 9099,
    municipality_id: 360,
    barangay_name: "Talaga",
  },
  {
    barangay_id: 9100,
    municipality_id: 360,
    barangay_name: "Tubigan",
  },
  {
    barangay_id: 9101,
    municipality_id: 360,
    barangay_name: "Tubuan",
  },
  {
    barangay_id: 9102,
    municipality_id: 360,
    barangay_name: "Wawa Ibaba",
  },
  {
    barangay_id: 9103,
    municipality_id: 360,
    barangay_name: "Wawa Ilaya",
  },
  {
    barangay_id: 9106,
    municipality_id: 361,
    barangay_name: "Bagong Pook",
  },
  {
    barangay_id: 9107,
    municipality_id: 361,
    barangay_name: "Balibago",
  },
  {
    barangay_id: 9117,
    municipality_id: 361,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 9118,
    municipality_id: 361,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 9119,
    municipality_id: 361,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 9120,
    municipality_id: 361,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 9121,
    municipality_id: 361,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 9108,
    municipality_id: 361,
    barangay_name: "Binubusan",
  },
  {
    barangay_id: 9109,
    municipality_id: 361,
    barangay_name: "Bungahan",
  },
  {
    barangay_id: 9110,
    municipality_id: 361,
    barangay_name: "Cumba",
  },
  {
    barangay_id: 9111,
    municipality_id: 361,
    barangay_name: "Humayingan",
  },
  {
    barangay_id: 9112,
    municipality_id: 361,
    barangay_name: "Kapito",
  },
  {
    barangay_id: 9113,
    municipality_id: 361,
    barangay_name: "Lumaniag",
  },
  {
    barangay_id: 9114,
    municipality_id: 361,
    barangay_name: "Luyahan",
  },
  {
    barangay_id: 9115,
    municipality_id: 361,
    barangay_name: "Malaruhatan",
  },
  {
    barangay_id: 9116,
    municipality_id: 361,
    barangay_name: "Matabungkay",
  },
  {
    barangay_id: 9122,
    municipality_id: 361,
    barangay_name: "Prenza",
  },
  {
    barangay_id: 9123,
    municipality_id: 361,
    barangay_name: "Puting-Kahoy",
  },
  {
    barangay_id: 9124,
    municipality_id: 361,
    barangay_name: "San Diego",
  },
  {
    barangay_id: 9125,
    municipality_id: 362,
    barangay_name: "Adya",
  },
  {
    barangay_id: 9126,
    municipality_id: 362,
    barangay_name: "Anilao",
  },
  {
    barangay_id: 9127,
    municipality_id: 362,
    barangay_name: "Anilao-Labac",
  },
  {
    barangay_id: 9128,
    municipality_id: 362,
    barangay_name: "Antipolo Del Norte",
  },
  {
    barangay_id: 9129,
    municipality_id: 362,
    barangay_name: "Antipolo Del Sur",
  },
  {
    barangay_id: 9130,
    municipality_id: 362,
    barangay_name: "Bagong Pook",
  },
  {
    barangay_id: 9132,
    municipality_id: 362,
    barangay_name: "Balintawak",
  },
  {
    barangay_id: 9133,
    municipality_id: 362,
    barangay_name: "Banaybanay",
  },
  {
    barangay_id: 9196,
    municipality_id: 362,
    barangay_name: "Barangay 12 (Pob.)",
  },
  {
    barangay_id: 9134,
    municipality_id: 362,
    barangay_name: "Bolbok",
  },
  {
    barangay_id: 9135,
    municipality_id: 362,
    barangay_name: "Bugtong na Pulo",
  },
  {
    barangay_id: 9136,
    municipality_id: 362,
    barangay_name: "Bulacnin",
  },
  {
    barangay_id: 9137,
    municipality_id: 362,
    barangay_name: "Bulaklakan",
  },
  {
    barangay_id: 9138,
    municipality_id: 362,
    barangay_name: "Calamias",
  },
  {
    barangay_id: 9139,
    municipality_id: 362,
    barangay_name: "Cumba",
  },
  {
    barangay_id: 9140,
    municipality_id: 362,
    barangay_name: "Dagatan",
  },
  {
    barangay_id: 9141,
    municipality_id: 362,
    barangay_name: "Duhatan",
  },
  {
    barangay_id: 9142,
    municipality_id: 362,
    barangay_name: "Halang",
  },
  {
    barangay_id: 9143,
    municipality_id: 362,
    barangay_name: "Inosloban",
  },
  {
    barangay_id: 9144,
    municipality_id: 362,
    barangay_name: "Kayumanggi",
  },
  {
    barangay_id: 9145,
    municipality_id: 362,
    barangay_name: "Latag",
  },
  {
    barangay_id: 9146,
    municipality_id: 362,
    barangay_name: "Lodlod",
  },
  {
    barangay_id: 9147,
    municipality_id: 362,
    barangay_name: "Lumbang",
  },
  {
    barangay_id: 9148,
    municipality_id: 362,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 9149,
    municipality_id: 362,
    barangay_name: "Malagonlong",
  },
  {
    barangay_id: 9150,
    municipality_id: 362,
    barangay_name: "Malitlit",
  },
  {
    barangay_id: 9151,
    municipality_id: 362,
    barangay_name: "Marauoy",
  },
  {
    barangay_id: 9152,
    municipality_id: 362,
    barangay_name: "Mataas Na Lupa",
  },
  {
    barangay_id: 9153,
    municipality_id: 362,
    barangay_name: "Munting Pulo",
  },
  {
    barangay_id: 9154,
    municipality_id: 362,
    barangay_name: "Pagolingin Bata",
  },
  {
    barangay_id: 9155,
    municipality_id: 362,
    barangay_name: "Pagolingin East",
  },
  {
    barangay_id: 9156,
    municipality_id: 362,
    barangay_name: "Pagolingin West",
  },
  {
    barangay_id: 9157,
    municipality_id: 362,
    barangay_name: "Pangao",
  },
  {
    barangay_id: 9158,
    municipality_id: 362,
    barangay_name: "Pinagkawitan",
  },
  {
    barangay_id: 9159,
    municipality_id: 362,
    barangay_name: "Pinagtongulan",
  },
  {
    barangay_id: 9160,
    municipality_id: 362,
    barangay_name: "Plaridel",
  },
  {
    barangay_id: 9161,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 1",
  },
  {
    barangay_id: 9162,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 10",
  },
  {
    barangay_id: 9163,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 11",
  },
  {
    barangay_id: 9164,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 2",
  },
  {
    barangay_id: 9165,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 3",
  },
  {
    barangay_id: 9166,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 4",
  },
  {
    barangay_id: 9167,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 5",
  },
  {
    barangay_id: 9168,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 6",
  },
  {
    barangay_id: 9169,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 7",
  },
  {
    barangay_id: 9170,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 8",
  },
  {
    barangay_id: 9171,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 9",
  },
  {
    barangay_id: 9195,
    municipality_id: 362,
    barangay_name: "Poblacion Barangay 9-A",
  },
  {
    barangay_id: 9172,
    municipality_id: 362,
    barangay_name: "Pusil",
  },
  {
    barangay_id: 9173,
    municipality_id: 362,
    barangay_name: "Quezon",
  },
  {
    barangay_id: 9174,
    municipality_id: 362,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 9175,
    municipality_id: 362,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 9176,
    municipality_id: 362,
    barangay_name: "Sampaguita",
  },
  {
    barangay_id: 9177,
    municipality_id: 362,
    barangay_name: "San Benito",
  },
  {
    barangay_id: 9178,
    municipality_id: 362,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 9179,
    municipality_id: 362,
    barangay_name: "San Celestino",
  },
  {
    barangay_id: 9180,
    municipality_id: 362,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 9181,
    municipality_id: 362,
    barangay_name: "San Guillermo",
  },
  {
    barangay_id: 9182,
    municipality_id: 362,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 9183,
    municipality_id: 362,
    barangay_name: "San Lucas",
  },
  {
    barangay_id: 9184,
    municipality_id: 362,
    barangay_name: "San Salvador",
  },
  {
    barangay_id: 9131,
    municipality_id: 362,
    barangay_name: "San Sebastian",
  },
  {
    barangay_id: 9187,
    municipality_id: 362,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 9188,
    municipality_id: 362,
    barangay_name: "Santo Toribio",
  },
  {
    barangay_id: 9185,
    municipality_id: 362,
    barangay_name: "Sapac",
  },
  {
    barangay_id: 9186,
    municipality_id: 362,
    barangay_name: "Sico",
  },
  {
    barangay_id: 9189,
    municipality_id: 362,
    barangay_name: "Talisay",
  },
  {
    barangay_id: 9190,
    municipality_id: 362,
    barangay_name: "Tambo",
  },
  {
    barangay_id: 9191,
    municipality_id: 362,
    barangay_name: "Tangob",
  },
  {
    barangay_id: 9192,
    municipality_id: 362,
    barangay_name: "Tanguay",
  },
  {
    barangay_id: 9193,
    municipality_id: 362,
    barangay_name: "Tibig",
  },
  {
    barangay_id: 9194,
    municipality_id: 362,
    barangay_name: "Tipacan",
  },
  {
    barangay_id: 9197,
    municipality_id: 363,
    barangay_name: "Apar",
  },
  {
    barangay_id: 9198,
    municipality_id: 363,
    barangay_name: "Balatbat",
  },
  {
    barangay_id: 9199,
    municipality_id: 363,
    barangay_name: "Balibago",
  },
  {
    barangay_id: 9200,
    municipality_id: 363,
    barangay_name: "Banalo",
  },
  {
    barangay_id: 9201,
    municipality_id: 363,
    barangay_name: "Biga",
  },
  {
    barangay_id: 9202,
    municipality_id: 363,
    barangay_name: "Bignay",
  },
  {
    barangay_id: 9203,
    municipality_id: 363,
    barangay_name: "Calo",
  },
  {
    barangay_id: 9204,
    municipality_id: 363,
    barangay_name: "Calumpit",
  },
  {
    barangay_id: 9205,
    municipality_id: 363,
    barangay_name: "Fabrica",
  },
  {
    barangay_id: 9206,
    municipality_id: 363,
    barangay_name: "Jaybanga",
  },
  {
    barangay_id: 9207,
    municipality_id: 363,
    barangay_name: "Lagadlarin",
  },
  {
    barangay_id: 9208,
    municipality_id: 363,
    barangay_name: "Mabilog Na Bundok",
  },
  {
    barangay_id: 9209,
    municipality_id: 363,
    barangay_name: "Malabrigo",
  },
  {
    barangay_id: 9210,
    municipality_id: 363,
    barangay_name: "Malalim Na Sanog",
  },
  {
    barangay_id: 9211,
    municipality_id: 363,
    barangay_name: "Malapad Na Parang",
  },
  {
    barangay_id: 9212,
    municipality_id: 363,
    barangay_name: "Masaguitsit",
  },
  {
    barangay_id: 9213,
    municipality_id: 363,
    barangay_name: "Nagtalongtong",
  },
  {
    barangay_id: 9214,
    municipality_id: 363,
    barangay_name: "Nagtoctoc",
  },
  {
    barangay_id: 9215,
    municipality_id: 363,
    barangay_name: "Olo-olo",
  },
  {
    barangay_id: 9216,
    municipality_id: 363,
    barangay_name: "Pinaghawanan",
  },
  {
    barangay_id: 9222,
    municipality_id: 363,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 9217,
    municipality_id: 363,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 9218,
    municipality_id: 363,
    barangay_name: "San Nicolas",
  },
  {
    barangay_id: 9219,
    municipality_id: 363,
    barangay_name: "Sawang",
  },
  {
    barangay_id: 9220,
    municipality_id: 363,
    barangay_name: "Soloc",
  },
  {
    barangay_id: 9221,
    municipality_id: 363,
    barangay_name: "Tayuman",
  },
  {
    barangay_id: 9224,
    municipality_id: 364,
    barangay_name: "Anilao East",
  },
  {
    barangay_id: 9223,
    municipality_id: 364,
    barangay_name: "Anilao Proper",
  },
  {
    barangay_id: 9225,
    municipality_id: 364,
    barangay_name: "Bagalangit",
  },
  {
    barangay_id: 9226,
    municipality_id: 364,
    barangay_name: "Bulacan",
  },
  {
    barangay_id: 9227,
    municipality_id: 364,
    barangay_name: "Calamias",
  },
  {
    barangay_id: 9228,
    municipality_id: 364,
    barangay_name: "Estrella",
  },
  {
    barangay_id: 9229,
    municipality_id: 364,
    barangay_name: "Gasang",
  },
  {
    barangay_id: 9230,
    municipality_id: 364,
    barangay_name: "Laurel",
  },
  {
    barangay_id: 9231,
    municipality_id: 364,
    barangay_name: "Ligaya",
  },
  {
    barangay_id: 9232,
    municipality_id: 364,
    barangay_name: "Mainaga",
  },
  {
    barangay_id: 9233,
    municipality_id: 364,
    barangay_name: "Mainit",
  },
  {
    barangay_id: 9234,
    municipality_id: 364,
    barangay_name: "Majuben",
  },
  {
    barangay_id: 9235,
    municipality_id: 364,
    barangay_name: "Malimatoc I",
  },
  {
    barangay_id: 9236,
    municipality_id: 364,
    barangay_name: "Malimatoc II",
  },
  {
    barangay_id: 9237,
    municipality_id: 364,
    barangay_name: "Nag-Iba",
  },
  {
    barangay_id: 9238,
    municipality_id: 364,
    barangay_name: "Pilahan",
  },
  {
    barangay_id: 9239,
    municipality_id: 364,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 9240,
    municipality_id: 364,
    barangay_name: "Pulang Lupa",
  },
  {
    barangay_id: 9241,
    municipality_id: 364,
    barangay_name: "Pulong Anahao",
  },
  {
    barangay_id: 9242,
    municipality_id: 364,
    barangay_name: "Pulong Balibaguhan",
  },
  {
    barangay_id: 9243,
    municipality_id: 364,
    barangay_name: "Pulong Niogan",
  },
  {
    barangay_id: 9244,
    municipality_id: 364,
    barangay_name: "Saguing",
  },
  {
    barangay_id: 9245,
    municipality_id: 364,
    barangay_name: "Sampaguita",
  },
  {
    barangay_id: 9246,
    municipality_id: 364,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 9247,
    municipality_id: 364,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 9248,
    municipality_id: 364,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 9249,
    municipality_id: 364,
    barangay_name: "San Teodoro",
  },
  {
    barangay_id: 9250,
    municipality_id: 364,
    barangay_name: "Santa Ana",
  },
  {
    barangay_id: 9251,
    municipality_id: 364,
    barangay_name: "Santa Mesa",
  },
  {
    barangay_id: 9252,
    municipality_id: 364,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 9253,
    municipality_id: 364,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 9254,
    municipality_id: 364,
    barangay_name: "Solo",
  },
  {
    barangay_id: 9256,
    municipality_id: 364,
    barangay_name: "Talaga East",
  },
  {
    barangay_id: 9255,
    municipality_id: 364,
    barangay_name: "Talaga Proper",
  },
  {
    barangay_id: 9257,
    municipality_id: 365,
    barangay_name: "Bagong Pook",
  },
  {
    barangay_id: 9258,
    municipality_id: 365,
    barangay_name: "Bilucao",
  },
  {
    barangay_id: 9259,
    municipality_id: 365,
    barangay_name: "Bulihan",
  },
  {
    barangay_id: 9261,
    municipality_id: 365,
    barangay_name: "Luta Del Norte",
  },
  {
    barangay_id: 9262,
    municipality_id: 365,
    barangay_name: "Luta Del Sur",
  },
  {
    barangay_id: 9263,
    municipality_id: 365,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 9264,
    municipality_id: 365,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 9265,
    municipality_id: 365,
    barangay_name: "San Fernando",
  },
  {
    barangay_id: 9260,
    municipality_id: 365,
    barangay_name: "San Gregorio",
  },
  {
    barangay_id: 9266,
    municipality_id: 365,
    barangay_name: "San Isidro East",
  },
  {
    barangay_id: 9267,
    municipality_id: 365,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 9269,
    municipality_id: 365,
    barangay_name: "San Pedro I",
  },
  {
    barangay_id: 9268,
    municipality_id: 365,
    barangay_name: "San Pedro II",
  },
  {
    barangay_id: 9270,
    municipality_id: 365,
    barangay_name: "San Pioquinto",
  },
  {
    barangay_id: 9271,
    municipality_id: 365,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 9287,
    municipality_id: 366,
    barangay_name: "Barangay II-A (Pob.)",
  },
  {
    barangay_id: 9276,
    municipality_id: 366,
    barangay_name: "Bayorbor",
  },
  {
    barangay_id: 9277,
    municipality_id: 366,
    barangay_name: "Bubuyan",
  },
  {
    barangay_id: 9278,
    municipality_id: 366,
    barangay_name: "Calingatan",
  },
  {
    barangay_id: 9272,
    municipality_id: 366,
    barangay_name: "District I (Pob.)",
  },
  {
    barangay_id: 9273,
    municipality_id: 366,
    barangay_name: "District II (Pob.)",
  },
  {
    barangay_id: 9274,
    municipality_id: 366,
    barangay_name: "District III (Pob.)",
  },
  {
    barangay_id: 9275,
    municipality_id: 366,
    barangay_name: "District IV (Pob.)",
  },
  {
    barangay_id: 9279,
    municipality_id: 366,
    barangay_name: "Kinalaglagan",
  },
  {
    barangay_id: 9280,
    municipality_id: 366,
    barangay_name: "Loob",
  },
  {
    barangay_id: 9281,
    municipality_id: 366,
    barangay_name: "Lumang Lipa",
  },
  {
    barangay_id: 9282,
    municipality_id: 366,
    barangay_name: "Manggahan",
  },
  {
    barangay_id: 9283,
    municipality_id: 366,
    barangay_name: "Nangkaan",
  },
  {
    barangay_id: 9284,
    municipality_id: 366,
    barangay_name: "San Sebastian",
  },
  {
    barangay_id: 9285,
    municipality_id: 366,
    barangay_name: "Santol",
  },
  {
    barangay_id: 9286,
    municipality_id: 366,
    barangay_name: "Upa",
  },
  {
    barangay_id: 9288,
    municipality_id: 367,
    barangay_name: "Aga",
  },
  {
    barangay_id: 9289,
    municipality_id: 367,
    barangay_name: "Balaytigui",
  },
  {
    barangay_id: 9290,
    municipality_id: 367,
    barangay_name: "Banilad",
  },
  {
    barangay_id: 9329,
    municipality_id: 367,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 9291,
    municipality_id: 367,
    barangay_name: "Barangay 10 (Pob.)",
  },
  {
    barangay_id: 9292,
    municipality_id: 367,
    barangay_name: "Barangay 11 (Pob.)",
  },
  {
    barangay_id: 9293,
    municipality_id: 367,
    barangay_name: "Barangay 12 (Pob.)",
  },
  {
    barangay_id: 9294,
    municipality_id: 367,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 9295,
    municipality_id: 367,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 9296,
    municipality_id: 367,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 9297,
    municipality_id: 367,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 9298,
    municipality_id: 367,
    barangay_name: "Barangay 6 (Pob.)",
  },
  {
    barangay_id: 9299,
    municipality_id: 367,
    barangay_name: "Barangay 7 (Pob.)",
  },
  {
    barangay_id: 9300,
    municipality_id: 367,
    barangay_name: "Barangay 8 (Pob.)",
  },
  {
    barangay_id: 9301,
    municipality_id: 367,
    barangay_name: "Barangay 9 (Pob.)",
  },
  {
    barangay_id: 9302,
    municipality_id: 367,
    barangay_name: "Bilaran",
  },
  {
    barangay_id: 9303,
    municipality_id: 367,
    barangay_name: "Bucana",
  },
  {
    barangay_id: 9304,
    municipality_id: 367,
    barangay_name: "Bulihan",
  },
  {
    barangay_id: 9305,
    municipality_id: 367,
    barangay_name: "Bunducan",
  },
  {
    barangay_id: 9306,
    municipality_id: 367,
    barangay_name: "Butucan",
  },
  {
    barangay_id: 9307,
    municipality_id: 367,
    barangay_name: "Calayo",
  },
  {
    barangay_id: 9308,
    municipality_id: 367,
    barangay_name: "Catandaan",
  },
  {
    barangay_id: 9311,
    municipality_id: 367,
    barangay_name: "Cogunan",
  },
  {
    barangay_id: 9312,
    municipality_id: 367,
    barangay_name: "Dayap",
  },
  {
    barangay_id: 9309,
    municipality_id: 367,
    barangay_name: "Kaylaway",
  },
  {
    barangay_id: 9310,
    municipality_id: 367,
    barangay_name: "Kayrilaw",
  },
  {
    barangay_id: 9313,
    municipality_id: 367,
    barangay_name: "Latag",
  },
  {
    barangay_id: 9314,
    municipality_id: 367,
    barangay_name: "Looc",
  },
  {
    barangay_id: 9315,
    municipality_id: 367,
    barangay_name: "Lumbangan",
  },
  {
    barangay_id: 9316,
    municipality_id: 367,
    barangay_name: "Malapad Na Bato",
  },
  {
    barangay_id: 9317,
    municipality_id: 367,
    barangay_name: "Mataas Na Pulo",
  },
  {
    barangay_id: 9318,
    municipality_id: 367,
    barangay_name: "Maugat",
  },
  {
    barangay_id: 9319,
    municipality_id: 367,
    barangay_name: "Munting Indan",
  },
  {
    barangay_id: 9320,
    municipality_id: 367,
    barangay_name: "Natipuan",
  },
  {
    barangay_id: 9321,
    municipality_id: 367,
    barangay_name: "Pantalan",
  },
  {
    barangay_id: 9322,
    municipality_id: 367,
    barangay_name: "Papaya",
  },
  {
    barangay_id: 9323,
    municipality_id: 367,
    barangay_name: "Putat",
  },
  {
    barangay_id: 9324,
    municipality_id: 367,
    barangay_name: "Reparo",
  },
  {
    barangay_id: 9325,
    municipality_id: 367,
    barangay_name: "Talangan",
  },
  {
    barangay_id: 9326,
    municipality_id: 367,
    barangay_name: "Tumalim",
  },
  {
    barangay_id: 9327,
    municipality_id: 367,
    barangay_name: "Utod",
  },
  {
    barangay_id: 9328,
    municipality_id: 367,
    barangay_name: "Wawa",
  },
  {
    barangay_id: 9330,
    municipality_id: 368,
    barangay_name: "Banaba",
  },
  {
    barangay_id: 9331,
    municipality_id: 368,
    barangay_name: "Banaybanay",
  },
  {
    barangay_id: 9332,
    municipality_id: 368,
    barangay_name: "Bawi",
  },
  {
    barangay_id: 9333,
    municipality_id: 368,
    barangay_name: "Bukal",
  },
  {
    barangay_id: 9334,
    municipality_id: 368,
    barangay_name: "Castillo",
  },
  {
    barangay_id: 9335,
    municipality_id: 368,
    barangay_name: "Cawongan",
  },
  {
    barangay_id: 9336,
    municipality_id: 368,
    barangay_name: "Manggas",
  },
  {
    barangay_id: 9337,
    municipality_id: 368,
    barangay_name: "Maugat East",
  },
  {
    barangay_id: 9338,
    municipality_id: 368,
    barangay_name: "Maugat West",
  },
  {
    barangay_id: 9339,
    municipality_id: 368,
    barangay_name: "Pansol",
  },
  {
    barangay_id: 9340,
    municipality_id: 368,
    barangay_name: "Payapa",
  },
  {
    barangay_id: 9341,
    municipality_id: 368,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 9342,
    municipality_id: 368,
    barangay_name: "Quilo-quilo North",
  },
  {
    barangay_id: 9343,
    municipality_id: 368,
    barangay_name: "Quilo-quilo South",
  },
  {
    barangay_id: 9344,
    municipality_id: 368,
    barangay_name: "San Felipe",
  },
  {
    barangay_id: 9345,
    municipality_id: 368,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 9346,
    municipality_id: 368,
    barangay_name: "Tamak",
  },
  {
    barangay_id: 9347,
    municipality_id: 368,
    barangay_name: "Tangob",
  },
  {
    barangay_id: 9348,
    municipality_id: 369,
    barangay_name: "Alupay",
  },
  {
    barangay_id: 9349,
    municipality_id: 369,
    barangay_name: "Antipolo",
  },
  {
    barangay_id: 9350,
    municipality_id: 369,
    barangay_name: "Bagong Pook",
  },
  {
    barangay_id: 9351,
    municipality_id: 369,
    barangay_name: "Balibago",
  },
  {
    barangay_id: 9378,
    municipality_id: 369,
    barangay_name: "Barangay A (Pob.)",
  },
  {
    barangay_id: 9379,
    municipality_id: 369,
    barangay_name: "Barangay B (Pob.)",
  },
  {
    barangay_id: 9380,
    municipality_id: 369,
    barangay_name: "Barangay C (Pob.)",
  },
  {
    barangay_id: 9381,
    municipality_id: 369,
    barangay_name: "Barangay D (Pob.)",
  },
  {
    barangay_id: 9382,
    municipality_id: 369,
    barangay_name: "Barangay E (Pob.)",
  },
  {
    barangay_id: 9352,
    municipality_id: 369,
    barangay_name: "Bayawang",
  },
  {
    barangay_id: 9353,
    municipality_id: 369,
    barangay_name: "Baybayin",
  },
  {
    barangay_id: 9354,
    municipality_id: 369,
    barangay_name: "Bulihan",
  },
  {
    barangay_id: 9355,
    municipality_id: 369,
    barangay_name: "Cahigam",
  },
  {
    barangay_id: 9356,
    municipality_id: 369,
    barangay_name: "Calantas",
  },
  {
    barangay_id: 9357,
    municipality_id: 369,
    barangay_name: "Colongan",
  },
  {
    barangay_id: 9358,
    municipality_id: 369,
    barangay_name: "Itlugan",
  },
  {
    barangay_id: 9394,
    municipality_id: 369,
    barangay_name: "Leviste",
  },
  {
    barangay_id: 9359,
    municipality_id: 369,
    barangay_name: "Lumbangan",
  },
  {
    barangay_id: 9360,
    municipality_id: 369,
    barangay_name: "Maalas-As",
  },
  {
    barangay_id: 9361,
    municipality_id: 369,
    barangay_name: "Mabato",
  },
  {
    barangay_id: 9362,
    municipality_id: 369,
    barangay_name: "Mabunga",
  },
  {
    barangay_id: 9363,
    municipality_id: 369,
    barangay_name: "Macalamcam A",
  },
  {
    barangay_id: 9364,
    municipality_id: 369,
    barangay_name: "Macalamcam B",
  },
  {
    barangay_id: 9365,
    municipality_id: 369,
    barangay_name: "Malaya",
  },
  {
    barangay_id: 9366,
    municipality_id: 369,
    barangay_name: "Maligaya",
  },
  {
    barangay_id: 9367,
    municipality_id: 369,
    barangay_name: "Marilag",
  },
  {
    barangay_id: 9368,
    municipality_id: 369,
    barangay_name: "Masaya",
  },
  {
    barangay_id: 9369,
    municipality_id: 369,
    barangay_name: "Matamis",
  },
  {
    barangay_id: 9370,
    municipality_id: 369,
    barangay_name: "Mavalor",
  },
  {
    barangay_id: 9371,
    municipality_id: 369,
    barangay_name: "Mayuro",
  },
  {
    barangay_id: 9372,
    municipality_id: 369,
    barangay_name: "Namuco",
  },
  {
    barangay_id: 9373,
    municipality_id: 369,
    barangay_name: "Namunga",
  },
  {
    barangay_id: 9375,
    municipality_id: 369,
    barangay_name: "Nasi",
  },
  {
    barangay_id: 9374,
    municipality_id: 369,
    barangay_name: "Natu",
  },
  {
    barangay_id: 9376,
    municipality_id: 369,
    barangay_name: "Palakpak",
  },
  {
    barangay_id: 9377,
    municipality_id: 369,
    barangay_name: "Pinagsibaan",
  },
  {
    barangay_id: 9383,
    municipality_id: 369,
    barangay_name: "Putingkahoy",
  },
  {
    barangay_id: 9384,
    municipality_id: 369,
    barangay_name: "Quilib",
  },
  {
    barangay_id: 9385,
    municipality_id: 369,
    barangay_name: "Salao",
  },
  {
    barangay_id: 9386,
    municipality_id: 369,
    barangay_name: "San Carlos",
  },
  {
    barangay_id: 9387,
    municipality_id: 369,
    barangay_name: "San Ignacio",
  },
  {
    barangay_id: 9388,
    municipality_id: 369,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 9389,
    municipality_id: 369,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 9390,
    municipality_id: 369,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 9391,
    municipality_id: 369,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 9392,
    municipality_id: 369,
    barangay_name: "Timbugan",
  },
  {
    barangay_id: 9393,
    municipality_id: 369,
    barangay_name: "Tiquiwan",
  },
  {
    barangay_id: 9395,
    municipality_id: 369,
    barangay_name: "Tulos",
  },
  {
    barangay_id: 9396,
    municipality_id: 370,
    barangay_name: "Aguila",
  },
  {
    barangay_id: 9397,
    municipality_id: 370,
    barangay_name: "Anus",
  },
  {
    barangay_id: 9398,
    municipality_id: 370,
    barangay_name: "Aya",
  },
  {
    barangay_id: 9399,
    municipality_id: 370,
    barangay_name: "Bagong Pook",
  },
  {
    barangay_id: 9400,
    municipality_id: 370,
    barangay_name: "Balagtasin",
  },
  {
    barangay_id: 9401,
    municipality_id: 370,
    barangay_name: "Balagtasin I",
  },
  {
    barangay_id: 9402,
    municipality_id: 370,
    barangay_name: "Banaybanay I",
  },
  {
    barangay_id: 9403,
    municipality_id: 370,
    barangay_name: "Banaybanay II",
  },
  {
    barangay_id: 9404,
    municipality_id: 370,
    barangay_name: "Bigain I",
  },
  {
    barangay_id: 9405,
    municipality_id: 370,
    barangay_name: "Bigain II",
  },
  {
    barangay_id: 9428,
    municipality_id: 370,
    barangay_name: "Bigain South",
  },
  {
    barangay_id: 9406,
    municipality_id: 370,
    barangay_name: "Calansayan",
  },
  {
    barangay_id: 9407,
    municipality_id: 370,
    barangay_name: "Dagatan",
  },
  {
    barangay_id: 9408,
    municipality_id: 370,
    barangay_name: "Don Luis",
  },
  {
    barangay_id: 9409,
    municipality_id: 370,
    barangay_name: "Galamay-Amo",
  },
  {
    barangay_id: 9410,
    municipality_id: 370,
    barangay_name: "Lalayat",
  },
  {
    barangay_id: 9411,
    municipality_id: 370,
    barangay_name: "Lapolapo I",
  },
  {
    barangay_id: 9412,
    municipality_id: 370,
    barangay_name: "Lapolapo II",
  },
  {
    barangay_id: 9413,
    municipality_id: 370,
    barangay_name: "Lepute",
  },
  {
    barangay_id: 9414,
    municipality_id: 370,
    barangay_name: "Lumil",
  },
  {
    barangay_id: 9425,
    municipality_id: 370,
    barangay_name: "Mojon-Tampoy",
  },
  {
    barangay_id: 9415,
    municipality_id: 370,
    barangay_name: "Natunuan",
  },
  {
    barangay_id: 9416,
    municipality_id: 370,
    barangay_name: "Palanca",
  },
  {
    barangay_id: 9417,
    municipality_id: 370,
    barangay_name: "Pinagtung-Ulan",
  },
  {
    barangay_id: 9418,
    municipality_id: 370,
    barangay_name: "Poblacion Barangay I",
  },
  {
    barangay_id: 9419,
    municipality_id: 370,
    barangay_name: "Poblacion Barangay II",
  },
  {
    barangay_id: 9420,
    municipality_id: 370,
    barangay_name: "Poblacion Barangay III",
  },
  {
    barangay_id: 9421,
    municipality_id: 370,
    barangay_name: "Poblacion Barangay IV",
  },
  {
    barangay_id: 9422,
    municipality_id: 370,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 9423,
    municipality_id: 370,
    barangay_name: "Salaban",
  },
  {
    barangay_id: 9424,
    municipality_id: 370,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 9426,
    municipality_id: 370,
    barangay_name: "Taysan",
  },
  {
    barangay_id: 9427,
    municipality_id: 370,
    barangay_name: "Tugtug",
  },
  {
    barangay_id: 9429,
    municipality_id: 371,
    barangay_name: "Abung",
  },
  {
    barangay_id: 9430,
    municipality_id: 371,
    barangay_name: "Balagbag",
  },
  {
    barangay_id: 9431,
    municipality_id: 371,
    barangay_name: "Barualte",
  },
  {
    barangay_id: 9432,
    municipality_id: 371,
    barangay_name: "Bataan",
  },
  {
    barangay_id: 9433,
    municipality_id: 371,
    barangay_name: "Buhay Na Sapa",
  },
  {
    barangay_id: 9434,
    municipality_id: 371,
    barangay_name: "Bulsa",
  },
  {
    barangay_id: 9435,
    municipality_id: 371,
    barangay_name: "Calicanto",
  },
  {
    barangay_id: 9436,
    municipality_id: 371,
    barangay_name: "Calitcalit",
  },
  {
    barangay_id: 9437,
    municipality_id: 371,
    barangay_name: "Calubcub I",
  },
  {
    barangay_id: 9438,
    municipality_id: 371,
    barangay_name: "Calubcub II",
  },
  {
    barangay_id: 9439,
    municipality_id: 371,
    barangay_name: "Catmon",
  },
  {
    barangay_id: 9440,
    municipality_id: 371,
    barangay_name: "Coloconto",
  },
  {
    barangay_id: 9441,
    municipality_id: 371,
    barangay_name: "Escribano",
  },
  {
    barangay_id: 9442,
    municipality_id: 371,
    barangay_name: "Hugom",
  },
  {
    barangay_id: 9443,
    municipality_id: 371,
    barangay_name: "Imelda",
  },
  {
    barangay_id: 9444,
    municipality_id: 371,
    barangay_name: "Janaojanao",
  },
  {
    barangay_id: 9446,
    municipality_id: 371,
    barangay_name: "Laiya-Aplaya",
  },
  {
    barangay_id: 9445,
    municipality_id: 371,
    barangay_name: "Laiya-Ibabao",
  },
  {
    barangay_id: 9447,
    municipality_id: 371,
    barangay_name: "Libato",
  },
  {
    barangay_id: 9448,
    municipality_id: 371,
    barangay_name: "Lipahan",
  },
  {
    barangay_id: 9449,
    municipality_id: 371,
    barangay_name: "Mabalanoy",
  },
  {
    barangay_id: 9451,
    municipality_id: 371,
    barangay_name: "Maraykit",
  },
  {
    barangay_id: 9452,
    municipality_id: 371,
    barangay_name: "Muzon",
  },
  {
    barangay_id: 9450,
    municipality_id: 371,
    barangay_name: "Nagsaulay",
  },
  {
    barangay_id: 9453,
    municipality_id: 371,
    barangay_name: "Palahanan I",
  },
  {
    barangay_id: 9454,
    municipality_id: 371,
    barangay_name: "Palahanan II",
  },
  {
    barangay_id: 9455,
    municipality_id: 371,
    barangay_name: "Palingowak",
  },
  {
    barangay_id: 9456,
    municipality_id: 371,
    barangay_name: "Pinagbayanan",
  },
  {
    barangay_id: 9457,
    municipality_id: 371,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 9458,
    municipality_id: 371,
    barangay_name: "Poctol",
  },
  {
    barangay_id: 9459,
    municipality_id: 371,
    barangay_name: "Pulangbato",
  },
  {
    barangay_id: 9460,
    municipality_id: 371,
    barangay_name: "Putingbuhangin",
  },
  {
    barangay_id: 9461,
    municipality_id: 371,
    barangay_name: "Quipot",
  },
  {
    barangay_id: 9462,
    municipality_id: 371,
    barangay_name: "Sampiro",
  },
  {
    barangay_id: 9463,
    municipality_id: 371,
    barangay_name: "Sapangan",
  },
  {
    barangay_id: 9464,
    municipality_id: 371,
    barangay_name: "Sico I",
  },
  {
    barangay_id: 9465,
    municipality_id: 371,
    barangay_name: "Sico II",
  },
  {
    barangay_id: 9466,
    municipality_id: 371,
    barangay_name: "Subukin",
  },
  {
    barangay_id: 9467,
    municipality_id: 371,
    barangay_name: "Talahiban I",
  },
  {
    barangay_id: 9468,
    municipality_id: 371,
    barangay_name: "Talahiban II",
  },
  {
    barangay_id: 9469,
    municipality_id: 371,
    barangay_name: "Ticalan",
  },
  {
    barangay_id: 9470,
    municipality_id: 371,
    barangay_name: "Tipaz",
  },
  {
    barangay_id: 9471,
    municipality_id: 372,
    barangay_name: "Abiacao",
  },
  {
    barangay_id: 9472,
    municipality_id: 372,
    barangay_name: "Bagong Tubig",
  },
  {
    barangay_id: 9473,
    municipality_id: 372,
    barangay_name: "Balagtasin",
  },
  {
    barangay_id: 9474,
    municipality_id: 372,
    barangay_name: "Balite",
  },
  {
    barangay_id: 9475,
    municipality_id: 372,
    barangay_name: "Banoyo",
  },
  {
    barangay_id: 9476,
    municipality_id: 372,
    barangay_name: "Boboy",
  },
  {
    barangay_id: 9477,
    municipality_id: 372,
    barangay_name: "Bonliw",
  },
  {
    barangay_id: 9479,
    municipality_id: 372,
    barangay_name: "Calumpang East",
  },
  {
    barangay_id: 9478,
    municipality_id: 372,
    barangay_name: "Calumpang West",
  },
  {
    barangay_id: 9480,
    municipality_id: 372,
    barangay_name: "Dulangan",
  },
  {
    barangay_id: 9481,
    municipality_id: 372,
    barangay_name: "Durungao",
  },
  {
    barangay_id: 9482,
    municipality_id: 372,
    barangay_name: "Locloc",
  },
  {
    barangay_id: 9483,
    municipality_id: 372,
    barangay_name: "Luya",
  },
  {
    barangay_id: 9484,
    municipality_id: 372,
    barangay_name: "Mahabang Parang",
  },
  {
    barangay_id: 9485,
    municipality_id: 372,
    barangay_name: "Manggahan",
  },
  {
    barangay_id: 9486,
    municipality_id: 372,
    barangay_name: "Muzon",
  },
  {
    barangay_id: 9496,
    municipality_id: 372,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 9487,
    municipality_id: 372,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 9488,
    municipality_id: 372,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 9489,
    municipality_id: 372,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 9490,
    municipality_id: 372,
    barangay_name: "San Martin",
  },
  {
    barangay_id: 9491,
    municipality_id: 372,
    barangay_name: "Santa Monica",
  },
  {
    barangay_id: 9492,
    municipality_id: 372,
    barangay_name: "Taliba",
  },
  {
    barangay_id: 9493,
    municipality_id: 372,
    barangay_name: "Talon",
  },
  {
    barangay_id: 9494,
    municipality_id: 372,
    barangay_name: "Tejero",
  },
  {
    barangay_id: 9495,
    municipality_id: 372,
    barangay_name: "Tungal",
  },
  {
    barangay_id: 9497,
    municipality_id: 373,
    barangay_name: "Abelo",
  },
  {
    barangay_id: 9513,
    municipality_id: 373,
    barangay_name: "Alas-as",
  },
  {
    barangay_id: 9498,
    municipality_id: 373,
    barangay_name: "Balete",
  },
  {
    barangay_id: 9499,
    municipality_id: 373,
    barangay_name: "Baluk-baluk",
  },
  {
    barangay_id: 9500,
    municipality_id: 373,
    barangay_name: "Bancoro",
  },
  {
    barangay_id: 9501,
    municipality_id: 373,
    barangay_name: "Bangin",
  },
  {
    barangay_id: 9502,
    municipality_id: 373,
    barangay_name: "Calangay",
  },
  {
    barangay_id: 9503,
    municipality_id: 373,
    barangay_name: "Hipit",
  },
  {
    barangay_id: 9504,
    municipality_id: 373,
    barangay_name: "Maabud North",
  },
  {
    barangay_id: 9505,
    municipality_id: 373,
    barangay_name: "Maabud South",
  },
  {
    barangay_id: 9506,
    municipality_id: 373,
    barangay_name: "Munlawin",
  },
  {
    barangay_id: 9507,
    municipality_id: 373,
    barangay_name: "Pansipit",
  },
  {
    barangay_id: 9508,
    municipality_id: 373,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 9514,
    municipality_id: 373,
    barangay_name: "Pulang-Bato",
  },
  {
    barangay_id: 9509,
    municipality_id: 373,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 9510,
    municipality_id: 373,
    barangay_name: "Sinturisan",
  },
  {
    barangay_id: 9511,
    municipality_id: 373,
    barangay_name: "Tagudtod",
  },
  {
    barangay_id: 9512,
    municipality_id: 373,
    barangay_name: "Talang",
  },
  {
    barangay_id: 9515,
    municipality_id: 374,
    barangay_name: "Alalum",
  },
  {
    barangay_id: 9516,
    municipality_id: 374,
    barangay_name: "Antipolo",
  },
  {
    barangay_id: 9517,
    municipality_id: 374,
    barangay_name: "Balimbing",
  },
  {
    barangay_id: 9518,
    municipality_id: 374,
    barangay_name: "Banaba",
  },
  {
    barangay_id: 9519,
    municipality_id: 374,
    barangay_name: "Bayanan",
  },
  {
    barangay_id: 9520,
    municipality_id: 374,
    barangay_name: "Danglayan",
  },
  {
    barangay_id: 9521,
    municipality_id: 374,
    barangay_name: "Del Pilar",
  },
  {
    barangay_id: 9522,
    municipality_id: 374,
    barangay_name: "Gelerang Kawayan",
  },
  {
    barangay_id: 9523,
    municipality_id: 374,
    barangay_name: "Ilat North",
  },
  {
    barangay_id: 9524,
    municipality_id: 374,
    barangay_name: "Ilat South",
  },
  {
    barangay_id: 9525,
    municipality_id: 374,
    barangay_name: "Kaingin",
  },
  {
    barangay_id: 9526,
    municipality_id: 374,
    barangay_name: "Laurel",
  },
  {
    barangay_id: 9527,
    municipality_id: 374,
    barangay_name: "Malaking Pook",
  },
  {
    barangay_id: 9528,
    municipality_id: 374,
    barangay_name: "Mataas Na Lupa",
  },
  {
    barangay_id: 9529,
    municipality_id: 374,
    barangay_name: "Natunuan North",
  },
  {
    barangay_id: 9530,
    municipality_id: 374,
    barangay_name: "Natunuan South",
  },
  {
    barangay_id: 9531,
    municipality_id: 374,
    barangay_name: "Padre Castillo",
  },
  {
    barangay_id: 9532,
    municipality_id: 374,
    barangay_name: "Palsahingin",
  },
  {
    barangay_id: 9533,
    municipality_id: 374,
    barangay_name: "Pila",
  },
  {
    barangay_id: 9534,
    municipality_id: 374,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 9535,
    municipality_id: 374,
    barangay_name: "Pook Ni Banal",
  },
  {
    barangay_id: 9536,
    municipality_id: 374,
    barangay_name: "Pook Ni Kapitan",
  },
  {
    barangay_id: 9537,
    municipality_id: 374,
    barangay_name: "Resplandor",
  },
  {
    barangay_id: 9538,
    municipality_id: 374,
    barangay_name: "Sambat",
  },
  {
    barangay_id: 9539,
    municipality_id: 374,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 9540,
    municipality_id: 374,
    barangay_name: "San Mariano",
  },
  {
    barangay_id: 9541,
    municipality_id: 374,
    barangay_name: "San Mateo",
  },
  {
    barangay_id: 9542,
    municipality_id: 374,
    barangay_name: "Santa Elena",
  },
  {
    barangay_id: 9543,
    municipality_id: 374,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 9544,
    municipality_id: 375,
    barangay_name: "Antipolo",
  },
  {
    barangay_id: 9545,
    municipality_id: 375,
    barangay_name: "Bihis",
  },
  {
    barangay_id: 9546,
    municipality_id: 375,
    barangay_name: "Burol",
  },
  {
    barangay_id: 9547,
    municipality_id: 375,
    barangay_name: "Calayaan",
  },
  {
    barangay_id: 9548,
    municipality_id: 375,
    barangay_name: "Calumala",
  },
  {
    barangay_id: 9549,
    municipality_id: 375,
    barangay_name: "Cuta East",
  },
  {
    barangay_id: 9550,
    municipality_id: 375,
    barangay_name: "Cutang Cawayan",
  },
  {
    barangay_id: 9551,
    municipality_id: 375,
    barangay_name: "Irukan",
  },
  {
    barangay_id: 9552,
    municipality_id: 375,
    barangay_name: "Pacifico",
  },
  {
    barangay_id: 9553,
    municipality_id: 375,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 9559,
    municipality_id: 375,
    barangay_name: "Poblacion II",
  },
  {
    barangay_id: 9560,
    municipality_id: 375,
    barangay_name: "Poblacion III",
  },
  {
    barangay_id: 9554,
    municipality_id: 375,
    barangay_name: "Saimsim",
  },
  {
    barangay_id: 9555,
    municipality_id: 375,
    barangay_name: "Sampa",
  },
  {
    barangay_id: 9556,
    municipality_id: 375,
    barangay_name: "Sinipian",
  },
  {
    barangay_id: 9557,
    municipality_id: 375,
    barangay_name: "Tambo Ibaba",
  },
  {
    barangay_id: 9558,
    municipality_id: 375,
    barangay_name: "Tambo Ilaya",
  },
  {
    barangay_id: 9561,
    municipality_id: 376,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 9562,
    municipality_id: 376,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 9563,
    municipality_id: 376,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 9564,
    municipality_id: 376,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 9565,
    municipality_id: 376,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 9566,
    municipality_id: 376,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 9567,
    municipality_id: 376,
    barangay_name: "San Bartolome",
  },
  {
    barangay_id: 9568,
    municipality_id: 376,
    barangay_name: "San Felix",
  },
  {
    barangay_id: 9569,
    municipality_id: 376,
    barangay_name: "San Fernando",
  },
  {
    barangay_id: 9570,
    municipality_id: 376,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 9571,
    municipality_id: 376,
    barangay_name: "San Isidro Norte",
  },
  {
    barangay_id: 9572,
    municipality_id: 376,
    barangay_name: "San Isidro Sur",
  },
  {
    barangay_id: 9573,
    municipality_id: 376,
    barangay_name: "San Joaquin",
  },
  {
    barangay_id: 9574,
    municipality_id: 376,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 9575,
    municipality_id: 376,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 9576,
    municipality_id: 376,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 9577,
    municipality_id: 376,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 9578,
    municipality_id: 376,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 9579,
    municipality_id: 376,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 9580,
    municipality_id: 376,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 9581,
    municipality_id: 376,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 9582,
    municipality_id: 376,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 9583,
    municipality_id: 376,
    barangay_name: "Santa Ana",
  },
  {
    barangay_id: 9584,
    municipality_id: 376,
    barangay_name: "Santa Anastacia",
  },
  {
    barangay_id: 9585,
    municipality_id: 376,
    barangay_name: "Santa Clara",
  },
  {
    barangay_id: 9586,
    municipality_id: 376,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 9587,
    municipality_id: 376,
    barangay_name: "Santa Elena",
  },
  {
    barangay_id: 9588,
    municipality_id: 376,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 9590,
    municipality_id: 376,
    barangay_name: "Santa Teresita",
  },
  {
    barangay_id: 9589,
    municipality_id: 376,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 9591,
    municipality_id: 377,
    barangay_name: "Apacay",
  },
  {
    barangay_id: 9592,
    municipality_id: 377,
    barangay_name: "Balisong",
  },
  {
    barangay_id: 9593,
    municipality_id: 377,
    barangay_name: "Bihis",
  },
  {
    barangay_id: 9594,
    municipality_id: 377,
    barangay_name: "Bolbok",
  },
  {
    barangay_id: 9595,
    municipality_id: 377,
    barangay_name: "Buli",
  },
  {
    barangay_id: 9596,
    municipality_id: 377,
    barangay_name: "Butong",
  },
  {
    barangay_id: 9597,
    municipality_id: 377,
    barangay_name: "Carasuche",
  },
  {
    barangay_id: 9598,
    municipality_id: 377,
    barangay_name: "Cawit",
  },
  {
    barangay_id: 9599,
    municipality_id: 377,
    barangay_name: "Caysasay",
  },
  {
    barangay_id: 9600,
    municipality_id: 377,
    barangay_name: "Cubamba",
  },
  {
    barangay_id: 9601,
    municipality_id: 377,
    barangay_name: "Cultihan",
  },
  {
    barangay_id: 9602,
    municipality_id: 377,
    barangay_name: "Gahol",
  },
  {
    barangay_id: 9603,
    municipality_id: 377,
    barangay_name: "Halang",
  },
  {
    barangay_id: 9604,
    municipality_id: 377,
    barangay_name: "Iba",
  },
  {
    barangay_id: 9605,
    municipality_id: 377,
    barangay_name: "Ilog",
  },
  {
    barangay_id: 9606,
    municipality_id: 377,
    barangay_name: "Imamawo",
  },
  {
    barangay_id: 9607,
    municipality_id: 377,
    barangay_name: "Ipil",
  },
  {
    barangay_id: 9626,
    municipality_id: 377,
    barangay_name: "Laguile",
  },
  {
    barangay_id: 9627,
    municipality_id: 377,
    barangay_name: "Latag",
  },
  {
    barangay_id: 9608,
    municipality_id: 377,
    barangay_name: "Luntal",
  },
  {
    barangay_id: 9609,
    municipality_id: 377,
    barangay_name: "Mahabang Lodlod",
  },
  {
    barangay_id: 9610,
    municipality_id: 377,
    barangay_name: "Niogan",
  },
  {
    barangay_id: 9611,
    municipality_id: 377,
    barangay_name: "Pansol",
  },
  {
    barangay_id: 9613,
    municipality_id: 377,
    barangay_name: "Poblacion 1",
  },
  {
    barangay_id: 9614,
    municipality_id: 377,
    barangay_name: "Poblacion 10",
  },
  {
    barangay_id: 9612,
    municipality_id: 377,
    barangay_name: "Poblacion 11",
  },
  {
    barangay_id: 9615,
    municipality_id: 377,
    barangay_name: "Poblacion 12",
  },
  {
    barangay_id: 9631,
    municipality_id: 377,
    barangay_name: "Poblacion 13",
  },
  {
    barangay_id: 9632,
    municipality_id: 377,
    barangay_name: "Poblacion 14",
  },
  {
    barangay_id: 9616,
    municipality_id: 377,
    barangay_name: "Poblacion 2",
  },
  {
    barangay_id: 9617,
    municipality_id: 377,
    barangay_name: "Poblacion 3",
  },
  {
    barangay_id: 9618,
    municipality_id: 377,
    barangay_name: "Poblacion 4",
  },
  {
    barangay_id: 9619,
    municipality_id: 377,
    barangay_name: "Poblacion 5",
  },
  {
    barangay_id: 9620,
    municipality_id: 377,
    barangay_name: "Poblacion 6",
  },
  {
    barangay_id: 9621,
    municipality_id: 377,
    barangay_name: "Poblacion 7",
  },
  {
    barangay_id: 9622,
    municipality_id: 377,
    barangay_name: "Poblacion 8",
  },
  {
    barangay_id: 9623,
    municipality_id: 377,
    barangay_name: "Poblacion 9",
  },
  {
    barangay_id: 9624,
    municipality_id: 377,
    barangay_name: "Pook",
  },
  {
    barangay_id: 9625,
    municipality_id: 377,
    barangay_name: "Seiran",
  },
  {
    barangay_id: 9630,
    municipality_id: 377,
    barangay_name: "Tatlong Maria",
  },
  {
    barangay_id: 9628,
    municipality_id: 377,
    barangay_name: "Tierra Alta",
  },
  {
    barangay_id: 9629,
    municipality_id: 377,
    barangay_name: "Tulo",
  },
  {
    barangay_id: 9633,
    municipality_id: 378,
    barangay_name: "Aya",
  },
  {
    barangay_id: 9634,
    municipality_id: 378,
    barangay_name: "Balas",
  },
  {
    barangay_id: 9635,
    municipality_id: 378,
    barangay_name: "Banga",
  },
  {
    barangay_id: 9636,
    municipality_id: 378,
    barangay_name: "Buco",
  },
  {
    barangay_id: 9637,
    municipality_id: 378,
    barangay_name: "Caloocan",
  },
  {
    barangay_id: 9638,
    municipality_id: 378,
    barangay_name: "Leynes",
  },
  {
    barangay_id: 9639,
    municipality_id: 378,
    barangay_name: "Miranda",
  },
  {
    barangay_id: 9640,
    municipality_id: 378,
    barangay_name: "Poblacion Barangay 1",
  },
  {
    barangay_id: 9641,
    municipality_id: 378,
    barangay_name: "Poblacion Barangay 2",
  },
  {
    barangay_id: 9642,
    municipality_id: 378,
    barangay_name: "Poblacion Barangay 3",
  },
  {
    barangay_id: 9643,
    municipality_id: 378,
    barangay_name: "Poblacion Barangay 4",
  },
  {
    barangay_id: 9644,
    municipality_id: 378,
    barangay_name: "Poblacion Barangay 5",
  },
  {
    barangay_id: 9645,
    municipality_id: 378,
    barangay_name: "Poblacion Barangay 6",
  },
  {
    barangay_id: 9646,
    municipality_id: 378,
    barangay_name: "Poblacion Barangay 7",
  },
  {
    barangay_id: 9647,
    municipality_id: 378,
    barangay_name: "Poblacion Barangay 8",
  },
  {
    barangay_id: 9648,
    municipality_id: 378,
    barangay_name: "Quiling",
  },
  {
    barangay_id: 9649,
    municipality_id: 378,
    barangay_name: "Sampaloc",
  },
  {
    barangay_id: 9650,
    municipality_id: 378,
    barangay_name: "San Guillermo",
  },
  {
    barangay_id: 9651,
    municipality_id: 378,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 9652,
    municipality_id: 378,
    barangay_name: "Tranca",
  },
  {
    barangay_id: 9653,
    municipality_id: 378,
    barangay_name: "Tumaway",
  },
  {
    barangay_id: 9654,
    municipality_id: 379,
    barangay_name: "Altura Bata",
  },
  {
    barangay_id: 9655,
    municipality_id: 379,
    barangay_name: "Altura Matanda",
  },
  {
    barangay_id: 9656,
    municipality_id: 379,
    barangay_name: "Altura-South",
  },
  {
    barangay_id: 9657,
    municipality_id: 379,
    barangay_name: "Ambulong",
  },
  {
    barangay_id: 9659,
    municipality_id: 379,
    barangay_name: "Bagbag",
  },
  {
    barangay_id: 9660,
    municipality_id: 379,
    barangay_name: "Bagumbayan",
  },
  {
    barangay_id: 9661,
    municipality_id: 379,
    barangay_name: "Balele",
  },
  {
    barangay_id: 9658,
    municipality_id: 379,
    barangay_name: "Banadero",
  },
  {
    barangay_id: 9662,
    municipality_id: 379,
    barangay_name: "Banjo East",
  },
  {
    barangay_id: 9663,
    municipality_id: 379,
    barangay_name: "Banjo Laurel",
  },
  {
    barangay_id: 9664,
    municipality_id: 379,
    barangay_name: "Bilog-bilog",
  },
  {
    barangay_id: 9665,
    municipality_id: 379,
    barangay_name: "Boot",
  },
  {
    barangay_id: 9666,
    municipality_id: 379,
    barangay_name: "Cale",
  },
  {
    barangay_id: 9667,
    municipality_id: 379,
    barangay_name: "Darasa",
  },
  {
    barangay_id: 9669,
    municipality_id: 379,
    barangay_name: "Gonzales",
  },
  {
    barangay_id: 9670,
    municipality_id: 379,
    barangay_name: "Hidalgo",
  },
  {
    barangay_id: 9671,
    municipality_id: 379,
    barangay_name: "Janopol",
  },
  {
    barangay_id: 9672,
    municipality_id: 379,
    barangay_name: "Janopol Oriental",
  },
  {
    barangay_id: 9673,
    municipality_id: 379,
    barangay_name: "Laurel",
  },
  {
    barangay_id: 9674,
    municipality_id: 379,
    barangay_name: "Luyos",
  },
  {
    barangay_id: 9675,
    municipality_id: 379,
    barangay_name: "Mabini",
  },
  {
    barangay_id: 9676,
    municipality_id: 379,
    barangay_name: "Malaking Pulo",
  },
  {
    barangay_id: 9677,
    municipality_id: 379,
    barangay_name: "Maria Paz",
  },
  {
    barangay_id: 9678,
    municipality_id: 379,
    barangay_name: "Maugat",
  },
  {
    barangay_id: 9679,
    municipality_id: 379,
    barangay_name: "Montaña",
  },
  {
    barangay_id: 9680,
    municipality_id: 379,
    barangay_name: "Natatas",
  },
  {
    barangay_id: 9668,
    municipality_id: 379,
    barangay_name: "Pagaspas",
  },
  {
    barangay_id: 9682,
    municipality_id: 379,
    barangay_name: "Pantay Bata",
  },
  {
    barangay_id: 9681,
    municipality_id: 379,
    barangay_name: "Pantay Matanda",
  },
  {
    barangay_id: 9683,
    municipality_id: 379,
    barangay_name: "Poblacion Barangay 1",
  },
  {
    barangay_id: 9684,
    municipality_id: 379,
    barangay_name: "Poblacion Barangay 2",
  },
  {
    barangay_id: 9685,
    municipality_id: 379,
    barangay_name: "Poblacion Barangay 3",
  },
  {
    barangay_id: 9686,
    municipality_id: 379,
    barangay_name: "Poblacion Barangay 4",
  },
  {
    barangay_id: 9687,
    municipality_id: 379,
    barangay_name: "Poblacion Barangay 5",
  },
  {
    barangay_id: 9688,
    municipality_id: 379,
    barangay_name: "Poblacion Barangay 6",
  },
  {
    barangay_id: 9689,
    municipality_id: 379,
    barangay_name: "Poblacion Barangay 7",
  },
  {
    barangay_id: 9690,
    municipality_id: 379,
    barangay_name: "Sala",
  },
  {
    barangay_id: 9691,
    municipality_id: 379,
    barangay_name: "Sambat",
  },
  {
    barangay_id: 9692,
    municipality_id: 379,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 9693,
    municipality_id: 379,
    barangay_name: "Santol",
  },
  {
    barangay_id: 9694,
    municipality_id: 379,
    barangay_name: "Santor",
  },
  {
    barangay_id: 9695,
    municipality_id: 379,
    barangay_name: "Sulpoc",
  },
  {
    barangay_id: 9696,
    municipality_id: 379,
    barangay_name: "Suplang",
  },
  {
    barangay_id: 9697,
    municipality_id: 379,
    barangay_name: "Talaga",
  },
  {
    barangay_id: 9698,
    municipality_id: 379,
    barangay_name: "Tinurik",
  },
  {
    barangay_id: 9699,
    municipality_id: 379,
    barangay_name: "Trapiche",
  },
  {
    barangay_id: 9700,
    municipality_id: 379,
    barangay_name: "Ulango",
  },
  {
    barangay_id: 9701,
    municipality_id: 379,
    barangay_name: "Wawa",
  },
  {
    barangay_id: 9702,
    municipality_id: 380,
    barangay_name: "Bacao",
  },
  {
    barangay_id: 9703,
    municipality_id: 380,
    barangay_name: "Bilogo",
  },
  {
    barangay_id: 9704,
    municipality_id: 380,
    barangay_name: "Bukal",
  },
  {
    barangay_id: 9705,
    municipality_id: 380,
    barangay_name: "Dagatan",
  },
  {
    barangay_id: 9706,
    municipality_id: 380,
    barangay_name: "Guinhawa",
  },
  {
    barangay_id: 9707,
    municipality_id: 380,
    barangay_name: "Laurel",
  },
  {
    barangay_id: 9708,
    municipality_id: 380,
    barangay_name: "Mabayabas",
  },
  {
    barangay_id: 9709,
    municipality_id: 380,
    barangay_name: "Mahanadiong",
  },
  {
    barangay_id: 9710,
    municipality_id: 380,
    barangay_name: "Mapulo",
  },
  {
    barangay_id: 9711,
    municipality_id: 380,
    barangay_name: "Mataas Na Lupa",
  },
  {
    barangay_id: 9712,
    municipality_id: 380,
    barangay_name: "Pag-Asa",
  },
  {
    barangay_id: 9713,
    municipality_id: 380,
    barangay_name: "Panghayaan",
  },
  {
    barangay_id: 9714,
    municipality_id: 380,
    barangay_name: "Piña",
  },
  {
    barangay_id: 9715,
    municipality_id: 380,
    barangay_name: "Pinagbayanan",
  },
  {
    barangay_id: 9716,
    municipality_id: 380,
    barangay_name: "Poblacion East",
  },
  {
    barangay_id: 9717,
    municipality_id: 380,
    barangay_name: "Poblacion West",
  },
  {
    barangay_id: 9718,
    municipality_id: 380,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 9719,
    municipality_id: 380,
    barangay_name: "San Marcelino",
  },
  {
    barangay_id: 9720,
    municipality_id: 380,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 9721,
    municipality_id: 380,
    barangay_name: "Tilambo",
  },
  {
    barangay_id: 9728,
    municipality_id: 381,
    barangay_name: "Barangay 13",
  },
  {
    barangay_id: 9729,
    municipality_id: 381,
    barangay_name: "Barangay 14",
  },
  {
    barangay_id: 9730,
    municipality_id: 381,
    barangay_name: "Barangay 15",
  },
  {
    barangay_id: 9722,
    municipality_id: 381,
    barangay_name: "Corona",
  },
  {
    barangay_id: 9723,
    municipality_id: 381,
    barangay_name: "Gamao",
  },
  {
    barangay_id: 9724,
    municipality_id: 381,
    barangay_name: "Makawayan",
  },
  {
    barangay_id: 9725,
    municipality_id: 381,
    barangay_name: "Marikaban",
  },
  {
    barangay_id: 9726,
    municipality_id: 381,
    barangay_name: "Papaya",
  },
  {
    barangay_id: 9727,
    municipality_id: 381,
    barangay_name: "Pisa",
  },
  {
    barangay_id: 9731,
    municipality_id: 381,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 9732,
    municipality_id: 381,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 9733,
    municipality_id: 381,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 9734,
    municipality_id: 381,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 9735,
    municipality_id: 381,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 9736,
    municipality_id: 381,
    barangay_name: "Talahib",
  },
  {
    barangay_id: 9737,
    municipality_id: 382,
    barangay_name: "Acle",
  },
  {
    barangay_id: 9738,
    municipality_id: 382,
    barangay_name: "Bayudbud",
  },
  {
    barangay_id: 9739,
    municipality_id: 382,
    barangay_name: "Bolboc",
  },
  {
    barangay_id: 9750,
    municipality_id: 382,
    barangay_name: "Burgos (Pob.)",
  },
  {
    barangay_id: 9740,
    municipality_id: 382,
    barangay_name: "Dalima",
  },
  {
    barangay_id: 9741,
    municipality_id: 382,
    barangay_name: "Dao",
  },
  {
    barangay_id: 9742,
    municipality_id: 382,
    barangay_name: "Guinhawa",
  },
  {
    barangay_id: 9743,
    municipality_id: 382,
    barangay_name: "Lumbangan",
  },
  {
    barangay_id: 9749,
    municipality_id: 382,
    barangay_name: "Luna (Pob.)",
  },
  {
    barangay_id: 9744,
    municipality_id: 382,
    barangay_name: "Luntal",
  },
  {
    barangay_id: 9745,
    municipality_id: 382,
    barangay_name: "Magahis",
  },
  {
    barangay_id: 9746,
    municipality_id: 382,
    barangay_name: "Malibu",
  },
  {
    barangay_id: 9747,
    municipality_id: 382,
    barangay_name: "Mataywanac",
  },
  {
    barangay_id: 9748,
    municipality_id: 382,
    barangay_name: "Palincaro",
  },
  {
    barangay_id: 9753,
    municipality_id: 382,
    barangay_name: "Putol",
  },
  {
    barangay_id: 9752,
    municipality_id: 382,
    barangay_name: "Rillo (Pob.)",
  },
  {
    barangay_id: 9751,
    municipality_id: 382,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 9754,
    municipality_id: 382,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 9755,
    municipality_id: 382,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 9756,
    municipality_id: 382,
    barangay_name: "Talon",
  },
  {
    barangay_id: 9757,
    municipality_id: 382,
    barangay_name: "Toong",
  },
  {
    barangay_id: 9758,
    municipality_id: 382,
    barangay_name: "Tuyon-tuyon",
  },
  {
    barangay_id: 9759,
    municipality_id: 383,
    barangay_name: "Amuyong",
  },
  {
    barangay_id: 9760,
    municipality_id: 383,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 9761,
    municipality_id: 383,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 9762,
    municipality_id: 383,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 9763,
    municipality_id: 383,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 9764,
    municipality_id: 383,
    barangay_name: "Barangay V (Pob.)",
  },
  {
    barangay_id: 9783,
    municipality_id: 383,
    barangay_name: "Bilog",
  },
  {
    barangay_id: 9765,
    municipality_id: 383,
    barangay_name: "Buck Estate",
  },
  {
    barangay_id: 9766,
    municipality_id: 383,
    barangay_name: "Esperanza Ibaba",
  },
  {
    barangay_id: 9784,
    municipality_id: 383,
    barangay_name: "Esperanza Ilaya",
  },
  {
    barangay_id: 9780,
    municipality_id: 383,
    barangay_name: "Kaysuyo",
  },
  {
    barangay_id: 9767,
    municipality_id: 383,
    barangay_name: "Kaytitinga I",
  },
  {
    barangay_id: 9785,
    municipality_id: 383,
    barangay_name: "Kaytitinga II",
  },
  {
    barangay_id: 9786,
    municipality_id: 383,
    barangay_name: "Kaytitinga III",
  },
  {
    barangay_id: 9768,
    municipality_id: 383,
    barangay_name: "Luksuhin",
  },
  {
    barangay_id: 9781,
    municipality_id: 383,
    barangay_name: "Luksuhin Ilaya",
  },
  {
    barangay_id: 9769,
    municipality_id: 383,
    barangay_name: "Mangas I",
  },
  {
    barangay_id: 9787,
    municipality_id: 383,
    barangay_name: "Mangas II",
  },
  {
    barangay_id: 9770,
    municipality_id: 383,
    barangay_name: "Marahan I",
  },
  {
    barangay_id: 9788,
    municipality_id: 383,
    barangay_name: "Marahan II",
  },
  {
    barangay_id: 9771,
    municipality_id: 383,
    barangay_name: "Matagbak I",
  },
  {
    barangay_id: 9789,
    municipality_id: 383,
    barangay_name: "Matagbak II",
  },
  {
    barangay_id: 9772,
    municipality_id: 383,
    barangay_name: "Pajo",
  },
  {
    barangay_id: 9782,
    municipality_id: 383,
    barangay_name: "Palumlum",
  },
  {
    barangay_id: 9790,
    municipality_id: 383,
    barangay_name: "Santa Teresa",
  },
  {
    barangay_id: 9773,
    municipality_id: 383,
    barangay_name: "Sikat",
  },
  {
    barangay_id: 9774,
    municipality_id: 383,
    barangay_name: "Sinaliw Malaki",
  },
  {
    barangay_id: 9775,
    municipality_id: 383,
    barangay_name: "Sinaliw na Munti",
  },
  {
    barangay_id: 9776,
    municipality_id: 383,
    barangay_name: "Sulsugin",
  },
  {
    barangay_id: 9777,
    municipality_id: 383,
    barangay_name: "Taywanak Ibaba",
  },
  {
    barangay_id: 9778,
    municipality_id: 383,
    barangay_name: "Taywanak Ilaya",
  },
  {
    barangay_id: 9779,
    municipality_id: 383,
    barangay_name: "Upli",
  },
  {
    barangay_id: 9791,
    municipality_id: 384,
    barangay_name: "Banaybanay",
  },
  {
    barangay_id: 9800,
    municipality_id: 384,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 9804,
    municipality_id: 384,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 9805,
    municipality_id: 384,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 9806,
    municipality_id: 384,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 9811,
    municipality_id: 384,
    barangay_name: "Barangay IX (Pob.)",
  },
  {
    barangay_id: 9807,
    municipality_id: 384,
    barangay_name: "Barangay V (Pob.)",
  },
  {
    barangay_id: 9808,
    municipality_id: 384,
    barangay_name: "Barangay VI (Pob.)",
  },
  {
    barangay_id: 9809,
    municipality_id: 384,
    barangay_name: "Barangay VII (Pob.)",
  },
  {
    barangay_id: 9810,
    municipality_id: 384,
    barangay_name: "Barangay VIII (Pob.)",
  },
  {
    barangay_id: 9801,
    municipality_id: 384,
    barangay_name: "Barangay X (Pob.)",
  },
  {
    barangay_id: 9802,
    municipality_id: 384,
    barangay_name: "Barangay XI (Pob.)",
  },
  {
    barangay_id: 9803,
    municipality_id: 384,
    barangay_name: "Barangay XII (Pob.)",
  },
  {
    barangay_id: 9792,
    municipality_id: 384,
    barangay_name: "Bucal",
  },
  {
    barangay_id: 9815,
    municipality_id: 384,
    barangay_name: "Buho",
  },
  {
    barangay_id: 9793,
    municipality_id: 384,
    barangay_name: "Dagatan",
  },
  {
    barangay_id: 9794,
    municipality_id: 384,
    barangay_name: "Halang",
  },
  {
    barangay_id: 9795,
    municipality_id: 384,
    barangay_name: "Loma",
  },
  {
    barangay_id: 9796,
    municipality_id: 384,
    barangay_name: "Maitim I",
  },
  {
    barangay_id: 9797,
    municipality_id: 384,
    barangay_name: "Maymangga",
  },
  {
    barangay_id: 9798,
    municipality_id: 384,
    barangay_name: "Minantok Kanluran",
  },
  {
    barangay_id: 9816,
    municipality_id: 384,
    barangay_name: "Minantok Silangan",
  },
  {
    barangay_id: 9799,
    municipality_id: 384,
    barangay_name: "Pangil",
  },
  {
    barangay_id: 9812,
    municipality_id: 384,
    barangay_name: "Salaban",
  },
  {
    barangay_id: 9813,
    municipality_id: 384,
    barangay_name: "Talon",
  },
  {
    barangay_id: 9814,
    municipality_id: 384,
    barangay_name: "Tamacan",
  },
  {
    barangay_id: 9817,
    municipality_id: 385,
    barangay_name: "Alima",
  },
  {
    barangay_id: 9818,
    municipality_id: 385,
    barangay_name: "Aniban I",
  },
  {
    barangay_id: 9843,
    municipality_id: 385,
    barangay_name: "Aniban II",
  },
  {
    barangay_id: 9844,
    municipality_id: 385,
    barangay_name: "Aniban III",
  },
  {
    barangay_id: 9845,
    municipality_id: 385,
    barangay_name: "Aniban IV",
  },
  {
    barangay_id: 9846,
    municipality_id: 385,
    barangay_name: "Aniban V",
  },
  {
    barangay_id: 9819,
    municipality_id: 385,
    barangay_name: "Banalo",
  },
  {
    barangay_id: 9820,
    municipality_id: 385,
    barangay_name: "Bayanan",
  },
  {
    barangay_id: 9847,
    municipality_id: 385,
    barangay_name: "Campo Santo",
  },
  {
    barangay_id: 9821,
    municipality_id: 385,
    barangay_name: "Daang Bukid",
  },
  {
    barangay_id: 9822,
    municipality_id: 385,
    barangay_name: "Digman",
  },
  {
    barangay_id: 9823,
    municipality_id: 385,
    barangay_name: "Dulong Bayan",
  },
  {
    barangay_id: 9824,
    municipality_id: 385,
    barangay_name: "Habay I",
  },
  {
    barangay_id: 9848,
    municipality_id: 385,
    barangay_name: "Habay II",
  },
  {
    barangay_id: 9825,
    municipality_id: 385,
    barangay_name: "Kaingin (Pob.)",
  },
  {
    barangay_id: 9826,
    municipality_id: 385,
    barangay_name: "Ligas I",
  },
  {
    barangay_id: 9849,
    municipality_id: 385,
    barangay_name: "Ligas II",
  },
  {
    barangay_id: 9850,
    municipality_id: 385,
    barangay_name: "Ligas III",
  },
  {
    barangay_id: 9827,
    municipality_id: 385,
    barangay_name: "Mabolo I",
  },
  {
    barangay_id: 9851,
    municipality_id: 385,
    barangay_name: "Mabolo II",
  },
  {
    barangay_id: 9852,
    municipality_id: 385,
    barangay_name: "Mabolo III",
  },
  {
    barangay_id: 9828,
    municipality_id: 385,
    barangay_name: "Maliksi I",
  },
  {
    barangay_id: 9853,
    municipality_id: 385,
    barangay_name: "Maliksi II",
  },
  {
    barangay_id: 9854,
    municipality_id: 385,
    barangay_name: "Maliksi III",
  },
  {
    barangay_id: 9829,
    municipality_id: 385,
    barangay_name: "Mambog I",
  },
  {
    barangay_id: 9855,
    municipality_id: 385,
    barangay_name: "Mambog II",
  },
  {
    barangay_id: 9856,
    municipality_id: 385,
    barangay_name: "Mambog III",
  },
  {
    barangay_id: 9857,
    municipality_id: 385,
    barangay_name: "Mambog IV",
  },
  {
    barangay_id: 9858,
    municipality_id: 385,
    barangay_name: "Mambog V",
  },
  {
    barangay_id: 9830,
    municipality_id: 385,
    barangay_name: "Molino I",
  },
  {
    barangay_id: 9859,
    municipality_id: 385,
    barangay_name: "Molino II",
  },
  {
    barangay_id: 9860,
    municipality_id: 385,
    barangay_name: "Molino III",
  },
  {
    barangay_id: 9861,
    municipality_id: 385,
    barangay_name: "Molino IV",
  },
  {
    barangay_id: 9862,
    municipality_id: 385,
    barangay_name: "Molino V",
  },
  {
    barangay_id: 9863,
    municipality_id: 385,
    barangay_name: "Molino VI",
  },
  {
    barangay_id: 9864,
    municipality_id: 385,
    barangay_name: "Molino VII",
  },
  {
    barangay_id: 9831,
    municipality_id: 385,
    barangay_name: "Niog I",
  },
  {
    barangay_id: 9865,
    municipality_id: 385,
    barangay_name: "Niog II",
  },
  {
    barangay_id: 9866,
    municipality_id: 385,
    barangay_name: "Niog III",
  },
  {
    barangay_id: 9832,
    municipality_id: 385,
    barangay_name: "P.F. Espiritu I",
  },
  {
    barangay_id: 9867,
    municipality_id: 385,
    barangay_name: "P.F. Espiritu II",
  },
  {
    barangay_id: 9868,
    municipality_id: 385,
    barangay_name: "P.F. Espiritu III",
  },
  {
    barangay_id: 9869,
    municipality_id: 385,
    barangay_name: "P.F. Espiritu IV",
  },
  {
    barangay_id: 9870,
    municipality_id: 385,
    barangay_name: "P.F. Espiritu V",
  },
  {
    barangay_id: 9871,
    municipality_id: 385,
    barangay_name: "P.F. Espiritu VI",
  },
  {
    barangay_id: 9872,
    municipality_id: 385,
    barangay_name: "P.F. Espiritu VII",
  },
  {
    barangay_id: 9873,
    municipality_id: 385,
    barangay_name: "P.F. Espiritu VIII",
  },
  {
    barangay_id: 9840,
    municipality_id: 385,
    barangay_name: "Queens Row Central",
  },
  {
    barangay_id: 9841,
    municipality_id: 385,
    barangay_name: "Queens Row East",
  },
  {
    barangay_id: 9842,
    municipality_id: 385,
    barangay_name: "Queens Row West",
  },
  {
    barangay_id: 9833,
    municipality_id: 385,
    barangay_name: "Real I",
  },
  {
    barangay_id: 9874,
    municipality_id: 385,
    barangay_name: "Real II",
  },
  {
    barangay_id: 9834,
    municipality_id: 385,
    barangay_name: "Salinas I",
  },
  {
    barangay_id: 9875,
    municipality_id: 385,
    barangay_name: "Salinas II",
  },
  {
    barangay_id: 9876,
    municipality_id: 385,
    barangay_name: "Salinas III",
  },
  {
    barangay_id: 9877,
    municipality_id: 385,
    barangay_name: "Salinas IV",
  },
  {
    barangay_id: 9835,
    municipality_id: 385,
    barangay_name: "San Nicolas I",
  },
  {
    barangay_id: 9878,
    municipality_id: 385,
    barangay_name: "San Nicolas II",
  },
  {
    barangay_id: 9879,
    municipality_id: 385,
    barangay_name: "San Nicolas III",
  },
  {
    barangay_id: 9836,
    municipality_id: 385,
    barangay_name: "Sineguelasan",
  },
  {
    barangay_id: 9837,
    municipality_id: 385,
    barangay_name: "Tabing Dagat",
  },
  {
    barangay_id: 9838,
    municipality_id: 385,
    barangay_name: "Talaba I",
  },
  {
    barangay_id: 9880,
    municipality_id: 385,
    barangay_name: "Talaba II",
  },
  {
    barangay_id: 9881,
    municipality_id: 385,
    barangay_name: "Talaba III",
  },
  {
    barangay_id: 9882,
    municipality_id: 385,
    barangay_name: "Talaba IV",
  },
  {
    barangay_id: 9883,
    municipality_id: 385,
    barangay_name: "Talaba V",
  },
  {
    barangay_id: 9884,
    municipality_id: 385,
    barangay_name: "Talaba VI",
  },
  {
    barangay_id: 9885,
    municipality_id: 385,
    barangay_name: "Talaba VII",
  },
  {
    barangay_id: 9839,
    municipality_id: 385,
    barangay_name: "Zapote I",
  },
  {
    barangay_id: 9886,
    municipality_id: 385,
    barangay_name: "Zapote II",
  },
  {
    barangay_id: 9887,
    municipality_id: 385,
    barangay_name: "Zapote III",
  },
  {
    barangay_id: 9888,
    municipality_id: 385,
    barangay_name: "Zapote IV",
  },
  {
    barangay_id: 9889,
    municipality_id: 385,
    barangay_name: "Zapote V",
  },
  {
    barangay_id: 9890,
    municipality_id: 386,
    barangay_name: "Bancal",
  },
  {
    barangay_id: 9896,
    municipality_id: 386,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 9897,
    municipality_id: 386,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 9898,
    municipality_id: 386,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 9899,
    municipality_id: 386,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 9900,
    municipality_id: 386,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 9901,
    municipality_id: 386,
    barangay_name: "Barangay 6 (Pob.)",
  },
  {
    barangay_id: 9902,
    municipality_id: 386,
    barangay_name: "Barangay 7 (Pob.)",
  },
  {
    barangay_id: 9903,
    municipality_id: 386,
    barangay_name: "Barangay 8 (Pob.)",
  },
  {
    barangay_id: 9891,
    municipality_id: 386,
    barangay_name: "Cabilang Baybay",
  },
  {
    barangay_id: 9892,
    municipality_id: 386,
    barangay_name: "Lantic",
  },
  {
    barangay_id: 9893,
    municipality_id: 386,
    barangay_name: "Mabuhay",
  },
  {
    barangay_id: 9894,
    municipality_id: 386,
    barangay_name: "Maduya",
  },
  {
    barangay_id: 9895,
    municipality_id: 386,
    barangay_name: "Milagrosa",
  },
  {
    barangay_id: 9904,
    municipality_id: 387,
    barangay_name: "Barangay 1",
  },
  {
    barangay_id: 9905,
    municipality_id: 387,
    barangay_name: "Barangay 10",
  },
  {
    barangay_id: 9966,
    municipality_id: 387,
    barangay_name: "Barangay 10-A",
  },
  {
    barangay_id: 9967,
    municipality_id: 387,
    barangay_name: "Barangay 10-B",
  },
  {
    barangay_id: 9907,
    municipality_id: 387,
    barangay_name: "Barangay 11",
  },
  {
    barangay_id: 9908,
    municipality_id: 387,
    barangay_name: "Barangay 12",
  },
  {
    barangay_id: 9909,
    municipality_id: 387,
    barangay_name: "Barangay 13",
  },
  {
    barangay_id: 9910,
    municipality_id: 387,
    barangay_name: "Barangay 14",
  },
  {
    barangay_id: 9911,
    municipality_id: 387,
    barangay_name: "Barangay 15",
  },
  {
    barangay_id: 9912,
    municipality_id: 387,
    barangay_name: "Barangay 16",
  },
  {
    barangay_id: 9913,
    municipality_id: 387,
    barangay_name: "Barangay 17",
  },
  {
    barangay_id: 9914,
    municipality_id: 387,
    barangay_name: "Barangay 18",
  },
  {
    barangay_id: 9915,
    municipality_id: 387,
    barangay_name: "Barangay 19",
  },
  {
    barangay_id: 9906,
    municipality_id: 387,
    barangay_name: "Barangay 2",
  },
  {
    barangay_id: 9916,
    municipality_id: 387,
    barangay_name: "Barangay 20",
  },
  {
    barangay_id: 9917,
    municipality_id: 387,
    barangay_name: "Barangay 21",
  },
  {
    barangay_id: 9918,
    municipality_id: 387,
    barangay_name: "Barangay 22",
  },
  {
    barangay_id: 9968,
    municipality_id: 387,
    barangay_name: "Barangay 22-A",
  },
  {
    barangay_id: 9919,
    municipality_id: 387,
    barangay_name: "Barangay 23",
  },
  {
    barangay_id: 9920,
    municipality_id: 387,
    barangay_name: "Barangay 24",
  },
  {
    barangay_id: 9921,
    municipality_id: 387,
    barangay_name: "Barangay 25",
  },
  {
    barangay_id: 9922,
    municipality_id: 387,
    barangay_name: "Barangay 26",
  },
  {
    barangay_id: 9923,
    municipality_id: 387,
    barangay_name: "Barangay 27",
  },
  {
    barangay_id: 9924,
    municipality_id: 387,
    barangay_name: "Barangay 28",
  },
  {
    barangay_id: 9925,
    municipality_id: 387,
    barangay_name: "Barangay 29",
  },
  {
    barangay_id: 9969,
    municipality_id: 387,
    barangay_name: "Barangay 29-A",
  },
  {
    barangay_id: 9926,
    municipality_id: 387,
    barangay_name: "Barangay 3",
  },
  {
    barangay_id: 9927,
    municipality_id: 387,
    barangay_name: "Barangay 30",
  },
  {
    barangay_id: 9928,
    municipality_id: 387,
    barangay_name: "Barangay 31",
  },
  {
    barangay_id: 9929,
    municipality_id: 387,
    barangay_name: "Barangay 32",
  },
  {
    barangay_id: 9930,
    municipality_id: 387,
    barangay_name: "Barangay 33",
  },
  {
    barangay_id: 9931,
    municipality_id: 387,
    barangay_name: "Barangay 34",
  },
  {
    barangay_id: 9932,
    municipality_id: 387,
    barangay_name: "Barangay 35",
  },
  {
    barangay_id: 9933,
    municipality_id: 387,
    barangay_name: "Barangay 36",
  },
  {
    barangay_id: 9970,
    municipality_id: 387,
    barangay_name: "Barangay 36-A",
  },
  {
    barangay_id: 9934,
    municipality_id: 387,
    barangay_name: "Barangay 37",
  },
  {
    barangay_id: 9971,
    municipality_id: 387,
    barangay_name: "Barangay 37-A",
  },
  {
    barangay_id: 9935,
    municipality_id: 387,
    barangay_name: "Barangay 38",
  },
  {
    barangay_id: 9972,
    municipality_id: 387,
    barangay_name: "Barangay 38-A",
  },
  {
    barangay_id: 9936,
    municipality_id: 387,
    barangay_name: "Barangay 39",
  },
  {
    barangay_id: 9937,
    municipality_id: 387,
    barangay_name: "Barangay 4",
  },
  {
    barangay_id: 9938,
    municipality_id: 387,
    barangay_name: "Barangay 40",
  },
  {
    barangay_id: 9939,
    municipality_id: 387,
    barangay_name: "Barangay 41",
  },
  {
    barangay_id: 9940,
    municipality_id: 387,
    barangay_name: "Barangay 42",
  },
  {
    barangay_id: 9973,
    municipality_id: 387,
    barangay_name: "Barangay 42-A",
  },
  {
    barangay_id: 9974,
    municipality_id: 387,
    barangay_name: "Barangay 42-B",
  },
  {
    barangay_id: 9975,
    municipality_id: 387,
    barangay_name: "Barangay 42-C",
  },
  {
    barangay_id: 9941,
    municipality_id: 387,
    barangay_name: "Barangay 43",
  },
  {
    barangay_id: 9942,
    municipality_id: 387,
    barangay_name: "Barangay 44",
  },
  {
    barangay_id: 9943,
    municipality_id: 387,
    barangay_name: "Barangay 45",
  },
  {
    barangay_id: 9976,
    municipality_id: 387,
    barangay_name: "Barangay 45-A",
  },
  {
    barangay_id: 9944,
    municipality_id: 387,
    barangay_name: "Barangay 46",
  },
  {
    barangay_id: 9945,
    municipality_id: 387,
    barangay_name: "Barangay 47",
  },
  {
    barangay_id: 9977,
    municipality_id: 387,
    barangay_name: "Barangay 47-A",
  },
  {
    barangay_id: 9978,
    municipality_id: 387,
    barangay_name: "Barangay 47-B",
  },
  {
    barangay_id: 9946,
    municipality_id: 387,
    barangay_name: "Barangay 48",
  },
  {
    barangay_id: 9979,
    municipality_id: 387,
    barangay_name: "Barangay 48-A",
  },
  {
    barangay_id: 9947,
    municipality_id: 387,
    barangay_name: "Barangay 49",
  },
  {
    barangay_id: 9980,
    municipality_id: 387,
    barangay_name: "Barangay 49-A",
  },
  {
    barangay_id: 9948,
    municipality_id: 387,
    barangay_name: "Barangay 5",
  },
  {
    barangay_id: 9949,
    municipality_id: 387,
    barangay_name: "Barangay 50",
  },
  {
    barangay_id: 9950,
    municipality_id: 387,
    barangay_name: "Barangay 51",
  },
  {
    barangay_id: 9951,
    municipality_id: 387,
    barangay_name: "Barangay 52",
  },
  {
    barangay_id: 9952,
    municipality_id: 387,
    barangay_name: "Barangay 53",
  },
  {
    barangay_id: 9981,
    municipality_id: 387,
    barangay_name: "Barangay 53-A",
  },
  {
    barangay_id: 9982,
    municipality_id: 387,
    barangay_name: "Barangay 53-B",
  },
  {
    barangay_id: 9953,
    municipality_id: 387,
    barangay_name: "Barangay 54",
  },
  {
    barangay_id: 9983,
    municipality_id: 387,
    barangay_name: "Barangay 54-A",
  },
  {
    barangay_id: 9954,
    municipality_id: 387,
    barangay_name: "Barangay 55",
  },
  {
    barangay_id: 9955,
    municipality_id: 387,
    barangay_name: "Barangay 56",
  },
  {
    barangay_id: 9956,
    municipality_id: 387,
    barangay_name: "Barangay 57",
  },
  {
    barangay_id: 9957,
    municipality_id: 387,
    barangay_name: "Barangay 58",
  },
  {
    barangay_id: 9984,
    municipality_id: 387,
    barangay_name: "Barangay 58-A",
  },
  {
    barangay_id: 9958,
    municipality_id: 387,
    barangay_name: "Barangay 59",
  },
  {
    barangay_id: 9959,
    municipality_id: 387,
    barangay_name: "Barangay 6",
  },
  {
    barangay_id: 9960,
    municipality_id: 387,
    barangay_name: "Barangay 60",
  },
  {
    barangay_id: 9961,
    municipality_id: 387,
    barangay_name: "Barangay 61",
  },
  {
    barangay_id: 9985,
    municipality_id: 387,
    barangay_name: "Barangay 61-A",
  },
  {
    barangay_id: 9962,
    municipality_id: 387,
    barangay_name: "Barangay 62",
  },
  {
    barangay_id: 9986,
    municipality_id: 387,
    barangay_name: "Barangay 62-A",
  },
  {
    barangay_id: 9987,
    municipality_id: 387,
    barangay_name: "Barangay 62-B",
  },
  {
    barangay_id: 9963,
    municipality_id: 387,
    barangay_name: "Barangay 7",
  },
  {
    barangay_id: 9964,
    municipality_id: 387,
    barangay_name: "Barangay 8",
  },
  {
    barangay_id: 9965,
    municipality_id: 387,
    barangay_name: "Barangay 9",
  },
  {
    barangay_id: 9988,
    municipality_id: 388,
    barangay_name: "Burol",
  },
  {
    barangay_id: 10028,
    municipality_id: 388,
    barangay_name: "Burol I",
  },
  {
    barangay_id: 10029,
    municipality_id: 388,
    barangay_name: "Burol II",
  },
  {
    barangay_id: 10030,
    municipality_id: 388,
    barangay_name: "Burol III",
  },
  {
    barangay_id: 10001,
    municipality_id: 388,
    barangay_name: "Datu Esmael",
  },
  {
    barangay_id: 10002,
    municipality_id: 388,
    barangay_name: "Emmanuel Bergado I",
  },
  {
    barangay_id: 10031,
    municipality_id: 388,
    barangay_name: "Emmanuel Bergado II",
  },
  {
    barangay_id: 10003,
    municipality_id: 388,
    barangay_name: "Fatima I",
  },
  {
    barangay_id: 10032,
    municipality_id: 388,
    barangay_name: "Fatima II",
  },
  {
    barangay_id: 10033,
    municipality_id: 388,
    barangay_name: "Fatima III",
  },
  {
    barangay_id: 10061,
    municipality_id: 388,
    barangay_name: "H-2",
  },
  {
    barangay_id: 9989,
    municipality_id: 388,
    barangay_name: "Langkaan I",
  },
  {
    barangay_id: 10034,
    municipality_id: 388,
    barangay_name: "Langkaan II",
  },
  {
    barangay_id: 10004,
    municipality_id: 388,
    barangay_name: "Luzviminda I",
  },
  {
    barangay_id: 10035,
    municipality_id: 388,
    barangay_name: "Luzviminda II",
  },
  {
    barangay_id: 9990,
    municipality_id: 388,
    barangay_name: "Paliparan I",
  },
  {
    barangay_id: 10036,
    municipality_id: 388,
    barangay_name: "Paliparan II",
  },
  {
    barangay_id: 10037,
    municipality_id: 388,
    barangay_name: "Paliparan III",
  },
  {
    barangay_id: 9991,
    municipality_id: 388,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 10005,
    municipality_id: 388,
    barangay_name: "Saint Peter I",
  },
  {
    barangay_id: 10038,
    municipality_id: 388,
    barangay_name: "Saint Peter II",
  },
  {
    barangay_id: 9992,
    municipality_id: 388,
    barangay_name: "Salawag",
  },
  {
    barangay_id: 9993,
    municipality_id: 388,
    barangay_name: "Salitran I",
  },
  {
    barangay_id: 10039,
    municipality_id: 388,
    barangay_name: "Salitran II",
  },
  {
    barangay_id: 10040,
    municipality_id: 388,
    barangay_name: "Salitran III",
  },
  {
    barangay_id: 10041,
    municipality_id: 388,
    barangay_name: "Salitran IV",
  },
  {
    barangay_id: 9994,
    municipality_id: 388,
    barangay_name: "Sampaloc I",
  },
  {
    barangay_id: 10042,
    municipality_id: 388,
    barangay_name: "Sampaloc II",
  },
  {
    barangay_id: 10043,
    municipality_id: 388,
    barangay_name: "Sampaloc III",
  },
  {
    barangay_id: 10044,
    municipality_id: 388,
    barangay_name: "Sampaloc IV",
  },
  {
    barangay_id: 10045,
    municipality_id: 388,
    barangay_name: "Sampaloc V",
  },
  {
    barangay_id: 9995,
    municipality_id: 388,
    barangay_name: "San Agustin I",
  },
  {
    barangay_id: 10046,
    municipality_id: 388,
    barangay_name: "San Agustin II",
  },
  {
    barangay_id: 10047,
    municipality_id: 388,
    barangay_name: "San Agustin III",
  },
  {
    barangay_id: 10006,
    municipality_id: 388,
    barangay_name: "San Andres I",
  },
  {
    barangay_id: 10048,
    municipality_id: 388,
    barangay_name: "San Andres II",
  },
  {
    barangay_id: 10007,
    municipality_id: 388,
    barangay_name: "San Antonio De Padua I",
  },
  {
    barangay_id: 10049,
    municipality_id: 388,
    barangay_name: "San Antonio De Padua II",
  },
  {
    barangay_id: 10008,
    municipality_id: 388,
    barangay_name: "San Dionisio",
  },
  {
    barangay_id: 10009,
    municipality_id: 388,
    barangay_name: "San Esteban",
  },
  {
    barangay_id: 10010,
    municipality_id: 388,
    barangay_name: "San Francisco I",
  },
  {
    barangay_id: 10050,
    municipality_id: 388,
    barangay_name: "San Francisco II",
  },
  {
    barangay_id: 10011,
    municipality_id: 388,
    barangay_name: "San Isidro Labrador I",
  },
  {
    barangay_id: 10051,
    municipality_id: 388,
    barangay_name: "San Isidro Labrador II",
  },
  {
    barangay_id: 9996,
    municipality_id: 388,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 10012,
    municipality_id: 388,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 10013,
    municipality_id: 388,
    barangay_name: "San Lorenzo Ruiz I",
  },
  {
    barangay_id: 10052,
    municipality_id: 388,
    barangay_name: "San Lorenzo Ruiz II",
  },
  {
    barangay_id: 10014,
    municipality_id: 388,
    barangay_name: "San Luis I",
  },
  {
    barangay_id: 10053,
    municipality_id: 388,
    barangay_name: "San Luis II",
  },
  {
    barangay_id: 10015,
    municipality_id: 388,
    barangay_name: "San Manuel I",
  },
  {
    barangay_id: 10054,
    municipality_id: 388,
    barangay_name: "San Manuel II",
  },
  {
    barangay_id: 10016,
    municipality_id: 388,
    barangay_name: "San Mateo",
  },
  {
    barangay_id: 10017,
    municipality_id: 388,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 10055,
    municipality_id: 388,
    barangay_name: "San Miguel II",
  },
  {
    barangay_id: 10018,
    municipality_id: 388,
    barangay_name: "San Nicolas I",
  },
  {
    barangay_id: 10056,
    municipality_id: 388,
    barangay_name: "San Nicolas II",
  },
  {
    barangay_id: 10019,
    municipality_id: 388,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 10020,
    municipality_id: 388,
    barangay_name: "San Simon",
  },
  {
    barangay_id: 10021,
    municipality_id: 388,
    barangay_name: "Santa Cristina I",
  },
  {
    barangay_id: 10057,
    municipality_id: 388,
    barangay_name: "Santa Cristina II",
  },
  {
    barangay_id: 10022,
    municipality_id: 388,
    barangay_name: "Santa Cruz I",
  },
  {
    barangay_id: 10058,
    municipality_id: 388,
    barangay_name: "Santa Cruz II",
  },
  {
    barangay_id: 10023,
    municipality_id: 388,
    barangay_name: "Santa Fe",
  },
  {
    barangay_id: 10024,
    municipality_id: 388,
    barangay_name: "Santa Lucia",
  },
  {
    barangay_id: 10025,
    municipality_id: 388,
    barangay_name: "Santa Maria",
  },
  {
    barangay_id: 10026,
    municipality_id: 388,
    barangay_name: "Santo Cristo",
  },
  {
    barangay_id: 10027,
    municipality_id: 388,
    barangay_name: "Santo Niño I",
  },
  {
    barangay_id: 10059,
    municipality_id: 388,
    barangay_name: "Santo Niño II",
  },
  {
    barangay_id: 10062,
    municipality_id: 388,
    barangay_name: "Victoria Reyes",
  },
  {
    barangay_id: 9997,
    municipality_id: 388,
    barangay_name: "Zone I (Pob.)",
  },
  {
    barangay_id: 10060,
    municipality_id: 388,
    barangay_name: "Zone I-B",
  },
  {
    barangay_id: 9998,
    municipality_id: 388,
    barangay_name: "Zone II (Pob.)",
  },
  {
    barangay_id: 9999,
    municipality_id: 388,
    barangay_name: "Zone III (Pob.)",
  },
  {
    barangay_id: 10000,
    municipality_id: 388,
    barangay_name: "Zone IV (Pob.)",
  },
  {
    barangay_id: 10063,
    municipality_id: 389,
    barangay_name: "A. Dalusag",
  },
  {
    barangay_id: 10064,
    municipality_id: 389,
    barangay_name: "Batas Dao",
  },
  {
    barangay_id: 10065,
    municipality_id: 389,
    barangay_name: "Castaños Cerca",
  },
  {
    barangay_id: 10066,
    municipality_id: 389,
    barangay_name: "Castaños Lejos",
  },
  {
    barangay_id: 10067,
    municipality_id: 389,
    barangay_name: "Kabulusan",
  },
  {
    barangay_id: 10068,
    municipality_id: 389,
    barangay_name: "Kaymisas",
  },
  {
    barangay_id: 10069,
    municipality_id: 389,
    barangay_name: "Kaypaaba",
  },
  {
    barangay_id: 10070,
    municipality_id: 389,
    barangay_name: "Lumipa",
  },
  {
    barangay_id: 10071,
    municipality_id: 389,
    barangay_name: "Narvaez",
  },
  {
    barangay_id: 10072,
    municipality_id: 389,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 10074,
    municipality_id: 389,
    barangay_name: "Poblacion II",
  },
  {
    barangay_id: 10075,
    municipality_id: 389,
    barangay_name: "Poblacion III",
  },
  {
    barangay_id: 10076,
    municipality_id: 389,
    barangay_name: "Poblacion IV",
  },
  {
    barangay_id: 10073,
    municipality_id: 389,
    barangay_name: "Tabora",
  },
  {
    barangay_id: 10077,
    municipality_id: 390,
    barangay_name: "Alingaro",
  },
  {
    barangay_id: 10104,
    municipality_id: 390,
    barangay_name: "Arnaldo Pob.",
  },
  {
    barangay_id: 10078,
    municipality_id: 390,
    barangay_name: "Bacao I",
  },
  {
    barangay_id: 10105,
    municipality_id: 390,
    barangay_name: "Bacao II",
  },
  {
    barangay_id: 10083,
    municipality_id: 390,
    barangay_name: "Bagumbayan Pob.",
  },
  {
    barangay_id: 10087,
    municipality_id: 390,
    barangay_name: "Biclatan",
  },
  {
    barangay_id: 10088,
    municipality_id: 390,
    barangay_name: "Buenavista I",
  },
  {
    barangay_id: 10106,
    municipality_id: 390,
    barangay_name: "Buenavista II",
  },
  {
    barangay_id: 10107,
    municipality_id: 390,
    barangay_name: "Buenavista III",
  },
  {
    barangay_id: 10089,
    municipality_id: 390,
    barangay_name: "Corregidor Pob.",
  },
  {
    barangay_id: 10081,
    municipality_id: 390,
    barangay_name: "Dulong Bayan Pob.",
  },
  {
    barangay_id: 10079,
    municipality_id: 390,
    barangay_name: "Gov. Ferrer Pob.",
  },
  {
    barangay_id: 10090,
    municipality_id: 390,
    barangay_name: "Javalera",
  },
  {
    barangay_id: 10091,
    municipality_id: 390,
    barangay_name: "Manggahan",
  },
  {
    barangay_id: 10092,
    municipality_id: 390,
    barangay_name: "Navarro",
  },
  {
    barangay_id: 10085,
    municipality_id: 390,
    barangay_name: "Ninety Sixth Pob.",
  },
  {
    barangay_id: 10093,
    municipality_id: 390,
    barangay_name: "Panungyanan",
  },
  {
    barangay_id: 10094,
    municipality_id: 390,
    barangay_name: "Pasong Camachile I",
  },
  {
    barangay_id: 10108,
    municipality_id: 390,
    barangay_name: "Pasong Camachile II",
  },
  {
    barangay_id: 10095,
    municipality_id: 390,
    barangay_name: "Pasong Kawayan I",
  },
  {
    barangay_id: 10096,
    municipality_id: 390,
    barangay_name: "Pasong Kawayan II",
  },
  {
    barangay_id: 10097,
    municipality_id: 390,
    barangay_name: "Pinagtipunan",
  },
  {
    barangay_id: 10086,
    municipality_id: 390,
    barangay_name: "Prinza Pob.",
  },
  {
    barangay_id: 10080,
    municipality_id: 390,
    barangay_name: "Sampalucan Pob.",
  },
  {
    barangay_id: 10098,
    municipality_id: 390,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 10082,
    municipality_id: 390,
    barangay_name: "San Gabriel Pob.",
  },
  {
    barangay_id: 10099,
    municipality_id: 390,
    barangay_name: "San Juan I",
  },
  {
    barangay_id: 10109,
    municipality_id: 390,
    barangay_name: "San Juan II",
  },
  {
    barangay_id: 10100,
    municipality_id: 390,
    barangay_name: "Santa Clara",
  },
  {
    barangay_id: 10101,
    municipality_id: 390,
    barangay_name: "Santiago",
  },
  {
    barangay_id: 10102,
    municipality_id: 390,
    barangay_name: "Tapia",
  },
  {
    barangay_id: 10103,
    municipality_id: 390,
    barangay_name: "Tejero",
  },
  {
    barangay_id: 10084,
    municipality_id: 390,
    barangay_name: "Vibora Pob.",
  },
  {
    barangay_id: 10110,
    municipality_id: 391,
    barangay_name: "Alapan I-A",
  },
  {
    barangay_id: 10131,
    municipality_id: 391,
    barangay_name: "Alapan I-B",
  },
  {
    barangay_id: 10132,
    municipality_id: 391,
    barangay_name: "Alapan I-C",
  },
  {
    barangay_id: 10111,
    municipality_id: 391,
    barangay_name: "Alapan II-A",
  },
  {
    barangay_id: 10133,
    municipality_id: 391,
    barangay_name: "Alapan II-B",
  },
  {
    barangay_id: 10112,
    municipality_id: 391,
    barangay_name: "Anabu I-A",
  },
  {
    barangay_id: 10134,
    municipality_id: 391,
    barangay_name: "Anabu I-B",
  },
  {
    barangay_id: 10135,
    municipality_id: 391,
    barangay_name: "Anabu I-C",
  },
  {
    barangay_id: 10136,
    municipality_id: 391,
    barangay_name: "Anabu I-D",
  },
  {
    barangay_id: 10137,
    municipality_id: 391,
    barangay_name: "Anabu I-E",
  },
  {
    barangay_id: 10138,
    municipality_id: 391,
    barangay_name: "Anabu I-F",
  },
  {
    barangay_id: 10139,
    municipality_id: 391,
    barangay_name: "Anabu I-G",
  },
  {
    barangay_id: 10113,
    municipality_id: 391,
    barangay_name: "Anabu II-A",
  },
  {
    barangay_id: 10140,
    municipality_id: 391,
    barangay_name: "Anabu II-B",
  },
  {
    barangay_id: 10141,
    municipality_id: 391,
    barangay_name: "Anabu II-C",
  },
  {
    barangay_id: 10142,
    municipality_id: 391,
    barangay_name: "Anabu II-D",
  },
  {
    barangay_id: 10143,
    municipality_id: 391,
    barangay_name: "Anabu II-E",
  },
  {
    barangay_id: 10144,
    municipality_id: 391,
    barangay_name: "Anabu II-F",
  },
  {
    barangay_id: 10145,
    municipality_id: 391,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 10118,
    municipality_id: 391,
    barangay_name: "Bayan Luma I",
  },
  {
    barangay_id: 10146,
    municipality_id: 391,
    barangay_name: "Bayan Luma II",
  },
  {
    barangay_id: 10147,
    municipality_id: 391,
    barangay_name: "Bayan Luma III",
  },
  {
    barangay_id: 10148,
    municipality_id: 391,
    barangay_name: "Bayan Luma IV",
  },
  {
    barangay_id: 10153,
    municipality_id: 391,
    barangay_name: "Bayan Luma IX",
  },
  {
    barangay_id: 10149,
    municipality_id: 391,
    barangay_name: "Bayan Luma V",
  },
  {
    barangay_id: 10150,
    municipality_id: 391,
    barangay_name: "Bayan Luma VI",
  },
  {
    barangay_id: 10151,
    municipality_id: 391,
    barangay_name: "Bayan Luma VII",
  },
  {
    barangay_id: 10152,
    municipality_id: 391,
    barangay_name: "Bayan Luma VIII",
  },
  {
    barangay_id: 10119,
    municipality_id: 391,
    barangay_name: "Bucandala I",
  },
  {
    barangay_id: 10154,
    municipality_id: 391,
    barangay_name: "Bucandala II",
  },
  {
    barangay_id: 10155,
    municipality_id: 391,
    barangay_name: "Bucandala III",
  },
  {
    barangay_id: 10156,
    municipality_id: 391,
    barangay_name: "Bucandala IV",
  },
  {
    barangay_id: 10157,
    municipality_id: 391,
    barangay_name: "Bucandala V",
  },
  {
    barangay_id: 10158,
    municipality_id: 391,
    barangay_name: "Buhay na Tubig",
  },
  {
    barangay_id: 10120,
    municipality_id: 391,
    barangay_name: "Carsadang Bago I",
  },
  {
    barangay_id: 10159,
    municipality_id: 391,
    barangay_name: "Carsadang Bago II",
  },
  {
    barangay_id: 10160,
    municipality_id: 391,
    barangay_name: "Magdalo",
  },
  {
    barangay_id: 10161,
    municipality_id: 391,
    barangay_name: "Maharlika",
  },
  {
    barangay_id: 10121,
    municipality_id: 391,
    barangay_name: "Malagasang I-A",
  },
  {
    barangay_id: 10162,
    municipality_id: 391,
    barangay_name: "Malagasang I-B",
  },
  {
    barangay_id: 10163,
    municipality_id: 391,
    barangay_name: "Malagasang I-C",
  },
  {
    barangay_id: 10164,
    municipality_id: 391,
    barangay_name: "Malagasang I-D",
  },
  {
    barangay_id: 10165,
    municipality_id: 391,
    barangay_name: "Malagasang I-E",
  },
  {
    barangay_id: 10166,
    municipality_id: 391,
    barangay_name: "Malagasang I-F",
  },
  {
    barangay_id: 10167,
    municipality_id: 391,
    barangay_name: "Malagasang I-G",
  },
  {
    barangay_id: 10122,
    municipality_id: 391,
    barangay_name: "Malagasang II-A",
  },
  {
    barangay_id: 10168,
    municipality_id: 391,
    barangay_name: "Malagasang II-B",
  },
  {
    barangay_id: 10169,
    municipality_id: 391,
    barangay_name: "Malagasang II-C",
  },
  {
    barangay_id: 10170,
    municipality_id: 391,
    barangay_name: "Malagasang II-D",
  },
  {
    barangay_id: 10171,
    municipality_id: 391,
    barangay_name: "Malagasang II-E",
  },
  {
    barangay_id: 10172,
    municipality_id: 391,
    barangay_name: "Malagasang II-F",
  },
  {
    barangay_id: 10173,
    municipality_id: 391,
    barangay_name: "Malagasang II-G",
  },
  {
    barangay_id: 10174,
    municipality_id: 391,
    barangay_name: "Mariano Espeleta I",
  },
  {
    barangay_id: 10175,
    municipality_id: 391,
    barangay_name: "Mariano Espeleta II",
  },
  {
    barangay_id: 10176,
    municipality_id: 391,
    barangay_name: "Mariano Espeleta III",
  },
  {
    barangay_id: 10123,
    municipality_id: 391,
    barangay_name: "Medicion I-A",
  },
  {
    barangay_id: 10177,
    municipality_id: 391,
    barangay_name: "Medicion I-B",
  },
  {
    barangay_id: 10178,
    municipality_id: 391,
    barangay_name: "Medicion I-C",
  },
  {
    barangay_id: 10179,
    municipality_id: 391,
    barangay_name: "Medicion I-D",
  },
  {
    barangay_id: 10124,
    municipality_id: 391,
    barangay_name: "Medicion II-A",
  },
  {
    barangay_id: 10180,
    municipality_id: 391,
    barangay_name: "Medicion II-B",
  },
  {
    barangay_id: 10181,
    municipality_id: 391,
    barangay_name: "Medicion II-C",
  },
  {
    barangay_id: 10182,
    municipality_id: 391,
    barangay_name: "Medicion II-D",
  },
  {
    barangay_id: 10183,
    municipality_id: 391,
    barangay_name: "Medicion II-E",
  },
  {
    barangay_id: 10184,
    municipality_id: 391,
    barangay_name: "Medicion II-F",
  },
  {
    barangay_id: 10125,
    municipality_id: 391,
    barangay_name: "Pag-Asa I",
  },
  {
    barangay_id: 10185,
    municipality_id: 391,
    barangay_name: "Pag-Asa II",
  },
  {
    barangay_id: 10186,
    municipality_id: 391,
    barangay_name: "Pag-Asa III",
  },
  {
    barangay_id: 10126,
    municipality_id: 391,
    barangay_name: "Palico I",
  },
  {
    barangay_id: 10187,
    municipality_id: 391,
    barangay_name: "Palico II",
  },
  {
    barangay_id: 10188,
    municipality_id: 391,
    barangay_name: "Palico III",
  },
  {
    barangay_id: 10189,
    municipality_id: 391,
    barangay_name: "Palico IV",
  },
  {
    barangay_id: 10127,
    municipality_id: 391,
    barangay_name: "Pasong Buaya I",
  },
  {
    barangay_id: 10190,
    municipality_id: 391,
    barangay_name: "Pasong Buaya II",
  },
  {
    barangay_id: 10191,
    municipality_id: 391,
    barangay_name: "Pinagbuklod",
  },
  {
    barangay_id: 10114,
    municipality_id: 391,
    barangay_name: "Poblacion I-A (Pob.)",
  },
  {
    barangay_id: 10192,
    municipality_id: 391,
    barangay_name: "Poblacion I-B",
  },
  {
    barangay_id: 10193,
    municipality_id: 391,
    barangay_name: "Poblacion I-C",
  },
  {
    barangay_id: 10115,
    municipality_id: 391,
    barangay_name: "Poblacion II-A (Pob.)",
  },
  {
    barangay_id: 10194,
    municipality_id: 391,
    barangay_name: "Poblacion II-B",
  },
  {
    barangay_id: 10116,
    municipality_id: 391,
    barangay_name: "Poblacion III-A (Pob.)",
  },
  {
    barangay_id: 10195,
    municipality_id: 391,
    barangay_name: "Poblacion III-B",
  },
  {
    barangay_id: 10117,
    municipality_id: 391,
    barangay_name: "Poblacion IV-A (Pob.)",
  },
  {
    barangay_id: 10196,
    municipality_id: 391,
    barangay_name: "Poblacion IV-B",
  },
  {
    barangay_id: 10197,
    municipality_id: 391,
    barangay_name: "Poblacion IV-C",
  },
  {
    barangay_id: 10198,
    municipality_id: 391,
    barangay_name: "Poblacion IV-D",
  },
  {
    barangay_id: 10128,
    municipality_id: 391,
    barangay_name: "Tanzang Luma I",
  },
  {
    barangay_id: 10199,
    municipality_id: 391,
    barangay_name: "Tanzang Luma II",
  },
  {
    barangay_id: 10200,
    municipality_id: 391,
    barangay_name: "Tanzang Luma III",
  },
  {
    barangay_id: 10201,
    municipality_id: 391,
    barangay_name: "Tanzang Luma IV",
  },
  {
    barangay_id: 10202,
    municipality_id: 391,
    barangay_name: "Tanzang Luma V",
  },
  {
    barangay_id: 10203,
    municipality_id: 391,
    barangay_name: "Tanzang Luma VI",
  },
  {
    barangay_id: 10129,
    municipality_id: 391,
    barangay_name: "Toclong I-A",
  },
  {
    barangay_id: 10204,
    municipality_id: 391,
    barangay_name: "Toclong I-B",
  },
  {
    barangay_id: 10205,
    municipality_id: 391,
    barangay_name: "Toclong I-C",
  },
  {
    barangay_id: 10130,
    municipality_id: 391,
    barangay_name: "Toclong II-A",
  },
  {
    barangay_id: 10206,
    municipality_id: 391,
    barangay_name: "Toclong II-B",
  },
  {
    barangay_id: 10207,
    municipality_id: 392,
    barangay_name: "Agus-us",
  },
  {
    barangay_id: 10208,
    municipality_id: 392,
    barangay_name: "Alulod",
  },
  {
    barangay_id: 10209,
    municipality_id: 392,
    barangay_name: "Banaba Cerca",
  },
  {
    barangay_id: 10210,
    municipality_id: 392,
    barangay_name: "Banaba Lejos",
  },
  {
    barangay_id: 10211,
    municipality_id: 392,
    barangay_name: "Bancod",
  },
  {
    barangay_id: 10228,
    municipality_id: 392,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 10229,
    municipality_id: 392,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 10230,
    municipality_id: 392,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 10231,
    municipality_id: 392,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 10212,
    municipality_id: 392,
    barangay_name: "Buna Cerca",
  },
  {
    barangay_id: 10213,
    municipality_id: 392,
    barangay_name: "Buna Lejos I",
  },
  {
    barangay_id: 10237,
    municipality_id: 392,
    barangay_name: "Buna Lejos II",
  },
  {
    barangay_id: 10214,
    municipality_id: 392,
    barangay_name: "Calumpang Cerca",
  },
  {
    barangay_id: 10215,
    municipality_id: 392,
    barangay_name: "Calumpang Lejos I",
  },
  {
    barangay_id: 10216,
    municipality_id: 392,
    barangay_name: "Carasuchi",
  },
  {
    barangay_id: 10218,
    municipality_id: 392,
    barangay_name: "Daine I",
  },
  {
    barangay_id: 10238,
    municipality_id: 392,
    barangay_name: "Daine II",
  },
  {
    barangay_id: 10219,
    municipality_id: 392,
    barangay_name: "Guyam Malaki",
  },
  {
    barangay_id: 10220,
    municipality_id: 392,
    barangay_name: "Guyam Munti",
  },
  {
    barangay_id: 10221,
    municipality_id: 392,
    barangay_name: "Harasan",
  },
  {
    barangay_id: 10217,
    municipality_id: 392,
    barangay_name: "Kayquit I",
  },
  {
    barangay_id: 10239,
    municipality_id: 392,
    barangay_name: "Kayquit II",
  },
  {
    barangay_id: 10240,
    municipality_id: 392,
    barangay_name: "Kayquit III",
  },
  {
    barangay_id: 10222,
    municipality_id: 392,
    barangay_name: "Kaytambog",
  },
  {
    barangay_id: 10241,
    municipality_id: 392,
    barangay_name: "Kaytapos",
  },
  {
    barangay_id: 10223,
    municipality_id: 392,
    barangay_name: "Limbon",
  },
  {
    barangay_id: 10224,
    municipality_id: 392,
    barangay_name: "Lumampong Balagbag",
  },
  {
    barangay_id: 10225,
    municipality_id: 392,
    barangay_name: "Lumampong Halayhay",
  },
  {
    barangay_id: 10227,
    municipality_id: 392,
    barangay_name: "Mahabangkahoy Cerca",
  },
  {
    barangay_id: 10226,
    municipality_id: 392,
    barangay_name: "Mahabangkahoy Lejos",
  },
  {
    barangay_id: 10242,
    municipality_id: 392,
    barangay_name: "Mataas na Lupa",
  },
  {
    barangay_id: 10232,
    municipality_id: 392,
    barangay_name: "Pulo",
  },
  {
    barangay_id: 10233,
    municipality_id: 392,
    barangay_name: "Tambo Balagbag",
  },
  {
    barangay_id: 10234,
    municipality_id: 392,
    barangay_name: "Tambo Ilaya",
  },
  {
    barangay_id: 10236,
    municipality_id: 392,
    barangay_name: "Tambo Kulit",
  },
  {
    barangay_id: 10235,
    municipality_id: 392,
    barangay_name: "Tambo Malaki",
  },
  {
    barangay_id: 10256,
    municipality_id: 393,
    barangay_name: "Balsahan-Bisita",
  },
  {
    barangay_id: 10255,
    municipality_id: 393,
    barangay_name: "Batong Dalig",
  },
  {
    barangay_id: 10257,
    municipality_id: 393,
    barangay_name: "Binakayan-Aplaya",
  },
  {
    barangay_id: 10243,
    municipality_id: 393,
    barangay_name: "Binakayan-Kanluran",
  },
  {
    barangay_id: 10258,
    municipality_id: 393,
    barangay_name: "Congbalay-Legaspi",
  },
  {
    barangay_id: 10244,
    municipality_id: 393,
    barangay_name: "Gahak",
  },
  {
    barangay_id: 10245,
    municipality_id: 393,
    barangay_name: "Kaingen",
  },
  {
    barangay_id: 10249,
    municipality_id: 393,
    barangay_name: "Magdalo",
  },
  {
    barangay_id: 10259,
    municipality_id: 393,
    barangay_name: "Manggahan-Lawin",
  },
  {
    barangay_id: 10246,
    municipality_id: 393,
    barangay_name: "Marulas",
  },
  {
    barangay_id: 10247,
    municipality_id: 393,
    barangay_name: "Panamitan",
  },
  {
    barangay_id: 10248,
    municipality_id: 393,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 10260,
    municipality_id: 393,
    barangay_name: "Pulvorista",
  },
  {
    barangay_id: 10261,
    municipality_id: 393,
    barangay_name: "Samala-Marquez",
  },
  {
    barangay_id: 10250,
    municipality_id: 393,
    barangay_name: "San Sebastian",
  },
  {
    barangay_id: 10251,
    municipality_id: 393,
    barangay_name: "Santa Isabel",
  },
  {
    barangay_id: 10252,
    municipality_id: 393,
    barangay_name: "Tabon I",
  },
  {
    barangay_id: 10262,
    municipality_id: 393,
    barangay_name: "Tabon II",
  },
  {
    barangay_id: 10263,
    municipality_id: 393,
    barangay_name: "Tabon III",
  },
  {
    barangay_id: 10253,
    municipality_id: 393,
    barangay_name: "Toclong",
  },
  {
    barangay_id: 10264,
    municipality_id: 393,
    barangay_name: "Tramo-Bantayan",
  },
  {
    barangay_id: 10254,
    municipality_id: 393,
    barangay_name: "Wakas I",
  },
  {
    barangay_id: 10265,
    municipality_id: 393,
    barangay_name: "Wakas II",
  },
  {
    barangay_id: 10266,
    municipality_id: 394,
    barangay_name: "Baliwag",
  },
  {
    barangay_id: 10271,
    municipality_id: 394,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 10272,
    municipality_id: 394,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 10273,
    municipality_id: 394,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 10274,
    municipality_id: 394,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 10275,
    municipality_id: 394,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 10267,
    municipality_id: 394,
    barangay_name: "Bendita I",
  },
  {
    barangay_id: 10280,
    municipality_id: 394,
    barangay_name: "Bendita II",
  },
  {
    barangay_id: 10268,
    municipality_id: 394,
    barangay_name: "Caluangan",
  },
  {
    barangay_id: 10279,
    municipality_id: 394,
    barangay_name: "Kabulusan",
  },
  {
    barangay_id: 10269,
    municipality_id: 394,
    barangay_name: "Medina",
  },
  {
    barangay_id: 10270,
    municipality_id: 394,
    barangay_name: "Pacheco",
  },
  {
    barangay_id: 10276,
    municipality_id: 394,
    barangay_name: "Ramirez",
  },
  {
    barangay_id: 10281,
    municipality_id: 394,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 10277,
    municipality_id: 394,
    barangay_name: "Tua",
  },
  {
    barangay_id: 10278,
    municipality_id: 394,
    barangay_name: "Urdaneta",
  },
  {
    barangay_id: 10283,
    municipality_id: 395,
    barangay_name: "Bucal I",
  },
  {
    barangay_id: 10284,
    municipality_id: 395,
    barangay_name: "Bucal II",
  },
  {
    barangay_id: 10285,
    municipality_id: 395,
    barangay_name: "Bucal III A",
  },
  {
    barangay_id: 10301,
    municipality_id: 395,
    barangay_name: "Bucal III B",
  },
  {
    barangay_id: 10286,
    municipality_id: 395,
    barangay_name: "Bucal IV A",
  },
  {
    barangay_id: 10302,
    municipality_id: 395,
    barangay_name: "Bucal IV B",
  },
  {
    barangay_id: 10282,
    municipality_id: 395,
    barangay_name: "Caingin Pob.",
  },
  {
    barangay_id: 10288,
    municipality_id: 395,
    barangay_name: "Garita I A",
  },
  {
    barangay_id: 10303,
    municipality_id: 395,
    barangay_name: "Garita I B",
  },
  {
    barangay_id: 10300,
    municipality_id: 395,
    barangay_name: "Layong Mabilog",
  },
  {
    barangay_id: 10289,
    municipality_id: 395,
    barangay_name: "Mabato",
  },
  {
    barangay_id: 10291,
    municipality_id: 395,
    barangay_name: "Pantihan I",
  },
  {
    barangay_id: 10292,
    municipality_id: 395,
    barangay_name: "Pantihan II",
  },
  {
    barangay_id: 10293,
    municipality_id: 395,
    barangay_name: "Pantihan III",
  },
  {
    barangay_id: 10294,
    municipality_id: 395,
    barangay_name: "Pantihan IV",
  },
  {
    barangay_id: 10295,
    municipality_id: 395,
    barangay_name: "Patungan",
  },
  {
    barangay_id: 10296,
    municipality_id: 395,
    barangay_name: "Pinagsanhan I A",
  },
  {
    barangay_id: 10304,
    municipality_id: 395,
    barangay_name: "Pinagsanhan I B",
  },
  {
    barangay_id: 10297,
    municipality_id: 395,
    barangay_name: "Poblacion I A",
  },
  {
    barangay_id: 10305,
    municipality_id: 395,
    barangay_name: "Poblacion I B",
  },
  {
    barangay_id: 10298,
    municipality_id: 395,
    barangay_name: "Poblacion II A",
  },
  {
    barangay_id: 10306,
    municipality_id: 395,
    barangay_name: "Poblacion II B",
  },
  {
    barangay_id: 10287,
    municipality_id: 395,
    barangay_name: "San Miguel I A",
  },
  {
    barangay_id: 10307,
    municipality_id: 395,
    barangay_name: "San Miguel I B",
  },
  {
    barangay_id: 10290,
    municipality_id: 395,
    barangay_name: "Talipusngo",
  },
  {
    barangay_id: 10308,
    municipality_id: 395,
    barangay_name: "Tulay Kanluran",
  },
  {
    barangay_id: 10299,
    municipality_id: 395,
    barangay_name: "Tulay Silangan",
  },
  {
    barangay_id: 10321,
    municipality_id: 396,
    barangay_name: "Anuling Cerca I",
  },
  {
    barangay_id: 10322,
    municipality_id: 396,
    barangay_name: "Anuling Cerca II",
  },
  {
    barangay_id: 10309,
    municipality_id: 396,
    barangay_name: "Anuling Lejos I",
  },
  {
    barangay_id: 10323,
    municipality_id: 396,
    barangay_name: "Anuling Lejos II",
  },
  {
    barangay_id: 10310,
    municipality_id: 396,
    barangay_name: "Asis I",
  },
  {
    barangay_id: 10324,
    municipality_id: 396,
    barangay_name: "Asis II",
  },
  {
    barangay_id: 10325,
    municipality_id: 396,
    barangay_name: "Asis III",
  },
  {
    barangay_id: 10326,
    municipality_id: 396,
    barangay_name: "Banayad",
  },
  {
    barangay_id: 10327,
    municipality_id: 396,
    barangay_name: "Bukal",
  },
  {
    barangay_id: 10311,
    municipality_id: 396,
    barangay_name: "Galicia I",
  },
  {
    barangay_id: 10328,
    municipality_id: 396,
    barangay_name: "Galicia II",
  },
  {
    barangay_id: 10329,
    municipality_id: 396,
    barangay_name: "Galicia III",
  },
  {
    barangay_id: 10330,
    municipality_id: 396,
    barangay_name: "Miguel Mojica",
  },
  {
    barangay_id: 10312,
    municipality_id: 396,
    barangay_name: "Palocpoc I",
  },
  {
    barangay_id: 10331,
    municipality_id: 396,
    barangay_name: "Palocpoc II",
  },
  {
    barangay_id: 10313,
    municipality_id: 396,
    barangay_name: "Panungyan I",
  },
  {
    barangay_id: 10332,
    municipality_id: 396,
    barangay_name: "Panungyan II",
  },
  {
    barangay_id: 10314,
    municipality_id: 396,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 10315,
    municipality_id: 396,
    barangay_name: "Poblacion II",
  },
  {
    barangay_id: 10316,
    municipality_id: 396,
    barangay_name: "Poblacion III",
  },
  {
    barangay_id: 10317,
    municipality_id: 396,
    barangay_name: "Poblacion IV",
  },
  {
    barangay_id: 10318,
    municipality_id: 396,
    barangay_name: "Poblacion V",
  },
  {
    barangay_id: 10319,
    municipality_id: 396,
    barangay_name: "Poblacion VI",
  },
  {
    barangay_id: 10320,
    municipality_id: 396,
    barangay_name: "Poblacion VII",
  },
  {
    barangay_id: 10333,
    municipality_id: 397,
    barangay_name: "Bagong Karsada",
  },
  {
    barangay_id: 10334,
    municipality_id: 397,
    barangay_name: "Balsahan",
  },
  {
    barangay_id: 10335,
    municipality_id: 397,
    barangay_name: "Bancaan",
  },
  {
    barangay_id: 10336,
    municipality_id: 397,
    barangay_name: "Bucana Malaki",
  },
  {
    barangay_id: 10337,
    municipality_id: 397,
    barangay_name: "Bucana Sasahan",
  },
  {
    barangay_id: 10339,
    municipality_id: 397,
    barangay_name: "Calubcob",
  },
  {
    barangay_id: 10338,
    municipality_id: 397,
    barangay_name: "Capt. C. Nazareno (Pob.)",
  },
  {
    barangay_id: 10341,
    municipality_id: 397,
    barangay_name: "Gomez-Zamora (Pob.)",
  },
  {
    barangay_id: 10342,
    municipality_id: 397,
    barangay_name: "Halang",
  },
  {
    barangay_id: 10343,
    municipality_id: 397,
    barangay_name: "Humbac",
  },
  {
    barangay_id: 10344,
    municipality_id: 397,
    barangay_name: "Ibayo Estacion",
  },
  {
    barangay_id: 10345,
    municipality_id: 397,
    barangay_name: "Ibayo Silangan",
  },
  {
    barangay_id: 10346,
    municipality_id: 397,
    barangay_name: "Kanluran",
  },
  {
    barangay_id: 10347,
    municipality_id: 397,
    barangay_name: "Labac",
  },
  {
    barangay_id: 10348,
    municipality_id: 397,
    barangay_name: "Latoria",
  },
  {
    barangay_id: 10349,
    municipality_id: 397,
    barangay_name: "Mabolo",
  },
  {
    barangay_id: 10350,
    municipality_id: 397,
    barangay_name: "Makina",
  },
  {
    barangay_id: 10351,
    municipality_id: 397,
    barangay_name: "Malainen Bago",
  },
  {
    barangay_id: 10352,
    municipality_id: 397,
    barangay_name: "Malainen Luma",
  },
  {
    barangay_id: 10353,
    municipality_id: 397,
    barangay_name: "Molino",
  },
  {
    barangay_id: 10354,
    municipality_id: 397,
    barangay_name: "Munting Mapino",
  },
  {
    barangay_id: 10355,
    municipality_id: 397,
    barangay_name: "Muzon",
  },
  {
    barangay_id: 10356,
    municipality_id: 397,
    barangay_name: "Palangue 1",
  },
  {
    barangay_id: 10340,
    municipality_id: 397,
    barangay_name: "Palangue 2 & 3",
  },
  {
    barangay_id: 10357,
    municipality_id: 397,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 10358,
    municipality_id: 397,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 10359,
    municipality_id: 397,
    barangay_name: "Santulan",
  },
  {
    barangay_id: 10360,
    municipality_id: 397,
    barangay_name: "Sapa",
  },
  {
    barangay_id: 10361,
    municipality_id: 397,
    barangay_name: "Timalan Balsahan",
  },
  {
    barangay_id: 10362,
    municipality_id: 397,
    barangay_name: "Timalan Concepcion",
  },
  {
    barangay_id: 10363,
    municipality_id: 398,
    barangay_name: "Magdiwang",
  },
  {
    barangay_id: 10364,
    municipality_id: 398,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 10365,
    municipality_id: 398,
    barangay_name: "Salcedo I",
  },
  {
    barangay_id: 10372,
    municipality_id: 398,
    barangay_name: "Salcedo II",
  },
  {
    barangay_id: 10366,
    municipality_id: 398,
    barangay_name: "San Antonio I",
  },
  {
    barangay_id: 10373,
    municipality_id: 398,
    barangay_name: "San Antonio II",
  },
  {
    barangay_id: 10370,
    municipality_id: 398,
    barangay_name: "San Jose I",
  },
  {
    barangay_id: 10374,
    municipality_id: 398,
    barangay_name: "San Jose II",
  },
  {
    barangay_id: 10367,
    municipality_id: 398,
    barangay_name: "San Juan I",
  },
  {
    barangay_id: 10375,
    municipality_id: 398,
    barangay_name: "San Juan II",
  },
  {
    barangay_id: 10368,
    municipality_id: 398,
    barangay_name: "San Rafael I",
  },
  {
    barangay_id: 10369,
    municipality_id: 398,
    barangay_name: "San Rafael II",
  },
  {
    barangay_id: 10376,
    municipality_id: 398,
    barangay_name: "San Rafael III",
  },
  {
    barangay_id: 10377,
    municipality_id: 398,
    barangay_name: "San Rafael IV",
  },
  {
    barangay_id: 10371,
    municipality_id: 398,
    barangay_name: "Santa Rosa I",
  },
  {
    barangay_id: 10378,
    municipality_id: 398,
    barangay_name: "Santa Rosa II",
  },
  {
    barangay_id: 10380,
    municipality_id: 399,
    barangay_name: "Bagbag I",
  },
  {
    barangay_id: 10390,
    municipality_id: 399,
    barangay_name: "Bagbag II",
  },
  {
    barangay_id: 10381,
    municipality_id: 399,
    barangay_name: "Kanluran",
  },
  {
    barangay_id: 10382,
    municipality_id: 399,
    barangay_name: "Ligtong I",
  },
  {
    barangay_id: 10383,
    municipality_id: 399,
    barangay_name: "Ligtong II",
  },
  {
    barangay_id: 10389,
    municipality_id: 399,
    barangay_name: "Ligtong III",
  },
  {
    barangay_id: 10391,
    municipality_id: 399,
    barangay_name: "Ligtong IV",
  },
  {
    barangay_id: 10384,
    municipality_id: 399,
    barangay_name: "Muzon I",
  },
  {
    barangay_id: 10392,
    municipality_id: 399,
    barangay_name: "Muzon II",
  },
  {
    barangay_id: 10385,
    municipality_id: 399,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 10386,
    municipality_id: 399,
    barangay_name: "Sapa I",
  },
  {
    barangay_id: 10393,
    municipality_id: 399,
    barangay_name: "Sapa II",
  },
  {
    barangay_id: 10394,
    municipality_id: 399,
    barangay_name: "Sapa III",
  },
  {
    barangay_id: 10395,
    municipality_id: 399,
    barangay_name: "Sapa IV",
  },
  {
    barangay_id: 10379,
    municipality_id: 399,
    barangay_name: "Silangan I",
  },
  {
    barangay_id: 10396,
    municipality_id: 399,
    barangay_name: "Silangan II",
  },
  {
    barangay_id: 10387,
    municipality_id: 399,
    barangay_name: "Tejeros Convention",
  },
  {
    barangay_id: 10388,
    municipality_id: 399,
    barangay_name: "Wawa I",
  },
  {
    barangay_id: 10397,
    municipality_id: 399,
    barangay_name: "Wawa II",
  },
  {
    barangay_id: 10398,
    municipality_id: 399,
    barangay_name: "Wawa III",
  },
  {
    barangay_id: 10444,
    municipality_id: 400,
    barangay_name: "Acacia",
  },
  {
    barangay_id: 10399,
    municipality_id: 400,
    barangay_name: "Adlas",
  },
  {
    barangay_id: 10445,
    municipality_id: 400,
    barangay_name: "Anahaw I",
  },
  {
    barangay_id: 10449,
    municipality_id: 400,
    barangay_name: "Anahaw II",
  },
  {
    barangay_id: 10400,
    municipality_id: 400,
    barangay_name: "Balite I",
  },
  {
    barangay_id: 10401,
    municipality_id: 400,
    barangay_name: "Balite II",
  },
  {
    barangay_id: 10402,
    municipality_id: 400,
    barangay_name: "Balubad",
  },
  {
    barangay_id: 10450,
    municipality_id: 400,
    barangay_name: "Banaba",
  },
  {
    barangay_id: 10427,
    municipality_id: 400,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 10428,
    municipality_id: 400,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 10429,
    municipality_id: 400,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 10430,
    municipality_id: 400,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 10431,
    municipality_id: 400,
    barangay_name: "Barangay V (Pob.)",
  },
  {
    barangay_id: 10403,
    municipality_id: 400,
    barangay_name: "Batas",
  },
  {
    barangay_id: 10404,
    municipality_id: 400,
    barangay_name: "Biga I",
  },
  {
    barangay_id: 10451,
    municipality_id: 400,
    barangay_name: "Biga II",
  },
  {
    barangay_id: 10405,
    municipality_id: 400,
    barangay_name: "Biluso",
  },
  {
    barangay_id: 10407,
    municipality_id: 400,
    barangay_name: "Bucal",
  },
  {
    barangay_id: 10406,
    municipality_id: 400,
    barangay_name: "Buho",
  },
  {
    barangay_id: 10408,
    municipality_id: 400,
    barangay_name: "Bulihan",
  },
  {
    barangay_id: 10409,
    municipality_id: 400,
    barangay_name: "Cabangaan",
  },
  {
    barangay_id: 10410,
    municipality_id: 400,
    barangay_name: "Carmen",
  },
  {
    barangay_id: 10452,
    municipality_id: 400,
    barangay_name: "Hoyo",
  },
  {
    barangay_id: 10411,
    municipality_id: 400,
    barangay_name: "Hukay",
  },
  {
    barangay_id: 10412,
    municipality_id: 400,
    barangay_name: "Iba",
  },
  {
    barangay_id: 10413,
    municipality_id: 400,
    barangay_name: "Inchican",
  },
  {
    barangay_id: 10446,
    municipality_id: 400,
    barangay_name: "Ipil I",
  },
  {
    barangay_id: 10453,
    municipality_id: 400,
    barangay_name: "Ipil II",
  },
  {
    barangay_id: 10414,
    municipality_id: 400,
    barangay_name: "Kalubkob",
  },
  {
    barangay_id: 10415,
    municipality_id: 400,
    barangay_name: "Kaong",
  },
  {
    barangay_id: 10416,
    municipality_id: 400,
    barangay_name: "Lalaan I",
  },
  {
    barangay_id: 10417,
    municipality_id: 400,
    barangay_name: "Lalaan II",
  },
  {
    barangay_id: 10418,
    municipality_id: 400,
    barangay_name: "Litlit",
  },
  {
    barangay_id: 10419,
    municipality_id: 400,
    barangay_name: "Lucsuhin",
  },
  {
    barangay_id: 10420,
    municipality_id: 400,
    barangay_name: "Lumil",
  },
  {
    barangay_id: 10421,
    municipality_id: 400,
    barangay_name: "Maguyam",
  },
  {
    barangay_id: 10422,
    municipality_id: 400,
    barangay_name: "Malabag",
  },
  {
    barangay_id: 10454,
    municipality_id: 400,
    barangay_name: "Malaking Tatyao",
  },
  {
    barangay_id: 10423,
    municipality_id: 400,
    barangay_name: "Mataas Na Burol",
  },
  {
    barangay_id: 10424,
    municipality_id: 400,
    barangay_name: "Munting Ilog",
  },
  {
    barangay_id: 10447,
    municipality_id: 400,
    barangay_name: "Narra I",
  },
  {
    barangay_id: 10455,
    municipality_id: 400,
    barangay_name: "Narra II",
  },
  {
    barangay_id: 10456,
    municipality_id: 400,
    barangay_name: "Narra III",
  },
  {
    barangay_id: 10425,
    municipality_id: 400,
    barangay_name: "Paligawan",
  },
  {
    barangay_id: 10426,
    municipality_id: 400,
    barangay_name: "Pasong Langka",
  },
  {
    barangay_id: 10432,
    municipality_id: 400,
    barangay_name: "Pooc I",
  },
  {
    barangay_id: 10457,
    municipality_id: 400,
    barangay_name: "Pooc II",
  },
  {
    barangay_id: 10433,
    municipality_id: 400,
    barangay_name: "Pulong Bunga",
  },
  {
    barangay_id: 10434,
    municipality_id: 400,
    barangay_name: "Pulong Saging",
  },
  {
    barangay_id: 10435,
    municipality_id: 400,
    barangay_name: "Puting Kahoy",
  },
  {
    barangay_id: 10436,
    municipality_id: 400,
    barangay_name: "Sabutan",
  },
  {
    barangay_id: 10437,
    municipality_id: 400,
    barangay_name: "San Miguel I",
  },
  {
    barangay_id: 10458,
    municipality_id: 400,
    barangay_name: "San Miguel II",
  },
  {
    barangay_id: 10438,
    municipality_id: 400,
    barangay_name: "San Vicente I",
  },
  {
    barangay_id: 10459,
    municipality_id: 400,
    barangay_name: "San Vicente II",
  },
  {
    barangay_id: 10439,
    municipality_id: 400,
    barangay_name: "Santol",
  },
  {
    barangay_id: 10440,
    municipality_id: 400,
    barangay_name: "Tartaria",
  },
  {
    barangay_id: 10441,
    municipality_id: 400,
    barangay_name: "Tibig",
  },
  {
    barangay_id: 10460,
    municipality_id: 400,
    barangay_name: "Toledo",
  },
  {
    barangay_id: 10442,
    municipality_id: 400,
    barangay_name: "Tubuan I",
  },
  {
    barangay_id: 10461,
    municipality_id: 400,
    barangay_name: "Tubuan II",
  },
  {
    barangay_id: 10462,
    municipality_id: 400,
    barangay_name: "Tubuan III",
  },
  {
    barangay_id: 10443,
    municipality_id: 400,
    barangay_name: "Ulat",
  },
  {
    barangay_id: 10448,
    municipality_id: 400,
    barangay_name: "Yakal",
  },
  {
    barangay_id: 10463,
    municipality_id: 401,
    barangay_name: "Asisan",
  },
  {
    barangay_id: 10464,
    municipality_id: 401,
    barangay_name: "Bagong Tubig",
  },
  {
    barangay_id: 10469,
    municipality_id: 401,
    barangay_name: "Calabuso",
  },
  {
    barangay_id: 10486,
    municipality_id: 401,
    barangay_name: "Dapdap East",
  },
  {
    barangay_id: 10465,
    municipality_id: 401,
    barangay_name: "Dapdap West",
  },
  {
    barangay_id: 10466,
    municipality_id: 401,
    barangay_name: "Francisco",
  },
  {
    barangay_id: 10487,
    municipality_id: 401,
    barangay_name: "Guinhawa North",
  },
  {
    barangay_id: 10467,
    municipality_id: 401,
    barangay_name: "Guinhawa South",
  },
  {
    barangay_id: 10483,
    municipality_id: 401,
    barangay_name: "Iruhin East",
  },
  {
    barangay_id: 10488,
    municipality_id: 401,
    barangay_name: "Iruhin South",
  },
  {
    barangay_id: 10468,
    municipality_id: 401,
    barangay_name: "Iruhin West",
  },
  {
    barangay_id: 10489,
    municipality_id: 401,
    barangay_name: "Kaybagal East",
  },
  {
    barangay_id: 10484,
    municipality_id: 401,
    barangay_name: "Kaybagal North",
  },
  {
    barangay_id: 10470,
    municipality_id: 401,
    barangay_name: "Kaybagal South (Pob.)",
  },
  {
    barangay_id: 10471,
    municipality_id: 401,
    barangay_name: "Mag-Asawang Ilat",
  },
  {
    barangay_id: 10490,
    municipality_id: 401,
    barangay_name: "Maharlika East",
  },
  {
    barangay_id: 10472,
    municipality_id: 401,
    barangay_name: "Maharlika West",
  },
  {
    barangay_id: 10491,
    municipality_id: 401,
    barangay_name: "Maitim 2nd Central",
  },
  {
    barangay_id: 10473,
    municipality_id: 401,
    barangay_name: "Maitim 2nd East",
  },
  {
    barangay_id: 10485,
    municipality_id: 401,
    barangay_name: "Maitim 2nd West",
  },
  {
    barangay_id: 10492,
    municipality_id: 401,
    barangay_name: "Mendez Crossing East",
  },
  {
    barangay_id: 10474,
    municipality_id: 401,
    barangay_name: "Mendez Crossing West",
  },
  {
    barangay_id: 10475,
    municipality_id: 401,
    barangay_name: "Neogan",
  },
  {
    barangay_id: 10493,
    municipality_id: 401,
    barangay_name: "Patutong Malaki North",
  },
  {
    barangay_id: 10476,
    municipality_id: 401,
    barangay_name: "Patutong Malaki South",
  },
  {
    barangay_id: 10477,
    municipality_id: 401,
    barangay_name: "Sambong",
  },
  {
    barangay_id: 10478,
    municipality_id: 401,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 10494,
    municipality_id: 401,
    barangay_name: "Silang Junction North",
  },
  {
    barangay_id: 10479,
    municipality_id: 401,
    barangay_name: "Silang Junction South",
  },
  {
    barangay_id: 10495,
    municipality_id: 401,
    barangay_name: "Sungay North",
  },
  {
    barangay_id: 10480,
    municipality_id: 401,
    barangay_name: "Sungay South",
  },
  {
    barangay_id: 10496,
    municipality_id: 401,
    barangay_name: "Tolentino East",
  },
  {
    barangay_id: 10481,
    municipality_id: 401,
    barangay_name: "Tolentino West",
  },
  {
    barangay_id: 10482,
    municipality_id: 401,
    barangay_name: "Zambal",
  },
  {
    barangay_id: 10497,
    municipality_id: 402,
    barangay_name: "Amaya I",
  },
  {
    barangay_id: 10521,
    municipality_id: 402,
    barangay_name: "Amaya II",
  },
  {
    barangay_id: 10522,
    municipality_id: 402,
    barangay_name: "Amaya III",
  },
  {
    barangay_id: 10523,
    municipality_id: 402,
    barangay_name: "Amaya IV",
  },
  {
    barangay_id: 10524,
    municipality_id: 402,
    barangay_name: "Amaya V",
  },
  {
    barangay_id: 10525,
    municipality_id: 402,
    barangay_name: "Amaya VI",
  },
  {
    barangay_id: 10526,
    municipality_id: 402,
    barangay_name: "Amaya VII",
  },
  {
    barangay_id: 10498,
    municipality_id: 402,
    barangay_name: "Bagtas",
  },
  {
    barangay_id: 10510,
    municipality_id: 402,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 10511,
    municipality_id: 402,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 10512,
    municipality_id: 402,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 10513,
    municipality_id: 402,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 10499,
    municipality_id: 402,
    barangay_name: "Biga",
  },
  {
    barangay_id: 10500,
    municipality_id: 402,
    barangay_name: "Biwas",
  },
  {
    barangay_id: 10501,
    municipality_id: 402,
    barangay_name: "Bucal",
  },
  {
    barangay_id: 10502,
    municipality_id: 402,
    barangay_name: "Bunga",
  },
  {
    barangay_id: 10503,
    municipality_id: 402,
    barangay_name: "Calibuyo",
  },
  {
    barangay_id: 10504,
    municipality_id: 402,
    barangay_name: "Capipisa",
  },
  {
    barangay_id: 10505,
    municipality_id: 402,
    barangay_name: "Daang Amaya I",
  },
  {
    barangay_id: 10527,
    municipality_id: 402,
    barangay_name: "Daang Amaya II",
  },
  {
    barangay_id: 10528,
    municipality_id: 402,
    barangay_name: "Daang Amaya III",
  },
  {
    barangay_id: 10506,
    municipality_id: 402,
    barangay_name: "Halayhay",
  },
  {
    barangay_id: 10507,
    municipality_id: 402,
    barangay_name: "Julugan I",
  },
  {
    barangay_id: 10529,
    municipality_id: 402,
    barangay_name: "Julugan II",
  },
  {
    barangay_id: 10530,
    municipality_id: 402,
    barangay_name: "Julugan III",
  },
  {
    barangay_id: 10531,
    municipality_id: 402,
    barangay_name: "Julugan IV",
  },
  {
    barangay_id: 10532,
    municipality_id: 402,
    barangay_name: "Julugan V",
  },
  {
    barangay_id: 10533,
    municipality_id: 402,
    barangay_name: "Julugan VI",
  },
  {
    barangay_id: 10534,
    municipality_id: 402,
    barangay_name: "Julugan VII",
  },
  {
    barangay_id: 10535,
    municipality_id: 402,
    barangay_name: "Julugan VIII",
  },
  {
    barangay_id: 10520,
    municipality_id: 402,
    barangay_name: "Lambingan",
  },
  {
    barangay_id: 10508,
    municipality_id: 402,
    barangay_name: "Mulawin",
  },
  {
    barangay_id: 10509,
    municipality_id: 402,
    barangay_name: "Paradahan I",
  },
  {
    barangay_id: 10536,
    municipality_id: 402,
    barangay_name: "Paradahan II",
  },
  {
    barangay_id: 10514,
    municipality_id: 402,
    barangay_name: "Punta I",
  },
  {
    barangay_id: 10537,
    municipality_id: 402,
    barangay_name: "Punta II",
  },
  {
    barangay_id: 10515,
    municipality_id: 402,
    barangay_name: "Sahud Ulan",
  },
  {
    barangay_id: 10516,
    municipality_id: 402,
    barangay_name: "Sanja Mayor",
  },
  {
    barangay_id: 10517,
    municipality_id: 402,
    barangay_name: "Santol",
  },
  {
    barangay_id: 10518,
    municipality_id: 402,
    barangay_name: "Tanauan",
  },
  {
    barangay_id: 10519,
    municipality_id: 402,
    barangay_name: "Tres Cruses",
  },
  {
    barangay_id: 10540,
    municipality_id: 403,
    barangay_name: "Bucana",
  },
  {
    barangay_id: 10538,
    municipality_id: 403,
    barangay_name: "Poblacion I",
  },
  {
    barangay_id: 10545,
    municipality_id: 403,
    barangay_name: "Poblacion I A",
  },
  {
    barangay_id: 10539,
    municipality_id: 403,
    barangay_name: "Poblacion II",
  },
  {
    barangay_id: 10541,
    municipality_id: 403,
    barangay_name: "Poblacion III",
  },
  {
    barangay_id: 10542,
    municipality_id: 403,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 10543,
    municipality_id: 403,
    barangay_name: "San Juan I",
  },
  {
    barangay_id: 10546,
    municipality_id: 403,
    barangay_name: "San Juan II",
  },
  {
    barangay_id: 10544,
    municipality_id: 403,
    barangay_name: "Sapang I",
  },
  {
    barangay_id: 10547,
    municipality_id: 403,
    barangay_name: "Sapang II",
  },
  {
    barangay_id: 10556,
    municipality_id: 404,
    barangay_name: "Aguado",
  },
  {
    barangay_id: 10548,
    municipality_id: 404,
    barangay_name: "Cabezas",
  },
  {
    barangay_id: 10549,
    municipality_id: 404,
    barangay_name: "Cabuco",
  },
  {
    barangay_id: 10554,
    municipality_id: 404,
    barangay_name: "Conchu",
  },
  {
    barangay_id: 10550,
    municipality_id: 404,
    barangay_name: "De Ocampo",
  },
  {
    barangay_id: 10557,
    municipality_id: 404,
    barangay_name: "Gregorio",
  },
  {
    barangay_id: 10558,
    municipality_id: 404,
    barangay_name: "Inocencio",
  },
  {
    barangay_id: 10551,
    municipality_id: 404,
    barangay_name: "Lallana",
  },
  {
    barangay_id: 10559,
    municipality_id: 404,
    barangay_name: "Lapidario",
  },
  {
    barangay_id: 10560,
    municipality_id: 404,
    barangay_name: "Luciano",
  },
  {
    barangay_id: 10553,
    municipality_id: 404,
    barangay_name: "Osorio",
  },
  {
    barangay_id: 10555,
    municipality_id: 404,
    barangay_name: "Perez",
  },
  {
    barangay_id: 10552,
    municipality_id: 404,
    barangay_name: "San Agustin (Pob.)",
  },
  {
    barangay_id: 10561,
    municipality_id: 405,
    barangay_name: "Aldiano Olaes",
  },
  {
    barangay_id: 10562,
    municipality_id: 405,
    barangay_name: "Barangay 1 Poblacion",
  },
  {
    barangay_id: 10563,
    municipality_id: 405,
    barangay_name: "Barangay 2 Poblacion",
  },
  {
    barangay_id: 10564,
    municipality_id: 405,
    barangay_name: "Barangay 3 Poblacion",
  },
  {
    barangay_id: 10565,
    municipality_id: 405,
    barangay_name: "Barangay 4 Poblacion",
  },
  {
    barangay_id: 10566,
    municipality_id: 405,
    barangay_name: "Barangay 5 Poblacion",
  },
  {
    barangay_id: 10567,
    municipality_id: 405,
    barangay_name: "Benjamin Tirona",
  },
  {
    barangay_id: 10568,
    municipality_id: 405,
    barangay_name: "Bernardo Pulido",
  },
  {
    barangay_id: 10569,
    municipality_id: 405,
    barangay_name: "Epifanio Malia",
  },
  {
    barangay_id: 10572,
    municipality_id: 405,
    barangay_name: "Fiorello Calimag",
  },
  {
    barangay_id: 10570,
    municipality_id: 405,
    barangay_name: "Francisco De Castro",
  },
  {
    barangay_id: 10571,
    municipality_id: 405,
    barangay_name: "Francisco Reyes",
  },
  {
    barangay_id: 10573,
    municipality_id: 405,
    barangay_name: "Gavino Maderan",
  },
  {
    barangay_id: 10574,
    municipality_id: 405,
    barangay_name: "Gregoria De Jesus",
  },
  {
    barangay_id: 10575,
    municipality_id: 405,
    barangay_name: "Inocencio Salud",
  },
  {
    barangay_id: 10576,
    municipality_id: 405,
    barangay_name: "Jacinto Lumbreras",
  },
  {
    barangay_id: 10577,
    municipality_id: 405,
    barangay_name: "Kapitan Kua",
  },
  {
    barangay_id: 10578,
    municipality_id: 405,
    barangay_name: "Koronel Jose P. Elises",
  },
  {
    barangay_id: 10579,
    municipality_id: 405,
    barangay_name: "Macario Dacon",
  },
  {
    barangay_id: 10580,
    municipality_id: 405,
    barangay_name: "Marcelino Memije",
  },
  {
    barangay_id: 10581,
    municipality_id: 405,
    barangay_name: "Nicolasa Virata",
  },
  {
    barangay_id: 10582,
    municipality_id: 405,
    barangay_name: "Pantaleon Granados",
  },
  {
    barangay_id: 10583,
    municipality_id: 405,
    barangay_name: "Ramon Cruz",
  },
  {
    barangay_id: 10584,
    municipality_id: 405,
    barangay_name: "San Gabriel",
  },
  {
    barangay_id: 10585,
    municipality_id: 405,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 10586,
    municipality_id: 405,
    barangay_name: "Severino De Las Alas",
  },
  {
    barangay_id: 10587,
    municipality_id: 405,
    barangay_name: "Tiniente Tiago",
  },
  {
    barangay_id: 10590,
    municipality_id: 406,
    barangay_name: "Barangay I (Pob.)",
  },
  {
    barangay_id: 10591,
    municipality_id: 406,
    barangay_name: "Barangay II (Pob.)",
  },
  {
    barangay_id: 10592,
    municipality_id: 406,
    barangay_name: "Barangay III (Pob.)",
  },
  {
    barangay_id: 10593,
    municipality_id: 406,
    barangay_name: "Barangay IV (Pob.)",
  },
  {
    barangay_id: 10588,
    municipality_id: 406,
    barangay_name: "Del Carmen",
  },
  {
    barangay_id: 10589,
    municipality_id: 406,
    barangay_name: "Palma",
  },
  {
    barangay_id: 10594,
    municipality_id: 406,
    barangay_name: "San Agustin",
  },
  {
    barangay_id: 10595,
    municipality_id: 406,
    barangay_name: "San Andres",
  },
  {
    barangay_id: 10596,
    municipality_id: 406,
    barangay_name: "San Benito",
  },
  {
    barangay_id: 10597,
    municipality_id: 406,
    barangay_name: "San Gregorio",
  },
  {
    barangay_id: 10598,
    municipality_id: 406,
    barangay_name: "San Ildefonso",
  },
  {
    barangay_id: 10599,
    municipality_id: 406,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 10600,
    municipality_id: 406,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 10601,
    municipality_id: 406,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 10602,
    municipality_id: 406,
    barangay_name: "Santa Rosa",
  },
  {
    barangay_id: 10603,
    municipality_id: 407,
    barangay_name: "Bitin",
  },
  {
    barangay_id: 10604,
    municipality_id: 407,
    barangay_name: "Calo",
  },
  {
    barangay_id: 10605,
    municipality_id: 407,
    barangay_name: "Dila",
  },
  {
    barangay_id: 10606,
    municipality_id: 407,
    barangay_name: "Maitim",
  },
  {
    barangay_id: 10607,
    municipality_id: 407,
    barangay_name: "Masaya",
  },
  {
    barangay_id: 10608,
    municipality_id: 407,
    barangay_name: "Paciano Rizal",
  },
  {
    barangay_id: 10609,
    municipality_id: 407,
    barangay_name: "Puypuy",
  },
  {
    barangay_id: 10616,
    municipality_id: 407,
    barangay_name: "San Agustin (Pob.)",
  },
  {
    barangay_id: 10610,
    municipality_id: 407,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 10611,
    municipality_id: 407,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 10617,
    municipality_id: 407,
    barangay_name: "San Nicolas (Pob.)",
  },
  {
    barangay_id: 10612,
    municipality_id: 407,
    barangay_name: "Santa Cruz",
  },
  {
    barangay_id: 10613,
    municipality_id: 407,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 10614,
    municipality_id: 407,
    barangay_name: "Tagumpay",
  },
  {
    barangay_id: 10615,
    municipality_id: 407,
    barangay_name: "Tranca",
  },
  {
    barangay_id: 10618,
    municipality_id: 408,
    barangay_name: "Biñan",
  },
  {
    barangay_id: 10619,
    municipality_id: 408,
    barangay_name: "Bungahan",
  },
  {
    barangay_id: 10621,
    municipality_id: 408,
    barangay_name: "Canlalay",
  },
  {
    barangay_id: 10622,
    municipality_id: 408,
    barangay_name: "Casile",
  },
  {
    barangay_id: 10623,
    municipality_id: 408,
    barangay_name: "De La Paz",
  },
  {
    barangay_id: 10624,
    municipality_id: 408,
    barangay_name: "Ganado",
  },
  {
    barangay_id: 10626,
    municipality_id: 408,
    barangay_name: "Langkiwa",
  },
  {
    barangay_id: 10627,
    municipality_id: 408,
    barangay_name: "Loma",
  },
  {
    barangay_id: 10628,
    municipality_id: 408,
    barangay_name: "Malaban",
  },
  {
    barangay_id: 10629,
    municipality_id: 408,
    barangay_name: "Malamig",
  },
  {
    barangay_id: 10630,
    municipality_id: 408,
    barangay_name: "Mampalasan",
  },
  {
    barangay_id: 10631,
    municipality_id: 408,
    barangay_name: "Platero",
  },
  {
    barangay_id: 10632,
    municipality_id: 408,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 10634,
    municipality_id: 408,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 10625,
    municipality_id: 408,
    barangay_name: "San Francisco",
  },
  {
    barangay_id: 10635,
    municipality_id: 408,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 10636,
    municipality_id: 408,
    barangay_name: "San Vicente",
  },
  {
    barangay_id: 10638,
    municipality_id: 408,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 10633,
    municipality_id: 408,
    barangay_name: "Santo Niño",
  },
  {
    barangay_id: 10620,
    municipality_id: 408,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 10637,
    municipality_id: 408,
    barangay_name: "Soro-soro",
  },
  {
    barangay_id: 10639,
    municipality_id: 408,
    barangay_name: "Timbao",
  },
  {
    barangay_id: 10640,
    municipality_id: 408,
    barangay_name: "Tubigan",
  },
  {
    barangay_id: 10641,
    municipality_id: 408,
    barangay_name: "Zapote",
  },
  {
    barangay_id: 10642,
    municipality_id: 409,
    barangay_name: "Baclaran",
  },
  {
    barangay_id: 10643,
    municipality_id: 409,
    barangay_name: "Banaybanay",
  },
  {
    barangay_id: 10644,
    municipality_id: 409,
    barangay_name: "Banlic",
  },
  {
    barangay_id: 10658,
    municipality_id: 409,
    barangay_name: "Barangay Dos (Pob.)",
  },
  {
    barangay_id: 10659,
    municipality_id: 409,
    barangay_name: "Barangay Tres (Pob.)",
  },
  {
    barangay_id: 10657,
    municipality_id: 409,
    barangay_name: "Barangay Uno (Pob.)",
  },
  {
    barangay_id: 10646,
    municipality_id: 409,
    barangay_name: "Bigaa",
  },
  {
    barangay_id: 10645,
    municipality_id: 409,
    barangay_name: "Butong",
  },
  {
    barangay_id: 10647,
    municipality_id: 409,
    barangay_name: "Casile",
  },
  {
    barangay_id: 10656,
    municipality_id: 409,
    barangay_name: "Diezmo",
  },
  {
    barangay_id: 10648,
    municipality_id: 409,
    barangay_name: "Gulod",
  },
  {
    barangay_id: 10649,
    municipality_id: 409,
    barangay_name: "Mamatid",
  },
  {
    barangay_id: 10650,
    municipality_id: 409,
    barangay_name: "Marinig",
  },
  {
    barangay_id: 10651,
    municipality_id: 409,
    barangay_name: "Niugan",
  },
  {
    barangay_id: 10652,
    municipality_id: 409,
    barangay_name: "Pittland",
  },
  {
    barangay_id: 10653,
    municipality_id: 409,
    barangay_name: "Pulo",
  },
  {
    barangay_id: 10654,
    municipality_id: 409,
    barangay_name: "Sala",
  },
  {
    barangay_id: 10655,
    municipality_id: 409,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 10660,
    municipality_id: 410,
    barangay_name: "Bagong Kalsada",
  },
  {
    barangay_id: 10661,
    municipality_id: 410,
    barangay_name: "Banadero",
  },
  {
    barangay_id: 10662,
    municipality_id: 410,
    barangay_name: "Banlic",
  },
  {
    barangay_id: 10663,
    municipality_id: 410,
    barangay_name: "Barandal",
  },
  {
    barangay_id: 10690,
    municipality_id: 410,
    barangay_name: "Barangay 1 (Pob.)",
  },
  {
    barangay_id: 10691,
    municipality_id: 410,
    barangay_name: "Barangay 2 (Pob.)",
  },
  {
    barangay_id: 10692,
    municipality_id: 410,
    barangay_name: "Barangay 3 (Pob.)",
  },
  {
    barangay_id: 10693,
    municipality_id: 410,
    barangay_name: "Barangay 4 (Pob.)",
  },
  {
    barangay_id: 10694,
    municipality_id: 410,
    barangay_name: "Barangay 5 (Pob.)",
  },
  {
    barangay_id: 10695,
    municipality_id: 410,
    barangay_name: "Barangay 6 (Pob.)",
  },
  {
    barangay_id: 10696,
    municipality_id: 410,
    barangay_name: "Barangay 7 (Pob.)",
  },
  {
    barangay_id: 10712,
    municipality_id: 410,
    barangay_name: "Batino",
  },
  {
    barangay_id: 10664,
    municipality_id: 410,
    barangay_name: "Bubuyan",
  },
  {
    barangay_id: 10665,
    municipality_id: 410,
    barangay_name: "Bucal",
  },
  {
    barangay_id: 10666,
    municipality_id: 410,
    barangay_name: "Bunggo",
  },
  {
    barangay_id: 10667,
    municipality_id: 410,
    barangay_name: "Burol",
  },
  {
    barangay_id: 10668,
    municipality_id: 410,
    barangay_name: "Camaligan",
  },
  {
    barangay_id: 10669,
    municipality_id: 410,
    barangay_name: "Canlubang",
  },
  {
    barangay_id: 10670,
    municipality_id: 410,
    barangay_name: "Halang",
  },
  {
    barangay_id: 10671,
    municipality_id: 410,
    barangay_name: "Hornalan",
  },
  {
    barangay_id: 10672,
    municipality_id: 410,
    barangay_name: "Kay-Anlog",
  },
  {
    barangay_id: 10674,
    municipality_id: 410,
    barangay_name: "La Mesa",
  },
  {
    barangay_id: 10673,
    municipality_id: 410,
    barangay_name: "Laguerta",
  },
  {
    barangay_id: 10675,
    municipality_id: 410,
    barangay_name: "Lawa",
  },
  {
    barangay_id: 10676,
    municipality_id: 410,
    barangay_name: "Lecheria",
  },
  {
    barangay_id: 10677,
    municipality_id: 410,
    barangay_name: "Lingga",
  },
  {
    barangay_id: 10678,
    municipality_id: 410,
    barangay_name: "Looc",
  },
  {
    barangay_id: 10679,
    municipality_id: 410,
    barangay_name: "Mabato",
  },
  {
    barangay_id: 10713,
    municipality_id: 410,
    barangay_name: "Majada Labas",
  },
  {
    barangay_id: 10680,
    municipality_id: 410,
    barangay_name: "Makiling",
  },
  {
    barangay_id: 10681,
    municipality_id: 410,
    barangay_name: "Mapagong",
  },
  {
    barangay_id: 10682,
    municipality_id: 410,
    barangay_name: "Masili",
  },
  {
    barangay_id: 10683,
    municipality_id: 410,
    barangay_name: "Maunong",
  },
  {
    barangay_id: 10684,
    municipality_id: 410,
    barangay_name: "Mayapa",
  },
  {
    barangay_id: 10708,
    municipality_id: 410,
    barangay_name: "Milagrosa",
  },
  {
    barangay_id: 10685,
    municipality_id: 410,
    barangay_name: "Paciano Rizal",
  },
  {
    barangay_id: 10686,
    municipality_id: 410,
    barangay_name: "Palingon",
  },
  {
    barangay_id: 10687,
    municipality_id: 410,
    barangay_name: "Palo-Alto",
  },
  {
    barangay_id: 10688,
    municipality_id: 410,
    barangay_name: "Pansol",
  },
  {
    barangay_id: 10689,
    municipality_id: 410,
    barangay_name: "Parian",
  },
  {
    barangay_id: 10697,
    municipality_id: 410,
    barangay_name: "Prinza",
  },
  {
    barangay_id: 10698,
    municipality_id: 410,
    barangay_name: "Punta",
  },
  {
    barangay_id: 10699,
    municipality_id: 410,
    barangay_name: "Puting Lupa",
  },
  {
    barangay_id: 10700,
    municipality_id: 410,
    barangay_name: "Real",
  },
  {
    barangay_id: 10702,
    municipality_id: 410,
    barangay_name: "Saimsim",
  },
  {
    barangay_id: 10703,
    municipality_id: 410,
    barangay_name: "Sampiruhan",
  },
  {
    barangay_id: 10704,
    municipality_id: 410,
    barangay_name: "San Cristobal",
  },
  {
    barangay_id: 10705,
    municipality_id: 410,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 10706,
    municipality_id: 410,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 10707,
    municipality_id: 410,
    barangay_name: "Sirang Lupa",
  },
  {
    barangay_id: 10701,
    municipality_id: 410,
    barangay_name: "Sucol",
  },
  {
    barangay_id: 10709,
    municipality_id: 410,
    barangay_name: "Turbina",
  },
  {
    barangay_id: 10710,
    municipality_id: 410,
    barangay_name: "Ulango",
  },
  {
    barangay_id: 10711,
    municipality_id: 410,
    barangay_name: "Uwisan",
  },
  {
    barangay_id: 10714,
    municipality_id: 411,
    barangay_name: "Balayhangin",
  },
  {
    barangay_id: 10715,
    municipality_id: 411,
    barangay_name: "Bangyas",
  },
  {
    barangay_id: 10716,
    municipality_id: 411,
    barangay_name: "Dayap",
  },
  {
    barangay_id: 10717,
    municipality_id: 411,
    barangay_name: "Hanggan",
  },
  {
    barangay_id: 10718,
    municipality_id: 411,
    barangay_name: "Imok",
  },
  {
    barangay_id: 10726,
    municipality_id: 411,
    barangay_name: "Kanluran (Pob.)",
  },
  {
    barangay_id: 10719,
    municipality_id: 411,
    barangay_name: "Lamot 1",
  },
  {
    barangay_id: 10720,
    municipality_id: 411,
    barangay_name: "Lamot 2",
  },
  {
    barangay_id: 10721,
    municipality_id: 411,
    barangay_name: "Limao",
  },
  {
    barangay_id: 10722,
    municipality_id: 411,
    barangay_name: "Mabacan",
  },
  {
    barangay_id: 10723,
    municipality_id: 411,
    barangay_name: "Masiit",
  },
  {
    barangay_id: 10724,
    municipality_id: 411,
    barangay_name: "Paliparan",
  },
  {
    barangay_id: 10725,
    municipality_id: 411,
    barangay_name: "Perez",
  },
  {
    barangay_id: 10728,
    municipality_id: 411,
    barangay_name: "Prinza",
  },
  {
    barangay_id: 10729,
    municipality_id: 411,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 10730,
    municipality_id: 411,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 10727,
    municipality_id: 411,
    barangay_name: "Silangan (Pob.)",
  },
  {
    barangay_id: 10731,
    municipality_id: 412,
    barangay_name: "Anglas",
  },
  {
    barangay_id: 10732,
    municipality_id: 412,
    barangay_name: "Bangco",
  },
  {
    barangay_id: 10733,
    municipality_id: 412,
    barangay_name: "Bukal",
  },
  {
    barangay_id: 10734,
    municipality_id: 412,
    barangay_name: "Bulajo",
  },
  {
    barangay_id: 10735,
    municipality_id: 412,
    barangay_name: "Cansuso",
  },
  {
    barangay_id: 10736,
    municipality_id: 412,
    barangay_name: "Duhat",
  },
  {
    barangay_id: 10737,
    municipality_id: 412,
    barangay_name: "Inao-Awan",
  },
  {
    barangay_id: 10738,
    municipality_id: 412,
    barangay_name: "Kanluran Talaongan",
  },
  {
    barangay_id: 10739,
    municipality_id: 412,
    barangay_name: "Labayo",
  },
  {
    barangay_id: 10740,
    municipality_id: 412,
    barangay_name: "Layasin",
  },
  {
    barangay_id: 10741,
    municipality_id: 412,
    barangay_name: "Layug",
  },
  {
    barangay_id: 10742,
    municipality_id: 412,
    barangay_name: "Mahipon",
  },
  {
    barangay_id: 10743,
    municipality_id: 412,
    barangay_name: "Paowin",
  },
  {
    barangay_id: 10744,
    municipality_id: 412,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 10746,
    municipality_id: 412,
    barangay_name: "Silangan Talaongan",
  },
  {
    barangay_id: 10745,
    municipality_id: 412,
    barangay_name: "Sisilmin",
  },
  {
    barangay_id: 10747,
    municipality_id: 412,
    barangay_name: "Sumucab",
  },
  {
    barangay_id: 10748,
    municipality_id: 412,
    barangay_name: "Tibatib",
  },
  {
    barangay_id: 10749,
    municipality_id: 412,
    barangay_name: "Udia",
  },
  {
    barangay_id: 10750,
    municipality_id: 413,
    barangay_name: "Asana (Pob.)",
  },
  {
    barangay_id: 10751,
    municipality_id: 413,
    barangay_name: "Bacong-Sigsigan",
  },
  {
    barangay_id: 10752,
    municipality_id: 413,
    barangay_name: "Bagong Pag-Asa (Pob.)",
  },
  {
    barangay_id: 10753,
    municipality_id: 413,
    barangay_name: "Balitoc",
  },
  {
    barangay_id: 10754,
    municipality_id: 413,
    barangay_name: "Banaba (Pob.)",
  },
  {
    barangay_id: 10755,
    municipality_id: 413,
    barangay_name: "Batuhan",
  },
  {
    barangay_id: 10756,
    municipality_id: 413,
    barangay_name: "Bulihan",
  },
  {
    barangay_id: 10757,
    municipality_id: 413,
    barangay_name: "Caballero (Pob.)",
  },
  {
    barangay_id: 10758,
    municipality_id: 413,
    barangay_name: "Calumpang (Pob.)",
  },
  {
    barangay_id: 10760,
    municipality_id: 413,
    barangay_name: "Cuebang Bato",
  },
  {
    barangay_id: 10761,
    municipality_id: 413,
    barangay_name: "Damayan (Pob.)",
  },
  {
    barangay_id: 10759,
    municipality_id: 413,
    barangay_name: "Kapatalan",
  },
  {
    barangay_id: 10762,
    municipality_id: 413,
    barangay_name: "Kataypuanan",
  },
  {
    barangay_id: 10763,
    municipality_id: 413,
    barangay_name: "Liyang",
  },
  {
    barangay_id: 10764,
    municipality_id: 413,
    barangay_name: "Maate",
  },
  {
    barangay_id: 10765,
    municipality_id: 413,
    barangay_name: "Magdalo (Pob.)",
  },
  {
    barangay_id: 10766,
    municipality_id: 413,
    barangay_name: "Mayatba",
  },
  {
    barangay_id: 10767,
    municipality_id: 413,
    barangay_name: "Minayutan",
  },
  {
    barangay_id: 10768,
    municipality_id: 413,
    barangay_name: "Salangbato",
  },
  {
    barangay_id: 10769,
    municipality_id: 413,
    barangay_name: "Tunhac",
  },
  {
    barangay_id: 10770,
    municipality_id: 414,
    barangay_name: "Longos",
  },
  {
    barangay_id: 10771,
    municipality_id: 414,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 10772,
    municipality_id: 414,
    barangay_name: "San Juan (Pob.)",
  },
  {
    barangay_id: 10773,
    municipality_id: 415,
    barangay_name: "Bagong Anyo (Pob.)",
  },
  {
    barangay_id: 10774,
    municipality_id: 415,
    barangay_name: "Bayate",
  },
  {
    barangay_id: 10776,
    municipality_id: 415,
    barangay_name: "Bongkol",
  },
  {
    barangay_id: 10775,
    municipality_id: 415,
    barangay_name: "Bubukal",
  },
  {
    barangay_id: 10777,
    municipality_id: 415,
    barangay_name: "Cabuyao",
  },
  {
    barangay_id: 10778,
    municipality_id: 415,
    barangay_name: "Calumpang",
  },
  {
    barangay_id: 10779,
    municipality_id: 415,
    barangay_name: "Culoy",
  },
  {
    barangay_id: 10780,
    municipality_id: 415,
    barangay_name: "Dagatan",
  },
  {
    barangay_id: 10781,
    municipality_id: 415,
    barangay_name: "Daniw",
  },
  {
    barangay_id: 10782,
    municipality_id: 415,
    barangay_name: "Dita",
  },
  {
    barangay_id: 10783,
    municipality_id: 415,
    barangay_name: "Ibabang Palina",
  },
  {
    barangay_id: 10784,
    municipality_id: 415,
    barangay_name: "Ibabang San Roque",
  },
  {
    barangay_id: 10785,
    municipality_id: 415,
    barangay_name: "Ibabang Sungi",
  },
  {
    barangay_id: 10786,
    municipality_id: 415,
    barangay_name: "Ibabang Taykin",
  },
  {
    barangay_id: 10787,
    municipality_id: 415,
    barangay_name: "Ilayang Palina",
  },
  {
    barangay_id: 10788,
    municipality_id: 415,
    barangay_name: "Ilayang San Roque",
  },
  {
    barangay_id: 10789,
    municipality_id: 415,
    barangay_name: "Ilayang Sungi",
  },
  {
    barangay_id: 10790,
    municipality_id: 415,
    barangay_name: "Ilayang Taykin",
  },
  {
    barangay_id: 10791,
    municipality_id: 415,
    barangay_name: "Kanlurang Bukal",
  },
  {
    barangay_id: 10792,
    municipality_id: 415,
    barangay_name: "Laguan",
  },
  {
    barangay_id: 10794,
    municipality_id: 415,
    barangay_name: "Luquin",
  },
  {
    barangay_id: 10795,
    municipality_id: 415,
    barangay_name: "Malabo-Kalantukan",
  },
  {
    barangay_id: 10796,
    municipality_id: 415,
    barangay_name: "Masikap (Pob.)",
  },
  {
    barangay_id: 10797,
    municipality_id: 415,
    barangay_name: "Maslun (Pob.)",
  },
  {
    barangay_id: 10798,
    municipality_id: 415,
    barangay_name: "Mojon",
  },
  {
    barangay_id: 10799,
    municipality_id: 415,
    barangay_name: "Novaliches",
  },
  {
    barangay_id: 10800,
    municipality_id: 415,
    barangay_name: "Oples",
  },
  {
    barangay_id: 10801,
    municipality_id: 415,
    barangay_name: "Pag-Asa (Pob.)",
  },
  {
    barangay_id: 10802,
    municipality_id: 415,
    barangay_name: "Palayan",
  },
  {
    barangay_id: 10793,
    municipality_id: 415,
    barangay_name: "Rizal (Pob.)",
  },
  {
    barangay_id: 10803,
    municipality_id: 415,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 10804,
    municipality_id: 415,
    barangay_name: "Silangang Bukal",
  },
  {
    barangay_id: 10805,
    municipality_id: 415,
    barangay_name: "Tuy-Baanan",
  },
  {
    barangay_id: 10806,
    municipality_id: 416,
    barangay_name: "Anos",
  },
  {
    barangay_id: 10807,
    municipality_id: 416,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 10808,
    municipality_id: 416,
    barangay_name: "Bambang",
  },
  {
    barangay_id: 10809,
    municipality_id: 416,
    barangay_name: "Batong Malake",
  },
  {
    barangay_id: 10810,
    municipality_id: 416,
    barangay_name: "Baybayin (Pob.)",
  },
  {
    barangay_id: 10811,
    municipality_id: 416,
    barangay_name: "Bayog",
  },
  {
    barangay_id: 10812,
    municipality_id: 416,
    barangay_name: "Lalakay",
  },
  {
    barangay_id: 10813,
    municipality_id: 416,
    barangay_name: "Maahas",
  },
  {
    barangay_id: 10819,
    municipality_id: 416,
    barangay_name: "Malinta",
  },
  {
    barangay_id: 10814,
    municipality_id: 416,
    barangay_name: "Mayondon",
  },
  {
    barangay_id: 10815,
    municipality_id: 416,
    barangay_name: "Putho Tuntungin",
  },
  {
    barangay_id: 10816,
    municipality_id: 416,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 10817,
    municipality_id: 416,
    barangay_name: "Tadlak",
  },
  {
    barangay_id: 10818,
    municipality_id: 416,
    barangay_name: "Timugan (Pob.)",
  },
  {
    barangay_id: 10821,
    municipality_id: 417,
    barangay_name: "Barangay Zone I (Pob.)",
  },
  {
    barangay_id: 10822,
    municipality_id: 417,
    barangay_name: "Barangay Zone II (Pob.)",
  },
  {
    barangay_id: 10823,
    municipality_id: 417,
    barangay_name: "Barangay Zone III (Pob.)",
  },
  {
    barangay_id: 10824,
    municipality_id: 417,
    barangay_name: "Barangay Zone IV (Pob.)",
  },
  {
    barangay_id: 10825,
    municipality_id: 417,
    barangay_name: "Barangay Zone V (Pob.)",
  },
  {
    barangay_id: 10826,
    municipality_id: 417,
    barangay_name: "Barangay Zone VI (Pob.)",
  },
  {
    barangay_id: 10827,
    municipality_id: 417,
    barangay_name: "Barangay Zone VII (Pob.)",
  },
  {
    barangay_id: 10828,
    municipality_id: 417,
    barangay_name: "Barangay Zone VIII (Pob.)",
  },
  {
    barangay_id: 10820,
    municipality_id: 417,
    barangay_name: "De La Paz",
  },
  {
    barangay_id: 10829,
    municipality_id: 417,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 10830,
    municipality_id: 417,
    barangay_name: "San Buenaventura",
  },
  {
    barangay_id: 10831,
    municipality_id: 417,
    barangay_name: "San Diego",
  },
  {
    barangay_id: 10832,
    municipality_id: 417,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 10833,
    municipality_id: 417,
    barangay_name: "San Jose",
  },
  {
    barangay_id: 10834,
    municipality_id: 417,
    barangay_name: "San Juan",
  },
  {
    barangay_id: 10835,
    municipality_id: 417,
    barangay_name: "San Luis",
  },
  {
    barangay_id: 10836,
    municipality_id: 417,
    barangay_name: "San Pablo",
  },
  {
    barangay_id: 10837,
    municipality_id: 417,
    barangay_name: "San Pedro",
  },
  {
    barangay_id: 10838,
    municipality_id: 417,
    barangay_name: "San Rafael",
  },
  {
    barangay_id: 10839,
    municipality_id: 417,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 10840,
    municipality_id: 417,
    barangay_name: "San Salvador",
  },
  {
    barangay_id: 10841,
    municipality_id: 417,
    barangay_name: "Santo Domingo",
  },
  {
    barangay_id: 10842,
    municipality_id: 417,
    barangay_name: "Santo Tomas",
  },
  {
    barangay_id: 10843,
    municipality_id: 418,
    barangay_name: "Bagong Silang",
  },
  {
    barangay_id: 10844,
    municipality_id: 418,
    barangay_name: "Balimbingan (Pob.)",
  },
  {
    barangay_id: 10845,
    municipality_id: 418,
    barangay_name: "Balubad",
  },
  {
    barangay_id: 10846,
    municipality_id: 418,
    barangay_name: "Caliraya",
  },
  {
    barangay_id: 10847,
    municipality_id: 418,
    barangay_name: "Concepcion",
  },
  {
    barangay_id: 10848,
    municipality_id: 418,
    barangay_name: "Lewin",
  },
  {
    barangay_id: 10849,
    municipality_id: 418,
    barangay_name: "Maracta (Pob.)",
  },
  {
    barangay_id: 10850,
    municipality_id: 418,
    barangay_name: "Maytalang I",
  },
  {
    barangay_id: 10851,
    municipality_id: 418,
    barangay_name: "Maytalang II",
  },
  {
    barangay_id: 10852,
    municipality_id: 418,
    barangay_name: "Primera Parang (Pob.)",
  },
  {
    barangay_id: 10853,
    municipality_id: 418,
    barangay_name: "Primera Pulo (Pob.)",
  },
  {
    barangay_id: 10854,
    municipality_id: 418,
    barangay_name: "Salac (Pob.)",
  },
  {
    barangay_id: 10857,
    municipality_id: 418,
    barangay_name: "Santo Niño (Pob.)",
  },
  {
    barangay_id: 10855,
    municipality_id: 418,
    barangay_name: "Segunda Parang (Pob.)",
  },
  {
    barangay_id: 10856,
    municipality_id: 418,
    barangay_name: "Segunda Pulo (Pob.)",
  },
  {
    barangay_id: 10858,
    municipality_id: 418,
    barangay_name: "Wawa",
  },
  {
    barangay_id: 10859,
    municipality_id: 419,
    barangay_name: "Amuyong",
  },
  {
    barangay_id: 10866,
    municipality_id: 419,
    barangay_name: "Bayanihan (Pob.)",
  },
  {
    barangay_id: 10860,
    municipality_id: 419,
    barangay_name: "Lambac (Pob.)",
  },
  {
    barangay_id: 10867,
    municipality_id: 419,
    barangay_name: "Libis ng Nayon (Pob.)",
  },
  {
    barangay_id: 10861,
    municipality_id: 419,
    barangay_name: "Lucong",
  },
  {
    barangay_id: 10868,
    municipality_id: 419,
    barangay_name: "Maligaya (Pob.)",
  },
  {
    barangay_id: 10869,
    municipality_id: 419,
    barangay_name: "Masikap (Pob.)",
  },
  {
    barangay_id: 10862,
    municipality_id: 419,
    barangay_name: "Matalatala",
  },
  {
    barangay_id: 10863,
    municipality_id: 419,
    barangay_name: "Nanguma",
  },
  {
    barangay_id: 10864,
    municipality_id: 419,
    barangay_name: "Numero",
  },
  {
    barangay_id: 10865,
    municipality_id: 419,
    barangay_name: "Paagahan",
  },
  {
    barangay_id: 10870,
    municipality_id: 419,
    barangay_name: "Pag-Asa (Pob.)",
  },
  {
    barangay_id: 10872,
    municipality_id: 419,
    barangay_name: "San Antonio",
  },
  {
    barangay_id: 10873,
    municipality_id: 419,
    barangay_name: "San Miguel",
  },
  {
    barangay_id: 10871,
    municipality_id: 419,
    barangay_name: "Sinagtala (Pob.)",
  },
  {
    barangay_id: 10874,
    municipality_id: 420,
    barangay_name: "Alipit",
  },
  {
    barangay_id: 10877,
    municipality_id: 420,
    barangay_name: "Baanan",
  },
  {
    barangay_id: 10878,
    municipality_id: 420,
    barangay_name: "Balanac",
  },
  {
    barangay_id: 10879,
    municipality_id: 420,
    barangay_name: "Bucal",
  },
  {
    barangay_id: 10880,
    municipality_id: 420,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 10881,
    municipality_id: 420,
    barangay_name: "Bungkol",
  },
  {
    barangay_id: 10882,
    municipality_id: 420,
    barangay_name: "Buo",
  },
  {
    barangay_id: 10883,
    municipality_id: 420,
    barangay_name: "Burlungan",
  },
  {
    barangay_id: 10884,
    municipality_id: 420,
    barangay_name: "Cigaras",
  },
  {
    barangay_id: 10897,
    municipality_id: 420,
    barangay_name: "Halayhayin",
  },
  {
    barangay_id: 10885,
    municipality_id: 420,
    barangay_name: "Ibabang Atingay",
  },
  {
    barangay_id: 10886,
    municipality_id: 420,
    barangay_name: "Ibabang Butnong",
  },
  {
    barangay_id: 10887,
    municipality_id: 420,
    barangay_name: "Ilayang Atingay",
  },
  {
    barangay_id: 10888,
    municipality_id: 420,
    barangay_name: "Ilayang Butnong",
  },
  {
    barangay_id: 10889,
    municipality_id: 420,
    barangay_name: "Ilog",
  },
  {
    barangay_id: 10875,
    municipality_id: 420,
    barangay_name: "Malaking Ambling",
  },
  {
    barangay_id: 10890,
    municipality_id: 420,
    barangay_name: "Malinao",
  },
  {
    barangay_id: 10891,
    municipality_id: 420,
    barangay_name: "Maravilla",
  },
  {
    barangay_id: 10876,
    municipality_id: 420,
    barangay_name: "Munting Ambling",
  },
  {
    barangay_id: 10892,
    municipality_id: 420,
    barangay_name: "Poblacion",
  },
  {
    barangay_id: 10893,
    municipality_id: 420,
    barangay_name: "Sabang",
  },
  {
    barangay_id: 10894,
    municipality_id: 420,
    barangay_name: "Salasad",
  },
  {
    barangay_id: 10895,
    municipality_id: 420,
    barangay_name: "Tanawan",
  },
  {
    barangay_id: 10896,
    municipality_id: 420,
    barangay_name: "Tipunan",
  },
  {
    barangay_id: 10898,
    municipality_id: 421,
    barangay_name: "Amonoy",
  },
  {
    barangay_id: 10899,
    municipality_id: 421,
    barangay_name: "Bakia",
  },
  {
    barangay_id: 10901,
    municipality_id: 421,
    barangay_name: "Balanac",
  },
  {
    barangay_id: 10902,
    municipality_id: 421,
    barangay_name: "Balayong",
  },
  {
    barangay_id: 10903,
    municipality_id: 421,
    barangay_name: "Banilad",
  },
  {
    barangay_id: 10904,
    municipality_id: 421,
    barangay_name: "Banti",
  },
  {
    barangay_id: 10905,
    municipality_id: 421,
    barangay_name: "Bitaoy",
  },
  {
    barangay_id: 10906,
    municipality_id: 421,
    barangay_name: "Botocan",
  },
  {
    barangay_id: 10900,
    municipality_id: 421,
    barangay_name: "Bukal",
  },
  {
    barangay_id: 10907,
    municipality_id: 421,
    barangay_name: "Burgos",
  },
  {
    barangay_id: 10908,
    municipality_id: 421,
    barangay_name: "Burol",
  },
  {
    barangay_id: 10909,
    municipality_id: 421,
    barangay_name: "Coralao",
  },
  {
    barangay_id: 10910,
    municipality_id: 421,
    barangay_name: "Gagalot",
  },
  {
    barangay_id: 10911,
    municipality_id: 421,
    barangay_name: "Ibabang Banga",
  },
  {
    barangay_id: 10912,
    municipality_id: 421,
    barangay_name: "Ibabang Bayucain",
  },
  {
    barangay_id: 10913,
    municipality_id: 421,
    barangay_name: "Ilayang Banga",
  },
  {
    barangay_id: 10914,
    municipality_id: 421,
    barangay_name: "Ilayang Bayucain",
  },
  {
    barangay_id: 10915,
    municipality_id: 421,
    barangay_name: "Isabang",
  },
  {
    barangay_id: 10916,
    municipality_id: 421,
    barangay_name: "Malinao",
  },
  {
    barangay_id: 10917,
    municipality_id: 421,
    barangay_name: "May-It",
  },
  {
    barangay_id: 10918,
    municipality_id: 421,
    barangay_name: "Munting Kawayan",
  },
  {
    barangay_id: 10920,
    municipality_id: 421,
    barangay_name: "Olla",
  },
  {
    barangay_id: 10919,
    municipality_id: 421,
    barangay_name: "Oobi",
  },
  {
    barangay_id: 10921,
    municipality_id: 421,
    barangay_name: "Origuel (Pob.)",
  },
  {
    barangay_id: 10922,
    municipality_id: 421,
    barangay_name: "Panalaban",
  },
  {
    barangay_id: 10924,
    municipality_id: 421,
    barangay_name: "Pangil",
  },
  {
    barangay_id: 10923,
    municipality_id: 421,
    barangay_name: "Panglan",
  },
  {
    barangay_id: 10925,
    municipality_id: 421,
    barangay_name: "Piit",
  },
  {
    barangay_id: 10926,
    municipality_id: 421,
    barangay_name: "Pook",
  },
  {
    barangay_id: 10927,
    municipality_id: 421,
    barangay_name: "Rizal",
  },
  {
    barangay_id: 10928,
    municipality_id: 421,
    barangay_name: "San Francisco (Pob.)",
  },
  {
    barangay_id: 10929,
    municipality_id: 421,
    barangay_name: "San Isidro",
  },
  {
    barangay_id: 10930,
    municipality_id: 421,
    barangay_name: "San Miguel (Pob.)",
  },
  {
    barangay_id: 10931,
    municipality_id: 421,
    barangay_name: "San Roque",
  },
  {
    barangay_id: 10932,
    municipality_id: 421,
    barangay_name: "Santa Catalina (Pob.)",
  },
  {
    barangay_id: 10933,
    municipality_id: 421,
    barangay_name: "Suba",
  },
  {
    barangay_id: 10936,
    municipality_id: 421,
    barangay_name: "Talortor",
  },
  {
    barangay_id: 10934,
    municipality_id: 421,
    barangay_name: "Tanawan",
  },
  {
    barangay_id: 10935,
    municipality_id: 421,
    barangay_name: "Taytay",
  },
  {
    barangay_id: 10937,
    municipality_id: 421,
    barangay_name: "Villa Nogales",
  },
  {
    barangay_id: 10938,
    municipality_id: 422,
    barangay_name: "Abo",
  },
  {
    barangay_id: 10939,
    municipality_id: 422,
    barangay_name: "Alibungbungan",
  },
  {
    barangay_id: 10940,
    municipality_id: 422,
    barangay_name: "Alumbrado",
  },
  {
    barangay_id: 10941,
    municipality_id: 422,
    barangay_name: "Balayong",
  },
  {
    barangay_id: 10942,
    municipality_id: 422,
    barangay_name: "Balimbing",
  },
  {
    barangay_id: 10943,
    municipality_id: 422,
    barangay_name: "Balinacon",
  },
  {
    barangay_id: 10944,
    municipality_id: 422,
    barangay_name: "Bambang",
  },
  {
    barangay_id: 10945,
    municipality_id: 422,
    barangay_name: "Banago",
  },
  {
    barangay_id: 10946,
    municipality_id: 422,
    barangay_name: "Banca-banca",
  },
  {
    barangay_id: 10947,
    municipality_id: 422,
    barangay_name: "Bangcuro",
  },
  {
    barangay_id: 10948,
    municipality_id: 422,
    barangay_name: "Banilad",
  },
  {
    barangay_id: 10949,
    municipality_id: 422,
    barangay_name: "Bayaquitos",
  },
  {
    barangay_id: 10950,
    municipality_id: 422,
    barangay_name: "Buboy",
  },
  {
    barangay_id: 10951,
    municipality_id: 422,
    barangay_name: "Buenavista",
  },
  {
    barangay_id: 10952,
    municipality_id: 422,
    barangay_name: "Buhanginan",
  },
  {
    barangay_id: 10953,
    municipality_id: 422,
    barangay_name: "Bukal",
  },
  {
    barangay_id: 10954,
    municipality_id: 422,
    barangay_name: "Bunga",
  },
  {
    barangay_id: 10955,
    municipality_id: 422,
    barangay_name: "Cabuyew",
  },
  {
    barangay_id: 10956,
    municipality_id: 422,
  },
  {
  },
  {