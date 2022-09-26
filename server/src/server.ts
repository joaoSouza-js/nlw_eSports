import express from "express"
import {PrismaClient} from '@prisma/client'
import { convertHourStringToMinute } from "./utils/covert-hour-srtring-to-minute"
import { covertMinutesToHoursString } from "./utils/convert-minutes-to-hours-string"
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
    log:['query']
})


app.route('/games').get( async (req, res) => {
    const games = await prisma.game.findMany({
        include:{
            _count:{
                select:{
                    Ads: true
                }
            }
        }
    })

    return res.status(200).json(games) 
})

app.route('/games/:id/ads').post(async (req, res) => {
    const gameId  = req.params.id
    const body = req.body

    const ad = await prisma.ad.create({
        data:{
            gameId,
            hourStart: convertHourStringToMinute(body.hourStart),
            hourEnd: convertHourStringToMinute(body.hourEnd),
            name: body.name,
            discord: body.discord,
            useVoiceChanneel: body.useVoiceChanneel,
            weekDays: body.weekDays.join(','),
            yearsPlaying: body.yearsPlaying
        }
    })

    return res.json(ad)
})

app.route('/games/:id/ads').get(async(req, res) => {
    const gameId = req.params.id
    const ads = await prisma.ad.findMany({
        select:{
            id:true,
            hourStart: true,
            hourEnd: true,
            name: true,
            useVoiceChanneel: true,
            weekDays: true,
            yearsPlaying: true
        },
        where:{
            gameId
        },
        orderBy:{
            createdAt: 'desc'
        }
    })
    const adsFormated = ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: covertMinutesToHoursString(ad.hourStart),
            hourEnd: covertMinutesToHoursString(ad.hourEnd)

        }
    })
    return res.json(adsFormated)
})

app.route('/ads/:id/discord').get(async (req, res) => {
    const adId = req.params.id
    const ad = await prisma.ad.findUniqueOrThrow({
        select:{
            discord: true
        },
        where:{
            id: adId
        }
    })
    return res.json({
        discord: ad.discord
    })
})




app.listen(3000,() => { 
    console.log('i running in http://localhost:3000/ads')
})

