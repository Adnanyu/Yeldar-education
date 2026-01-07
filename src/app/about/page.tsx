'use client';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <div className="space-y- container mx-auto mb-10 p-4 6xl:!container lg:max-w-[85vw] bg-gray-100">
            <nav aria-label="breadcrumb" className="mt-10 px-4 text-sm md:px-0 md:mt-10">
            </nav>
            <div className="mt-3 flex items-center justify-center text-center">
                <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">{t('about.title')}</h1>
            </div>
            <div className="space-y-4"><div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">{t('about.whoWeAre')}</h1>
                   <p className="text-black">
                        {t('about.whoWeAreText')}
                    </p>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">{t('about.ourVision')}</h1>
                    <p className="text-black">
                        {t('about.ourVisionText')}
                    </p>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">{t('about.ourServices')}</h1>
                        <ul className="text-black list-disc rtl:pr-4 ltr:pl-4">
                            <li>{t('about.service1')}</li>
                            <li>{t('about.service2')}</li>
                            <li>{t('about.service3')}</li>
                            <li>{t('about.service4')}</li>
                            <li>{t('about.service5')}</li>
                        </ul>
                </div>
            </div>
            </div>
        </div>

    )
}

export default About
