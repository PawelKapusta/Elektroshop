import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Laptop Acer Nitro 5 AN515-44 (NH.Q9GEP.00C)",
      category: "Computer",
      image:
        "https://i.pinimg.com/564x/e8/70/4f/e8704f8e742fd43fc0617d47c04862a4.jpg",
      price: 3400,
      quantity: 10,
      rating: 4.5,
      numReviews: 10,
      description:
        "Karta graficzna: \n" +
        "NVIDIA GeForce GTX 1650\n" +
        "Pamięć karty graficznej: 4 GB\n" +
        "Typ pamięci: GDDR5\n" +
        "\n" +
        "Pamięć RAM:\n" +
        "Zainstalowana: 8 GB\n" +
        "Maksymalna: 32 GB\n" +
        "Typ pamięci: GDDR4\n" +
        "Częstotliwość pamięci: 3200MHz\n" +
        "Miejsca na pamięć: 2\n" +
        "\n" +
        "Procesor: \n" +
        "AMD Ryzen 5 4600H\n" +
        "Taktowanie procesora: 3.0GHz/4.0GHz(turbo)\n" +
        "Liczba rdzeni/wątków: 6/12\n" +
        "\n" +
        "Dysk: SSD M.2 PCI-E 512 GB\n" +
        "\n" +
        "Wyświetlacz:\n" +
        'Przekątna ekranu: 15.6"\n' +
        "Rozdzielczość: 1920x1080\n" +
        "Powłoka matrycy: Matowa\n" +
        "Typ matrycy: IPS\n" +
        "Częstotliwość odświeżania: 144Hz\n" +
        "\n" +
        "System operacyjny:\n" +
        "Brak\n" +
        "\n" +
        "Bateria:\n" +
        "Pojemność akumulatora: 55Wh\n" +
        "Czas pracy na baterii: 10h\n" +
        "\n" +
        "Wymiary:\n" +
        "Wysokość [cm]: 2.39\n" +
        "Szerokość [cm]: 36.3\n" +
        "Głębokość [cm]: 25.5\n" +
        "Waga[kg]: 2.2\n",
    },
    {
      name: "Laptop Acer Swift 5 SF514-55T (NX.A35EP.001)\n",
      category: "Computer",
      image:
        "https://i.pinimg.com/564x/e8/70/4f/e8704f8e742fd43fc0617d47c04862a4.jpg",
      price: 4400,
      quantity: 20,
      rating: 4.0,
      numReviews: 10,
      description:
        "Karta graficzna: \n" +
        "Intel Iris Xe\n" +
        "Pamięć karty graficznej: Współdzielona z RAM\n" +
        "Typ pamięci: Nie dotyczy\n" +
        "\n" +
        "Pamięć RAM:\n" +
        "Zainstalowana: 8 GB\n" +
        "Maksymalna: 8 GB\n" +
        "Typ pamięci: DDR4L\n" +
        "Częstotliwość pamięci: 3200MHz\n" +
        "Miejsca na pamięć: 0\n" +
        "\n" +
        "Procesor: \n" +
        "Intel Core i7-1165G7\n" +
        "Taktowanie procesora: 2.7GHz/4.7GHz(turbo)\n" +
        "Liczba rdzeni/wątków: 4/8\n" +
        "\n" +
        "Dysk: SSD M.2 PCI-E 256 GB\n" +
        "\n" +
        "Wyświetlacz:\n" +
        'Przekątna ekranu: 14"\n' +
        "Rozdzielczość: 1920x1080\n" +
        "Powłoka matrycy: Błyszcząca\n" +
        "Typ matrycy: IPS\n" +
        "Częstotliwość odświeżania: 60Hz\n" +
        "\n" +
        "System operacyjny:\n" +
        "Windows 10 Home\n" +
        "Wersja językowa: polska\n" +
        "\n" +
        "Bateria:\n" +
        "Pojemność akumulatora: 56Wh\n" +
        "Czas pracy na baterii: 8h\n" +
        "\n" +
        "Wymiary:\n" +
        "Wysokość [cm]: 1.49\n" +
        "Szerokość [cm]: 31.8\n" +
        "Głębokość [cm]: 20.6\n" +
        "Waga[kg]: 1.06\n",
    },
    {
      name: "Dysk SSD Lexar NM610 500 GB M.2 2280 PCI-E x4 Gen3 NVMe",
      category: "Disc",
      image:
        "https://icons.veryicon.com/png/o/business/a-complete-list-of-commonly-used-linear-icons/ssd-ssd-computer-hard-disk.png",
      price: 249,
      quantity: 0,
      rating: 4.8,
      numReviews: 17,
      description:
        "Format dysku: M.2 2280\n" +
        "Grubość[mm]: 2.25\n" +
        "Pojemność dysku: 500GB\n" +
        "Interfejs: PCI-E X4 Gen3 NVMe\n" +
        "Rodzaj kości pamięci: TLC\n" +
        "Szybkość odczytu: 2100 MB/S\n" +
        "Szybkość zapisu: 1600 MB/S\n" +
        "Odczyt losowy: 188000 IOPS\n" +
        "Zapis losowy: 156000 IOPS\n" +
        "Nominalny czas pracy: 1.5 mln godzin\n" +
        "TBW (Total Bytes Written): 250 TB\n",
    },
    {
      name: "Pamięć Corsair Vengeance RGB PRO, DDR4, 16 GB, 3200MHz, CL16",
      category: "RAM Memory",
      image:
        "https://uxwing.com/wp-content/themes/uxwing/download/08-technology/ram-memory.svg",
      price: 459,
      quantity: 15,
      rating: 4.5,
      numReviews: 14,
      description:
        "Typ pamięci: DDR4\n" +
        "Chłodzenie: Radiator\n" +
        "Pojemność łączna: 16 GB\n" +
        "Liczba modułów: 2\n" +
        "Częstotliwość pracy [MHz]: 3200\n" +
        "Opóźnienie: CL16\n" +
        "Napięcie[V]: 1.35\n",
    },
    {
      name: "Procesor AMD Ryzen 5 3600",
      category: "Processor",
      image:
        "https://www.icon0.com/static2/preview2/stock-photo-cpu-icon-36119.jpg",
      price: 1029,
      quantity: 5,
      rating: 4.5,
      numReviews: 10,
      description:
        "Typ gniazda: Socket AM4\n" +
        "Liczba rdzeni: 6\n" +
        "Liczba wątków: 12\n" +
        "Częstotliwość taktowania procesora [GHz]: 3.6\n" +
        "Częstotliwość maksymalna(turbo)[GHz]: 4.2\n" +
        "Odblokowany mnożnik: Tak\n" +
        "Architektura [bit]: 64\n" +
        "Proces technologiczny [nm]: 7\n" +
        "Mikroarchitektura procesora: Zen 2\n" +
        "TDP [W]: 65\n" +
        "Pamięć podręczna: 32 MB\n",
    },
    {
      name: "Mikrofon SPC Gear SM900T USB (SPG055)\n",
      category: "Microphone",
      image:
        "https://cdn.pixabay.com/photo/2013/07/13/14/07/microphone-162167_960_720.png",
      price: 240,
      quantity: 12,
      rating: 4.5,
      numReviews: 15,
      description:
        "Informacje podstawowe:\n" +
        "Rodzaj: pojemnościowe\n" +
        "Kierunkowość: kardioidalne\n" +
        "Przeznaczenie: gamingowe\n" +
        " \n" +
        "Techniczne:\n" +
        "Komunikacja: USB\n" +
        "Czułość: 135 -dB/mW\n" +
        "Min. pasmo przenoszenia 18 Hz\n" +
        "Max. pasmo przenoszenia 21000 Hz\n" +
        " \n" +
        "Fizyczne:\n" +
        "Kolor: Czarny\n" +
        "Sposób mocowania: Statyw/podstawka\n" +
        "Waga: 1070g\n",
    },
  ],
};
export default data;
