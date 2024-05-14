import Image from 'next/image'

export default function NotFound() {
    return (
        <section
            className="items-stretch flex flex-col justify-between
        is-default font-semibold fadeIn z-50"
        >
            <div className="hero-body mt-2">
                <div className="hero-container">
                    <div className="hero-columns is-vcentered">
                        <div className="hero-column space-y-4 text-xl is-offset-1 landing-caption">
                            <h1
                                className="text-[#363636] font-semibold
                            leading-[1.125] text-5xl is-spaced"
                            >
                                404 - Page Not Found :(
                            </h1>
                            <h2
                                className="text-xl font-light leading-tight 
                        text-[#656565] break-words"
                            >
                                This is not the page you were looking for...
                            </h2>
                        </div>
                        <div className="hero-column text-xl is-offset-1">
                            <figure className="block relative">
                                <Image
                                    src="/cssu_square.png"
                                    alt="CSSU Logo"
                                    width={400}
                                    height={400}
                                    priority
                                    className="block h-auto w-full object-contain"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}