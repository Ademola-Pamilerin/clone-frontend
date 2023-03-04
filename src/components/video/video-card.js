import ImageB from '@/asset/call.jpg'
import Image from 'next/image'

const VideoCard = () => {
    return <div className="w-full h-auto shadow-sm shadow-gray-300 mt-8 flex">
        <div className='relative h-16 w-full'>
            <Image
                alt={"Be a part of the community"}
                src={ImageB} fill className={"w-full object-cover object-top-center"} />
        </div>
        <div className='w-full h-auto text-gray-300 mx-2 flex'>
            <div className='w-2/12 h-10 rounded-full relative overflow-hidden'>
                <Image
                    alt={"Be a part of the community"}
                    src={ImageB} fill className={"w-full object-cover object-top-center"} />
            </div>
            <div>
                <span>
                    ola Dev
                </span>
                <span>20k</span>
            </div>
        </div>
        <div className='w-full flex flex-col items-center justify-evenly h-auto'>
            <div>
                <button>Watch Now</button>
            </div>
            <div>
                <button>Watch Later</button>
            </div>
        </div>
    </div>
}
export default VideoCard