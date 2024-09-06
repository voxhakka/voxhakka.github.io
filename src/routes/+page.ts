import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const audioInfos =  {
        四縣腔: [
            {
                text: "吾先生著新衫，去臺北市个國家音樂廳，聽音樂會",
                audioUrl: "/audio/sixian.1.wav",
            },
            {
                text: "客家族群个六堆運動會會一直延續下去，為臺灣个體育史寫下特別个一頁",
                audioUrl: "/audio/sixian.2.wav",
            },
            {
                text: "新竹在舊年有二十三日超過三十六度，毋知暖化个普遍同麼个有關係",
                audioUrl: "/audio/sixian.3.wav",
            },
            {
                text: "大家恬聲等先生解釋，收成毋好無飯好食个時節愛仰結煞",
                audioUrl: "/audio/sixian.4.wav",
            },
            {
                text: "歸條路吊等長長个花燈，祈求風調雨順，歸屋下人个心願，親像花燈下燒暖个光華",
                audioUrl: "/audio/sixian.5.wav",
            },
        ],
        海陸腔: [],
        大埔腔: [],
        饒平腔: [],
        詔安腔: [],
        南四縣腔: []
    }

	return {
		audioInfos: audioInfos,
        activeTab: "四縣腔" as keyof typeof audioInfos
	};
};