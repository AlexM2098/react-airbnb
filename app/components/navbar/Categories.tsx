'use client';

import Container from "../Container";
import {TbBeach, TbMountain, TbPool} from "react-icons/tb"
import{GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from "react-icons/gi"
import {MdOutlineVilla} from "react-icons/md"
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import {LiaSkiingSolid} from "react-icons/lia" 
import {BsSnow} from "react-icons/bs"
import {MdDiamond} from "react-icons/md"

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'Immerse yourself in coastal bliss, just a stone’s throw away from the sun-kissed beach.'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'Experience the rustic charm of a property adorned with iconic windmills.'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'Step into a sleek, contemporary oasis equipped with all the modern luxuries.'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'Escape to a tranquil retreat nestled amidst the rolling hills and open fields of the countryside.'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'Revel in a tropical paradise featuring a sparkling pool for your ultimate relaxation.'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'Find your own slice of paradise on a secluded island getaway.'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'Indulge in the serene beauty of a lakeside retreat, perfect for fishing and boating adventures.'
    },
    {
        label: 'Skiing',
        icon: LiaSkiingSolid,
        description: 'Hit the slopes from the comfort of a property designed for ski enthusiasts.'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'Live like royalty with a stay in a majestic castle, steeped in history and grandeur.'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'Unplug and connect with nature, featuring camping facilities and outdoor activities.'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'Experience the icy allure of a snow-clad property near the Arctic Circle.'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'Discover a unique subterranean sanctuary, nestled within the heart of a natural cave.'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'Soak up the otherworldly beauty of a desert haven, complete with all the modern comforts.'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'Relish the rustic coziness of a beautifully converted barn, perfect for a country escape.'
    },
    {
        label: 'Lux',
        icon: MdDiamond,
        description: 'Indulge in unparalleled opulence with a stay in this luxurious property.'
    }
]

const Categories = () => {
    const params = useSearchParams(); 
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if(!isMainPage){
        return null;

    }
    return ( 
        <Container>
            <div
            className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto

            ">
            {categories.map((item)=> (
                <CategoryBox
                key = {item.label}
                label={item.label}
                selected={category === item.label}
                icon={item.icon}
                />
            ))}
            </div>

        </Container>
    );
}
 
export default Categories;