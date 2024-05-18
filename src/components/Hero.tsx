import heroImage from '../assets/e60-ใต้เครื่อง.jpg'

export function Hero() {
    return (
        <div className='bg-center w-screen h-80 md:h-96 flex flex-col md:flex-row bg-gradient-to-r from-gray-1 to-black-1 justify-center items-center'>
            <div className='px-4 md:px-28 flex flex-col justify-center md:w-1/2 md:text-left items-center md:items-start'>
                <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold py-2 text-neutral-200 font-impact tracking-wide'>EuroAutoParts</h1>
                <h2 className='text-2xl text-center md:text-left md:text-4xl font-notothai text-red-600 font-bold'>อะไหล่รถยนต์ยุโรป</h2>
                <h2 className='text-2xl text-center md:text-left md:text-4xl font-notothai text-red-600 font-bold'>BMW Benz MINI</h2>
                <h3 className='text-xl text-center md:text-left md:text-2xl font-notothai text-yellow-300'>ภายใน ภายนอก ช่วงล่าง</h3>
                <h3 className='text-xl text-center md:text-left md:text-2xl font-notothai text-yellow-300'>ราคาย่อมเยาว์ คุณภาพดี</h3>
                <a href="https://line.me/R/ti/p/@902vqfcp?oat_content=url" target="_blank" rel="noopener noreferrer">
                    <button className='bg-green-line text-white px-1 py-3 rounded-lg mt-2 font-lineseedsans w-72 truncate'>
                        Add LINE Click: <span className='font-bold'>@euroautoparts</span>
                    </button>
                </a>
            </div>
            <div className='hidden md:flex md:w-1/2 w-full h-96 justify-center items-center'>
                <img src={heroImage} className='w-72 h-72 object-contain rounded-lg' alt='Hero' />
            </div>
        </div>
    );
}