import { text } from 'stream/consumers';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const audioInfos = {
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
        海陸腔: [
            {
                text: "男女平等个時代，平平做得受教育",
                audioUrl: "/audio/hailu.1.wav"
            },
            {
                text: "解決三餐無落著个問題",
                audioUrl: "/audio/hailu.2.wav"
            },
            {
                text: "老人共餐个主要精神應當斯係做伴",
                audioUrl: "/audio/hailu.3.wav"
            },
            {
                text: "連發病都無人知",
                audioUrl: "/audio/hailu.4.wav"
            },
            {
                text: "有機會渡你兜參加新丁粄節好無",
                audioUrl: "/audio/hailu.5.wav"
            },
        ],
        大埔腔: [
            {
                text: "客家山城乜跈緊鬧熱䟘來咧",
                audioUrl: "/audio/dapu.1.wav"
            },
            {
                text: "隔壁阿伯食酒醉，騎車仔無注意椊下去圳溝肚，聽人講當嚴重",
                audioUrl: "/audio/dapu.2.wav"
            },
            {
                text: "叔姆屋下窗門項个塵灰當賁，愛撥畀淨來啊",
                audioUrl: "/audio/dapu.3.wav"
            },
            {
                text: "雨落忒多做大水，無半息雨做天旱，實在已難耐",
                audioUrl: "/audio/dapu.4.wav"
            },
            {
                text: "牛眼拗毋著，同樹椏仔墜下來較好拗",
                audioUrl: "/audio/dapu.5.wav"
            },
        ],
        饒平腔: [
            {
                text: "頭擺匱人，戴个毋係菅草屋，个創商品哦",
                audioUrl: "/audio/raoping.1.wav"
            },
            {
                text: "天時毋好溼氣重，樹仔當遽歿忒",
                audioUrl: "/audio/raoping.2.wav"
            },
            {
                text: "電鑊仔个電線係燒忒，該斯危險哩",
                audioUrl: "/audio/raoping.3.wav"
            },
            {
                text: "佢生來矮頓矮頓，又專門講該阿里不答个話，敢聽得",
                audioUrl: "/audio/raoping.4.wav"
            },
            {
                text: "食到肚扐扐仔个阿叔在藤椅項坐等啄目睡",
                audioUrl: "/audio/raoping.5.wav"
            }
        ],
        詔安腔: [
            {
                text: "歇熱个時務，阿松歸屋下轉去在客莊个老屋",
                audioUrl: "/audio/zhaoan.1.wav"
            },
            {
                text: "𠊎先去坐公車，下車過行斑馬線，就到了",
                audioUrl: "/audio/zhaoan.2.wav"
            },
            {
                text: "隔壁阿伯食酒醉，騎車仔無注意椊下去圳溝肚，聽人講當嚴重",
                audioUrl: "/audio/zhaoan.3.wav"
            },
            {
                text: "客家族群个六堆運動會會緊辦等下去，為臺灣个體育史寫下特別个一頁",
                audioUrl: "/audio/zhaoan.4.wav"
            },
            {
                text: "大家恬聲等先生解釋，收成毋好無飯好食个時節愛仰結煞",
                audioUrl: "/audio/zhaoan.5.wav"
            }
        ],
        南四縣腔: [
            {
                text: "吾先生著新衫，去臺北市个國家音樂廳，聽音樂會",
                audioUrl: "/audio/nansixian.1.wav",
            },
            {
                text: "客家族群个六堆運動會會一直延續下去，為臺灣个體育史寫下特別个一頁",
                audioUrl: "/audio/nansixian.2.wav",
            },
            {
                text: "新竹在舊年有二十三日超過三十六度，毋知暖化个普遍同麼个有關係",
                audioUrl: "/audio/nansixian.3.wav",
            },
            {
                text: "大家恬聲等先生解釋，收成毋好無飯好食个時節愛仰結煞",
                audioUrl: "/audio/nansixian.4.wav",
            },
            {
                text: "歸條路吊等長長个花燈，祈求風調雨順，歸屋下人个心願，親像花燈下燒暖个光華",
                audioUrl: "/audio/nansixian.5.wav",
            },
        ]
    }

    return {
        audioInfos: audioInfos,
        activeTab: "四縣腔" as keyof typeof audioInfos,
        dialectNameMap: {
            四縣腔: "四縣腔 Sixian",
            海陸腔: "海陸腔 Hailu",
            大埔腔: "大埔腔 Dapu",
            饒平腔: "饒平腔 Raoping",
            詔安腔: "詔安腔 Zhaoan",
            南四縣腔: "南四縣腔 Nansixian"
        }
    };
};