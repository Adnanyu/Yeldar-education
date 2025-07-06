
const About = () => {
    


    return (
        <div className="space-y- container mx-auto mb-10 p-4 6xl:!container lg:max-w-[85vw] bg-gray-100">
            <nav aria-label="breadcrumb" className="mt-10 px-4 text-sm md:px-0 md:mt-10">
            </nav>
            <div className="mt-3 flex items-center justify-center text-center">
                <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">About Us</h1>
            </div>
            <div className="space-y-4"><div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">Who we are:</h1>
                   <p className="text-black">
                        Yildar Education is an educational institution specializing in providing comprehensive consulting services to international students seeking to study at private Turkish universities. The agency strives to facilitate students' educational journeys from the moment they consider studying in Turkey until they settle into academic and living stability. This is achieved by providing comprehensive support at all stages, including choosing the appropriate major, applying to universities, preparing the required documents, and following up after arrival.
                    </p>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">Our vision:</h1>
                    <p className="text-black">
                        To be the first choice for students wishing to study in Türkiye by providing high-quality, reliable, and professional educational services.
                    </p>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">Our Services:</h1>
                        <ul className="text-black list-disc">
                            <li>Free admission guarantee to the best private Turkish universities.</li>
                            <li>Free academic consultations to help you choose the major that best suits your abilities and ambitions.</li>
                            <li>Professional Turkish residency application services to ensure a stable legal status for students throughout their studies.</li>
                            <li>Sworn translation and notarization of all official documents to ensure their acceptance by educational and official authorities in Turkey.</li>
                            <li>Authentication of university degrees after graduation by the relevant authorities to ensure their official accreditation.</li>
                        </ul>
                </div>
            </div>
            </div>
        </div>
                        
    )
}

export default About