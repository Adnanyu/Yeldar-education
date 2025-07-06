
const Services = () => {
    

const services = [
    {
      title: 'Free Consultation',
      description: 'Free university admission.',
      imageSource: 'admission.png'
    },
    {
      title: 'Major Selection',
      description: 'Health insurance.',
      imageSource: 'health-insurance-2.png'
    },
    {
      title: 'University Admission',
      description: 'Translation and certification services.',
      imageSource: 'translate.png'
  },
  {
    title: 'University Admission',
    description: 'Obtaining and renewing residence permits.',
    imageSource: 'identity-card.png'
  }
  ];
    return (
        <div className="space-y- container mx-auto mb-10 p-4 6xl:!container lg:max-w-[85vw] bg-gray-100">
            <nav aria-label="breadcrumb" className="mt-10 px-4 text-sm md:px-0 md:mt-10">
            </nav>
            {/* <div className="mt-3 flex items-center justify-center text-center">
                <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">Our Services</h1>
            </div> */}
             <section className="flex flex-col py-8 space-y-9" id="">
                <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-extrabold text-[#242D4B] flex justify-center gap-x-2 flex-col md:flex-row">
                    <span className="">Our service</span>
                    <span>If you registered through us</span>
                </h2>
                <div className="container mx-auto 6xl:!container lg:max-w-[85vw]">
                    <div>
                    <div className="grid w-full sm:grid-cols-4 gap-4 px-4 md:px-0 grid-cols-2">
                        {services.map((service, index) => (
                        <div className="pb-8" key={index}>
                        <div className="border bg-white text-card-foreground shadow-all group flex h-full w-full cursor-pointer flex-col justify-center rounded-2xl border-none px-3 py-6 shadow-none duration-300 md:my-4 hover:shadow-xl">
                            <div className="flex-col flex h-full items-center justify-center space-y-5 p-0 text-center">
                            <img src={service.imageSource} alt={service.description} className="size-16 duration-300 group-hover:scale-105 md:size-36"/>
                            <div className="tracking-tight w-full text-wrap text-base text-gray-500 group-hover:text-primary md:text-2xl font-normal">
                                <h3>{service.description}</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                    </div>
                </div>
                </section>
        </div>
                        
    )
}

export default Services