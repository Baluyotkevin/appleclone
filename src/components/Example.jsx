import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Example = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })
    }, [])

  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <div id="chip" className='flex-center w-full my-20'>
                <img src={chipImg} alt="chip" width={180} height={180} />
            </div>

            <div className="flex flex-col items-center">
                <h2 className="hiw-title">
                    A17 Pro chip.
                    <br /> A monster win for gaming
                </h2>

                <p className="hiw-subtitle">
                    It's here. The biggest redesign in the history of Apple GPUs.
                </p>
            </div>

            <div className="mt-10 md:mt-20 mb-14">
                <div className="relative h-full flex-center">
                    <div className="overflow-hidden">
                        <img src={frameImg} className='bg-transparent relative z-10' alt="frame" />
                    </div>
                    <div className="hiw-video">
                        <video className='pointer-events-none' playsInline preload="none" autoPlay muted ref={videoRef}>
                            <source src={frameVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <p className='text-gray font-semibold text-center mt-3'>Honkai: Star Rail</p>

                <div className="hiw-text-container">
                            <div className="flex flex-1 flex-col justify-center">
                                <p className='hiw-text g_fadeIn'>iPhone 15 Pro is {' '}
                                    <span className='text-white'>the first iPhone to feature an aerospace-grade titanium design</span>,
                                    using the same alloy that spacecrafts use for missions to Mars.
                                </p>
                            </div>

                            <div className="flex-1 flex-center">
                                <p className='feature-text g_text'>Titanium has one of the best strength-to-wait ratios of any metal, making these our {' '}
                                    <span className='text-white'>lightest Pro models ever</span>.
                                    You'll notice the difference the moment you pick one up.
                                </p>
                            </div>
                        </div>
            </div>
        </div>
    </section>
  )
}

export default Example