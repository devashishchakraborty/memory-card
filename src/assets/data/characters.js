import { v4 as uuidv4 } from 'uuid';
import tanjiro from "../images/tanjiro.jpg"
import giyuu from "../images/giyuu.jpg"
import gyomei from "../images/gyomei.jpg"
import inosuke from "../images/inosuke.jpg"
import kagaya from "../images/kagaya.jpg"
import muichiro from "../images/muichiro.jpg"
import muzan from "../images/muzan.jpg"
import nezuko from "../images/nezuko.jpg"
import obanai from "../images/obanai.jpg"
import rengoku from "../images/rengoku.jpg"
import shinobu from "../images/shinobu.jpg"
import tengen from "../images/tengen.jpg"
import zenitsu from "../images/zenitsu.jpg"


const characters = [
    {
        id: uuidv4(),
        name: 'Tanjiro Kamado',
        image: tanjiro
    },
    {
        id: uuidv4(),
        name: 'Zenitsu Agatsuma',
        image: zenitsu
    },
    {
        id: uuidv4(),
        name: 'Inosuke Hashibira',
        image: inosuke
    },
    {
        id: uuidv4(),
        name: 'Giyu Tomioka',
        image: giyuu
    },
    {
        id: uuidv4(),
        name: 'Gyomei Himejima',
        image: gyomei
    },
    {
        id: uuidv4(),
        name: 'Kagaya Ubuyashiki',
        image: kagaya
    },
    {
        id: uuidv4(),
        name: 'Muichiro Tokito',
        image: muichiro
    },
    {
        id: uuidv4(),
        name: 'Muzan Kibutsuji',
        image: muzan
    },
    {
        id: uuidv4(),
        name: 'Nezuko Kamado',
        image: nezuko
    },
    {
        id: uuidv4(),
        name: 'Obanai Iguro',
        image: obanai
    },
    {
        id: uuidv4(),
        name: 'Kyōjurō Rengoku',
        image: rengoku
    },
    {
        id: uuidv4(),
        name: 'Shinobu Kochō',
        image: shinobu
    },
    {
        id: uuidv4(),
        name: 'Tengen Uzui',
        image: tengen
    }
]

export default characters;