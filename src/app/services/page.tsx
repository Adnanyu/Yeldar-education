'use client';
import { useLanguage } from '../context/LanguageContext';

const ServicesPage = () => {
    const { t } = useLanguage();

    const services = [
        {
            descriptionKey: 'services.freeAdmission',
            imageSource: 'admission.png'
        },
        {
            descriptionKey: 'services.healthInsurance',
            imageSource: 'health-insurance-2.png'
        },
        {
            descriptionKey: 'services.translation',
            imageSource: 'translate.png'
        },
        {
            descriptionKey: 'services.residence',
            imageSource: 'identity-card.png'
        },
        {
            descriptionKey: 'services.tasdik',
            imageSource: 'certif.svg'
        }
    ];

    return (
        <div className="space-y- container mx-auto mb-10 p-4 6xl:!container lg:max-w-[85vw] bg-gray-100">
            <nav aria-label="breadcrumb" className="mt-10 px-4 text-sm md:px-0 md:mt-10">
            </nav>
             <section className="flex flex-col py-8 space-y-9" id="">
                <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-extrabold text-[#242D4B] flex justify-center gap-x-2 flex-col md:flex-row">
                    <span className="">{t('services.title')}</span>
                    <span>{t('services.subtitle')}</span>
                </h2>
                <div className="container mx-auto 6xl:!container lg:max-w-[85vw]">
                    <div>
                    <div className="grid w-full sm:grid-cols-3 gap-4 px-4 md:px-0 grid-cols-2">
                        {services.map((service, index) => (
                        <div className="pb-8" key={index}>
                        <div className="border bg-white text-card-foreground shadow-all group flex h-full w-full cursor-pointer flex-col justify-center rounded-2xl border-none px-3 py-6 shadow-none duration-300 md:my-4 hover:shadow-xl">
                            <div className="flex-col flex h-full items-center justify-center space-y-5 p-0 text-center">
                            <img src={service.imageSource} alt={t(service.descriptionKey)} className="size-16 duration-300 group-hover:scale-105 md:size-36"/>
                            <div className="tracking-tight w-full text-wrap text-base text-gray-500 group-hover:text-primary md:text-2xl font-normal">
                                <h3>{t(service.descriptionKey)}</h3>
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

export default ServicesPage
