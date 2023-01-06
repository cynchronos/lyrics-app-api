const { Injectable, Dependencies, HttpStatus, Query } = require('@nestjs/common');
const { getModelToken } = require('@nestjs/mongoose');
const { Lyrics } = require('../models/LyricsSchema');

@Injectable()
@Dependencies(getModelToken(Lyrics.name))
export class LyricsService {
    constructor(lyricsModel) {
        this.lyrics = lyricsModel;
    }

    async findTitle(query) {
        console.log(query)
        // const data = await this.lyrics.find({
        //     $or: [
        //         { title: { $regex: query, $options: "i" } },
        //         { artist: { $regex: query, $options: "i" } }
        //     ]
        // }).exec();
        // // console.log(data);

        // if (data.length > 0) {
        //     return {
        //         statusCode: HttpStatus.OK.valueOf(),
        //         data: data.map(e => e.title)
        //     }
        // } else {
        //     return {
        //         statusCode: HttpStatus.BAD_REQUEST.valueOf(),
        //         data: "Data tidak ditemukan"
        //     }
        // }
    }

    async findLyrics(title) {
        const data = await this.lyrics.findOne({ title: title }).exec()
        if (data) {
            return {
                statusCode: HttpStatus.OK.valueOf(),
                data: data
            }
        } else {
            return {
                statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                data: "Data tidak ditemukan"
            }
        }
    }

    async store(content) {
        try {
            const data = new this.lyrics(content);

            if (data) {
                await data.save();
                return {
                    statusCode: HttpStatus.OK.valueOf(),
                    data: data,
                    message: "Lyrics Stored"
                }
            } else {
                return {
                    statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                    message: "Input Salah"
                }
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                message: "Input Data Tidak Lengkap"
            }
        }
    }

    async update(title, lyrics) {
        const oldLyrics = await this.lyrics.findOne({ title: title }).exec()

        const data = {
            title: lyrics.title ? lyrics.title : oldLyrics.title,
            artist: lyrics.artist ? lyrics.artist : oldLyrics.artist,
            genre: lyrics.genre ? lyrics.genre : oldLyrics.genre,
            content: lyrics.content ? lyrics.content : oldLyrics.content
        }

        try {
            await this.lyrics.updateOne({ title: title }, { $set: data });

            return {
                statusCode: HttpStatus.OK.valueOf(),
                data: data,
                message: "Lyrics Update"
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                message: "Update Gagal: " + error.message
            }
        }
    }

    async destroy(title){
        try {
            await this.lyrics.deleteOne({title: title})
            return {
                statusCode: HttpStatus.OK.valueOf(),
                message: "Lyrics Deleted"
            }
          } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                message: "Delete Gagal: " + error.message
            }
          }
    }
}
