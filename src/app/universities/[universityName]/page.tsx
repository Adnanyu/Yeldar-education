// app/post/[id].js
'use client'
type PageProps = {
  params: {
    universityName: string;
  };
};

export default function Post({ params }: PageProps) {

  const universities = [
     {
    name: "Istanbul Aydin University",
    link: "aydin",
    year_of_establishment: 2003,
    ranking_globally: 1821,
    ranking_locally: 36,
    number_of_specializations: 314,
    prices_start_from: 2700,
    prices_to: 6000,
    logo: 'universities/istanbul_Ay.png'
    },
  {
    name: "Istanbul Bahcesehir University",
    link: "Bahcesehir",
    year_of_establishment: 1998,
    ranking_globally: 1597,
    ranking_locally: 24,
    number_of_specializations: 205,
    prices_start_from: 3500,
      prices_to: 60000,
    logo: 'universities/bau.png' 
  },
  {
    name: "Istanbul Medipol University",
    link: "Medipol",
    year_of_establishment: 2009,
    ranking_globally: 2122,
    ranking_locally: 48,
    number_of_specializations: 125,
    prices_start_from: 2800,
      prices_to: 44000,
    logo: 'universities/medipol.png',
  },
  {
    name: "Biruni University",
    link: "Biruni",
    year_of_establishment: 2014,
    ranking_globally: 2938,
    ranking_locally: 69,
    number_of_specializations: 4,
    prices_start_from: 2750,
    prices_to: 20000,
    logo: 'universities/biruni.png'
  },
  {
    name: "Yeni Yüzyıl University",
    link: "yusyil",
    year_of_establishment: 2009,
    ranking_globally: 10781,
    ranking_locally: 209,
    number_of_specializations: 4,
    prices_start_from: 1400,
    prices_to: 15000,
    logo: 'universities/yuz.png'
  },
  {
    name: "Istinye University",
    link: "istinye",
    year_of_establishment: 2015,
    ranking_globally: 2246,
    ranking_locally: 48,
    number_of_specializations: 4,
    prices_start_from: 2700,
      prices_to: 26400,
    logo: 'universities/istinye.webp'
  },
  {
    name: "Altınbaş University",
    link: "altinbash",
    year_of_establishment: 2017,
    ranking_globally: 4703,
    ranking_locally: 118,
    number_of_specializations: 4,
    prices_start_from: 2000,
      prices_to: 100000,
    logo: 'universities/altinbas.webp'
  },
  {
    name: "Istanbul Atlas University",
    link: "Atlas",
    year_of_establishment: 2018,
    ranking_globally: 7589,
    ranking_locally: 172,
    number_of_specializations: 4,
    prices_start_from: 2025,
      prices_to: 20700,
    logo: 'universities/atlas.webp'
  },
  {
    name: "Istanbul Kent University",
    link: "Kent",
    year_of_establishment: 2016,
    ranking_globally: 10170,
    ranking_locally: 206,
    number_of_specializations: 4,
    prices_start_from: 1600,
    prices_to: 35000,
    logo: 'universities/kent.png',
  },
//   {
//     name: "Altınbaş University",
//     year_of_establishment: 1997,
//     ranking_globally: 3105,
//     ranking_locally: 73,
//     number_of_specializations: 4,
//     prices_start_from: 0,
//     prices_to: 14000
//   },
  {
    name: "Istanbul Gelişim University",
    link: "Gelisim",
    year_of_establishment: 2008,
    ranking_globally: 4165,
    ranking_locally: 96,
    number_of_specializations: 4,
    prices_start_from: 0,
      prices_to: 20000,
    logo: 'universities/gelisim.webp'
  },
  {
    name: "Istanbul Kultur University",
    link: "Kultur",
    year_of_establishment: 1997,
    ranking_globally: 6601,
    ranking_locally: 155,
    number_of_specializations: 4,
    prices_start_from: 1925,
      prices_to: 8500,
    logo: 'universities/kultur.webp'
  },
  {
    name: "Istanbul Nisantasi University",
    link: "Nisantasi",
    year_of_establishment: 2009,
    ranking_globally: 4004,
    ranking_locally: 91,
    number_of_specializations: 4,
    prices_start_from: 0,
      prices_to: 18500,
    logo: 'universities/nisantasi.webp'
  },
  {
    name: "Beykent University",
    link: "Beykent",
    year_of_establishment: 1997,
    ranking_globally: 7490,
    ranking_locally: 170,
    number_of_specializations: 4,
    prices_start_from: 1,
      prices_to: 12100,
    logo: 'universities/beykent.webp'
  },
  {
    name: "Beykos University",
    link: "Beykos",
    year_of_establishment: 2016,
    ranking_globally: 14501,
    ranking_locally: 237,
    number_of_specializations: 58,
    prices_start_from: 1900,
    prices_to: 3100,
    logo: 'universities/beykoz.webp'
  },
  {
    name: "Istanbul Bilgi University",
    link: "Bilgi",
    year_of_establishment: 1996,
    ranking_globally: 6552,
    ranking_locally: 153,
    number_of_specializations: 4,
    prices_start_from: 2000,
      prices_to: 18000,
    logo: 'universities/bilgi.webp'
  }
];


  const { universityName } = params
  const university = universities.find(uni => uni.link.toLocaleLowerCase().includes(universityName.toLocaleLowerCase()))
  return (
    <div className="space-y-4 h-full">
      <div className="shadow-all shadow-all group rounded-2xl bg-white p-3 duration-300 md:w-1/2 mx-auto my-4">
                        <div className="relative">
                            <div className=" overflow-hidden rounded-full border-4 bg-white p-2 md:size-28 ">
                                <img alt="alt" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="size-full object-contain" src={`../${university?.logo}`} style={{ color: 'transparent' }}/>
                            </div>
                        </div>
                        <div className="mt-8 p-4 text-start md:mt-16">
                            <div className="flex items-center justify-between">
                                    <h2 className="line-clamp-1 text-base font-bold text-[#242D4B] sm:text-xl md:text-2xl">{ university?.name }</h2>
                                </div>
                                <section className="space-y-3 pt-3">
                                    <div className="grid w-full grid-cols-2 gap-2 text-center text-xs text-gray-800 md:grid-cols-4 md:items-center md:text-sm">
                                        <div className="flex flex-col items-center rounded-lg bg-gray-400/10 p-1 md:space-y-4 md:p-2">
                                            <span className="text-primary">Founding year</span>
                                            <span className="text-[#242D4B] font-bold">{ university?.year_of_establishment }</span>
                                        </div>
                                        <div className="flex flex-col items-center rounded-lg bg-gray-400/10 p-1 md:space-y-4 md:p-2">
                                            <span className="text-wrap text-primary">World ranking</span>
                                            <span className="text-[#242D4B] font-bold">{ university?.ranking_globally }</span></div>
                                        <div className="flex flex-col items-center rounded-lg bg-gray-400/10 p-1 md:space-y-4 md:p-2">
                                            <span className="text-primary">Local ranking</span>
                                            <span className="text-[#242D4B] font-bold">{ university?.ranking_locally }</span>
                                        </div><div className="flex flex-col items-center rounded-lg bg-gray-400/10 p-1 md:space-y-4 md:p-2">
                                            <span className="text-primary">Number of majors</span><span className="text-[#242D4B] font-bold">{ university?.number_of_specializations }</span>
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-col justify-between gap-4 rounded-lg bg-gray-400/10 p-1.5 text-xs text-gray-800 md:flex-row md:p-3 md:text-sm">
                                        <span className="text-secondary">Prices starting</span>
                                        <div className="flex justify-between gap-4">
                                            <div className="flex items-center gap-2">
                                                <span >From</span><span className=" text-[#242D4B] font-bold">{ university?.prices_start_from }</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span>To</span>
                                                <span className=" text-[#242D4B] font-bold">{ university?.prices_to }</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="mt-2 flex justify-center">
                                    <button className="text-white font-bold inline-flex items-center justify-center gap-4 rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2  [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#242D4B] text-primary-foreground hover:scale-x-105 duration-300 h-10 px-4 py-2 group-hover:bg-[#242D4B]">Register Now</button>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

