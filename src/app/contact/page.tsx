
const Universities = () => {
    


    return (
        <div className="space-y- container mx-auto mb-10 p-4 6xl:!container lg:max-w-[85vw] bg-gray-100">
            <nav aria-label="breadcrumb" className="mt-10 px-4 text-sm md:px-0 md:mt-10">
            </nav>
            <div className="mt-3 flex items-center justify-center text-center">
                <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">Contact Us</h1>
            </div>
            <div className="space-y-4"><div className="grid w-full grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
                <div>
                    <p className="text-black">
                        <span className="text-[#242D4B] font-bold">Email: </span><a href="mailto:yeldareducation@gmail.com">yeldareducation@gmail.com</a>.
                    </p>
                    <p className="text-black">
                        <span className="text-[#242D4B] font-bold">WhatsApp: </span> <a className=" text-[#4fce5d]" href="https://api.whatsapp.com/send?phone=905345155355" aria-label="whatsapp" target="_blank">Click here </a>
                    </p>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-6 md:text-2xl text-[#242D4B]">Visit us:</h1>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.63899966758!2d28.940734499999998!3d41.0148399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb0029b3338f%3A0x3001b55bd40b5e7d!2zWUVMREFSIEVEVUNBVElPTiDYp9mE2K_Ysdin2LPYqSDZgdmKINiq2LHZg9mK2Kc!5e1!3m2!1sen!2str!4v1751838500602!5m2!1sen!2str" width="600" height="450" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </div>
        </div>
                        
    )
}

export default Universities