const { Controller, Get, Post, Put, Dependencies, Bind, Param, Query, Body, Delete } =  require('@nestjs/common');
const { LyricsService } =  require('./lyrics.service');

@Controller('lyrics')
@Dependencies(LyricsService)
export class LyricsController {
    constructor(lyricsService){
        this.lyrics = lyricsService;
    }

    @Get()
    @Bind(Query())
    async findAll(query){
        return this.lyrics.findTitle(query.q);
    }

    @Get(':title/content')
    @Bind(Param())
    async findOne(params){
        return this.lyrics.findLyrics(params.title);
    }

    @Post('admin/post')
    @Bind(Body())
    async store(content){
        return this.lyrics.store(content);
    }

    @Put('admin/:title/update')
    @Bind(Param('title'), Body())
    async update(title, content){
        return this.lyrics.update(title, content)
    }

    @Delete('admin/:title/delete')
    @Bind(Param('title'))
    async destroy(title){
        return this.lyrics.destroy(title)
    }
}
